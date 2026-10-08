export type Service = {
  slug: string;
  title: string;
  menu: string;
  summary: string;
  description: string;
  paragraphs: string[];
  jobs: string[];
  bring: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-call-outs",
    title: "Emergency call-outs",
    menu: "Emergencies",
    summary: "Open 24 hours for leaks, breakdowns and heating that has packed up.",
    description:
      "24 hour plumbing and heating call-outs with Devine Plumbing and Heating. Call or text Darren on 07436 135412.",
    paragraphs: [
      "The Google profile says the business is open 24 hours, every day. Laura wrote that she has used Darren for emergency breakdowns. Nick wrote that a shower pump failed on a Friday evening, flooded the upstairs, and Darren came out the same night.",
      "If water is running where it should not, find the stopcock and turn it clockwise until it stops. It is often under the kitchen sink, or where the water pipe comes into the house. If the stopcock will not turn, or it leaks when you try, leave it and call. That is the job Nick described.",
      "If you smell gas, or you hear a hiss near a gas pipe, leave the house. Do not use light switches. Call the National Gas Emergency Service on 0800 111 999. We can help once the network has made the supply safe.",
    ],
    jobs: [
      "Burst or split pipes",
      "Leaks that will not stop",
      "Stopcocks that leak or will not turn",
      "Boilers that have cut out and left you with no heat",
      "Shower pumps and fittings that let go",
    ],
    bring: [
      "Your town and postcode",
      "What is leaking, or what has stopped working",
      "Whether you still have hot water, heating, or neither",
      "Any fault code showing on the boiler",
    ],
  },
  {
    slug: "leak-repairs",
    title: "Leak repairs",
    menu: "Leak repairs",
    summary: "Drips, burst fittings, and leaks that stain a ceiling.",
    description:
      "Leak repairs from Devine Plumbing and Heating. Darren fixes leaking valves, stopcocks, shower fittings and pipework.",
    paragraphs: [
      "Their own Google card lists leak repair as a service. The reviews back that up. James had a leaking tundish on the boiler. Nick had a shower fitting that let go and a stopcock that started to leak when he turned it.",
      "A small drip under a bath or sink can sit there for weeks and then rot a board. A fitting that lets go can flood a room in minutes. Tell us which it is when you call, and whether you have managed to turn the water off.",
      "We do not publish a price list. Laura wrote that the prices were fair, and that the work was explained. You get the price for your job before the work goes ahead, unless it is a live leak and you have asked us to stop the water first.",
    ],
    jobs: [
      "Leaking valves and tundishes",
      "Dripping taps and failed tap washers",
      "Leaks on shower pumps and shower fittings",
      "Stopcocks that weep when turned",
      "Ceiling stains from a leak above",
    ],
    bring: [
      "Where you can see the water",
      "Whether the stopcock is off",
      "How long it has been leaking",
    ],
  },
  {
    slug: "boiler-repair",
    title: "Boiler repair",
    menu: "Boiler repair",
    summary: "Faults, leaking valves, and boilers that have left you cold.",
    description:
      "Boiler repairs in Bedfordshire and the Edenham area. Devine Plumbing and Heating lists boiler repair on its Google profile.",
    paragraphs: [
      "The Google card lists boiler repair. James had a leaking tundish. It needed a new valve on the boiler. Laura called when the heating had failed.",
      "Write down the fault code if you can see one. Tell us the make if you know it. Say if you have heating, hot water, or neither. Low pressure is a different visit from a boiler that will not light.",
      "James wrote that Darren is on the Gas Safe register. The profile card says the same. Ask to see the card when the visit starts. The number is not on the Google profile, so it is not printed here.",
    ],
    jobs: [
      "Boilers that have locked out",
      "Leaking tundish or boiler valves",
      "Loss of heating or hot water",
      "Noises, leaks and pressure loss",
    ],
    bring: [
      "The make of the boiler, if you can see it",
      "The fault code on the display",
      "When it last worked",
      "Whether other gas appliances in the house still work",
    ],
  },
  {
    slug: "boiler-installation",
    title: "Boiler installation",
    menu: "Boiler installation",
    summary: "New combi boilers, fitted and explained before we leave.",
    description:
      "Combi boiler installation with Devine Plumbing and Heating. A Google reviewer described a new combi boiler fitted by Darren.",
    paragraphs: [
      "Laura wrote that Darren fitted a new combi boiler. He took time to explain the work. The Google profile lists boiler fitting next to boiler repair.",
      "A new boiler is a bigger job than a repair. We need to see the old boiler, the flue, and where the waste water can run. Call or text the address. A photo of the current boiler helps, if you can take one safely.",
      "We will not guess a price on the phone. The look at the job comes first. You should know the cost before a new boiler is ordered.",
    ],
    jobs: [
      "New combi boiler installs, as described by customers",
      "Replacing a boiler that is past repair",
      "Explaining the controls before we leave",
    ],
    bring: [
      "Photos of the boiler, the flue outside, and the programmer",
      "How many bathrooms the house has",
      "Whether you want a straight swap or a new place for it",
    ],
  },
  {
    slug: "heating-and-gas-fires",
    title: "Heating and gas fires",
    menu: "Heating and gas fires",
    summary: "Gas fires and day-to-day heating work.",
    description:
      "Gas fire fitting and heating work by Devine Plumbing and Heating. Mark S had a gas fire fitted in January 2026.",
    paragraphs: [
      "Mark S wrote that Darren fitted a gas fire, arrived on time, and left the room clean. The photo on this site is the gas fire photo from the Google profile.",
      "Heating is one of the topics people mention most in the Google reviews. That covers boiler work, breakdowns, and the fire install. We do not list underfloor heating or heat pumps, because the profile and the reviews do not mention them.",
      "A gas fire has to suit the chimney or flue and the room. Send a photo of the opening and tell us if a fire is already there. If you smell gas, stop and call 0800 111 999 first.",
    ],
    jobs: [
      "Gas fire fitting",
      "Heating breakdowns",
      "Routine heating checks booked in advance",
    ],
    bring: [
      "A photo of the fireplace or the old fire",
      "Whether the chimney is still open",
      "The room size, if you know it",
    ],
  },
  {
    slug: "showers-taps-and-stopcocks",
    title: "Showers, taps and stopcocks",
    menu: "Showers and taps",
    summary: "Taps, dishwashers, shower pumps and stopcocks.",
    description:
      "Tap, shower and stopcock repairs by Devine Plumbing and Heating, based on jobs customers described on Google.",
    paragraphs: [
      "James had new bathroom taps fitted, and a dishwasher built into a cupboard. Nick had a shower pump fitting fail. Then the stopcock leaked when he tried to shut the water off. Both jobs show up in the Google review topics.",
      "A built-in dishwasher needs the right gap, a water feed and a waste. A photo of the cupboard helps. For a shower pump, say if it sits in the airing cupboard or under the bath. Say if the leak is hot, cold, or both.",
      "The mains stopcock is the tap that should still work when a room is flooding. If yours is stiff, change it on a planned visit. Do not wait for the night it fails.",
    ],
    jobs: [
      "Bathroom taps",
      "Integrated dishwashers",
      "Shower pumps and shower fittings",
      "Mains stopcock repairs",
    ],
    bring: [
      "Photos of the tap, pump or stopcock",
      "Whether the leak is hot, cold, or mains water",
      "The make of the dishwasher, if one is being fitted",
    ],
  },
  {
    slug: "servicing-and-maintenance",
    title: "Planned visits",
    menu: "Planned visits",
    summary: "Planned visits so small faults do not become weekend floods.",
    description:
      "Planned plumbing and heating visits with Devine Plumbing and Heating. Customers book Darren for check-ups as well as breakdowns.",
    paragraphs: [
      "Laura uses Darren for planned visits, for breakdowns, and for a new boiler. Google lists these check-ups as a review topic.",
      "Use a planned visit to check a stiff stopcock, a weeping valve, or a radiator that stays cold. It is also the time to ask how the controls work, if nobody in the house is sure.",
      "Book these in the daytime if you can. Keep the night line for water that will not stop, or for heating that has failed when you need it.",
    ],
    jobs: [
      "Routine plumbing and heating checks",
      "Follow-up visits after a repair",
      "Small jobs saved up for one visit",
    ],
    bring: [
      "A list of the niggles, not just the worst one",
      "The age of the boiler if you know it",
      "A time window when someone is home",
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
