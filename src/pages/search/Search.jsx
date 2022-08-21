import SearchList from "../../components/searchList/SearchList";
import SearchPopup from "../../components/searchPopup/SearchPopup";
import NavBar from "../../components/navbar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import classes from "./Search.module.css";
// Hien thi trang tim kiem
const Search = () => {
    return (
        <div>
            <NavBar />
            <div className={classes.homeContainer}>
                <div className={classes.listContainer}>
                    <div className={classes.listWrapper}>
                        <SearchPopup />
                        <SearchList />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Search;
