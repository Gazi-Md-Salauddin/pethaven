"use client"
import { Card } from '@heroui/react';

const WhyAdopt = () => {
  const features = [
    {
      icon: "💝",
      title: "Save a Life",
      desc: "Give animals a second chance at life.",
    },
    {
      icon: "💰",
      title: "Cost Effective",
      desc: "Adopted pets are vaccinated and cared for.",
    },
    {
      icon: "🤝",
      title: "Fight Puppy Mills",
      desc: "Support ethical pet adoption.",
    },
  ];

  return (
    <section className="px-[5%] py-24">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.2em] text-[#F59E0B] text-sm mb-3">
          Why Adopt
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Reasons to Adopt, Not Shop
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <Card
            key={index}
            className="glass rounded-[24px] p-10 hover:-translate-y-2 transition"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center text-3xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

            <p className="text-muted leading-7">{item.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
export default WhyAdopt