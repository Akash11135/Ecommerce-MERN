import { motion } from "framer-motion";
import { Label } from "../../../components/ui/Label";
import { Input } from "../../../components/ui/input";
import { cn } from "../../../utils/cn.ts";
import { AuroraBackground } from "../../../components/ui/aurora-background";

import { useContext, useEffect, useState } from "react";
import useLogin from "../../../hooks/AuthHooks/useLogin.ts";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext, UserContextType } from "../../../Context/authContext.tsx";

export default function Login() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    if (user !== null) {
      navigate("/home");
    }
  }, [user]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response: User = {
      email: email,
      password: password,
    };
    const data = await useLogin(response.email, response.password);
    if (data) {
      if (data.statusCode === 200) {
        toast.success(data.msg);
        localStorage.setItem("user", JSON.stringify(data.payload));
        navigate("/home");
        window.location.reload();
      }
      if (data.statusCode === 400) {
        toast.error(data.msg);
        setEmail("");
        setPassword("");
      }
    }
  };
  return (
    <AuroraBackground className="bg-black ">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative  flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className=" w-[30rem] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg:opacity-5 bg-slate-900 ">
          <div className="w-full text-center">
            <h2 className="font-bold text-xl text-neutral-200">Login</h2>
          </div>
          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>

              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
          <p className="text-white">
            Don't have an account?/<Link to={"/register"}>Register</Link>
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
