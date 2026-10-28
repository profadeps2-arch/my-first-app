"use client";

import { useState } from "react";

const services = [
  { name: "Haircut", price: 15, duration: "45 min" },
  { name: "Braids", price: 60, duration: "3 hrs" },
  { name: "Wash & Style", price: 25, duration: "1 hr" },
  { name: "Nails", price: 30, duration: "1 hr" },
];

const times = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

export default function BookPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const chosen = services.find((service) => service.name === selectedService);

  if (confirmed) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-4xl font-bold">You're booked! 🎉</h1>
        <p className="text-lg text-gray-400">
          {selectedService} at {selectedTime} · ${chosen?.price}
        </p>
        <button
          onClick={() => {
            setConfirmed(false);
            setSelectedService(null);
            setSelectedTime(null);
          }}
          className="border border-gray-700 px-6 py-3 rounded-xl"
        >
          Book another
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold mt-16">Book an appointment</h1>

      <section className="w-full max-w-2xl flex flex-col gap-3">
        <h2 className="text-xl font-semibold">1. Choose a service</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setSelectedService(service.name)}
              className={`rounded-2xl border p-4 text-left ${
                selectedService === service.name
                  ? "border-green-500 bg-green-950"
                  : "border-gray-700"
              }`}
            >
              <p className="font-bold">{service.name}</p>
              <p className="text-sm text-gray-400">
                ${service.price} · {service.duration}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section className="w-full max-w-2xl flex flex-col gap-3">
        <h2 className="text-xl font-semibold">2. Pick a time</h2>
        <div className="flex flex-wrap gap-3">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`rounded-full border px-4 py-2 ${
                selectedTime === time
                  ? "border-green-500 bg-green-950"
                  : "border-gray-700"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </section>

      <button
        disabled={!selectedService || !selectedTime}
        onClick={() => setConfirmed(true)}
        className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-40"
      >
        Confirm booking
      </button>
    </main>
  );
}