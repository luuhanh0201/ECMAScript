import { render, router } from "~/lib"
import HomePage from "~/components/pages/Home"
import ProjectPage from "~/components/pages/Project"
import AboutPage from "~/components/pages/About"
import SkillsPage from "~/components/pages/Skills"
import DetailProject from "~/components/pages/Project/DetailProject"
import ProductAddPage from "~/components/pages/Skills/add.js"
import ProductEditPage from "~/components/pages/Skills/update.js"
import Component from "~/components"

const app = document.getElementById('app')


// Render content
router.on('/', () => render(()=>Component(HomePage()), app))
router.on('/home', () => render(()=>Component(HomePage()), app))
router.on('/about', () => render(()=>Component(AboutPage()), app))
router.on('/project', () => render(()=>Component(ProjectPage()), app))
router.on('/project/:id', ({ data }) => render(() => DetailProject(data), app))


router.on('/skills', () => render(()=>Component(SkillsPage()), app))
router.on('/skills/add', () => render(()=>Component(ProductAddPage()), app))
router.on("/product/update/:id", ({ data }) => render(() => ProductEditPage(data), app));

router.resolve()


fetch("http://localhost:3000/projects")
.then(data=>data.json(""))
.then(data=>{
    console.log(data)
})
