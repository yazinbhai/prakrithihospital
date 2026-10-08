import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title 
      ? `${title} | Prakrithi Nature Cure Hospital` 
      : 'Prakrithi Nature Cure Hospital | Naturopathy & Yoga Center in Perumbavoor, Kerala';

    const metaDescription = document.querySelector('meta[name="description"]');
    const defaultDesc = "Prakrithi Nature Cure Hospital, Sophiya College Road, Perumbavoor, Kerala. A non-profit charitable society offering holistic Naturopathy treatments, Yoga, Weight Reduction programs, and drugless healing.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDesc);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || defaultDesc;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
