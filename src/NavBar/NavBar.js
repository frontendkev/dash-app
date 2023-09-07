import NavSelect from "../Components/NavSelect";
import { useContext, useState } from "react";
import { dashState, dashActions, SHOW_CATEGORY, SHOW_YEAR, FETCH_SALES, FETCH_PHONE_SALES, FETCH_TABLET_SALES, FETCH_AUDIO_SALES, FETCH_TV_SALES } from "../DashContext/DashReducer";

export default function NavBar() {
    const dashContext = useContext(dashState)
    const dashDispatch = useContext(dashActions)
    const [categoryDefault, setCategoryDefault] = useState('all')
    const [yearDefault, setYearDefault] = useState(2023)
    const categoryLinks = {
        label: 'category',
        options: [
            {
                value: 'all'
            },
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

    const yearLinks = {
        label: 'year',
        options: [
            {
                value: 2023
            },
            {
                value: 2022
            },
            {
                value: 2021
            }
        ]
    }
    function showCategory() {
        dashDispatch({ type: SHOW_CATEGORY, payload: !dashContext.showCategory })
        dashDispatch({ type: SHOW_YEAR, payload: false })
    }
    function showYear() {
        dashDispatch({ type: SHOW_YEAR, payload: !dashContext.showYear })
        dashDispatch({ type: SHOW_CATEGORY, payload: false })
    }
    function filterByYear(value) {
        switch (categoryDefault) {
            case 'all': {
                setYearDefault(() => value)
                dashDispatch({ type: SHOW_YEAR, payload: !dashContext.showYear })
                dashDispatch({ type: FETCH_SALES, payload: value })
                break;
            }
            case 'phones': {
                setYearDefault(() => value)
                dashDispatch({ type: SHOW_YEAR, payload: !dashContext.showYear })
                dashDispatch({ type: FETCH_PHONE_SALES, payload: value })
                break;
            }
            case 'tablets': {
                setYearDefault(() => value)
                dashDispatch({ type: SHOW_YEAR, payload: !dashContext.showYear })
                dashDispatch({ type: FETCH_TABLET_SALES, payload: value })
                break;
            }
            case 'home & audio': {
                setYearDefault(() => value)
                dashDispatch({ type: SHOW_YEAR, payload: !dashContext.showYear })
                dashDispatch({ type: FETCH_AUDIO_SALES, payload: value })
                break;
            }
            case 'tv sets': {
                setYearDefault(() => value)
                dashDispatch({ type: SHOW_YEAR, payload: !dashContext.showYear })
                dashDispatch({ type: FETCH_TV_SALES, payload: value })
                break;
            }
            default: {
                return categoryDefault;
                }
       }
    }
    function filterByCategory(value) {
        switch (value) {
            case 'all': {
                dashDispatch({ type: FETCH_SALES, payload: yearDefault })
                dashDispatch({ type: SHOW_CATEGORY, payload: !dashContext.showCategory })
                setCategoryDefault(() => value)
                break;
            }
            case 'phones': {
                dashDispatch({ type: FETCH_PHONE_SALES, payload: yearDefault })
                dashDispatch({ type: SHOW_CATEGORY, payload: !dashContext.showCategory })
                setCategoryDefault(() => value)
                break;
            }
            case 'tablets': {
                dashDispatch({ type: SHOW_CATEGORY, payload: !dashContext.showCategory })
                setCategoryDefault(() => value)
                dashDispatch({ type: FETCH_TABLET_SALES, payload: yearDefault })
                break;
            }
            case 'home & audio': {
                dashDispatch({ type: SHOW_CATEGORY, payload: !dashContext.showCategory })
                setCategoryDefault(() => value)
                dashDispatch({ type: FETCH_AUDIO_SALES, payload: yearDefault })
                break;
            }
            case 'tv sets': {
                dashDispatch({ type: SHOW_CATEGORY, payload: !dashContext.showCategory })
                setCategoryDefault(() => value)
                dashDispatch({ type: FETCH_TV_SALES, payload: yearDefault })
                break;
            }
            default: {
                return value;
            }
        }
    }
    return (
        <nav className={'relative w-full portrait:h-[8em] landscape:lg:h-[5em] bg-[#253761] flex landscape:flex-row justify-between items-center pl-[2em] pr-[2em] portrait:flex-col portrait:pb-4 landscape:h-[4em]'}>
            <div className="relative w-fit h-full flex items-center">
                <h2 className="relative landscape:text-[2em] portrait:text-[0.8em] font-quicksandSemiBold text-gray-100 text-start capitalize">
                    e-commerce sales analysis
                </h2>
            </div>

            <div className="relative w-fit h-full flex flex-row items-center gap-x-[0.5em]">
                <NavSelect label={categoryLinks.label} value={categoryDefault} options={categoryLinks.options} show={dashContext.showCategory} dispatchShow={showCategory} filterByOptions={filterByCategory} />

                <NavSelect label={yearLinks.label} value={yearDefault} options={yearLinks.options} show={dashContext.showYear} dispatchShow={showYear} filterByOptions={filterByYear} />
            </div>
        </nav>
    )
}