import useProducts from "../../../hooks/ProductHooks/useProducts"; // Adjust the import path to your useProducts hook
import { Card } from "../Products/Card";

const Main = () => {
  const { products, loading, error } = useProducts();

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
      {products?.map((item) => (
        <div key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
  return content;
};

export default Main;
