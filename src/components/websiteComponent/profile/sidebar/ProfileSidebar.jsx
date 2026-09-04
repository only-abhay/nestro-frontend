import ProfileCard from "./ProfileCard";
import ProfileNav from "./ProfileNav";


export default function ProfileSidebar({
  activeTab,
  setActiveTab,
  user
}) {

  return (
    <div
      className="
      flex
      flex-col
      gap-4
      w-full
      "
    >

      <ProfileCard
        user={user}
      />

      <ProfileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </div>
  );
}