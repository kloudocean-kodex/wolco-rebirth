export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Wolco Homes",
    url: "https://wolcohomes.com.au/",
    telephone: "1300 16 36 66",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9/28 Longford Road",
      addressLocality: "Epping",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: "Melbourne, Victoria",
    knowsAbout: [
      "Custom homes",
      "Knockdown rebuilds",
      "House and land",
      "Home design",
      "Residential construction",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
