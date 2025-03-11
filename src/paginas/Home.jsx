
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Te damos la Bienvenida</h1>
            <ul>
                <li><Link to="/projects">Ver Proyectos</Link></li>
                <li><Link to="/resume">Ver Currículum</Link></li>
            </ul>
        </div>
    );
}

export default Home;