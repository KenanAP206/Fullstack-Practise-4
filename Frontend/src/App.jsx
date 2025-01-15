import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Wishlist from "./Pages/Wishlist";
import AddForm from "./Pages/Add";
import Details from "./Pages/Details";
import UserRoot from "./Pages/UserRoot";
import NotFound from "./Pages/Not found";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserRoot />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
