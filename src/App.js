import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice from "./components/App";
// import AuthContext from "./context/auth";

export default function App() {
  // const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
            <React.Fragment>
                <Invoice />
            </React.Fragment>
    </BrowserRouter>
  );
}
