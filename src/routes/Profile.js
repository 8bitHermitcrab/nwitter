import { authService, dbService } from "fbase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const history = useNavigate();
    
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    const getMyNweets = async () => {
        const nweets = await dbService.collection("nweets");
    };

    useEffect(() => {}, []);

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;