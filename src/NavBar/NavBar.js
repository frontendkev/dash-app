import NavSelect from "../Components/NavSelect";
import { useContext, useState } from "react";
import { dashState, dashActions, SHOW_CATEGORY } from "../DashContext/DashReducer";

export default function NavBar() {
    const dashContext = useContext(dashState)
    const dashDispatch = useContext(dashActions)
    const [categoryDefault, setCategoryDefault] = useState('all')
    const [yearDefault, setYearDefault] = useState('2019')
    const categoryLinks = {
        label: 'category',
        options: [
            {
                value: 'phones'
            },
            {
                value: 'tablets'
            },
            {
                value: 'home & audio'
            },
            {
                value: 'tv sets'
            }
        ]
    }
    function showCategory() {
        return dashDispatch({type: SHOW_CATEGORY, payload: true})
    }
    return (
        <nav className={'relative w-full portrait:h-[4em] landscape:lg:h-[5em] bg-[#253761] flex flex-row justify-between items-center pl-[2em] pr-[2em]'}>
            <div className="relative w-fit h-full flex items-center">
                <h2 className="relative landscape:text-[2em] portrait:text-[1em] font-quicksandSemiBold text-gray-100 text-start capitalize">
                    e-commerce sales analysis
                </h2>
            </div>

            <div className="relative w-fit h-full flex flex-row items-center gap-x-[0.5em]">
                <NavSelect label={categoryLinks.label} value={categoryDefault} options={categoryLinks.options} show={dashContext.showCategory} dispatch={showCategory} />

                <NavSelect label={'year'} value={2023} />
            </div>
        </nav>
    )
}