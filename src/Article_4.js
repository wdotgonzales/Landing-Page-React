import image from './img/software-img.png';
const Article_4 = () => {
    return (
        <article>
            <div className='flex flex-col lg:flex-row gap-5 w-[65%] mx-auto pt-[4em] pb-[4em]'>

                <div className='lg:max-w-[450px] lg:mt-9'>
                    <h2 className='font-bold text-[2em] mb-3'>DOWNLOAD OUR FEATURES</h2>
                    <p className='text-[1em] mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <button className='bg-[#337ab7] text-white w-[195px] pt-1 pb-2 font-bold justify-around'>
                        <div className='flex max-w-[60%] justify-between mx-auto pt-1 pb-1'>
                            <svg class="w-4 h-4 text-white-800 dark:text-white mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                            <p className='font-bold '>DOWNLOAD</p>
                        </div>
                    </button>
                </div>

                <div className='mt-8'>
                    <img src={image} className='max-w-full mx-auto max-h-full'></img>
                </div>
            </div>
        </article>
    )
}

export default Article_4;