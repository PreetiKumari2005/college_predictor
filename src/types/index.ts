export interface College {
  id: string;
  name: string;
  slug: string;
  location: string;
  state: string;
  fees: number;
  rating: number;
  placementAvg: number;
  placementMax?: number;   // ✅ added for compare page
  imageUrl?: string;
  type?: string;
}

export interface FilterState {
  minFees: string;
  maxFees: string;
  minRating: string;
}
