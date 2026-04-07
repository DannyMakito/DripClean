import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Results() {
  return (
    <section id="results" className="py-24 bg-[#0b1120] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
              Before & after: the Drip Clean difference.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Every pair goes through our multi-stage restoration process — lifting dirt, brightening midsoles and reviving materials while keeping structure and colour intact.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Specialised products for suede, nubuck, leather and knit",
                "Odour-neutralising and antibacterial treatments available",
                "Ideal for daily beaters, grails and resale stock"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#booking" className="inline-flex justify-center items-center bg-white text-primary px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-all shadow-xl shadow-white/10 text-lg">
              See more results
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <img 
                  src="https://i.postimg.cc/QCT0DQDs/dirtyshoe.png" 
                  alt="Before cleaning" 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-square opacity-80 grayscale-[30%]"
                  referrerPolicy="no-referrer"
                />
                <p className="text-gray-400 text-sm font-medium text-center">Before</p>
              </div>
              <div className="space-y-2 mt-8">
                <img 
                  src="https://i.postimg.cc/6Qcdd7Mk/cleanshoe.png" 
                  alt="After cleaning" 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
                <p className="text-gray-400 text-sm font-medium text-center">After</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
