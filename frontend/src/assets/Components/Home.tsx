import { useState } from "react";
import Footer from "./Home/Footer";
import Main from "./Home/Main";
import Navbar from "./Home/Navbar";
function Home() {
  const [search, setSearch] = useState<string | null>(null);

  const content = (
    <div className="min-h-screen ">
      <div>
        <Navbar setSearch={setSearch} />
      </div>
      <div className="">
        <Main search={search} />
      </div>
      <div className="static bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
  return content;
}

export default Home;
