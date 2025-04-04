import { Bot } from "lucide-react";
import bookImage from "@/assets/images/JewelARy.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

// #region placeholder
function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
        className,
      )}
    >
      <div
        className={cn(
          "text-4xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
          backgroundTextClassName,
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          "text-md absolute font-black uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
          textClassName,
        )}
      >
        {text}
      </div>
    </div>
  );
}

function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(" h-full w-full overflow-hidden rounded-2xl p-4", className)}>
      {children}
    </div>
  );
}

function FeatureOne() {
  return (
    <BentoCard className="flex flex-col bg-yellow-300">
      <div className="font-bold text-yellow-700">My Research Paper</div>
      <div className="flex justify-end">
        <Image src={bookImage} alt="bookImage"  />
      </div>
    </BentoCard>
  );
}

function FeatureTwo() {
  return (
    <BentoCard className="flex flex-col overflow-visible bg-violet-500 sm:col-span-2">
      <strong className="text-2xl font-semibold text-white">
        
      </strong>
      <div className="ml-4 mt-auto">
        
      </div>
    </BentoCard>
  );
}

function FeatureThree() {
  return (
    <BentoCard className="flex flex-col bg-orange-300">
      <Bot className="size-8 md:size-12" />
      <strong className="mt-1 inline-block text-sm">Integrated AI</strong>

      <div className="mt-auto">
        <div className="text-sm font-medium">What is 4 times 4?</div>
        <div className="font-semibold">
          
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureFour() {
  return (
    <BentoCard className="flex items-center gap-4 bg-lime-300 sm:col-span-2 md:flex-row-reverse">
      <div className="text-2xl font-black text-lime-800">Generate progress report</div>
      <div className="relative max-h-32 flex-shrink-0 overflow-hidden">
        
      </div>
    </BentoCard>
  );
}

function FeatureFive() {
  return (
    <BentoCard className="flex flex-col items-center justify-center bg-zinc-300 sm:col-span-2">
      <BoldCopy text="EDU" className="bg-transparent" textClassName="text-zinc-800" />
    </BentoCard>
  );
}

function FeatureSix() {
  return (
    <BentoCard className="bg-green-200">
      <div className="mt-2 text-center font-bold">Weekly review</div>
    </BentoCard>
  );
}

function FeatureSeven() {
  return (
    <BentoCard className="flex flex-col gap-2 bg-rose-300">
      <div className="w-full -rotate-1 rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white md:-rotate-3">
        Javascript
      </div>
      <div className="w-full rotate-1 rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white md:rotate-3">
        ReactJS
      </div>
      <div className="w-full rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white">
        NextJS
      </div>
    </BentoCard>
  );
}

function FeatureEight() {
  return (
    <BentoCard className="flex flex-col bg-blue-200 sm:col-span-2">
      <div className="mt-4">
        <div className="text-lg font-black text-blue-800">Daily reminders</div>
        <p className="text-sm">Our daily reminder helps you keep focused on your goals.</p>
      </div>
    </BentoCard>
  );
}

// #endregion

export default function Eight() {
  return (
    <div className="storybook-fix w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 sm:grid-rows-3">
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        <FeatureFive />
        <FeatureSix />
        <FeatureSeven />
        <FeatureEight />
      </div>
    </div>
  );
}
