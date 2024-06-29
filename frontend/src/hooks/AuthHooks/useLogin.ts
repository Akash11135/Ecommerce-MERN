import axios from "axios";
type loginResp = {
  msg: string;
  statusCode: number;
  payload: Object;
};
const useLogin = async (email: string, password: string) => {
  try {
    const responseBody: User = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      "http://localhost:3500/user/auth/login",
      responseBody,
      { withCredentials: true }
    );
    if (response) {
      const data: loginResp = response.data;
      return data;
    }
  } catch (error) {
    console.log("error in useLogin hook.");
  }
};

export default useLogin;
