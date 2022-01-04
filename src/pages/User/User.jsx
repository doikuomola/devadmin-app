import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import "./user.css";
import { Link } from "react-router-dom";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="show"
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">
                                David olawale
                            </span>
                            <span className="userShowUserTitle">
                                Software Engineer
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowBottomTitle">
                            Account Details
                        </span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">
                                walestrings
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">
                                10.12.2000
                            </span>
                        </div>
                        <span className="userShowBottomTitle">
                            Contact Details
                        </span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">
                                07064444678
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">
                                walestrings@gmail.com
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowBottomIcon" />
                            <span className="userShowBottomInfoTitle">
                                New York, Usa
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="walestrings"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="David olawale"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="walestrings@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="07064444678"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="New York, Usa"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="update"
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                />
                            </div>
                            <button className="userUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;
