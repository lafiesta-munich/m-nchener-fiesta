export interface Product {
  name: string;
  description: string;
  price: string;
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
