import { FaFileExcel, FaFilePowerpoint, FaFileWord, FaUbuntu, FaWindows } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaudition, SiVisualstudiocode, SiPycharm } from "react-icons/si";

const Softwares = () => {
    return (
        <div className="animate__animated animate__fadeInUp">
            <div className="w-fullmx-auto my-10 mx-auto">
                <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold ">Designing & Editing</h3>

                <div className="flex flex-wrap md:flex-nowrap text-2xl text-center">
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobephotoshop></SiAdobephotoshop>
                        <p className="font-bold">Adobe Photoshop</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobeillustrator></SiAdobeillustrator>
                        <p className="font-bold">Adobe Illustrator</p> <span className="text-lg font-medium">Basic</span>
                    </div>


                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobexd></SiAdobexd>
                        <p className="font-bold">Adobe XD</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobeaudition></SiAdobeaudition>
                        <p className="font-bold">Adobe Audition</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobepremierepro></SiAdobepremierepro>
                        <p className="font-bold">Adobe Primiere Pro</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <FiFigma></FiFigma>
                        <p className="font-bold">Figma</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                </div>
            </div>

            <div className="w-fullmx-auto my-10 md:w-3/5 mx-auto">
                <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold ">Microsoft Office</h3>

                <div className="flex flex-wrap md:flex-nowrap text-2xl text-center">
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <FaFileWord></FaFileWord>
                        <p className="font-bold">MS Word</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <FaFileExcel></FaFileExcel>
                        <p className="font-bold">MS Excel</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <FaFilePowerpoint></FaFilePowerpoint>
                        <p className="font-bold">MS Powerpoint</p> <span className="text-lg font-medium">Basic</span>
                    </div>
                </div>
            </div>

            <div className="w-fullmx-auto my-10 md:w-1/2 mx-auto">
                <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold ">IDE</h3>

                <div className="flex flex-wrap md:flex-nowrap text-2xl text-center">
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiVisualstudiocode></SiVisualstudiocode>
                        <p className="font-bold">VS Code</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiPycharm></SiPycharm>
                        <p className="font-bold">Pycharm</p> <span className="text-lg font-medium">Basic</span>
                    </div>
                </div>
            </div>

            <div className="w-fullmx-auto my-10 md:w-1/2 mx-auto">
                <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold ">Operating System</h3>

                <div className="flex flex-wrap md:flex-nowrap text-2xl text-center">
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <FaWindows></FaWindows>
                        <p className="font-bold">Windows</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <FaUbuntu></FaUbuntu>
                        <p className="font-bold">Ubuntu</p> <span className="text-lg font-medium">Basic</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Softwares;

{/* <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobeaudition></SiAdobeaudition>
                        <p className="font-bold">Rock</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobeaudition></SiAdobeaudition>
                        <p className="font-bold">Pop</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobeaudition></SiAdobeaudition>
                        <p className="font-bold">World</p> <span className="text-lg font-medium">Basic</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full md:border-b border-l hover:bg-gray-200 hover:scale-110 transition max-w-64">
                        <SiAdobeaudition></SiAdobeaudition>
                        <p className="font-bold">Classical</p> <span className="text-lg font-medium">Basic</span>
                    </div> */}