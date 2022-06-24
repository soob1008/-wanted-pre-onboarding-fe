import React from "react";
import GlobalStyles from "./styles/globalStyles";
import "./styles/layout.scss";

import Login from "./pages/Login";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* login */}
      <Login />
    </>
  );
}

export default App;
