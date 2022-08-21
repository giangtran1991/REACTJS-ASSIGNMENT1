import React from "react";
import classes from "./SearchListItem.module.css";
// Tao component SearchListItem de hien thi chi tiet
const SearchListItem = (props) => {
    return (
        <div className={classes.searchListItem}>
            <img
                src={props.search.image_url}
                alt=""
                className={classes.searchImg}
            />
            <div className={classes.searchDesc}>
                <h1 className={classes.searchTitle}>{props.search.name}</h1>
                <span className={classes.searchDistance}>
                    {props.search.distance}
                </span>
                <span className={classes.searchTaxiOp}>{props.search.tag}</span>
                <span className={classes.searchSubtitle}>
                    {props.search.description}
                </span>
                <span className={classes.searchFeatures}>
                    {props.search.type}
                </span>
                {props.search.free_cancel && (
                    <span className={classes.searchCancelOp}>
                        Free cancellation{" "}
                    </span>
                )}
                {props.search.free_cancel && (
                    <span className={classes.searchCancelOpSubtitle}>
                        You can cancel later, so lock in this great price today!
                    </span>
                )}
            </div>
            <div className={classes.searchDetails}>
                <div className={classes.searchRating}>
                    <span>{props.search.rate_text}</span>
                    <button>{props.search.rate}</button>
                </div>
                <div className={classes.searchDetailTexts}>
                    <span
                        className={classes.searchPrice}
                    >{`$${props.search.price}`}</span>
                    <span className={classes.searchTaxOp}>
                        Includes taxes and fees
                    </span>
                    <button className={classes.searchCheckButton}>
                        See availability
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchListItem;
