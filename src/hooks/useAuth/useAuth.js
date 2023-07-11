import jwtDecode from "jwt-decode";
const useAuth = () => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    const decoded = jwtDecode(authToken);
    const { username, fullname, faculty, roleName } = decoded;
    return { username, fullname, faculty, roleName };
  }
  return { username: "", fullname: "", faculty: "", roleName: "" };
};

export default useAuth;
