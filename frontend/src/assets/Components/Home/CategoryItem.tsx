import { useState } from "react";

type CategoryProps = {
  categoryItems: Category;
};

const CategoryItem = ({ categoryItems }: CategoryProps) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const handleCategory = () => {
    setDropdown(!dropdown);
  };

  return (
    <div
      className="hover:bg-stone-400  hover:text-black
       w-full p-2 rounded-md text-center"
      onClick={handleCategory}
    >
      {categoryItems.categoryName.name}
    </div>
  );
};

export default CategoryItem;
