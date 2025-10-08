"use client";
import React from "react";

// Simple anchor that brightens on hover
export function HoveredLink({ href = "#", children, className = "" }) {
	return (
		<a
			href={href}
			className={`text-gray-200 hover:text-white transition-colors ${className}`}
		>
			{children}
		</a>
	);
}

// Basic container for the top-level menu bar
export function Menu({ children }) {
	return (
		<nav className="flex items-center gap-6 rounded-full bg-white/5 backdrop-blur px-4 py-2 border border-white/10 shadow-lg">
			{children}
		</nav>
	);
}

// Single menu item with a hover/focus dropdown panel
export function MenuItem({ item, children, active, setActive }) {
	const isOpen = active === item;
	return (
		<div
			className="relative"
			onMouseEnter={() => setActive?.(item)}
			onMouseLeave={() => setActive?.(null)}
			onFocus={() => setActive?.(item)}
			onBlur={() => setActive?.(null)}
		>
			<button
				className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
					isOpen ? "bg-white text-black" : "text-gray-200 hover:text-white hover:bg-white/10"
				}`}
				type="button"
				aria-expanded={isOpen}
				aria-haspopup="true"
			>
				{item}
			</button>

			{isOpen && (
				<div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 min-w-[220px] rounded-xl border border-white/10 bg-black/80 backdrop-blur px-4 py-4 shadow-2xl">
					{children}
				</div>
			)}
		</div>
	);
}

// Optional product card used in menus — kept simple but useful
export function ProductItem({ title, href = "#", description, src }) {
	return (
		<a
			href={href}
			className="group flex gap-3 rounded-lg p-2 hover:bg-white/5 transition-colors"
		>
			{src ? (
				<img
					src={src}
					alt={title}
					className="h-10 w-10 rounded-md object-cover border border-white/10"
					loading="lazy"
				/>
			) : (
				<div className="h-10 w-10 rounded-md bg-white/10 border border-white/10" />
			)}
			<div>
				<div className="text-sm font-medium text-white">{title}</div>
				{description && (
					<div className="text-xs text-gray-300 mt-0.5 line-clamp-2">{description}</div>
				)}
			</div>
		</a>
	);
}
