import { ModuleCard } from "./types";

export const MODULES_DATA: ModuleCard[] = [
  {
    id: "1",
    title: "Pseudomonas",
    category: "BACTERIOLOGY",
    description:
      "Overview, Morphology, Culture Characteristics, and Virulence Factors.",
    image: "/assets/pseudomonas.jpg",
    stats: "Lab Guide",
    colorClass: "text-primary",
    details: "",
    sections: [
      {
        title: "OVERVIEW",
        icon: "info",
        content:
          "Classification:\n- Gram-Negative Bacteria\n- Family: Pseudomonadaceae\nImportant species:\n- P. aeruginosa\n- P. fluorescens\n- P. putida\n\nHabitat:\n• Ubiquitous\n• Soil and water\n• Medical equipment\n• Moist environments\n\nOpportunistic Pathogen:\n- Opportunistic pathogen\n- Nosocomial infections\n- High antibiotic resistance\n- Common in immunocompromised\n\n💡 N.B: Pseudomonas من أصعب البكتيريا في العلاج بسبب مقاومتها العالية للمضادات الحيوية",
      },
      {
        title: "MORPHOLOGY & MICROSCOPY",
        icon: "biotech",
        content:
          "Morphology:\n• Shape: (0.5-0.8×1.5-3.0µm)\n• Gram-negative rods (Bacilli)\n• Motility: Polar flagella\n• Capsule: Mucoid\n• Non-spore forming\n• Obligate aerobe",
      },
      {
        title: "CULTURE CHARACTERISTICS",
        icon: "opacity",
        content:
          "Culture Media:\n✓ Blood Agar: Large, flat colonies, smell of grapes, bluish-green color\n✓ MacConkey: Non-lactose fermenter (Pale colonies) مستعمرات شاحبة\n✓ Cetrimide Agar: A selective medium that enhances pigment production in Pseudomonas\n\nRequirements:\n- Temperature: Opt: 37°C\n- Oxygen: Aerobe\n- pH: 5.5-8.5",
      },
      {
        title: "PIGMENT PRODUCTION",
        icon: "palette",
        content:
          "Colony Characteristics:\n- Size: 2-4mm, flat, irregular edges\n- Color: Blue-green\n- Odor: Grape-like\n- Hemolysis: Beta\n\nPyocyanin:\n• Important pigment for P. aeruginosa\n• Bluish color\n• It has a toxic effect\n\nPyoverdin:\n• Yellowish green, fluorescent\n• تساعد في امتصاص الحديد",
      },
      {
        title: "BIOCHEMICAL IDENTIFICATION",
        icon: "science",
        content:
          "✓ Oxidase: Positive +++ (يميزها عن Enterobacteriaceae)\n✓ Catalase: Positive\n✗ Lactose: Negative\n✓ Motility: Positive\n✓ Gelatin liquefaction\n✗ Urease: NEGATIVE\n✓ Growth at 42°C: Positive (P. aeruginosa specific)",
      },
      {
        title: "VIRULENCE FACTORS",
        icon: "shield_moon",
        content:
          "Flagella:\n• Polar monotrichous\n• Motility & chemotaxis\n• Virulence factor\n\nType IV Pili:\n• Twitching motility\n• Adhesion to cells\n• Biofilm formation\n\nLPS (Endotoxin):\n• Outer membrane\n• Fever & inflammation\n• TNF, IL-1 release\n\nAlginate:\n• Mucoid capsule\n• Anti-phagocytic\n• CF infections",
      },
      {
        title: "VIRULENCE FACTORS (TOXINS)",
        icon: "dangerous",
        content:
          "Elastase (LasA & LasB):\n• Destroys elastin\n• Vascular damage\n• Hemorrhage & necrosis\n• Degrades IgG, complement\n\nPhospholipase C:\n• Breaks cell membranes\n• Cell lysis\n• Essential for lung infection\n\nOther Toxins:\n• Alkaline protease\n• Hemolysins\n• Pyocyanin (toxic pigment)\n• Rhamnolipid\n\n⚠️ هذه السموم تعمل معاً لتسبب تدمير شامل للأنسجة وشلل جهاز المناعة",
      },
      {
        title: "PATHOGENESIS IN ANIMALS",
        icon: "pets",
        content:
          "Pet animals:\n• Otitis externa\n• Urinary Tract Infections (UTI)\n\nEquine:\n• Equine keratitis\n• Wound infection\n\nCattle:\n• التهاب الضرع (Mastitis)\n\nBirds:\n• Respiratory infections\n• Airsacculitis\n\nFish:\n• Hemorrhagic septicemia\n• معدل وفيات عالي\n\n⚡ N.B: Most infections occur in immunocompromised animals.",
      },
      {
        title: "ANTIBIOTIC RESISTANCE",
        icon: "healing",
        content:
          "⚠️ P. aeruginosa تعتبر من أصعب البكتيريا في العلاج بسبب المقاومة الطبيعية والمكتسبة\n\nResistance mechanisms:\n1. Low membrane permeability\n2. Efflux pumps\n3. Enzymatic inactivation (إنتاج Beta-lactamases)\n\nEffective antibiotics:\n✓ Fluoroquinolones (Enrofloxacin, Ciprofloxacin)\n✓ Aminoglycosides (Gentamicin, Amikacin)\n✓ Extended-spectrum penicillins",
      },
      {
        title: "PREVENTION & CONTROL",
        icon: "security",
        content:
          "Hygiene: Sensitive to common disinfectants:\n- Chlorine-based (bleach)\n- Phenolic compounds\nBoiling: Killed by boiling (100°C for several minutes)\nWound Care: Immediate cleaning and disinfection\nEarly Diagnosis: Allergy testing, Isolating infected animal\nImmunity: Boosting immunity (Good nutrition)\nNatural Alternatives: Thyme oil (زيت الزعتر)",
      },
    ],
  },
  {
    id: "2",
    title: "Brucella",
    category: "BACTERIOLOGY",
    description:
      "Intracellular survival, reproductive tract predilection, and diagnostic protocols.",
    image: "/assets/brucella.jpg",
    stats: "Full Case",
    colorClass: "text-secondary",
    details: "",
    sections: [
      {
        title: "Morphology of Brucella",
        icon: "biotech",
        content:
          "• Gram-negative Coccobacilli (short rods: 0.6–1.5 µm × 0.5–0.7 µm).\n• Arrangement: Usually single, pairs, or small clusters.\n• Non-motile, Non-capsulated, Non-spore forming.\n• Partially acid-fast.\n• Staining: Gram stain, Modified Ziehl–Neelsen (MZN), Macchiavello, Koster’s.\n• Appear red with Macchiavello and MZN stains.",
      },
      {
        title: "Habitat of Brucella",
        icon: "travel_explore",
        content:
          "• Brucella are intracellular parasites.\n• Each species has a preferred host acting as a reservoir of infection.\n• Tissue Predilection: Affinity for Placenta in cattle, sheep, goat and Foetal fluids.\n• Affinity for Testes in Bulls, Rams, Boars, and Dogs.",
      },
      {
        title: "Routes of Infection",
        icon: "directions_run",
        content:
          "• Digestive tract, Genital tract, Skin, Inhalation, Conjunctiva.\n• Venereal transmission is the main route for B. ovis.",
      },
      {
        title: "Pathology – Placenta",
        icon: "emergency",
        content:
          "• Necrotic cotyledons (gray/yellow), thickened intercotyledonary areas, brown exudate.\n• Interference with fetal circulation leads to placentitis.",
      },
      {
        title: "Pathology – Fetus",
        icon: "child_care",
        content:
          "• Edematous fetus.\n• Turbid lemon-yellow abomasal contents.\n• Bronchitis and Bronchopneumonia are common findings.",
      },
      {
        title: "Pathology in Males",
        icon: "male",
        content:
          "• Epididymitis (tail enlargement).\n• Orchitis (swollen scrotum).\n• Spermatic granuloma formation.",
      },
      {
        title: "Immunity & Special Notes",
        icon: "shield",
        content:
          "• Engulfed by Phagocytes/Macrophages.\n• Inhibition of phagolysosome fusion.\n• Suppression of oxidative killing (Adenine/Guanosine inhibits myeloperoxidase system).\n• Production of Superoxide dismutase & Catalase.",
      },
      {
        title: "Main Surface Antigens",
        icon: "fingerprint",
        content:
          "• Presence of Erythritol (Polyhydric alcohol) in specific tissues stimulates Brucella growth.\n• This sugar is a major factor in tissue predilection.",
      },
      {
        title: "Biochemical Properties – Key Tests",
        icon: "science",
        content:
          "• Strict aerobe, Fastidious nutritional requirements.\n• Optimum Temp: 37°C (Range 20–40°C).\n• Optimum pH: 6.6–7.4.\n• Incubation: Very slow (Colonies 3–5 days initial, up to 30 days).\n• CO2: B. abortus is Carboxyphilic (requires 5–10% CO2).",
      },
      {
        title: "General Resistance",
        icon: "thermostat",
        content:
          "• Killed by common disinfectants (Bleach, Phenols).\n• Destroyed by pasteurization and heat (60°C for 10 min).\n• Survives in milk (10 days), ice cream (1 month), butter (4 months).\n• Survives in soil/manure for several weeks.",
      },
      {
        title: "Laboratory Safety",
        icon: "warning",
        content:
          "⚠️ Safety: Highly infectious and easily transmitted by aerosols.\n• Must handle under BSL-3 conditions in a specialized laboratory.",
      },
      {
        title: "Brucella Samples",
        icon: "inventory_2",
        content:
          "• Antemortem: Blood/Serum, Milk, Semen, Vaginal discharge.\n• Postmortem: Spleen, Liver, Udder, Lymph nodes, Placenta, Fetal lungs.",
      },
      {
        title: "Diagnosis may be:",
        icon: "search",
        content:
          "• Direct Diagnosis: Microscopy, Cultivation & Biochemical Tests, Agglutination.\n• Serodiagnosis: RBPT (Rose Bengal Plate Test), Milk Ring Test, Rivanol Test, Mercaptoethanol (2-ME), ELISA/CFT.",
      },
      {
        title: "Treatment in Livestock",
        icon: "medication",
        content:
          "• Antibiotics usually ineffective due to intracellular nature and abscesses.\n• Canine: Requires prolonged therapy (2–4 weeks). Dihydrostreptomycin + Tetracycline.",
      },
      {
        title: "Vaccination",
        icon: "vaccines",
        content:
          "• B. melitensis Rev.1 for rams.\n• B. abortus Strain 19 for female calves (4–12 months).",
      },
      {
        title: "Diseases Caused by Brucella Species",
        icon: "list_alt",
        content:
          "• B. abortus: Cattle (Bang’s disease), Horses (Poll evil), Humans (Undulant fever).\n• B. melitensis: Goats & Sheep (Abortion), Humans (Malta fever).\n• B. suis: Pigs (Abortion, Orchitis, Arthritis).\n• B. ovis: Sheep (Epididymitis in rams).\n• B. canis: Dogs (Abortion, Infertility).",
      },
    ],
  },
  {
    id: "3",
    title: "Borderella",
    category: "BACTERIOLOGY",
    description:
      "Respiratory specialist, cause of Kennel Cough and Atrophic Rhinitis.",
    image: "/assets/borderella.jpg",
    stats: "Lab Guide",
    colorClass: "text-purple-400",
    details: "",
    sections: [
      {
        title: "OVERVIEW",
        icon: "info",
        content:
          "Classification:\n- Gram-negative small coccobacilli.\n- Family: Alcaligenaceae.\n- Major species in veterinary medicine: B. bronchiseptica, B. avium.\n- Human pathogens: B. pertussis, B. parapertussis.\n\nHabitat:\n• Commensals of the upper respiratory tract in many healthy animals.\n• Survival in the environment is limited but significant in moist conditions.",
      },
      {
        title: "MORPHOLOGY & MICROSCOPY",
        icon: "biotech",
        content:
          "• Shape: Very small, 0.2–0.5 µm × 0.5–2.0 µm.\n• Gram-negative coccobacilli.\n• Motility: B. bronchiseptica and B. avium are motile by peritrichous flagella.\n• Capsule: Virulent strains may possess a small capsule.\n• Non-spore forming.",
      },
      {
        title: "CULTURE CHARACTERISTICS",
        icon: "opacity",
        content:
          "• Strict aerobe.\n• Growth Media: Blood Agar, MacConkey Agar (Non-lactose fermenter, small pale colonies).\n• Selective Media: Smith-Baskerville agar (containing bromothymol blue) for B. bronchiseptica.\n• Conditions: 35–37°C for 24–48 hours.\n• Appearance: Small, smooth, glistening, convex colonies (mercury drops appearance).",
      },
      {
        title: "BIOCHEMICAL IDENTIFICATION",
        icon: "science",
        content:
          "✓ Oxidase: Positive.\n✓ Catalase: Positive.\n✓ Urease: Strongly and rapidly positive (key for B. bronchiseptica).\n✓ Nitrate Reduction: Positive.\n✗ Fermentation: Non-saccharolytic (does not ferment sugars).",
      },
      {
        title: "VIRULENCE FACTORS",
        icon: "shield_moon",
        content:
          "Adhesins:\n• Filamentous Hemagglutinin (FHA): Crucial for attachment to ciliated respiratory epithelium.\n• Fimbriae (Pili): Mediate host-specific attachment.\n• Pertactin (PRN): An outer membrane protein for adhesion.\n\nEvasion:\n• Resistance to phagocytosis through surface components.",
      },
      {
        title: "VIRULENCE FACTORS (Toxins / Pili / Regulatory)",
        icon: "dangerous",
        content:
          "Toxins:\n• Adenylate Cyclase Toxin (ACT): Inhibits phagocyte function and induces apoptosis.\n• Dermonecrotic Toxin (DNT): Causes skin necrosis and turbinate atrophy in pigs.\n• Tracheal Cytotoxin (TCT): Damages ciliated cells, leading to ciliostasis.\n\nRegulation:\n• BvgAS System: A two-component sensory transduction system that regulates virulence gene expression in response to environmental signals.",
      },
      {
        title: "KENNEL COUGH IN DOGS",
        icon: "pets",
        content:
          "Clinical Syndrome:\n• Part of the Canine Infectious Respiratory Disease Complex (CIRDC).\n• Highly contagious.\n• Symptoms: Harsh, dry, hacking cough; often described as sounding like a bone caught in the throat.\n• Complications: Can progress to bronchopneumonia in puppies or immunocompromised dogs.",
      },
      {
        title: "DISEASES IN OTHER ANIMALS",
        icon: "list_alt",
        content:
          "• Pigs: Atrophic Rhinitis (in synergy with Pasteurella multocida).\n• Rabbits: Snuffles (chronic upper respiratory infection).\n• Turkeys: Turkey Coryza (caused by B. avium).\n• Laboratory Rodents: Bronchopneumonia and respiratory tract inflammation.",
      },
      {
        title: "LABORATORY DIAGNOSIS",
        icon: "search",
        content:
          "• Samples: Tracheal washes, nasal swabs, or lung tissue (post-mortem).\n• Microscopy: Gram stain (difficult to see due to small size).\n• Culture: Primary isolation on Blood and MacConkey agars.\n• Molecular: PCR is increasingly used for rapid and sensitive detection.\n• Serology: Agglutination tests or ELISA (less common for individual clinical diagnosis).",
      },
      {
        title: "TREATMENT & RESISTANCE",
        icon: "medication",
        content:
          "• Challenges: Bacteria reside on ciliated epithelium and within mucus, making antibiotic access difficult.\n• Antibiotics: Doxycycline, Amoxicillin-Clavulanate, Fluoroquinolones (Enrofloxacin).\n• Resistance: B. bronchiseptica shows variable resistance to beta-lactams and some macrolides.",
      },
      {
        title: "VACCINATION & PREVENTION",
        icon: "vaccines",
        content:
          "• Dog Vaccines: Modified live (Intranasal or Oral) or parenteral inactivated bacterins.\n• Pig Vaccines: Bacterins often combined with P. multocida toxoid to prevent Atrophic Rhinitis.\n• Timing: Intranasal vaccines provide rapid local immunity (IgA).",
      },
      {
        title: "CONTROL & PREVENTION",
        icon: "security",
        content:
          "• Biosecurity: Isolate new animals; maintain clean environments.\n• Ventilation: Crucial in kennels and shelters to reduce aerosol density.\n• Stress Reduction: Minimize overcrowding and environmental fluctuations.\n• Disinfection: Bacteria are susceptible to most common disinfectants if surfaces are cleaned first.",
      },
    ],
  },
  {
    id: "4",
    title: "Pasteurella",
    category: "BACTERIOLOGY",
    description:
      "Pathogen showing characteristic bipolar staining; cause of Septicemia and Pneumonia.",
    image: "/assets/pasteurella.jpg",
    stats: "Full Review",
    colorClass: "text-primary",
    details: "",
    sections: [
      {
        title: "Pasteurella – General Characteristics",
        icon: "info",
        content:
          "• Gram-negative small rods or coccobacilli.\n• Bipolar staining: Characteristic safety-pin appearance when stained with Leishman or Methylene blue.\n• Motility: Non-motile.\n• Capsule: Usually present in virulent strains.\n• Metabolism: Facultative anaerobic.\n• Habitat: Commensal in the upper respiratory tract of healthy animals.",
      },
      {
        title: "General Characteristics",
        icon: "fact_check",
        content:
          "It classified into:\n\n1. Five serogroups (A, B, D, E, F)\nBased on capsule composition.\n\n2. 16 somatic serovars (1-16).\n\n💡 Example:\nFowl cholera is caused by capsulated strain of P. multocida serovar A and somatic serotypes 1, 3 and 4.",
      },
      {
        title: "specimens collection",
        icon: "inventory_2",
        content:
          "• Antemortem: Nasal swabs, tracheal washes, or blood samples (in septicemic cases).\n• Postmortem: Affected lung tissue, heart blood, spleen, and liver samples.",
      },
      {
        title: "Microscopy (Direct smear examination)",
        icon: "biotech",
        content:
          "• Gram stain: Gram-negative (pink) coccobacilli.\n• Special Stains: Leishman or Methylene blue stains highlight the bipolar staining (ends are more deeply stained than the center), giving a safety-pin appearance.",
      },
      {
        title: "Culture (Isolation)",
        icon: "opacity",
        content:
          "• Media: Grows well on Blood Agar and Chocolate Agar.\n• Appearance: Small, grayish-white, translucent, non-hemolytic colonies. Often has a sweet, musty odor.\n• MacConkey: P. multocida typically does not grow on MacConkey (important differentiation point).",
      },
      {
        title: "Molecular Methods (Modern confirmation)",
        icon: "science",
        content:
          "• PCR: Used for rapid identification and capsular typing (Types A, B, D, E, F).\n• Multiplex PCR: Can simultaneously identify the species and the toxin-producing potential.",
      },
      {
        title:
          "Comparison between Pasteurella multocida and Mannheimia haemolytica",
        icon: "compare_arrows",
        content:
          "Characteristic | P. multocida | M. haemolytica\n---|---|---\nIndole | Positive | Negative\nMannitol | Positive | Negative\nHemolysis | Non-hemolytic | Beta-hemolytic\nMacConkey | No growth | Growth\nOdor | Musty | None",
      },
      {
        title: "Fowl Cholera (Pasteurellosis)",
        icon: "pets",
        content:
          "• Etiology: P. multocida (primarily types A and F).\n• Species: Affects all types of birds (chickens, turkeys, ducks).\n• Acute Form: Sudden death, cyanosis of the comb/wattles, hemorrhages on the heart fat (petechiae).\n• Chronic Form: Localized infections (swollen wattles, joint paint, lameness).",
      },
    ],
  },
];
