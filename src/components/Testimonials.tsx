export default function Testimonials() {
  const testimonials = [
    {
      quote: "I was ready to retire my white Air Force 1s, but they came back looking like they just left the box. The midsoles are bright again and they even fixed a scuff I thought was permanent.",
      author: "Jordan K.",
      role: "Collector & reseller"
    },
    {
      quote: "As someone who wears sneakers to the office, Drip Clean is my cheat code. I drop off three pairs at a time and they always come back spotless and smelling fresh.",
      author: "Ayesha R.",
      role: "Consultant"
    },
    {
      quote: "I send my weekly laundry and a couple of pairs at the same time. It’s honestly freed up so much time and everything comes back folded or laced perfectly.",
      author: "Marco L.",
      role: "Startup founder"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4">
            Customer love
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
            Sneakerheads and busy people swear by Drip Clean.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 flex flex-col">
              <div className="text-primary mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.596C16.942 13.203 17.156 11.961 17.054 10.87C16.952 9.78 16.533 8.91 15.798 8.26C15.063 7.61 14.084 7.285 12.86 7.285V3C14.935 3 16.643 3.565 17.984 4.695C19.325 5.825 20.197 7.37 20.6 9.33C21.003 11.29 20.892 13.485 20.268 15.915L17.56 21H14.017ZM5.017 21L7.411 14.596C7.942 13.203 8.156 11.961 8.054 10.87C7.952 9.78 7.533 8.91 6.798 8.26C6.063 7.61 5.084 7.285 3.86 7.285V3C5.935 3 7.643 3.565 8.984 4.695C10.325 5.825 11.197 7.37 11.6 9.33C12.003 11.29 11.892 13.485 11.268 15.915L8.56 21H5.017Z" />
                </svg>
              </div>
              <p className="text-gray-900 text-lg mb-8 flex-grow leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{t.author}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
