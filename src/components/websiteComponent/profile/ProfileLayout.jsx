"use client";

import { useState } from "react";

import ProfileSidebar from "./sidebar/ProfileSidebar";
import StatsSection from "./stats/StatsSection";
import OrdersSection from "./orders/OrdersSection";
import PersonalInfoSection from "./personal/PersonalInfoSection";
import AddressSection from "./address/AddressSection";
import SettingsSection from "./settings/SettingsSection";

export default function ProfileLayout({ user, order }) {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-[260px_1fr]
      gap-5
      p-4
      sm:p-6
      "
    >
      <ProfileSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
      />

      <div
        className="
        flex
        flex-col
        gap-4
        min-w-0
        "
      >
        <StatsSection order={order} />

        {activeTab === "orders" && (
          <OrdersSection order={order} />
        )}

        {activeTab === "profile" && (
          <PersonalInfoSection user={user} />
        )}

        {activeTab === "address" && (
          <AddressSection user={user} />
        )}

        {activeTab === "settings" && (
          <SettingsSection />
        )}
      </div>

    </div>
  );
}