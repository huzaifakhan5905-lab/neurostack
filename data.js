const supplementDatabase = [
    {
        id: "ashwagandha",
        name: "Ashwagandha",
        chemicalName: "Withania somnifera",
        category: "Stress & Sleep",
        shortDescription: "An adaptogenic herb traditionally used in Ayurveda to help the body manage stress, lower cortisol, and improve sleep quality.",
        goals: ["Stress Relief", "Anxiety Reduction", "Deep Sleep", "Hormonal Balance"],
        evidenceScore: "A+",
        recommendedDosage: "300mg - 600mg daily (standardized extract like KSM-66)",
        benefits: [
            "Reduces cortisol (stress hormone) levels by up to 30%",
            "Improves sleep latency and overall sleep quality",
            "Enhances cognitive function, memory, and task performance",
            "Supports healthy testosterone levels and athletic recovery"
        ],
        sideEffects: [
            "Mild drowsiness if taken during the day",
            "Slight stomach upset in rare cases",
            "Should be avoided by pregnant or breastfeeding individuals"
        ],
        amazonQuery: "KSM-66+Ashwagandha+Extract",
        iherbQuery: "ashwagandha+ksm-66",
        image: "https://raw.githubusercontent.com/huzaifakhan5905-lab/neurostack/main/images/ashwagandha.jpg"
    },
    {
        id: "l-theanine",
        name: "L-Theanine",
        chemicalName: "gamma-ethylamino-L-glutamic acid",
        category: "Focus & Calm",
        shortDescription: "An amino acid commonly found in green tea leaves that promotes relaxation and focus without causing drowsiness.",
        goals: ["Focus", "Anxiety Reduction", "Calmness", "Sleep Quality"],
        evidenceScore: "A",
        recommendedDosage: "100mg - 200mg (often taken in a 2:1 ratio with caffeine)",
        benefits: [
            "Promotes relaxation without sedation (increases alpha brain waves)",
            "Takes the 'edge' off caffeine, reducing jitters and anxiety",
            "Improves selective attention and cognitive task accuracy",
            "Improves sleep quality when taken before bedtime"
        ],
        sideEffects: [
            "Generally extremely safe; no significant side effects at standard dosages",
            "May cause mild headaches if combined with high caffeine dosages"
        ],
        amazonQuery: "L-Theanine+200mg",
        iherbQuery: "l-theanine",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "nmn",
        name: "NMN (Nicotinamide Mononucleotide)",
        chemicalName: "Nicotinamide mononucleotide",
        category: "Longevity",
        shortDescription: "A direct precursor to NAD+, a critical coenzyme in all human cells required for energy metabolism and cellular repair.",
        goals: ["Longevity", "Cellular Energy", "Anti-Aging", "DNA Repair"],
        evidenceScore: "B+",
        recommendedDosage: "250mg - 500mg daily (sublingual or capsule)",
        benefits: [
            "Boosts systemic NAD+ levels to support healthy aging",
            "Improves mitochondrial function and cellular energy output",
            "Supports blood vessel health and muscle endurance",
            "Enhances DNA repair mechanisms via sirtuin activation"
        ],
        sideEffects: [
            "High safety profile; mild flushing or nausea if taken in extreme doses",
            "Slight stomach discomfort when taken on an empty stomach"
        ],
        amazonQuery: "NMN+Nicotinamide+Mononucleotide",
        iherbQuery: "nmn+nicotinamide",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "creatine",
        name: "Creatine Monohydrate",
        chemicalName: "N-(aminoiminomethyl)-N-methylglycine",
        category: "Muscle & Brain",
        shortDescription: "The most widely researched exercise supplement in the world. It provides rapid cellular energy (ATP) to muscles and brain tissue.",
        goals: ["Muscle Growth", "Strength", "Brain Power", "Cellular Hydration"],
        evidenceScore: "A+",
        recommendedDosage: "3g - 5g daily (no loading phase strictly required)",
        benefits: [
            "Significantly boosts strength, power output, and muscle mass",
            "Improves high-intensity exercise capacity and recovery",
            "Enhances cognitive function, particularly under sleep deprivation",
            "Acts as a neuroprotectant by supporting brain energy reserves"
        ],
        sideEffects: [
            "Mild initial water retention (muscle fullness)",
            "Digestive distress if consumed without enough water"
        ],
        amazonQuery: "Creatine+Monohydrate+Powder+Creapure",
        iherbQuery: "creatine+monohydrate",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "lions-mane",
        name: "Lion's Mane",
        chemicalName: "Hericium erinaceus",
        category: "Focus & Brain",
        shortDescription: "A culinary and medicinal mushroom that stimulates the production of Nerve Growth Factor (NGF), promoting neurogenesis.",
        goals: ["Memory", "Focus", "Neurogenesis", "Mood Support"],
        evidenceScore: "B",
        recommendedDosage: "500mg - 1000mg daily (standardized extract)",
        benefits: [
            "Stimulates NGF (Nerve Growth Factor) synthesis in the brain",
            "Enhances spatial memory and overall cognitive recall",
            "Supports neural plasticity and myelin sheath repair",
            "Possesses mild anti-anxiety and antidepressant effects"
        ],
        sideEffects: [
            "Very well tolerated; minor skin itching in very rare cases due to increased NGF"
        ],
        amazonQuery: "Lions+Mane+Mushroom+Extract+Organic",
        iherbQuery: "lions+mane+mushroom",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "melatonin",
        name: "Melatonin",
        chemicalName: "N-acetyl-5-methoxy-tryptamine",
        category: "Sleep",
        shortDescription: "A natural hormone produced by the pineal gland that regulates sleep-wake cycles (circadian rhythm).",
        goals: ["Circadian Rhythm", "Deep Sleep", "Jet Lag Recovery"],
        evidenceScore: "A+",
        recommendedDosage: "0.3mg - 3mg taken 30-60 minutes before bed",
        benefits: [
            "Reduces sleep onset latency (helps you fall asleep faster)",
            "Resets circadian rhythm, highly effective for jet lag",
            "Acts as a powerful antioxidant during sleep cycles",
            "Improves overall REM sleep stability"
        ],
        sideEffects: [
            "Morning grogginess if dosage is too high",
            "Vivid dreams",
            "May suppress natural melatonin production if used in large doses long-term"
        ],
        amazonQuery: "Low+Dose+Melatonin+1mg",
        iherbQuery: "melatonin+low+dose",
        image: "https://raw.githubusercontent.com/huzaifakhan5905-lab/neurostack/main/images/melatonin.jpg"
    },
    {
        id: "rhodiola-rosea",
        name: "Rhodiola Rosea",
        chemicalName: "Rhodiola rosea",
        category: "Stress & Energy",
        shortDescription: "An adaptogenic herb known for its ability to fight fatigue, raise mood, and improve endurance during stressful periods.",
        goals: ["Stress Relief", "Fatigue Reduction", "Physical Endurance", "Mood Support"],
        evidenceScore: "A",
        recommendedDosage: "200mg - 400mg daily (standardized to 3% rosavins and 1% salidroside)",
        benefits: [
            "Reduces mental and physical fatigue, especially during burn-out",
            "Enhances mood by boosting serotonin and dopamine activity",
            "Improves endurance and athletic stamina",
            "Improves cognitive performance under stress (e.g., exams or deadlines)"
        ],
        sideEffects: [
            "Can be slightly stimulating; avoid taking late in the evening",
            "Mild dry mouth or sleep disruption in sensitive users"
        ],
        amazonQuery: "Rhodiola+Rosea+Extract",
        iherbQuery: "rhodiola+rosea",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "resveratrol",
        name: "Resveratrol",
        chemicalName: "3,5,4'-trihydroxystilbene",
        category: "Longevity",
        shortDescription: "A natural polyphenol compound found in grapes and red wine, popular in anti-aging research for activating sirtuin longevity genes.",
        goals: ["Longevity", "Antioxidant Support", "Heart Health"],
        evidenceScore: "B",
        recommendedDosage: "250mg - 500mg daily (often paired with NMN)",
        benefits: [
            "Activates SIRT1, a gene associated with lifespan extension in animal studies",
            "Provides potent antioxidant and anti-inflammatory protection",
            "Supports cardiovascular health and blood vessel elasticity",
            "Promotes healthy insulin sensitivity"
        ],
        sideEffects: [
            "Mild digestive upset in high doses",
            "Can interact with blood thinners (consult a doctor)"
        ],
        amazonQuery: "Trans-Resveratrol+500mg",
        iherbQuery: "trans-resveratrol",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "caffeine",
        name: "Caffeine",
        chemicalName: "1,3,7-Trimethylpurine",
        category: "Focus & Calm",
        shortDescription: "The world's most widely consumed central nervous system stimulant, used to temporarily ward off drowsiness and restore alertness.",
        goals: ["Alertness", "Energy", "Athletic Power", "Focus"],
        evidenceScore: "A+",
        recommendedDosage: "50mg - 200mg (do not exceed 400mg per day)",
        benefits: [
            "Blocks adenosine receptors to delay fatigue",
            "Improves reaction time, vigilance, and logical reasoning",
            "Enhances fat oxidation and metabolic rate during exercise",
            "Increases endurance and muscular strength outputs"
        ],
        sideEffects: [
            "Can cause jitters, anxiety, and heart palpitations in high doses",
            "May disrupt sleep patterns if taken in the late afternoon/evening",
            "Mild dependency or tolerance buildup with chronic usage"
        ],
        amazonQuery: "Caffeine+Pills+100mg",
        iherbQuery: "caffeine+capsules",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "magnesium-threonate",
        name: "Magnesium L-Threonate",
        chemicalName: "Magnesium L-threonate",
        category: "Stress & Sleep",
        shortDescription: "A highly bioavailable form of magnesium synthesized by MIT researchers that effectively crosses the blood-brain barrier to support cognitive health and deep sleep.",
        goals: ["Deep Sleep", "Brain Health", "Memory", "Stress Relief"],
        evidenceScore: "A",
        recommendedDosage: "1000mg - 2000mg daily (delivering 72mg - 144mg elemental magnesium)",
        benefits: [
            "Readily crosses the blood-brain barrier to increase brain magnesium levels",
            "Improves synaptic plasticity and overall cognitive recall",
            "Enhances slow-wave deep sleep and relaxes the nervous system",
            "Reduces chronic stress response by regulating glutamate receptors"
        ],
        sideEffects: [
            "Mild headaches in sensitive individuals during the first few days",
            "Drowsiness if taken in the morning (best taken before sleep)"
        ],
        amazonQuery: "Magtein+Magnesium+L-Threonate",
        iherbQuery: "magnesium+l-threonate",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "bacopa-monnieri",
        name: "Bacopa Monnieri",
        chemicalName: "Bacopa monnieri",
        category: "Focus & Calm",
        shortDescription: "A traditional herb clinically proven to accelerate learning rates, improve spatial memory, and reduce stress levels.",
        goals: ["Memory", "Focus", "Anxiety Reduction", "Brain Health"],
        evidenceScore: "A",
        recommendedDosage: "300mg daily (standardized to 55% bacosides)",
        benefits: [
            "Enhances synaptic communication, facilitating faster learning",
            "Improves spatial memory recall and information retention",
            "Acts as an adaptogen to reduce cortisol and chronic stress",
            "Exhibits strong neuroprotective antioxidant activities"
        ],
        sideEffects: [
            "Mild gastrointestinal distress or nausea on an empty stomach",
            "Can cause fatigue in some users (often cycled or stacked)"
        ],
        amazonQuery: "Bacopa+Monnieri+Extract+Synapsa",
        iherbQuery: "bacopa+monnieri",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "alpha-gpc",
        name: "Alpha-GPC",
        chemicalName: "L-Alpha-glycerylphosphorylcholine",
        category: "Focus & Calm",
        shortDescription: "A natural choline compound that increases acetylcholine levels in the brain, supporting focus, power output, and cognitive agility.",
        goals: ["Focus", "Strength", "Brain Power", "Hormonal Balance"],
        evidenceScore: "B+",
        recommendedDosage: "300mg - 600mg daily",
        benefits: [
            "Acts as a highly bioavailable precursor to acetylcholine (the focus neurotransmitter)",
            "Improves speed of thinking, focus, and verbal recall",
            "Boosts athletic explosive power and vertical jump performance",
            "Promotes natural growth hormone secretion post-exercise"
        ],
        sideEffects: [
            "Mild headaches if choline levels accumulate (can be balanced with less dosage)",
            "Dizziness or heartburn in sensitive users"
        ],
        amazonQuery: "Alpha+GPC+300mg",
        iherbQuery: "alpha+gpc",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "omega-3",
        name: "Omega-3 Fish Oil",
        chemicalName: "Eicosapentaenoic acid (EPA) & Docosahexaenoic acid (DHA)",
        category: "Muscle & Brain",
        shortDescription: "An essential fatty acid blend critical for maintaining brain cell membrane integrity, cardiovascular health, and reducing system-wide inflammation.",
        goals: ["Brain Health", "Heart Health", "Inflammation Control", "Mood Support"],
        evidenceScore: "A+",
        recommendedDosage: "1000mg - 2000mg combined EPA/DHA daily",
        benefits: [
            "Maintains synaptic fluidity and neural cell membrane structure",
            "Reduces systemic inflammation and joint soreness",
            "Supports cardiovascular health, blood pressure, and cholesterol balances",
            "Helps regulate mood swings and stabilizes overall emotional health"
        ],
        sideEffects: [
            "Mild fishy aftertaste (can be solved with enteric-coated capsules)",
            "Slight blood thinning properties in high doses"
        ],
        amazonQuery: "High+Potency+Omega+3+Fish+Oil",
        iherbQuery: "omega-3+fish+oil",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "coq10",
        name: "Coenzyme Q10",
        chemicalName: "Coenzyme Q10",
        category: "Longevity",
        shortDescription: "A vital antioxidant present in mitochondria that plays a key role in producing ATP, crucial for cardiovascular health and cellular longevity.",
        goals: ["Cellular Energy", "Longevity", "Heart Health"],
        evidenceScore: "A",
        recommendedDosage: "100mg - 200mg daily (preferably as Ubiquinol)",
        benefits: [
            "Essential for mitochondrial ATP (energy) production",
            "Potent fat-soluble antioxidant that protects cells from damage",
            "Improves cardiac muscle efficiency and overall vascular health",
            "Replenishes natural CoQ10 levels depleted by aging or statin usage"
        ],
        sideEffects: [
            "Very well tolerated; mild insomnia if taken late at night",
            "Mild stomach upset in a small percentage of users"
        ],
        amazonQuery: "Ubiquinol+CoQ10+100mg",
        iherbQuery: "ubiquinol+coq10",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "apigenin",
        name: "Apigenin",
        chemicalName: "4',5,7-Trihydroxyflavone",
        category: "Stress & Sleep",
        shortDescription: "A bioflavonoid extracted from chamomile that acts as a gentle GABA receptor agonist, soothing the central nervous system for deep, uninterrupted sleep.",
        goals: ["Deep Sleep", "Anxiety Reduction", "Muscle Relaxation"],
        evidenceScore: "A",
        recommendedDosage: "50mg - 100mg taken 30-60 minutes before bed",
        benefits: [
            "Binds to chloride channel GABA-A receptors to quiet racing thoughts before sleep",
            "Relaxes smooth muscle tissue without morning hangover or grogginess",
            "Exhibits strong anti-inflammatory and cellular antioxidant properties",
            "Core component of the popular Huberman sleep stack protocol"
        ],
        sideEffects: [
            "Very high safety profile; mild sedation if taken during daytime hours",
            "Avoid combining with high dose prescription sedatives without doctor consultation"
        ],
        amazonQuery: "Apigenin+50mg+Chamomile",
        iherbQuery: "apigenin+extract",
        image: "https://raw.githubusercontent.com/huzaifakhan5905-lab/neurostack/main/images/apigenin.jpg"
    },
    {
        id: "l-tyrosine",
        name: "L-Tyrosine",
        chemicalName: "L-2-amino-3-(4-hydroxyphenyl)propanoic acid",
        category: "Focus & Calm",
        shortDescription: "A non-essential amino acid required for synthesizing dopamine, epinephrine, and norepinephrine under acute stress or heavy cognitive workload.",
        goals: ["Focus", "Stress Resilience", "Working Memory", "Motivation"],
        evidenceScore: "A+",
        recommendedDosage: "500mg - 1500mg taken on an empty stomach",
        benefits: [
            "Prevents cognitive depletion during high-stress situations (cold exposure, exams, multi-tasking)",
            "Promotes motivation and mental drive by boosting central dopamine levels",
            "Enhances working memory speed and accuracy during extended focus sessions",
            "Ideal non-jittery stack partner with caffeine for intense work blocks"
        ],
        sideEffects: [
            "Mild restlessness if taken late in the day",
            "Not recommended for individuals with hyperthyroidism or taking MAO inhibitors"
        ],
        amazonQuery: "L-Tyrosine+500mg",
        iherbQuery: "l-tyrosine",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "berberine",
        name: "Berberine HCL",
        chemicalName: "Berberine Hydrochloride",
        category: "Longevity",
        shortDescription: "A potent plant alkaloid that activates AMPK (the metabolic master switch), supporting healthy blood glucose levels, metabolic rate, and longevity pathways.",
        goals: ["Longevity", "Blood Sugar Control", "Metabolic Health", "Weight Management"],
        evidenceScore: "A+",
        recommendedDosage: "500mg taken 2 to 3 times daily with meals",
        benefits: [
            "Activates AMPK to mimic fasting and caloric restriction longevity pathways",
            "Supports healthy post-meal blood glucose and insulin sensitivity",
            "Promotes healthy blood lipid profiles and arterial vessel health",
            "Supports gut microbiome diversity and digestive wellness"
        ],
        sideEffects: [
            "Gastrointestinal cramps or mild diarrhea if taken on an empty stomach",
            "Should not be taken concurrently with insulin medications without medical supervision"
        ],
        amazonQuery: "Berberine+HCL+500mg",
        iherbQuery: "berberine",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "sulforaphane",
        name: "Sulforaphane",
        chemicalName: "1-isothiocyanato-4-(methylsulfinyl)butane",
        category: "Longevity",
        shortDescription: "A sulfur-rich compound found in broccoli sprouts that potentates Nrf2 activation, unleashing the body's master antioxidant and cellular detoxification enzymes.",
        goals: ["Cellular Detox", "Longevity", "Brain Protection", "Anti-Inflammation"],
        evidenceScore: "A",
        recommendedDosage: "10mg - 30mg active Sulforaphane (via Prostaphane or stabilized Glucoraphanin + Myrosinase)",
        benefits: [
            "Master activator of Nrf2, inducing over 200 protective cellular antioxidant genes",
            "Crosses the blood-brain barrier to protect neural cells from oxidative damage",
            "Accelerates phase-II liver detoxification processes",
            "Supports long-term cardiovascular and DNA integrity"
        ],
        sideEffects: [
            "Mild sulfur odor in urine",
            "Temporary gas or bloating in digestive-sensitive individuals"
        ],
        amazonQuery: "Sulforaphane+Broccoli+Sprout+Extract",
        iherbQuery: "sulforaphane",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "phosphatidylserine",
        name: "Phosphatidylserine (PS)",
        chemicalName: "1,2-diacyl-sn-glycero-3-phospho-L-serine",
        category: "Focus & Brain",
        shortDescription: "An essential phospholipid component of cell membranes that lowers exercise-induced cortisol and supports long-term memory formation.",
        goals: ["Memory", "Cortisol Lowering", "Focus", "Brain Health"],
        evidenceScore: "A",
        recommendedDosage: "100mg 3 times daily (or 300mg once daily)",
        benefits: [
            "Lowers elevated cortisol levels triggered by physical or emotional stress",
            "Improves short-term memory recall and cognitive processing speed",
            "Supports nerve cell membrane fluidity and neurotransmitter release",
            "Approved by FDA for qualified health claims regarding cognitive decline"
        ],
        sideEffects: [
            "Extremely safe; minor stomach upset or insomnia if taken in excess (>600mg)"
        ],
        amazonQuery: "Phosphatidylserine+300mg",
        iherbQuery: "phosphatidylserine",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "mucuna-pruriens",
        name: "Mucuna Pruriens (L-DOPA)",
        chemicalName: "Levodopa / Mucuna pruriens extract",
        category: "Focus & Calm",
        shortDescription: "A tropical legume containing high concentrations of natural L-DOPA, the direct precursor to dopamine, driving motivation and mood elevation.",
        goals: ["Dopamine Boost", "Motivation", "Mood Support", "Drive"],
        evidenceScore: "B+",
        recommendedDosage: "250mg - 500mg daily (standardized to 15% L-DOPA)",
        benefits: [
            "Directly increases dopamine levels in the brain to boost motivation and reward drive",
            "Enhances sense of well-being, mood stability, and libido",
            "Supports healthy growth hormone secretion and motor control",
            "Complements intense work sprints or creative brain sessions"
        ],
        sideEffects: [
            "Best cycled (e.g., 3 days on, 2 days off) to prevent dopamine receptor downregulation",
            "Mild nausea if taken on an empty stomach"
        ],
        amazonQuery: "Mucuna+Pruriens+Extract+L-DOPA",
        iherbQuery: "mucuna+pruriens",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "ginkgo-biloba",
        name: "Ginkgo Biloba",
        chemicalName: "Ginkgo biloba leaf extract",
        category: "Focus & Brain",
        shortDescription: "One of the oldest living tree species, clinically used to enhance cerebral blood flow, oxygenation, and microvascular circulation in the brain.",
        goals: ["Cerebral Blood Flow", "Memory", "Focus", "Brain Health"],
        evidenceScore: "A",
        recommendedDosage: "120mg - 240mg daily (standardized extract EGb 761)",
        benefits: [
            "Increases microvascular cerebral blood circulation and glucose delivery to brain tissue",
            "Improves cognitive processing speed, short-term memory, and mental sharpness",
            "Acts as a potent neuroprotective antioxidant against free radical damage",
            "Helps alleviate mild age-related cognitive decline and tinnitus"
        ],
        sideEffects: [
            "Slight blood thinning action; avoid taking prior to surgeries or with warfarin",
            "Mild headaches in rare instances"
        ],
        amazonQuery: "Ginkgo+Biloba+Extract+120mg",
        iherbQuery: "ginkgo+biloba",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "gaba",
        name: "GABA",
        chemicalName: "Gamma-Aminobutyric Acid",
        category: "Stress & Sleep",
        shortDescription: "The human brain's primary inhibitory neurotransmitter that dampens overactive neural firing, promoting calm states and deep sleep.",
        goals: ["Anxiety Reduction", "Calmness", "Deep Sleep", "Growth Hormone"],
        evidenceScore: "B+",
        recommendedDosage: "500mg - 1000mg taken before bed or during acute stress",
        benefits: [
            "Promotes alpha brain waves associated with relaxed alertness",
            "Calms nervous system hyper-excitability and lowers physical tension",
            "Shortens time required to fall asleep and enhances deep sleep duration",
            "Stimulates natural human growth hormone (HGH) release post-exercise"
        ],
        sideEffects: [
            "Mild tingling sensation or slight breath rate changes when taken in high doses (>2000mg)"
        ],
        amazonQuery: "PharmaGABA+500mg",
        iherbQuery: "gaba+500mg",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "5-htp",
        name: "5-HTP",
        chemicalName: "5-Hydroxytryptophan",
        category: "Stress & Sleep",
        shortDescription: "The direct metabolic precursor to serotonin, synthesized from L-tryptophan to elevate mood, reduce appetite cravings, and facilitate sleep.",
        goals: ["Mood Support", "Serotonin Boost", "Sleep Quality", "Appetite Control"],
        evidenceScore: "A",
        recommendedDosage: "50mg - 200mg taken in the evening with a light carb snack",
        benefits: [
            "Crosses the blood-brain barrier to rapidly synthesize serotonin",
            "Enhances emotional well-being, mood stability, and optimism",
            "Converts downstream into melatonin to promote sound sleep",
            "Reduces carb cravings and aids in caloric restriction management"
        ],
        sideEffects: [
            "Do NOT combine with prescription SSRIs or antidepressants (risk of Serotonin Syndrome)",
            "Mild nausea if taken on an empty stomach"
        ],
        amazonQuery: "5-HTP+100mg",
        iherbQuery: "5-htp+100mg",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "citicoline",
        name: "Citicoline (CDP-Choline)",
        chemicalName: "Cytidine 5'-diphocholine",
        category: "Focus & Brain",
        shortDescription: "A naturally occurring brain nucleotide that supplies both choline (for acetylcholine synthesis) and cytidine (for phosphatidylcholine brain membrane repair).",
        goals: ["Brain Energy", "Focus", "Memory", "Neuroprotection"],
        evidenceScore: "A+",
        recommendedDosage: "250mg - 500mg daily (Cognizin brand recommended)",
        benefits: [
            "Increases brain ATP energy levels by over 13% in human clinical trials",
            "Boosts brain phospholipid synthesis for neural membrane repair and plasticity",
            "Improves sustained attention, mental stamina, and motor speed",
            "Synergizes exceptionally well with racetams and caffeine stacks"
        ],
        sideEffects: [
            "Very high tolerance profile; mild stomach discomfort or headaches if over-dosed"
        ],
        amazonQuery: "Cognizin+Citicoline+CDP+Choline",
        iherbQuery: "cdp+choline+cognizin",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "noopept",
        name: "Noopept",
        chemicalName: "N-phenylacetyl-L-prolylglycine ethyl ester",
        category: "Focus & Brain",
        shortDescription: "A synthetic peptide nootropic up to 1000x more potent than piracetam, engineered to boost BDNF and NGF expression for high-level focus.",
        goals: ["High Focus", "BDNF Boost", "Memory Recall", "Cognitive Agility"],
        evidenceScore: "B+",
        recommendedDosage: "10mg - 30mg daily (divided into sublingual doses)",
        benefits: [
            "Dramatically elevates Brain-Derived Neurotrophic Factor (BDNF) and NGF",
            "Enhances sensory perception, clarity of thought, and logical reasoning",
            "Exhibits potent neuroprotective properties against oxidative injury",
            "Extremely low required dosage compared to traditional racetams"
        ],
        sideEffects: [
            "Temporary brain fog or mild headaches if taken without a choline source (e.g., Alpha-GPC)",
            "Irritability if dosage is too high"
        ],
        amazonQuery: "Noopept+Nootropic",
        iherbQuery: "noopept+capsules",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "tongkat-ali",
        name: "Tongkat Ali",
        chemicalName: "Eurycoma longifolia extract",
        category: "Stress & Energy",
        shortDescription: "A Southeast Asian medicinal root clinically proven to unbind bioavailable free testosterone, lower stress hormones, and boost muscle stamina.",
        goals: ["Testosterone Support", "Stamina", "Cortisol Lowering", "Vitality"],
        evidenceScore: "A",
        recommendedDosage: "200mg - 400mg daily (standardized 100:1 extract or LJ100)",
        benefits: [
            "Increases free bioavailable testosterone levels by unbinding Sex Hormone-Binding Globulin (SHBG)",
            "Lowers cortisol stress hormone levels by up to 16% in clinical trials",
            "Enhances lean muscle mass gains and physical fatigue resistance",
            "Boosts physical libido, mood, and overall masculine energy"
        ],
        sideEffects: [
            "Can cause mild insomnia or restlessness if taken late in the day",
            "Best cycled (e.g., 5 days on, 2 days off) for optimal receptor sensitivity"
        ],
        amazonQuery: "Tongkat+Ali+LJ100+Extract",
        iherbQuery: "tongkat+ali",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "fisetin",
        name: "Fisetin",
        chemicalName: "3,7,3',4'-Tetrahydroxyflavone",
        category: "Longevity",
        shortDescription: "A senolytic bioflavonoid polyphenol found in strawberries that selectively targets and clears senescent ('zombie') cells to extend cellular lifespan.",
        goals: ["Senolytic", "Cellular Renewal", "Longevity", "Brain Health"],
        evidenceScore: "A",
        recommendedDosage: "100mg - 500mg daily (or high-dose pulsed protocol per Mayo Clinic trials)",
        benefits: [
            "Recognized as one of the most potent natural senolytics for clearing aged, damaged cells",
            "Crosses the blood-brain barrier to maintain long-term memory synaptic function",
            "Protects brain neurons against oxidative and ischemic stress",
            "Supports healthy insulin signaling and cellular inflammation reduction"
        ],
        sideEffects: [
            "Very high tolerance profile; mild stomach sensitivity in rare cases"
        ],
        amazonQuery: "Fisetin+500mg+Senolytic",
        iherbQuery: "fisetin+extract",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "cordyceps",
        name: "Cordyceps Mushroom",
        chemicalName: "Cordyceps militaris / sinensis",
        category: "Stress & Energy",
        shortDescription: "A medicinal fungus revered by endurance athletes for its ability to increase cellular ATP generation and improve oxygen consumption (VO2 max).",
        goals: ["VO2 Max", "Cellular ATP", "Endurance", "Respiratory Health"],
        evidenceScore: "A",
        recommendedDosage: "1000mg - 3000mg daily (standardized extract)",
        benefits: [
            "Increases cellular ATP production by optimizing mitochondrial energy output",
            "Improves oxygen utilization capacity (VO2 max) during cardiovascular exertion",
            "Supports bronchial dilation and lung airflow efficiency",
            "Combats physical exhaustion and enhances exercise recovery speed"
        ],
        sideEffects: [
            "Mild dry mouth or upset stomach",
            "Avoid if taking blood thinners or immunosuppressants"
        ],
        amazonQuery: "Organic+Cordyceps+Mushroom+Extract",
        iherbQuery: "cordyceps+mushroom",
        image: "https://raw.githubusercontent.com/huzaifakhan5905-lab/neurostack/main/images/cordyceps.jpg"
    },
    {
        id: "curcumin",
        name: "Curcumin (Turmeric Extract)",
        chemicalName: "Diferuloylmethane",
        category: "Longevity",
        shortDescription: "The active yellow polyphenol in turmeric root, world-famous for suppressing NF-kB inflammatory cascades and protecting joints and brain tissue.",
        goals: ["Anti-Inflammation", "Joint Health", "Brain Health", "Antioxidant"],
        evidenceScore: "A+",
        recommendedDosage: "500mg - 1000mg daily (formulated with Piperine/Bioperine for 2000% increased absorption)",
        benefits: [
            "Inhibits NF-kB, the primary master transcription factor behind chronic inflammation",
            "Reduces joint stiffness, soreness, and post-workout inflammation",
            "Supports neuro-inflammation reduction and brain BDNF production",
            "Protects liver tissue and supports digestive gut lining integrity"
        ],
        sideEffects: [
            "Mild stomach upset if taken without food",
            "Slight blood thinning action at high doses"
        ],
        amazonQuery: "Curcumin+Bioperine+95+Percent",
        iherbQuery: "curcumin+bioperine",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "l-carnitine",
        name: "L-Carnitine L-Tartrate",
        chemicalName: "L-carnitine L-tartrate (LCLT)",
        category: "Muscle & Brain",
        shortDescription: "An amino acid derivative that shuttles long-chain fatty acids into mitochondria to be burned for fuel, accelerating recovery and muscle androgen receptor density.",
        goals: ["Fat Oxidation", "Muscle Recovery", "Cellular Energy", "Androgen Density"],
        evidenceScore: "A",
        recommendedDosage: "1000mg - 2000mg daily with a carb meal or post-workout",
        benefits: [
            "Shuttles fatty acids into the mitochondrial matrix for ATP conversion",
            "Up-regulates muscle androgen receptor density post-exercise",
            "Dramatically reduces post-workout muscle soreness and tissue breakdown",
            "Improves vascular blood flow via increased nitric oxide synthesis"
        ],
        sideEffects: [
            "Mild fishy body odor in very high doses (>4g per day)",
            "Stomach upset if taken on an empty stomach"
        ],
        amazonQuery: "L-Carnitine+L-Tartrate+Capsules",
        iherbQuery: "l-carnitine+l-tartrate",
        image: "https://raw.githubusercontent.com/huzaifakhan5905-lab/neurostack/main/images/l-carnitine.jpg"
    }
];
export default supplementDatabase;
