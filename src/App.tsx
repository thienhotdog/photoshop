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
import VirtualRenovation from "./pages/servives/VirtualRenovation";
import ImageEnhancement from "./pages/servives/ImageEnhancement";
import DayToDusk from "./pages/servives/DayToDusk";
import ItemRemoval from "./pages/servives/ItemRemoval";
import FloorPlans from "./pages/servives/FloorPlans";
import RendersCommercial from "./pages/servives/RendersCommercial";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";

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
          {/* RESIDENTIAL REAL ESTATE */}
          <Route path="/home/photoediting" element={<Photoediting />} />
          <Route path="/home/day_to_twilight" element={<DaytoTwilight />} />
          <Route path="/home/retouching" element={<Retouching />} />
          <Route path="/home/virtual_staging" element={<VirtualStaging />} />
          <Route path="home/clipping_path" element={<ClippingPath />} />
          <Route path="/home/720_panarama" element={<Panarama />} />
          <Route path="/home/video_editing" element={<VideoEditing />} />
          {/* COMMERCIAL REAL ESTATE */}
          <Route
            path="/category/virtual_staging"
            element={<VirtualStagingCategory />}
          />
          <Route
            path="/category/virtual_renovation"
            element={<VirtualRenovation />}
          />
          <Route
            path="/category/image_enhancement"
            element={<ImageEnhancement />}
          />
          <Route path="/category/day_to_dusk" element={<DayToDusk />} />
          <Route path="/category/item_removal" element={<ItemRemoval />} />
          <Route path="/category/floorPlans" element={<FloorPlans />} />
          <Route path="/category/renders" element={<RendersCommercial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
