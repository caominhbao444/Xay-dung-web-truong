import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import AnnoucePage from "./pages/AnnoucePage/AnnouceHomePage/AnnoucePage";
import AnnounceAll from "./pages/AnnoucePage/AnnounceAll/AnnounceAll";
import Faculty from "./pages/FacultyPage/Faculty";
import TopicPage from "./pages/TopicPage/TopicPage";
import PrivateComponentAdmin from "./components/PrivateComponent/PrivateComponentAdmin";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";
import Action from "./pages/Admin/AdminAnnounce/Action/Action";
import Post from "./pages/Admin/AdminAnnounce/Post/Post";
import AnnoucePost from "./pages/AnnoucePage/AnnoucePost/AnnoucePost";
import RequestedDetails from "./pages/RequestedAccept/RequestedDetails/RequestedDetails";
import AdminRequest from "./pages/Admin/AdminRequest/AdminRequest";
import useAuth from "./hooks/useAuth/useAuth";
function App() {
  const { username, fullname, faculty, roleName } = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              username ? (
                <>
                  <Home />
                  <Footer />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route element={<PrivateComponent />}>
            <Route path="/nopdon" element={<FormPage />} />
            <Route path="/nopdon/chitiet/:id" element={<RequestedDetails />} />
            <Route path="/danopdon" element={<RequestedAccept />} />
            <Route path="/taodon/DonXinCapBangDiem" element={<FormCreate />} />
            <Route
              path="/taodon/DonXinDiemTrungBinh"
              element={<FormAverage />}
            />
            <Route path="/dondangxuly" element={<RequestPending />} />
            <Route path="/dondaxuly" element={<RequestFinished />} />
          </Route>
          <Route element={<PrivateComponentAdmin />}>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/thongbao/tao" element={<Action />} />
            <Route path="/admin/thongbao/dangbai" element={<Post />} />
            <Route path="/admin/don/danhsach" element={<AdminRequest />} />
          </Route>
          <Route element={<PrivateComponent1 />}>
            <Route path="/thongbao" element={<AnnoucePage />} />
            <Route
              path="/thongbao/chitietbaipost/:id"
              element={<AnnoucePost />}
            />
            <Route path="/thongbao/all" element={<AnnounceAll />} />
            <Route path="/thongbao/khoa/:id" element={<Faculty />} />
            <Route path="/thongbao/chude/:id" element={<TopicPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
