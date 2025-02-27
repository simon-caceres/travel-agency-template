"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FiSun, FiMoon } from "../assets/icons/vander";
export default function Switcher() {
  let [visible, setVisible] = useState(false);
  let htmlTag: any;

  useEffect(() => {
    if (typeof document !== "undefined") {
      htmlTag = document.getElementsByTagName("html")[0];
    }
  }, []);

  const changeTheme = (e: any) => {
    if (htmlTag) {
      if (htmlTag.className.includes("dark")) {
        htmlTag.className = "light";
      } else {
        htmlTag.className = "dark";
      }
    }
  };

  const modeChange = () => {
    if (htmlTag) {
      const switcherRtl = document.getElementById("switchRtl");
      if (switcherRtl && switcherRtl.innerText === "LTR") {
        htmlTag.dir = "ltr";
      } else {
        htmlTag.dir = "rtl";
      }
    }
  };

  const toggleVisible = () => {
    if (typeof document !== "undefined") {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // TODO: windo use is not suported on SSR, so we should find new forms to handle this
    if (typeof window === "undefined") return;
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);

      return () => {
        window.removeEventListener("scroll", toggleVisible);
      };
    }
  }, []);

  return (
    <>
      <div className="fixed top-1/4 -left-2 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
            onChange={(e: any) => changeTheme(e)}
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <FiMoon className="w-[18px] h-[18px] text-yellow-500"></FiMoon>
            <FiSun className="w-[18px] h-[18px] text-yellow-500"></FiSun>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>

      <div className="fixed top-[40%] -left-3 z-50">
        <Link href="" id="switchRtl" onClick={() => modeChange()}>
          <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden">
            LTR
          </span>
          <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">
            RTL
          </span>
        </Link>
      </div>

      <Link
        href="#"
        onClick={() => scrollToTop()}
        id="back-to-top"
        className="back-to-top fixed text-lg rounded-md z-10 bottom-5 end-5 size-8 text-center bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white justify-center items-center"
        style={{ display: visible ? "inline-flex" : "none" }}
      >
        <i className="mdi mdi-arrow-up"></i>
      </Link>
    </>
  );
}
