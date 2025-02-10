import { useContext, useState } from "react";
import { CategoryContext } from "../../context";

export default function Filter() {
  const { categories, setCategoryFilter } = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFilterShow, setIsFilterShow] = useState(false);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setCategoryFilter(category);
  };

  const toggleFilterShow = () => {
    setIsFilterShow(!isFilterShow);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded={isFilterShow}
          aria-haspopup="true"
          onClick={toggleFilterShow}
        >
          Filter
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08-1.04L5.23 7.21z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isFilterShow && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {categories.map((category) => (
              <label
                key={category}
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                onClick={() => handleFilterChange(category)}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                  id="filter-option-1"
                  checked={selectedCategory === category}
                  readOnly
                />
                <span className="ml-2">{category}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
