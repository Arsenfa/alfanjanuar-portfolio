import React from 'react';

interface MockupProps {
  type: 'warehouse' | 'checkout' | 'steam' | 'telegram' | 'kde' | 'sales';
  minimal?: boolean;
  title?: string;
}

export function ProjectMockup({ type, minimal, title }: MockupProps) {
  if (type === 'warehouse') {
    return (
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-between p-6 md:p-8 select-none ${minimal ? 'bg-white' : 'bg-indigo-600'}`}>
        {/* Abstract background graphics */}
        <div className={`absolute right-0 top-0 w-2/3 h-full skew-x-12 transform origin-right ${minimal ? 'bg-slate-50 opacity-40' : 'bg-indigo-500 opacity-20'}`}></div>
        <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-2xl ${minimal ? 'bg-slate-100 opacity-20' : 'bg-indigo-700 opacity-40'}`}></div>

        {/* Left: Text */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[50%]">
          <div className={`rounded-lg p-2.5 w-fit mb-3 border ${minimal ? 'bg-slate-50 border-[#E2E8F0] text-[#020817]' : 'bg-white/20 border-white/20 text-white'}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>
            Warehouse<br />Management<br />System
          </h3>
        </div>

        {/* Right: Rich Warehouse Interface Graphics */}
        <div className={`relative z-10 w-[45%] h-[85%] rounded-lg border shadow-xs p-3 flex flex-col gap-2 ${minimal ? 'bg-white border-[#E5E7EB]' : 'bg-[#0F172A] border-slate-700'}`}>
          {/* Mock Window Header */}
          <div className={`flex items-center gap-1.5 border-b pb-2 ${minimal ? 'border-slate-100' : 'border-slate-800'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
            <span className={`text-[9px] font-mono ml-1 ${minimal ? 'text-[#64748B]' : 'text-slate-500'}`}>wms-v2.0.local</span>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className={`border rounded p-1.5 ${minimal ? 'bg-slate-50 border-slate-200' : 'bg-indigo-950/40 border-indigo-500/30'}`}>
              <span className={`block text-[7px] font-medium ${minimal ? 'text-[#64748B]' : 'text-indigo-300'}`}>STOCK LEVEL</span>
              <span className={`block text-[11px] font-bold font-mono ${minimal ? 'text-[#020817]' : 'text-indigo-100'}`}>94.8%</span>
            </div>
            <div className={`border rounded p-1.5 ${minimal ? 'bg-slate-50 border-slate-200' : 'bg-emerald-950/40 border-emerald-500/30'}`}>
              <span className={`block text-[7px] font-medium ${minimal ? 'text-[#64748B]' : 'text-emerald-300'}`}>DISPATCHED</span>
              <span className={`block text-[11px] font-bold font-mono ${minimal ? 'text-[#020817]' : 'text-emerald-100'}`}>1,402</span>
            </div>
          </div>

          {/* Visual Shelf Chart */}
          <div className={`flex-1 rounded border p-2 flex flex-col gap-1.5 overflow-hidden ${minimal ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
            <span className={`text-[7.5px] font-bold font-mono ${minimal ? 'text-[#020817]' : 'text-slate-400'}`}>ZONE A: MULTI-TIER SHELVES</span>
            {/* Shelves rows */}
            <div className="flex-1 flex flex-col gap-1 justify-around">
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex gap-1 items-end h-[10px]">
                  <span className="text-[6px] text-slate-400 w-2">R{row}</span>
                  <div className={`flex-1 h-1.5 rounded-sm flex overflow-hidden ${minimal ? 'bg-slate-200' : 'bg-slate-800'}`}>
                    <div className="w-1/3 bg-slate-300 h-full border-r border-[#E5E7EB]"></div>
                    <div className="w-1/4 bg-slate-400 h-full border-r border-[#E5E7EB]"></div>
                    <div className="w-1/5 bg-slate-500 h-full border-r border-[#E5E7EB]"></div>
                    <div className={`flex-1 h-full ${minimal ? 'bg-slate-200' : 'bg-slate-800'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Outline */}
          <div className="h-[22px] flex flex-col gap-1 overflow-hidden">
            <div className={`flex justify-between items-center text-[7px] border-b pb-0.5 font-mono ${minimal ? 'border-slate-100 text-[#64748B]' : 'border-slate-800 text-slate-500'}`}>
              <span>LOT ID</span>
              <span>QTY</span>
              <span>STATUS</span>
            </div>
            <div className="flex justify-between items-center text-[6px] font-mono">
              <span className={minimal ? 'text-[#020817]' : 'text-slate-300'}>#LT-8819</span>
              <span className={minimal ? 'text-[#0F172A]' : 'text-slate-450'}>420 pcs</span>
              <span className={`px-1 rounded border ${minimal ? 'text-[#020817] bg-emerald-50 border-emerald-200 text-[6px]' : 'text-emerald-400 bg-emerald-950/50 border-emerald-500/20'}`}>READY</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'checkout') {
    return (
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-between p-6 md:p-8 select-none ${minimal ? 'bg-white' : 'bg-indigo-500'}`}>
        {/* Abstract shapes */}
        <div className={`absolute left-0 bottom-0 w-2/3 h-full skew-y-12 transform origin-left ${minimal ? 'bg-slate-50 opacity-40' : 'bg-indigo-600 opacity-20'}`}></div>
        <div className={`absolute -top-10 -left-10 w-48 h-48 rounded-full blur-2xl ${minimal ? 'bg-slate-100 opacity-20' : 'bg-indigo-400 opacity-35'}`}></div>

        {/* Left: Text */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[50%]">
          <div className={`rounded-lg p-2.5 w-fit mb-3 border ${minimal ? 'bg-slate-50 border-[#E2E8F0] text-[#020817]' : 'bg-white/20 border-white/20 text-white'}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>
            Self<br />Checkout
          </h3>
        </div>

        {/* Right: Self-checkout Tablet Screen Mockup */}
        <div className={`relative z-10 w-[45%] h-[85%] bg-white rounded-lg border shadow-xs p-3 flex flex-col gap-2 ${minimal ? 'border-[#E5E7EB]' : 'border-slate-200 shadow-xl'}`}>
          {/* App Header Status */}
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#020817]"></span>
              <span className="text-[8px] font-bold text-[#020817] tracking-wider">YOGYA EXPRESS</span>
            </div>
            <span className="text-[6.5px] font-mono text-slate-400">TERM-04</span>
          </div>

          {/* Cart items list */}
          <div className="flex-1 flex flex-col gap-1.5 overflow-hidden py-1">
            <div className="flex justify-between items-center p-1 bg-slate-50 border border-slate-100 rounded">
              <div className="flex flex-col">
                <span className="text-[7.5px] font-bold text-slate-800 leading-tight">Indomie Goreng Spc</span>
                <span className="text-[6.5px] text-slate-500">1x Rp 3.100</span>
              </div>
              <span className="text-[8px] font-bold text-[#020817] font-mono">Rp 3.100</span>
            </div>
            <div className="flex justify-between items-center p-1 bg-slate-50 border border-slate-100 rounded">
              <div className="flex flex-col">
                <span className="text-[7.5px] font-bold text-slate-800 leading-tight">Yogyakarta Gudeg Can</span>
                <span className="text-[6.5px] text-slate-500">1x Rp 38.500</span>
              </div>
              <span className="text-[8px] font-bold text-[#020817] font-mono">Rp 38.500</span>
            </div>
          </div>

          {/* Checkout Barcode Simulator */}
          <div className="h-[28px] bg-slate-50 border border-slate-100 rounded p-1 flex items-center justify-between gap-1 overflow-hidden">
            <div className="flex flex-col">
              <span className="text-[6px] text-slate-400">TOTAL BILL</span>
              <span className="text-[9.5px] font-bold text-[#020817] font-mono leading-tight">Rp 41.600</span>
            </div>
            {/* Real Barcode representation using thin/thick lines */}
            <div className="flex items-center gap-[1px] h-full bg-white px-1.5 py-0.5 rounded border border-slate-200">
              <div className="w-[1.5px] h-full bg-slate-900"></div>
              <div className="w-[0.5px] h-full bg-slate-900"></div>
              <div className="w-[1px] h-full bg-slate-900"></div>
              <div className="w-[2px] h-full bg-slate-900"></div>
              <div className="w-[0.5px] h-full bg-slate-900"></div>
              <div className="w-[1.5px] h-full bg-slate-900"></div>
              <div className="w-[1px] h-full bg-slate-900"></div>
              <div className="w-[2.5px] h-full bg-slate-900"></div>
            </div>
          </div>

          {/* Action Button */}
          <div className="bg-[#020817] text-white rounded text-[7.5px] font-bold text-center py-1.5 shadow-sm active:opacity-90">
            PAY NOW
          </div>
        </div>
      </div>
    );
  }

  if (type === 'steam') {
    return (
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-between p-6 md:p-8 select-none ${minimal ? 'bg-white' : 'bg-violet-600'}`}>
        {/* Parallax stars bg */}
        <div className={`absolute right-4 top-4 w-1.5 h-1.5 rounded-full opacity-60 ${minimal ? 'bg-slate-300' : 'bg-yellow-300'}`}></div>
        <div className={`absolute right-12 bottom-10 w-1 h-1 rounded-full opacity-40 ${minimal ? 'bg-slate-200' : 'bg-white'}`}></div>
        <div className={`absolute left-1/3 top-10 w-1 h-1 rounded-full opacity-50 ${minimal ? 'bg-slate-200' : 'bg-indigo-300'}`}></div>
        <div className={`absolute right-1/4 top-24 w-2 h-2 rounded-full opacity-35 blur-xs ${minimal ? 'bg-slate-100' : 'bg-purple-400'}`}></div>

        {/* Left: Text */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[50%]">
          <div className={`rounded-lg p-2.5 w-fit mb-3 border ${minimal ? 'bg-slate-50 border-[#E2E8F0] text-[#020817]' : 'bg-white/20 border-white/20 text-white'}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>
            Steam Rider
          </h3>
        </div>

        {/* Right: Game Screen Simulator */}
        <div className={`relative z-10 w-[45%] h-[85%] rounded-lg shadow-2xl p-2 flex flex-col justify-between overflow-hidden border ${minimal ? 'bg-slate-50 border-[#E5E7EB]' : 'bg-[#0A051B] border-violet-400/50'}`}>
          {/* Game Score overlay */}
          <div className={`flex justify-between items-center text-[7px] font-mono font-bold border-b pb-1 ${minimal ? 'text-[#020817] border-slate-200' : 'text-violet-300 border-violet-950/50'}`}>
            <span>LVL-12</span>
            <span className={minimal ? 'text-slate-800' : 'text-yellow-400'}>SCORE: 092,840</span>
          </div>

          {/* Outer Canvas Arena representation */}
          <div className="flex-1 relative flex items-center justify-around">
            {/* Retro Structures & player */}
            <div className="absolute bottom-0 left-0 right-0 h-4 flex items-end">
              <div className={`flex-1 h-1.5 border-t ${minimal ? 'bg-slate-200/60 border-slate-200' : 'bg-violet-950/40 border-violet-500/20'}`}></div>
            </div>

            {/* Jet spaceship */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-1.5 h-1 bg-slate-500 rounded-l"></div>
              <div className={`w-4 h-2.5 rounded-r relative ${minimal ? 'bg-slate-800' : 'bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.5)]'}`}>
                <div className="absolute top-0 right-0.5 w-1.5 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>

            {/* Projectiles / coins */}
            <div className="absolute left-10 top-[40%] w-1.5 h-1.5 rounded-full bg-slate-400 shadow-sm"></div>
            <div className="absolute left-16 top-[60%] w-1.5 h-1.5 rounded-full bg-slate-400 shadow-sm opacity-85"></div>

            {/* Approaching space asteroid/enemy */}
            <div className={`absolute right-3 top-1/3 w-3 h-3 rounded-full border shadow-inner flex items-center justify-center ${minimal ? 'bg-slate-200 border-slate-300' : 'bg-indigo-950 border-violet-500/40'}`}>
              <span className={`text-[4px] font-bold ${minimal ? 'text-slate-700' : 'text-red-400'}`}>☠</span>
            </div>
          </div>

          {/* Controller HUD layout */}
          <div className={`flex justify-between items-center text-[5.5px] font-mono p-1 rounded ${minimal ? 'text-[#64748B] bg-slate-200/50' : 'text-violet-400 bg-violet-950/60'}`}>
            <span>[W/S] STEER</span>
            <span className={minimal ? 'text-[#020817] font-semibold' : 'text-violet-200'}>[SPACE] LASER</span>
          </div>
        </div>
      </div>
    );
  }  if (type === 'telegram') {
    return (
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-between p-6 md:p-8 select-none ${minimal ? 'bg-white' : 'bg-sky-600'}`}>
        {/* Abstract Telegram shapes */}
        <div className={`absolute left-0 top-0 w-2/3 h-full skew-x-12 transform origin-left ${minimal ? 'bg-slate-50 opacity-40' : 'bg-sky-500 opacity-20'}`}></div>
        <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-2xl ${minimal ? 'bg-slate-100 opacity-20' : 'bg-sky-400 opacity-30'}`}></div>

        {/* Left: Text */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[50%]">
          <div className={`rounded-lg p-2.5 w-fit mb-3 border ${minimal ? 'bg-slate-50 border-[#E2E8F0] text-[#020817]' : 'bg-white/20 border-white/20 text-white'}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>
            Telegram AI Bot
          </h3>
        </div>

        {/* Right: Chat Phone Graphic */}
        <div className={`relative z-10 w-[45%] h-[85%] rounded-lg border shadow-xl p-2.5 flex flex-col gap-2 ${minimal ? 'bg-white border-[#E5E7EB]' : 'bg-slate-900 border-slate-700'}`}>
          {/* Active Chat Header */}
          <div className={`flex items-center gap-1.5 border-b pb-1.5 ${minimal ? 'border-slate-100' : 'border-slate-800'}`}>
            <div className="relative">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center font-bold text-white text-[7px] ${minimal ? 'bg-[#020817]' : 'bg-sky-500'}`}>⚡</div>
              <span className="absolute bottom-0 right-0 w-1 h-1 rounded-full bg-emerald-400"></span>
            </div>
            <div className="flex flex-col">
              <span className={`text-[7.5px] font-bold leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>Alfan AI Bot</span>
              <span className={`text-[5.5px] ${minimal ? 'text-[#64748B]' : 'text-sky-400'}`}>agent is typing...</span>
            </div>
          </div>

          {/* Dialog bubble loop */}
          <div className="flex-1 flex flex-col gap-1.5 py-1 justify-end">
            {/* User message */}
            <div className={`self-end rounded-lg rounded-tr-none px-2 py-1 max-w-[85%] ${minimal ? 'bg-slate-100 border border-slate-200' : 'bg-sky-600'}`}>
              <span className={`block text-[7px] ${minimal ? 'text-[#020817]' : 'text-white'}`}>/summarize meeting_notes.md</span>
            </div>

            {/* AI Response thinking */}
            <div className={`self-start rounded-lg rounded-tl-none px-2 py-1 max-w-[85%] flex flex-col gap-0.5 ${minimal ? 'bg-slate-50 border border-slate-100' : 'bg-slate-800'}`}>
              <span className={`block text-[5.5px] font-mono font-bold ${minimal ? 'text-slate-800' : 'text-emerald-400'}`}>● PARSING SOURCE FILE</span>
              <span className={`block text-[7px] ${minimal ? 'text-[#0F172A]' : 'text-slate-200'}`}>Below is your AI summarization:</span>
              <div className="w-16 h-1 bg-slate-200 rounded-sm overflow-hidden mt-0.5">
                <div className={`h-full ${minimal ? 'bg-[#020817]' : 'bg-sky-400'}`}></div>
              </div>
            </div>
          </div>

          {/* Action Keyboard Bar simulator */}
          <div className={`h-[14px] rounded flex items-center justify-between px-1.5 text-[5.5px] border ${minimal ? 'bg-slate-50 text-slate-500 border-slate-200' : 'bg-slate-950 text-slate-500 border-slate-800'}`}>
            <span>Ask me anything...</span>
            <span className={minimal ? 'text-[#020817] font-semibold' : 'text-sky-400'}>⚡ Send</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'kde') {
    return (
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-between p-6 md:p-8 select-none ${minimal ? 'bg-white' : 'bg-teal-600'}`}>
        {/* Abstract Linux/Unix lines */}
        <div className={`absolute right-0 top-0 w-2/3 h-full skew-x-12 transform origin-right ${minimal ? 'bg-slate-50 opacity-30' : 'bg-teal-700 opacity-20'}`}></div>
        <div className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-2xl ${minimal ? 'bg-slate-100 opacity-20' : 'bg-teal-500 opacity-35'}`}></div>

        {/* Left: Text */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[50%]">
          <div className={`rounded-lg p-2.5 w-fit mb-3 border ${minimal ? 'bg-slate-50 border-[#E2E8F0] text-[#020817]' : 'bg-white/20 border-white/20 text-white'}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>
            KDE Plasma<br />Desktop Ricing
          </h3>
        </div>

        {/* Right: Glassmorphic DE Mockup */}
        <div className={`relative z-10 w-[45%] h-[85%] rounded-lg border shadow-2xl p-2 flex flex-col justify-between overflow-hidden ${
          minimal 
            ? 'bg-slate-50 border-[#E5E7EB]' 
            : 'border-teal-400/40 border-2'
        }`} style={minimal ? {} : {
          background: 'linear-gradient(135deg, rgba(20, 110, 100, 0.85) 0%, rgba(8, 60, 56, 0.95) 100%)'
        }}>
          {/* Top Panel */}
          <div className={`flex justify-between items-center text-[5.5px] font-medium px-1 py-0.5 rounded-sm ${minimal ? 'text-[#020817] bg-slate-200/50' : 'text-teal-100/90 bg-black/10'}`}>
            <div className="flex gap-1.5 items-center">
              <span className="font-bold"></span>
              <span>Applications</span>
              <span>Find</span>
            </div>
            <span>Jun 10, 20:30 UTC</span>
          </div>

          {/* Open Terminal window in center */}
          <div className={`mx-1 my-1.5 rounded-md border p-1.5 flex-1 flex flex-col gap-0.5 select-none shadow-lg ${minimal ? 'bg-white border-slate-200' : 'bg-black/80 border-white/10'}`}>
            {/* Terminal Window controls */}
            <div className={`flex items-center gap-[4px] border-b pb-1 ${minimal ? 'border-slate-100' : 'border-neutral-900'}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
              <span className={`text-[4.5px] font-mono pl-1 ${minimal ? 'text-[#64748B]' : 'text-cyan-400'}`}>alfan@archlinux ~</span>
            </div>
            {/* Terminal Code mock */}
            <div className={`flex-1 font-mono text-[4.5px] leading-tight flex flex-col justify-center ${minimal ? 'text-[#0F172A]' : 'text-teal-400'}`}>
              <span className="text-slate-400">$ pfetch</span>
              <span className={minimal ? 'text-slate-600' : 'text-white'}>OS: Arch Linux x86_64</span>
              <span className={minimal ? 'text-slate-600' : 'text-white'}>WM: KWin + LatteDock</span>
              <span className={minimal ? 'text-slate-600' : 'text-white'}>DE: KDE Plasma 6.0</span>
              <span className={`font-bold ${minimal ? 'text-[#020817]' : 'text-emerald-400'}`}>$ ./rice_setup.sh --deploy</span>
            </div>
          </div>

          {/* Bottom Dock */}
          <div className={`self-center rounded-full px-2 py-1 flex items-center justify-center gap-1.5 border shadow-sm ${minimal ? 'bg-white border-[#E5E7EB] text-[#020817]' : 'bg-white/10 border-white/10 text-white'}`}>
            <span className="w-2.5 h-2.5 rounded-full hover:scale-125 transition-transform flex items-center justify-center text-[5px] font-bold">⚙</span>
            <span className="w-2.5 h-2.5 rounded-full hover:scale-125 transition-transform flex items-center justify-center text-[5px] font-bold">▶</span>
            <span className="w-2.5 h-2.5 rounded-full hover:scale-125 transition-transform flex items-center justify-center text-[5px] font-bold">﹢</span>
            <span className="w-2.5 h-2.5 rounded-full hover:scale-125 transition-transform flex items-center justify-center text-[5px] font-bold">🖪</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sales') {
    return (
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-between p-6 md:p-8 select-none ${minimal ? 'bg-white' : 'bg-sky-600'}`}>
        {/* Abstract shapes */}
        <div className={`absolute right-0 top-0 w-2/3 h-full skew-x-12 transform origin-right ${minimal ? 'bg-slate-50 opacity-40' : 'bg-sky-500 opacity-20'}`}></div>
        <div className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-2xl ${minimal ? 'bg-slate-100 opacity-20' : 'bg-sky-400 opacity-30'}`}></div>

        {/* Left: Text */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[50%]">
          <div className={`rounded-lg p-2.5 w-fit mb-3 border ${minimal ? 'bg-slate-50 border-[#E2E8F0] text-[#020817]' : 'bg-white/20 border-white/20 text-white'}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />
            </svg>
          </div>
          <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>
            {title || 'Sales Highlight'}
          </h3>
        </div>

        {/* Right: Buyer/seller chat closing into a deal — real selling activity */}
        <div className={`relative z-10 w-[45%] h-[85%] rounded-lg border shadow-xs p-2.5 flex flex-col gap-2 ${minimal ? 'bg-white border-[#E5E7EB]' : 'bg-[#0F172A] border-slate-700'}`}>
          {/* Chat header */}
          <div className={`flex items-center gap-1.5 border-b pb-1.5 ${minimal ? 'border-slate-100' : 'border-slate-800'}`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center font-bold text-[7px] ${minimal ? 'bg-[#F1F5F9] text-[#020817]' : 'bg-sky-500/20 text-sky-200'}`}>B</div>
            <div className="flex flex-col">
              <span className={`text-[7.5px] font-bold leading-tight ${minimal ? 'text-[#020817]' : 'text-white'}`}>Buyer</span>
              <span className={`text-[5.5px] ${minimal ? 'text-[#64748B]' : 'text-sky-400'}`}>online now</span>
            </div>
          </div>

          {/* Conversation thread */}
          <div className="flex-1 flex flex-col gap-1.5 py-1 justify-center">
            {/* Buyer asks */}
            <div className={`self-start rounded-lg rounded-tl-none px-2 py-1 max-w-[88%] ${minimal ? 'bg-slate-100 border border-slate-200' : 'bg-slate-800'}`}>
              <span className={`block text-[7px] leading-snug ${minimal ? 'text-[#0F172A]' : 'text-slate-200'}`}>Is the price still negotiable?</span>
            </div>
            {/* Seller replies */}
            <div className={`self-end rounded-lg rounded-tr-none px-2 py-1 max-w-[88%] ${minimal ? 'bg-[#020817]' : 'bg-sky-600'}`}>
              <span className="block text-[7px] leading-snug text-white">Let's meet in the middle — deal?</span>
            </div>
            {/* Buyer agrees */}
            <div className={`self-start rounded-lg rounded-tl-none px-2 py-1 max-w-[88%] ${minimal ? 'bg-slate-100 border border-slate-200' : 'bg-slate-800'}`}>
              <span className={`block text-[7px] leading-snug ${minimal ? 'text-[#0F172A]' : 'text-slate-200'}`}>Deal. Sending payment now 🤝</span>
            </div>
          </div>

          {/* Deal closed confirmation */}
          <div className={`flex items-center justify-center gap-1.5 rounded-md py-1.5 ${minimal ? 'bg-emerald-50 border border-emerald-200' : 'bg-emerald-950/40 border border-emerald-500/30'}`}>
            <svg className={`w-3 h-3 ${minimal ? 'text-emerald-600' : 'text-emerald-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-[7.5px] font-bold tracking-wide ${minimal ? 'text-emerald-700' : 'text-emerald-300'}`}>DEAL CLOSED</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
