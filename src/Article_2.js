import image from './img/software-img.png'
const Article_2 = () => {
    return (
        <article className=''>
            <div className='flex flex-col lg:flex-row gap-5 max-w-[65%] mx-auto pt-[4em] pb-[4em]'>

                <div className='mb-5'>
                    <img src={image} className='max-w-full mx-auto max-h-full'></img>
                </div>

                <div className=''>
                    <h2 className='font-bold text-[2em] mb-3'>MORE OF YOUR SOFTWARE</h2>
                    <p className='text-[1.2em]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='flex gap-5 mb-7 mt-7'>
                        <div className='bg-[#1DA1F2] p-[15px] h-[47px] rounded-full'>
                            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
                            </svg>
                        </div>
                        <p className='text-[1em]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-[#1DA1F2] p-[15px] h-[47px] rounded-full	'>
                            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.906 0 2.5 17.683l7.5 2.159 7.544-2.158L19.092 0H.906ZM15.1 6H7.044l.174 2h7.776l-.632 6.513-4.29 1.371-4.326-1.444-.29-2.909H7.5l.163 1.4 2.424.809 2.37-.757.3-2.982H5.368L4.8 4h10.519L15.1 6Z" />
                            </svg>
                        </div>
                        <p className='text-[1em] mt-2'>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Article_2;