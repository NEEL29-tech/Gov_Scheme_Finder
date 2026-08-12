// Central and State Government Schemes Dataset
export const SCHEMES_DATA = [
  // --- HEALTHCARE ---
  {
    id: "ayushman-bharat",
    title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    sector: "Healthcare",
    level: "Central Government",
    shortDesc: "Comprehensive free healthcare coverage up to ₹5,000,000 per family per year for secondary & tertiary hospitalization.",
    fullDesc: "Ayushman Bharat PM-JAY is the world's largest health assurance scheme aim to provide cashless coverage of up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization to over 12 crore poor and vulnerable families.",
    benefits: [
      "Cashless and paperless treatment at empanelled public and private hospitals.",
      "Coverage of up to ₹5,000,000 per family per year on a family floater basis.",
      "Pre-hospitalization (3 days) and post-hospitalization (15 days) expenses covered including diagnostic tests and medicines.",
      "No restriction on family size, age, or gender."
    ],
    eligibility: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 250000,
      professions: ["Rural Household", "Unorganized Worker", "Daily Wager", "Farmer", "Asha Worker", "Senior Citizen", "Low Income"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Aadhaar Card",
      "Ration Card / SECC 2011 Name Proof",
      "Mobile Number linked with Aadhaar",
      "Income Certificate / BPL Card"
    ],
    applicationSteps: [
      "Step 1: Check your name eligibility in the PM-JAY portal or visit your nearest Ayushman Mitra at empanelled hospital.",
      "Step 2: Submit your Aadhaar Card and Ration Card to generate Ayushman Golden Card.",
      "Step 3: Receive e-Card instantly after e-KYC verification.",
      "Step 4: Present Ayushman Card at any empanelled hospital for cashless treatment."
    ],
    helpline: "14555 / 1800-111-565",
    officialPortal: "https://pmjay.gov.in",
    latestUpdate: "Recently expanded to cover all senior citizens aged 70 and above regardless of income!"
  },
  {
    id: "pm-poshan-health",
    title: "PM Swasthya Suraksha Yojana (PMSSY)",
    sector: "Healthcare",
    level: "Central Government",
    shortDesc: "Upgrading healthcare infrastructure and setting up AIIMS institutes across all states for affordable specialized care.",
    fullDesc: "PMSSY aims at correcting regional imbalances in the availability of affordable and reliable tertiary healthcare services and also to augment facilities for quality medical education in the country.",
    benefits: [
      "Subsidized high-end surgical procedures and cancer treatments.",
      "Access to AIIMS level specialized doctors and diagnostics.",
      "Free essential medicines at Amrit Pharmacies."
    ],
    eligibility: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 1000000,
      professions: ["All Citizens"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Aadhaar Card",
      "Doctor Referral Form (from Civil Hospital)",
      "Identity Proof"
    ],
    applicationSteps: [
      "Step 1: Visit OPD of nearest PMSSY / AIIMS hospital.",
      "Step 2: Register at counter with Aadhaar number.",
      "Step 3: Consult specialized department for treatment scheme benefit approval."
    ],
    helpline: "011-23061320",
    officialPortal: "https://pmssy-mohfw.nic.in",
    latestUpdate: "Super-specialty blocks inaugurated across 14 government medical colleges."
  },
  {
    id: "jan-aushadhi",
    title: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
    sector: "Healthcare",
    level: "Central Government",
    shortDesc: "Providing quality generic medicines at 50% to 90% lower prices than market branded drugs.",
    fullDesc: "PMBJP makes high-quality generic medicines accessible and affordable to all citizens through Jan Aushadhi Kendras spread across India.",
    benefits: [
      "50% to 90% discount on over 1,900 essential drugs and 290 surgical items.",
      "All medicines strictly tested for WHO-GMP quality standards.",
      "No income cap required to purchase."
    ],
    eligibility: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 9999999,
      professions: ["All Citizens"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Valid Prescription from Registered Medical Practitioner"
    ],
    applicationSteps: [
      "Step 1: Locate nearest PM Janaushadhi Kendra using the 'Jan Aushadhi Sugam' App.",
      "Step 2: Present doctor's prescription at store counter.",
      "Step 3: Purchase branded generic medicines at heavily discounted prices."
    ],
    helpline: "1800-180-8080",
    officialPortal: "https://janaushadhi.gov.in",
    latestUpdate: "Over 10,000 Jan Aushadhi Kendras currently operational nationwide."
  },
  {
    id: "aarogyasri-state",
    title: "Mukhyamantri Amrutam / State Health Assurance Scheme",
    sector: "Healthcare",
    level: "State Government",
    shortDesc: "State-level cashless health cover up to ₹1,000,000 for BPL & lower-middle-class families.",
    fullDesc: "State government flagship health initiative providing tertiary financial protection for critical illnesses including cardiology, oncology, neurosurgery, and organ transplants.",
    benefits: [
      "Cashless coverage up to ₹10 Lakh per year per family.",
      "Includes follow-up consultation and post-op medication.",
      "Free transport allowance for hospitalized patients."
    ],
    eligibility: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 300000,
      professions: ["State Resident", "BPL Card Holder", "Low Income"],
      states: ["Gujarat", "Maharashtra", "Karnataka", "Tamil Nadu", "Telangana", "Uttar Pradesh"],
      category: "All"
    },
    documents: [
      "Aadhaar Card",
      "State Domicile Certificate",
      "Income Certificate / BPL Card",
      "Ration Card"
    ],
    applicationSteps: [
      "Step 1: Visit district civil hospital or empanelled network hospital.",
      "Step 2: Submit State Health Card or BPL Ration Card at Helpdesk.",
      "Step 3: Pre-authorization request processed online within 2 hours."
    ],
    helpline: "104 / 1800-233-1022",
    officialPortal: "https://mma.gujarat.gov.in",
    latestUpdate: "Limit enhanced to ₹10 Lakh per family annually."
  },

  // --- EDUCATION ---
  {
    id: "post-matric-scholarship",
    title: "Post-Matric Scholarship Scheme for SC/ST/OBC Students",
    sector: "Education",
    level: "Central Government",
    shortDesc: "Financial assistance for higher education (Class 11 to Ph.D.) covering maintenance allowance & tuition fees.",
    fullDesc: "Central Sector scheme providing financial support to marginalized students pursuing post-secondary studies to complete their higher education without financial strain.",
    benefits: [
      "100% compulsory tuition fee reimbursement directly to institution.",
      "Monthly maintenance allowance up to ₹1,200 per month.",
      "Special additional allowance for disabled or hosteller students."
    ],
    eligibility: {
      minAge: 15,
      maxAge: 35,
      maxIncome: 250000,
      professions: ["Student"],
      states: ["All India"],
      category: "SC/ST/OBC/EWS"
    },
    documents: [
      "Caste Certificate",
      "Income Certificate issued by Tehsildar",
      "Class 10th & Last Exam Marksheets",
      "College Fee Receipt & Bonafide Certificate",
      "Aadhaar Card & Bank Passbook"
    ],
    applicationSteps: [
      "Step 1: Register on the National Scholarship Portal (scholarships.gov.in).",
      "Step 2: Fill out personal, academic, and fee structure details.",
      "Step 3: Upload scanned original certificates.",
      "Step 4: Submit application for Institute Level Verification & State Nodal Officer approval."
    ],
    helpline: "0120-6619540",
    officialPortal: "https://scholarships.gov.in",
    latestUpdate: "Direct Benefit Transfer (DBT) enhanced with Aadhaar Payment Bridge System."
  },
  {
    id: "pm-vidya-lakshmi",
    title: "PM Vidyalaxmi Education Loan Scheme",
    sector: "Education",
    level: "Central Government",
    shortDesc: "Collateral-free education loans up to ₹7.5 Lakh with interest subvention for higher studies in top colleges.",
    fullDesc: "PM Vidyalaxmi scheme enables merit-based students admitted to top quality higher education institutions to obtain collateral-free, guarantor-free education loans.",
    benefits: [
      "Collateral-free loan up to ₹7.5 Lakh with 75% credit guarantee.",
      "3% interest subvention during moratorium period for students with annual family income up to ₹8 Lakh.",
      "Single window application portal across 38 top national banks."
    ],
    eligibility: {
      minAge: 17,
      maxAge: 30,
      maxIncome: 800000,
      professions: ["Student"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Aadhaar Card & PAN Card",
      "Admission Offer Letter from recognized institution",
      "Class 10th & 12th Marksheets",
      "Parent Income Proof"
    ],
    applicationSteps: [
      "Step 1: Apply online through PM Vidyalaxmi portal.",
      "Step 2: Choose bank loan options and submit college admission proof.",
      "Step 3: Track real-time loan sanction status directly on portal dashboard."
    ],
    helpline: "1800-180-1111",
    officialPortal: "https://www.vidyalakshmi.co.in",
    latestUpdate: "Newly upgraded to cover top 860 NIRF-ranked higher education institutes."
  },
  {
    id: "pm-shri-schools",
    title: "PM SHRI Schools Scheme (Pradhan Mantri Schools for Rising India)",
    sector: "Education",
    level: "Central Government",
    shortDesc: "Modernizing 14,500+ government schools with smart classrooms, STEM labs, and sports infrastructure.",
    fullDesc: "PM SHRI provides high-quality education in an equitable, inclusive, and joyful school environment that takes care of the diverse background and multilingual needs of students.",
    benefits: [
      "Free access to smart ICT labs, digital classrooms, and robotics kits.",
      "Free textbooks, uniforms, and nutritious PM-POSHAN mid-day meals.",
      "Vocational training integration from Class 6 onwards."
    ],
    eligibility: {
      minAge: 5,
      maxAge: 18,
      maxIncome: 9999999,
      professions: ["Student"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Aadhaar Card / Birth Certificate",
      "Previous Class Transfer Certificate",
      "Passport Size Photo"
    ],
    applicationSteps: [
      "Step 1: Contact nearest PM SHRI designated school administration.",
      "Step 2: Fill admission form under Right to Education (RTE) or general quota.",
      "Step 3: Receive free student digital kit and textbook set."
    ],
    helpline: "011-23382589",
    officialPortal: "https://pmshrischools.education.gov.in",
    latestUpdate: "Over 6,000 schools transformed with green school energy infrastructure."
  },
  {
    id: "state-laptop-scholarship",
    title: "Mukhyamantri Free Laptop / Tablet Distribution Scheme",
    sector: "Education",
    level: "State Government",
    shortDesc: "Free tablets / laptops awarded to meritorious 10th & 12th pass students for higher education empowerment.",
    fullDesc: "State level scheme aimed at digital inclusion for high-performing students from government schools and colleges.",
    benefits: [
      "Free high-spec Laptop or Tablet with pre-installed study material.",
      "Free 1-year high-speed internet data voucher.",
      "Reimbursement of exam preparation fees."
    ],
    eligibility: {
      minAge: 15,
      maxAge: 25,
      maxIncome: 400000,
      professions: ["Student"],
      states: ["Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Bihar", "Gujarat"],
      category: "All"
    },
    documents: [
      "Class 10th / 12th Marksheet (Minimum 65%+ marks)",
      "State Domicile Certificate",
      "Aadhaar Card",
      "Income Certificate"
    ],
    applicationSteps: [
      "Step 1: Register on the State Higher Education scholarship portal.",
      "Step 2: Enter board exam roll number and school code.",
      "Step 3: Collect device voucher from District Education Office upon merit list release."
    ],
    helpline: "1800-180-0011",
    officialPortal: "https://upcmo.up.nic.in",
    latestUpdate: "Next distribution drive scheduled for upcoming academic semester."
  },

  // --- AGRICULTURE ---
  {
    id: "pm-kisan",
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    sector: "Agriculture",
    level: "Central Government",
    shortDesc: "Direct cash benefit of ₹6,000 per year paid in 3 equal installments of ₹2,000 to landholding farmer families.",
    fullDesc: "PM-KISAN is a central sector scheme providing income support to all landholding farmers' families in the country to supplement their financial needs for procuring inputs like seeds and fertilizers.",
    benefits: [
      "Direct Bank Transfer of ₹6,000 per year in 3 installments of ₹2,000.",
      "Zero hassle, direct transfer to Aadhaar-linked bank account.",
      "Automatic eligibility for Kisan Credit Card (KCC) low-interest loans."
    ],
    eligibility: {
      minAge: 18,
      maxAge: 85,
      maxIncome: 600000,
      professions: ["Farmer", "Agricultural Worker"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Landholding Records (Khatauni / 7/12 extract)",
      "Aadhaar Card",
      "Bank Account Passbook (Aadhaar Seeded)",
      "Mobile Number for e-KYC"
    ],
    applicationSteps: [
      "Step 1: Self-register on the PM-KISAN portal (pmkisan.gov.in) or visit nearest CSC Centre.",
      "Step 2: Enter Aadhaar number, land holding details, and bank account number.",
      "Step 3: Complete biometric/face e-KYC.",
      "Step 4: District Agriculture Officer verifies land records for installment release."
    ],
    helpline: "155261 / 1800-115-526",
    officialPortal: "https://pmkisan.gov.in",
    latestUpdate: "17th installment disbursed directly to over 9.2 crore farmers."
  },
  {
    id: "pm- फसल-बीमा",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    sector: "Agriculture",
    level: "Central Government",
    shortDesc: "Comprehensive crop insurance against non-preventable natural risks, pests, and drought with lowest premium rates.",
    fullDesc: "PMFBY aims at supporting sustainable production in agriculture sector by providing financial support to farmers suffering crop loss/damage arising out of natural calamities.",
    benefits: [
      "Very low premium: 1.5% for Rabi crops, 2.0% for Kharif crops, and 5.0% for commercial crops.",
      "Full sum insured coverage without capped claim reductions.",
      "Claim settlement within 21 days using drone technology and satellite crop cutting."
    ],
    eligibility: {
      minAge: 18,
      maxAge: 80,
      maxIncome: 9999999,
      professions: ["Farmer", "Tenant Farmer", "Sharecropper"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Land Record / Tenant Agreement",
      "Sowing Certificate from Sarpanch / Patwari",
      "Aadhaar Card & Bank Passbook"
    ],
    applicationSteps: [
      "Step 1: Log on to PMFBY portal or visit local bank branch before sowing deadline.",
      "Step 2: Select crop type, land area, and insurance company.",
      "Step 3: Pay subsidized farmer premium share and get digital policy receipt."
    ],
    helpline: "1800-200-5142",
    officialPortal: "https://pmfby.gov.in",
    latestUpdate: "'Crop Insurance App' updated for instant 72-hour localized disaster reporting."
  },
  {
    id: "pm-kisan-maan-dhan",
    title: "PM Kisan Maandhan Yojana (Pension for Farmers)",
    sector: "Agriculture",
    level: "Central Government",
    shortDesc: "Guaranteed monthly pension of ₹3,000 after attaining 60 years of age for small & marginal farmers.",
    fullDesc: "Voluntary and contributory pension scheme for small and marginal farmers (SMFs) having cultivable land up to 2 hectares.",
    benefits: [
      "Guaranteed minimum pension of ₹3,000 per month on turning 60.",
      "50% matching contribution paid by Central Government.",
      "Spouse entitled to 50% family pension in case of death."
    ],
    eligibility: {
      minAge: 18,
      maxAge: 40,
      maxIncome: 300000,
      professions: ["Farmer", "Small Farmer"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Aadhaar Card",
      "PM-KISAN Savings Bank Account details",
      "Land holding document (up to 2 hectares)"
    ],
    applicationSteps: [
      "Step 1: Visit nearest Common Services Centre (CSC).",
      "Step 2: Submit monthly contribution auto-debit consent form.",
      "Step 3: Receive Pension Card with unique Kisan Pension Number."
    ],
    helpline: "1800-3000-3468",
    officialPortal: "https://pmkmy.gov.in",
    latestUpdate: "Auto-debit facility directly integrated with PM-KISAN installment credits."
  },
  {
    id: "agri-infrastructure-fund",
    title: "Agriculture Infrastructure Fund (AIF)",
    sector: "Agriculture",
    level: "Central Government",
    shortDesc: "3% interest subvention and credit guarantee for setting up cold storages, warehouses, and processing units.",
    fullDesc: "Medium-long term debt financing facility for investment in viable projects for post-harvest management Infrastructure and community farming assets.",
    benefits: [
      "3% per annum interest subvention on loans up to ₹2 Crore.",
      "Credit guarantee coverage under CGTMSE for loans up to ₹2 Crore.",
      "Repayment moratorium up to 2 years."
    ],
    eligibility: {
      minAge: 21,
      maxAge: 65,
      maxIncome: 9999999,
      professions: ["Farmer", "Agri-Entrepreneur", "Farmer Producer Organization (FPO)", "Self-Help Group"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Detailed Project Report (DPR)",
      "Land Ownership / Lease Agreement",
      "PAN Card & Aadhaar Card",
      "Bank Loan Sanction Letter"
    ],
    applicationSteps: [
      "Step 1: Register project on AgriInfra portal (agriinfra.dac.gov.in).",
      "Step 2: Choose participating bank for loan application.",
      "Step 3: Ministry of Agriculture approves interest subvention automatically."
    ],
    helpline: "011-23381176",
    officialPortal: "https://agriinfra.dac.gov.in",
    latestUpdate: "Expanded to include modern grading, sorting, and solar powered cold storage units."
  },

  // --- EMPLOYMENT & SKILLING ---
  {
    id: "pm-mudra-loan",
    title: "Pradhan Mantri MUDRA Yojana (PMMY)",
    sector: "Employment",
    level: "Central Government",
    shortDesc: "Collateral-free business loans up to ₹20 Lakh (Shishu, Kishore, Tarun & Tarun Plus) for small enterprises & self-employed.",
    fullDesc: "PMMY provides loans up to ₹20 Lakh to non-corporate, non-farm small/micro enterprises to generate self-employment and business growth.",
    benefits: [
      "No collateral or third-party guarantor required.",
      "Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh), and Tarun Plus (up to ₹20 Lakh).",
      "MUDRA Debit Card issued for seamless working capital drawdown."
    ],
    eligibility: {
      minAge: 18,
      maxAge: 65,
      maxIncome: 9999999,
      professions: ["Self-Employed", "Entrepreneur", "Shopkeeper", "Artisan", "Unorganized Worker", "Trader"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Business Proposal / Pitch Note",
      "Aadhaar Card & PAN Card",
      "Proof of Business Identity / GST Registration (if applicable)",
      "Bank Account Statement for last 6 months"
    ],
    applicationSteps: [
      "Step 1: Apply online through JanSamarth portal (jansamarth.in) or visit any commercial bank.",
      "Step 2: Fill MUDRA loan application form selecting appropriate loan category.",
      "Step 3: Submit proof of identity and business quotation.",
      "Step 4: Bank verifies and disburses loan amount directly to business account."
    ],
    helpline: "1800-180-1111 / 1800-110-001",
    officialPortal: "https://www.mudra.org.in",
    latestUpdate: "MUDRA Tarun Plus limit doubled from ₹10 Lakh to ₹20 Lakh in latest Union Budget."
  },
  {
    id: "pm-vishwakarma",
    title: "PM Vishwakarma Yojana",
    sector: "Employment",
    level: "Central Government",
    shortDesc: "Holistic support for traditional artisans & craftspeople with collateral-free loans up to ₹3 Lakh at 5% interest.",
    fullDesc: "PM Vishwakarma provides end-to-end support to artisans and craftspeople engaged in 18 traditional trades including carpenters, blacksmiths, goldsmiths, potters, and tailors.",
    benefits: [
      "Collateral-free credit support: ₹1 Lakh (1st tranche) and ₹2 Lakh (2nd tranche) at concessionary 5% interest rate.",
      "₹15,000 Toolkit Incentive voucher.",
      "Skill training stipend of ₹500 per day during basic & advanced training.",
      "PM Vishwakarma Certificate & ID Card."
    ],
    eligibility: {
      minAge: 18,
      maxAge: 70,
      maxIncome: 500000,
      professions: ["Artisan", "Craftsperson", "Blacksmith", "Carpenter", "Potter", "Tailor", "Mason", "Cobbler"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Aadhaar Card",
      "Mobile Number linked to Aadhaar",
      "Bank Account Details",
      "Trade Specific Skill Verification"
    ],
    applicationSteps: [
      "Step 1: Register at nearest CSC with Aadhaar biometric authentication.",
      "Step 2: Three-step verification: Gram Panchayat level, District Implementation Committee, and Screening Committee.",
      "Step 3: Receive Digital ID Card, toolkit voucher, and attend 5-day basic skill training."
    ],
    helpline: "1800-267-7777",
    officialPortal: "https://pmvishwakarma.gov.in",
    latestUpdate: "Over 20 lakh applications approved across traditional trade categories."
  },
  {
    id: "mgnrega-employment",
    title: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
    sector: "Employment",
    level: "Central Government",
    shortDesc: "Guarantees 100 days of wage employment in a financial year to rural households for manual work.",
    fullDesc: "MGNREGA aims to enhance livelihood security in rural areas by providing at least 100 days of guaranteed wage employment in a financial year to every household whose adult members volunteer to do unskilled manual work.",
    benefits: [
      "Guaranteed minimum 100 days wage employment per rural household.",
      "Direct bank transfer of daily wages within 15 days.",
      "Unemployment allowance if work is not provided within 15 days of applying."
    ],
    eligibility: {
      minAge: 18,
      maxAge: 70,
      maxIncome: 200000,
      professions: ["Rural Household", "Unskilled Worker", "Daily Wager"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Job Card Registration",
      "Aadhaar Card",
      "Bank Passbook"
    ],
    applicationSteps: [
      "Step 1: Submit written application for Job Card to local Gram Panchayat.",
      "Step 2: Gram Panchayat issues Job Card after verification.",
      "Step 3: Submit application for work and receive work allocation notice within 15 days."
    ],
    helpline: "1800-111-555",
    officialPortal: "https://nrega.nic.in",
    latestUpdate: "Aadhaar-based payment system (ABPS) mandated for 100% transparent wage disbursement."
  },
  {
    id: "pm-kaushal-vikas",
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
    sector: "Employment",
    level: "Central Government",
    shortDesc: "Free industry-relevant skill training, certification, and placement assistance for Indian youth.",
    fullDesc: "PMKVY 4.0 aims to encourage skill development for youth to take up industry-relevant skill training that will help them in securing a better livelihood.",
    benefits: [
      "100% free short-term skill training in AI, Robotics, Drones, IoT, and Industry 4.0 trades.",
      "Government NSQF Skill Certification recognized globally.",
      "Stipend allowance and direct job placement support."
    ],
    eligibility: {
      minAge: 15,
      maxAge: 45,
      maxIncome: 9999999,
      professions: ["Student", "Unemployed Youth", "Worker"],
      states: ["All India"],
      category: "All"
    },
    documents: [
      "Aadhaar Card",
      "Educational Qualification Proof",
      "Bank Account Details"
    ],
    applicationSteps: [
      "Step 1: Register on the Skill India Digital Hub (skillindiadigital.gov.in).",
      "Step 2: Choose desired job role and nearest PMKVY Training Centre.",
      "Step 3: Complete training, clear practical assessment, and get job placement."
    ],
    helpline: "08800055555",
    officialPortal: "https://www.pmkvyofficial.org",
    latestUpdate: "PMKVY 4.0 introduces modern future-skills courses including EV technician and Drone piloting."
  }
];

// Helper to filter schemes by Sector, Level, Search Query, and User Eligibility
export function filterSchemes(schemes, filters = {}) {
  const {
    sector = "All",
    level = "All",
    search = "",
    age = null,
    income = null,
    profession = "All",
    category = "All"
  } = filters;

  return schemes.filter((scheme) => {
    // Sector filter
    if (sector !== "All" && scheme.sector.toLowerCase() !== sector.toLowerCase()) {
      return false;
    }

    // Level filter (Central vs State)
    if (level !== "All" && scheme.level.toLowerCase() !== level.toLowerCase()) {
      return false;
    }

    // Search query filter
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const matchTitle = scheme.title.toLowerCase().includes(q);
      const matchDesc = scheme.shortDesc.toLowerCase().includes(q);
      const matchSector = scheme.sector.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchSector) {
        return false;
      }
    }

    // Age criteria
    if (age !== null && age !== "") {
      const numAge = Number(age);
      if (numAge < scheme.eligibility.minAge || numAge > scheme.eligibility.maxAge) {
        return false;
      }
    }

    // Income criteria
    if (income !== null && income !== "") {
      const numIncome = Number(income);
      if (numIncome > scheme.eligibility.maxIncome) {
        return false;
      }
    }

    // Category
    if (category !== "All" && scheme.eligibility.category !== "All" && !scheme.eligibility.category.includes(category)) {
      return false;
    }

    return true;
  });
}

// Calculate User Match Percentage for a Scheme
export function calculateMatchScore(userProfile, scheme) {
  if (!userProfile || (!userProfile.age && !userProfile.income)) return 90;

  let totalWeight = 0;
  let score = 0;

  // Age match
  if (userProfile.age) {
    totalWeight += 30;
    const uAge = Number(userProfile.age);
    if (uAge >= scheme.eligibility.minAge && uAge <= scheme.eligibility.maxAge) {
      score += 30;
    } else {
      score += 10;
    }
  }

  // Income match
  if (userProfile.income) {
    totalWeight += 35;
    const uIncome = Number(userProfile.income);
    if (uIncome <= scheme.eligibility.maxIncome) {
      score += 35;
    } else {
      score += 10;
    }
  }

  // Occupation match
  if (userProfile.occupation) {
    totalWeight += 20;
    const isMatch = scheme.eligibility.professions.some((p) =>
      p.toLowerCase().includes(userProfile.occupation.toLowerCase()) ||
      userProfile.occupation.toLowerCase().includes(p.toLowerCase()) ||
      p === "All Citizens"
    );
    if (isMatch) score += 20;
    else score += 10;
  }

  // Social Category match
  if (userProfile.category) {
    totalWeight += 15;
    if (scheme.eligibility.category === "All" || scheme.eligibility.category.includes(userProfile.category)) {
      score += 15;
    } else {
      score += 5;
    }
  }

  if (totalWeight === 0) return 92;
  const matchPct = Math.round((score / totalWeight) * 100);
  return Math.min(Math.max(matchPct, 65), 98);
}
