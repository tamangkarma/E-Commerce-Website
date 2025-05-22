import InputField from '../components/input'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import { http } from '../config/axios'
const Login = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/signup')
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
    try {
      const response = await http.post("/user/login", data)
      console.log(response)
      toast.success(response.data.message);
      const accessToken = response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user))
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
    <div className='flex flex-col items-center justify-center min-h-screen'>

    <h1 className='text-3xl text-center bold'>Welcome to Login Page</h1>
        <div className='p-5 mx-auto mt-20 border shadow-2xl w-96 h-96 rounded-2xl'>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center mt-8'>
                <h1 className='mb-1 text-3xl font-bold text-center'>Login</h1>
                <div>
                    <InputField
                        title={"Email"} 
                        type="text" 
                        id="email"
                        {...register("email",{
                            required: 'Email is required',
                            pattern:{
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address' 
                            }
                        })
                        }
                        placeholder={'Email'} 
                    />
                    {
                        errors.email && (
                            <span className='text-sm text-red-500'>
                                {errors.email.message}
                            </span>
                        )
                    }
                </div>

                <div>
                    <InputField
                        title={"Password"} 
                        type="password" 
                        id="password"
                        {...register("password",{
                            required: 'Password is required',
                            minLength:{
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })
                        }
                        placeholder={'Password'}
                    />
                    {
                        errors.password && (
                            <span className='text-sm text-red-500'>
                                {errors.password.message}
                            </span>
                        )
                    }
                </div>

                <button type="submit" className='w-full p-2 mt-4 text-white bg-red-600 rounded-2xl'>Login</button>
                <p className='mt-4 text-center'>Don't have an account? <button onClick={handleClick} className='text-red-600'>Sign Up</button></p>
            </form>
        </div>  
    </div>
    
    </>
)
}

export default Login
