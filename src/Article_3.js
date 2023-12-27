const Article_3 = () => {
    return (
        <article className="bg-[#F5F5F5]">
            <div className="max-w-[65%] mx-auto pb-[150px]">
                <h2 className="text-center font-semibold text-[37px] pt-[85px] pb-[85px] ">OUR PRICING</h2>
                <div className="text-center grid xl:grid-cols-3 gap-[25px]">
                    {/* Items */}
                    <div className="xl:max-w-[325px]">
                        <div className="bg-[#1DA1F2] text-white p-[50px]">
                            <p className="font-semibold text-[23px]">BASIC PLAN</p>
                            <p className="font-bold text-[18px] pt-2 pb-3">$10</p>
                            <p className="text-[11px] font-bold">monthly</p>
                        </div>
                        <div className="bg-[#FFFFFF]">
                            <p className="mt-3 mb-5">2 GB SPACE</p>
                            <p className="mb-5">200 GB BANDWIDTH</p>
                            <p className="mb-5">20 MORE THEMES</p>
                            <p className="mb-8">LIFETIME SUPPORT</p>
                            <button className="bg-[#FFFFFF] mb-8 border-2 border-[#1DA1F2] w-[140px] pt-1 pb-2 font-bold text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white">SIGN UP</button>
                        </div>
                    </div>

                    <div className="xl:max-w-[325px] xl:mt-[-20px]">
                        <div className="bg-[#1DA1F2] text-white p-[50px]">
                            <p className="font-semibold text-[23px]">BUSINESS PLAN</p>
                            <p className="font-bold text-[18px] pt-2 pb-3">$20</p>
                            <p className="text-[11px] font-bold">monthly</p>
                        </div>
                        <div className="bg-[#FFFFFF]">
                            <p className="mt-3 mb-5">5 GB SPACE</p>
                            <p className="mb-5">500 GB BANDWIDTH</p>
                            <p className="mb-5">50 MORE THEMES</p>
                            <p className="mb-8">LIFETIME SUPPORT</p>
                            <button className="bg-[#FFFFFF] mb-8 border-2 border-[#1DA1F2] w-[140px] pt-1 pb-2 font-bold text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white">SIGN UP</button>
                        </div>
                    </div>

                    <div className="xl:max-w-[325px]">
                        <div className="bg-[#1DA1F2] text-white p-[50px]">
                            <p className="font-semibold text-[23px]">PRO PLAN</p>
                            <p className="font-bold text-[18px] pt-2 pb-3">$30</p>
                            <p className="text-[11px] font-bold">monthly</p>
                        </div>
                        <div className="bg-[#FFFFFF]">
                            <p className="mt-3 mb-5">10 GB SPACE</p>
                            <p className="mb-5">1,000 GB BANDWIDTH</p>
                            <p className="mb-5">100 MORE THEMES</p>
                            <p className="mb-8">LIFETIME SUPPORT</p>
                            <button className="bg-[#FFFFFF] mb-8 border-2 border-[#1DA1F2] w-[140px] pt-1 pb-2 font-bold text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white">SIGN UP</button>
                        </div>
                    </div>

                    

                    

                </div>
            </div>
        </article>
    )
}

export default Article_3;