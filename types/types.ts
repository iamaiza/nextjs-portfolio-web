import { ReactNode } from "react";

export interface NavLinks {
  id: string;
  name: string;
}
export interface MobileMenuProps {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}
export interface PortfolioProps {
  id: number;
  title: string;
  img: string;
  type: string;
}
export interface NewsProps {
  key: number;
  id: string;
  title: string;
  img: string;
  author: string;
  date: string;
}