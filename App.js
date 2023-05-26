import { render, router } from "~/router"
import HomePage from "~/components/pages/Home"
import ProjectPage from "~/components/pages/Project"
import AboutPage from "~/components/pages/About"
import SkillsPage from "~/components/pages/Skills"
import DetailProject from "~/components/pages/Project/DetailProject"

const app = document.getElementById('app')

    
// Render content
router.on('/', () => render(HomePage, app))
router.on('/home', () => render(HomePage, app))
router.on('/about', () => render(AboutPage, app))
router.on('/skills', () => render(SkillsPage, app))
router.on('/project/:id', ({ data }) => render(() => DetailProject(data), app))
router.on('/project', () => render(ProjectPage, app))

router.resolve()


