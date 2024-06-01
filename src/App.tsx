import './App.css'
import {Button, Layout} from "antd";
import {Content, Footer, Header} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";
import {LoginDialog} from "./components/LoginDialog/LoginDialog.tsx";


function App() {
    const [loginDialogVisible, setLoginDialogVisible] = useState(false);

    const handleLoginButtonClick = () => {
        setLoginDialogVisible(true);
    };

    const handleLoginDialogClose = () => {
        setLoginDialogVisible(false);
    };
  return (
      <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link to={'/'}>
                  <Title level={2} style={{ color: 'white', margin: 0 }}>
                      99Blog
                  </Title>
              </Link>
              <Button  onClick={handleLoginButtonClick} type="primary">Login</Button>
          </Header>
          <Content style={{ flex: 1, padding: '20px' }}>
              <Outlet />
          </Content>
          <Footer>
              &copy; {new Date().getFullYear()} 99Blog. All rights reserved.
          </Footer>
          <LoginDialog visible={loginDialogVisible} onClose={handleLoginDialogClose} />
      </Layout>
  )
}

export default App
