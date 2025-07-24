import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "About", "Projects", "Contact"];

export default function TabSelector({ onSelectTab }) {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onSelectTab?.(tab); // Send selected tab back up
  };

  return (
    <div className="flex justify-center rounded-xl px-2 py-1 gap-0 sm:gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className="relative z-10 px-4 py-2 text-white text-sm"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-pink-600 rounded-md"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-20">{tab}</span>
        </button>
      ))}
    </div>
  );
}
