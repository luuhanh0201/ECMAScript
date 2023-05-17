import Footer from "./src/components/DefaultLayout/Footer"
import Navigo from "navigo"

const router = new Navigo("/")

const render = (content) =>{
    document.getElementById("app").innerHTML = content()
}
render()

