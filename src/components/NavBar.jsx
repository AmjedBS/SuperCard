import  { Link } from 'react-router';
export default function NavBar() {
  return (
    <nav className="flex justify-center w-full pt-6">
      <div className="flex items-center gap-2 p-2 bg-white/70 backdrop-blur-md border border-slate-200 rounded-full shadow-lg transition-all hover:shadow-xl">
        
        {/* View Link */}
        <Link 
          to="/" 
          className="group relative px-6 py-2 rounded-full text-slate-700 font-bold overflow-hidden transition-all duration-300 hover:text-white"
        >
          <span className="relative z-10">View Badge</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>

        {/* Vertical Divider */}
        <div className="h-6 w-[1px] bg-slate-300"></div>

        {/* Edit Link */}
        <Link 
          to="/edit" 
          className="group relative px-6 py-2 rounded-full text-slate-700 font-bold overflow-hidden transition-all duration-300 hover:text-white"
        >
          <span className="relative z-10">Edit Hero</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>

      </div>
    </nav>
  );
}