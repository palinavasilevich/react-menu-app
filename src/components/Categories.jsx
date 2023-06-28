import React from "react";

const Categories = ({ categories, filterMenuItems }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category}
          onClick={() => filterMenuItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
