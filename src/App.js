// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Add Page
import LayoutScreen from "./component/layout";
import HomeScreen from "./component/home";
import DetailScreen from "./component/detail";
import AboutScreen from "./component/about";
import NotFound from "./component/notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="detail/:uid" element={<DetailScreen />} />
            <Route path="about" element={<AboutScreen />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
