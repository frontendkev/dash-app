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
            <footer className="relative w-full h-[2.5em] bg-[#6A80B4] flex items-center justify-center">
                <h2 className="relative font-quicksandSemiBold capitalize text-gray-200 text-[0.8em]">
                    made by kevfrontdev@gmail.com
                </h2>
            </footer>
        </section>
    )
}
