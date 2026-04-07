import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-green-500 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
              Ready to see your sneakers shine again?
            </h2>
            <p className="text-xl text-green-50 mb-10 max-w-2xl">
              Book your Drip Clean today and give your sneakers and laundry the professional care they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="inline-flex justify-center items-center bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-xl shadow-black/10 text-lg">
                Book now
              </a>
              <a href="#services" className="inline-flex justify-center items-center bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all text-lg">
                View services
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="mb-8">
              <h3 className="text-green-100 font-medium mb-2 uppercase tracking-wider text-sm">Studio hours</h3>
              <p className="text-2xl font-bold font-heading">Mon – Sat, 10am – 7pm</p>
            </div>
            <div>
              <h3 className="text-green-100 font-medium mb-2 uppercase tracking-wider text-sm">Location</h3>
              <p className="text-xl font-medium">Drip Clean Studio<br/>Your City, Main Sneaker District</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
