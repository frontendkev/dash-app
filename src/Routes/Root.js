import {Outlet} from "react-router-dom";


export default function Root () {
    return (
        <section>
             <header>
                <nav className={'relative w-full landscape:lg:h-[5em] bg-[#253761] flex items-center pl-[2em]'}>
                    <h2 className="relative text-[2em] font-quicksandBold text-gray-100 text-start capitalize">
                        e-commerce sales analysis
                    </h2>
                 </nav>
             </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </section>
    )
}
