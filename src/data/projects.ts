export type Project = {
  slug: string;
  title: string;
  date: string;
  customer: string;
  summary: string;
  detail: string;
  image?: "gas-fire";
};

export const PROJECTS: Project[] = [
  {
    slug: "gas-fire-mark",
    title: "Gas fire fit",
    date: "January 2026",
    customer: "Mark S",
    summary: "A gas fire fitted, with the room left clean.",
    detail:
      "Mark wrote that Darren arrived on time, fitted a gas fire, and left the place clean and tidy. The photo is the gas fire picture on the Google profile. It shows the fire in a tiled surround. The hearth tiles at the base were still open when the photo was taken, so this is a real job photo, not a styled one.",
    image: "gas-fire",
  },
  {
    slug: "combi-boiler-laura",
    title: "New combi boiler",
    date: "November 2025",
    customer: "laura d",
    summary: "A new combi boiler, plus breakdown cover on other visits.",
    detail:
      "Laura wrote that she has used Devine Plumbing more than once: a new combi boiler, emergency breakdowns, and routine maintenance. She said the price was fair and that the work was explained. We do not have a photo of that boiler, so we are not inventing one.",
  },
  {
    slug: "friday-night-leak-nick",
    title: "Friday night flood",
    date: "May 2025",
    customer: "Nick (wegyman1)",
    summary: "A shower pump let go, then the stopcock leaked.",
    detail:
      "A shower pump fitting failed and sent hot water through the ceiling. When the household tried to shut the water off, the downstairs stopcock started to leak as well. Darren came out the same Friday evening, stopped the shower leak, and dealt with the stopcock so it would not fail again. The owner’s reply thanks Nick by name.",
  },
  {
    slug: "boiler-taps-dishwasher-james",
    title: "Boiler valve, taps and a dishwasher",
    date: "November 2025",
    customer: "James Reeves",
    summary: "Three jobs in a house Darren already knew.",
    detail:
      "James wrote that Darren has been the plumber for a couple of years. On this visit the work was a leaking tundish that needed a new boiler valve, new bathroom taps, and an integrated dishwasher. James also wrote that Darren is on the Gas Safe register.",
  },
];
