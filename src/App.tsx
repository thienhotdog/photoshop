import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Renders from "./pages/Renders";
import Photoediting from "./pages/residential/PhotoEditing";
import DaytoTwilight from "./pages/residential/DaytoTwilight";
import Retouching from "./pages/residential/Retouching";
import VirtualStaging from "./pages/residential/VirtualStaging";
import ClippingPath from "./pages/residential/ClippingPath";
import Panarama from "./pages/residential/Panarama";
import VideoEditing from "./pages/residential/VideoEditing";
import VirtualStagingCategory from "./pages/servives/VirtualStagingCategory";
import VirtualRenovation from "./pages/servives/VideoEditingCategory";
import ImageEnhancement from "./pages/servives/PanaramaCategory";
import DayToDusk from "./pages/servives/ClippingPathCategory";
import ItemRemoval from "./pages/servives/PhotoEditingCategory";
import FloorPlans from "./pages/servives/DaytoTwilightCategory";
import RendersCommercial from "./pages/servives/RetouchingCategory";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import PhotoEditingCategory from "./pages/servives/PhotoEditingCategory";
import DaytoTwilightCategory from "./pages/servives/DaytoTwilightCategory";
import RetouchingCategory from "./pages/servives/RetouchingCategory";
import ClippingPathCategory from "./pages/servives/ClippingPathCategory";
import PanaramaCategory from "./pages/servives/PanaramaCategory";
import VideoEditingCategory from "./pages/servives/VideoEditingCategory";
import BlogDetail from "./pages/Blog/BlogDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/servives" element={<Categories />} />
          <Route path="/renders" element={<Renders />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          {/* RESIDENTIAL REAL ESTATE */}
          <Route path="/home/photoediting" element={<Photoediting />} />
          <Route path="/home/day_to_twilight" element={<DaytoTwilight />} />
          <Route path="/home/retouching" element={<Retouching />} />
          <Route path="/home/virtual_staging" element={<VirtualStaging />} />
          <Route path="home/clipping_path" element={<ClippingPath />} />
          <Route path="/home/720_panarama" element={<Panarama />} />
          <Route path="/home/video_editing" element={<VideoEditing />} />
          {/* COMMERCIAL REAL ESTATE */}
          <Route path="/photoediting" element={<PhotoEditingCategory />} />
          <Route path="/day_to_twilight" element={<DaytoTwilightCategory />} />
          <Route path="/retouching" element={<RetouchingCategory />} />
          <Route path="/virtual_staging" element={<VirtualStagingCategory />} />
          <Route path="/clipping_path" element={<ClippingPathCategory />} />
          <Route path="/720_panarama" element={<PanaramaCategory />} />
          <Route path="/video_editing" element={<VideoEditingCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
