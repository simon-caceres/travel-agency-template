"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import image1 from "@/assets/images/listing/1.jpg";
import image2 from "@/assets/images/listing/2.jpg";
import image3 from "@/assets/images/listing/3.jpg";
import image4 from "@/assets/images/listing/4.jpg";
import image5 from "@/assets/images/listing/5.jpg";

import Navbar from "@/components/navbar";
import DetailSidebar from "@/components/detail-sidebar";
import Footer from "@/components/footer";
import Switcher from "@/components/switcher";

import { FiCamera, FiChevronUp, FiMapPin } from "@/assets/icons/vander";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

import { faqData, tourDetailAbout } from "@/data/data";

export const dynamic = "force-dynamic";

export default function Page() {
  let [activeTab, setActiveTab] = useState(1);

  let images = [image1.src, image2.src, image3.src, image4.src, image5.src];
  let [photoIndex, setActiveIndex] = useState(0);
  let [isOpen, setOpen] = useState(false);

  let handleCLick = (index: any) => {
    setActiveIndex(index);
    setOpen(true);
  };
  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky"
        navlight={false}
        manuclass="justify-end"
      />

      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid relative">
          <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <Image src={image1} alt="" />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <Link
                    href="#"
                    onClick={() => handleCLick(0)}
                    className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                  >
                    <FiCamera className="size-4 align-middle"></FiCamera>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                    <Image src={image2} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        href="#"
                        onClick={() => handleCLick(1)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                    <Image src={image3} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        href="#"
                        onClick={() => handleCLick(2)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                    <Image src={image4} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        href="#"
                        onClick={() => handleCLick(3)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                    <Image src={image5} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <Link
                        href="#"
                        onClick={() => handleCLick(4)}
                        className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                      >
                        <FiCamera className="size-4 align-middle"></FiCamera>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-8 md:col-span-7">
              <h5 className="text-2xl font-semibold">
                New Zealand’s South Island brims with majestic
              </h5>
              <p className="flex items-center text-slate-400 font-medium mt-2">
                <FiMapPin className="size-4 me-1"></FiMapPin> New Zealand
              </p>

              <ul className="list-none">
                {tourDetailAbout.map((item, index) => {
                  let Icon = item.icon;
                  return (
                    <li
                      className="inline-flex items-center me-5 mt-5"
                      key={index}
                    >
                      <Icon className="size-6 stroke-[1.5] text-red-500"></Icon>

                      <div className="ms-3">
                        <p className="font-medium">{item.name}</p>
                        <span className="text-slate-400 font-medium text-sm">
                          {item.title}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6">
                <h5 className="text-lg font-semibold">Tour Descriptions:</h5>

                <p className="text-slate-400 mt-6">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin. It contains a series of real
                  Latin words. This ancient dummy text is also incomprehensible,
                  but it imitates the rhythm of most European languages in Latin
                  script.
                </p>
                <p className="text-slate-400 mt-3">
                  The advantage of its Latin origin and the relative
                  meaninglessness of Lorum Ipsum is that the text does not
                  attract attention to itself or distract the viewer's attention
                  from the layout.
                </p>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold">Questions & Answers:</h5>

                <div className="mt-6">
                  {faqData.slice(0, 4).map((item, index) => {
                    return (
                      <div
                        className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0"
                        key={index}
                      >
                        <h2 className="text-base font-semibold">
                          <button
                            type="button"
                            className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                              activeTab === item.id
                                ? "bg-gray-50 dark:bg-slate-800 text-red-500"
                                : ""
                            }`}
                            onClick={() => setActiveTab(item.id)}
                          >
                            <span>{item.title}</span>
                            <FiChevronUp
                              className={`size-4 shrink-0 ${
                                activeTab === item.id ? "" : "rotate-180"
                              }`}
                            />
                          </button>
                        </h2>
                        <div className={activeTab === item.id ? "" : "hidden"}>
                          <div className="p-5">
                            <p className="text-slate-400 dark:text-gray-400">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                <form className="mt-6">
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Email :"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-left">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 h-28"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <DetailSidebar />
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}
