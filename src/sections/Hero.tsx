import memojiImage from "@/assets/images/hero-removebg-preview.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg'


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} shouldSpin spinDuration="6s" shouldOrbit orbitDuration="48s" rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} shouldSpin spinDuration="6s" shouldOrbit orbitDuration="38s" rotation={20}>
        <StarIcon className="size-12 text-white/60" />
      </HeroOrbit>
      <HeroOrbit size={590} shouldSpin spinDuration="6s" shouldOrbit orbitDuration="40s" rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={430} shouldSpin spinDuration="3s" shouldOrbit orbitDuration="30s" rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} shouldSpin spinDuration="3s" shouldOrbit orbitDuration="32s" rotation={79}>
        <SparkleIcon className="size-5 text-white/60" />
      </HeroOrbit>
      <HeroOrbit size={530} shouldSpin spinDuration="3s" shouldOrbit orbitDuration="36s" rotation={178}>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} shouldOrbit orbitDuration="44s" rotation={144}>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} shouldOrbit orbitDuration="46s" rotation={85}>
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={520} shouldOrbit orbitDuration="34s" rotation={-41}>
        <div className="size-2 rounded-full bg-green-400/20 animate-pulse" />
      </HeroOrbit>
      <HeroOrbit size={650} shouldOrbit orbitDuration="42s" rotation={-5}>
        <div className="size-2 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={memojiImage}
            className="size-[150px] -mb-4"
            alt="Person peeking rom begin laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 relative size-2.5 rounded-full">
              <div className="rounded-full animate-ping-large bg-green-500 absolute inset-0"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
          Where creativity meets code & design
          </h1>
          <p className="mt-4 text-center md:text-lg text-white/60">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore Myself</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};
