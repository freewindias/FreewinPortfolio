import React from "react";
import { twMerge } from "tailwind-merge";

interface ToolBoxItem {
  title: string;
  icon: string | JSX.Element;
}

interface ToolBoxItemsProps {
  items: ToolBoxItem[];
  className?: string;
  itemsWrapperClassName?: string;
}

export const ToolBoxItems = ({ items, className, itemsWrapperClassName }: ToolBoxItemsProps) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-black/25 rounded-lg "
          >
            <div className="size-10">
              <span>{item.icon}</span>
            </div>
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
