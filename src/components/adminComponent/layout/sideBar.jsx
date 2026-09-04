"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Grid2X2,
  FolderTree,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
     import { ListOrdered, History } from "lucide-react";


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = usePathname()

  const menuSections = [
    {
      title: "MAIN",
      items: [
  {
    name: "Order Listing",
    icon: ListOrdered,
    href: "/admin/orders",
    active: false,
  },
  {
    name: "Transaction History",
    icon: History,
    href: "/admin/transactions",
    active: false,
  },
      ],
    },

    {
      title: "CATALOG",
      items: [
        {
          name: "Categories",
          icon: FolderTree,
          href: "/admin/category",
        },
         {
          name: "Room Type",
          icon: FolderTree,
          href: "/admin/room-type",
        },
        {
          name: "Material",
          icon: FolderTree,
          href: "/admin/material",
        },
           {
          name: "Products",
          icon: FolderTree,
          href: "/admin/product",
        },
      ],
    },

    // {
    //   title: "WEB APPS",
    //   items: [
    //     {
    //       name: "Apps",
    //       icon: Grid2X2,
    //       href: "/admin/apps",
    //     },
    //     {
    //       name: "Nested Menu",
    //       icon: Layers3,
    //       href: "/admin/nested",
    //     },
    //   ],
    // },

    // {
    //   title: "PAGES",
    //   items: [
    //     {
    //       name: "Authentication",
    //       icon: ShieldCheck,
    //       href: "/admin/auth",
    //     },
    //     {
    //       name: "Error",
    //       icon: TriangleAlert,
    //       href: "/admin/error",
    //     },
    //     {
    //       name: "Pages",
    //       icon: FileText,
    //       href: "/admin/pages",
    //     },
    //   ],
    // },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="
          fixed
          left-4
          top-7
          z-[60]
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          bg-[#4B5696]
          text-white
          shadow-lg
          lg:hidden
        "
      >
        <Grid2X2 size={20} />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed
          lg:sticky
          top-0
          left-0
          z-50
          h-screen
          bg-[#4B5696]
          text-white
          transition-all
          duration-300
          ease-in-out

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }

          ${collapsed ? "lg:w-20" : "lg:w-[280px]"}
          w-[280px]
        `}
      >
        {/* Logo */}
        <div className="relative flex h-[92px] items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3 overflow-hidden">
            <span
              className={`
                whitespace-nowrap
                text-3xl
                font-semibold
                transition-all
                duration-300
                ${collapsed ? "w-0 opacity-0" : "opacity-100"}
              `}
            >
              YZEN
            </span>
          </div>

          {/* Desktop Collapse Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
              hidden
              lg:flex
              mt-6
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-slate-700
              shadow-lg
            "
          >
            {collapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>

        <div className="py-5  h-[calc(100vh-92px)]">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-8">
              {!collapsed && (
                <h3 className="px-10 pb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                  {section.title}
                </h3>
              )}

              <div className="space-y-1 px-4">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        group
                        relative
                        flex
                        h-14
                        items-center
                        rounded-full
                        transition-all
                        duration-200

                        ${
                        path ==  item.href
                            ? "bg-white/10 text-white"
                            : "hover:bg-white/5 text-white/80"
                        }

                        ${
                          collapsed
                            ? "justify-center px-0"
                            : "justify-between px-5"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <Icon size={21} />

                        {!collapsed && (
                          <span className="text-[17px] font-medium">
                            {item.name}
                          </span>
                        )}
                      </div>

                      {!collapsed && (
                        <ChevronDown
                          size={18}
                          className="text-white/70"
                        />
                      )}

                      {/* Tooltip */}
                      {collapsed && (
                        <div
                          className="
                            pointer-events-none
                            absolute
                            left-16
                            whitespace-nowrap
                            rounded-lg
                            bg-slate-900
                            px-3
                            py-2
                            text-sm
                            opacity-0
                            transition
                            group-hover:opacity-100
                            z-50
                          "
                        >
                          {item.name}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}