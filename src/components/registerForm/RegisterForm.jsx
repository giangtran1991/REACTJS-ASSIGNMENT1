import React from "react";
import classes from "./RegisterForm.module.css";
// Tao phan form dang ki
const RegisterForm = () => {
    return (
        <div className={classes.register}>
            <h1>Save time, save money!</h1>
            <span>Sign up and we'll send the best deals to you</span>
            <div className={classes.mailInput}>
                <input type="text" placeholder="Your email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default RegisterForm;
