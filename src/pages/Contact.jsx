import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";
import Title from "../components/Title";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
    return (
        <div>
            <Title title="Contact" subtitle="Get in touch"></Title>
            <div className="w-screen mx-auto text-xl">
                <div className="md:w-4/5 mx-2 md:mx-auto flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 space-y-3">
                        <div className="md:w-4/5 mx-auto flex flex-col gap-2 items-center justify-center px-10 py-3 bg-gray-200 rounded-2xl">
                            <MdEmail size={32}></MdEmail>
                            <h4 className="text-xl md:text-2xl font-bold">Email</h4>
                            <p>nawfs.cs254@gmail.com</p>
                            <p className="flex items-center gap-2 hover:bg-gray-100 p-3 rounded-xl transition-all cursor-pointer">Mail me <BsArrowRight /></p>
                        </div>
                        <div className="md:w-4/5 mx-auto flex flex-col gap-2 items-center justify-center px-10 py-3 bg-gray-200 rounded-2xl">
                            <MdPhone size={32}></MdPhone>
                            <h4 className="text-xl md:text-2xl font-bold">Phone</h4>
                            <p>+880 1704 259187</p>
                            <p>+880 1533 880557</p>
                            <p className="flex items-center gap-2 hover:bg-gray-100 p-3 rounded-xl transition-all cursor-pointer">Call me <BsArrowRight /></p>
                        </div>
                        <div className="md:w-4/5 mx-auto flex flex-col gap-2 items-center justify-center px-10 py-3 bg-gray-200 rounded-2xl">
                            <MdWhatsapp size={32}></MdWhatsapp>
                            <h4 className="text-xl md:text-2xl font-bold">Whatsapp</h4>
                            <p>https://wa.me/+8801704259187</p>
                            <p className="flex items-center gap-2 hover:bg-gray-100 p-3 rounded-xl transition-all cursor-pointer">Message me <BsArrowRight /></p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">

                        <form className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="large-input" className="block mb-2 font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="large-input" className="block mb-2 font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">Your message</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;