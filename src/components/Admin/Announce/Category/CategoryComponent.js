import React, { useState } from "react";
import "./CategoryComponent.scss";
import { styled } from "@mui/material/styles";
import { FaPen, FaRemoveFormat, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import {
  CallApiCreateFaculty,
  CallApiGetAllFaculty,
  CallApiDeleteFaculty,
  CallApiUpdateFaculty,
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
const CategoryComponent = () => {
  const [edit, setEdit] = React.useState(false);
  const [nameFaculty, setNameFaculty] = useState("");
  const [nameShortFaculty, setNameShortFaculty] = React.useState("");
  const [descFaculty, setDescFaculty] = React.useState("");
  const [editName, setEditName] = React.useState("");
  const [editCode, setEditCode] = React.useState("");
  const [editDesc, setEditDesc] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("authToken");
  const listFaculty = useSelector((state) => state.announce.listFaculty);
  return <div>CategoryComponent</div>;
};

export default CategoryComponent;
