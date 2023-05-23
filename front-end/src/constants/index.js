
export const headerNavigations = [
  {
    key: 1,
    name: "Home",
    path: "/",
    Selected: true,
  },
  {
    key: 2,
    name: "Recipes",
    path: "/recipes",
    Selected: false,
  },

  {
    key: 3,
    name: "Blogs",
    path: "/elogs",
    Selected: false,
  },

  {
    key: 4,
    name: "Event",
    path: "/event",
    Selected: false,
  },
  {
    key: 5,
    name: "Tourism",
    path: "/tourism",
    Selected: false,
  },
  {
    key: 5,
    name: "Local Products",
    path: "/localbusinesses",
    Selected: false,
  },
];

export const settings = [
  { key: 1, name: "Profile" },
  { key: 2, name: "Logout"},
];


export const Events = [
  {
    id: 1,
    name: "Coachella Music Festival",
    date: "2012/11/11",
    time: "All day",
    location: "Srilanka",
    description: "A world-famous music festival featuring top artists and performers.",
    registrationLink: "https://www.coachella.com/",
    price: 429.00,
    category: "Music Festival",
    image: "./images/festival4.jpg",
    contactInfo: {
      name: "Coachella Customer Service",
      email: "support@coachella.com",
      phone: "(555) 555-5555"
    }
  },
  {
    id: 2,
    name: "Running of the Bulls",
    date: "2012/11/11",
    time: "8:00am",
    location: "Pamplona, Spain",
    description: "An annual event in which participants run in front of a group of bulls.",
    registrationLink: "https://www.sanfermin.com/en/",
    price: 0,
    category: "Festival",
    image: "./images/festival5.jpg",
    contactInfo: {
      name: "San Fermin Tourist Office",
      email: "info@sanferminturismo.com",
      phone: "+34 948 420 700"
    }
  },
  {
    id: 3,
    name: "Oktoberfest",
    date: "2012/11/11",
    time: "All day",
    location: "Munich, Germany",
    description: "The world's largest beer festival, featuring traditional Bavarian music, food, and beer.",
    registrationLink: null,
    price: 0,
    category: "Beer Festival",
    image: "./images/festival6.jpg",
    contactInfo: {
      name: "Munich Tourist Office",
      email: "info@muenchen.de",
      phone: "+49 89 23396500"
    },
    
  },
  {
    id: 4,
    name: "New York City Marathon",
    date: "2012/11/11",
    time: "9:00am",
    location: "New York, NY",
    description: "A major annual marathon featuring runners from around the world.",
    registrationLink: "https://www.tcsnycmarathon.org/",
    price: 255.00,
    category: "Marathon",
    image: "./images/festival3.jpg",
    contactInfo: {
      name: "New York Road Runners",
      email: "info@nyrr.org",
      phone: "(646) 758-9696"
    }
  },
  {
    id: 5,
    name: "Carnaval de Rio",
    date: "2012/11/13",
    time: "All day",
    location: "Rio de Janeiro, Brazil",
    description: "A massive street party featuring samba dancing, music, and costumes.",
    registrationLink: null,
    price: 0,
    category: "Carnaval",
    image: "./images/festival.jpg",
    contactInfo: {
      name: "Rio Turismo",
      email: "contato@rioturismo.com.br",
      phone: "+55 21 2976-7303"
    }
  },
  {
    id: 6,
    name: "Comic-Con International",
    date: "2012/11/11",
    time: "All day",
    location: "San Diego, CA",
    description: "A massive convention featuring comic books, movies, television, and pop culture.",
    registrationLink: "https://www.comic-con.org/",
    price: 75.00,
    category: "Convention",
    image: "./images/festival2.jpg",
    contactInfo: {
      name: "Comic-Con International",
      email: "info@comic-con.org",
      phone: "(619) 414-1020"
    }
  },
  {
    id: 7,
    name: "La Tomatina",
    date: "2012/11/11",
    time: "11:00am",
    location: "Buñol, Spain",
    description: "A giant tomato fight that takes place in the streets of a small Spanish town.",
    registrationLink: "https://latomatina.org/",
    price: 15.00,
    category: "Festival",
    image: "./images/festival.jpg",
    contactInfo: {
      name: "La Tomatina Tourist Office",
      email: "info@latomatina.info",
      phone: "+34 902 011 113"
    }
  }
];


export const Recipe = [
  {
    id: 1,
    name: "Motichur Laddu",
    ingredients: "gram flour, semolina (rava), whole wheat flour..",
    description:
      "Laddu or laddoo is a spherical sweet from the Indian subcontinent..",
    category: "Tamil",
    image: "./images/recipes1.jpg",
  },

  {
    id: 2,
    name: "Asmi",
    ingredients: "Rice Flour, Thick Coconut Milk, Salt, Cooking Oi..",
    description:
      "Asami is a Sri Lankan traditional sweet snack that is especially..",
    category: "Sinhala & Hindu ",
    image: "./images/recipes2.jpg",
  },
  {
    id: 3,
    name: "Kokis",
    ingredients: "Egg, Rice flour, Turmeric, Salt, Litre oil..",
    description:
      "kokis or rosette cookies are a traditional Sri Lankan savoury treat that adorns ever..",
    category: "Sinhala & Hindu ",
    image: "./images/recipes3.jpg",
  },
  {
    id: 4,
    name: "Sri Lankan Kottu",
    ingredients: "vegetable oil · ½ medium onion, garlic cloves..",
    description: "Kottu is one of the national dishes of Sri Lanka..",
    category: "Sri Lankan",
    image: "./images/recipes4.jpg",
  },
  {
    id: 5,
    name: "Rice & Curry",
    ingredients:
      "sambol (a Sri Lankan relish), a gravy or hodda with spices.. ",
    description:
      "The standard ingredient in Sri Lankan sambols is chilli, either freshly..",
    category: "Sri Lankan",
    image: "./images/recipes5.jpg",
  },
];

export const LocalBusinesses = [
  {
    id: 1,
    category: "HandCrafts",
    name: "Mask",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    location1:"aaaaaaaaa :07708894358349",
    location2:"aaaaa     :0234553535",
    location3:"aaaaa:2345643253",

    image: "./images/festival4.jpg",
    
  },
  {
    id: 2,
    category: "HandCrafts",
    name: "Mask",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    location1:"aaaaaaaaa :07708894358349",
    location2:"aaaaa     :0234553535",
    location3:"aaaaa:2345643253",

    image: "./images/festival4.jpg",
    
  },
  {
    id: 3,
    category: "HandCrafts",
    name: "Mask",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    location1:"aaaaaaaaa :07708894358349",
    location2:"aaaaa     :0234553535",
    location3:"aaaaa:2345643253",

    image: "./images/festival4.jpg",
    
  },
  {
    id: 4,
    category: "HandCrafts",
    name: "Mask",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    location1:"aaaaaaaaa :07708894358349",
    location2:"aaaaa     :0234553535",
    location3:"aaaaa:2345643253",

    image: "./images/festival4.jpg",
    
  },
  {
    id: 8,
    category: "HandCrafts",
    name: "Mask",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    location1:"aaaaaaaaa :07708894358349",
    location2:"aaaaa     :0234553535",
    location3:"aaaaa:2345643253",

    image: "./images/festival4.jpg",
    
  },
  {
    id: 6,
    category: "HandCrafts",
    name: "Mask",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    location1:"aaaaaaaaa :07708894358349",
    location2:"aaaaa     :0234553535",
    location3:"aaaaa:2345643253",

    image: "./images/festival4.jpg",
    
  },
  {
    id: 7,
    category: "AKKKKK",
    name: "Mask",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    location1:"aaaaaaaaa :07708894358349",
    location2:"aaaaa     :0234553535",
    location3:"aaaaa:2345643253",

    image: "./images/festival4.jpg",
    
  },
];
