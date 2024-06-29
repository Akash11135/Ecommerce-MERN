import { IconThumbUp } from "@tabler/icons-react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
type cardProps = {
  item: Product;
};
export function Card({ item }: cardProps) {
  const [itemId, setItemId] = useState<string>("");
  const navigate = useNavigate();

  const handleProductId = (_id: string) => {
    setItemId(_id);
  };

  useEffect(() => {
    if (itemId) {
      navigate(`/product/${itemId}`);
    }
  }, [itemId]);
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.4] bg-black  border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-5 border  ">
        <div
          onClick={() => handleProductId(item._id)}
          className="cursor-pointer"
        >
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {item.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 "
          >
            {item.brand}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={item.images[0]}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-neutral-600 cursor-pointer"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {item.price}$
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black  text-white text-xs font-bold"
          >
            <IconThumbUp />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
