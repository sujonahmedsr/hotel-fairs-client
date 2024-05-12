import { Navigate } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import { Audio } from 'react-loader-spinner'


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <div className="pt-28 container mx-auto text-center flex items-center justify-center">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    }
    if (user) {
        return children
    } else {
        return <Navigate to={'/login'}></Navigate>
    }

};

export default PrivateRoutes;