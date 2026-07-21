import Image from "next/image";
import { Brain, Users, User, MapPin, ArrowRight } from "lucide-react";
import { hero, heroMobile, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

const checklistIcons = [Users, User, MapPin];
const mobileOrder = [1, 2, 0]; // Abordagem, Atendimento, Homens/casais — igual à referência

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="bg-[#063A5E] lg:hidden">
        <Image
          src={heroMobile.image.src}
          alt={heroMobile.image.alt}
          width={941}
          height={1672}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
        <Reveal
          direction="up"
          className="relative -mt-[129%] flex flex-col gap-6 px-6 pb-29"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-4 py-2 font-lato text-[11px] font-semibold uppercase tracking-[1.3px] text-white">
            {heroMobile.eyebrow} &middot; {hero.eyebrow.replace("Psicólogo — ", "")}
          </div>

          <div>
            <p className="font-mosseta text-2xl text-white">{hero.greeting}</p>
            <h1 className="font-mosseta text-5xl leading-[1.05] text-[#E8C078]">
              {heroMobile.title}
            </h1>
            <span className="mt-3 block h-[3px] w-14 bg-[#E8C078]" />
          </div>

          <p className="max-w-xs font-heebo text-base font-normal leading-relaxed text-white">
            {heroMobile.subtitle}
          </p>

          <div className="flex items-start justify-between">
            {mobileOrder.map((i, pos) => {
              const item = hero.checklist[i];
              const Icon = checklistIcons[i];
              return (
                <div
                  key={item}
                  className={`flex flex-1 flex-col items-center gap-2 text-center ${
                    pos > 0 ? "border-l border-white/20 pl-2" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C078]/60 text-[#E8C078]">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="font-heebo text-[13px] font-medium leading-tight text-white">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <Button
              href={whatsappLink()}
              icon={<ArrowRight size={18} />}
              className="!w-full !justify-between"
            >
              {heroMobile.ctaLabel}
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="relative hidden bg-white lg:block">
        <div className="absolute inset-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_30%]"
          />
        </div>
        <div className="relative mx-auto flex max-w-[1140px] flex-col gap-6 px-6 pb-[380px] pt-28">
          <Reveal direction="up">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2 font-playfair text-[13px] font-semibold uppercase tracking-[1.5px] text-white">
              <Brain size={16} />
              {hero.eyebrow}
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <div>
              <p className="font-playfair text-[32px] italic text-white">
                {hero.greeting}
              </p>
              <h1 className="font-mosseta text-[64px] leading-[1.05] text-[#E8C078]">
                {hero.name}
              </h1>
              <span className="mt-4 block h-[3px] w-16 bg-[#E8C078]" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="max-w-lg font-playfair text-lg font-medium leading-relaxed text-white">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="mt-2 flex flex-wrap items-start gap-8">
              {hero.checklist.map((item, index) => {
                const Icon = checklistIcons[index] ?? Users;
                return (
                  <div
                    key={item}
                    className={`flex max-w-[150px] flex-col items-center gap-2 text-center ${
                      index > 0 ? "border-l border-white/20 pl-8" : ""
                    }`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8C078]/60 text-[#E8C078]">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <span className="font-playfair text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal
            direction="up"
            delay={400}
            className="mt-4 flex flex-wrap gap-4"
          >
            <Button href={whatsappLink()} icon={<ArrowRight size={18} />}>
              {hero.ctaLabel}
            </Button>
            <Button
              href={hero.ctaSecondaryHref}
              variant="outline"
              icon={<ArrowRight size={18} />}
            >
              {hero.ctaSecondaryLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}