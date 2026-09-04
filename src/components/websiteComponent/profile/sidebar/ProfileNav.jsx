import {
  Package,
  User,
  MapPin,
  Settings,
  LogOut,
} from "lucide-react";

import ProfileNavItem from "./ProfileNavItem";


export default function ProfileNav({
  activeTab,
  setActiveTab,
}) {

  return (
    <div
      className="
      bg-white
      border
      border-[#E8E0D5]
      rounded-xl
      p-3
      grid
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-1
      gap-2
      "
    >

      <ProfileNavItem
        icon={Package}
        label="My Orders"
        active={activeTab === "orders"}
        onClick={() => setActiveTab("orders")}
      />

      <ProfileNavItem
        icon={User}
        label="Personal Info"
        active={activeTab === "profile"}
        onClick={() => setActiveTab("profile")}
      />

      <ProfileNavItem
        icon={MapPin}
        label="Addresses"
        active={activeTab === "address"}
        onClick={() => setActiveTab("address")}
      />

      <ProfileNavItem
        icon={Settings}
        label="Settings"
        active={activeTab === "settings"}
        onClick={() => setActiveTab("settings")}
      />

      <ProfileNavItem
        icon={LogOut}
        label="Sign Out"
        active={activeTab === "Sign Out"}
      />

    </div>
  );
}