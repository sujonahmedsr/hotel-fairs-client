import { Map, Marker } from "pigeon-maps"
const Home = () => {
    return (
        <div className="py-24 px-3">
            <h1 className="text-3xl">this is home</h1>
            <Map height={400} defaultCenter={[24.455447, 89.709901]} defaultZoom={11}>
                <Marker width={50} anchor={[24.455447, 89.709901]} />
            </Map>
        </div>
    );
};

export default Home;