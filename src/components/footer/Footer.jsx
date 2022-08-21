import React from "react";
import classes from "./Footer.module.css";
import footerList from "./footer.json"; // Lay du lieu tu file JSON
// Tao footer cho Homepage
const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerLists}>
                {footerList.map((item) => {
                    return (
                        <ul
                            key={item.col_number}
                            className={classes.footerList}
                        >
                            {item.col_values.map((value, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={classes.footerListItem}
                                    >
                                        {value}
                                    </li>
                                );
                            })}
                        </ul>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
