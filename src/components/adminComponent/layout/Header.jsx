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
import { useState } from "react";
import {useEffect} from "react"

export default function Header() {
      const[socket, setSocket] = useState(null);

        useEffect(()=>{
  if(socket == null){
     const newSocket = io('http://localhost:5000');
  setSocket(newSocket);
  }
},
[])
  
useEffect(()=>{
if(socket!=null){
  socket.on("orderReceived",(orderId)=>{
     toast.success(`Order Received from ${orderId}`, {
        position: "top-right",
      });

  })
}
 
},[socket])


  return (
    <header className="sticky top-0 z-50 min-h-[88px] bg-[#F5F5F5] border-b border-[#E5E7EB] flex flex-wrap lg:flex-nowrap justify-between">
      {/* Left Section */}
      <div className="flex items-center flex-1 min-w-0 px-4 lg:px-0 py-3 lg:py-0">
        <div className="ml-0 lg:ml-7 w-full flex justify-start">
          <div className="flex items-center flex-1 min-w-0 px-16 sm:px-14 lg:px-0 py-3 lg:py-0">
            <input
              type="text"
              placeholder="Search for Results..."
              className="
                w-full
                h-[52px]
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
      <div className="flex shrink-0 w-full lg:w-auto justify-end">
        {/* Trash */}
        <div className="w-[56px] sm:w-[72px] flex items-center justify-center">
          <span className="text-xl text-slate-500">🗑️</span>
        </div>

        {/* Dark Mode */}
        <div className="w-[56px] sm:w-[72px] flex items-center justify-center">
          <Moon size={20} className="text-slate-500" />
        </div>

        {/* Cart */}
        <div className="w-[56px] sm:w-[72px] flex items-center justify-center relative">
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
        <div className="w-[56px] sm:w-[72px] flex items-center justify-center relative">
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
        <div className="w-[56px] sm:w-[72px] flex items-center justify-center">
          <ScanLine size={20} className="text-slate-500" />
        </div>

        {/* Profile */}
        <div className="w-[56px] sm:w-[72px] flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover"
          />
        </div>

        {/* Settings */}
        <div className="w-[56px] sm:w-[72px] flex items-center justify-center">
          <Settings size={20} className="text-slate-500" />
        </div>
      </div>
    </header>
  );
}