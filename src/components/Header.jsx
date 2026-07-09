import {
  Bell,
  UserCircle,
  Moon,
  Sun,
} from "lucide-react";
function Header({
  search,
  setSearch,
  theme,
  setTheme,
}) {
  
  return (
    <header className="header">

      <input
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

      <div className="header-icons">

        <button
          className="theme-btn"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark"
            ? <Sun size={20}/>
            : <Moon size={20}/>
          }
        </button>

        <Bell size={22}/>

        <UserCircle size={24}/>

        <span>🔔</span>
        <span>👤</span>

      </div>

    </header>
  );
}

export default Header;