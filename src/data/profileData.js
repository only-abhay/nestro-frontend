import {
  Package,
  User,
  MapPin,
  Settings,
  LogOut,
  Sofa,
  Table,
  Armchair,
} from "lucide-react";

export const profile = {
  initials: "RK",
  name: "Rahul Khanna",
  email: "rahul@email.com",
  badge: "Gold Member",
};

export const stats = [
  {
    value: "7",
    label: "Orders",
  },
  {
    value: "₹4.2L",
    label: "Spent",
  },
  {
    value: "420",
    label: "Points",
  },
  {
    value: "3",
    label: "Reviews",
  },
];

export const sidebarLinks = [
  {
    id: "orders",
    label: "My Orders",
    icon: Package,
  },
  {
    id: "profile",
    label: "Personal Info",
    icon: User,
  },
  {
    id: "address",
    label: "Addresses",
    icon: MapPin,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
  {
    id: "logout",
    label: "Sign Out",
    icon: LogOut,
  },
];

export const orders = [
  {
    icon: Sofa,
    name: "Ember Velvet 3-Seater",
    meta: "Order #MN-2847 · May 3, 2026",
    status: "Delivered",
    price: "₹89,000",
  },
  {
    icon: Table,
    name: "Travertine Side Table",
    meta: "Order #MN-2641 · Apr 18, 2026",
    status: "In Transit",
    price: "₹28,000",
  },
  {
    icon: Armchair,
    name: "Aura Bouclé Armchair",
    meta: "Order #MN-2519 · Mar 29, 2026",
    status: "Delivered",
    price: "₹54,000",
  },
];