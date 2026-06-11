import Link from "next/link";
import { ArrowRight, Camera, PlayCircle } from "lucide-react";
import { coachingSections, instagramUrl } from "../site-data";
import { FinalCta, PageHero } from "../components/site-components";

export default function CoachingPage() {
  return (
    <>
      <PageHero
        label="A Peek of Coaching"
        title="Kids having fun, training, and building confidence"
        body="Watch SBA Shark training moments, mini games, teamwork clips, and coaching progress organized by program."
      >
        <Link
          href="/programs"
          className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/15 bg-[#0D1F3D] px-6 py-4 text-base font-bold text-white transition hover:border-[#155EEF]/60 hover:bg-[#0B3D91]/60"
        >
          Back to Programs
        </Link>
      </PageHero>

      <section className="border-y border-white/10 bg-[#081426] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coachingSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-lg border border-white/10 bg-[#0D1F3D] p-4 transition hover:border-[#155EEF]/55 hover:bg-[#0B3D91]/55"
              >
                <p className="text-sm font-black uppercase text-[#E10600]">
                  {section.videos.length} video{section.videos.length === 1 ? "" : "s"}
                </p>
                <h2 className="mt-2 text-lg font-black text-white">{section.title}</h2>
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-8">
            {coachingSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-lg border border-white/10 bg-[#0D1F3D] p-5 sm:p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase text-[#155EEF]">
                      Coaching section
                    </p>
                    <h2 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-3xl leading-8 text-[#C7D2E5]">
                      {section.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                    <Link
                      href="/book"
                      className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#E10600] px-5 py-3 font-black uppercase text-white transition hover:bg-[#C40000]"
                    >
                      Enquire training
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-[#155EEF]/45 bg-[#05070D] px-5 py-3 font-black uppercase text-white transition hover:border-[#E10600]/60 hover:bg-[#081426]"
                    >
                      <Camera className="h-4 w-4" />
                      Explore more in SBA Instagram
                    </a>
                  </div>
                </div>

                {section.videos.length > 0 ? (
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {section.videos.map((video) => (
                      <article
                        key={video.src}
                        className="overflow-hidden rounded-lg border border-[#155EEF]/25 bg-[#05070D]"
                      >
                        <video
                          src={video.src}
                          poster={video.poster}
                          controls
                          playsInline
                          preload="metadata"
                          className="aspect-video w-full bg-[#05070D] object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                        <div className="border-t border-white/10 bg-[#081426] p-4">
                          <p className="flex items-center gap-2 text-sm font-black uppercase text-[#E10600]">
                            <PlayCircle className="h-4 w-4" />
                            {video.title}
                          </p>
                          <p className="mt-2 leading-7 text-[#C7D2E5]">
                            {video.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 rounded-lg border border-dashed border-white/15 bg-[#05070D]/65 p-6">
                    <p className="text-xl font-black uppercase text-white">
                      Videos coming soon
                    </p>
                    <p className="mt-3 max-w-2xl leading-8 text-[#C7D2E5]">
                      SBA can add real training videos here later. This section is
                      ready, but no videos are shown until files are added.
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Want your child to join SBA training?"
        body="Send Coach Sebastian the player's age, current level, and preferred training area by Instagram DM."
      />
    </>
  );
}
