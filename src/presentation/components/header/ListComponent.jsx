import { connect } from "react-redux";
import { Popconfirm, notification } from "antd";
import { SumValues } from "../../../application/helper/SumHelper";
import { clearAll } from "../../../application/action/shop/action";
import { notifyCommon } from "../../../application/common/notifyCommon";

const ListComponent = ({ selected, clearAll }) => {
  const confirm = (e) => {
    clearAll();
    notification.error(notifyCommon.error);
  };

  const cancel = (e) => {};
  return (
    <>
      <div className="gm-list">
        <div className="gm-list__header">
          <p>Mi carro</p>
          {selected.length > 0 ? (
            <>
              <Popconfirm
                title="Are you sure to clear your shop?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <p className="clear-all">Limpiar Productos</p>
              </Popconfirm>
              ,
            </>
          ) : (
            ""
          )}
        </div>
        <div className="gm-list__preview">
          {selected.map((item, index) => (
            <div className="gm-list__item" key={index}>
              <div className="gm-list__item__img">
                <img src={item.image} alt="img" />
              </div>
              <div className="gm-list__item__info">
                <p className="title">{item.title}</p>
                <p className="price">
                  {" "}
                  <span>S/</span> {item.price}
                </p>
              </div>
            </div>
          ))}
          <li className="gm-list__total">
            <p>Total</p>
            <p>
              <span>$</span> {SumValues(selected)}
            </p>
          </li>
        </div>
      </div>
    </>
  );
};

export default connect(null, {
  clearAll,
})(ListComponent);
