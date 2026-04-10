import Header from "../components/Header";
import NavBar from "../components/NavBar";
import usePowerStore from "../store"; // Adjust path to your store

export default function BadgePreview() {
  // Pulling the state from Zustand
  const { heroName, power, level, selectedColor } = usePowerStore();

  // Mapping color names to Tailwind background classes for the mesh effect
  const colorMap = {
    Blue: "bg-blue-700",
    Red: "bg-red-700",
    Green: "bg-green-700",
    Purple: "bg-purple-700",
    Orange: "bg-orange-600",
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 min-h-[70vh]">
        
        {/* Container with a slow floating animation */}
        <div className="relative group transition-all duration-[3000ms] ease-in-out animate-float">
          
          {/* THE CARD */}
          <div className="relative w-[450px] aspect-[1.6/1] rounded-[2rem] p-8 shadow-2xl overflow-hidden border border-white/20">
            
            {/* 1. DYNAMIC ANIMATED MESH BACKGROUND */}
            <div className={`absolute inset-0 ${colorMap[selectedColor] || 'bg-blue-700'} animate-mesh-shift`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent,rgba(0,0,0,0.2))]"></div>
            </div>

            {/* 2. THE GLOSSY SHEEN (Side to side) */}
            <div className="absolute inset-0 opacity-30 pointer-events-none animate-shimmer">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transform"></div>
            </div>

            {/* 3. REFLECTIVE GLASS TOP-LAYER */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            {/* --- CARD CONTENT --- */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Header Section */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-inner">
                     <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-white leading-tight">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Hero League</p>
                    <p className="text-xs font-medium italic opacity-60">Official ID</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-xl text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]">★</span>
                  ))}
                </div>
              </div>

              {/* Name Section - Linked to Zustand */}
              <div className="text-center">
                <h3 className="text-5xl font-black text-white drop-shadow-lg tracking-tight font-serif break-words">
                  {heroName}
                </h3>
                <p className="text-sm font-bold text-yellow-400 mt-1 uppercase tracking-widest bg-black/10 inline-block px-3 py-0.5 rounded-full">
                  {power}
                </p>
              </div>

              {/* Power Bar Section - Linked to Zustand */}
              <div>
                <div className="flex justify-between items-end mb-1 px-1">
                  <span className="text-[10px] font-bold text-white/80 tracking-widest">⚡ POWER LEVEL</span>
                  <span className="text-xs font-black text-yellow-400">{level}%</span>
                </div>
                <div className="h-3 w-full bg-black/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/10 shadow-inner">
                  <div 
                    style={{ width: `${level}%` }}
                    className="h-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)] animate-pulse-slow transition-all duration-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }

          @keyframes shimmer {
            0% { transform: translateX(-150%); }
            50% { transform: translateX(150%); }
            100% { transform: translateX(150%); }
          }
          .animate-shimmer {
            animation: shimmer 3.5s infinite ease-in-out;
          }

          @keyframes mesh {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-mesh-shift {
            background-size: 200% 200%;
            animation: mesh 10s ease infinite;
          }

          .animate-pulse-slow {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </div>
    </>
  );
}