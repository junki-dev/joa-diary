import React, { useState } from "react";
import { Layout } from "antd";
import Router from "../../router/Router";
import MyHeader from "../MyHeader";
import Sidebar from "../Sidebar";

const { Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <MyHeader collapsed={collapsed} handleCollapsed={handleCollapsed} />
        <Content>
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
