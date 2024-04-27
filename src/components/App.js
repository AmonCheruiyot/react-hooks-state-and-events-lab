import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable for Dark Mode Toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle toggling Dark Mode
  const handleToggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Dynamic class name based on Dark Mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle Dark Mode */}
        <button onClick={handleToggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      {/* Render ShoppingList component with item data */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
