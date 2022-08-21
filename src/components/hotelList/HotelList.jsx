import React from "react";
import classes from "./HotelList.module.css";
import { useNavigate } from "react-router-dom";
import hotelList from "./hotel_list.json"; // Lay du lieu tu file JSON

// Hien thi cac khach san
const HotelList = () => {
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate("/detail"); // chuyen ve trang tim kiem
    };
    return (
        <div className={classes.hotel}>
            {hotelList.map((item) => {
                return (
                    <div key={item.name} className={classes.hotelItem}>
                        <img
                            src={item.image_url}
                            alt=""
                            className={classes.hotelImg}
                        />
                        <span
                            onClick={handleDetail}
                            className={classes.hotelName}
                        >
                            {item.name}
                        </span>
                        <span className={classes.hotelCity}>{item.city}</span>
                        <span
                            className={classes.hotelPrice}
                        >{`Starting from $${item.price}`}</span>
                        <div className={classes.hotelRating}>
                            <button className={classes.rateBtn}>
                                {item.rate}
                            </button>
                            <span>{`  ${item.type}`}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HotelList;
