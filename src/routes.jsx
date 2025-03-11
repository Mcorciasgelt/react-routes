import { createBrowserRouter } from "react-router-dom";
import Home from "./paginas/Home"
import Projects from "./paginas/Projects"
import Resume from "./paginas/Resume"

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/resume", element: <Resume /> },
])


export default router