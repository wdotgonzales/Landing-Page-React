const Section = () => {
    return (
        <section>
            <div className="mt-[80px] pb-[95px] text-center w-[65%] mx-auto grid lg:grid-cols-3 gap-[70px]">
                <div>
                    <svg class="max-w-[4em] max-h-[4em] mx-auto text-[#1DA1F2] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                    </svg>

                    <h2 className="font-bold text-[1.3em] mb-3 mt-5">RESPONSIVE LAYOUT</h2>
                    <p className="text-[19px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div>
                    <svg class="max-w-[5em] max-h-[5em] mx-auto text-[#1DA1F2] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M9.782.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231C14.488 3.365 13.551.6 9.782.72ZM4.8 6.979A4.772 4.772 0 0 0 0 11.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231C9.51 9.623 8.573 6.853 4.8 6.979Z" />
                    </svg>
                    <h2 className="font-bold text-[1.3em] mb-3 mt-7">BOOTSTRAP 3.3.4</h2>
                    <p className="text-[19px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div>
                    <svg class="max-w-[4em] max-h-[4em] mx-auto text-[#1DA1F2]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 1h4.5a3.5 3.5 0 1 1 0 7H3m0-7v7m0-7H1m2 7h6.5a3.5 3.5 0 1 1 0 7H3m0-7v7m0 0H1" />
                    </svg>
                    <h2 className="font-bold text-[1.3em] mb-3 mt-5">GOOGLE FONT</h2>
                    <p className="text-[19px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section;