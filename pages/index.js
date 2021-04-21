import Layout from "../components/Layout";

import clientConfig from "../client-config";

import fetch from "isomorphic-unfetch";
import Product from "../components/Product";

const Index = (props) => {
  const { products } = props;

  return (
    <Layout>
      <div className="product-container">
        <div className="row">
          {products.length
            ? products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : ""}
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
  const productsData = await res.json();

  return {
    products: productsData,
  };
};

export default Index;
