export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Schedule your drop-off or pickup",
      description: "Tell us what you’re sending in, choose a time that works, and we’ll confirm your booking instantly."
    },
    {
      number: "2",
      title: "We deep-clean & detail with care",
      description: "Our technicians inspect every pair or load, treat stains, and clean using premium, material-safe products."
    },
    {
      number: "3",
      title: "Pick up fresh or get it delivered",
      description: "Your items are dried, re-laced or folded, then packed and ready. Come by the studio or choose delivery back to you."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
            From doorstep to drip in 3 simple steps.
          </h2>
          <p className="text-lg text-gray-600">
            Book in minutes, then let our specialists handle the rest with photo updates and clear turnaround times.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative bg-gray-50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold font-heading text-primary mb-6 ring-4 ring-gray-50">
                {step.number}
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
