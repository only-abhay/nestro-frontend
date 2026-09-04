"use client";

import { useState } from "react";

import AuthLeftPanel from "./AuthLeftPanel";
import AuthTabs from "./AuthTabs";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AuthLayouti() {
  const [activeTab, setActiveTab] =
    useState("signin");

  return (
    <div className="flex min-h-[calc(100vh-58px)]">
      <AuthLeftPanel />

      <div
        className="
          flex-1
          flex
          justify-center
          items-center
          px-10
          py-10
        "
      >
        <div className="w-full max-w-[360px]">
          <AuthTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {activeTab === "signin" ? (
            <SignInForm
              switchToSignup={() =>
                setActiveTab("signup")
              }
            />
          ) : (
            <SignUpForm
              switchToSignin={() =>
                setActiveTab("signin")
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}