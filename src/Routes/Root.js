import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar";


export default function Root () {
    return (
        <section>
             <header>
                <NavBar />
             </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </section>
    )
}
