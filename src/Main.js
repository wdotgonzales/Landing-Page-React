import image1 from './img/home-bg.jpg';
import image2 from './img/software-img.png';

const backgroundImageInsertion = {
    backgroundImage: `url(${image1})`
}

const dimBackground = {
    background: "rgba(0, 0, 0, 0.5)"
}

const Main = () => {
    return (
        <main className='bg-cover bg-no-repeat' style={backgroundImageInsertion}>
            <div style={dimBackground}>
                <div className='text-center max-w-[50%] mx-auto pt-[55px] mt-[4em] pb-[4em]'>
                    <h1 className='text-white font-bold text-4xl mb-[1em]'>Software Landing Page</h1>
                    <p className='text-white italic text-base mt-5 leading-8 mb-[3em]'>
                        This is a fully Responsive, Clean Design, Modern, and Flexible Software Landing Page for startups,
                        businesses and agencies. It is built with HTML5 & CSS3, Bootstrap 3.3.4, Font Awesome 4.3.0, and much more.
                        Designed by templatemo. Images by Pixabay 
                    </p>
                    <img src={image2} className='max-w-full mx-auto'/>
                </div>
            </div>
        </main>
    )
}

export default Main;