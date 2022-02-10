import { Modal, Button } from "antd";
import { connect } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../../application/action/shop/action";
import { closeModal } from "../../application/action/modal/action";
import LDetailComponent from "./loading/LDetailComponent";

const ModalComponent = ({
  isModal,
  closeModal,
  product,
  selected,
  addProduct,
  removeProduct,
  isLoading,
}) => {
  const handleCancel = () => {
    closeModal();
  };

  const { title, description, price, image, category, id } = product;
  return (
    <Modal
      title="Detalles de producto"
      visible={isModal}
      footer={null}
      onCancel={handleCancel}
    >
      {isLoading ? (
        <LDetailComponent />
      ) : (
        <div className="detail">
          <div className="detail__img">
            <img src={image} alt={title} />
          </div>
          <div className="detail__body">
            <div className="detail__header">
              <p className="title">{title}</p>
              <p className="price">
                <span>S/ </span>
                {price}
              </p>
            </div>
            <div className="detail__content">
              <p>{description}</p>
            </div>
            <div className="detail__slug">
              <p className="category">Categoría</p>
              <p className="category">{category}</p>
            </div>
          </div>
          <div className="detail__action">
            <Button type="dashed" danger onClick={handleCancel}>
              Cancelar
            </Button>
            {selected.find((item) => item.id === id) ? (
              <Button
                type="primary"
                onClick={() => removeProduct({ ...product })}
                danger
              >
                Eliminar
              </Button>
            ) : (
              <Button type="primary" onClick={() => addProduct({ ...product })}>
                Agregar
              </Button>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.shop.detail,
    isModal: state.shop.isModalOpen,
    selected: state.shop.selected,
    isLoading: state.shop.isLoadingDetail,
  };
};

export default connect(mapStateToProps, {
  closeModal,
  addProduct,
  removeProduct,
})(ModalComponent);
