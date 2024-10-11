import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

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
  }, [url, limit]);

  console.log(images);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errormessage !== "") {
    return <div>Oops...Error occurred while fetching</div>;
  }

  function handleLeftClick() {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  }

  function handleRightClick() {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  }

  return (
    <div className="main-container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handleLeftClick}
      />
      {images && images.length ? (
        images.map((image, index) => {
          return (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={
                slide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            ></img>
          );
        })
      ) : (
        <div>Oops no images found</div>
      )}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleRightClick}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    slide === index
                      ? "button-image"
                      : "button-image hide-button-image"
                  }
                  onClick={() => {
                    setSlide(index);
                  }}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}
