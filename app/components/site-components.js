"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Camera,
  CheckCircle2,
  Clipboard,
  MapPin,
  MessageCircle,
  School,
  Send,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import {
  helperQuestions,
  instagramHandle,
  instagramUrl,
  locations,
  programs,
} from "../site-data";

const programIcons = [Sparkles, Target, School, Users];
const kidsProgressPhoto = "/Eco-Horizon%20Clubhouse%20Kids%201.jpeg";

const movementSkills = [
  {
    name: "Ball Handling",
    description:
      "Control the ball with both hands, protect it from defenders, and build confidence while moving.",
  },
  {
    name: "Shooting Form",
    description:
      "Build better balance, hand position, rhythm, and follow-through for more consistent shooting habits.",
  },
  {
    name: "Layup Footwork",
    description:
      "Learn correct steps, body control, and finishing habits near the basket.",
  },
  {
    name: "Passing & Teamwork",
    description:
      "Improve passing accuracy, timing, communication, and movement with teammates.",
  },
  {
    name: "Defensive Slides",
    description:
      "Develop defensive stance, footwork, balance, and effort to stay in front of the attacker.",
  },
  {
    name: "Triple Threat & Pivoting",
    description:
      "Learn how to protect the ball and stay ready to pass, shoot, or drive.",
  },
  {
    name: "Cutting & Spacing",
    description:
      "Understand how to move without the ball, create space, and make better game decisions.",
  },
  {
    name: "Game IQ",
    description:
      "Learn when to pass, shoot, drive, defend, and make smarter choices during play.",
  },
];

export function SiteFrame({ children }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070D] text-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export function Navbar() {
  const links = [
    ["Home", "/"],
    ["Programs", "/programs"],
    ["Results", "/results"],
    ["Locations", "/locations"],
    ["FAQ", "/faq"],
    ["Book", "/book"],
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070D]/85 px-4 py-3 backdrop-blur sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/sba-logo.png"
            alt="SBA Shark Basketball Academy logo"
            className="h-10 w-10 shrink-0 rounded-full bg-[#05070D] object-contain"
          />
          <span className="hidden truncate text-sm font-black uppercase text-white xl:block">
            SBA Shark Basketball Academy
          </span>
          <span className="truncate text-sm font-black uppercase text-white xl:hidden">
            SBA Shark
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-2">
          <div className="hidden items-center gap-1 rounded-md border border-white/10 bg-[#0D1F3D]/70 p-1 md:flex">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded px-3 py-2 text-sm font-bold text-[#C7D2E5] transition hover:bg-[#0D1F3D] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="shrink-0 rounded px-2 py-2 text-xs font-bold text-[#C7D2E5] transition hover:bg-[#0D1F3D] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-[#E10600] px-3 py-2 text-sm font-black text-white transition hover:bg-[#C40000] sm:px-4"
          >
            <Camera className="h-4 w-4" />
            <span className="hidden sm:inline">DM on Instagram</span>
            <span className="sm:hidden">DM</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-start px-5 pb-16 pt-28 sm:px-8 lg:items-center lg:px-12 lg:py-24">
      <SportBackground />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0D1F3D]/80 px-4 py-2 text-sm font-semibold text-[#C7D2E5] shadow-2xl shadow-[#E10600]/10">
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

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-normal text-white sm:text-6xl lg:text-7xl">
            DOMINATE LIKE A SHARK.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C7D2E5] sm:text-xl">
            Confident skills, sharper fundamentals, and game-ready habits for kids,
            teenagers, school teams, and private groups across Penang.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InstagramButton />
            <Link
              href="/programs"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/15 bg-[#0D1F3D] px-6 py-4 text-base font-bold text-white transition hover:border-[#155EEF]/60 hover:bg-[#0B3D91]/60 focus:outline-none focus:ring-2 focus:ring-[#155EEF]/40"
            >
              View Programs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[#C7D2E5]">
            {["Kids", "Teenagers", "School Teams", "Private & Small Groups"].map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-[#155EEF]/25 bg-[#0B3D91]/25 px-4 py-2 text-[#C7D2E5]"
              >
                {audience}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#0D1F3D] shadow-2xl shadow-[#155EEF]/20 sm:min-h-[520px] lg:min-h-[640px]"
        >
          <img
            src="/hero-photo.png"
            alt="Basketball player dunking in an arena"
            className="absolute inset-0 h-full w-full object-cover object-[42%_center] sm:object-[38%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.96)_0%,rgba(8,20,38,0.68)_36%,rgba(5,7,13,0.18)_72%),linear-gradient(0deg,rgba(5,7,13,0.88)_0%,rgba(5,7,13,0.08)_45%,rgba(5,7,13,0.55)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,7,13,0.82)_0%,rgba(8,20,38,0.34)_36%,rgba(5,7,13,0.04)_72%),linear-gradient(0deg,rgba(5,7,13,0.72)_0%,rgba(5,7,13,0.05)_45%,rgba(5,7,13,0.35)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#05070D]/72 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <img
                src="/sba-logo.png"
                alt="SBA Shark Basketball Academy logo"
                className="h-14 w-14 rounded-full border border-[#E10600]/45 bg-[#05070D] object-contain shadow-lg shadow-[#E10600]/20"
              />
              <div>
                <p className="text-sm font-black uppercase text-white">
                  SBA Shark Basketball Academy
                </p>
                <p className="text-sm font-bold text-[#C7D2E5]">
                  Skills. Confidence. Game habits.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative min-h-[420px] rounded-lg border border-white/10 bg-[#0D1F3D]/65 p-5 shadow-2xl shadow-black/40 backdrop-blur"
    >
      <div className="absolute inset-5 rounded-full border-[16px] border-[#0B3D91]/45" />
      <div className="absolute inset-x-12 top-1/2 h-1 bg-white/15" />
      <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-1 bg-white/15" />
      <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-[#155EEF]">Coach</p>
            <p className="text-3xl font-black">Sebastian</p>
          </div>
          <img
            src="/sba-logo.png"
            alt="SBA Shark Basketball Academy logo"
            className="h-12 w-12 rounded-full border border-[#E10600]/45 bg-[#05070D] object-contain shadow-lg shadow-[#E10600]/20 sm:h-14 sm:w-14"
          />
        </div>

        <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border-4 border-black bg-[#E10600] p-2 shadow-2xl shadow-[#155EEF]/30 sm:h-52 sm:w-52">
          <img
            src="/sba-logo.png"
            alt="SBA Shark Basketball Academy logo"
            className="h-full w-full rounded-full bg-[#05070D] object-contain"
          />
        </div>

        <div className="rounded-md border border-white/10 bg-[#081426]/90 p-5">
          <p className="text-sm font-semibold uppercase text-[#9FB0CC]">Instagram</p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 break-all text-lg font-black text-white hover:text-[#E10600]"
          >
            <Camera className="h-5 w-5 shrink-0" />
            {instagramHandle}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function PageHero({ label, title, body, children }) {
  return (
    <section className="relative isolate px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <SportBackground />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-[#E10600]">{label}</p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#C7D2E5]">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InstagramButton />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const audienceCards = [
    {
      title: "Kids Basketball Training",
      body: "Structured coaching for younger players and beginners who want to build confidence, coordination, ball control, teamwork, and basic basketball fundamentals.",
    },
    {
      title: "Teen Player Development",
      body: "Focused training for teenagers who want stronger skills, better decision-making, sharper footwork, improved shooting, and more game confidence.",
    },
    {
      title: "School Team Training",
      body: "Organized team training for schools that need better communication, spacing, discipline, defense, transition habits, and match preparation.",
    },
    {
      title: "Private & Small Group Sessions",
      body: "More focused coaching for players who want personal feedback, extra repetitions, and specific skill development.",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-[#081426] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#155EEF]">About</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
            Basketball Coaching for Young Players and Teams
          </h2>
          <p className="mt-5 leading-8 text-[#C7D2E5]">
            For parents looking for trusted basketball coaching for their child,
            SBA focuses on young players, school teams, and small group development.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-[#0D1F3D] shadow-2xl shadow-[#155EEF]/10">
            <img
              src={kidsProgressPhoto}
              alt="Kids at Eco Horizon Clubhouse basketball training"
              className="h-80 w-full object-cover object-[center_58%] sm:h-96 lg:h-[460px]"
            />
            <div className="border-t border-white/10 bg-[#05070D]/80 p-4">
              <p className="text-sm font-black uppercase text-[#E10600]">
                Coaching progress in action
              </p>
              <p className="mt-2 leading-7 text-[#C7D2E5]">
                Young players building confidence, teamwork, and basketball habits
                through SBA training.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {audienceCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-white/10 bg-[#0D1F3D] p-5">
              <p className="font-black text-white">{card.title}</p>
              <p className="mt-3 leading-7 text-[#C7D2E5]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LearnMovementSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section className="border-y border-white/10 bg-[#05070D] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase text-[#E10600]">Learn the Movement</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
            Learn the Movement
          </h2>
          <p className="mt-5 leading-8 text-[#C7D2E5]">
            See the basic skills, footwork, and game habits young players develop
            through SBA training. Animation previews will be added soon.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {movementSkills.map((skill) => (
            <article
              key={skill.name}
              className="rounded-lg border border-white/10 bg-[#0D1F3D] p-5 transition hover:border-[#155EEF]/55 hover:bg-[#0B3D91]/45"
            >
              <div className="relative grid aspect-video place-items-center overflow-hidden rounded-md border border-dashed border-[#155EEF]/45 bg-[#081426]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(21,94,239,0.18),rgba(225,6,0,0.16))]" />
                <div className="relative text-center">
                  <Target className="mx-auto h-9 w-9 text-[#F97316]" />
                  <p className="mt-2 text-xs font-black uppercase text-[#C7D2E5]">
                    Animation preview
                  </p>
                  <p className="text-xs text-[#7F91B0]">Coming soon</p>
                </div>
              </div>

              <h3 className="mt-5 text-xl font-black text-white">{skill.name}</h3>
              <p className="mt-3 leading-7 text-[#C7D2E5]">{skill.description}</p>
              <button
                type="button"
                onClick={() => setSelectedSkill(skill)}
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#E10600] px-4 py-3 font-black uppercase text-white transition hover:bg-[#C40000] focus:outline-none focus:ring-2 focus:ring-[#E10600]/40"
              >
                View Movement
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-[#05070D]/85 px-5 backdrop-blur">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="movement-modal-title"
            className="w-full max-w-lg rounded-lg border border-white/10 bg-[#0D1F3D] p-6 shadow-2xl shadow-[#155EEF]/20"
          >
            <p className="text-sm font-black uppercase text-[#E10600]">
              Animation coming soon
            </p>
            <h3
              id="movement-modal-title"
              className="mt-3 text-3xl font-black uppercase text-white"
            >
              {selectedSkill.name}
            </h3>
            <div className="mt-5 grid min-h-36 place-items-center rounded-md border border-dashed border-[#155EEF]/45 bg-[#081426] p-5 text-center">
              <p className="max-w-sm leading-8 text-[#C7D2E5]">
                Animation tutorial coming soon. SBA will add visual movement guides
                here to help players understand this skill step by step.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#155EEF] px-5 py-3 font-black uppercase text-white transition hover:bg-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#155EEF]/40"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export function PreviewCards() {
  const cards = [
    ["Programs", "/programs", "Kids, teen, school team, private, and small group training."],
    ["Results", "/results", "Player progress, review cards, and parent feedback."],
    ["Locations", "/locations", "Training areas around Air Itam, Queensbay, and Batu Kawan."],
    ["FAQ", "/faq", "Prepared answers through the simple SBA Helper Bot."],
  ];

  return (
    <section className="bg-[#05070D] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          label="Explore"
          title="Find the right next step"
          body="Jump into the page that matches what you need, then DM SBA Shark Basketball Academy for current slots and details."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, href, body]) => (
            <Link
              key={href}
              href={href}
              className="group rounded-lg border border-white/10 bg-[#0D1F3D] p-5 transition hover:border-[#155EEF]/55 hover:bg-[#0B3D91]/55"
            >
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-[#C7D2E5]">{body}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-black text-[#E10600] group-hover:text-[#FFFFFF]">
                View page <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramGrid({ detailed = false }) {
  return (
    <section className="border-y border-white/10 bg-[#081426] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          label="Programs"
          title="Training built for young players and teams"
          body="Choose a program that fits the player's age, goals, and training environment."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = programIcons[index];
            return (
              <div
                key={program.title}
                className="rounded-lg border border-white/10 bg-[#0D1F3D] p-5 transition hover:border-[#155EEF]/55 hover:bg-[#0B3D91]/55"
              >
                {program.title === "Kids Basketball Training" && (
                  <div className="mb-5 space-y-4">
                    <img
                      src={kidsProgressPhoto}
                      alt="Kids basketball coaching progress at Eco Horizon Clubhouse"
                      className="h-48 w-full rounded-md border border-white/10 object-cover object-[center_58%]"
                    />
                  </div>
                )}
                <Icon className="h-9 w-9 text-[#E10600]" />
                <h3 className="mt-5 text-xl font-black text-white">{program.title}</h3>
                <p className="mt-3 leading-7 text-[#C7D2E5]">{program.description}</p>
                {detailed && (
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#C7D2E5]">
                    {program.learn.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#155EEF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {program.title === "Kids Basketball Training" && (
                  <Link
                    href="/coaching#kids"
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#155EEF] px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#155EEF]/40"
                  >
                    See more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ResultsSection({ reviews = [] }) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const hasReviews = reviews.length > 0;

  return (
    <section className="border-y border-white/10 bg-[#081426] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            label="Player Progress & Feedback"
            title="Progress parents and players can see after coaching"
            body="SBA Shark sessions focus on visible improvement: stronger fundamentals, smarter decisions, better confidence, and clear feedback after coaching."
          />
          {hasReviews && (
            <button
              type="button"
              onClick={() => setShowAllReviews((current) => !current)}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#E10600] px-5 py-3 font-black text-white transition hover:bg-[#C40000] focus:outline-none focus:ring-2 focus:ring-[#E10600]/40 lg:self-start"
            >
              {showAllReviews ? "Hide Reviews" : "See All Reviews"}
            </button>
          )}
        </div>

        {hasReviews ? (
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin] [scrollbar-color:#E10600_#0D1F3D] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#E10600] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#0D1F3D]">
            {reviews.slice(0, 5).map((review) => (
              <ReviewCard key={review.name} review={review} featured />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-dashed border-[#E10600]/35 bg-[#0D1F3D]/70 p-6 sm:p-8">
            <p className="text-2xl font-black uppercase text-white">No reviews yet</p>
            <p className="mt-3 max-w-2xl leading-8 text-[#C7D2E5]">
              Player progress and parent feedback will appear here once approved
              reviews are added.
            </p>
            <p className="mt-5 font-black text-[#155EEF]">
              Attended a training session? Share your feedback below.
            </p>
          </div>
        )}

        {hasReviews && showAllReviews && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black uppercase text-white">All Reviews</h3>
              <button
                type="button"
                onClick={() => setShowAllReviews(false)}
                className="rounded-md border border-white/10 px-4 py-2 text-sm font-bold text-[#FFFFFF] transition hover:border-[#E10600]/60 hover:bg-[#0D1F3D]"
              >
                Hide Reviews
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={`all-${review.name}`} review={review} />
              ))}
            </div>
          </motion.div>
        )}

        <FeedbackForm />
      </div>
    </section>
  );
}

export function LocationGrid() {
  return (
    <section className="bg-[#05070D] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#155EEF]">Locations</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
            Flexible courts around Penang
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-[#C7D2E5]">
            Choose a regular training area or enquire about a nearby residential court
            that works better for your family or school group.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#E10600] px-5 py-3 font-black text-white transition hover:bg-[#C40000]"
          >
            Book or enquire
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {locations.map((location) => (
            <div
              key={location}
              className="flex gap-4 rounded-lg border border-white/10 bg-[#0D1F3D] p-5"
            >
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#155EEF]" />
              <p className="font-semibold leading-7 text-[#FFFFFF]">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HelperBotSection() {
  const [selectedQuestion, setSelectedQuestion] = useState(helperQuestions[0]);

  return (
    <section className="border-y border-white/10 bg-[#081426] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase text-[#E10600]">
            <Bot className="h-5 w-5" />
            SBA Helper Bot
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
            Quick answers, no real AI
          </h2>
          <p className="mt-5 leading-8 text-[#C7D2E5]">
            Tap a common question to see a prepared answer. For more enquiry,
            DM {` ${instagramHandle}`}.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#0D1F3D]/70 p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {helperQuestions.map((item) => (
              <button
                key={item.question}
                type="button"
                onClick={() => setSelectedQuestion(item)}
                className={`rounded-md border px-4 py-3 text-left text-sm font-bold transition ${
                  selectedQuestion.question === item.question
                    ? "border-[#E10600]/60 bg-[#E10600] text-white"
                    : "border-white/10 bg-[#0D1F3D] text-white hover:border-[#155EEF]/55"
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-md border border-[#155EEF]/25 bg-[#0B3D91]/25 p-5">
            <p className="flex items-center gap-2 font-black text-[#C7D2E5]">
              <MessageCircle className="h-5 w-5" />
              Prepared answer
            </p>
            <p className="mt-3 leading-8 text-[#FFFFFF]">{selectedQuestion.answer}</p>
          </div>
          <InstagramButton className="mt-5 w-full" />
        </div>
      </div>
    </section>
  );
}

export function BookingForm() {
  const [form, setForm] = useState({
    guardian: "",
    player: "",
    age: "",
    program: programs[0].title,
    phone: "",
    area: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const enquiryMessage = useMemo(() => {
    return [
      "Hi Coach Sebastian, I would like to enquire about SBA Shark Basketball Academy.",
      "",
      `Parent / Guardian Name: ${form.guardian || "-"}`,
      `Player Name: ${form.player || "-"}`,
      `Player Age: ${form.age || "-"}`,
      `Program Interest: ${form.program || "-"}`,
      `Phone / Contact Number: ${form.phone || "-"}`,
      `Preferred Area / Residential Court / Nearby Location: ${form.area || "-"}`,
      `Message: ${form.message || "-"}`,
    ].join("\n");
  }, [form]);

  const updateForm = (field, value) => {
    setCopied(false);
    setForm((current) => ({ ...current, [field]: value }));
  };

  const copyAndOpenDm = async () => {
    try {
      await navigator.clipboard.writeText(enquiryMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-[#05070D] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          label="Booking enquiry"
          title="Generate a DM message for Coach Sebastian"
          body="Fill in the details, copy the generated message, and send it to SBA Shark Basketball Academy on Instagram."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <form className="grid gap-4 rounded-lg border border-white/10 bg-[#0D1F3D] p-5">
            <Field label="Parent / Guardian Name" value={form.guardian} onChange={(value) => updateForm("guardian", value)} />
            <Field label="Player Name" value={form.player} onChange={(value) => updateForm("player", value)} />
            <Field label="Player Age" type="number" value={form.age} onChange={(value) => updateForm("age", value)} />
            <SelectField label="Program Interest" value={form.program} onChange={(value) => updateForm("program", value)} options={programs.map((program) => program.title)} />
            <Field label="Phone / Contact Number" value={form.phone} onChange={(value) => updateForm("phone", value)} />
            <Field label="Preferred Area / Residential Court / Nearby Location Optional" value={form.area} onChange={(value) => updateForm("area", value)} />
            <TextAreaField label="Message" value={form.message} onChange={(value) => updateForm("message", value)} placeholder="Tell Coach Sebastian about the player's level, schedule, or training goal." />
          </form>

          <GeneratedMessage
            title="Generated enquiry"
            message={enquiryMessage}
            buttonLabel={copied ? "Copied" : "Copy & Open DM"}
            copied={copied}
            onClick={copyAndOpenDm}
          />
        </div>
      </div>
    </section>
  );
}

function FeedbackForm() {
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    age: "",
    program: programs[0].title,
    rating: "5",
    improved: "",
    message: "",
  });
  const [feedbackCopied, setFeedbackCopied] = useState(false);

  const feedbackMessage = useMemo(() => {
    return [
      "Hi Coach Sebastian, I would like to share feedback for SBA Shark Basketball Academy.",
      "",
      `Parent / Player Name: ${feedbackForm.name || "-"}`,
      `Player Age: ${feedbackForm.age || "-"}`,
      `Program Attended: ${feedbackForm.program || "-"}`,
      `Star Rating: ${feedbackForm.rating || "-"} / 5`,
      `What improved after training: ${feedbackForm.improved || "-"}`,
      `Feedback Message: ${feedbackForm.message || "-"}`,
    ].join("\n");
  }, [feedbackForm]);

  const updateFeedbackForm = (field, value) => {
    setFeedbackCopied(false);
    setFeedbackForm((current) => ({ ...current, [field]: value }));
  };

  const copyFeedbackAndOpenDm = async () => {
    try {
      await navigator.clipboard.writeText(feedbackMessage);
      setFeedbackCopied(true);
    } catch {
      setFeedbackCopied(false);
    }
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-[#155EEF]/25 bg-[#0D1F3D] p-5">
        <p className="text-sm font-black uppercase text-[#155EEF]">Share Your Feedback</p>
        <h3 className="mt-3 text-2xl font-black text-white">
          Send Coach Sebastian a clear review by DM
        </h3>
        <p className="mt-4 leading-8 text-[#C7D2E5]">
          Fill this in after training to generate a feedback message for {instagramHandle}.
        </p>
        <div className="mt-6 grid gap-4">
          <Field label="Parent / Player Name" value={feedbackForm.name} onChange={(value) => updateFeedbackForm("name", value)} />
          <Field label="Player Age" type="number" value={feedbackForm.age} onChange={(value) => updateFeedbackForm("age", value)} />
          <SelectField label="Program Attended" value={feedbackForm.program} onChange={(value) => updateFeedbackForm("program", value)} options={programs.map((program) => program.title)} />
          <SelectField label="Star Rating 1-5" value={feedbackForm.rating} onChange={(value) => updateFeedbackForm("rating", value)} options={["5", "4", "3", "2", "1"]} />
          <Field label="What improved after training?" value={feedbackForm.improved} onChange={(value) => updateFeedbackForm("improved", value)} />
          <TextAreaField label="Feedback Message" value={feedbackForm.message} onChange={(value) => updateFeedbackForm("message", value)} />
        </div>
      </div>

      <GeneratedMessage
        title="Generated feedback"
        message={feedbackMessage}
        buttonLabel="Copy Feedback & Open DM"
        copied={feedbackCopied}
        onClick={copyFeedbackAndOpenDm}
      />
    </div>
  );
}

function ReviewCard({ review, featured = false }) {
  const initials = review.name
    .replace("Player ", "")
    .replace(".", "")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      className={`rounded-lg border border-white/10 bg-[#0D1F3D] p-5 ${
        featured ? "min-w-[280px] snap-start sm:min-w-[340px] lg:min-w-[380px]" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-[#E10600]/35 bg-[linear-gradient(135deg,rgba(11,61,145,0.78),rgba(225,6,0,0.28))] text-lg font-black text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-xl font-black text-white">{review.name}</h3>
          <p className="mt-1 text-sm font-bold text-[#155EEF]">{review.ageGroup}</p>
          <p className="mt-1 text-sm text-[#9FB0CC]">{review.program}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${star <= review.rating ? "fill-[#F97316] text-[#E10600]" : "text-[#324762]"}`}
          />
        ))}
      </div>

      <div className="mt-4 rounded-md border border-white/10 bg-[#081426]/70 p-4">
        <p className="text-sm font-black uppercase text-[#E10600]">Result after coaching</p>
        <p className="mt-2 leading-7 text-[#FFFFFF]">{review.result}</p>
      </div>
      <p className="mt-4 leading-7 text-[#C7D2E5]">{review.feedback}</p>
    </article>
  );
}

function GeneratedMessage({ title, message, buttonLabel, copied, onClick }) {
  return (
    <div className="rounded-lg border border-[#E10600]/25 bg-[#E10600]/[0.08] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-black text-white">{title}</h3>
        <button
          type="button"
          onClick={onClick}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#155EEF] px-4 py-3 font-black text-white transition hover:bg-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#155EEF]/40"
        >
          {copied ? <CheckCircle2 className="h-5 w-5" /> : <Clipboard className="h-5 w-5" />}
          {buttonLabel}
        </button>
      </div>
      <pre className="mt-5 min-h-80 whitespace-pre-wrap rounded-md border border-white/10 bg-[#05070D]/70 p-4 text-sm leading-7 text-[#FFFFFF]">
        {message}
      </pre>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#C7D2E5]">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-md border border-white/10 bg-[#0D1F3D] px-4 py-3 text-white outline-none transition placeholder:text-[#7F91B0] focus:border-[#155EEF]"
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange, placeholder = "" }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#C7D2E5]">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={5}
        placeholder={placeholder}
        className="rounded-md border border-white/10 bg-[#0D1F3D] px-4 py-3 text-white outline-none transition placeholder:text-[#7F91B0] focus:border-[#155EEF]"
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#C7D2E5]">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-md border border-white/10 bg-[#0D1F3D] px-4 py-3 text-white outline-none transition focus:border-[#155EEF]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function FinalCta({ title = "Ready to train with SBA Shark?", body = "Send your player's age, preferred area, and goal to Coach Sebastian on Instagram." }) {
  return (
    <section className="bg-[#05070D] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-white/10 bg-[#0D1F3D] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-black uppercase text-white">{title}</h2>
          <p className="mt-3 max-w-2xl leading-8 text-[#C7D2E5]">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-black text-white transition hover:bg-[#0D1F3D]"
          >
            Book page
            <ArrowRight className="h-4 w-4" />
          </Link>
          <InstagramButton />
        </div>
      </div>
    </section>
  );
}

function InstagramButton({ className = "" }) {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#E10600] px-6 py-4 text-base font-black uppercase tracking-normal text-white shadow-xl shadow-[#E10600]/25 transition hover:bg-[#C40000] focus:outline-none focus:ring-2 focus:ring-[#E10600]/40 ${className}`}
    >
      <Camera className="h-5 w-5" />
      DM on Instagram
    </a>
  );
}

function SectionIntro({ label, title, body }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase text-[#E10600]">{label}</p>
      <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 leading-8 text-[#C7D2E5]">{body}</p>
    </div>
  );
}

function SportBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(21,94,239,0.22),transparent_31%),radial-gradient(circle_at_86%_16%,rgba(225,6,0,0.18),transparent_28%),linear-gradient(135deg,#05070D_0%,#081426_46%,#05070D_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070D] px-5 py-8 text-center text-sm text-[#9FB0CC] sm:px-8">
      <p className="font-bold text-[#C7D2E5]">SBA Shark Basketball Academy</p>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center gap-2 text-[#E10600] hover:text-[#FFFFFF]"
      >
        <Camera className="h-4 w-4" />
        {instagramHandle}
      </a>
    </footer>
  );
}

