import Footer from "../Footer/Footer";
import Header from "../header/header";

function Layout({ children }: unknown) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
