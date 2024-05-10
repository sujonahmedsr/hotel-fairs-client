import { Map, Marker } from "pigeon-maps"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../assets/sliders/slider1.jpg'
import slider2 from '../assets/sliders/slider2.jpg'
import slider3 from '../assets/sliders/slider3.jpg'
import slider4 from '../assets/sliders/slider4.jpg'

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="py-24 px-3 container mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider1} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Experience the pinnacle of hospitality at our hotel fair, where every moment is crafted to perfection, ensuring memories that last a lifetime.</p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider2} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Unveiling the epitome of opulence and comfort, our hotel fair promises an unparalleled experience for discerning travelers.</p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider3} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Our culinary offerings are a gastronomic delight, with world-class chefs crafting exquisite dishes that tantalize the palate. </p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider4} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">From sunrise to sunset, our Swimmingful Hotel invites you to experience the epitome of aquatic luxury, where every dip is a journey into blissful serenity.</p>
                                <Link to={'/rooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="pt-20">
                <h1 className="text-3xl text-primay font-bold py-10">Our Location</h1>
                <Map height={400} defaultCenter={[24.455447, 89.709901]} defaultZoom={11}>
                    <Marker width={50} anchor={[24.455447, 89.709901]} />
                </Map>
            </div>

        </div>
    );
};

export default Home;