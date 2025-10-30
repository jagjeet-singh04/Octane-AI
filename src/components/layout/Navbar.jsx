import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../ui/navbar-menu";

export function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = (
    <>
      <MenuItem setActive={setActive} active={active} item="Products">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/thinkcode">ThinkCode</HoveredLink>
          <HoveredLink href="/ai-resume">AI Resume Builder</HoveredLink>
          <HoveredLink href="/ai-interview">AI Interview Helper</HoveredLink>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Pricing">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/pricing">Individual</HoveredLink>
         
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Company">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/About">About</HoveredLink>
          <HoveredLink href="/Contact">Contact</HoveredLink>
          <HoveredLink href="/Careers">Careers</HoveredLink>
        </div>
      </MenuItem>
    </>
  );

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[95vw] px-3 sm:px-2">
  <div className="mt-2 flex h-14 items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 sm:px-4 backdrop-blur">
          {/* Left: Brand */}
          <a href="/" className="font-bold tracking-tight text-white text-lg">
            OCTANE AI 
          </a>

          {/* Middle: Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <Menu>{menuItems}</Menu>
          </div>

          {/* Right: Auth */}
          <div className="flex items-center">
            <button
              className="md:hidden mr-2 rounded-full border border-white/20 px-3 py-1.5 text-white/90 hover:bg-white/10"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
            
          </div>
        </div>
        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden mt-2">
            <Menu>{menuItems}</Menu>
          </div>
        )}
      </div>
    </div>
  );
}