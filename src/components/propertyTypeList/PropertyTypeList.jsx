import React from "react";
import classes from "./PropertyTypeList.module.css";
import typeList from "./type.json"; // lay du lieu tu file JSON
// Hien thi cac loai khach san
const PropertyTypeList = () => {
    return (
        <div className={classes.list}>
            {typeList.map((type) => {
                return (
                    <div key={type.name} className={classes.listItem}>
                        <img
                            src={type.image}
                            alt=""
                            className={classes.listImg}
                        />
                        <div className={classes.listTitles}>
                            <h1>{type.name}</h1>
                            <h2>{`${type.count} hotels`}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PropertyTypeList;
