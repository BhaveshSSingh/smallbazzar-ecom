import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";

function AppLayout() {
  return (
    <>
      <Nav />
      {/* Outlet */}
      <Home />
    </>
  );
}

export default AppLayout;
