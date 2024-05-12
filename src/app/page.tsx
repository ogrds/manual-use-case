"use client";

import { Demo } from "@/components/Demo";
import { FooterSection } from "@/components/FooterSection";
import { Quiz } from "@/components/Quiz";
import { Facebook } from "@/icons/Facebook";
import { Google } from "@/icons/Google";
import { Twitter } from "@/icons/Twitter";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [quizOpened, setQuizOpened] = useState(false);

  if (quizOpened) return <Quiz handleClose={() => setQuizOpened(false)} />;

  return (
    <div>
      <header className="bg-gradient xl:bg-banner bg-cover bg-no-repeat bg-[80%] sm:bg-[75%] lg:bg-right">
        <div className="relative flex items-center justify-center md:justify-start h-[calc(100vh-3rem)] md:max-w-7xl p-5 my-0 mx-auto">
          <Image
            width={40}
            height={40}
            className="absolute top-5 w-10 h-10"
            src="images/logo.svg"
            alt="Logo"
          />
          <div className="max-w-[468px] mt-10 text-center md:text-left p-5">
            <h1 className="text-text">Be good to yourself</h1>

            <p className="body-3 mt-5 text-text">
              {`We're working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.`}
            </p>

            <button
              type="button"
              className="mt-9 heading-7 uppercase bg-primary text-background px-[1.875rem] py-[0.938rem] hover:bg-primary/80 transition-colors"
              onClick={() => setQuizOpened(true)}
            >
              Take the quiz
            </button>
          </div>
        </div>
      </header>

      <main className="my-5 lg:my-[4.375rem]">
        <h3 className="text-center lg:mb-[4.375rem] px-5">
          What we can help with
        </h3>

        <div className="w-full flex flex-col gap-8 md:gap-[180px]">
          <Demo
            bgIndex={1}
            image="/images/demo-1.png"
            tag={`Hair loss`}
            title={`Hair loss needn't be irreversible. We can help!`}
            description={`We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.`}
          />

          <Demo
            bgIndex={2}
            image="/images/demo-2.png"
            tag={`Erecetile dysfunction`}
            title={`Erections can be a tricky thing. But no need to feel down!`}
            description={`We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.`}
          />
        </div>
      </main>

      <footer className="bg-background-footer">
        <div className="flex gap-y-10 justify-between flex-col lg:flex-row max-w-7xl p-10 py-[4.563rem] mx-auto">
          <Image
            width={75}
            height={75}
            className="self-center lg:self-start"
            src="images/logo.svg"
            alt="Logo"
          />
          <div className="self-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10">
            <FooterSection
              title="Product"
              options={["Popular", "Trending", "Guided", "Products"]}
            />
            <FooterSection
              title="Company"
              options={["Press", "Mission", "Strategy", "About"]}
            />
            <FooterSection
              title="Info"
              options={["Support", "Customer Service", "Get started"]}
            />

            <div className="flex flex-col gap-5 min-w-[174px] items-center md:items-start">
              <p className="heading-7 uppercase text-text">Follow Us</p>

              <span className="flex items-center gap-5">
                <Facebook />
                <Google />
                <Twitter />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
