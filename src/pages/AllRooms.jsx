import axios from "axios";
import { useEffect, useState } from "react";
import RoomCom from "../components/RoomCom";

const AllRooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/rooms`)
            .then(res => {
                setRooms(res.data);
            })
    }, [])
    
    return (
        <div className="py-24 px-3 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        rooms.map(room => <RoomCom key={room._id} room={room}></RoomCom>)
                    }
                </div>
        </div>
    );
};

export default AllRooms;