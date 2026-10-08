export type Area = {
  slug: string;
  name: string;
  county: string;
  description: string;
  paragraphs: string[];
};

export const AREAS: Area[] = [
  {
    slug: "bedford",
    name: "Bedford",
    county: "Bedfordshire",
    description:
      "Plumber in Bedford. Devine Plumbing and Heating covers plumbing and heating for homes in the county town. Call 07436 135412.",
    paragraphs: [
      "Bedford is the town most people mean when they say central Bedfordshire. The Google description for Devine Plumbing and Heating says the business is local to Bedfordshire. Call or text with your postcode so Darren can say yes or no for that street.",
      "The town has tight Victorian terraces near the centre, 1930s houses further out, and newer estates on the edges. Older houses often hide the stopcock in a cupboard that has been boxed in. Newer houses usually have it where the main comes in, still worth finding before you need it.",
      "Tap water here is hard. Scale builds up in kettles, shower heads and inside a boiler heat exchanger. If the hot water has slowed down, or a tap has gone crusty, say so when you book. It changes what we look at first.",
      "Parking in the centre can be a squeeze. If there is a permit street or a driveway, tell us when you call.",
    ],
  },
  {
    slug: "kempston",
    name: "Kempston",
    county: "Bedfordshire",
    description:
      "Plumber in Kempston, Bedfordshire. Boilers, leaks and heating with Devine Plumbing and Heating. Call 07436 135412.",
    paragraphs: [
      "Kempston sits on the west side of Bedford. A lot of the housing is post-war semis and later estates, with older streets closer to the High Street.",
      "The same hard water runs through these houses as through Bedford. Shower valves and boiler parts fur up. A tap that has started to drip often needs more than a washer if the seat is worn.",
      "If you are on a newer estate, the stopcock is usually in a cupboard near the front of the house. Check you can turn it before a leak forces the issue.",
    ],
  },
  {
    slug: "luton",
    name: "Luton",
    county: "Bedfordshire",
    description:
      "Plumber in Luton. Leak repairs, boilers and heating from Devine Plumbing and Heating. Call or text 07436 135412.",
    paragraphs: [
      "Luton is the largest town in Bedfordshire. Terraces in the older parts of town sit next to later estates and flats. Access is the detail that matters: a flat above a shop is a different visit from a house with a side gate.",
      "The town sits on the chalk. The water is hard, and showers and combi boilers feel it first. If the boiler is loud when the hot tap runs, mention that. Scale is a common reason.",
      "Tell us about parking. Some streets near the centre have little room for a van, and we would rather know before we set off.",
    ],
  },
  {
    slug: "dunstable",
    name: "Dunstable",
    county: "Bedfordshire",
    description:
      "Plumber in Dunstable and the nearby downs. Devine Plumbing and Heating. Call 07436 135412.",
    paragraphs: [
      "Dunstable is a chalk-downs town on the west side of Luton. The centre has older houses. Houghton Regis and the newer estates sit close by.",
      "Hard water is normal here. It shortens the life of electric shower heaters and leaves a crust on taps. If an electric shower is cutting out, say whether it trips the fuse board or just runs cold.",
      "The Google profile does not list every village by name. If you are in a hamlet outside Dunstable, text the postcode. We would rather tell you straight than leave you waiting.",
    ],
  },
  {
    slug: "leighton-buzzard",
    name: "Leighton Buzzard",
    county: "Bedfordshire",
    description:
      "Plumber in Leighton Buzzard, south Bedfordshire. Boilers, leaks and taps. Call Devine Plumbing and Heating on 07436 135412.",
    paragraphs: [
      "Leighton Buzzard is in the south of the county, with an older town centre, canal-side streets, and large new estates around it. Houses from those different eras fail in different ways. Old lead or badly joined copper shows up as pinholes. New estates show up as stiff isolating valves and loft tanks that were never labelled.",
      "The water is hard. A combi that has never been looked at can start to lose flow at the bath tap long before it stops heating.",
      "This is one of the further Bedfordshire towns from the Edenham map pin. Please call before you assume we can be there the same hour. For a live leak we will tell you the earliest we can arrive.",
    ],
  },
  {
    slug: "biggleswade",
    name: "Biggleswade",
    county: "Bedfordshire",
    description:
      "Plumber in Biggleswade, east Bedfordshire. Devine Plumbing and Heating. Call or text 07436 135412.",
    paragraphs: [
      "Biggleswade is a market town on the Ivel, east of Bedford. The centre has older cottages and town houses. The edges have grown with newer family housing.",
      "Older roofs and loft tanks in the town centre are a common place for a leak to start. If a ceiling stain is growing, check the loft before you move furniture, and turn the water off if you can see the drip.",
      "Sandy is a short hop away and the housing is similar. If you are between the two, give the postcode and we will say if we can take the job.",
    ],
  },
  {
    slug: "ampthill",
    name: "Ampthill",
    county: "Bedfordshire",
    description:
      "Plumber in Ampthill, Bedfordshire. Heating, leaks and taps with Devine Plumbing and Heating. Call 07436 135412.",
    paragraphs: [
      "Ampthill is a small Georgian town south of Bedford, with village streets around it and older houses that have been altered more than once. Pipe runs in those houses are rarely straight. A kitchen tap may be fed from a place you do not expect.",
      "Period houses often have a mix of old and new heating. Tell us if some radiators are cold while others are fine. That is a different visit from a boiler that will not start at all.",
      "Flitwick is nearby, on the railway, with more modern family housing. The same phone number covers both. Say which one you are in.",
    ],
  },
  {
    slug: "bourne",
    name: "Bourne",
    county: "Lincolnshire",
    description:
      "Plumber in Bourne, Lincolnshire, close to the Devine Plumbing and Heating map pin. Call 07436 135412.",
    paragraphs: [
      "Bourne is the market town nearest the Google pin, which sits by Edenham and Grimsthorpe, a few miles east of town. The firm’s own Google description talks about Bedfordshire. The pin is here, on the Lincolnshire side. Both are on the profile, so we say so plainly.",
      "Bourne has a limestone edge and fen land close by. Older stone and brick houses in town often have heating that has been added in stages. Fen-edge houses can have pipework in floors that are colder and damper than a town terrace.",
      "If you are in Bourne, Morton, or a village between Bourne and Edenham, text the postcode with the fault. For a flood, say so in the first line.",
    ],
  },
  {
    slug: "stamford",
    name: "Stamford",
    county: "Lincolnshire",
    description:
      "Plumber in Stamford, Lincolnshire. Gas fires, boilers and leaks with Devine Plumbing and Heating. Call 07436 135412.",
    paragraphs: [
      "Stamford is a stone town south of the Google pin. Many houses are old, with fireplaces, thick walls and heating that was added long after the house was built. Mark’s gas fire install is the sort of job these houses often need.",
      "Stone and limestone country means hard water. Shower mixers and boiler plates scale up. If the hot water is fine first thing and poor by evening, tell us. That pattern matters.",
      "The town centre streets are narrow. If the house has no parking, say where a van can stop for a short visit.",
    ],
  },
  {
    slug: "market-deeping",
    name: "Market Deeping",
    county: "Lincolnshire",
    description:
      "Plumber in Market Deeping, near the Devine Plumbing and Heating map pin. Call or text 07436 135412.",
    paragraphs: [
      "Market Deeping, Deeping St James and the villages around them sit south of Bourne, on the fen edge. The Google pin near Edenham is a short drive north.",
      "Newer estates here have combi boilers, plastic pipe and a stopcock in a meter cupboard. Older cottages may still have a tank in the loft and a cylinder in the airing cupboard. Tell us which you have. The advice is different if a pipe lets go.",
      "A loft tank that is overflowing will keep running until the feed is shut. If you cannot find the stopcock, call. Do not keep bailing a loft while the valve is still open.",
    ],
  },
  {
    slug: "edenham",
    name: "Edenham",
    county: "Lincolnshire",
    description:
      "The Google pin for Devine Plumbing and Heating is near Edenham, Lincolnshire. There is no public shop. Call 07436 135412.",
    paragraphs: [
      "Edenham is a small village in South Kesteven. The Google map pin for Devine Plumbing and Heating sits just outside the village, on the Grimsthorpe side, near Four Mile Riding. There is no street address and no shop counter on the profile.",
      "Do not drive to the pin hoping for a workshop. Call or text 07436 135412. Darren comes to the house. That is how the reviews read: he turns up, does the job, and leaves.",
      "Villages around here, including Grimsthorpe, Swinstead and Corby Glen, are close to that pin. Send the postcode with the problem and we will tell you if we can take it.",
    ],
  },
];

export function getArea(slug: string) {
  return AREAS.find((area) => area.slug === slug);
}
