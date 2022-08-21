import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import classes from "./DetailList.module.css";
import detailList from "./detail.json"; // Lay du lieu tu file JSON
// Hien thi thong tin chi tiet cua khach san tren Detail Page
const DetailList = () => {
    return (
        <div>
            <div className={classes.hotelWrapper}>
                <button className={classes.bookNow}>
                    Reserve or Book Now!
                </button>
                <h1 className={classes.hotelTitle}>{detailList.name}</h1>
                <div className={classes.hotelAddress}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{detailList.address}</span>
                </div>
                <span className={classes.hotelDistance}>
                    {detailList.distance}
                </span>
                <span className={classes.hotelPriceHighlight}>
                    {detailList.price}
                </span>
                <div className={classes.hotelImages}>
                    {detailList.photos.map((photo, i) => (
                        <div className={classes.hotelImgWrapper} key={i}>
                            <img
                                src={photo}
                                alt=""
                                className={classes.hotelImg}
                            />
                        </div>
                    ))}
                </div>
                <div className={classes.hotelDetails}>
                    <div className={classes.hotelDetailsTexts}>
                        <h1 className={classes.hotelTitle}>
                            {detailList.title}
                        </h1>
                        <p className={classes.hotelDesc}>
                            {detailList.description}
                        </p>
                    </div>
                    <div className={classes.hotelDetailsPrice}>
                        <h1>Perfect for a 9-night stay!</h1>
                        <span>
                            Located in the real heart of Krakow, this property
                            has an excellent location score of 9.8!
                        </span>
                        <h2>
                            <b>{`$${detailList.nine_night_price}`}</b> (9
                            nights)
                        </h2>
                        <button>Reserve or Book Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailList;
