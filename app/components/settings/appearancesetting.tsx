// "use client";

// import { useState } from "react";
// import { Sun, Moon, Palette } from "lucide-react";

// export default function AppearanceSettings() {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window === "undefined") return "dark";

//     return localStorage.getItem("hireflow-theme") || "dark";
//   });

//   const changeTheme = (newTheme: string) => {
//     setTheme(newTheme);

//     document.documentElement.classList.toggle("dark", newTheme === "dark");

//     localStorage.setItem("hireflow-theme", newTheme);
//   };

//   return (
//     <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200">
//       {/* Header */}
//       <div className="flex items-center gap-3">
//         <div className="rounded-lg bg-violet-500/10 p-3 text-violet-500">
//           <Palette size={20} />
//         </div>

//         <div>
//           <h2 className="font-semibold text-[var(--foreground)]">Appearance</h2>
//           <p className="text-sm text-[var(--muted)]">
//             Choose how HireFlow looks on your device.
//           </p>
//         </div>
//       </div>

//       {/* Theme Options */}
//       <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
//         {/* Light Mode */}
//         <button
//           type="button"
//           onClick={() => changeTheme("light")}
//           className={`flex items-center justify-between rounded-xl border p-4 transition ${
//             theme === "light"
//               ? "border-violet-500 bg-violet-500/5"
//               : "border-[var(--border)] hover:bg-[var(--surface-secondary)]"
//           }`}
//         >
//           <div className="flex items-center gap-3">
//             <Sun size={20} className="text-amber-500" />

//             <span className="text-sm font-medium text-[var(--foreground)]">
//               Light Mode
//             </span>
//           </div>

//           {theme === "light" && (
//             <span className="text-sm font-medium text-violet-500">
//               Selected
//             </span>
//           )}
//         </button>

//         {/* Dark Mode */}
//         <button
//           type="button"
//           onClick={() => changeTheme("dark")}
//           className={`flex items-center justify-between rounded-xl border p-4 transition ${
//             theme === "dark"
//               ? "border-violet-500 bg-violet-500/5"
//               : "border-[var(--border)] hover:bg-[var(--surface-secondary)]"
//           }`}
//         >
//           <div className="flex items-center gap-3">
//             <Moon size={20} className="text-indigo-500" />

//             <span className="text-sm font-medium text-[var(--foreground)]">
//               Dark Mode
//             </span>
//           </div>

//           {theme === "dark" && (
//             <span className="text-sm font-medium text-violet-500">
//               Selected
//             </span>
//           )}
//         </button>
//       </div>
//     </section>
//   );
// }