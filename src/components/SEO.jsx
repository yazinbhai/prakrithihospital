import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig, doctorsData, treatmentsData } from '../data/siteData';

export default function SEO({ title, description, image }) {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = 'https://www.prakrithihospital.com';
    const currentUrl = `${baseUrl}${location.pathname}`;
    const pageTitle = title 
      ? `${title} | Prakrithi Nature Cure Hospital` 
      : `${siteConfig.hospitalName} | Naturopathy & Yoga Center in Perumbavoor, Kerala`;

    const defaultDesc = "Prakrithi Nature Cure Hospital, Sophiya College Road, Perumbavoor, Keralam 683542. Non-profit charitable society (Reg. ER/779/08) offering drugless naturopathy, clinical yoga, 20-bed in-patient care, and weight reduction.";
    const pageDesc = description || defaultDesc;
    const pageImage = image ? `${baseUrl}${image}` : `${baseUrl}/logo_final2.png`;

    // 1. Title
    document.title = pageTitle;

    // Helper to update or create meta tags
    const setMetaTag = (selector, attributeName, attributeValue, contentValue) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Standard Meta
    setMetaTag('meta[name="description"]', 'name', 'description', pageDesc);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('meta[name="author"]', 'name', 'author', siteConfig.hospitalName);

    // 3. Geo Meta Tags for Local & AI Search
    setMetaTag('meta[name="geo.region"]', 'name', 'geo.region', 'IN-KL');
    setMetaTag('meta[name="geo.placename"]', 'name', 'geo.placename', 'Perumbavoor, Ernakulam, Kerala');
    setMetaTag('meta[name="geo.position"]', 'name', 'geo.position', '10.1128153;76.4705277');
    setMetaTag('meta[name="ICBM"]', 'name', 'ICBM', '10.1128153, 76.4705277');

    // 4. Open Graph Meta Tags
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', siteConfig.hospitalName);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', pageDesc);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', pageImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 5. Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', pageDesc);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', pageImage);

    // 6. Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 7. Structured Data JSON-LD Generation
    const allDoctors = [...doctorsData.fullTime, ...doctorsData.visiting];

    const hospitalSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${baseUrl}/#hospital`,
      "name": siteConfig.hospitalName,
      "alternateName": ["Prakrithi Natural Life", "Prakrithi Hospital", "Prakrithi Naturopathy Center"],
      "url": baseUrl,
      "logo": `${baseUrl}/logo_final2.png`,
      "image": `${baseUrl}/assets/photo.jpg`,
      "telephone": siteConfig.contact.primaryPhone,
      "email": siteConfig.contact.emailPlaceholder,
      "description": siteConfig.slogan,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address.street,
        "addressLocality": siteConfig.contact.address.city,
        "addressRegion": siteConfig.contact.address.state,
        "postalCode": siteConfig.contact.address.pinCode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.1128153,
        "longitude": 76.4705277
      },
      "hasMap": siteConfig.contact.googleMapsUrl,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "19:00"
        }
      ],
      "medicalSpecialty": [
        "Naturopathic",
        "Dietary",
        "Physiotherapy",
        "Hydrotherapy"
      ],
      "availableService": treatmentsData.map((t) => ({
        "@type": "MedicalTherapy",
        "name": t.title,
        "description": t.fullDesc
      })),
      "employee": allDoctors.map((d) => ({
        "@type": "Physician",
        "name": d.name,
        "jobTitle": `${d.qualification} - ${d.role}`,
        "telephone": d.phone
      }))
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Prakrithi Nature Cure Hospital located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prakrithi Nature Cure Hospital is located on Sophiya College Road, Perumbavoor, Ernakulam District, Kerala 683542, India (near Sophiya College & Sophiya College Inn)."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are offered at Prakrithi Nature Cure Hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prakrithi Nature Cure Hospital offers drugless naturopathy treatments including Yoga & Meditation, Weight Reduction Program, Hydrotherapy (Spinal & Hip baths), Mud Therapy & Wet Packs, Helio-Therapy (Sun bath), Physiotherapy, Steam Bath Therapy, Eye/Nose Washes & Enema, and Pure Organic Diet & Fasting Therapy."
          }
        },
        {
          "@type": "Question",
          "name": "Is Prakrithi Nature Cure Hospital a registered non-profit organization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Prakrithi Nature Cure Hospital is a Non-Profitable Charitable Society registered under registration number ER/779/08."
          }
        },
        {
          "@type": "Question",
          "name": "What is the bed capacity of Prakrithi Nature Cure Hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The hospital has an in-patient accommodation capacity of 20 beds with 24/7 care."
          }
        },
        {
          "@type": "Question",
          "name": "How to contact or make an enquiry at Prakrithi Nature Cure Hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Prakrithi Nature Cure Hospital by calling +91-9995006118, +91-9947534191, +91-9961884994, or through WhatsApp at +91 999 500 6118."
          }
        }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${baseUrl}/`
        },
        ...(location.pathname !== '/' ? [
          {
            "@type": "ListItem",
            "position": 2,
            "name": title || location.pathname.replace('/', '').toUpperCase(),
            "item": currentUrl
          }
        ] : [])
      ]
    };

    // Inject or update JSON-LD scripts
    const injectJsonLd = (id, data) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    injectJsonLd('jsonld-hospital', hospitalSchema);
    injectJsonLd('jsonld-faq', faqSchema);
    injectJsonLd('jsonld-breadcrumb', breadcrumbSchema);

  }, [title, description, image, location.pathname]);

  return null;
}
