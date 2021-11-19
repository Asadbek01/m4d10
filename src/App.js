import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./layouts/Footer";
import SideNav from './layouts/SideNav'
import TopNav from "./layouts/TopNav";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <SideNav />
        <Routes>
        <Route path="/home" exact render={() => <HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;