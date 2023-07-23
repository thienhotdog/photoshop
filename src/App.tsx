import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { appRoutes } from "./routes/routes.routes";
import LayoutMain from "./layouts/Layout";
import PrivateRouter from "./routes/PrivateRouter";

import { PATH_SIGNIN, PATH_NEW_SALE } from "./routes/routes.paths";

import { isAuthenticated } from "./utils/localStorage/localStorega";
import LayoutHeader from "./layouts/Layout.header";
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
import VirtualStagingCategory from "./pages/commercial/VirtualStagingCategory";
import VirtualRenovation from "./pages/commercial/VirtualRenovation";
import ImageEnhancement from "./pages/commercial/ImageEnhancement";
import DayToDusk from "./pages/commercial/DayToDusk";
import ItemRemoval from "./pages/commercial/ItemRemoval";
import FloorPlans from "./pages/commercial/FloorPlans";
import RendersCommercial from "./pages/commercial/RendersCommercial";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/renders" element={<Renders />} />
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
