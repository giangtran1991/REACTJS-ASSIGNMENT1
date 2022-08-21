import classes from "./Detail.module.css";
import NavBar from "../../components/navbar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import RegisterForm from "../../components/registerForm/RegisterForm.jsx";
import DetailList from "../../components/detailList/DetailList.jsx";
// Hien thi trang Detail
const Detail = () => {
    return (
        <div>
            <NavBar />
            <div className={classes.hotelContainer}>
                <DetailList />
                <RegisterForm />
                <Footer />
            </div>
        </div>
    );
};

export default Detail;
