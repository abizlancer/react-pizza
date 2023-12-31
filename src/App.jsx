import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.component";
import Home from "./pages/Home";


const About = () => {
  return <h1>About page</h1>;
};
const Product = () => {
  return <h1>Product page</h1>;
};

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
