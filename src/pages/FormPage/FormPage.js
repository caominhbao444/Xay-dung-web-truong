import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { Image, Table, Tag } from "antd";
import Select from "@mui/material/Select";
import { FaHome, FaUndo, FaRegCheckCircle, FaEnvelope } from "react-icons/fa";
import { Card, Grid } from "@mui/material";

const FormType = [
  {
    title: "Xem xét điểm trung bình (học kỳ/tích lũy/môn học)",
    value: "1",
    path: "/taodon/DonXinDiemTrungBinh",
  },
  {
    title: "Đơn xin cấp bảng điểm",
    value: "2",
    path: "/taodon/DonXinCapBangDiem",
  },
];

const FormPage = () => {
  const [age, setAge] = React.useState("");
  const [formType, setFormType] = React.useState("");
  const navigate = useNavigate();
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const paginationConfig = {
    className: "centered-pagination",
  };
  const [listRequest, setListRequest] = React.useState([
    {
      index: 1,
      type: "Đơn xin cấp bảng điểm",
      dateCreate: "06/03/2023",
      dateHandle: "08/03/2023",
      dateResult: "08/03/2023",
      status: "Đã xử lý",
      note: "Bảng điểm tích lũy - Kết quả: Đồng ý - Ghi chú: Sinh viên nhận bảng điểm từ sau 16H00 ngày 08/3/2023 tại phòng Đại học (A0005) (trong khung giờ làm việc hành chính 8H -11H30, 13H-17H) . Mọi trường hợp nhận trễ quá hai tuần sẽ không được giải quyết",
    },
    {
      index: 2,
      type: "Đơn xin cấp bảng điểm",
      dateCreate: "06/03/2023",
      dateHandle: "08/03/2023",
      dateResult: "08/03/2023",
      status: "Đang xử lý",
      note: "Bảng điểm tích lũy - Kết quả: Đồng ý - Ghi chú: Sinh viên nhận bảng điểm từ sau 16H00 ngày 08/3/2023 tại phòng Đại học (A0005) (trong khung giờ làm việc hành chính 8H -11H30, 13H-17H) . Mọi trường hợp nhận trễ quá hai tuần sẽ không được giải quyết",
    },
    {
      index: 3,
      type: "Đơn xin cấp bảng điểm",
      dateCreate: "06/03/2023",
      dateHandle: "08/03/2023",
      dateResult: "08/03/2023",
      status: "Từ chối",
      note: "Bảng điểm tích lũy - Kết quả: Đồng ý - Ghi chú: Sinh viên nhận bảng điểm từ sau 16H00 ngày 08/3/2023 tại phòng Đại học (A0005) (trong khung giờ làm việc hành chính 8H -11H30, 13H-17H) . Mọi trường hợp nhận trễ quá hai tuần sẽ không được giải quyết",
    },
    {
      index: 4,
      type: "Đơn xin cấp bảng điểm",
      dateCreate: "06/03/2023",
      dateHandle: "08/03/2023",
      dateResult: "08/03/2023",
      status: "Đang xử lý",
      note: "Bảng điểm tích lũy - Kết quả: Đồng ý - Ghi chú: Sinh viên nhận bảng điểm từ sau 16H00 ngày 08/3/2023 tại phòng Đại học (A0005) (trong khung giờ làm việc hành chính 8H -11H30, 13H-17H) . Mọi trường hợp nhận trễ quá hai tuần sẽ không được giải quyết",
    },
  ]);
  return (
    <FormPageContainer>
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
          to="/home"
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
          <span className="text-bread">Trang chủ</span>
        </Link>
      </Breadcrumbs>
      <Grid
        container
        style={{
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
        }}
        className="grid-container"
      >
        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: "0 15px", boxSizing: "border-box" }}
        >
          <Link to="/danopdon" style={{}}>
            <Card
              style={{
                padding: "15px",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <span className="text-number">1</span>
                  <span className="text-title">Đơn đã nộp</span>
                </div>
                <FaEnvelope />
              </div>
              <div
                style={{
                  height: "20px",
                  width: "100%",
                  backgroundColor: "#999999",
                  borderRadius: "4px",
                }}
              ></div>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: "0 15px", boxSizing: "border-box" }}
        >
          <Link to="/dondangxuly" style={{}}>
            <Card
              style={{
                padding: "15px",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <span className="text-number">1</span>
                  <span className="text-title">Đơn đang xử lý</span>
                </div>
                <FaUndo />
              </div>
              <div
                style={{
                  height: "20px",
                  width: "100%",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                }}
              ></div>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          style={{ padding: "0 15px", boxSizing: "border-box" }}
        >
          <Link to="/dondaxuly" style={{}}>
            <Card
              style={{
                padding: "15px",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <span className="text-number">1</span>
                  <span className="text-title">Đơn đã xử lý</span>
                </div>
                <FaRegCheckCircle style={{ color: "#5cb85c" }} />
              </div>
              <div
                style={{
                  height: "20px",
                  width: "100%",
                  backgroundColor: "#5cb85c",
                  borderRadius: "4px",
                }}
              ></div>
            </Card>
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: "0 20px 20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
        className="grid-container"
      >
        <Grid
          item
          xs={12}
          md={8}
          style={{
            boxSizing: "border-box",
            width: "100%",
            height: "40px",
            padding: "0 15px",
          }}
        >
          <Grid
            container
            style={{ border: "1px solid #777777", borderRadius: "5px" }}
          >
            <Grid item xs={10} md={10}>
              <Select
                sx={{
                  "& fieldset": {
                    border: "none",
                  },
                }}
                classes={{ root: "select-root", focused: "select-focused" }}
                style={{
                  width: "100%",
                  height: "40px",
                  outline: "none",
                  borderRadius: "5px 0 0 5px",
                  color: "#777777",
                  padding: "0px 5px",
                }}
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Chọn loại đơn</em>
                </MenuItem>
                {FormType.map((item) => (
                  <MenuItem value={item} key={item.value}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={2} md={2}>
              <button
                onClick={() => navigate(`${formType.path}`)}
                style={{
                  height: "40px",
                  display: "block",
                  width: "100%",
                  boxSizing: "border-box",
                  lineHeight: "20px",
                  border: "none",
                  borderRadius: "0 5px 5px 0",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "#0067ac",
                }}
              >
                Tạo mới
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ padding: "0 20px 20px", boxSizing: "border-box" }}
      >
        <h4
          style={{
            padding: "0 15px",
            margin: "0 0 10px",
            color: "#777777",
            fontSize: "24px",
            fontWeight: "300",
            lineHeight: "26.4px",
          }}
        >
          Danh sách đơn
        </h4>
        <Grid
          item
          xs={12}
          md={12}
          style={{ padding: "0 15px", boxSizing: "border-box" }}
        >
          <Table
            columns={[
              { title: "STT", dataIndex: "index" },
              {
                title: "Loại đơn",
                dataIndex: "type",
              },
              {
                title: "Ngày tạo",
                dataIndex: "dateCreate",
              },
              {
                title: "Ngày xử lý",
                dataIndex: "dateHandle",
              },
              {
                title: "Ngày trả kết quả",
                dataIndex: "dateResult",
              },
              {
                title: "Trạng thái",
                dataIndex: "status",
                render: (status) => {
                  if (status === "Đang xử lý") {
                    return <Tag color="green">{status}</Tag>;
                  } else if (status === "Đã xử lý") {
                    return <Tag color="green">{status}</Tag>;
                  } else if (status === "Từ chối") {
                    return <Tag color="red">{status}</Tag>;
                  }
                },
              },
              {
                title: "Ghi chú",
                dataIndex: "note",
              },
            ]}
            dataSource={listRequest}
            onChange={onChange}
            locale={{
              triggerDesc: "Giảm dần",
              triggerAsc: "Tăng dần",
              cancelSort: "Hủy",
              emptyText: "Không có dữ liệu",
            }}
            bordered
            style={{ fontSize: "13px" }}
            pagination={paginationConfig}
          ></Table>
        </Grid>
      </Grid>
    </FormPageContainer>
  );
};

const FormPageContainer = styled.section`
  width: 100%;
  font-size: 16px;
  min-height: 100vh;
  color: #fff;
  box-sizing: border-box;

  .text-bread {
    font-size: 15px;
    color: #777777;
  }
  .text-number {
    font-size: 25px;
    color: #777777;
  }
  .text-title {
    font-size: 13px;
    color: #777777;
  }

  @media screen and (max-width: 600px) {
    .text-bread {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 901px) {
    .grid-container {
      gap: 10px;
    }
  }
`;
export default FormPage;
