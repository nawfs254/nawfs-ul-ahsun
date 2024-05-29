const Title = ({ title, subtitle }) => {
    return (
        <div className="text-center w-full my-10">
            <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
            <p className="text-xl font-medium">{subtitle}</p>
        </div>
    );
};

export default Title;