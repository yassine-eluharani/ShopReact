import { useQuery } from "react-query";
import fetchData from "../utils/useFetchProducts";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["prodcuts"],
    queryFn: fetchData,
  });

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>Product List</h1>
          <div className="product-list">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
