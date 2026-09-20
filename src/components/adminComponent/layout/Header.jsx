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

      </div>
    </header>
  );
}