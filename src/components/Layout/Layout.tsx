import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Pages/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This tells React Router where to render child routes */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
