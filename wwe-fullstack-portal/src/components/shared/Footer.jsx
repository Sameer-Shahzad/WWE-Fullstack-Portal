export default function Footer() {
  return (
    /* 1. Yahan se 'border-t' aur 'border-zinc-800' ko bilkul hata diya hai */
    <footer className="text-white py-6 mt-auto bg-gray-900 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-xs">
          &copy; {new Date().getFullYear()} WWE Portal
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-[10px] font-medium uppercase tracking-wider">
          <a href="/help" className="text-gray-200 hover:text-white transition">Help</a>
          <a href="/contact" className="text-gray-200 hover:text-white transition">Contact</a>
          <span className="text-white">|</span>
          <a href="/privacy" className="text-gray-200 hover:text-white transition">Privacy</a>
          <a href="/terms" className="text-gray-200 hover:text-white transition">Terms</a>
        </div>

      </div>
    </footer>
  );
}