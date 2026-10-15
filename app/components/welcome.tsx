export default function WelcomeSection() {
  return (
    <section className="flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-semibold text-slate-200">
          Good Morning,{" "}
          <span className="text-purple-500">
            Basil!
          </span>{" "}
          👋
        </h1>

        <p className="mt-2 text-slate-400">
          Here is an overview of your job applications and progress.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#101a35] px-5 py-3">
        <p className="text-sm text-slate-300">
          Sat, 4 Oct 2026
        </p>
      </div>

    </section>
  );
}