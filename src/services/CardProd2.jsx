import { useCarrito } from "../context/CarritoContext";
import { formatCurrency } from "../util/funciones";

const CardProd2 = ({ item }) => {
  const { carrito, agregarAlCarrito } = useCarrito();
  const enCarrito = carrito.find((producto) => producto.id === item.id);
  return (
    <div className="col-lg-6">
      <div className="products-mini-item border">
        {enCarrito && (
          <span className="position-absolute top-0 end-0 badge rounded-pill bg-warning fs-4 m-2">
            {enCarrito.cantidad}
          </span>
        )}
        <div className="row g-0">
          <div className="col-5">
            <div className="products-mini-img border-end h-100">
              <img
                src={item.thumbnail}
                className="img-fluid w-100 h-100"
                alt="Image"
              />
              <div className="products-mini-icon rounded-circle bg-primary">
                <a href="#">
                  <i className="fa fa-eye fa-1x text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="products-mini-content p-3">
              <a href="#" className="d-block mb-2">
                {item.category}
              </a>
              <a href="#" className="d-block h4">
                {item.title}
              </a>
              <del className="me-2 fs-5">${formatCurrency(item.price)}</del>
              <span className="text-primary fs-5">
                $
                {formatCurrency(
                  item.price * (1 - item.discountPercentage / 100)
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="products-mini-add border p-3">
          <button
            onClick={() => {agregarAlCarrito(item)}}
            className="btn btn-primary border-secondary rounded-pill py-2 px-4"
          >
            <i className="fas fa-shopping-cart me-2" /> Add To Cart
          </button>
          <div className="d-flex">
            <a
              href="#"
              className="text-primary d-flex align-items-center justify-content-center me-3"
            >
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-random" />
              </span>
            </a>
            <a
              href="#"
              className="text-primary d-flex align-items-center justify-content-center me-0"
            >
              <span className="rounded-circle btn-sm-square border">
                <i className="fas fa-heart" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProd2;
