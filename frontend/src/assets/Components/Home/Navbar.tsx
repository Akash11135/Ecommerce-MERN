import { IconLogout, IconSearch, IconUser } from "@tabler/icons-react";
import useLogout from "../../../hooks/AuthHooks/useLogout";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { UserContext, UserContextType } from "../../../Context/authContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext) as UserContextType;
  const { logMsg, logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    if (logMsg?.msg.includes("logged out successfully")) {
      localStorage.removeItem("user");
      toast.success(logMsg?.msg);
      window.location.reload();
    } else if (logMsg) {
      toast.error(logMsg?.msg);
    }
  }, [logMsg]);

  const content = (
    <div className="flex justify-between h-16 bg-black">
      <div className="flex items-center ml-4">Just Shop.</div>
      <form className="w-1/2 flex gap-3 items-center">
        <input
          type="text"
          placeholder="Search"
          className=" w-full p-3 rounded-3xl outline-none border-none "
        />
        <IconSearch />
      </form>
      <div className="flex h-full items-center gap-10 mr-4">
        {user ? (
          <div className="inline-flex gap-4 border border-neutral-300 p-2 rounded-3xl hover:bg-neutral-500 cursor-pointer">
            <span>{user.fullName}</span>
            <IconUser
              className="bg-white text-black rounded-full  "
              onClick={() => navigate("/profile")}
            />
          </div>
        ) : (
          <IconUser
            className="cursor-pointer"
            onClick={() => navigate("/login")}
          />
        )}
        <IconLogout onClick={handleLogout} className="cursor-pointer" />
      </div>
    </div>
  );
  return content;
};

export default Navbar;
