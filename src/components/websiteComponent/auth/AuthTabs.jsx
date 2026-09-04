export default function AuthTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="flex border-b border-[#E4DDD5] mb-6">

      <button
        onClick={() => setActiveTab("signin")}
        className={`text-[13px] pb-3 mr-6 border-b-2 ${
          activeTab === "signin"
            ? "text-[#8B5E3C] border-[#8B5E3C]"
            : "text-[#8E8781] border-transparent"
        }`}
      >
        Sign in
      </button>

      <button
        onClick={() => setActiveTab("signup")}
        className={`text-[13px] pb-3 border-b-2 ${
          activeTab === "signup"
            ? "text-[#8B5E3C] border-[#8B5E3C]"
            : "text-[#8E8781] border-transparent"
        }`}
      >
        Create account
      </button>

    </div>
  );
}