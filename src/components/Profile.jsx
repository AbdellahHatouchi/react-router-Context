import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextUser";

function Profile() {
    const { user,logout } = useContext(UserContext)
    const navigate = useNavigate()
    const handelLogout = ()=>{
        logout()
        navigate('/',{replace:true})
    }
    return (
        <div className="profile">
            <h1>Welcome {user?.username}</h1>
            <Button variant="danger" onClick={handelLogout}>Logout</Button>
        </div>
    );
}

export default Profile;