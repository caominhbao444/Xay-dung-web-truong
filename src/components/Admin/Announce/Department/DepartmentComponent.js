import React, { useState } from "react";
import "./DepartmentComponent.scss";
import { styled } from "@mui/material/styles";
import { FaPen, FaRemoveFormat, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import {
  CallApiCreateDepartment,
  CallApiGetAllDepartment,
  CallApiDeleteDepartment,
  CallApiUpdateDepartment,
} from "../../../../features/announceSlice";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#fff",
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#0062cc",
    boxShadow: "none",
    color: "#0063cc",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const CloseButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  color: "#fff",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#e74c3c",
  borderColor: "#e74c3c",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#fff",
    color: "#e74c3c",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#fff",
    color: "#e74c3c",
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const EditButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#fff",
  backgroundColor: "#66bb6a",
  borderColor: "#66bb6a",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#66bb6a",
    boxShadow: "none",
    color: "#66bb6a",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
    color: "#66bb6a",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const DepartmentComponent = () => {
  const [edit, setEdit] = React.useState(false);
  const [nameDepartCenter, setNameDepartCenter] = useState("");
  const [nameShortDepartCenter, setNameShortDepartCenter] = React.useState("");
  const [descDepartCenter, setDescDepartCenter] = React.useState("");
  const [editName, setEditName] = React.useState("");
  const [editCode, setEditCode] = React.useState("");
  const [editDesc, setEditDesc] = React.useState("");
  const [numberPage, setNumberPage] = React.useState(0);
  const [pagination, setPagination] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("authToken");
  const listDepartment = useSelector((state) => state.announce.listDepartment);
  const handleCreateFaculty = (e) => {
    e.preventDefault();
    dispatch(
      CallApiCreateDepartment({
        headers: { authorization: `Bearer ${authToken}` },
        departCenterName: nameDepartCenter,
        departCenterCode: nameShortDepartCenter,
        departCenterDesc: descDepartCenter,
      })
    )
      .then(() => {
        Swal.fire({
          title: "Thành công",
          text: "Đăng ký Phòng/Ban thành công",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(() => {
        setDescDepartCenter("");
        setNameDepartCenter("");
        setNameShortDepartCenter("");
        dispatch(
          CallApiGetAllDepartment({
            headers: { authorization: `Bearer ${authToken}` },
            pageNumber: page,
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
      CallApiDeleteDepartment({
        headers: { authorization: `Bearer ${authToken}` },
        id: id,
      })
    )
      .then(() => {
        Swal.fire({
          title: "Thành công",
          text: "Phòng/Ban đã được xóa",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(() => {
        dispatch(
          CallApiGetAllDepartment({
            headers: { authorization: `Bearer ${authToken}` },
            pageNumber: page,
          })
        );
      })
      .catch((error) => {
        // Xử lý lỗi nếu cần
        console.error(error);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      CallApiUpdateDepartment({
        headers: { authorization: `Bearer ${authToken}` },
        id: selectedItem.id,
        departCenterName: editName,
        departCenterCode: editCode,
        departCenterDesc: editDesc,
      })
    )
      .then(() => {
        setOpen(false);
        Swal.fire({
          title: "Thành công",
          text: "Cập nhật Khoa thành công",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(() => {
        setDescDepartCenter("");
        setNameDepartCenter("");
        setNameShortDepartCenter("");
        dispatch(
          CallApiGetAllDepartment({
            headers: { authorization: `Bearer ${authToken}` },
            pageNumber: page,
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
    console.log(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };
  const handleChange = (event, value) => {
    setPage(value - 1);
    setPagination(true);
  };
  React.useEffect(() => {
    if (pagination) {
      dispatch(
        CallApiGetAllDepartment({
          headers: { authorization: `Bearer ${authToken}` },
          pageNumber: page,
        })
      );
    }
  }, [page]);
  React.useEffect(() => {
    dispatch(
      CallApiGetAllDepartment({
        headers: { authorization: `Bearer ${authToken}` },
        pageNumber: page,
      })
    );
  }, []);
  React.useEffect(() => {
    if (listDepartment) {
      setNumberPage(listDepartment.totalPages);
      if (listDepartment) {
        setNumberPage(listDepartment.totalPages);
        if (
          listDepartment.numberOfElements === 0 &&
          listDepartment.totalPages > 0
        ) {
          dispatch(
            CallApiGetAllDepartment({
              headers: { authorization: `Bearer ${authToken}` },
              pageNumber: page - 1,
            })
          );
        }
      }
    }
  }, [listDepartment]);
  return (
    <>
      <div className="right-second">
        <h3>Quản lý Phòng/Ban</h3>
        <div className="first">
          <div className="item item-first">
            <label>Nhập tên Phòng/Ban</label>
            <input
              value={nameDepartCenter}
              onChange={(e) => setNameDepartCenter(e.target.value)}
            ></input>
          </div>
          <div className="item item-second">
            <label>Nhập tên rút gọn</label>
            <input
              value={nameShortDepartCenter}
              onChange={(e) => setNameShortDepartCenter(e.target.value)}
            ></input>
          </div>
          <div className="item item-third">
            <label>Mô tả</label>
            <input
              value={descDepartCenter}
              onChange={(e) => setDescDepartCenter(e.target.value)}
            ></input>
          </div>
          <div className="item item-fourth">
            <label style={{ opacity: "0" }}>Mô tả</label>
            <button onClick={handleCreateFaculty}>Tạo</button>
          </div>
        </div>
        <h3>Danh sách Phòng/Ban</h3>
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
            {/* <tr>
          <td colspan="5" style={{ textAlign: "center" }}>
            Không có dữ liệu
          </td>
        </tr> */}
            {listDepartment && listDepartment.numberOfElements === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  Không có dữ liệu
                </td>
              </tr>
            )}
            {listDepartment.numberOfElements !== 0 &&
              listDepartment.content &&
              listDepartment.content.map((item, index) => {
                return (
                  <React.Fragment key={index + 1}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.departCenterName}</td>
                      <td>{item.departCenterCode}</td>
                      <td>{item.departCenterDesc}</td>
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
                  </React.Fragment>
                );
              })}
            <Dialog
              open={open}
              onClose={handleClose}
              className="dialog-container"
              sx={{
                "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                  width: "400px", /// edit here
                },
              }}
            >
              {selectedItem && (
                <>
                  <DialogTitle
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Chỉnh sửa thông tin
                  </DialogTitle>
                  <DialogContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      paddingTop: "20px",
                      fontSize: "13px",
                    }}
                    className="dialog-content"
                  >
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
                      <label style={{ fontWeight: "bold" }}>Tên</label>
                      {edit ? (
                        <input
                          placeholder={selectedItem.departCenterName}
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          style={{ outline: "none", padding: "5px" }}
                        ></input>
                      ) : (
                        <p style={{ padding: "5px" }}>
                          {selectedItem.departCenterName}
                        </p>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <label style={{ fontWeight: "bold" }}>Mã Khoa</label>
                      {edit ? (
                        <input
                          placeholder={selectedItem.departCenterCode}
                          style={{ outline: "none", padding: "5px" }}
                          value={editCode}
                          onChange={(e) => setEditCode(e.target.value)}
                        ></input>
                      ) : (
                        <p style={{ padding: "5px" }}>
                          {selectedItem.departCenterCode}
                        </p>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <label style={{ fontWeight: "bold" }}>Mô tả</label>
                      {edit ? (
                        <input
                          placeholder={selectedItem.departCenterDesc}
                          style={{ outline: "none", padding: "5px" }}
                          value={editDesc}
                          onChange={(e) => setEditDesc(e.target.value)}
                        ></input>
                      ) : (
                        <p style={{ padding: "5px" }}>
                          {selectedItem.departCenterDesc}
                        </p>
                      )}
                    </div>
                  </DialogContent>
                  <DialogActions style={{ padding: "0 24px 20px" }}>
                    {edit ? (
                      <EditButton
                        variant="contained"
                        disableRipple
                        onClick={(e) => handleUpdate(e)}
                      >
                        Cập nhật
                      </EditButton>
                    ) : (
                      <BootstrapButton
                        style={{ display: edit ? "none" : "block" }}
                        onClick={() => setEdit(true)}
                        variant="contained"
                      >
                        Chỉnh sửa
                      </BootstrapButton>
                    )}

                    <CloseButton
                      onClick={handleClose}
                      variant="contained"
                      disableRipple
                    >
                      Đóng
                    </CloseButton>
                  </DialogActions>
                </>
              )}
            </Dialog>
          </tbody>
        </table>
        {listDepartment && (
          <Pagination
            count={numberPage}
            page={page + 1}
            onChange={handleChange}
            style={{ display: "flex", justifyContent: "center" }}
          />
        )}
      </div>
    </>
  );
};

export default DepartmentComponent;
