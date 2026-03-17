export interface Activity {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  ageRange?: string;
  image: string;
  icon: string;
}

export interface Booking {
  activityId: string;
  date: string;
  participants: number;
  email: string;
}
