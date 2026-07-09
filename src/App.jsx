import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

import "./styles/dashboard.css";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`app ${theme}`}>
      <Sidebar />
        <MainContent
        theme={theme}
        setTheme={setTheme}
/>
    </div>
  );
}

export default App;