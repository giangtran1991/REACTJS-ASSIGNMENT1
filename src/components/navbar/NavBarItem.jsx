import React from "react";
import {
    faBed,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavBarItem.module.css";
// Tao component NavBarItem de hien thi giao dien thanh navbar
const NavBarItem = (props) => {
    function camelCase(str) {
        return str
            .split("-")
            .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
    }
    return (
        <div className={classes.navBarItem}>
            <div className={classes.navBarItemContainer}>
                <div className={classes.navBarList}>
                    {props.navBarList.map((item) => {
                        return (
                            <div
                                key={item.type}
                                className={`${classes.navBarListItem} ${
                                    item.active ? classes.active : ""
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={
                                        camelCase(item.icon) === "faBed"
                                            ? faBed
                                            : camelCase(item.icon) === "faTaxi"
                                            ? faTaxi
                                            : camelCase(item.icon) === "faCar"
                                            ? faCar
                                            : camelCase(item.icon) ===
                                              "faPerson"
                                            ? faPerson
                                            : faPlane
                                    }
                                />
                                <span>{item.type}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavBarItem;
