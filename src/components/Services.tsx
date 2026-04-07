import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Signature Sneaker Clean",
      description: "A full detail for everyday pairs and grails alike — uppers, midsoles, outsoles and laces, all gently deep-cleaned by hand.",
      features: [
        "Deep hand-clean + deodorising",
        "Colour-safe, sneaker-specific products",
        "Ideal for leather, mesh & knit sneakers"
      ],
      price: "From $35 / pair",
      popular: false
    },
    {
      title: "Refresh & Protect",
      description: "Light cleans for already-fresh pairs plus long-lasting protection to keep dirt, liquids and stains from sticking.",
      features: [
        "Surface clean + odour neutraliser",
        "Hydrophobic protectant coating",
        "Perfect before travel or events"
      ],
      price: "From $25 / pair",
      popular: true
    },
    {
      title: "Laundry & Garment Care",
      description: "Premium wash, dry and fold for your everyday essentials — separated by colour, fabric and care label.",
      features: [
        "Gentle, skin-friendly detergents",
        "Folded, packed and ready to wear",
        "Optional stain treatment add-ons"
      ],
      price: "From $30 / load",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
            Premium care for every pair (and every load).
          </h2>
          <p className="text-lg text-gray-600">
            Choose the exact service your sneakers or laundry need — no harsh chemicals, no shortcuts, just meticulous cleaning from professionals who care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-xl relative flex flex-col ${
                service.popular ? 'ring-2 ring-primary shadow-primary/10 scale-105 md:-translate-y-4 z-10' : 'shadow-gray-200/50'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg rounded-tr-3xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <p className="text-primary font-semibold text-lg">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
