import React from "react";
import classes from "./CityList.module.css";
import cities from "./city.json"; // Lay du lieu tu file JSON
// Hien thi danh sach thanh pho tren Homepage
const CityList = () => {
    return (
        <div className={classes.cityList}>
            {cities.map((city) => {
                return (
                    <div key={city.name} className={classes.cityListItem}>
                        <img
                            src={city.image}
                            alt=""
                            className={classes.cityListImg}
                        />
                        <div className={classes.cityListTitles}>
                            <h1>{city.name}</h1>
                            <h2>{city.subText}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CityList;
