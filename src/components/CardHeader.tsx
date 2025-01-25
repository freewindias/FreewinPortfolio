import React from "react";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({ title, description, className, } : {
    title: string;
    description: string;
    className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        <svg
          className="size-9 text-red-orange-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
            fill="currentColor"
          />
        </svg>
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm  text-black/70 mt-2">
        {description}
      </p>
    </div>
  );
};
