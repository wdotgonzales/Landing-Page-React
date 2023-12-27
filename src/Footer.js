import contactImg from './img/contact-bg.jpg';

const backgroundImageInsertion = {
    backgroundImage: `url(${contactImg})`
}

const dimBackground = {
    background: "rgba(0, 0, 0, 0.5)"
}


const Footer = () => {
    return (
        <>
            <footer className='bg-cover bg-no-repeat text-white' style={backgroundImageInsertion}>
                <div style={dimBackground} >
                    {/* flex parent */}
                    <div className='w-[65%] mx-auto flex flex-col lg:flex-row pt-[100px] pb-[100px] gap-5'>
                        {/* flex child 1 */}
                        <div className='max-w-[100%] lg:max-w-[60%]'>
                            <h2 className='font-semibold text-[2.1em] mb-3'>CONTACT US</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>

                            <div className='flex gap-3 mb-7 mt-7'>
                                <div className='bg-[#1DA1F2] p-[15px] h-[47px] rounded-full'>
                                    <svg class="w-4 h-4 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M17 16h-1V2a1 1 0 1 0 0-2H2a1 1 0 0 0 0 2v14H1a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM5 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm0 5V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm6 7H7v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm2-7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm0-4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Z" />
                                    </svg>
                                </div>
                                <p className='mt-2'>1234 Street Name, City Name, United States</p>
                            </div>

                            <div className='flex gap-3 mb-7 mt-7'>
                                <div className='bg-[#1DA1F2] p-[15px] h-[47px] rounded-full'>
                                    <svg class="w-4 h-4 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </div>
                                <p className='mt-2'>0992 234234 / 0234 234234</p>
                            </div>

                            <div className='flex gap-3 mb-7 mt-7'>
                                <div className='bg-[#1DA1F2] p-[15px] h-[47px] rounded-full'>
                                    <svg class="w-4 h-4 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2" />
                                    </svg>
                                </div>
                                <p className='mt-2'>wdotgonzales@gmail.com</p>
                            </div>

                        </div>

                        {/* flex child 2 */}
                        <div className='max-w-[100%] lg:max-w-[60%]'>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">First name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Last name</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <div class="mb-6">

                                <label for="message" class="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your message</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                            </div>


                            <button type='submit' className='bg-[#1DA1F2] font-bold w-[100%] pt-3 pb-3'>SEND</button>

                        </div>
                    </div>
                </div>
            </footer>

            <div>
                <h1 className='text-center text-[23px] pt-3 pb-4'>Copyright © 2023 | Developed by : <a className='font-bold text-[#1DA1F2] hover:text-[#337ab7]' href='https://github.com/wdotgonzales'>wdotgonzales</a></h1>
            </div>
        </>
    )
}

export default Footer;