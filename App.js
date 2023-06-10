import { render, router } from "~/lib"
import HomePage from "~/components/pages/Home"
import ProjectPage from "~/components/pages/Project"
import AboutPage from "~/components/pages/About"
import SkillsPage from "~/components/pages/Skills"
import DetailProject from "~/components/pages/Project/DetailProject"
import ProductAddPage from "~/components/pages/Skills/add.js"
import ProductEditPage from "~/components/pages/Skills/edit.js"
import SignUpPage from "~/components/Admin/SignUp"
import SignInPage from "~/components/Admin/SignIn"
import Component from "~/components"
import AddProject from "~/components/Admin/Projects/add";
import Project from "~/components/Admin/Projects";

const app = document.getElementById('app')


//  private router
router.on("/admin/*", () => { }, {
    before(next) {
        const user = JSON.parse(localStorage.getItem("user")) || "";
        console.log(user)
        if(user === "") window.location.href = "/signin"
        if (!user) return (window.location.href = "/signin");
        next();
    }
})

// Render content
router.on('/', () => render(() => Component(HomePage()), app))
router.on('/home', () => render(() => Component(HomePage()), app))
router.on('/about', () => render(() => Component(AboutPage()), app))
router.on('/project', () => render(() => Component(ProjectPage()), app))
router.on('/project/:id', ({ data }) => render(() => DetailProject(data), app))


router.on('/skills', () => render(() => Component(SkillsPage()), app))
router.on('/skills/add', () => render(() => Component(ProductAddPage()), app))
router.on("/product/update/:id", ({ data }) => render(() => ProductEditPage(data), app));




// Admin



router.on('/admin', () => render(() => SignInPage(), app))
router.on('/signin', () => render(() => SignInPage(), app))
router.on('/signup', () => render(() => SignUpPage(), app))

router.on("/admin/project/add",render(()=>AddProject(),app))
router.on("/admin/projects",render(()=>Project(),app))
router.resolve()



