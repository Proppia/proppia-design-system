import { Search, Bell, Home, BarChart3, Users, Settings } from 'lucide-react';
import { ProppiaIsotipo } from '@/app/components/brand/ProppiaIsotipo';

export default function DashboardPage() {
  return (
    <div className="w-full h-full bg-[#F1F1F1] flex overflow-hidden">
      {/* Sidebar - 64px width, charcoal */}
      <aside className="w-16 bg-[#1E1E1E] flex flex-col items-center py-6 gap-4 flex-shrink-0">
        {/* Nav Icons */}
        <div className="flex flex-col gap-4">
          {/* Home - Active */}
          <div className="relative">
            <div 
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: 'linear-gradient(180deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)' }}
            />
            <button className="w-12 h-12 flex items-center justify-center bg-[rgba(241,241,241,0.1)] ml-1">
              <Home className="w-6 h-6 text-[#F1F1F1]" />
            </button>
          </div>

          {/* Analytics */}
          <button className="w-12 h-12 flex items-center justify-center hover:bg-[rgba(241,241,241,0.08)] transition-colors">
            <BarChart3 className="w-6 h-6 text-[#F1F1F1]" />
          </button>

          {/* Team */}
          <button className="w-12 h-12 flex items-center justify-center hover:bg-[rgba(241,241,241,0.08)] transition-colors">
            <Users className="w-6 h-6 text-[#F1F1F1]" />
          </button>

          {/* Settings */}
          <button className="w-12 h-12 flex items-center justify-center hover:bg-[rgba(241,241,241,0.08)] transition-colors">
            <Settings className="w-6 h-6 text-[#F1F1F1]" />
          </button>
        </div>

        {/* Brand signature - gradient square at bottom */}
        <div className="mt-auto">
          <div 
            className="w-4 h-4"
            style={{ background: 'linear-gradient(135deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)' }}
          />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Bar - 72px height */}
        <header className="h-[72px] bg-white border-b border-[rgba(30,30,30,0.12)] flex items-center justify-between px-8 flex-shrink-0">
          {/* Logo + Squares */}
          <div className="flex items-center gap-3">
            <ProppiaIsotipo className="h-8 text-[#1E1E1E]" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#F6E342]" />
              <div className="w-3 h-3 bg-[#75EFB1]" />
              <div className="w-3 h-3 bg-[#23F8F7]" />
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xs mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(30,30,30,0.6)]" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2 bg-[rgba(30,30,30,0.05)] border border-[rgba(30,30,30,0.12)] rounded-lg text-sm focus:outline-none focus:border-[#23F8F7] focus:border-2"
              />
            </div>
          </div>

          {/* Right section - Notifications + Avatar */}
          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 flex items-center justify-center hover:bg-[rgba(30,30,30,0.05)] rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-[rgba(30,30,30,0.6)]" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#75EFB1] rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#F1F1F1] text-sm font-medium">
              MC
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8 space-y-8">
          {/* Métricas Clave - 3 columns */}
          <section className="grid grid-cols-3 gap-6">
            {/* MRR Card */}
            <div className="bg-white border border-[rgba(30,30,30,0.12)] rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F6E342] flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <p className="text-sm font-medium text-[rgba(30,30,30,0.6)]">MRR</p>
                  <p className="text-4xl font-black text-[#1E1E1E]">$47,230</p>
                  <p className="text-sm font-medium text-[#75EFB1]">+12% MoM</p>
                </div>
              </div>
            </div>

            {/* Growth Card */}
            <div className="bg-white border border-[rgba(30,30,30,0.12)] rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#75EFB1] flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <p className="text-sm font-medium text-[rgba(30,30,30,0.6)]">Growth</p>
                  <p className="text-4xl font-black text-[#1E1E1E]">+127%</p>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-[rgba(30,30,30,0.08)] rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: '80%',
                          background: 'linear-gradient(90deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CAC Card */}
            <div className="bg-white border border-[rgba(30,30,30,0.12)] rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#23F8F7] flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <p className="text-sm font-medium text-[rgba(30,30,30,0.6)]">CAC</p>
                  <p className="text-4xl font-black text-[#1E1E1E]">$230</p>
                  <p className="text-sm font-medium text-[#F6E342]">-5% optimal</p>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Chart */}
          <section className="bg-white border border-[rgba(30,30,30,0.12)] rounded-lg p-8">
            {/* Chart Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-[#1E1E1E]">Performance Q4 2024</h2>
              <select className="px-4 py-2 text-sm text-[rgba(30,30,30,0.6)] border border-[rgba(30,30,30,0.12)] rounded-lg focus:outline-none focus:border-[#23F8F7]">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>

            {/* Chart Area - Simplified representation */}
            <div className="relative h-80">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-[rgba(30,30,30,0.6)]">
                <span>$100k</span>
                <span>$75k</span>
                <span>$50k</span>
                <span>$25k</span>
                <span>$0</span>
              </div>

              {/* Chart content area */}
              <div className="absolute left-20 right-0 top-0 bottom-12">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-[rgba(30,30,30,0.08)]" />
                  ))}
                </div>

                {/* Chart visual representation */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F6E342" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#75EFB1" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#23F8F7" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M 0 240 L 0 180 L 120 140 L 240 160 L 360 100 L 480 80 L 600 120 L 600 240 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M 0 180 L 120 140 L 240 160 L 360 100 L 480 80 L 600 120"
                      fill="none"
                      stroke="#1E1E1E"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="absolute left-20 right-0 bottom-0 h-8 flex justify-between items-end text-xs text-[rgba(30,30,30,0.6)]">
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
              </div>
            </div>
          </section>

          {/* Activity Grid - 2 columns */}
          <section className="grid grid-cols-2 gap-6">
            {/* Task List */}
            <div className="bg-white border border-[rgba(30,30,30,0.12)] rounded-lg p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#75EFB1]" />
                <h3 className="text-sm font-medium text-[#1E1E1E]">Task List</h3>
              </div>

              <div className="space-y-4">
                {[
                  { task: 'Campaign review', due: 'Today', urgent: true },
                  { task: 'SEO audit', due: 'Tomorrow', urgent: false },
                  { task: 'Client meeting', due: 'Friday', urgent: false }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3 hover:bg-[rgba(30,30,30,0.03)] rounded-lg transition-colors cursor-pointer"
                  >
                    <div className={`w-2 h-2 flex-shrink-0 mt-1.5 ${item.urgent ? 'bg-[#F6E342]' : 'bg-[#23F8F7]'}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#1E1E1E]">{item.task}</p>
                      <p className="text-xs text-[rgba(30,30,30,0.6)] mt-1">Due: {item.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-white border border-[rgba(30,30,30,0.12)] rounded-lg p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#23F8F7]" />
                <h3 className="text-sm font-medium text-[#1E1E1E]">Recent Updates</h3>
              </div>

              <div className="space-y-4">
                {[
                  { update: 'New lead: Empresa X', time: '2 hours ago' },
                  { update: 'Report ready: Q4', time: '5 hours ago' },
                  { update: 'Team update posted', time: 'Yesterday' }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3 hover:bg-[rgba(30,30,30,0.03)] rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-[#75EFB1] flex-shrink-0 mt-1.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#1E1E1E]">{item.update}</p>
                      <p className="text-xs text-[rgba(30,30,30,0.6)] mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}