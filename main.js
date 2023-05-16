import HomePage from "~/pages/Home";
import AboutPage from "~/pages/About";
import Header from "~/components/Header";
import Banner from "~/components/Banner";

document.getElementById("app").innerHTML = Header(HomePage(),Banner())

