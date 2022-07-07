import axios from 'axios'
import ChangePassword from '../../components/changePassword/changePassword'
import Button from '../../components/button/button';


const UserProfile = (props) => {

    console.log(props.player.data);
    let user = props.player.data;

    const passwordChange = () => {
        let form = document.getElementById("change-password-form");
        form.classList.remove('hidden');
    }

    const deleteAccount = () => {
        axios.post("http://localhost:8000/users/deleteById", user).then((response) => {
            console.log(response);
            
        })
    }

    return (
        <div className="flex-col user-profile">

            <div className="flex-col user-profile-item">
                <div className="user-profile-item-label">Username: </div>
                <div className="user-profile-item-value">{props.player.data.username}</div>
            </div>

            <div className="flex-col user-profile-item">
                <div className="user-profile-item-label">Email: </div>
                <div className="user-profile-item-value">{props.player.data.email}</div>
            </div>

            <div className="flex-col user-profile-item">
                <div className="user-profile-item-label">Password: </div>
                <div className="user-profile-change-password-button" onClick={passwordChange}>Change Password</div>
            </div>

            <div className="flex-col user-profile-item">
                <div className="user-profile-item-label">Highscore: </div>
                <div className="user-profile-item-value">{props.player.data.highscore}</div>
            </div>

            <div className="flex-col user-profile-item">
                <div className="delete-profile-btn" onClick={deleteAccount}>Delete my account.</div>
            </div>
        </div>
    )
}

export default UserProfile;