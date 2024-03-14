const TailwindInput = ({ type, placeholder, className }) => {
    return (
        <>
            <input
                type={type}
                className={`form-input px-4 py-2 border rounded border-gray-300 ${className}`}
                placeholder={placeholder}
            />
        </>
    );
};
export default TailwindInput;
