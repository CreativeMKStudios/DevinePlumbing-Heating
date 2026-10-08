export type Review = {
  name: string;
  date: string;
  dateLabel: string;
  stars: 5;
  meta: string;
  text: string;
  reply: string;
  replyDate: string;
};

/** Five reviews Google showed in full on 8 October 2026. The profile total is 13. */
export const REVIEWS: Review[] = [
  {
    name: "James Reeves",
    date: "2025-11-29",
    dateLabel: "29 Nov 2025",
    stars: 5,
    meta: "Local Guide · 366 reviews",
    text: "Darren has been our go to for our plumbing woes for a couple of years now. We had a leaky tundish requiring a new valve on our boiler, needed new bathroom taps and a new integrated dishwasher and took care of these with ease. Friendliest guy you’ll ever meet and he’s on the gas safe register.\n\nThis is your guy!",
    reply: "Thanks james top review!",
    replyDate: "29 Nov 2025",
  },
  {
    name: "Mark S",
    date: "2026-01-31",
    dateLabel: "31 Jan 2026",
    stars: 5,
    meta: "8 reviews · 6 photos",
    text: "Darren came to fit a gas fire for me. He arrived on time, did a great job, clean and tidy and very professional. I would not hesitate to recommend him.",
    reply: "Thanks mark!",
    replyDate: "31 Jan 2026",
  },
  {
    name: "Joanna Saunders",
    date: "2025-02-22",
    dateLabel: "22 Feb 2025",
    stars: 5,
    meta: "1 review",
    text: "Brilliant work by Darren today. Darren is clearly a very experienced and competent plumber who is also very helpful, friendly, polite and also takes pride in what he does. Absolutely amazing, I will be keeping Darren’s details for future plumbing and heating works.",
    reply: "Thank you joanna. Much appreciated 🙏",
    replyDate: "22 Feb 2025",
  },
  {
    name: "laura d",
    date: "2025-11-11",
    dateLabel: "11 Nov 2025",
    stars: 5,
    meta: "11 reviews",
    text: "We’ve used Devine Plumbing several times for a variety of services, including new combi boiler installation, emergency breakdown support and routine maintenance. He is reliable, competitively priced, friendly and takes the time to explain and ensure a thorough and high quality service has been provided. Would highly recommend!",
    reply: "Thanks laura happy to help",
    replyDate: "29 Nov 2025",
  },
  {
    name: "wegyman1",
    date: "2025-05-20",
    dateLabel: "20 May 2025",
    stars: 5,
    meta: "2 reviews",
    text: "A fitting to our shower pump failed and shot hot water everywhere, flooding upstairs and leaking through the ceiling, on top of that the stop cock down stairs started to leak as we tried to turn it.\n\nDarren came asap on a Friday evening to sort us out, originally just to stop the shower pump leak which he did no problem, but once he saw the stop cock he knew he couldn’t leave it, he really went above and beyond to not only fix our current problem but prevent a future one from causing greater damage!\n\nCould not recommend Darren’s services enough!",
    reply: "Thank you for the great review nick!",
    replyDate: "20 May 2025",
  },
];

export const REVIEW_TOPICS = [
  { label: "Punctuality", count: 5 },
  { label: "Boiler", count: 4 },
  { label: "Heating", count: 3 },
  { label: "Quality of work", count: 3 },
  { label: "Stopcock", count: 2 },
  { label: "Stop cock repair", count: 2 },
  { label: "Routine maintenance", count: 2 },
  { label: "Quick response", count: 2 },
  { label: "Shower repair", count: 2 },
] as const;
