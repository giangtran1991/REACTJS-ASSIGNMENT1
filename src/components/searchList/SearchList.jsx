import React from "react";
import classes from "./SearchList.module.css";
import SearchListItem from "./SearchListItem.jsx";
import searchList from "./search.json"; // Lay du lieu tu file JSON
// Hien thi danh sach dat phong nam ben phai SearchPage
const SearchList = () => {
    return (
        <div>
            {searchList.map((item) => {
                return (
                    <div key={item.name} className={classes.listResult}>
                        <SearchListItem search={item} />
                    </div>
                );
            })}
        </div>
    );
};

export default SearchList;
