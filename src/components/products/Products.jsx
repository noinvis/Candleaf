import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/products`, { params: { limit: 8 } })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (error) {
    return (
      <div>
        <p style={{ color: "red", textAlign: "center" }}>
          Something went wrong :(
        </p>
      </div>
    );
  }
  return (
    <div className="py-[90px]">
      {loading && <div className="loader"></div>}
      <div>
        <p className="text-[40px] text-center font-[Poppins]">Products</p>
        <p className="text-[18px] font-medium text-center text-[#999]">
          Order it for you or for your beloved ones
        </p>
        <div className="container grid grid-cols-4 gap-[30px] pt-[60px] max-[1000px]:grid-cols-3 max-[760px]:grid-cols-2 max-[515px]:grid-cols-1">
          {products.map((product) => (
            <div key={product.id} className="p-[1rem] shadow">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[200px] object-cover max-[760px]:h-auto"
              />
              <p className="text-[#1D293F] font-semibold px-[24px] mt-[10px] h-[50px]">
                {product.title}
              </p>
              <p className="text-green-600 font-bold text-end">
                {product.price}$
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
