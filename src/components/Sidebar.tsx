import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Brain, 
  Briefcase, 
  ClipboardList, 
  Wallet, 
  User 
} from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, path: '/home' },
  { name: 'Insights', icon: Brain, path: '/insights' },
  { name: 'Gamification', icon: Briefcase, path: '/gamification' },
  { name: 'Applications', icon: ClipboardList, path: '/applications' },
  { name: 'Payments', icon: Wallet, path: '/payments' },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-[188px] bg-[#FDEFFD] border-r border-[#FEE7FE] flex flex-col z-40">
      {/* Logo */}
      <div className="h-[80px] flex items-center px-6 mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c026d3] to-[#701a75] flex items-center justify-center text-white shadow-lg shadow-fuchsia-200">
            <span className="font-bold text-xl leading-none">S</span>
          </div>
          <span className="text-[20px] font-extrabold text-gray-800 tracking-tight">SARAL</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-white text-[#c026d3] shadow-[0_4px_12px_rgba(192,38,211,0.08)]" 
                  : "text-[#616161] hover:bg-white/50 hover:text-gray-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-5 h-5 transition-colors ${isActive ? "text-[#c026d3]" : "text-gray-400"}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[14px] leading-[130%] transition-all ${isActive ? "opacity-100" : "opacity-90"}`}>{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Nav */}
      <div className="p-3 mt-auto">
        <NavLink
          to="/settings"
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
              isActive 
                ? "bg-white text-[#c026d3] shadow-sm" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <User className={`w-5 h-5 ${isActive ? "text-[#c026d3]" : "text-gray-400"}`} />
              <span className="text-[14px] font-medium">Settings</span>
            </>
          )}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
