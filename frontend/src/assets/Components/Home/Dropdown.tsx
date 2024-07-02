import { Link } from "react-router-dom";

type dropdownProps = {
  products: Product[];
};

const Dropdown = ({ products }: dropdownProps) => {
  const content = (
    <div>
      {products
        ?.map((product) => (
          <div className="z-20 " key={product.id}>
            <ul className="rounded-xl ">
              <div className="p-2 border-t-[0.5px] hover:bg-neutral-700 cursor-pointer ">
                <Link to={`/category/Product/${product._id}`}>
                  <li className="rounded-md">{product.title}</li>
                </Link>
              </div>
            </ul>
          </div>
        ))
        .slice(0, 5)}
      <div className="border-t-[0.5px] p-2  hover:bg-neutral-700 cursor-pointer">
        more...
      </div>
    </div>
  );
  return content;
};

export default Dropdown;
