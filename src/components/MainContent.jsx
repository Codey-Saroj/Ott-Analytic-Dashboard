import { useState } from "react";
import Header from "./Header";
import StatCard from "./StatCard";
import WatchChart from "./WatchChart";
import GenreChart from "./GenreChart";
import TrendingMovies from "./TrendingMovies";
import ContentTable from "./ContentTable";
import {
  Users,
  Flame,
  Clock3,
  IndianRupee,
  Star,
  Clapperboard,
} from "lucide-react";

function MainContent({ theme, setTheme }) {

  const [search, setSearch] = useState("");
  

  return (
    <main className="main-content">

      <Header
      search={search}
      setSearch={setSearch}
      theme={theme}
      setTheme={setTheme}
    />

      <h1>OTT Streaming Analytics Dashboard</h1>

      <p>Streaming performance at a glance 👋</p>

      {/* Statistics Cards */}
      <div className="stats-grid">

        <StatCard
        title="Subscribers"
        value="120K"
        icon={<Users size={30} />}
      />

      <StatCard
        title="Active Users"
        value="86K"
        icon={<Flame size={30} />}
      />

      <StatCard
        title="Watch Time"
        value="5600 hrs"
        icon={<Clock3 size={30} />}
      />

      <StatCard
        title="Revenue"
        value="₹12L"
        icon={<IndianRupee size={30} />}
      />

      <StatCard
        title="Premium Users"
        value="62K"
        icon={<Star size={30} />}
      />

      <StatCard
        title="New Releases"
        value="24"
        icon={<Clapperboard size={30} />}
      />
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <WatchChart />
        <GenreChart />
      </div>

      {/* Trending Movies */}
      <TrendingMovies search={search} />

      <ContentTable search={search} />

    </main>
  );
}

export default MainContent;