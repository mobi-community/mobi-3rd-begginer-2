const TailwindButton = ({ text, className, onClick }) => {
    return (
        <button
            className={`text-xl font-bold py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
export default TailwindButton;
