import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom'; // Ensure correct import for your router version
import usePowerStore from '../store'; // Adjust the path to your store file

export default function Edit() {
  // Destructure state and actions from the Zustand store
  const { 
    heroName, 
    power, 
    level, 
    selectedColor, 
    setHeroName, 
    setPower, 
    setLevel, 
    setSelectedColor 
  } = usePowerStore();

  const colors = [
    { name: "Blue", class: "bg-blue-600" },
    { name: "Red", class: "bg-red-600" },
    { name: "Green", class: "bg-green-600" },
    { name: "Purple", class: "bg-purple-600" },
    { name: "Orange", class: "bg-orange-500" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Header />
      <NavBar />

      <main className="max-w-md mx-auto mt-12 p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🛠️</span>
          <h2 className="text-3xl font-black text-slate-800 font-serif">Design Your Badge</h2>
        </div>

        <div className="space-y-8">
          {/* Hero Name Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-bold text-slate-700 font-serif">
              <span>👤</span> Hero Name
            </label>
            <input
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-bold text-slate-700 text-lg"
            />
          </div>

          {/* Super Power Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-bold text-slate-700 font-serif">
              <span className="text-pink-500">💥</span> Primary Super Power
            </label>
            <input
              type="text"
              value={power}
              onChange={(e) => setPower(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-bold text-slate-700 text-lg shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            />
          </div>

          {/* Power Level Slider */}
          <div className="space-y-4">
            <label className="flex items-center justify-between font-bold text-slate-700 font-serif">
              <span className="flex items-center gap-2">
                ⚡ Power Level: <span className="text-blue-600">{level}%</span>
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))} // Ensure it's a number
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Rookie</span>
              <span>Legend</span>
            </div>
          </div>

          {/* Color Picker */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-bold text-slate-700 font-serif">
              <span>🎨</span> Pick Card Color
            </label>
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-3xl border border-slate-100">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-xl transition-all duration-300 transform hover:scale-110 ${color.class} ${
                    selectedColor === color.name 
                    ? "ring-4 ring-offset-2 ring-blue-500 scale-110 shadow-lg" 
                    : "opacity-80 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-sm font-medium text-slate-500">
              Selected: <span className="font-bold text-slate-800">{selectedColor}</span>
            </p>
          </div>

          {/* Action Button */}
          <Link to="/" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center gap-3 group">
            Showcase My Badge!
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">🚀</span>
          </Link>
        </div>
      </main>
    </div>
  );
}