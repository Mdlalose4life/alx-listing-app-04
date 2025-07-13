import * as React from "react"

export interface ReactComponentProps {
    children: React.ReactNode
}
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants?: string;
  };
  image?: string;
  discount?: string;
}


