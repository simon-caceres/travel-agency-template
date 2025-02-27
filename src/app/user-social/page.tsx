import React from "react";

import Navbar from "@/components/navbar";
import AccountingTab from "@/components/accounting-tab";
import Footer from "@/components/footer";
import Switcher from "@/components/switcher";

import { userSocialData } from "@/data/data";

import BG from "@/assets/images/bg/cta.jpg";

export default function Page() {
  const sourceSrc = BG.src;
  return (
    <>
      <Navbar
        navclass="defaultscroll is-sticky"
        navlight={false}
        manuclass="justify-end"
      />

      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div
            className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-800 h-52 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${sourceSrc})` }}
          />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">
            <AccountingTab />

            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
              <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <h5 className="text-lg font-semibold">Social Profiles :</h5>
                </div>

                <div className="p-6">
                  {userSocialData.map((item, index) => {
                    let Icon = item.icon;
                    return (
                      <div className="md:flex mt-8 first:mt-0" key={index}>
                        <div className="md:w-1/3">
                          <span className="font-medium">{item.name}</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                          <form>
                            <div className="form-icon relative">
                              <Icon className="w-4 h-4 absolute top-3 start-4"></Icon>
                              <input
                                type="text"
                                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder={item.placeHolder}
                                id="twitter_name"
                                name="name"
                                required
                              />
                            </div>
                          </form>

                          <p className="text-slate-400 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <span className="font-medium"></span>
                      <button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5">
                        Save Social Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
