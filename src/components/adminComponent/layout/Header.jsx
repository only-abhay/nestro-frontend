"use client";

import {
  Search,
  Moon,
  ShoppingCart,
  Bell,
  ScanLine,
  Settings,
} from "lucide-react";

import { io } from "socket.io-client";
import { toast } from "sonner";
import { useEffect, useRef } from "react";

export default function Header() {
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socketRef.current = socket;

    const handleOrderReceived = (orderId) => {
      toast.success(`Order Received from ${orderId}`, {
        position: "top-right",
      });
    };

    socket.on("orderReceived", handleOrderReceived);

    return () => {
      socket.off("orderReceived", handleOrderReceived);
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);


  return (
    <header className="sticky top-0 z-50 flex min-h-16 flex-col border-b border-[#E5E7EB] bg-[#F5F5F5] sm:min-h-[88px] sm:flex-row sm:items-center sm:justify-between">
      {/* Left Section */}
      <div className="flex min-w-0 flex-1 items-center px-3 py-2 sm:px-4 sm:py-3 lg:px-0 lg:py-0">
        <div className="flex w-full justify-start lg:ml-7">
          <div className="flex min-w-0 flex-1 items-center pl-12 sm:pl-0">
            <input
              type="text"
              placeholder="Search for Results..."
              className="
                w-full
                h-11 sm:h-[52px]
                rounded-xl
                bg-white
                border
                border-[#E7E7E7]
                pl-5
                pr-12
                outline-none
                text-slate-600
                placeholder:text-slate-400
              "
            />

          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full shrink-0 justify-end border-t border-[#E5E7EB] sm:w-auto sm:border-t-0">
        {/* Trash */}
        <div className="hidden w-14 items-center justify-center sm:flex sm:w-[72px]">
          <span className="text-xl text-slate-500">🗑️</span>
        </div>

        {/* Dark Mode */}
        <div className="hidden w-14 items-center justify-center sm:flex sm:w-[72px]">
          <Moon size={20} className="text-slate-500" />
        </div>

        {/* Cart */}
        <div className="flex w-14 items-center justify-center relative sm:w-[72px]">
          <ShoppingCart size={20} className="text-slate-500" />

          <span
            className="
              absolute
              top-4
              right-4
              sm:top-5
              sm:right-5
              w-5
              h-5
              rounded-full
              bg-green-500
              text-white
              text-[10px]
              font-semibold
              flex
              items-center
              justify-center
            "
          >
            5
          </span>
        </div>

        {/* Notification */}
        <div className="flex w-14 items-center justify-center relative sm:w-[72px]">
          <Bell size={20} className="text-slate-500" />

          <span
            className="
              absolute
              top-5
              right-5
              sm:top-6
              sm:right-6
              w-2.5
              h-2.5
              rounded-full
              bg-pink-500
            "
          />
        </div>

        {/* Fullscreen */}
        <div className="hidden w-14 items-center justify-center sm:flex sm:w-[72px]">
          <ScanLine size={20} className="text-slate-500" />
        </div>

        {/* Profile */}
        <div className="flex w-14 items-center justify-center sm:w-[72px]">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover"
          />
        </div>

        {/* Settings */}
        <div className="flex w-14 items-center justify-center sm:w-[72px]">
          <Settings size={20} className="text-slate-500" />
        </div>
      </div>
    </header>
  );
}