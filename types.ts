import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface Book {
  title: string;
  description: string;
  coverUrl: string;
  link: string;
}

export interface EventItem {
  title: string;
  date: string;
  location: string;
  type: 'Congreso' | 'Seminario' | 'Webinar';
  image: string;
}

export interface Article {
  title: string;
  category: string;
  readTime: string;
  imageUrl: string;
}