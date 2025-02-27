import { BrowserRouter, Routes, Route } from "react-router";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";
import PageNotFound from "./pages/PageNotFound";
import DesignSystem from "./pages/DesignSystem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="/movies/:id" element={<Detailpage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
