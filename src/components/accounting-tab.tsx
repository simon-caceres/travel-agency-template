"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FiAirplay,
  FiCreditCard,
  FiFileText,
  FiShare2,
  FiBell,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import clientImg from "@/assets/images/client/16.jpg";

const NAV_LINKS = [
  { path: "/user-profile", label: "Profile", icon: FiAirplay },
  { path: "/user-payment", label: "Payment", icon: FiCreditCard },
  { path: "/user-invoice", label: "Invoice", icon: FiFileText },
  { path: "/user-social", label: "Social Profile", icon: FiShare2 },
  { path: "/user-notification", label: "Notifications", icon: FiBell },
  { path: "/user-setting", label: "Settings", icon: FiSettings },
  { path: "/lock-screen", label: "Sign Out", icon: FiLogOut },
];

export default function AccountingTab() {
  const current = usePathname();
  const [profileImage, setProfileImage] = useState<any>(clientImg);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="lg:w-1/4 md:w-1/3 md:px-3">
      <div className="relative">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
          {/* Imagen de perfil */}
          <div className="text-center mb-5">
            <input
              id="pro-img"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <div className="relative h-28 w-28 mx-auto">
              <Image
                src={profileImage}
                className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                alt="User Profile"
                width={112}
                height={112}
              />
              <label
                className="absolute inset-0 cursor-pointer"
                htmlFor="pro-img"
              ></label>
            </div>
            <div className="mt-4">
              <h5 className="text-lg font-semibold">Jesus Zamora</h5>
              <p className="text-slate-400">jesus@hotmail.com</p>
            </div>
          </div>

          {/* Menú de navegación */}
          <div className="border-t border-gray-100 dark:border-gray-700">
            <ul className="list-none sidebar-nav mb-0 pb-0">
              {NAV_LINKS.map(({ path, label, icon: Icon }) => (
                <li
                  key={path}
                  className={`navbar-item account-menu ${
                    current === path ? "active" : ""
                  }`}
                >
                  <Link
                    href={path}
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="me-2 mb-0">
                      <Icon className="size-4" />
                    </span>
                    <h6 className="mb-0 font-medium">{label}</h6>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
