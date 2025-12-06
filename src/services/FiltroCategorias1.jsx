import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = "https://dummyjson.com/products/categories";

const FiltroCategorias1 = ({inicio, fin}) => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data)
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDatos();
  }, []);
  return (
    <>
    <h4></h4>
      {datos.slice(inicio,fin).map((item, index) => (
        <li key={index}>
          <div className="categories-item">
            <Link to={`/shop/${item.slug}/${item.name}`} className="text-dark">
              <i className="fas fa-check text-secondary me-2" />
              {item.name}
            </Link>
          </div>
        </li>
      ))}
    </>
  );
};

export default FiltroCategorias1;
