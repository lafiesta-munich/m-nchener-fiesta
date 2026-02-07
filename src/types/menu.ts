export interface PriceVariant {
  label: string;
  price: string;
}

export interface Product {
  name: string;
  description: string | { de: string; en: string };
  price?: string; // für Abwärtskompatibilität
  variants?: PriceVariant[];
}

export interface MenuSection {
  title: string;
  products: Product[];
}

export interface MenuCategory {
  image: string;
  id: number;
  slug: string;
  title: string;
  sections: MenuSection[];
}
