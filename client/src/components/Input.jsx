const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-5">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-blue-400" />
      </div>
      <input
        {...props}
        autoComplete="off"
        className="w-full pl-10 pr-3 py-2 text-sm text-white placeholder-gray-400 
                   bg-transparent border border-stone-600 rounded-lg 
                   focus:border-blue-500 focus:ring-blue-500 focus:outline-none 
                   transition-colors ease-in-out duration-200"
      />
    </div>
  );
};

export default Input;
