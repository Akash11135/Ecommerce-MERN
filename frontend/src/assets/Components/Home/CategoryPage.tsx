import useCategory from "../../../hooks/ProductHooks/useCategory";
import CategoryItem from "./CategoryItem";

const CategoryPage = () => {
  const { loading, category } = useCategory();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }
  const content = (
    <div className="flex justify-evenly border-b-2 border-neutral-500 ">
      {category
        ?.map((categoryItems) => (
          <CategoryItem key={categoryItems._id} categoryItems={categoryItems} />
        ))
        .slice(0, 5)}
    </div>
  );
  return content;
};

export default CategoryPage;
