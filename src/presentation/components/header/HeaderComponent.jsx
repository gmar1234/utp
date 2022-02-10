import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Button, Popover } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import ListComponent from "./ListComponent";

const HeaderComponent = ({ selected }) => {
  const history = useHistory();

  const { Header } = Layout;

  const body = (
    <Menu>
      <ListComponent selected={selected} />
    </Menu>
  );

  const handleRoute = () => {
    history.push("/shop");
  };

  return (
    <Header className="gm-header">
      <div className="logo" />
      <div className="gm-menu">
        <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Tienda</Menu.Item>
          <Menu.Item key="2">Nosotros</Menu.Item>
        </Menu>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="gm-shop"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Menu.Item key="5">
            <Popover content={body}>
              <Button
                type={selected.length ? "primary" : "default"}
                shape="round"
                icon={<ShoppingCartOutlined />}
                size="large"
              >
                Lista Carrito (
                <span> {selected.length ? selected.length : 0} </span>)
              </Button>
            </Popover>
            ,
          </Menu.Item>
          <Menu.Item key="6">
            <Button
              type="primary"
              shape="round"
              icon={<ShoppingCartOutlined />}
              size="large"
              onClick={handleRoute}
            >
              Ver carrito
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.shop.selected,
  };
};

export default connect(mapStateToProps, null)(HeaderComponent);
