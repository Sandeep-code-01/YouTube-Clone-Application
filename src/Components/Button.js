import React, { useState } from "react";

const categories = [
  "All",
  "Technology",
  "Health",
  "Science",
  "Sports",
  "Entertainment",
  "Business",
  "World",
  "Politics",
  "Travel",
  "Lifestyle",
  "Education",
  "Food",
];

const Button = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`px-4 py-2 rounded-full border transition-colors duration-300
            ${active === item ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
