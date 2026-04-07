import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How long does a sneaker clean take?",
      a: "Most Signature Sneaker Cleans are completed within 24 hours. Deep Restore or heavy stain work can take 24–48 hours so we can dry your pairs safely without heat damage."
    },
    {
      q: "Do you clean suede, nubuck or high-end designer sneakers?",
      a: "Yes. We have material-specific products and tools for suede, nubuck and premium leathers. We’ll inspect your pair on arrival and let you know if we recommend any special treatment before we begin."
    },
    {
      q: "Will cleaning change the colour or shape of my sneakers?",
      a: "Our process is designed to maintain the original shape and colour. We avoid harsh chemicals and high-heat drying. For older or already-damaged pairs, we’ll flag any risks before we start."
    },
    {
      q: "How does pickup and delivery work?",
      a: "In eligible areas, you can choose pickup and delivery at checkout. We’ll confirm your time window, collect your items in sealed bags, and return everything cleaned and packed at your chosen time."
    },
    {
      q: "What if I’m not happy with the result?",
      a: "If we’ve missed something, let us know within 24 hours and we’ll re-clean the affected areas at no extra cost. Your trust matters more to us than a single transaction."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
            Answers to common questions.
          </h2>
          <p className="text-lg text-gray-600">
            Not sure which service to choose or how we handle speciality materials? Start here, or message us directly for a quick answer.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-2xl overflow-hidden transition-all ${
                openIndex === index ? 'border-primary/20 bg-sky-50/50' : 'border-gray-100 bg-gray-50 hover:border-gray-200'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold font-heading text-lg ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
