"use client";
import React, { useRef } from "react";

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
		<nav
			className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-6 w-full md:w-auto rounded-xl md:rounded-full bg-transparent md:bg-white/5 backdrop-blur px-2 py-2 md:px-4 md:py-2 border md:border-white/10 md:shadow-lg"
		>
			{children}
		</nav>
	);
}

// Single menu item with a hover/focus dropdown panel
export function MenuItem({ item, children, active, setActive }) {
	const isOpen = active === item;
	const containerRef = useRef(null);
	const openTimer = useRef(null);
	const closeTimer = useRef(null);

	const clearTimers = () => {
		if (openTimer.current) {
			clearTimeout(openTimer.current);
			openTimer.current = null;
		}
		if (closeTimer.current) {
			clearTimeout(closeTimer.current);
			closeTimer.current = null;
		}
	};

	const handleEnter = () => {
		clearTimers();
		openTimer.current = setTimeout(() => setActive?.(item), 80);
	};

	const handleLeave = () => {
		clearTimers();
		closeTimer.current = setTimeout(() => setActive?.(null), 160);
	};

	const handleBlur = (e) => {
		// Only close if focus leaves the whole container
		const next = e.relatedTarget;
		if (!containerRef.current || !next || !containerRef.current.contains(next)) {
			setActive?.(null);
		}
	};

	return (
		<div
			ref={containerRef}
			className="relative"
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			onFocus={() => setActive?.(item)}
			onBlur={handleBlur}
		>
			<button
				className={`w-full md:w-auto text-left md:text-center px-3 py-2 text-sm font-medium rounded-lg md:rounded-full transition-colors ${
					isOpen ? "bg-white text-black" : "text-gray-200 hover:text-white hover:bg-white/10"
				}`}
				type="button"
				aria-expanded={isOpen}
				aria-haspopup="true"
				onClick={() => setActive?.(isOpen ? null : item)}
			>
				{item}
			</button>

			{isOpen && (
				<div
					className="z-50 mt-2 md:mt-0 md:absolute md:left-1/2 md:top-full md:-translate-x-1/2 w-full md:w-auto min-w-[220px] rounded-lg md:rounded-xl border border-white/10 bg-black/60 md:bg-black/80 backdrop-blur px-3 py-3 md:px-4 md:py-4 shadow-lg md:shadow-2xl"
					onMouseEnter={handleEnter}
					onMouseLeave={handleLeave}
				>
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