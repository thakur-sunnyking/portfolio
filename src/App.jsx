import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ScrollToTop from "./components/ScrollToTop";

import DevineKartDetails from "./pages/DevineKartDetails";
import ProductionLineDetails from "./pages/ProductionLineDetails";

const App = () => {
    return (
        <BrowserRouter>

            {/* Automatically scroll to top when route changes */}
            <ScrollToTop />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects/devine-kart"
                    element={<DevineKartDetails />}
                />

                <Route
                    path="/projects/production-line-scheduler"
                    element={<ProductionLineDetails />}
                />

            </Routes>

        </BrowserRouter>
    );
};

export default App;