import Footer from "./Home/Footer";
import Main from "./Home/Main";
import Navbar from "./Home/Navbar";
function Home() {
  const content = (
    <div className="min-h-screen ">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  return content;
}

export default Home;
