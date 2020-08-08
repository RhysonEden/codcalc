import axios from "axios";

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post("/api/users/login", {
      username,
      password,
    });
    console.log(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user.username);
    localStorage.setItem("seller", data.user.seller);
    localStorage.setItem("id", data.user.id);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function registerUser(username, password, email) {
  try {
    const { data } = await axios.post("/api/users/register", {
      username,
      password,
      email,
    });
    console.log(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user.username);
    localStorage.setItem("id", data.user.id);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserInfo() {
  try {
    const user = await axios.get("/api/users/getUserInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}
