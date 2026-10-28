function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-gray-700 p-6 flex flex-col gap-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-10 p-8">
      <section className="flex flex-col items-center gap-4 mt-20 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Peter</h1>
        <p className="text-lg text-gray-400">I build AI-powered web apps for founders and small businesses.</p>
        <a
          href="mailto:Profadeps2@gmail.com"
          className="bg-green-600 text-white px-6 py-3 rounded-3xl font-semibold"
        >
          Work with me
        </a>
      </section>

      <section className="grid gap-6 md:grid-cols-4 max-w-5xl w-full">
        <ServiceCard
          title="MVP Development"
          description="Turn your idea into a working app real users can sign up to and use."
        />
        <ServiceCard
          title="AI Features"
          description="Add chat assistants, smart analysis and recommendations to your product."
        />
        <ServiceCard
          title="Booking Systems"
          description="Let customers book and pay online, with reminders sent automatically."
        />
        <ServiceCard
          title="Landing Pages"
          description="Turn your idea into a working app real users can sign up to and use."
        />
      </section>
    </main>
  );
}
