"use client";
import React from "react";
import { CardSpotlight } from "./card-spotlight.jsx";

export function ProductCard({ title, description, thumbnail, href = "#" }) {
  return (
    <CardSpotlight className="p-6">
      <a href={href} className="block">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="h-40 w-full object-cover rounded-lg border border-white/10 mb-4"
            loading="lazy"
          />
        )}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-300">{description}</p>
        )}
      </a>
    </CardSpotlight>
  );
}
