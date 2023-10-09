const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-16 h-16 border-t-4 border-[var(--primary-color)] border-solid rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;