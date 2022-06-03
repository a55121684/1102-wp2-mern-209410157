import axios from "axios";

const TesFetchUseProxy_57 = async () => {
  const resp = await fetch("/api/data.json");
  const data_local_json = await resp.json();
  console.log("local json data", data_local_json);

  const response = await fetch("/api/v1");
  const data1 = await response.json();
  console.log("fetch data1", data1);

  const data2 = await axios.get("/api/v1");
  console.log("axios data2", data2.data);

  const currentUser = {
    name: "游志信",
    email: "209410157@gms.tku.edu.tw",
    password: "test123",
  };

  try {
    const { data } = await axios.post(
      "/api/v1/auth_57/register_57",
      currentUser
    );
    console.log("register data", data);
  } catch (err) {
    console.log(err);
  }
};

export default TesFetchUseProxy_57;
