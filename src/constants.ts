import { Activity } from './types';
import skiImage from './Gemini_Generated_Image_sye0dgsye0dgsye0.png';
import tubingImage from './Gemini_Generated_Image_z0ph6mz0ph6mz0ph.png';

export const ACTIVITIES: Activity[] = [
  {
    id: 'ski-school',
    title: "Ski School",
    description: "Expert-led group lessons designed with skiers in mind.",
    price: 120,
    duration: "2 Hours",
    
    image: skiImage,
    icon: "Snowflake"
  },
  {
    id: 'snow-tubing',
    title: "Snow Tubing Adventure",
    description: "Experience the thrill of sliding down our groomed tubing lanes. A high-energy activity that's pure joy.",
    price: 45,
    duration: "2 Hours",
    
    image: tubingImage,
    icon: "Wind"
  }
];
