import { Button, Card, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const ButtonStyle = styled(Button)({
  backgroundColor: "#207dc3",
  width: "100%",
  color: "white",
  fontWeight: "bold",
  border: "1px solid #207dc3",
  "&:hover": {
    backgroundColor: "white",
    border: "1px solid #207dc3",
    color: "#207dc3",
  },
});
function Login() {
  const navigate = useNavigate();
  return (
    <LoginContainer
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Grid
        container
        style={{
          backgroundColor: "white",
          width: "80%",
          height: "500px",
        }}
      >
        <Grid item xs={6} md={6} className="image-container">
          <img
            src="https://images.unsplash.com/photo-1603852452516-972df21fccac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG8lMjBjaGklMjBtaW5ofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="My d"
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              gap: "20px",
            }}
          >
            <h3>FIS GS</h3>
            <h2>Phần mềm quản lý sản phẩm</h2>
            <TextField
              name="username"
              label="Tên đăng nhập"
              InputLabelProps={{ style: { color: `black` } }}
              placeholder="Nhập tên đăng nhập của bạn"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="passwords"
              label="Mật khẩu"
              type="password"
              InputLabelProps={{ style: { color: `black` } }}
              variant="outlined"
              fullWidth
            />
            <ButtonStyle onClick={() => navigate("/home")}>
              Đăng nhập
            </ButtonStyle>
            <span
              style={{ cursor: "pointer", padding: "5px", color: "#207dc3" }}
            >
              Quên mật khẩu
            </span>
          </Grid>
        </Grid>
      </Grid>
    </LoginContainer>
  );
}
const LoginContainer = styled(Card)`
  .image-container {
    position: relative;
    width: 100%; /* Set the width of the container */
    height: 500px; /* Set the height of the container */

    overflow: hidden; /* Hide any content outside the container */
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  }
  .btn_login {
    background-color: red;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Login;
