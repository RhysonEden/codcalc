import axios from "axios";

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post("/api/users/login", {
      username,
      password,
    });
    data;
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user.username);
    localStorage.setItem("admin", data.user.admin);
    localStorage.setItem("id", data.user.id);
    return data;
  } catch (error) {
    error;
    throw error;
  }
}

export async function registerUser(username, password, email) {
  "user", username, password, email;
  try {
    const { data } = await axios.post("/api/users/register", {
      username,
      password,
      email,
    });
    data;
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user.username);
    localStorage.setItem("id", data.user.id);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function userUpdate(username, password) {
  "update", username, password;
  try {
    const { data } = await axios.post("api/users/update", {
      username,
      password,
    });
    data;
    return data;
  } catch (error) {
    throw error;
  }
}

export async function adminUpdate(username, admin) {
  "update", username, admin;
  try {
    const { data } = await axios.post("api/users/admin", {
      username,
      admin,
    });
    data;
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
