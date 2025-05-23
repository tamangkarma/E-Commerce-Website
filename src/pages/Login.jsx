import InputField from "../components/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { http } from "../config/axios";
import { useState } from "react";
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await http.post("/user/login", data);
      console.log(response);
      toast.success(response.data.message);
      const accessToken = response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response.status === 404) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="lg:flex md:flex sm:flex pb-32">
        <div className="p-5 mx-auto mt-32 border shadow-2xl w-72  sm:w-96 lg:w-96 md:w-[23.5rem] h-96 rounded-2xl">
          <ToastContainer />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center mt-8"
          >
            <h1 className="mb-1 text-3xl font-bold text-center">Login</h1>
            <div>
              <InputField
                type="text"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder={"Email"}
                className={"ml-10 sm:ml-0 md:ml-0 lg:ml-0"}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <InputField
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder={"Password"}
                className={"ml-10 sm:ml-0 md:ml-0 lg:ml-0"}
              />
              <div className="absolute flex items-center mt-[-28px] ml-28 sm:ml-48 lg:ml-36">
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute ml-[10.8rem] sm:ml-[8rem] md:ml-[8.2rem] lg:ml-[11rem] cursor-pointer"
                >
                  {showPassword ? (
                    <RxEyeOpen size={18} color="gray" />
                  ) : (
                    <LuEyeClosed size={18} color="gray" />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-2 mt-4 text-white bg-red-600 rounded-2xl"
            >
              Login
            </button>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <button onClick={handleClick} className="text-red-600">
                Sign Up
              </button>
            </p>
            <div className="border border-black rounded-2xl mt-2 w-full">
              <button className="w-full h-10 text-black rounded-2xl p-2">
                <img
                  className="absolute ml-3 sm:ml-14 lg:ml-14 h-7 "
                  src="/public/google icon png.png"
                  alt=""
                />
                Sign Up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
