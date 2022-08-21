import React from "react";
import NavBarItem from "./NavBarItem";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import data from "./navBar.json";

const NavBar = () => {
    const navigate = useNavigate();
    const handleToHomePage = () => {
        navigate("/"); // chuyen ve trang chu
    };
    return (
        <>
            <div className={classes.navbar}>
                <div className={classes.navContainer}>
                    <span className={classes.logo} onClick={handleToHomePage}>
                        Booking Website
                    </span>
                    <div>
                        <button className={classes.navButton}>Register</button>
                        <button className={classes.navButton}>Login</button>
                    </div>
                </div>
            </div>
            <NavBarItem navBarList={data} />
        </>
    );
};

export default NavBar;
