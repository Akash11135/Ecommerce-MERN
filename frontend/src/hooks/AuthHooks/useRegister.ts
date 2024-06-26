import axios from "axios";
type Regresponse = {
  msg: string;
  statusCode: number;
};
const useRegister = async (
  fullName: string,
  email: string,
  password: string
) => {
  try {
    const responseBody: Register = {
      fullName: fullName,
      email: email,
      password: password,
    };
    const resp = await axios.post(
      "http://localhost:3500/user/auth/register",
      responseBody,
      { withCredentials: true }
    );
    if (resp) {
      const data: Regresponse = resp.data;
      return data;
    }
  } catch (error) {
    console.log("error in useRegister", error);
  }
};

export default useRegister;
