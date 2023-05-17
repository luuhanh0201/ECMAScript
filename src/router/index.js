import Footer from "./src/components/DefaultLayout/Footer"
import Navigo from "navigo"

const router = new Navigo("/")

const HomePage = router.on("/home",()=>{
    return `<div>12312</div>`
})

export {HomePage}
