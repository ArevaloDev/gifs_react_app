import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifsApp = () => {
  const [categories, setCategories] = useState([]);
  
  const onAddcategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories(categories => [ newCategory, ...categories]);
  }

  return (
    <>
      <h4>Gifs App</h4>
      <AddCategory onAddcategory={onAddcategory}/>
      <div>
        {
            categories.map(category => (
                <GifGrid key={category} category={category}></GifGrid>
            ))
        }
      </div>
    </>
  );
};
