import { useEffect, useState } from "react";
import { GifsApi } from "../helpers/gifsApi";
import { GifList } from "./GifList";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const gifs = await GifsApi(category);
    console.log(gifs);
    setImages(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({id, img, title}) => (
          <GifList key={id} url={img} title={title}></GifList>
        ))}
      </div>
    </>
  );
};
