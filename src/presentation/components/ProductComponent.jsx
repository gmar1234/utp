import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, Button, notification } from "antd";
import {
  addProduct,
  removeProduct,
  detailProduct,
} from "../../application/action/shop/action";
import { notifyCommon } from "../../application/common/notifyCommon";
import ModalComponent from "./ModalComponent";

const ProductComponent = ({
  product,
  selected,
  addProduct,
  removeProduct,
  detailProduct,
}) => {
  const { Meta } = Card;
  const { title, image, description, price } = product;

  const handleAdd = () => {
    addProduct({ ...product });
    notification.success(notifyCommon.success);
  };

  const handleRemove = () => {
    removeProduct({ ...product });
    notification.error(notifyCommon.error);
  };

  return (
    <div>
      <Card
        className="gm-card"
        cover={
          <LazyLoadImage alt={title} className="gm-card__img" src={image} />
        }
      >
        <Meta title={title} />

        <div className="gm-card__body">
          <p className="description">{description}</p>
        </div>

        <div className="gm-card__action">
          {selected.find((item) => item.id === product.id) ? (
            <Button type="primary" onClick={handleRemove} danger>
              Eliminar
            </Button>
          ) : (
            <Button type="primary" onClick={handleAdd}>
              Agregar
            </Button>
          )}

          <Button onClick={() => detailProduct({ ...product })}>
            Detalles
          </Button>
          <div className="gm-card__price">
            <span className="card__symbol">S/ </span>
            <p> {price}</p>
          </div>
        </div>
      </Card>

      <ModalComponent />
    </div>
  );
};

ProductComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    selected: state.shop.selected,
  };
};

export default connect(mapStateToProps, {
  addProduct,
  removeProduct,
  detailProduct,
})(ProductComponent);
