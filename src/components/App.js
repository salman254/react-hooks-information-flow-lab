import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}> {/* Ensure this class is correctly applied */}
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={[]} /> {/* Your list of items */}
    </div>
  );
}

export default App;
