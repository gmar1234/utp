import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Tag, Space, Button, notification, Popconfirm } from "antd";
import {
  DeleteOutlined,
  BorderRightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  removeProduct,
  clearAll,
} from "../.../../../../application/action/shop/action";
import { notifyCommon } from "../../../application/common/notifyCommon";

import { DateNow, TimeNow } from "../../../application/helper/DateHelper";
import { SumValues as Count } from "../../../application/helper/SumHelper";
import ProductComponent from "../../components/ProductComponent";

const ShopView = ({ selected, removeProduct, clearAll }) => {
  const { Column } = Table;
  const history = useHistory();
  const [isCard, setIsCard] = useState(false);
  const handleRoute = () => {
    history.push("/");
  };

  const handleRemove = (product) => {
    removeProduct(product);
    notification.error(notifyCommon.error);
  };

  const handleClearAll = () => {
    clearAll();
    notification.error(notifyCommon.error);
  };

  return (
    <div className="gm-p-0-50 gm-pay">
      <div className="gm-pay__action">
        <div className="gm-pay__blockquote">
          <p>Lista de productos en el carro</p>
          <p>Verifica tus productos antes de realizar la compra</p>
        </div>
        <div className="gm-pay__form">
          <div className="group">
            <label htmlFor="">Precio Total</label>
            <input
              type="text"
              name="date"
              value={"S/ " + Count(selected)}
              readOnly
            />
          </div>
          <div className="group">
            <label htmlFor="">Fecha</label>
            <input type="text" name="subject" value={DateNow()} readOnly />
          </div>
          <div className="group">
            <label htmlFor="">Hora</label>
            <input type="text" name="subject" value={TimeNow()} readOnly />
          </div>
        </div>
        <hr className="hr" />
        <button
          type="dashed"
          className="button button--success button--medium button--full button--icon"
          onClick={handleRoute}
        >
          Continuar comprando
        </button>
      </div>

      <div className="gm-cart">
        <div className="gm-cart__header">
          <div className="gm-cart__left"></div>
          <div className="gm-cart__rigth">
            <div className="gm-cart__grid">
              <button
                className="button button--default button--medium button--full button--icon"
                onClick={() => setIsCard((prev) => !prev)}
              >
                {isCard ? (
                  <>
                    <BorderRightOutlined />
                    Grid
                  </>
                ) : (
                  <>
                    <UnorderedListOutlined />
                    Lista
                  </>
                )}
              </button>
            </div>
            {selected.length > 0 ? (
              <Space>
                <Popconfirm
                  title="¿Dese eliminar todo los productos?"
                  onConfirm={handleClearAll}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="button button--default button--medium button--full button--icon">
                    <DeleteOutlined />
                    Vaciar Carro
                  </button>
                </Popconfirm>
              </Space>
            ) : (
              <button
                className="button button--default button--small button--full button--icon"
                onClick={handleRoute}
              >
                Continuar comprando
              </button>
            )}
          </div>
        </div>

        {isCard ? (
          <div className="gm-product">
            {selected.map((product, index) => (
              <ProductComponent key={index} product={product} />
            ))}
          </div>
        ) : (
          <>
            <Table dataSource={selected}>
              <Column title="Producto" dataIndex="title" key="title" />
              <Column title="Categoria" dataIndex="category" key="catgory" />
              <Column
                title="Precio"
                dataIndex="price"
                key="price"
                render={(price) => (
                  <>
                    <Tag color="blue" key="price">
                      $ {price}
                    </Tag>
                  </>
                )}
              />
              <Column
                title="Acción"
                key="action"
                render={(text, record) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemove({ ...record })}
                      danger
                    >
                      Delete
                    </Button>
                  </Space>
                )}
              />
            </Table>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.shop.selected,
  };
};

export default connect(mapStateToProps, {
  removeProduct,
  clearAll,
})(ShopView);
