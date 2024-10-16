import { useEffect, useState } from "react";
import "./styles.css"

export default function LoadMore() {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [products, setProduts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const productFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=12&skip=${
            count === 0 ? 0 : count * 20
          }&select=title,price,thumbnail`
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          setLoading(false);
          setProduts((existingData) => { return [...existingData, ...data.products]} );
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
          setLoading(false);
        }
      }
    };
    productFetch();
    console.log("Unnmounted componnent");
  }, [count]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error !== "") {
    return <div>Oops! Error while loading...</div>;
  }

  return (
    <div className="container">
      <div className="product-list">
        {products && products.length > 0
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title}></img>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count+1)}>Load More</button>
      </div>
    </div>
  );
}
