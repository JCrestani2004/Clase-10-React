import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardProd2 from "./CardProd2";


const API = "https://dummyjson.com/products/category/";

const ListProd2 = () => {
    const [datos, setDatos] = useState([]);
    const {categoria, titulo} = useParams();
    const URI = API + categoria;
    
      const getDatos = async () => {
        try {
          const response = await fetch(URI);
          const data = await response.json();
          //console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getDatos();
      }, [categoria]);
  return (
    <>
    {datos.map((item, index) => (
        <CardProd2 key={index} item={item} />
      ))}
    </>
  );
};

export default ListProd2;
