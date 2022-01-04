// @ts-nocheck
import "./NewUser.css";

const NewUser = () => {
    return (
        <div className="newuser">
            <h1 className="newUserTitle">New user</h1>
            <form action="" className="newUserForm">
                <div className="newUserFormItem">
                    <label>Username</label>
                    <input type="text" placeholder="david" />
                </div>
                <div className="newUserFormItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="David Olawale" />
                </div>
                <div className="newUserFormItem">
                    <label>Email</label>
                    <input type="email" placeholder="david@gmail.com" />
                </div>
                <div className="newUserFormItem">
                    <label>Password</label>
                    <input type="password" placeholder="david@gmail.com" />
                </div>
                <div className="newUserFormItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+234 7064444444" />
                </div>
                <div className="newUserFormItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York, Usa" />
                </div>
                <div className="newUserFormItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                        />
                        <label for="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                        />
                        <label for="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                        />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserFormItem">
                    <label htmlFor="">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserBtn">Create</button>
            </form>
        </div>
    );
};

export default NewUser;
