import { authService, dbService } from "fbase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const history = useNavigate();
    
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    return (
        <>
            <form>
                <input type="text" placeholder="Display name" />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;