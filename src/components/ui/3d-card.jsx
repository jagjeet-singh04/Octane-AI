"use client";
import React from "react";

// Context to share transform to children
const CardContext = React.createContext({
	transform: "",
});

export function CardContainer({ children, className = "", ...props }) {
	return (
		<div
			className={`[perspective:1000px] ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}

export function CardBody({ children, className = "", ...props }) {
	const ref = React.useRef(null);
	const [transform, setTransform] = React.useState("");

	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width; // 0..1
		const py = (e.clientY - rect.top) / rect.height; // 0..1
		const rotX = (0.5 - py) * 12; // tilt up/down
		const rotY = (px - 0.5) * 12; // tilt left/right
		setTransform(`rotateX(${rotX}deg) rotateY(${rotY}deg)`);
	};

	const reset = () => setTransform("rotateX(0deg) rotateY(0deg)");

	return (
		<CardContext.Provider value={{ transform }}>
			<div
				ref={ref}
				onMouseMove={handleMove}
				onMouseLeave={reset}
				className={`[transform-style:preserve-3d] will-change-transform transition-transform duration-200 ${className}`}
				style={{ transform }}
				{...props}
			>
				{children}
			</div>
		</CardContext.Provider>
	);
}

export function CardItem({
	children,
	className = "",
	translateZ = 0,
	as,
	...props
}) {
	const { transform } = React.useContext(CardContext);
	const Component = as || "div";
	// We only need translateZ during hover tilt, so keep same transform origin
	const style = {
		transform: `${transform} translateZ(${typeof translateZ === "number" ? translateZ : parseFloat(translateZ) || 0}px)`,
		transformStyle: "preserve-3d",
	};

	return (
		<Component className={className} style={style} {...props}>
			{children}
		</Component>
	);
}