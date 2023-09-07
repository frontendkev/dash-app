import ArrowDown from "../Svg/ArrowDown"
export default function NavSelect({ label, value, options, show, dispatchShow, filterByOptions }) {
    
  
    return (
        <div className={`relative cursor-default w-[10em] h-[3.5em] outline outline-[0.1em] outline-gray-200 text-gray-200 pl-2 pr-2 flex flex-col justify-center`}>
            <div className="relative w-full h-fit flex flex-col justify-center">
                <div className="relative w-full h-[1.5em] flex items-center">
                    <p className="relative capitalize text-gray-200 font-quicksandSemiBold text-[0.8em] text-start"> {label}</p>
                </div>
                <button onClick={dispatchShow} className={"relative w-full h-[1.5em] bg-[#385492] outline outline-1 outline-gray-200 flex flex-row justify-between pl-2 pr-2 items-center cursor-pointer"}>
                    <p className="relative capitalize text-gray-200 text-[0.8em] font-quicksandSemiBold">
                        {value}
                    </p>
                    <ArrowDown />
                </button>
            </div>

            <div className="relative w-full h-fit bg-red-500">
                <div className={`${show ? 'block' : 'hidden'} absolute w-full h-fit bg-[#385492] z-[20] top-[0.5em] mx-auto shadow-light`}>
                    {
                        options && options.map((option, i) => {
                            return (
                                <div key={i} className='relative w-full h-fit'>
                                    <button onClick={() => filterByOptions(option.value)} className={"relative w-full h-[2em] flex items-center pl-2 transition all duration-300 ease-in-out hover:bg-[#6A80B4]"}>
                                        <p className="relative font-quicksandSemiBold text-gray-200 text-[0.8em] capitalize">
                                            {option.value}
                                        </p>
                                    </button>
                                    < hr className="relative w-full h-[1em] outline outline-0 outline-gray-200 opacity-[0.7] last:hidden" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}