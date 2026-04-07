export default function Pricing() {
  const plans = [
    {
      title: "Fresh Pair",
      description: "Perfect for already-clean kicks that need a quick reset.",
      price: "25",
      features: [
        "Light sneaker clean",
        "Odour refresh",
        "Ideal for quick touch-ups"
      ],
      buttonText: "Book Fresh Pair",
      popular: false
    },
    {
      title: "Deep Restore",
      description: "Our most popular option for daily beaters and grails.",
      price: "35",
      features: [
        "Full deep clean (uppers, midsoles, outsoles)",
        "Lace wash & relace",
        "Stain treatment on request"
      ],
      buttonText: "Book Deep Restore",
      popular: true
    },
    {
      title: "Laundry Load",
      description: "Everyday garments cleaned, folded and ready to wear.",
      price: "30",
      features: [
        "Wash, dry & fold",
        "Colour and fabric separation",
        "Gentle detergents included"
      ],
      buttonText: "Book Laundry",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4">
            Transparent pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
            Simple packages, no surprise fees.
          </h2>
          <p className="text-lg text-gray-600">
            Pay per pair or per load. Add-ons for heavy stains or speciality materials are quoted upfront.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-xl relative flex flex-col border border-gray-100 ${
                plan.popular ? 'ring-2 ring-primary shadow-primary/10 lg:scale-105 z-10' : 'shadow-gray-200/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider rounded-bl-xl rounded-tr-3xl">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">{plan.title}</h3>
                <p className="text-gray-500 text-sm min-h-[40px]">{plan.description}</p>
              </div>
              
              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-gray-900 tracking-tight">${plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2 text-center">
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#booking" 
                className={`block w-full py-4 px-6 rounded-xl font-bold text-center transition-all ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30' 
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
