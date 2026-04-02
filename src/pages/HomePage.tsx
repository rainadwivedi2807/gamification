export default function HomePage() {
  return (
    <main className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Home</h1>
          <p className="text-sm text-gray-500 mt-0.5">Welcome back! Here's what's happening.</p>
        </div>

        {/* Right: notifications + avatar */}
        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-full bg-white border border-purple-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">5</span>
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 flex items-center justify-center text-white text-sm font-semibold shadow">
            R
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Ambassadors', value: '1,284', change: '+12%', up: true },
          { label: 'Active Campaigns', value: '38', change: '+4%', up: true },
          { label: 'Total Payouts', value: '$24,500', change: '-2%', up: false },
        ].map(({ label, value, change, up }) => (
          <div key={label} className="bg-white rounded-2xl border border-purple-100 p-5 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className={`text-xs font-medium mt-1 ${up ? 'text-emerald-500' : 'text-red-400'}`}>
              {change} <span className="text-gray-400 font-normal">vs last month</span>
            </p>
          </div>
        ))}
      </div>

      {/* Feature highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            icon: '🎯',
            title: 'Reward Your Ambassadors',
            desc: 'Boost campaign performance by setting up rewards for ambassadors',
          },
          {
            icon: '👑',
            title: 'Set Milestones',
            desc: 'Set up custom goals for sales, posts, or time-based achievements',
          },
          {
            icon: '⚡',
            title: 'Customise Incentives',
            desc: 'Create custom incentives like flat fees, free products, or special commissions.',
          },
        ].map(({ icon, title, desc }) => (
          <div key={title}
            className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform">
              {icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6">
        <h2 className="text-sm font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { name: 'Alice Johnson', action: 'joined as Ambassador', time: '2 min ago', color: 'from-purple-400 to-fuchsia-400' },
            { name: 'Bob Smith', action: 'reached Milestone 2', time: '14 min ago', color: 'from-blue-400 to-cyan-400' },
            { name: 'Campaign "Summer"', action: 'was activated', time: '1 hr ago', color: 'from-emerald-400 to-teal-400' },
            { name: 'Payout batch', action: '$1,200 sent to 8 ambassadors', time: '3 hrs ago', color: 'from-amber-400 to-orange-400' },
          ].map(({ name, action, time, color }) => (
            <div key={name + time} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800 truncate">
                  <span className="font-medium">{name}</span>{' '}
                  <span className="text-gray-500">{action}</span>
                </p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
