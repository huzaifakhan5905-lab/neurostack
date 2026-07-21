import supplementDatabase from './data.js';

// DOM Elements
const resultsGrid = document.getElementById('results-grid');
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const categoryFilters = document.getElementById('category-filters');
const stackCountIndicator = document.getElementById('stack-count');
const stackDrawer = document.getElementById('stack-drawer');
const btnOpenDrawer = document.getElementById('btn-open-drawer');
const btnCloseDrawer = document.getElementById('btn-close-drawer');
const stackItemsContainer = document.getElementById('stack-items-container');
const btnCopyStack = document.getElementById('btn-copy-stack');
const btnShareStack = document.getElementById('btn-share-stack');
const btnClearStack = document.getElementById('btn-clear-stack');

// Modals
const detailsModal = document.getElementById('details-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

// Application State
let activeStack = JSON.parse(localStorage.getItem('neuroStackActive')) || [];
let currentCategory = 'all';
let searchQuery = '';

// SECURITY EDIT: Hardcode your affiliate tags here.
// Regular visitors cannot view or edit these tags since they are compiled inside app.js
const affiliateConfig = {
    amazonTag: 'neurostack-21',  // Put your Amazon Associate ID here
    iherbTag: 'QBK5316'          // Put your iHerb Rewards Code here
};

// Initialize App
function init() {
    setupEventListeners();
    updateStackUI();
    renderSupplements();
    parseSharedStackUrl();
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearch);
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.style.display = 'none';
        }
    });

    // Category Filters
    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-pill')) {
            document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderSupplements();
        }
    });

    // Stack Drawer Toggle
    btnOpenDrawer.addEventListener('click', () => stackDrawer.classList.add('open'));
    btnCloseDrawer.addEventListener('click', () => stackDrawer.classList.remove('open'));

    // Stack Actions
    btnCopyStack.addEventListener('click', copyStackToClipboard);
    btnShareStack.addEventListener('click', generateShareLink);
    btnClearStack.addEventListener('click', clearStack);

    // Close Details Modal
    const resetSeoTitle = () => {
        detailsModal.style.display = 'none';
        document.title = "NEURO-STACK // Biohacker's Supplement & Research Engine";
    };
    modalClose.addEventListener('click', resetSeoTitle);

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target === detailsModal) resetSeoTitle();
    });
}

// Render Supplement Cards in Grid
function renderSupplements() {
    resultsGrid.innerHTML = '';
    
    const filtered = supplementDatabase.filter(supp => {
        const matchesCategory = currentCategory === 'all' || supp.category === currentCategory;
        const matchesSearch = searchQuery === '' || 
            supp.name.toLowerCase().includes(searchQuery) ||
            supp.chemicalName.toLowerCase().includes(searchQuery) ||
            supp.category.toLowerCase().includes(searchQuery) ||
            supp.goals.some(goal => goal.toLowerCase().includes(searchQuery));
        
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        resultsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fa-solid fa-flask-vial" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem; display: block;"></i>
                No supplements found matching your search. Try searching for "Focus", "Sleep", or "Longevity".
            </div>
        `;
        return;
    }

    filtered.forEach(supp => {
        const isInStack = activeStack.some(item => item.id === supp.id);
        const scoreClass = supp.evidenceScore.startsWith('A') ? 'score-a' : supp.evidenceScore.startsWith('B') ? 'score-b' : 'score-c';
        
        const card = document.createElement('div');
        card.className = 'supp-card';
        const suppImage = supp.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80';
        card.innerHTML = `
            <div class="card-banner">
                <img src="${suppImage}" alt="${supp.name}" class="card-banner-img" loading="lazy" />
            </div>
            <div class="card-header">
                <div class="card-title-group">
                    <h3>${supp.name}</h3>
                    <div class="chemical-name">${supp.chemicalName}</div>
                </div>
                <span class="score-badge ${scoreClass}" title="Scientific Evidence Strength">${supp.evidenceScore} Evidence</span>
            </div>
            
            <div class="card-body">
                <p class="supp-desc">${supp.shortDescription}</p>
                <div class="tags-container">
                    ${supp.goals.map(goal => `<span class="goal-tag"># ${goal}</span>`).join('')}
                </div>
                <div class="dosage-info">
                    <i class="fa-solid fa-clock-rotate-left"></i> ${supp.recommendedDosage}
                </div>
            </div>
            
            <div class="card-actions">
                <button class="btn-primary btn-add-stack" data-id="${supp.id}">
                    ${isInStack ? '<i class="fa-solid fa-check"></i> Added to Stack' : '<i class="fa-solid fa-plus"></i> Add to Stack'}
                </button>
                <div class="buy-buttons">
                    <a href="${getAmazonLink(supp)}" target="_blank" class="btn-affiliate amazon">
                        <i class="fa-brands fa-amazon"></i> Amazon
                    </a>
                    <a href="${getIherbLink(supp)}" target="_blank" class="btn-affiliate iherb">
                        <i class="fa-solid fa-leaf"></i> iHerb
                    </a>
                </div>
            </div>
        `;

        // Card body click opens detailed research view (excluding buttons)
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.card-actions')) {
                openDetailedResearch(supp);
            }
        });

        // Add to stack handler
        card.querySelector('.btn-add-stack').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleStack(supp);
        });

        resultsGrid.appendChild(card);
    });
}

// Generate Affiliate URLs
function getAmazonLink(supp) {
    const query = encodeURIComponent(supp.amazonQuery);
    const tag = affiliateConfig.amazonTag ? `&tag=${affiliateConfig.amazonTag}` : '';
    return `https://www.amazon.com/s?k=${query}${tag}`;
}

function getIherbLink(supp) {
    const query = encodeURIComponent(supp.iherbQuery);
    const tag = affiliateConfig.iherbTag ? `&rcode=${affiliateConfig.iherbTag}` : '';
    return `https://www.iherb.com/search?kw=${query}${tag}`;
}

// Handle Search Inputs and Autocomplete Suggestions
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    renderSupplements();

    if (searchQuery.length < 2) {
        searchSuggestions.style.display = 'none';
        return;
    }

    // Generate suggestions based on goals, supplement name, or category
    const suggestions = [];
    
    // Add matching supplements
    supplementDatabase.forEach(supp => {
        if (supp.name.toLowerCase().includes(searchQuery)) {
            suggestions.push({ text: supp.name, type: 'Supplement' });
        }
    });

    // Add matching goals
    const goalsSet = new Set();
    supplementDatabase.forEach(supp => {
        supp.goals.forEach(goal => {
            if (goal.toLowerCase().includes(searchQuery)) {
                goalsSet.add(goal);
            }
        });
    });
    goalsSet.forEach(goal => suggestions.push({ text: goal, type: 'Goal' }));

    if (suggestions.length === 0) {
        searchSuggestions.style.display = 'none';
        return;
    }

    searchSuggestions.innerHTML = '';
    suggestions.slice(0, 5).forEach(sugg => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <span>${sugg.text}</span>
            <span class="suggestion-type">${sugg.type}</span>
        `;
        item.addEventListener('click', () => {
            searchInput.value = sugg.text;
            searchQuery = sugg.text.toLowerCase();
            searchSuggestions.style.display = 'none';
            renderSupplements();
        });
        searchSuggestions.appendChild(item);
    });
    searchSuggestions.style.display = 'block';
}

// Stack Logic
function toggleStack(supp) {
    const index = activeStack.findIndex(item => item.id === supp.id);
    if (index === -1) {
        activeStack.push(supp);
        showToast(`${supp.name} added to stack!`, 'success');
    } else {
        activeStack.splice(index, 1);
        showToast(`${supp.name} removed from stack!`, 'info');
    }
    
    localStorage.setItem('neuroStackActive', JSON.stringify(activeStack));
    updateStackUI();
    renderSupplements(); // Redraw button states
}

function updateStackUI() {
    stackCountIndicator.textContent = activeStack.length;
    
    if (activeStack.length === 0) {
        stackItemsContainer.innerHTML = `
            <div class="stack-empty">
                <i class="fa-solid fa-box-open" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                Your stack is empty. Add compounds below to build your custom formula.
            </div>
        `;
        checkStackSynergies();
        return;
    }

    stackItemsContainer.innerHTML = '';
    activeStack.forEach(supp => {
        const item = document.createElement('div');
        item.className = 'stack-item';
        item.innerHTML = `
            <div class="stack-item-info">
                <h4>${supp.name}</h4>
                <p>${supp.recommendedDosage}</p>
            </div>
            <button class="btn-remove" data-id="${supp.id}">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        
        item.querySelector('.btn-remove').addEventListener('click', () => {
            toggleStack(supp);
        });
        
        stackItemsContainer.appendChild(item);
    });

    checkStackSynergies();
}

function clearStack() {
    if (confirm('Are you sure you want to clear your current stack?')) {
        activeStack = [];
        localStorage.setItem('neuroStackActive', JSON.stringify(activeStack));
        updateStackUI();
        renderSupplements();
        showToast('Stack cleared!', 'info');
    }
}

function copyStackToClipboard() {
    if (activeStack.length === 0) {
        showToast('Your stack is empty!', 'warning');
        return;
    }

    let stackText = `🧠 NEURO-STACK PROFILE 🧠\n`;
    stackText += `====================================\n\n`;
    activeStack.forEach((supp, index) => {
        stackText += `${index + 1}. ${supp.name} (${supp.chemicalName})\n`;
        stackText += `   * Target Category: ${supp.category}\n`;
        stackText += `   * Suggested Dose: ${supp.recommendedDosage}\n`;
        stackText += `   * Evidence Strength: Rating ${supp.evidenceScore}\n`;
        stackText += `   * Goals: ${supp.goals.join(', ')}\n\n`;
    });
    stackText += `====================================\n`;
    stackText += `Optimized utilizing Neuro-Stack Engine. Get science-backed supplements!`;

    navigator.clipboard.writeText(stackText).then(() => {
        const originalText = btnCopyStack.innerHTML;
        btnCopyStack.innerHTML = `<i class="fa-solid fa-circle-check"></i> Stack Copied!`;
        btnCopyStack.style.background = 'linear-gradient(135deg, #00ff66, #00b849)';
        showToast('Stack details copied to clipboard!', 'success');
        setTimeout(() => {
            btnCopyStack.innerHTML = originalText;
            btnCopyStack.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy stack details.', 'warning');
    });
}



// Custom Notification Toast System
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '<i class="fa-solid fa-circle-info text-cyan"></i>';
    if (type === 'success') icon = '<i class="fa-solid fa-circle-check text-green"></i>';
    if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation text-orange"></i>';
    
    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('toast-fade-out');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// Viral Link Sharing Engine
function generateShareLink() {
    if (activeStack.length === 0) {
        showToast('Your stack is empty!', 'warning');
        return;
    }
    
    const url = new URL(window.location.origin + window.location.pathname);
    const ids = activeStack.map(item => item.id).join(',');
    url.searchParams.set('stack', ids);
    
    navigator.clipboard.writeText(url.toString()).then(() => {
        showToast('Viral share link copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy share link: ', err);
        showToast('Failed to copy link. Copy URL directly.', 'warning');
    });
}

// Parse stack from URL param
function parseSharedStackUrl() {
    const params = new URLSearchParams(window.location.search);
    const sharedStackParam = params.get('stack');
    if (sharedStackParam) {
        const ids = sharedStackParam.split(',');
        const loadedStack = [];
        ids.forEach(id => {
            const supp = supplementDatabase.find(s => s.id === id);
            if (supp) loadedStack.push(supp);
        });
        if (loadedStack.length > 0) {
            activeStack = loadedStack;
            localStorage.setItem('neuroStackActive', JSON.stringify(activeStack));
            updateStackUI();
            renderSupplements();
            showToast('Loaded shared supplement stack!', 'success');
            
            // Open drawer automatically to show loaded stack
            setTimeout(() => stackDrawer.classList.add('open'), 800);
            
            // Clean URL query params to keep UI professional
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
}

// Smart Alert & Synergy Engine
function checkStackSynergies() {
    const alertContainer = document.getElementById('stack-alerts-container');
    if (!alertContainer) return;
    
    alertContainer.innerHTML = '';
    const warnings = [];
    
    const hasCaffeine = activeStack.some(item => item.id === 'caffeine' || item.name.toLowerCase().includes('caffeine'));
    const hasMelatonin = activeStack.some(item => item.id === 'melatonin' || item.name.toLowerCase().includes('melatonin'));
    const hasNMN = activeStack.some(item => item.id === 'nmn' || item.name.toLowerCase().includes('nmn'));
    const hasAshwagandha = activeStack.some(item => item.id === 'ashwagandha' || item.name.toLowerCase().includes('ashwagandha'));
    const hasRhodiola = activeStack.some(item => item.id === 'rhodiola-rosea' || item.name.toLowerCase().includes('rhodiola'));
    
    if (hasCaffeine && hasMelatonin) {
        warnings.push('<strong>Caffeine & Melatonin:</strong> Direct antagonist effects. Caffeine (stimulant) will hinder Melatonin (sleep induction). Separate intake by 8+ hours.');
    }
    if (hasMelatonin && hasNMN) {
        warnings.push('<strong>NMN & Melatonin:</strong> Energy vs. Sleep conflict. NMN boosts NAD+ synthesis promoting alertness. Avoid evening NMN dosing alongside Melatonin.');
    }
    if (hasAshwagandha && hasRhodiola) {
        warnings.push('<strong>Ashwagandha & Rhodiola:</strong> Adaptogen overlap. Ashwagandha tends to be calming (GABAergic), whereas Rhodiola Rosea stimulates focus. Suggest Rhodiola in AM, Ashwagandha in PM.');
    }
    
    if (warnings.length > 0) {
        alertContainer.style.display = 'block';
        warnings.forEach(warn => {
            const alertBox = document.createElement('div');
            alertBox.className = 'stack-alert-box';
            alertBox.innerHTML = `
                <i class="fa-solid fa-triangle-exclamation stack-alert-icon"></i>
                <div class="stack-alert-text">${warn}</div>
            `;
            alertContainer.appendChild(alertBox);
        });
    } else {
        alertContainer.style.display = 'none';
    }
}

// Dynamic Research Fetching Modals
async function openDetailedResearch(supp) {
    // Dynamic Programmatic SEO Title & URL Deep Linking
    const originalTitle = document.title;
    document.title = `${supp.name} Dosage, Human Clinical Trials & Science Breakdown // Neuro-Stack`;
    
    // Update Meta Description dynamically for search engine bots
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `Explore ${supp.name} (${supp.chemicalName}) clinical evidence, dosage (${supp.recommendedDosage}), benefits, and live NCBI PubMed human trials.`);
    }

    modalTitle.textContent = `Scientific Breakdown: ${supp.name}`;
    detailsModal.style.display = 'flex';

    // Set initial layout containing local detailed facts and API loaders
    modalBody.innerHTML = `
        <div class="research-grid">
            <div class="pubchem-panel">
                <div class="panel-title"><i class="fa-solid fa-microscope text-cyan"></i> Botanical & Chemical Details</div>
                <div id="pubchem-content" class="loader">
                    <div class="spinner"></div>
                    Retrieving data from PubChem...
                </div>
            </div>
            
            <div class="pubmed-panel">
                <div class="panel-title"><i class="fa-solid fa-book-bookmark text-green"></i> Latest PubMed Clinical Trials</div>
                <div id="pubmed-content" class="loader">
                    <div class="spinner"></div>
                    Searching recent medical lit...
                </div>
            </div>

            <div class="pubchem-panel" style="border-left: 3px solid var(--accent-purple);">
                <div class="panel-title" style="color: var(--accent-purple);"><i class="fa-solid fa-clipboard-list"></i> Target Health Benefits</div>
                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; font-size: 0.9rem;">
                    ${supp.benefits.map(b => `<li style="margin-bottom: 0.5rem;">${b}</li>`).join('')}
                </ul>
            </div>
            
            <div class="pubchem-panel" style="border-left: 3px solid var(--accent-orange);">
                <div class="panel-title" style="color: var(--accent-orange);"><i class="fa-solid fa-triangle-exclamation"></i> Safety Considerations</div>
                <ul style="padding-left: 1.2rem; margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                    ${supp.sideEffects.map(s => `<li style="margin-bottom: 0.5rem;">${s}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    // Fetch dynamic content asynchronously
    fetchPubChemData(supp.name);
    fetchPubMedData(supp.name);
}

// Fetch from PubChem API
async function fetchPubChemData(name) {
    const container = document.getElementById('pubchem-content');
    
    // PubChem likes clean names. We resolve some common shorthand.
    let searchQueryName = name.split(' ')[0]; // Take first word for simplicity (e.g. Ashwagandha)
    if (name === "Lion's Mane") searchQueryName = "Hericium";
    if (name.includes("L-Theanine")) searchQueryName = "Theanine";

    try {
        // Fetch properties (Molecular Formula & Weight)
        const propsResponse = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${searchQueryName}/property/MolecularFormula,MolecularWeight,IUPACName/JSON`);
        
        if (!propsResponse.ok) throw new Error('PubChem lookup unsuccessful');
        
        const propsData = await propsResponse.json();
        const compound = propsData.PropertyTable.Properties[0];
        
        container.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; font-size: 0.9rem; margin-top: 0.5rem;">
                <div><span style="color: var(--text-secondary);">IUPAC Name:</span></div>
                <div style="font-weight: 500; text-align: right;">${compound.IUPACName || 'N/A'}</div>
                
                <div><span style="color: var(--text-secondary);">Molecular Formula:</span></div>
                <div style="font-weight: 700; text-align: right; color: var(--accent-cyan);">${compound.MolecularFormula}</div>
                
                <div><span style="color: var(--text-secondary);">Molecular Weight:</span></div>
                <div style="font-weight: 500; text-align: right;">${compound.MolecularWeight} g/mol</div>
            </div>
            <div style="margin-top: 1rem; font-size: 0.75rem; text-align: center; color: var(--text-muted);">
                Data dynamically fetched from PubChem database.
            </div>
        `;
    } catch (error) {
        console.warn('PubChem Fetch Error: ', error);
        container.innerHTML = `
            <div style="font-size: 0.9rem; color: var(--text-secondary);">
                <i class="fa-solid fa-circle-exclamation text-purple" style="margin-right: 0.5rem;"></i>
                Alternative molecular properties offline. Real-time PubChem mapping unavailable.
            </div>
        `;
    }
}

// Fetch clinical trials from NCBI PubMed
async function fetchPubMedData(name) {
    const container = document.getElementById('pubmed-content');
    
    try {
        // Step 1: Search for paper IDs
        const term = encodeURIComponent(`${name} supplement human clinical trial`);
        const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${term}&retmode=json&retmax=3`;
        
        const searchResponse = await fetch(searchUrl);
        if (!searchResponse.ok) throw new Error('PubMed Search Failed');
        
        const searchData = await searchResponse.json();
        const idlist = searchData.esearchresult.idlist;
        
        if (!idlist || idlist.length === 0) {
            container.innerHTML = `
                <div style="font-size: 0.9rem; color: var(--text-secondary); text-align: center;">
                    No direct human clinical trials found on PubMed. Searching research literature is advised.
                </div>
            `;
            return;
        }

        // Step 2: Fetch metadata for those IDs
        const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${idlist.join(',')}&retmode=json`;
        const summaryResponse = await fetch(summaryUrl);
        if (!summaryResponse.ok) throw new Error('PubMed Summary Failed');
        
        const summaryData = await summaryResponse.json();
        const results = summaryData.result;
        
        container.innerHTML = '';
        
        idlist.forEach(id => {
            const paper = results[id];
            if (!paper) return;
            
            const paperEl = document.createElement('div');
            paperEl.className = 'pubmed-paper';
            paperEl.innerHTML = `
                <div class="paper-title">${paper.title}</div>
                <div class="paper-meta">
                    <span>${paper.source}</span> | <span>${paper.pubdate}</span> 
                    <a href="https://pubmed.ncbi.nlm.nih.gov/${id}/" target="_blank" style="color: var(--accent-green); text-decoration: none; margin-left: 0.5rem;">
                        [Read PMC <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>]
                    </a>
                </div>
            `;
            container.appendChild(paperEl);
        });
    } catch (error) {
        console.warn('PubMed Fetch Error: ', error);
        container.innerHTML = `
            <div style="font-size: 0.9rem; color: var(--text-secondary);">
                <i class="fa-solid fa-triangle-exclamation text-orange" style="margin-right: 0.5rem;"></i>
                Failed to fetch medical trials. Check network connectivity or retry later.
            </div>
        `;
    }
}

// Start application
init();
