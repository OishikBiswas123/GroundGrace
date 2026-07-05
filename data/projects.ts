export interface Project {
  title: string;
  category: string;
  location: string;
  image: string;
  type?: "image" | "video";
}

export const projects: Project[] = [
  { title: "Modern Villa", category: "Luxury Villas", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/nice villa.jpg" },
  { title: "Poolside Paradise", category: "Luxury Villas", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/pool villa.jpg" },
  { title: "Hilltop Retreat", category: "Luxury Villas", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/hill villa.jpg" },
  { title: "Villa Walkthrough", category: "Luxury Villas", location: "Kolkata", image: "/Illustrations/Villa%20Animations/Villa%20Animation%201.mp4", type: "video" },
  { title: "Villa Exterior Tour", category: "Luxury Villas", location: "Kolkata", image: "/Illustrations/Villa%20Animations/Villa%20Animation%202.mp4", type: "video" },
  { title: "Villa Full Animation", category: "Luxury Villas", location: "Kolkata", image: "/Illustrations/Villa%20Animations/Villa%20animation%20Full.mp4", type: "video" },
  { title: "Contemporary Home", category: "Residential", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/house.jpg" },
  { title: "Premium Residence", category: "Residential", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/residential.jpg" },
  { title: "Garden Villa", category: "Residential", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/house villa.jpg" },
  { title: "Modern Architecture", category: "Commercial", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/modern villa.jpg" },
  { title: "Landscape Design", category: "Commercial", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/landscape.jpg" },
  { title: "Pool House", category: "Commercial", location: "Kolkata", image: "/Illustrations/House%20outdoor%20images/pool house.jpg" },
  { title: "Luxury Hall Interior", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/hall.jpg" },
  { title: "Modern Kitchen", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/Kitchen (2).jpg" },
  { title: "Elegant Interior", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/modern interior.jpg" },
  { title: "Spiral Staircase", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/round stairs.jpg" },
  { title: "Open Wardrobe", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/open cupboard.jpg" },
  { title: "False Ceiling Design", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/False celling nice.jpg" },
  { title: "Green Interior", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/green indoor.jpg" },
  { title: "Interior Stairs", category: "Interiors", location: "Kolkata", image: "/Illustrations/House%20indoor%20images/indoor stairs.jpg" },
  { title: "Villa Interior Tour", category: "Interiors", location: "Kolkata", image: "/Illustrations/Villa%20Animations/Villa%20Interior%20animation.mp4", type: "video" },
  { title: "Villa Interior Design", category: "Interiors", location: "Kolkata", image: "/Illustrations/Villa%20Animations/Villia%20Interior%20animation%202.mp4", type: "video" },
  { title: "Apartment Construction", category: "Construction", location: "Kolkata", image: "/Illustrations/Construction%20site/appartment construction.jpg" },
  { title: "Building Structure", category: "Construction", location: "Kolkata", image: "/Illustrations/Construction%20site/big const.jpg" },
  { title: "Construction Worker", category: "Construction", location: "Kolkata", image: "/Illustrations/Construction%20site/cons worker.jpg" },
  { title: "Factory Construction", category: "Construction", location: "Kolkata", image: "/Illustrations/Construction%20site/factory cons.jpg" },
  { title: "Home Construction", category: "Construction", location: "Kolkata", image: "/Illustrations/Construction%20site/home cons.jpg" },
  { title: "Indoor Construction", category: "Construction", location: "Kolkata", image: "/Illustrations/Construction%20site/Indoor cons (2).jpg" },
  { title: "Villa Construction", category: "Construction", location: "Kolkata", image: "/Illustrations/Construction%20site/villa construction.jpg" },
];

export const categories = ["All", "Luxury Villas", "Residential", "Commercial", "Interiors", "Construction"];