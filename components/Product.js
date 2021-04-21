const Product = (props) => {
  const { product } = props;
  return (
    <div className="col-md-3 mb-3">
      <div className="card m-3">
        <h3 className="card-header text-center">{product.name}</h3>
        <img src={product.images[0].src} alt="Product image" />
        <div className="card-body text-center">
          <h6 className="card-subtitle mb-3">${product.price}</h6>
          <a href="#" className="btn btn-secondary">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
