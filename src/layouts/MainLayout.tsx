import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

export default () => {
  return (
    <MainLayout>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </MainLayout>
  );
};
