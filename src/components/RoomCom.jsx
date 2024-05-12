// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const RoomCom = ({ room }) => {
    const { description, availability, room_images } = room;
    return (
        <div className='border p-5'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    room_images.map((image, id) => <SwiperSlide key={id}>
                        <div className="relative h-72">
                            <img className='h-72 w-full object-cover object-center' src={image} alt="" />
                            <div className="absolute top-0 w-full bg-black bg-opacity-30 h-full">
                                <div className='bg-primay p-3'>
                                    <h1 className="font-bold text-xl text-white ">{availability}</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='py-5'>
                <h1 className='text-2xl font-bold text-primay'>{description}</h1>
            </div>
            <Link className='float-end flex items-center gap-3 font-bold text-xl hover:text-primay duration-300 transition'>
                <button>View Details</button>
                <FaArrowRightLong></FaArrowRightLong>
            </Link>
        </div>
    );
};

export default RoomCom;