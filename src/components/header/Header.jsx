import React, { useState } from "react";
import {
    faBed,
    faCalendarDays,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import classes from "./Header.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/search"); // chuyen ve trang tim kiem
    };
    // Su dung Date Picker cho phan Search
    const [openModal, setOpenModal] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <h1 className={classes.headerTitle}>
                    A lifetime of discount? It's Genius.
                </h1>
                <p className={classes.headerDesc}>
                    Get rewarded for your travels - unlock instant savings of
                    10% or more with a free account
                </p>
                <button className={classes.headerBtn}>Sign in/ Register</button>
                <div className={classes.headerSearch}>
                    <div className={classes.headerSearchItem}>
                        <FontAwesomeIcon
                            icon={faBed}
                            className={classes.headerIcon}
                        />
                        <input
                            type="text"
                            placeholder="Where are you going"
                            className={classes.headerSearchInput}
                        />
                    </div>
                    <div className={classes.headerSearchItem}>
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className={classes.headerIcon}
                        />
                        <span
                            onClick={() => setOpenModal(!openModal)}
                            className={classes.headerSearchText}
                        >{`${format(
                            date[0].startDate,
                            "dd/MM/yyyy"
                        )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    </div>
                    {openModal && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={classes.date}
                            minDate={new Date()}
                        />
                    )}
                    <div className={classes.headerSearchItem}>
                        <FontAwesomeIcon
                            icon={faPerson}
                            className={classes.headerIcon}
                        />
                        <span className={classes.headerSearchText}>
                            2 adults 2 chilrens 1 room
                        </span>
                    </div>
                    <div className={classes.headerSearchItem}>
                        <button
                            className={classes.headerBtn}
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
