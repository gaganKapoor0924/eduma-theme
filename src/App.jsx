import Academics from "./components/Academics";
import Admission from "./components/Admission";
import Banner from "./components/Banner";
import CampusLife from "./components/CampusLife";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shaping from "./components/Shaping";
import Stats from "./components/Stats";
import UpcomingEvents from "./components/UpcomingEvents";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Shaping />
      <Stats />
      <Academics />
      <VideoSection />
      <Admission />
      <UpcomingEvents />
      <CampusLife />
      <Footer />
    </>
  );
}

export default App;
