import { useEffect, useState } from "react";

type ImagsliderProps = {
  url: string;
  limit: number;
};

export default function Imagslider({ url, limit }: ImagsliderProps) {
  const [images, setImages] = useState<string[]>([]);
  const [slide, setSlide] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errormessage, setErrormessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (url !== "") {
        try {
          setLoading(true);
          const response = await fetch(`${url}limit=${limit}`);
          const data = await response.json();
          if (data) {
            setImages(data);
            setLoading(false);
          }
        } catch (e: unknown) {
          if (e instanceof Error) {
            setErrormessage(e.message);
            setLoading(false);
          }
        }
      }
    };
    fetchData();
  }, [url,limit]);

  console.log(images)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errormessage !== "") {
    return <div>Oops...Error occurred while fetching</div>;
  }

  return <div></div>;
}
