import React, { useState } from "react";
import "./CategoryComponent.scss";
import { FaPen, FaRemoveFormat, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import {
  CallApiCreateFaculty,
  CallApiGetAllFaculty,
  CallApiDeleteFaculty,
} from "../../../../features/announceSlice";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const CategoryComponent = () => {
  const [edit, setEdit] = React.useState(false);
  const [nameFaculty, setNameFaculty] = useState("");
  const [nameShortFaculty, setNameShortFaculty] = React.useState("");
  const [descFaculty, setDescFaculty] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("authToken");
  const listFaculty = useSelector((state) => state.announce.listFaculty);
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
          text: "Đăng ký khoa thành công",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(() => {
        setDescFaculty("");
        setNameFaculty("");
        setNameShortFaculty("");
        dispatch(
          CallApiGetAllFaculty({
            headers: { authorization: `Bearer ${authToken}` },
          })
        );
      })
      .catch((error) => {
        // Xử lý lỗi nếu cần
        console.error(error);
      });
  };
  const handleDelete = (id, e) => {
    e.preventDefault();
    dispatch(
      CallApiDeleteFaculty({
        headers: { authorization: `Bearer ${authToken}` },
        id: id,
      })
    )
      .then(() => {
        Swal.fire({
          title: "Thành công",
          text: "Khoa đã được xóa",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(() => {
        dispatch(
          CallApiGetAllFaculty({
            headers: { authorization: `Bearer ${authToken}` },
          })
        );
      })
      .catch((error) => {
        // Xử lý lỗi nếu cần
        console.error(error);
      });
  };
  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    dispatch(
      CallApiGetAllFaculty({
        headers: { authorization: `Bearer ${authToken}` },
      })
    );
  }, []);
  return (
    <>
      <div className="right">
        <h3>Quản lý Khoa</h3>
        <div className="first">
          <div className="item item-first">
            <label>Nhập tên Khoa</label>
            <input
              value={nameFaculty}
              onChange={(e) => setNameFaculty(e.target.value)}
            ></input>
          </div>
          <div className="item item-second">
            <label>Nhập tên rút gọn</label>
            <input
              value={nameShortFaculty}
              onChange={(e) => setNameShortFaculty(e.target.value)}
            ></input>
          </div>
          <div className="item item-third">
            <label>Mô tả</label>
            <input
              value={descFaculty}
              onChange={(e) => setDescFaculty(e.target.value)}
            ></input>
          </div>
          <div className="item item-fourth">
            <label style={{ opacity: "0" }}>Mô tả</label>
            <button onClick={handleCreateFaculty}>Tạo</button>
          </div>
        </div>
        <h3>Danh sách Khoa</h3>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Khoa</th>
              <th>Tên viết tắt</th>
              <th>Mô tả</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listFaculty.content &&
              listFaculty.content.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{index}</td>
                      <td>{item.facultyName}</td>
                      <td>{item.facultyCode}</td>
                      <td>{item.facultyDesc}</td>
                      <td>
                        <FaPen
                          className="icon"
                          onClick={() => handleClickOpen(item)}
                        />
                        <FaTrash
                          className="icon-delete"
                          onClick={(e) => handleDelete(item.id, e)}
                        />
                      </td>
                    </tr>
                    <Dialog open={open} onClose={handleClose}>
                      {selectedItem && (
                        <>
                          <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
                          <DialogContent>
                            {/* <input>
                              Faculty Name: {selectedItem.facultyName}
                            </input> */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                              }}
                            >
                              <label>Tên</label>
                              <input
                                style={{ outline: "none", padding: "5px" }}
                              ></input>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                              }}
                            >
                              <label>Tên</label>
                              <input
                                style={{ outline: "none", padding: "5px" }}
                              ></input>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                              }}
                            >
                              <label>Tên</label>
                              <input
                                style={{ outline: "none", padding: "5px" }}
                              ></input>
                            </div>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cập nhật</Button>
                            <Button onClick={handleClose}>Đóng</Button>
                          </DialogActions>
                        </>
                      )}
                    </Dialog>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryComponent;
