import { authService, dbService } from "fbase";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Profile = ( {userObj } ) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    
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