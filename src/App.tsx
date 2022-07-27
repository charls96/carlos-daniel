import { useState } from "react";
import Home from "./components/page/Home";
import LayoutPopOS from "./components/pop-os/LayoutPopOS";

function App() {
  return (
      <>
        <LayoutPopOS>
          <Home />
        </LayoutPopOS>
      </>
  );
}

export default App;
