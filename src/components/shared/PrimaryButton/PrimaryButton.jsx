const PrimaryButton = ({ text }) => {
    return (
        <button className="hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white">
            {text}
        </button>
    );
};

export default PrimaryButton;