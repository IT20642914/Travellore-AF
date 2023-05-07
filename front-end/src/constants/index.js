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
    location: "Indio, California",
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
    date: "2012/11/11",
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