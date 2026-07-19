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
        iherbQuery: "ashwagandha+ksm-66"
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
        iherbQuery: "l-theanine"
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
        iherbQuery: "nmn+nicotinamide"
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
        iherbQuery: "creatine+monohydrate"
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
        iherbQuery: "lions+mane+mushroom"
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
        iherbQuery: "melatonin+low+dose"
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
        iherbQuery: "rhodiola+rosea"
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
        iherbQuery: "trans-resveratrol"
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
        iherbQuery: "caffeine+capsules"
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
        iherbQuery: "magnesium+l-threonate"
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
        iherbQuery: "bacopa+monnieri"
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
        iherbQuery: "alpha+gpc"
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
        iherbQuery: "omega-3+fish+oil"
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
        iherbQuery: "ubiquinol+coq10"
    }
];
export default supplementDatabase;
