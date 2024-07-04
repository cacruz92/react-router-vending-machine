import React from "react";
import SnackLayout from "./SnackLayout";
import Snack from "./Snack";
import { BrowserRouter, Route, Routes} from "react-router-dom";

const VendingMachine = () => {
    return(
        <div className="vendMachDiv">
            
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SnackLayout />} />
                    <Route path="/snacks/butterfinger" element={<Snack name="butterfinger" />} />
                    <Route path="/snacks/funyuns" element={<Snack name="funyuns" />} />
                    <Route path="/snacks/gatorade" element={<Snack name="gatorade" />} />
                    <Route path="/snacks/monster" element={<Snack name="monster" />} />
                    <Route path="/snacks/water" element={<Snack name="water" />} />
                    <Route path="/snacks/swissroll" element={<Snack name="swissroll" />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;