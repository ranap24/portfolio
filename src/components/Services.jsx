"use client";

import { Tabs } from "./UI/Tabs";
import { motion } from "framer-motion";
export default function Services() {
  const tabs = [
    {
      title: "Web Development",
      value: "webDevelopment",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl bg-[url(src/assets/webDevelopment.jpg)] bg-cover bg-center">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#000000] opacity-70">
            <h1 className="font-canela tracking-wide text-xl md:text-6xl font-semibold text-white">
              Web Development
            </h1>
            <p className="font-raleway text-white text-lg md:text-xl font-normal mt-4">
              We help your business grow by creating websites for the best User
              Experience.
            </p>
            <motion.a
              className="bg-white text-black font-normal text-xl p-4 rounded-xl focus:border-none focus:outline-none absolute right-8 bottom-8 "
              whileTap={{ scale: 0.9 }}
              href="#contact"
            >
              Get the Quotation
            </motion.a>
          </div>
        </div>
      ),
    },
    {
      title: "App Development",
      value: "appDevelopement",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl bg-[url(src/assets/appDevelopment.jpg)] bg-cover bg-center">
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#000000] opacity-70">
          <h1 className="font-canela tracking-wide text-xl md:text-6xl font-semibold text-white">
            App Development
          </h1>
          <p className="font-raleway text-white text-lg md:text-xl font-normal mt-4">
          We help take your business to every smartphone users by developing robust mobile applications.
          </p>
          <motion.a
            className="bg-white text-black font-normal text-xl p-4 rounded-xl focus:border-none focus:outline-none absolute right-8 bottom-8 "
            whileTap={{ scale: 0.9 }}
            href="#contact"
          >
            Get the Quotation
          </motion.a>
        </div>
      </div>
      ),
    },
    {
      title: "Data Analytics",
      value: "dataAnalytics",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl bg-[url(src/assets/dataAnalytics.jpg)] bg-cover bg-center">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#000000] opacity-70">
            <h1 className="font-canela tracking-wide text-xl md:text-6xl font-semibold text-white">
              Data Analytics
            </h1>
            <p className="font-raleway text-white text-lg md:text-xl font-normal mt-4">
            Analyze your best performing products and services to become unbeatable in this competitive market.
            </p>
            <motion.a
              className="bg-white text-black font-normal text-xl p-4 rounded-xl focus:border-none focus:outline-none absolute right-8 bottom-8 "
              whileTap={{ scale: 0.9 }}
              href="#contact"
            >
              Get the Quotation
            </motion.a>
          </div>
        </div>
      ),
    },
    {
      title: "Gen AI",
      value: "genAI",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl bg-[url(src/assets/genAI.jpg)] bg-cover bg-center">
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-[#000000] opacity-70 ">
          <h1 className="font-canela tracking-wide text-4xl md:text-6xl font-semibold text-white">
            Gen AI
          </h1>
          <p className="font-raleway text-white text-lg md:text-xl font-normal mt-4">
          We develop AI to speak on behalf of your business to the users, exactly like you want to do.
          </p>
          <motion.a
            className="bg-white text-black font-normal text-xl p-4 rounded-xl focus:border-none focus:outline-none absolute right-8 bottom-8 "
            whileTap={{ scale: 0.9 }}
            href="#contact"
          >
            Get the Quotation
          </motion.a>
        </div>
      </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-2">
      <Tabs tabs={tabs} />
    </div>
  );
}
