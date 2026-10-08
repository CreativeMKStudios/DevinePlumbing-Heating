export const SITE = {
  name: "Devine Plumbing and Heating",
  person: "Darren",
  phoneDisplay: "07436 135412",
  tel: "tel:+447436135412",
  sms: "sms:+447436135412",
  placeId: "ChIJSTLlkQjN0oMRPxOECxzB98k",
  mapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJSTLlkQjN0oMRPxOECxzB98k",
  mapsShare: "https://maps.app.goo.gl/zV4aVA6rNMZFdy3z6",
  reviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJSTLlkQjN0oMRPxOECxzB98k",
  lat: 52.7814341,
  lng: -0.4570646,
  rating: 5,
  reviewCount: 13,
  ratingChecked: "2026-10-08",
  googleDescription:
    "Looking for reliable plumbing and heating service local to Bedfordshire? We have got you covered.",
  pinLabel: "Near Edenham, South Kesteven, Lincolnshire",
  hoursLabel: "Open 24 hours",
  category: "Plumber",
} as const;

export const NAV = [
  { href: "/about", label: "Our firm" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;
