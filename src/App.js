import {Route, Routes} from "react-router-dom";

//Pages
import FindDealer from "./components/FindDealer";
import GoWith from "./components/GoWith";
import GuidesVideos from "./components/GuidesVideos";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ServiceHelp from "./components/ServiceHelp";
import ShowTyres from "./components/ShowTyres";

function App() {
  
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show-all-tyres" element={<ShowTyres/>} />
          <Route path="/find-a-dealer" element={<FindDealer/>} />
          <Route path="/guides-and-videos" element={<GuidesVideos/>} />
          <Route path="/go-with" element={<GoWith/>} />
          <Route path="/service-and-help" element={<ServiceHelp/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
