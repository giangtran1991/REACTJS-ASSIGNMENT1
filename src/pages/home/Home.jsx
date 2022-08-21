import React from "react";
import NavBar from "../../components/navbar/NavBar.jsx";
import Header from "../../components/header/Header.jsx";
import CityList from "../../components/cityList/CityList.jsx";
import PropertyTypeList from "../../components/propertyTypeList/PropertyTypeList.jsx";
import HotelList from "../../components/hotelList/HotelList.jsx";
import RegisterForm from "../../components/registerForm/RegisterForm.jsx";
import Footer from "../../components/footer/Footer.jsx";
import classes from "./Home.module.css";
// Hien thi trang chu
const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className={classes.homeContainer}>
                <CityList />
                <h1 className={classes.homeTitle}>Browse by property type</h1>
                <PropertyTypeList />
                <h1 className={classes.homeTitle}>Homes guests love</h1>
                <HotelList />
                <RegisterForm />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
