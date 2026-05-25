"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clipboard,
  Camera,
  Dumbbell,
  MapPin,
  MessageCircle,
  School,
  Send,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/sba_sharkbasketballacademy/";
const instagramHandle = "@sba_sharkbasketballacademy";

const programs = [
  {
    title: "Kids Basketball Training",
    description:
      "Fun fundamentals, coordination, confidence, teamwork, and safe skill habits for young players.",
    icon: Sparkles,
  },
  {
    title: "Teen Player Development",
    description:
      "Sharper handles, footwork, finishing, shooting rhythm, defense, and game decision-making.",
    icon: Target,
  },
  {
    title: "School Team Training",
    description:
      "Structured group sessions for school squads that need discipline, systems, and match readiness.",
    icon: School,
  },
  {
    title: "Private & Small Group Sessions",
    description:
      "Focused coaching for players who want extra reps, personal feedback, and faster improvement.",
    icon: Users,
  },
];

const locations = [
  "Sunshine Mall, Air Itam, Penang",
  "Queensbay, Penang - World Hoops",
  "Eco Horizon Clubhouse, Batu Kawan",
  "Optional nearby home area, residential court, or preferred parent location",
];

const helperQuestions = [
  {
    question: "Which program is best for my child?",
    answer:
      "Kids training is best for beginners and younger players. Teen development suits players who already play and want stronger skills. For school teams or private sessions, DM SBA Shark with the player's age, level, and preferred area.",
  },
  {
    question: "Where are training sessions held?",
    answer:
      "Common areas include Sunshine Mall in Air Itam, World Hoops near Queensbay, Eco Horizon Clubhouse in Batu Kawan, and suitable nearby residential courts or parent-preferred locations.",
  },
  {
    question: "Can schools request team training?",
    answer:
      "Yes. Schools can enquire about team training, skill clinics, and development sessions. Send the school name, age group, number of players, and preferred schedule by Instagram DM.",
  },
  {
    question: "How do I book or ask for fees?",
    answer:
      "Use the enquiry form below to generate a clear message, then copy it and send it by Instagram DM to @sba_sharkbasketballacademy for current schedule, fee, and slot details.",
  },
];

const initialForm = {
  guardian: "",
  player: "",
  age: "",
  program: programs[0].title,
  phone: "",
  area: "",
  message: "",
};

export default function Home() {
  const [selectedQuestion, setSelectedQuestion] = useState(helperQuestions[0]);
  const [form, setForm] = useState(initialForm);
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

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(enquiryMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <section className="relative isolate flex min-h-screen items-center px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.16),transparent_28%),linear-gradient(135deg,#07090d_0%,#111827_46%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="pt-12 sm:pt-16 lg:pt-0"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-orange-100 shadow-2xl shadow-orange-500/10">
              <Shield className="h-4 w-4 text-orange-400" />
              Penang basketball training with Coach Sebastian
            </div>

            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
              SBA Shark Basketball Academy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Confident skills, sharper fundamentals, and game-ready habits for kids,
              teenagers, parents, and school teams across Penang.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-orange-500 px-6 py-4 text-base font-black uppercase tracking-normal text-black shadow-xl shadow-orange-500/25 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
              >
                <Camera className="h-5 w-5" />
                DM on Instagram
              </a>
              <a
                href="#booking"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/15 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:border-lime-300/60 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-lime-200"
              >
                Create enquiry message
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-zinc-300">
              {["Kids", "Teenagers", "Parents", "Schools"].map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-lime-100"
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
            className="relative min-h-[420px] rounded-lg border border-white/10 bg-black/35 p-5 shadow-2xl shadow-black/40 backdrop-blur"
          >
            <div className="absolute inset-5 rounded-full border-[16px] border-orange-500/25" />
            <div className="absolute inset-x-12 top-1/2 h-1 bg-white/15" />
            <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-1 bg-white/15" />
            <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase text-lime-300">Coach</p>
                  <p className="text-3xl font-black">Sebastian</p>
                </div>
                <Trophy className="h-12 w-12 text-orange-400" />
              </div>

              <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border-4 border-black bg-orange-500 text-black shadow-2xl shadow-orange-500/35">
                <Dumbbell className="h-20 w-20" />
              </div>

              <div className="rounded-md border border-white/10 bg-[#080b10]/85 p-5">
                <p className="text-sm font-semibold uppercase text-zinc-400">Instagram</p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 break-all text-lg font-black text-white hover:text-orange-300"
                >
                  <Camera className="h-5 w-5 shrink-0" />
                  {instagramHandle}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c1118] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-orange-400">Programs</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              Training built for real players and busy families
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-5 transition hover:border-orange-300/50 hover:bg-white/[0.09]"
                >
                  <Icon className="h-9 w-9 text-orange-400" />
                  <h3 className="mt-5 text-xl font-black text-white">{program.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{program.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07090d] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-lime-300">Locations</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              Flexible courts around Penang
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-zinc-300">
              Choose a regular training area or enquire about a nearby residential court
              that works better for your family or school group.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.05] p-5"
              >
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-lime-300" />
                <p className="font-semibold leading-7 text-zinc-100">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#10151d] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase text-orange-400">
              <Bot className="h-5 w-5" />
              SBA Helper Bot
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              Quick answers, no real AI
            </h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Tap a common question to see a prepared answer. For current fees,
              availability, and scheduling, DM {instagramHandle}.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/30 p-4 sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {helperQuestions.map((item) => (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setSelectedQuestion(item)}
                  className={`rounded-md border px-4 py-3 text-left text-sm font-bold transition ${
                    selectedQuestion.question === item.question
                      ? "border-orange-300 bg-orange-500 text-black"
                      : "border-white/10 bg-white/[0.06] text-white hover:border-lime-300/50"
                  }`}
                >
                  {item.question}
                </button>
              ))}
            </div>
            <div className="mt-5 rounded-md border border-lime-300/20 bg-lime-300/10 p-5">
              <p className="flex items-center gap-2 font-black text-lime-200">
                <MessageCircle className="h-5 w-5" />
                Prepared answer
              </p>
              <p className="mt-3 leading-8 text-zinc-100">{selectedQuestion.answer}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-[#07090d] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-orange-400">Booking enquiry</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              Generate a DM message for Coach Sebastian
            </h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Fill in the details, copy the generated message, and send it to SBA Shark
              Basketball Academy on Instagram.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <form className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.05] p-5">
              <Field
                label="Parent / Guardian Name"
                value={form.guardian}
                onChange={(value) => updateForm("guardian", value)}
              />
              <Field
                label="Player Name"
                value={form.player}
                onChange={(value) => updateForm("player", value)}
              />
              <Field
                label="Player Age"
                type="number"
                value={form.age}
                onChange={(value) => updateForm("age", value)}
              />
              <label className="grid gap-2 text-sm font-bold text-zinc-200">
                Program Interest
                <select
                  value={form.program}
                  onChange={(event) => updateForm("program", event.target.value)}
                  className="min-h-12 rounded-md border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-orange-300"
                >
                  {programs.map((program) => (
                    <option key={program.title}>{program.title}</option>
                  ))}
                </select>
              </label>
              <Field
                label="Phone / Contact Number"
                value={form.phone}
                onChange={(value) => updateForm("phone", value)}
              />
              <Field
                label="Preferred Area / Residential Court / Nearby Location Optional"
                value={form.area}
                onChange={(value) => updateForm("area", value)}
              />
              <label className="grid gap-2 text-sm font-bold text-zinc-200">
                Message
                <textarea
                  value={form.message}
                  onChange={(event) => updateForm("message", event.target.value)}
                  rows={5}
                  className="rounded-md border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-300"
                  placeholder="Tell Coach Sebastian about the player's level, schedule, or training goal."
                />
              </label>
            </form>

            <div className="rounded-lg border border-orange-300/20 bg-orange-500/[0.08] p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-black text-white">Generated enquiry</h3>
                <button
                  type="button"
                  onClick={copyMessage}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime-300 px-4 py-3 font-black text-black transition hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-100"
                >
                  {copied ? <CheckCircle2 className="h-5 w-5" /> : <Clipboard className="h-5 w-5" />}
                  {copied ? "Copied" : "Copy message"}
                </button>
              </div>
              <pre className="mt-5 min-h-80 whitespace-pre-wrap rounded-md border border-white/10 bg-black/45 p-4 text-sm leading-7 text-zinc-100">
                {enquiryMessage}
              </pre>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full min-h-14 items-center justify-center gap-3 rounded-md bg-orange-500 px-6 py-4 text-base font-black uppercase text-black transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
              >
                <Send className="h-5 w-5" />
                Open Instagram DM
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-8 text-center text-sm text-zinc-400 sm:px-8">
        <p className="font-bold text-zinc-200">SBA Shark Basketball Academy</p>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 text-orange-300 hover:text-orange-200"
        >
          <Camera className="h-4 w-4" />
          {instagramHandle}
        </a>
      </footer>
    </main>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-zinc-200">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-md border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-300"
      />
    </label>
  );
}
