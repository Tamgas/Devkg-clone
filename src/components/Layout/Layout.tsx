import Footer from "../Footer/Footer";
import Header from "../header/header";

function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
