import { Router } from "./router.js"


const router = new Router()
router.add('/', '/views/home.html')
router.add('/universe', '/views/universe.html')
router.add('/exploration', '/views/exploration.html')
router.add(404, '/views/404.html')


router.handle()
window.route = () => router.route()
window.onpopstate = () => router.handle()


const homePage = document