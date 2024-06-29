import axios from "axios";
import { useEffect, useState } from "react";
type logout = {
  msg: string;
};
const useLogout = () => {
  const [logMsg, setLogMsg] = useState<logout>();
  const logout = async () => {
    const logData = await axios.get("http://localhost:3500/user/auth/logout", {
      withCredentials: true,
    });
    if (logData) {
      setLogMsg(logData?.data);
    }
  };
  return { logMsg, logout };
};

export default useLogout;
