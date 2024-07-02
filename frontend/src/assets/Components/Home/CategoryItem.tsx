import { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";

type CategoryProps = {
  categoryItems: Category;
};

const CategoryItem = ({ categoryItems }: CategoryProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleDropdown = () => {
    if (categoryRef.current) {
      const rect = categoryRef.current.getBoundingClientRect();
      setDropdownPosition({ top: rect.bottom, left: rect.left });
    }
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div
        ref={categoryRef}
        className="hover:bg-stone-400 hover:text-black w-full p-2 rounded-md text-center cursor-pointer relative"
        onClick={toggleDropdown}
      >
        {categoryItems.categoryName.name}
      </div>
      {dropdownOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-10"
            onClick={toggleDropdown}
          ></div>
          <div
            className="absolute bg-black text-white p-4 z-20 mt-3 rounded-3xl w-auto transition-transform"
            style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
          >
            <Dropdown products={categoryItems.products} />
          </div>
        </>
      )}
    </>
  );
};

export default CategoryItem;
