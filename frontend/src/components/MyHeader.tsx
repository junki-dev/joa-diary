import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

type HeaderProps = {
  collapsed: boolean;
  handleCollapsed: any;
};

const MyHeader = ({ collapsed, handleCollapsed }: HeaderProps) => (
  <Header className="site-layout-background" style={{ padding: 0 }}>
    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: "trigger",
      onClick: handleCollapsed,
    })}
  </Header>
);

export default MyHeader;
