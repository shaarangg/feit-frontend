import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import CustomerRegister from "./pages/CustomerRegister";
import CompanyLogin from "./pages/CompanyLogin";
import CustomerLogin from "./pages/CustomerLogin";
import Customer from "./pages/Customer";
import Company from "./pages/Company";
import Home from "./pages/Home";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/customerRegister" element={<CustomerRegister />} />
                    <Route exact path="/company" element={<CompanyLogin />} />
                    <Route exact path="/customer" element={<CustomerLogin />} />
                    <Route exact path="/customerdashboard" element={<Customer />} />
                    <Route exact path="/companydashboard" element={<Company />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
