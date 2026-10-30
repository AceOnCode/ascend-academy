
"use client";

import { useState } from "react";

const courses = [
  { name: "JEE Advanced", detail: "Physics · Chemistry · Mathematics", tag: "ENGINEERING" },
  { name: "NEET UG", detail: "Physics · Chemistry · Biology", tag: "MEDICAL" },
  { name: "Foundation", detail: "Classes 8–10 · Concept building", tag: "FOUNDATION" },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "JEE Advanced",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const whatsappNumber = "919265788554";

    const message = `New Student Enquiry

Name: ${form.name}
Phone: ${form.phone}
Course: ${form.course}
Message: ${form.message || "No additional message"}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#18251f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <a href="#" className="text-2xl font-black tracking-tight">
          ascend<span className="text-emerald-700">.</span>
        </a>
        <div className="hidden gap-9 text-sm font-medium md:flex">
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#results">Our approach</a>
        </div>
        <a href="#contact" className="rounded-full bg-[#18251f] px-6 py-3 text-sm font-semibold text-white">
          Enquire now ↗
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-28">
        <div>
          <span className="inline-block rounded-full border border-emerald-800/20 px-4 py-2 text-xs font-bold tracking-widest text-emerald-800">
            LEARN WITH PURPOSE · AIM HIGHER
          </span>
          <h1 className="mt-8 text-6xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Your future deserves <span className="text-emerald-700">better.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
            Build strong concepts, develop confidence and prepare for your next big academic milestone with expert guidance.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-emerald-800 px-8 py-4 font-semibold text-white">
              Start your journey ↗
            </a>
            <a href="#courses" className="rounded-full border border-gray-300 px-8 py-4 font-semibold">
              Explore courses
            </a>
          </div>
          <div className="mt-14 flex gap-10 border-t border-gray-200 pt-7">
            <div><p className="text-2xl font-bold">1:1</p><p className="mt-1 text-sm text-gray-500">Personal attention</p></div>
            <div><p className="text-2xl font-bold">360°</p><p className="mt-1 text-sm text-gray-500">Learning support</p></div>
            <div><p className="text-2xl font-bold">Goal</p><p className="mt-1 text-sm text-gray-500">Focused learning</p></div>
          </div>
        </div>

        <div className="relative flex h-[530px] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-950 via-emerald-800 to-[#b6c9a8]">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/20" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full border border-white/20" />
          <div className="relative mx-8 rounded-3xl border border-white/20 bg-white/10 p-10 text-center text-white backdrop-blur-md">
            <p className="text-sm font-semibold tracking-[0.3em]">ASCEND ACADEMY</p>
            <h2 className="mt-8 text-5xl font-bold">Dream.</h2>
            <h2 className="text-5xl font-bold">Learn.</h2>
            <h2 className="text-5xl font-bold text-emerald-200">Achieve.</h2>
            <p className="mt-6 text-sm text-white/80">Your journey to excellence starts here.</p>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-[#18251f] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-widest text-emerald-300">OUR PROGRAMS</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">The right preparation changes everything.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {courses.map((course) => (
              <article key={course.name} className="rounded-2xl border border-white/15 bg-white/5 p-8">
                <p className="text-xs font-bold tracking-widest text-emerald-300">{course.tag}</p>
                <h3 className="mt-8 text-3xl font-semibold">{course.name}</h3>
                <p className="mt-4 text-sm text-gray-300">{course.detail}</p>
                <a href="#contact" className="mt-9 inline-block font-semibold text-emerald-300">Explore program ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-bold tracking-widest text-emerald-700">WHY ASCEND</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          More than classes. A learning experience built around you.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            ["01", "Concept clarity", "Build strong foundations instead of memorising without understanding."],
            ["02", "Structured practice", "Follow a clear learning path with focused practice and revision."],
            ["03", "Personal guidance", "Get support to identify gaps and improve consistently."],
          ].map(([number, title, detail]) => (
            <div key={number} className="border-t border-gray-300 pt-6">
              <p className="text-sm text-emerald-700">{number}</p>
              <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="bg-[#e9eee8] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-emerald-800">YOUR NEXT CHAPTER</p>
          <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Small steps. Strong foundations. Bigger ambitions.</h2>
          <p className="mt-6 leading-8 text-gray-600">Start with a conversation about your academic goals and discover a learning plan that makes sense for you.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-[#18251f] px-6 py-16 text-white md:px-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="text-sm font-bold tracking-widest text-emerald-300">GET IN TOUCH</p>
              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Let's start your journey.</h2>
              <p className="mt-5 text-gray-300">Tell us a little about yourself. Our team will be happy to help.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label className="mb-2 block text-sm">Your full name</label>
                <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Enter your name" className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-emerald-300" />
              </div>

              <div>
                <label className="mb-2 block text-sm">Phone number</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="Enter your phone number" className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-emerald-300" />
              </div>

              <div>
                <label className="mb-2 block text-sm">Select your course</label>
                <select value={form.course} onChange={(e) => setForm({...form, course: e.target.value})} className="w-full rounded-xl border border-white/20 bg-[#263b32] px-5 py-4 text-white outline-none">
                  {courses.map((course) => <option key={course.name}>{course.name}</option>)}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm">Your message</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Tell us what you need help with..." className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-emerald-300" />
              </div>

              <button type="submit" className="w-full rounded-full bg-emerald-400 px-8 py-4 font-bold text-[#18251f] transition hover:bg-emerald-300">
                Submit enquiry via WhatsApp ↗
              </button>
              <p className="text-center text-xs text-gray-400">Enquiries open directly in WhatsApp.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Ascend Academy · Website by AceOnCode Studios
      </footer>
    </main>
  );
}
