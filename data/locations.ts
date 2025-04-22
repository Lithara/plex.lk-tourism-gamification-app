export interface LocationDetails {
  id: string;
  slug: string;
  name: string;
  country: string;
  description: string;
  longDescription: string;
  specialNotes: string;
  mainImage: string;
  galleryImages: string[];
  plexes: number;
  flags: number;
  visitors: number;
  difficulty: "Easy" | "Medium" | "Hard";
  popular: boolean;
  knowledge: boolean;
  knowledgeContent?: {
    title: string;
    description: string;
    sections: {
      text: string;
      images?: string[];
    }[];
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  addedBy: {
    name: string;
    time: string;
  };
}

export const locations: LocationDetails[] = [
  {
    id: "1",
    slug: "sigiriya",
    name: "Sigiriya",
    country: "Sri Lanka",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.

Euismod erat placerat. In laculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultrices vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisis.`,
    specialNotes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.

Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In laculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultrices vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisis.`,
    mainImage: "/sigiriya-main.png",
    galleryImages: [
      "/sigiriya-aerial.png",
      "/sigiriya-frescoes.png",
      "/sigiriya-stairs.png",
      "/sigiriya-view.png",
    ],
    plexes: 5,
    flags: 120,
    visitors: 120,
    difficulty: "Easy",
    popular: true,
    knowledge: true,
    knowledgeContent: {
      title: "Sigiriya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      sections: [
        {
          text: "Euismod erat placerat. In laculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultrices vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisis.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          images: ["/sigiriya-frescoes.png", "/sigiriya-view.png"],
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.",
        },
        {
          text: "Euismod erat placerat. In laculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultrices vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisis.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
        },
      ],
    },
    coordinates: {
      lat: 7.957,
      lng: 80.7603,
    },
    addedBy: {
      name: "Plex.lk",
      time: "2 years ago",
    },
  },
  {
    id: "2",
    slug: "adams-peak",
    name: "Adam's Peak",
    country: "Sri Lanka",
    description:
      "A sacred mountain in central Sri Lanka, known for its distinctive conical shape.",
    longDescription: `Adam's Peak, also known as Sri Pada, is a 2,243 m (7,359 ft) tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, i.e., "sacred footprint", a 1.8 m (5 ft 11 in) rock formation near the summit, which in Buddhist tradition is held to be the footprint of the Buddha, in Hindu tradition that of Shiva and in Islamic and Christian tradition that of Adam, or that of St. Thomas.

The mountain is located in the southern reaches of the Central Highlands, in the Ratnapura District and Nuwara Eliya District of the Sabaragamuwa Province and Central Province, about 40 km northeast of the city of Ratnapura and 32 km southwest of the city of Hatton.`,
    specialNotes: `The mountain is a pilgrimage site for people of multiple religions. The climb to the top is a challenging but rewarding experience, especially when done at night to witness the sunrise from the summit.

The pilgrimage season starts on the full moon in December and runs until the full moon in April. During this time, the path is lit and there are facilities available for pilgrims. Outside of the season, the climb can be more challenging due to weather conditions.`,
    mainImage: "/adams-peak.png",
    galleryImages: [
      "/adams-peak-sunrise.png",
      "/adams-peak-steps.png",
      "/adams-peak-view.png",
      "/adams-peak-temple.png",
    ],
    plexes: 80,
    flags: 25,
    visitors: 200,
    difficulty: "Medium",
    popular: false,
    knowledge: true,
    knowledgeContent: {
      title: "Adam's Peak",
      description:
        "Adam's Peak, also known as Sri Pada, is a 2,243 m (7,359 ft) tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, i.e., 'sacred footprint', a 1.8 m rock formation near the summit.",
      sections: [
        {
          text: "The mountain is revered as a holy site by Buddhists, Hindus, Muslims, and Christians. According to Buddhist tradition, the footprint mark on the summit is that of the Buddha; Hindus consider it to be the footprint of Shiva; Muslims and Christians believe it to be the place where Adam first set foot on earth after being cast out of heaven.",
        },
        {
          text: "The climb to the summit is a popular pilgrimage, especially during the pilgrimage season from December to May. Many pilgrims begin their ascent at night to reach the summit by dawn to witness the spectacular sunrise and the unique triangular shadow cast by the peak.",
          images: ["/adams-peak-sunrise.png", "/adams-peak-steps.png"],
        },
        {
          text: "The path to the summit has about 5,500 steps and takes approximately 3-4 hours to climb. The route is illuminated during the pilgrimage season, with tea shops and rest stops along the way. The most popular starting point is the town of Dalhousie.",
        },
        {
          text: "At the summit, there is a Buddhist temple housing the footprint and a bell that pilgrims ring to signify the number of times they have made the pilgrimage. The views from the top are breathtaking, especially at sunrise when you can see across much of southern Sri Lanka.",
        },
        {
          text: "The area around Adam's Peak is rich in biodiversity, with many endemic species of plants and animals. The forests surrounding the mountain are part of the Peak Wilderness Sanctuary, one of Sri Lanka's important conservation areas.",
        },
      ],
    },
    coordinates: {
      lat: 6.809,
      lng: 80.499,
    },
    addedBy: {
      name: "Plex.lk",
      time: "3 years ago",
    },
  },
  {
    id: "3",
    slug: "demodara-station",
    name: "Demodara Station",
    country: "Sri Lanka",
    description:
      "A historic railway station famous for its unique loop design.",
    longDescription: `Demodara Station is a railway station in the small town of Demodara near Ella, Sri Lanka. It is famous for its unique architectural design featuring a railway loop. The station is located on the Main Line of the Sri Lanka Railways network, connecting Colombo with Badulla.

The Demodara Loop is an engineering marvel where the railway track passes under itself, forming a spiral. This design was implemented to gain elevation within a limited space, allowing the train to climb the steep hills in the area.`,
    specialNotes: `The station is a popular tourist attraction, especially for those interested in railway engineering and history. The best way to experience it is to take the train journey from Ella to Demodara, which offers stunning views of the surrounding landscapes.

The station building itself is a colonial-era structure with charming architecture. There's a small museum inside that provides information about the history and construction of the loop.`,
    mainImage: "/demodara-station.png",
    galleryImages: [
      "/demodara-loop.png",
      "/demodara-train.jpg",
      "/demodara-view.jpg",
      "/demodara-building.jpg",
    ],
    plexes: 4,
    flags: 120,
    visitors: 150,
    difficulty: "Easy",
    popular: true,
    knowledge: true,
    knowledgeContent: {
      title: "Demodara Station",
      description:
        "Demodara Station is a railway station in the small town of Demodara near Ella, Sri Lanka. It is famous for its unique architectural design featuring a railway loop.",
      sections: [
        {
          text: "The Demodara Loop, also known as the Nine Arch Loop, is an engineering marvel where the railway track passes under itself, forming a spiral. This ingenious design was implemented to gain elevation within a limited space, allowing the train to climb the steep hills in the area.",
        },
        {
          text: "The story goes that when the British were planning the railway line from Colombo to Badulla, they faced a significant challenge at Demodara. The elevation was too steep for a conventional track, and there wasn't enough space for a zigzag line. The solution came from a local farmer who, after watching how his traditional headgear (a turban) was wound, suggested the spiral loop design.",
          images: ["/demodara-loop.png", "/demodara-train.jpg"],
        },
        {
          text: "The station was built in 1914 during the British colonial era. The station building itself is a beautiful example of colonial architecture, with its red-tiled roof and white walls. Inside the station, there's a small museum that displays old photographs and equipment related to the railway's history.",
        },
        {
          text: "The train journey through Demodara is part of the scenic route from Ella to Badulla, often described as one of the most beautiful train journeys in the world. As the train navigates the loop, passengers can enjoy panoramic views of the lush tea plantations and valleys below.",
        },
        {
          text: "Today, Demodara Station is not just a functional railway station but also a popular tourist attraction. Many visitors come specifically to see the unique loop design and to experience the historic train journey through Sri Lanka's hill country.",
        },
      ],
    },
    coordinates: {
      lat: 6.899,
      lng: 81.053,
    },
    addedBy: {
      name: "Plex.lk",
      time: "1 year ago",
    },
  },
];

export const getLocationBySlug = (
  slug: string
): LocationDetails | undefined => {
  return locations.find((location) => location.slug === slug);
};
