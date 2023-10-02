import About from "./components/pages/aboutus/About";
import Activities from "./components/pages/activities/Activities";
import Explore from "./components/pages/explore/Explore";
import Footer from "./components/pages/footer/Footer";
import Hero from "./components/pages/landingpage/Hero";
import Social from "./components/pages/social/Social";
import Navi from "./components/shared/nav";

function App() {
  return (
    <div>
      <Navi />
      <Hero/>
      <About/>
      <Activities/>
      <Explore/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
