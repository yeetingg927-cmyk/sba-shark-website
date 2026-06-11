"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Camera, Shield, X } from "lucide-react";
import {
  AboutSection,
  FinalCta,
  LearnMovementSection,
} from "./components/site-components";

const instagramUrl = "https://www.instagram.com/sba_sharkbasketballacademy/";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 1900);

    return () => window.clearTimeout(introTimer);
  }, []);

  return (
    <>
      {showIntro && <HomeLoadingIntro onSkip={() => setShowIntro(false)} />}
      <HomeHero />
      <AboutSection />
      <LearnMovementSection />
      <HomePreview
        label="Programs"
        title="Training for every player path"
        body="Explore kids training, teen development, school team coaching, and private or small group sessions."
        href="/programs"
        cta="View Programs"
        programDrawer
      />
      <HomePreview
        label="Results"
        title="Progress and parent feedback"
        body="See how approved player progress and parent feedback will be shared once real reviews are added."
        href="/results"
        cta="View Results"
        alternate
      />
      <HomePreview
        label="Locations"
        title="Courts around Penang"
        body="Find training areas around Sunshine Mall Air Itam, Queensbay World Hoops, Eco Horizon, and suitable nearby courts."
        href="/locations"
        cta="View Locations"
      />
      <HomePreview
        label="FAQ"
        title="Quick answers before you DM"
        body="Use the simple SBA Helper Bot to check prepared answers about programs, locations, school training, and booking."
        href="/faq"
        cta="Open FAQ"
        alternate
      />
      <FinalCta
        title="Book a session or ask about training"
        body="Parents, players, and schools can send a quick enquiry to Coach Sebastian and get current schedule details by Instagram DM."
      />
      <section className="sr-only">
        <Link href="/book">Go to booking enquiry</Link>
      </section>
    </>
  );
}

function HomeLoadingIntro({ onSkip }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#05070D] px-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(21,94,239,0.34),transparent_30%),radial-gradient(circle_at_58%_70%,rgba(225,6,0,0.24),transparent_28%),linear-gradient(135deg,#05070D_0%,#081426_52%,#05070D_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
      <div className="relative w-full max-w-md text-center">
        <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border border-[#155EEF]/45 bg-[#05070D] shadow-2xl shadow-[#155EEF]/25">
          <img
            src="/sba-logo.png"
            alt="SBA Shark Basketball Academy logo"
            className="h-28 w-28 rounded-full object-contain"
          />
        </div>
        <p className="mt-6 text-sm font-black uppercase tracking-normal text-[#E10600]">
          SBA Shark Basketball Academy
        </p>
        <h1 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
          DOMINATE LIKE A SHARK
        </h1>
        <p className="mt-3 text-sm font-bold uppercase text-[#C7D2E5]">
          Loading training court
        </p>

        <div className="mx-auto mt-8 h-2 max-w-xs overflow-hidden rounded-full bg-[#0D1F3D]">
          <div className="h-full w-2/3 animate-[loadingBar_1.7s_ease-in-out_infinite] rounded-full bg-[linear-gradient(90deg,#155EEF,#E10600,#F97316)]" />
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#E10600]"
              style={{ animationDelay: `${dot * 140}ms` }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onSkip}
          className="mt-8 rounded-md border border-white/15 bg-[#0D1F3D]/80 px-5 py-3 text-sm font-black uppercase text-white transition hover:border-[#E10600]/60 hover:bg-[#081426] focus:outline-none focus:ring-2 focus:ring-[#155EEF]/40"
        >
          Skip intro
        </button>
      </div>
      <style jsx>{`
        @keyframes loadingBar {
          0% {
            transform: translateX(-105%);
          }
          55% {
            transform: translateX(30%);
          }
          100% {
            transform: translateX(155%);
          }
        }
      `}</style>
    </div>
  );
}

function HomeHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pt-32">
      <img
        src="/hero-photo.png"
        alt="Basketball player dunking in an arena"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[38%_center] sm:object-[34%_center] lg:object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,7,13,0.97)_0%,rgba(8,20,38,0.84)_42%,rgba(5,7,13,0.38)_100%),linear-gradient(0deg,rgba(5,7,13,0.95)_0%,rgba(5,7,13,0.18)_48%,rgba(5,7,13,0.68)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0D1F3D]/80 px-4 py-2 text-sm font-semibold text-[#C7D2E5] shadow-2xl shadow-[#E10600]/10 backdrop-blur">
            <Shield className="h-4 w-4 text-[#E10600]" />
            Penang basketball training with Coach Sebastian
          </div>

          <div className="mb-5 flex items-center gap-3">
            <img
              src="/sba-logo.png"
              alt="SBA Shark Basketball Academy logo"
              className="h-14 w-14 rounded-full border border-[#E10600]/45 bg-[#05070D] object-contain shadow-xl shadow-[#155EEF]/20"
            />
            <div>
              <p className="text-sm font-black uppercase text-[#E10600]">
                SBA Shark Basketball Academy
              </p>
              <p className="text-sm font-bold text-[#C7D2E5]">Coach Sebastian</p>
            </div>
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-normal text-white sm:text-6xl lg:text-7xl">
            DOMINATE LIKE A SHARK.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C7D2E5] sm:text-xl">
            Confident skills, sharper fundamentals, and game-ready habits for kids,
            teenagers, school teams, and private groups across Penang.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#E10600] px-6 py-4 text-base font-black uppercase tracking-normal text-white shadow-xl shadow-[#E10600]/25 transition hover:bg-[#C40000] focus:outline-none focus:ring-2 focus:ring-[#E10600]/40"
            >
              <Camera className="h-5 w-5" />
              DM on Instagram
            </a>
            <Link
              href="/programs"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/15 bg-[#0D1F3D]/90 px-6 py-4 text-base font-bold text-white transition hover:border-[#155EEF]/60 hover:bg-[#0B3D91]/70 focus:outline-none focus:ring-2 focus:ring-[#155EEF]/40"
            >
              View Programs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[#C7D2E5]">
            {["Kids", "Teenagers", "School Teams", "Private & Small Groups"].map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-[#155EEF]/25 bg-[#0B3D91]/35 px-4 py-2 text-[#C7D2E5] backdrop-blur"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePreview({ label, title, body, href, cta, alternate = false, programDrawer = false }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section
      className={`border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 ${
        alternate ? "bg-[#081426]" : "bg-[#05070D]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-white/10 bg-[#0D1F3D] p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-[#E10600]">{label}</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 leading-8 text-[#C7D2E5]">{body}</p>
        </div>
        {programDrawer ? (
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-[#E10600] px-5 py-3 font-black uppercase text-white shadow-lg shadow-[#E10600]/20 transition hover:bg-[#C40000] focus:outline-none focus:ring-2 focus:ring-[#E10600]/40"
          >
            {cta}
          </button>
        ) : (
          <Link
            href={href}
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-[#E10600] px-5 py-3 font-black uppercase text-white shadow-lg shadow-[#E10600]/20 transition hover:bg-[#C40000]"
          >
            {cta}
          </Link>
        )}
      </div>
      {programDrawer && drawerOpen && (
        <div className="fixed inset-0 z-[80] flex items-end bg-[#05070D]/80 px-4 pb-4 backdrop-blur sm:items-center sm:justify-center sm:p-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-drawer-title"
            className="w-full max-w-lg rounded-lg border border-white/10 bg-[#0D1F3D] p-5 shadow-2xl shadow-[#155EEF]/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase text-[#E10600]">
                  Choose your path
                </p>
                <h3
                  id="program-drawer-title"
                  className="mt-2 text-2xl font-black uppercase text-white"
                >
                  Programs
                </h3>
                <p className="mt-2 leading-7 text-[#C7D2E5]">
                  View the full SBA program details or watch real coaching moments
                  organized by training section.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 text-white transition hover:border-[#E10600]/60 hover:bg-[#05070D]"
                aria-label="Close programs drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              <Link
                href="/programs"
                className="flex min-h-14 items-center justify-between gap-4 rounded-md bg-[#155EEF] px-5 py-4 font-black uppercase text-white transition hover:bg-[#0B3D91]"
              >
                SBA Program
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="/coaching"
                className="flex min-h-14 items-center justify-between gap-4 rounded-md border border-white/15 bg-[#05070D] px-5 py-4 font-black uppercase text-white transition hover:border-[#E10600]/60 hover:bg-[#081426]"
              >
                A Peek of Coaching Section
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
