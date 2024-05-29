import Title from '../components/Title';

const Qualification = () => {
    return (
        <div>
            <Title title="Qualification" subtitle="My Edicational Background"></Title>

            <div className='animate__animated animate__fadeIn'>

                <ol className="relative border-s border-gray-300 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019-2023</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BACHELOR of TECHNOLOGIES in COMPTUER SCIENCE AND ENGINEERING</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">RIMT University, Punjab, India</p>
                        <p>CGPA: 7.68 out of Ten</p>
                    </li><li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017-2018</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HIGHER SECONDARY CERTIFICATE</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Saidpur Govt Technical College, Saidpur, Nilphamari, Bangladesh</p>
                        <p>GPA: 4.25 out of Five</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015-2016</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SECONDARY SCHOOL CERTIFICATE</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Syedpur Govt. Technical High School and College, Saidpur, Nilphamari, Bangladesh</p>
                        <p>CGPA: 5.00 out of Five</p>
                    </li>
                </ol>


            </div>
        </div>
    );
};

export default Qualification;