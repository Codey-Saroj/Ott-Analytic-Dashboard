import {
  LayoutDashboard,
  Film,
  BarChart3,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🎬 StreamFlix</h2>

      <nav>
        <ul>
          <li className="active">
          <LayoutDashboard size={20}/>
          Dashboard
          </li>

         <li>
          <Film size={20}/>
          Movies
         </li>

         <li>
          <BarChart3 size={20}/>
          Analytics
         </li>

         <li>
          <Users size={20}/>
          Subscribers
         </li>

         <li>
          <Settings size={20}/>
          Settings
         </li>

         <li>
          <LogOut size={20}/>
          Logout
         </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;