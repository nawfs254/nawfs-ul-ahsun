import SkillsNav from "../components/SkillsNav";
import Title from "../components/Title";

import { Outlet } from "react-router-dom";

const Skills = () => {
    return (
        <div className="w-full md:w-4/5">
            <Title title="Skills" subtitle="My Technical Skills"></Title>
            <div>
                <SkillsNav></SkillsNav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Skills;