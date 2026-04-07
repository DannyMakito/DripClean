export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-bold font-heading text-white mb-4 tracking-tight">Drip Clean</h4>
            <p className="max-w-md text-gray-400 leading-relaxed">
              Professional Sneaker Cleaning & Laundry services keeping your daily rotation and wardrobe in permanent fresh-start mode.
            </p>
          </div>
          <div className="md:text-right space-y-4">
            <p>© 2026 Drip Clean. All rights reserved.</p>
            <p className="space-x-4">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
