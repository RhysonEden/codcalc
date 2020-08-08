import axios from "axios";

export async function getCompanies() {
  try {
    const company = await axios.get("/api/company");
    return company;
  } catch (error) {
    throw error;
  }
}
