import useProducts from "../../../hooks/ProductHooks/useProducts"; // Adjust the import path to your useProducts hook
import { Card } from "../Products/Card";

type Props = {
  search: string | null;
};

const Main = ({ search }: Props) => {
  const { products, loading, error } = useProducts();
  let filterProducts;

  if (search) {
    filterProducts = products?.filter((item) =>
      item.title.toLowerCase().startsWith(search.toLowerCase())
    );
  } else {
    filterProducts = products; // Set to all products if search is empty
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const content = (
    <div className="flex w-full gap-3 p-3 flex-wrap justify-evenly">
      {filterProducts?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );

  return content;
};

export default Main;
