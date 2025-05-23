
const InputField = ({name,title,id, placeholder, className, type, ...data}) => (
    <div className="w-[350px]">
            <label 
                htmlFor={name}
                className="text-sm font-medium"
            >
                {title}
            </label>

            <input 
                type={type} 
                id={id}
                name={name}
                {...data}
                placeholder={placeholder} 
                className={` my-2 w-[17rem] sm:w-full md:w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring focus:ring-blue-500 ${className}` }
            />

    </div>
);

export default InputField;
