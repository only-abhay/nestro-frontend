"use client";

import Link from "next/link";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptycart, lsToCart } from "@/redux/features/cartSlice";
import axiosCat from "@/utils/helper";
import { useRouter } from "next/navigation";

export default function Header({user=null}) {
  const router = useRouter()
  const cart = useSelector((store)=>store.cart.cart)
  const dispatcher = useDispatch()

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (cart) {
    dispatcher(lsToCart(cart));
  }
}, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Checkout", href: "/checkout" },
  ];

 async function Logoutuser(){
    try {
       await axiosCat.get("/user/logout")
     dispatcher(emptycart())
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E0D5] bg-[#FAFAF9]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[58px] items-center justify-between px-4 sm:px-6 lg:px-7">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-[16px] font-medium uppercase tracking-[0.12em] text-[#1E1E1E]"
        >
          Nestro
          <span className="text-[#8B5E3C]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-[11px] tracking-[0.06em] transition-all ${
                pathname === item.href
                  ? "bg-[#F0EBE3] text-[#8B5E3C] font-medium"
                  : "text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
              }`}
            >
              {item.name}
            </Link>
          ))}
  {
 user !=null ?
  <button
  onClick={Logoutuser}
                className="rounded-md px-3 py-1.5 text-[11px] tracking-[0.06em] transition-all text-[#6B7280]  hover:bg-[#F0EBE3] hover:text-[#8B5E3C]">
                  Log Out

  </button>

 :
      <Link
              href="/auth"
              className={`rounded-md px-3 py-1.5 text-[11px] tracking-[0.06em] transition-all ${
                pathname === "/auth"
                  ? "bg-[#F0EBE3] text-[#8B5E3C] font-medium"
                  : "text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
              }`}
            >
              Sign In
            </Link>





  }

      
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-[#EDE5DA]">
            <Search size={17} />
          </button>
<Link  href="/cart" >

          <button className="relative flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-[#EDE5DA]">
            <ShoppingBag size={17} />

            <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#8B5E3C] text-[8px] text-white">
              {cart?.length || 0}
            </span>
          </button>
</Link>

         <Link
  href="/profile"
  className="
    hidden sm:flex 
    items-center 
    gap-3 
    px-3 
    py-1.5
    rounded-full
    border 
    border-[#C6A27E]
    bg-[#F0EBE3]
    text-[#2c2016]
    transition
    hover:bg-[#C6A27E]
  "
>
  <div className="h-8 w-8 flex items-center  justify-center rounded-full bg-white">
    <User size={16} />
  </div>

  <div className="text-left leading-tight">
    <p className="text-sm font-semibold">
     {user?.name || "user"}
    </p>
  </div>
</Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex lg:hidden h-8 w-8 items-center justify-center"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#E8E0D5] bg-[#FAFAF9] px-4 py-3">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-4 py-3 text-sm transition ${
                pathname === item.href
                  ? "bg-[#F0EBE3] text-[#8B5E3C] font-medium"
                  : "text-[#6B7280]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/profile"
            className="mt-2 block rounded-md px-4 py-3 text-sm text-[#6B7280]"
          >
            My Account
          </Link>
        </div>
      </div>
    </header>
  );
}