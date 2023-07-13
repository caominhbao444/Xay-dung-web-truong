import React from "react";
import "./Action.scss";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHome, FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  CallApiCreateFaculty,
  CallApiCreateDepartment,
  CallApiCreateCategory,
} from "../../../../features/announceSlice";
import CategoryComponent from "../../../../components/Admin/Announce/Category/CategoryComponent";

const Action = () => {
  const [isActive, setIsActive] = React.useState(1);
  const [nameFaculty, setNameFaculty] = React.useState("");
  const [nameShortFaculty, setNameShortFaculty] = React.useState("");
  const [descFaculty, setDescFaculty] = React.useState("");
  const [nameDepartment, setNameDepartment] = React.useState("");
  const [nameShortDepartment, setNameShortDepartment] = React.useState("");
  const [descDepartment, setDescDepartment] = React.useState("");
  const [categoryName, setCategoryName] = React.useState("");
  const [categoryCode, setCategoryCode] = React.useState("");
  const [categoryDesc, setCategoryDesc] = React.useState("");
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("authToken");
  // const createFaculty = useSelector((state) => state.announce.createFaculty);
  // const createDepartment = useSelector(
  //   (state) => state.announce.createDepartment
  // );
  const handleCreateFaculty = (e) => {
    e.preventDefault();
    dispatch(
      CallApiCreateFaculty({
        headers: { authorization: `Bearer ${authToken}` },
        facultyName: nameFaculty,
        facultyCode: nameShortFaculty,
        facultyDesc: descFaculty,
      })
    )
      .then(() => {
        Swal.fire({
          title: "Thành công",
          text: "Bài viết đã được đăng",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(() => {
        setDescFaculty("");
        setNameFaculty("");
        setNameShortFaculty("");
      })
      .catch((error) => {
        // Xử lý lỗi nếu cần
        console.error(error);
      });
  };
  const handleCreateDepartment = (e) => {
    e.preventDefault();
    dispatch(
      CallApiCreateDepartment({
        headers: { authorization: `Bearer ${authToken}` },
        departCenterName: nameDepartment,
        departCenterCode: nameShortDepartment,
        departCenterDesc: descDepartment,
      })
    )
      .then((response) => {
        if (response && response.payload) {
          Swal.fire({
            title: "Thành công",
            text: "Bài viết đã được đăng",
            icon: "success",
            confirmButtonText: "OK",
          });
          setDescDepartment("");
          setNameDepartment("");
          setNameShortDepartment("");
        } else {
          Swal.fire({
            title: "Lỗi",
            text: "Đã xảy ra lỗi khi gửi yêu cầu",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Lỗi",
          text: "Đã xảy ra lỗi khi gửi yêu cầu",
          icon: "error",
          confirmButtonText: "OK",
        });
        // Xử lý lỗi nếu cần
        console.error(error);
      });
  };
  const handleCreateCategory = (e) => {
    e.preventDefault();
    dispatch(
      CallApiCreateCategory({
        headers: { authorization: `Bearer ${authToken}` },
        categoryName: categoryName,
        categoryCode: categoryCode,
        categoryDesc: categoryDesc,
      })
    )
      .then((response) => {
        if (response && response.payload) {
          Swal.fire({
            title: "Thành công",
            text: "Chủ đề đã tạo thành công",
            icon: "success",
            confirmButtonText: "OK",
          });
          setDescDepartment("");
          setNameDepartment("");
          setNameShortDepartment("");
        } else {
          Swal.fire({
            title: "Lỗi",
            text: "Đã xảy ra lỗi khi gửi yêu cầu",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Lỗi",
          text: "Đã xảy ra lỗi khi gửi yêu cầu",
          icon: "error",
          confirmButtonText: "OK",
        });
        // Xử lý lỗi nếu cần
        console.error(error);
      });
  };
  return (
    <section className="action-page">
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          height: "40px",
          padding: "10px 20px",
          lineHeight: "20px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
          boxShadow: "#EDEDED 0px 2px 2px 0px",
        }}
      >
        <Link
          underline="hover"
          to="/admin/home"
          style={{
            textDecoration: "none",
            color: "#777777",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaHome />
          <span
            className="text-bread"
            style={{ textTransform: "uppercase", fontSize: "13px" }}
          >
            Trang chủ
          </span>
        </Link>
        <Link
          underline="hover"
          to="/admin/thongbao/tao"
          style={{
            textDecoration: "none",
            color: "#777777",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span
            className="text-bread"
            style={{ textTransform: "uppercase", fontSize: "13px" }}
          >
            Thông báo - Thao tác
          </span>
        </Link>
      </Breadcrumbs>
      <section className="action-body">
        <section className="action-container">
          <div className="left">
            <div
              className="item"
              onClick={() => setIsActive(1)}
              style={{ borderRight: isActive === 1 ? "5px solid #e74c3c" : "" }}
            >
              <p>Tạo Khoa</p>
            </div>
            <div
              className="item"
              onClick={() => setIsActive(2)}
              style={{ borderRight: isActive === 2 ? "5px solid #e74c3c" : "" }}
            >
              <p>Tạo Phòng/Ban</p>
            </div>
            <div
              className="item"
              onClick={() => setIsActive(3)}
              style={{ borderRight: isActive === 3 ? "5px solid #e74c3c" : "" }}
            >
              <p>Tạo Chủ đề</p>
            </div>
          </div>
          {isActive === 1 && <CategoryComponent />}
          {/* <div className="right">
            {isActive === 1 && (
              <>
                <h3>Nhập thông tin về Khoa</h3>
                <div className="item">
                  <label>
                    Nhập tên Khoa <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ padding: "10px", outline: "none" }}
                    value={nameFaculty}
                    onChange={(e) => setNameFaculty(e.target.value)}
                  ></input>
                </div>
                <div className="item">
                  <label>
                    Nhập tên viết tắt của Khoa
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ padding: "10px", outline: "none" }}
                    value={nameShortFaculty}
                    onChange={(e) => setNameShortFaculty(e.target.value)}
                  ></input>
                </div>
                <div className="item">
                  <label>
                    Mô tả về Khoa <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    value={descFaculty}
                    onChange={(e) => setDescFaculty(e.target.value)}
                    style={{
                      resize: "none",
                      padding: "10px",
                      outline: "none",
                      height: "150px",
                    }}
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button onClick={handleCreateFaculty}>
                    <FaPen />
                    Tạo
                  </button>
                </div>
              </>
            )}
            {isActive === 2 && (
              <>
                <h3>Nhập thông tin về Phòng/Ban</h3>
                <div className="item">
                  <label>
                    Nhập tên Phòng/Ban <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ padding: "10px", outline: "none" }}
                    value={nameDepartment}
                    onChange={(e) => setNameDepartment(e.target.value)}
                  ></input>
                </div>
                <div className="item">
                  <label>
                    Nhập tên viết tắt của Phòng/Ban{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ padding: "10px", outline: "none" }}
                    value={nameShortDepartment}
                    onChange={(e) => setNameShortDepartment(e.target.value)}
                  ></input>
                </div>
                <div className="item">
                  <label>
                    Mô tả về Phòng/Ban <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    style={{
                      resize: "none",
                      padding: "10px",
                      outline: "none",
                      height: "150px",
                    }}
                    value={descDepartment}
                    onChange={(e) => setDescDepartment(e.target.value)}
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button onClick={handleCreateDepartment}>
                    <FaPen />
                    Tạo
                  </button>
                </div>
              </>
            )}
            {isActive === 3 && (
              <>
                <h3>Nhập thông tin về Chủ đề</h3>
                <div className="item">
                  <label>
                    Nhập tên Chủ đề <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ padding: "10px", outline: "none" }}
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  ></input>
                </div>
                <div className="item">
                  <label>
                    Nhập tên viết tắt của Chủ đề
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ padding: "10px", outline: "none" }}
                    value={categoryCode}
                    onChange={(e) => setCategoryCode(e.target.value)}
                  ></input>
                </div>
                <div className="item">
                  <label>
                    Mô tả về Chủ đề <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    value={categoryDesc}
                    onChange={(e) => setCategoryDesc(e.target.value)}
                    style={{
                      resize: "none",
                      padding: "10px",
                      outline: "none",
                      height: "150px",
                    }}
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button onClick={handleCreateCategory}>
                    <FaPen />
                    Tạo
                  </button>
                </div>
              </>
            )}
          </div> */}
        </section>
      </section>
    </section>
  );
};

export default Action;
