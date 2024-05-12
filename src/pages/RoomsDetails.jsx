import { useLoaderData } from "react-router-dom";

const RoomsDetails = () => {
    const room = useLoaderData()
    const { description, availability, room_images } = room;
    return (
        <div className="py-24 px-3 container mx-auto">
            <div data-aos="fade-up"
            className='border p-5 hover:scale-110 duration-300'>
            {
                room_images.map((img, id) => <img src={img} key={id}></img>)
            }
            <div className='py-5'>
                <h1 className='text-2xl font-bold text-primay'>{description}</h1>
            </div>
            <div className='float-end flex items-center gap-3 font-bold text-xl hover:text-primay duration-300 transition'>
                <button>View Details</button>
                <h1>{availability}</h1>
            </div>
        </div>
        </div>
    );
};

export default RoomsDetails;