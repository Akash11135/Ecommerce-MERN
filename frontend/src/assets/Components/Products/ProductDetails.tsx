import useProducts from "../../../hooks/ProductHooks/useProducts";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { products } = useProducts();
  const { itemId } = useParams();
  const filterProduct = products?.filter((item) => item._id === itemId);
  const content = (
    <div className="font-thin">
      {filterProduct?.map((item) => (
        <div className="felx-col">
          <div className="flex">
            <div className="w-auto">
              <div className=" min-h-screen flex flex-wrap gap-3 p-3 border-r-2 border-neutral-600 ">
                <div className="flex gap-3 flex-wrap">
                  <img
                    src={item.images[0]}
                    alt="#"
                    className="bg-neutral-600 max-h-[300px] max-w-[300px] rounded-xl p-3 hover:shadow-xl hover:shadow-emerald-600 cursor-pointer  "
                  />
                  <img
                    src={item.images[0]}
                    alt="#"
                    className="bg-neutral-600 max-h-[300px] max-w-[300px] rounded-xl p-3 hover:shadow-xl hover:shadow-emerald-600 cursor-pointer "
                  />
                </div>
                <div className="flex gap-3">
                  <img
                    src={item.images[0]}
                    alt="#"
                    className="bg-neutral-600 max-h-[300px] max-w-[300px] rounded-xl p-3 hover:shadow-xl hover:shadow-emerald-600 cursor-pointer "
                  />
                  <img
                    src={item.images[0]}
                    alt="#"
                    className="bg-neutral-600 max-h-[300px] max-w-[300px] rounded-xl p-3 hover:shadow-xl hover:shadow-emerald-600 cursor-pointer "
                  />
                </div>
              </div>
            </div>
            <div className="w-auto ">
              <div className="flex flex-col  text-[1rem]">
                <span className="text-4xl p-3">{item.title}</span>
                <div className="basic-info text-gray-50 flex flex-col p-3">
                  <span className="text-gray-200 ">{item.brand}</span>

                  <span className="text-lg font-bold">${item.price}</span>
                  <span className="w-1/2 ">{item.description}</span>
                  <div className="flex items-center mt-2">
                    <span className="mr-2">Discount Offer:</span>
                    <span className="text-green-600">
                      {item.discountPercentage}%
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className=" mr-2">Minimum Order Quantity:</span>
                    <span>{item.minimumOrderQuantity}</span>
                  </div>

                  <div className="mt-4">
                    <h1 className="text-lg font-semibold mb-2">
                      About the product
                    </h1>
                    <div className="mt-2">
                      <h1>Rating : {item.rating} </h1>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col ">
                        <div className="mr-3 font-bold">
                          Depth : {item.dimensions.depth}
                        </div>
                        <div className="mr-3 font-bold mt-2">
                          Height : {item.dimensions.height}
                        </div>
                        <div className="mr-3 font-bold mt-2">
                          Width : {item.dimensions.width}
                        </div>
                        <div className="mr-3 font-bold mt-2">
                          Weight : {item.weight}g
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-green-500 p-3">
                    Stock left : {item.availabilityStatus}
                  </span>
                  <div className=" p-3 flex gap-3 justify-between items-center">
                    <div className="flex flex-col  w-[50%]">
                      <div>
                        <h3>
                          Return Policy : <span>{item.returnPolicy}</span>
                        </h3>
                      </div>
                      <div>
                        <h3>
                          Shipping details :{" "}
                          <span>{item.shippingInformation}</span>
                        </h3>
                      </div>
                      <div>
                        <h3>
                          Warrenty details :{" "}
                          <span>{item.warrantyInformation}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      <button className="border hover:bg-neutral-700  text-white px-4 py-2 rounded-sm mr-2">
                        Add to Cart
                      </button>
                      <button className="border hover:bg-neutral-700  text-white px-4 py-2 rounded-sm mr-2">
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="m-2 border-t-2 border-neutral-600">Reviwes</h1>
            {item.reviews.map((review) => (
              <div className="flex flex-col  p-3 rounded-xl  w-full mb-2">
                <div>{review.reviewerName}</div>
                <div>
                  <p>{review.comment}</p>
                </div>
                <div className="flex gap-3">
                  {review.date}
                  {review.rating}
                  {review.reviewerEmail}
                </div>
              </div>
            ))}
            <h1>Product Meta</h1>

            <div className="flex flex-col">
              <span>
                Barcode : <span>{item.meta.barcode}</span>
              </span>
              <span>
                Created At : <span>{item.meta.createdAt}</span>
              </span>
              <span>
                Updated At : <span>{item.meta.updatedAt}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return content;
};

export default ProductDetails;
