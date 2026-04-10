export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-10 px-4 text-center bg-slate-50">
      <div className="flex items-center justify-center gap-4 mb-2">
        {/* Left Lightning Bolt */}
        <span className="text-4xl animate-bounce duration-1000">⚡</span>

        {/* Animated Gradient Title */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
          Super Hero ID Card Creator
        </h1>

        {/* Right Lightning Bolt */}
        <span className="text-4xl animate-bounce duration-1000 [animation-delay:200ms]">⚡</span>
      </div>

      <p className="text-lg md:text-xl text-slate-600 font-medium serif italic opacity-90">
        Design your very own legendary hero badge!
      </p>

      {/* Optional: Simple Tailwind Animation Keyframes (Add to your global CSS or tailwind.config.js) */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </header>
  );
}