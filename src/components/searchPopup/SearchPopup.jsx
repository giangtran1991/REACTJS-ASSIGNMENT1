import React from "react";
import classes from "./SearchPopup.module.css";
// Tao component SearchPopup de render phan Popup nam ben trai cua SearchPage
const SearchPopup = () => {
    return (
        <div>
            <div className={classes.listSearch}>
                <h1 className={classes.listTitle}>Search</h1>
                <div className={classes.listItem}>
                    <label>Destination</label>
                    <input type="text" />
                </div>
                <div className={classes.listItem}>
                    <label>Check-in Date</label>
                    <span>08/25/2022 to 08/25/2022</span>
                </div>
                <div className={classes.listItem}>
                    <label>Options</label>
                    <div className={classes.listOptions}>
                        <div className={classes.listOptionItem}>
                            <span className={classes.listOptionText}>
                                Min price <small>per night</small>
                            </span>
                            <input
                                type="number"
                                className={classes.listOptionInput}
                            />
                        </div>
                        <div className={classes.listOptionItem}>
                            <span className={classes.listOptionText}>
                                Max price <small>per night</small>
                            </span>
                            <input
                                type="number"
                                className={classes.listOptionInput}
                            />
                        </div>
                        <div className={classes.listOptionItem}>
                            <span className={classes.listOptionText}>
                                Adult
                            </span>
                            <input
                                type="number"
                                min={1}
                                className={classes.listOptionInput}
                            />
                        </div>
                        <div className={classes.listOptionItem}>
                            <span className={classes.listOptionText}>
                                Children
                            </span>
                            <input
                                type="number"
                                min={0}
                                className={classes.listOptionInput}
                            />
                        </div>
                        <div className={classes.listOptionItem}>
                            <span className={classes.listOptionText}>Room</span>
                            <input
                                type="number"
                                min={1}
                                className={classes.listOptionInput}
                            />
                        </div>
                    </div>
                </div>
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchPopup;
