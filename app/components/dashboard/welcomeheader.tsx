import { CalendarDays } from "lucide-react";

export default function WelcomeHeader() {
  return (
    <section className="mb-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Good Morning,{" "}
            <span className="text-purple-400">
              Basil!
            </span>{" "}
            👋
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Here is an overview of your job applications and progress.
          </p>
        </div>

        {/* Date */}
        <button
          className="
            flex
            w-fit
            items-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-3
            text-sm
            text-slate-200
            transition
            hover:bg-white/[0.06]
          "
        >
          <CalendarDays className="h-5 w-5 text-purple-400" />

          <span>
            Sat, 4 Oct 2026
          </span>
        </button>

      </div>
    </section>
  );
}