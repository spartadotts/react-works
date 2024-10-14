import { useEffect, useState } from "react";

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
          `https://dummyjson.com/products?limit=10&skip=${
            count === 0 ? 0 : count * 20
          }&select=title,price`
        );
        const data = await response.json();
        console.log(data);
        if (data) {
          setLoading(false);
          setProduts(data);
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
  }, []);

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
              <div key={item.id}>
                <img src={item.title}></img>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
