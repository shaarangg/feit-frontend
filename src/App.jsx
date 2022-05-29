import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import CustomerRegister from "./pages/CustomerRegister";
import Home from "./pages/Home";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/customerRegister" element={<CustomerRegister />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
