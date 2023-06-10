import { router, render } from "./src/lib"
import Page from "./ES6/index.js"
const app = document.getElementById("app")


router.on("/",render(Page,app) )

