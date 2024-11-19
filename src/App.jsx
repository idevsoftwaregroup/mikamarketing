import React, { useState } from "react";
import MainPageCard from "./pages/MainPageCard";
import Tabs from "../src/components/Tabs";

function App() {
  const [showTabs, setShowTabs] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-0 flex flex-col items-center">
      {!showTabs ? (
        <MainPageCard onContinue={() => setShowTabs(true)} />
      ) : (
        <Tabs />
      )}
    </div>
  );
}

export default App;
