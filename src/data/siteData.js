// Prakrithi Nature Cure Hospital - Centralized Data & Configuration Repository
// Source: Legacy Prakrithi Nature Cure Hospital records & updated facility details

export const siteConfig = {
  hospitalName: "Prakrithi Nature Cure Hospital",
  shortName: "Prakrithi",
  subtitle: "Natural Life & Yoga",
  slogan: "A Paradise of Nature Cure & Holistic Healing in Perumbavoor",
  registrationNo: "ER/779/08",
  societyType: "Non-Profitable Charitable Society",
  bedFacility: 20,
  doctorsCount: 7,

  // WhatsApp Configuration (Configurable number without spaces or special chars)
  whatsappNumber: "919995006118",
  whatsappDefaultMessage: "Hello Prakrithi Nature Cure Hospital, I would like to inquire about naturopathy treatments and admission at your Perumbavoor facility.",

  // Contact Details
  contact: {
    primaryPhone: "+91-9995006118",
    formattedPrimaryPhone: "+91 999 500 6118",
    secondaryPhones: [
      "+91-7306432205",
      "+91-9961884994",
      "+91-484-2595176",
      "+91-484-2595177"
    ],
    address: {
      line1: "Prakrithi Nature Cure Hospital",
      street: "Sophiya College Road",
      city: "Perumbavoor",
      district: "Ernakulam District",
      state: "Kerala",
      pinCode: "683542",
      country: "India",
      fullAddress: "Prakrithi Hospital, Sophiya College Road, Perumbavoor, Kerala 683542, India"
    },
    landmarks: "Situated on Sophiya College Road, Perumbavoor, in Sophiya College Inn. Easily accessible from Kochi International Airport (COK) and major Ernakulam transport links.",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Prakrithi+Natural+Life,+Sophiya+College+Road,+Perumbavoor,+Keralam+683542",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.568326490696!2d76.46795277503304!3d10.112815300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e3e8c11fcdb1%3A0xcf39292a0a5311c7!2sPrakrithi%20Natural%20Life!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    emailPlaceholder: "enquiry@prakrithihospital.org",
    operatingHours: "Open 7 Days a Week: 8:00 AM – 7:00 PM (In-patient care 24/7)"
  },

  // Navigation Links
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Hospital", path: "/hospital" },
    { name: "Contact Us", path: "/contact" }
  ]
};

export const doctorsData = {
  fullTime: [
    {
      id: "doc-1",
      name: "Dr. Tomson T.V",
      qualification: "DNYS",
      role: "Chief Medical Officer",
      phone: "+91-9995006118",
      formattedPhone: "+91 999 500 6118",
      specialty: "Naturopathy & Clinical Yoga",
      image: "/assets/doctors/dr-tomson-tv.jpg"
    },
    {
      id: "doc-2",
      name: "Dr. Sandhya Vijesh",
      qualification: "DNYS",
      role: "Senior Naturopathic Physician",
      phone: "+91-7306432205",
      formattedPhone: "+91 730 643 2205",
      specialty: "Dietary Therapy & Hydrotherapy",
      image: "/assets/doctors/dr-sandhya-vijesh.jpg"
    },
    {
      id: "doc-3",
      name: "Dr. Biju",
      qualification: "DNYS",
      role: "Naturopathic Physician",
      phone: "+91-9961884994",
      formattedPhone: "+91 996 188 4994",
      specialty: "Physiotherapy & Rejuvenation Therapy",
      image: "/assets/doctors/dr-biju.jpg"
    },
    {
      id: "doc-4",
      name: "Dr. V.S. Sudheer",
      qualification: "Yogacharya",
      role: "Chief Yoga Specialist & Consultant",
      phone: "+91-9447133037",
      formattedPhone: "+91 944 713 3037",
      specialty: "Therapeutic Yoga & Meditation",
      image: "/assets/doctors/dr-vs-sudheer.jpg"
    }
  ],
  visiting: [
    {
      id: "doc-5",
      name: "Dr. Antony N.P",
      qualification: "N.D",
      role: "Visiting Specialist",
      phone: "+91-4842516784"
    },
    {
      id: "doc-6",
      name: "Dr. Suseela Bageeradhan",
      qualification: "NDDY",
      role: "Visiting Specialist",
      phone: "+91-9895799562"
    },
    {
      id: "doc-7",
      name: "Dr. Soumya Raj",
      qualification: "NDDY",
      role: "Visiting Specialist",
      phone: "+91-9496153680"
    }
  ]
};

export const treatmentsData = [
  {
    id: "yoga-meditation",
    title: "Yoga & Meditation",
    shortDesc: "Keep fit, rejuvenate your body, and calm your mind with therapeutic yogic practices.",
    fullDesc: "Therapeutic yoga postures, breathing exercises (Pranayama), and structured meditation sessions to restore mental equilibrium and physical vitality.",
    icon: "Activity"
  },
  {
    id: "weight-reduction",
    title: "Weight Reduction Program",
    shortDesc: "Comprehensive slimming program including custom diet, mud bath, sun bath, wet pack, and yoga.",
    fullDesc: "Specialized weight management assessing body constitution and metabolic rate to address the root causes of excess weight without drugs.",
    icon: "Scale"
  },
  {
    id: "hydrotherapy",
    title: "Hydrotherapy (Spinal & Hip Bath)",
    shortDesc: "Regulated water baths including spinal bath and hip bath to boost systemic circulation.",
    fullDesc: "Targeted application of water at varying temperatures to stimulate nerve endings, tone internal organs, and relieve inflammation.",
    icon: "Droplets"
  },
  {
    id: "mud-wet-pack",
    title: "Mud Therapy & Wet Packs",
    shortDesc: "Natural earth mud baths, wet packs, eye packs, and throat washes for deep detoxification.",
    fullDesc: "Application of mineral-rich mud and cool wet compresses to absorb toxins, reduce internal heat, and enhance localized blood flow.",
    icon: "Sparkles"
  },
  {
    id: "sun-bath",
    title: "Sun Bath (Helio-Therapy)",
    shortDesc: "Controlled exposure to morning solar energy to revitalize skin, bone, and immunity.",
    fullDesc: "Harnessing natural solar rays to stimulate Vitamin D synthesis, boost metabolic processes, and purify skin tissue.",
    icon: "Sun"
  },
  {
    id: "cleansing-washes",
    title: "Eye Wash, Nose Wash & Enema",
    shortDesc: "Gentle natural cleansing procedures (Eye wash, Jala Neti, Enema) for internal purity.",
    fullDesc: "Traditional yogic and nature cure wash techniques to cleanse ocular passages, nasal pathways, and lower digestive tract safely.",
    icon: "Eye"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    shortDesc: "Targeted physiological exercise and movement therapy for pain relief and joint health.",
    fullDesc: "Therapeutic movement exercises, physical alignment, and rehabilitation routines to relieve chronic musculoskeletal stiffness, joint pain, and mobility issues.",
    icon: "Activity"
  },
  {
    id: "steam-bath",
    title: "Steam Bath Therapy",
    shortDesc: "Therapeutic herbal steam bath for deep pore cleansing and metabolic elimination.",
    fullDesc: "Warm medicated moisture steam to open skin pores, induce therapeutic sweating, release subcutaneous toxins, and relieve muscle stiffness.",
    icon: "Cloud"
  },
  {
    id: "fasting-diet",
    title: "Diet & Fasting Therapy",
    shortDesc: "Custom therapeutic diet plans, fresh fruit juice therapy, and guided elimination fasting.",
    fullDesc: "Allowing the digestive system to rest and cleanse using raw natural foods, herbal drinks, and controlled therapeutic fasting.",
    icon: "Utensils"
  }
];

export const ailmentsList = [
  { name: "Diabetes", category: "Metabolic", desc: "Enjoy life without unnecessary insulin/tablets through natural lifestyle management." },
  { name: "Obesity", category: "Metabolic", desc: "Special weight reduction program targeting constitutional metabolic causes." },
  { name: "Hypertension (B.P)", category: "Cardiovascular", desc: "100% natural recovery from lifestyle-induced blood pressure elevation." },
  { name: "Cholesterol", category: "Cardiovascular", desc: "Natural lipid regulation through targeted dietary and hydrotherapy protocols." },
  { name: "Heart Diseases", category: "Cardiovascular", desc: "Live with a healthy heart and avoid heart attacks with preventive care." },
  { name: "Arthritis", category: "Musculoskeletal", desc: "Relieve joint inflammation and pain through mud packs and spinal baths." },
  { name: "Back Ache", category: "Musculoskeletal", desc: "Therapeutic yoga, spinal baths, and physiotherapy for spinal wellness." },
  { name: "Constipation", category: "Digestive", desc: "Restore bowel regularity using natural enema, wet packs, and fiber-rich diets." },
  { name: "Piles", category: "Digestive", desc: "Gentle naturopathic hip baths and soothing dietary protocols." },
  { name: "Migraine", category: "Neurological", desc: "Relieve chronic vascular headaches with therapeutic wet packs and yoga." },
  { name: "Asthma", category: "Respiratory", desc: "Enhance lung capacity through Pranayama, sun bath, and chest wet packs." },
  { name: "Allergies", category: "Immune", desc: "Strengthen natural immune tolerance through systemic detoxification." },
  { name: "Psoriasis", category: "Dermatological", desc: "Sun bath, mud application, and dietary elimination for skin rejuvenation." },
  { name: "Menstrual Disorders", category: "Reproductive", desc: "Hormonal balance via therapeutic hip baths and gentle yogic postures." },
  { name: "Infertility", category: "Reproductive", desc: "Natural reproductive system cleansing and vitality enhancement." },
  { name: "Kidney Problems", category: "Renal", desc: "Hydro-therapeutic support and controlled dietary liquid protocols." },
  { name: "Thyroid Problems", category: "Endocrine", desc: "Throat packs, physiotherapy support, and metabolic regulation techniques." },
  { name: "Eye Problems", category: "Ocular", desc: "Specialized eye washes and eye pack therapies for visual strain." },
  { name: "Psychological Problems", category: "Mental Health", desc: "Meditation, serene green setting, and mental relaxation therapies." },
  { name: "Cancer Care (Supportive)", category: "Oncology Support", desc: "Holistic supportive nature cure to enhance vitality and comfort." }
];

export const dailyTimetable = [
  { time: "05:00 AM", activity: "Wake up & Morning Hydration", icon: "Sunrise", category: "Morning Routine" },
  { time: "06:00 AM", activity: "Herbal Drinks", icon: "Coffee", category: "Nutrition" },
  { time: "06:45 AM", activity: "Yoga & Pranayama Session", icon: "Heart", category: "Exercise" },
  { time: "08:00 AM", activity: "Sun Bath (Helio-Therapy)", icon: "Sun", category: "Therapy" },
  { time: "08:30 AM", activity: "Natural Breakfast", icon: "Utensils", category: "Nutrition" },
  { time: "09:30 AM", activity: "Doctor's Rounds & Consultations", icon: "Stethoscope", category: "Medical" },
  { time: "10:00 AM", activity: "Morning Naturopathy Treatments (Hydro, Mud, Packs)", icon: "Droplets", category: "Therapy" },
  { time: "11:00 AM", activity: "Fresh Fruit Juice Time", icon: "GlassWater", category: "Nutrition" },
  { time: "12:30 PM", activity: "Nutritious Naturopathic Lunch", icon: "Utensils", category: "Nutrition" },
  { time: "02:30 PM", activity: "Afternoon Treatments & Physiotherapy", icon: "Activity", category: "Therapy" },
  { time: "04:30 PM", activity: "Evening Sun Bath / Nature Walk", icon: "Footprints", category: "Exercise" },
  { time: "05:40 PM", activity: "Meditation & Relaxation", icon: "Brain", category: "Mindfulness" },
  { time: "06:15 PM", activity: "Light Healthy Dinner", icon: "Utensils", category: "Nutrition" },
  { time: "08:00 PM", activity: "Evening Prayer & Community Get-Together", icon: "Users", category: "Social" },
  { time: "08:30 PM", activity: "Health Awareness & Naturopathy Class", icon: "BookOpen", category: "Education" },
  { time: "10:00 PM", activity: "Rest & Lights Off", icon: "Moon", category: "Night Routine" }
];
