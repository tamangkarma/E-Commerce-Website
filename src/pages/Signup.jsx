import axios from 'axios'
import InputField from '../components/input'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from 'react'



const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
    }

    const {
            register,
            watch,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const password = watch('password');

         const sendatatoApi = async(data)=>{
     try {
  const response = await axios.post("http://localhost:3000/user/signup", data, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  toast.success(response.data.message);
} catch (error) {
  console.error("Error:", error);
  toast.error("Error creating user");
}

  }

    return (
        <>
            <div className='p-5 mx-auto border shadow-2xl sm:w-96 md:w-96 lg:w-96 w-80 my-10 rounded-2xl'>
                <ToastContainer />
                <form onSubmit={handleSubmit((data) => sendatatoApi(data))} >
                    <h1 className='sm:text-3xl text-2xl font-bold  '>Signup</h1>
                    <p className='text-sm sm:text-base'>It's quick and easy</p>
                    <div className='mt-5'>
                        <InputField
                            type="text" 
                            id="firstName"
                            {...register('firstName', {
                                required: 'First Name is required',
                            })
                            }
                            placeholder={'First Name'}
                        />
                        {
                            errors.firstName && (
                                <span className='text-sm text-red-500'>
                                    {errors.firstName.message}
                                </span>
                            )
                        }

                        <InputField
                            type="text" 
                            id="lastName"
                            {...register('lastName', {
                                required: 'Last Name is required',
                            })
                            }
                            placeholder={'Last Name'}
                            
                        />
                        {
                            errors.lastName && (
                                <span className='text-sm text-red-500'>
                                    {errors.lastName.message}
                                </span>
                            )
                        }


                        <InputField
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


                        <InputField
                            type={showPassword ? "text" : "password"}
                            id="password"
                            {...register("password",{
                                required: 'Password is required',
                                minLength:{
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                }
                            })}
                            placeholder={'Password'}
                        />
                        <div className='absolute flex items-center  mt-[-28px] ml-28 sm:ml-48  lg:ml-48'>
                            <span onClick={() => setShowPassword(!showPassword)} className='absolute ml-32  cursor-pointer'>
                                {showPassword ? <RxEyeOpen size={18} color='gray' /> : <LuEyeClosed size={18} color='gray' />}
                            </span>
                        </div>
                        {
                            errors.password && (
                                <span className='text-sm text-red-500'>
                                    {errors.password.message}
                                </span>
                            )
                        }

                        <InputField
                            type="password" 
                            id="confirmPassword"
                            {...register("confirmPassword",{
                                required: 'Confirm Password is required',
                                validate: (value) => 
                                    value === password || 'Passwords do not match',
                            }
                            )}
                            placeholder={'Confirm Password'}
                        />   
                            
                            {
                                errors.confirmPassword && (
                                    <span className='text-sm text-red-500'>
                                        {errors.confirmPassword.message}
                                    </span>
                                )
                            }
                    </div>
                    <div>
                        <button className='w-full h-10 mt-5 text-white bg-red-600 rounded-2xl'>Sign Up</button>
                        <p className='mt-4 text-center'>Already have an account? <button onClick={handleClick} className='text-red-600'>Log In</button></p>
                    </div>
                    <div className='flex items-center my-6 text-gray-500 '>
                        <hr className='flex-grow border-t border-gray-300' />
                        <span className='mx-4 text-sm'>or</span>
                        <hr className='flex-grow border-t border-gray-300' /> 
                    </div>  

                    <div className='border border-black rounded-2xl'>
                        <button className='w-full h-10 text-black rounded-2xl'>
                            <img className='absolute mx-8 sm:mx-16 lg:mx-16 h-7' src="/public/google icon png.png" alt="" />
                            Sign Up with Google
                        </button>
                    </div>                  
                </form>
            </div>
        </>
)
}

export default Signup
