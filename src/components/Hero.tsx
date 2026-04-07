import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-sky-50 to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-6">
              Professional Sneaker Cleaning & Laundry Studio
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-gray-900 leading-[1.1] tracking-tight mb-6">
              Keep your kicks <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">box-fresh</span> without lifting a finger.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Drip Clean gives your sneakers and everyday laundry a premium spa treatment — deep-cleaned, deodorised and protected, ready to turn heads again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#booking" className="inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 hover:-translate-y-1 text-lg">
                Book a clean
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center bg-white text-gray-900 px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-all shadow-lg shadow-gray-200/50 border border-gray-100 text-lg">
                See pricing
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Same-day turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Gentle products only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Trusted by collectors</span>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://i.postimg.cc/j2Xv28Gq/Screenshot-2026-04-07-012118.png" 
              alt="Clean white sneakers" 
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
