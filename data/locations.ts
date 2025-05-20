export interface Location {
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
