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
                                <p className="mb-5">A set of high-quality glass paints and brushes for creating beautiful designs on glass surfaces.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
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
                                <p className="mb-5">A set of high-quality glass paints and brushes for creating beautiful designs on glass surfaces.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
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
                                <p className="mb-5">A set of high-quality glass paints and brushes for creating beautiful designs on glass surfaces.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
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
                                <p className="mb-5">A set of high-quality glass paints and brushes for creating beautiful designs on glass surfaces.</p>
                                <Link to={'/allArts'}><button className="px-8 py-3 rounded-full font-bold bg-green-600">See All</button></Link>
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