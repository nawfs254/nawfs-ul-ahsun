import Card from "../components/Card";
import Title from "../components/Title";

const Portfolio = () => {
    return (
        <div>
            <Title title="Portfolio" subtitle="My recent works"></Title>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:11/12 lg:w-4/5 md:mx-auto gap-5 md:gap-10">
                <Card></Card>
            </div>
        </div>
    );
};

export default Portfolio;