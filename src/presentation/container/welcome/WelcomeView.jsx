import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { getProducts } from "../.../../../../application/action/shop/action";
import ProductComponent from "../../components/ProductComponent";
import ModalComponent from "../../components/ModalComponent";
import LProductComponent from "../../components/loading/LProductComponent";

const Welcome = ({ getProducts, products, isLoading }) => {
  const { Content, Footer } = Layout;

  useEffect(() => {
    getProducts("");
  }, []);

  return (
    <>
      <Content className="gm-main gm-p-0-50">
        <div className="gm-title">
          <h1>
            Bienvenido a <span>Tienda Online Simple</span>
          </h1>
          <p>Encuentra los mejores productos</p>
        </div>
        <div className="gm-product">
          {isLoading ? (
            <LProductComponent />
          ) : (
            products.map((product, index) => (
              <ProductComponent key={index} product={product} />
            ))
          )}
        </div>
      </Content>
      <ModalComponent />
      <Footer className="gm-footer">Prueba Gian Albornoz</Footer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    isLoading: state.shop.isLoadingAll,
  };
};

export default connect(mapStateToProps, {
  getProducts,
})(Welcome);
