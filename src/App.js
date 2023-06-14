import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import PrivateComponent from "../src/components/PrivateComponent/PrivateComponent";
import RequestedAccept from "./pages/RequestedAccept/RequestedAccept";
import NotFound from "./pages/NotFound/NotFound";
import RequestFinished from "./pages/RequestFinished/RequestFinished";
import RequestPending from "./pages/RequestPending/RequestPending";
import FormPage from "./pages/FormPage/FormPage";
import PrivateComponent1 from "./components/PrivateComponent/PrivateComponent1";
import NewPage from "./pages/NewPage/NewPage";
import Footer from "./components/Footer/Footer";
import FormCreate from "./pages/FormPage/FormCreate/FormCreate";
import FormAverage from "./pages/FormPage/FormAverage/FormAverage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route element={<PrivateComponent />}>
            <Route path="/nopdon" element={<FormPage />} />
            <Route path="/danopdon" element={<RequestedAccept />} />
            <Route path="/taodon/DonXinCapBangDiem" element={<FormCreate />} />
            <Route
              path="/taodon/DonXinDiemTrungBinh"
              element={<FormAverage />}
            />
            <Route path="/dondangxuly" element={<RequestPending />} />
            <Route path="/dondaxuly" element={<RequestFinished />} />
          </Route>
          <Route element={<PrivateComponent1 />}>
            <Route path="/thongbao" element={<NewPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
