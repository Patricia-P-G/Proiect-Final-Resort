// First room
import roomImage1 from "../assets/img-our-rooms/deluxe-king-garden/img-deluxe-garden-1.jpg";
import roomImage11 from "../assets/img-our-rooms/deluxe-king-garden/img-deluxe-garden-2.jpg";
import roomImage12 from "../assets/img-our-rooms/deluxe-king-garden/img-deluxe-garden-3.jpg";

// Second room
import roomImage2 from "../assets/img-our-rooms/grand-deluxe-garden/img-grand-deluxe-garden-1.jpg";
import roomImage22 from "../assets/img-our-rooms/grand-deluxe-garden/img-grand-deluxe-garden-2.jpg";
import roomImage23 from "../assets/img-our-rooms/grand-deluxe-garden/img-grand-deluxe-garden-3.jpg";

// Third room
import roomImage3 from "../assets/img-our-rooms/junior-pool-suite/img-junior-pool-suite-1.jpg";
import roomImage32 from "../assets/img-our-rooms/junior-pool-suite/img-junior-pool-suite-2.jpg";
import roomImage33 from "../assets/img-our-rooms/junior-pool-suite/img-junior-pool-suite-3.jpg";

// Fourth room
import roomImage4 from "../assets/img-our-rooms/grand-pool-suite-seaview/img-grand-pool-suite-seaview-1.jpg";
import roomImage42 from "../assets/img-our-rooms/grand-pool-suite-seaview/img-grand-pool-suite-seaview-2.jpg";
import roomImage43 from "../assets/img-our-rooms/grand-pool-suite-seaview/img-grand-pool-suite-seaview-3.jpg";

// Fifth room
import roomImage5 from "../assets/img-our-rooms/spa-pool-suites/img-spa-pool-suite-1.jpg";
import roomImage52 from "../assets/img-our-rooms/spa-pool-suites/img-spa-pool-suite-2.jpg";
import roomImage53 from "../assets/img-our-rooms/spa-pool-suites/img-spa-pool-suite-3.jpg";

// Sixth room
import roomImage6 from "../assets/img-our-rooms/grand-pool-suite-beachfront/img-grand-pool-suite-beachfront-1.jpg";
import roomImage62 from "../assets/img-our-rooms/grand-pool-suite-beachfront/img-grand-pool-suite-beachfront-2.jpg";
import roomImage63 from "../assets/img-our-rooms/grand-pool-suite-beachfront/img-grand-pool-suite-beachfront-3.jpg";

export const rooms = [
  {
    id: 1,
    title: "Deluxe King Garden View",
    description:
      "Features a private terrace with spacious bathroom with indoor and outdoor rain showers.",
    price: "$484",
    features: [
      { icon: "person", text: "Max. Guests: 2" },
      { icon: "square_foot", text: "43 Sq. m." },
      { icon: "bed", text: "1 queen bed" },
    ],
    images: [roomImage1, roomImage11, roomImage12],
  },
  {
    id: 2,
    title: "Grand Deluxe Garden View",
    description:
      "Features a spacious outdoor terrace with a large living area and bathroom with outdoor rain shower.",
    price: "$815",
    features: [
      { icon: "person", text: "Max. Guests: 2" },
      { icon: "square_foot", text: "54 Sq. m." },
      { icon: "bed", text: "1 king bed" },
    ],
    images: [roomImage2, roomImage22, roomImage23],
  },
  {
    id: 3,
    title: "Junior Pool Suite",
    description:
      "Private pool suite with luxurious amenities and comfortable seating area.",
    price: "$400",
    features: [
      { icon: "person", text: "Max. Guests: 2" },
      { icon: "square_foot", text: "48 Sq. m." },
      { icon: "bed", text: "1 king bed" },
    ],
    images: [roomImage3, roomImage32, roomImage33],
  },
  {
    id: 4,
    title: "Grand Pool Suite Seaview",
    description: "Luxurious suite with private pool and panoramic sea views.",
    price: "$350",
    features: [
      { icon: "person", text: "Max. Guests: 2" },
      { icon: "square_foot", text: "55 Sq. m." },
      { icon: "bed", text: "1 king bed" },
    ],
    images: [roomImage4, roomImage42, roomImage43],
  },
  {
    id: 5,
    title: "Spa Pool Suites",
    description:
      "Suite features a spa pool, a separate living room and garden view.",
    price: "$450",
    features: [
      { icon: "person", text: "Max. Guests: 2" },
      { icon: "square_foot", text: "50 Sq. m." },
      { icon: "bed", text: "1 king bed" },
    ],
    images: [roomImage5, roomImage52, roomImage53],
  },
  {
    id: 6,
    title: "Grand Pool Suite Beachfront",
    description:
      "Suite features a spacious double room, a terrace with sea views and a private bathroom. ",
    price: "$500",
    features: [
      { icon: "person", text: "Max. Guests: 2" },
      { icon: "square_foot", text: "65 Sq. m." },
      { icon: "bed", text: "1 queen bed" },
    ],
    images: [roomImage6, roomImage62, roomImage63],
  },
];
