import { CgPiano } from "react-icons/cg";
import { FaGuitar, FaRockrms } from "react-icons/fa";
import { GiClarinet, GiFlute, GiGuitar, GiTrumpet } from "react-icons/gi";


const Music = () => {
    return (
        <div className="animate__animated animate__fadeInUp dark:text-white">
            <div className="w-full mx-auto my-10">
                <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold">Instruments</h3>

                <div className="flex flex-wrap md:flex-nowrap text-2xl text-center md:w-1/2 mx-auto">
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black max-w-64">
                        <FaGuitar></FaGuitar>
                        <p className="font-bold">Acoustic Guitar</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black max-w-64">
                        <GiGuitar></GiGuitar>
                        <p className="font-bold">Electric Guitar</p> <span className="text-lg font-medium">Basics</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black max-w-64">
                        <CgPiano></CgPiano>
                        <p className="font-bold">Keyboard</p> <span className="text-lg font-medium">Basics</span>
                    </div>
                </div>


            </div>
            <div className="w-fullmx-auto my-10 md:w-3/5 mx-auto">
                <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold ">Preferred Genre</h3>

                <div className="flex flex-wrap md:flex-nowrap text-2xl text-center">
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black max-w-64">
                        <FaRockrms></FaRockrms>
                        <p className="font-bold">Rock</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black max-w-64">
                        <GiTrumpet></GiTrumpet>
                        <p className="font-bold">Pop</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black max-w-64">
                        <GiClarinet></GiClarinet>
                        <p className="font-bold">World</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black max-w-64">
                        <GiFlute></GiFlute>
                        <p className="font-bold">Classical</p> <span className="text-lg font-medium">Basic</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Music;