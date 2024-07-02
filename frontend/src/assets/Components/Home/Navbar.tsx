import { IconLogout, IconSearch, IconUser } from "@tabler/icons-react";
import useLogout from "../../../hooks/AuthHooks/useLogout";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { UserContext, UserContextType } from "../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import CategoryPage from "./CategoryPage";
type navbarProps = {
  setSearch: (search: string | null) => void;
};
const Navbar = ({ setSearch }: navbarProps) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext) as UserContextType;

  const { logMsg, logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    if (logMsg?.msg.includes("logged out successfully")) {
      localStorage.removeItem("user");
      setUser(null);
      toast.success(logMsg?.msg);
    } else if (logMsg) {
      toast.error(logMsg?.msg);
    }
  }, [logMsg]);

  const content = (
    <div className="flex flex-col ">
      <div className="flex justify-between h-16 bg-black">
        <div className="flex items-center ml-4">Just Shop.</div>
        <form className="w-1/2 flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search"
            className=" w-full p-3 rounded-3xl outline-none border-none "
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconSearch />
        </form>
        <div className="flex h-full items-center gap-10 mr-4">
          {user ? (
            <div className="flex items-center gap-4 border border-neutral-300 p-2 rounded-3xl hover:bg-neutral-500 cursor-pointer">
              <div>
                <span>{user.fullName}</span>
              </div>
              <div>
                <IconUser
                  className="bg-white text-black rounded-full  "
                  onClick={() => navigate("/profile")}
                />
              </div>
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
      <div>
        <CategoryPage />
      </div>
    </div>
  );
  return content;
};

export default Navbar;
