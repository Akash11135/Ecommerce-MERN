import axios from "axios";
import { useEffect, useState } from "react";

const useCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get<Category[]>(
          "http://localhost:3500/api/category/getAllCategories"
        );
        if (res) {
          setLoading(true);
          setCategory(res.data);
        }
      } catch (error) {
        console.log("error in useCategory", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  return { loading, category };
};
export default useCategory;
