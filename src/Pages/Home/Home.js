import { useContext, useEffect } from "react";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Line,
    LabelList,
    BarChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LineChart,
    Label,
    Legend,
    PieChart,
    Pie,
    Cell
} from "recharts";
import { dashActions, dashState, FETCH_SALES } from "../../DashContext/DashReducer";


export default function Home() {
    const dashContext = useContext(dashState)
    const dashDispatch = useContext(dashActions)

    const colors = [
        '#2a4994', '#e11d48'
    ]

    function renderLabel(entry) {
        return entry.percentage
    }


    useEffect(() => {
        dashDispatch({ type: FETCH_SALES, payload: 2023 })
    }, [])

    return (
        <section className={'relative w-full landscape:min-h-[70vh] portrait:min-h-screen flex landscape:flex-col landscape:lg:flex-row portrait:flex-col bg-[#d3d8e0] overflow-hidden landscape:pt-[1em] pb-[2em] landscape:lg:pb-[1em] landscape:gap-y-[1.5em]'}>
            <div className="absolute w-full portrait:h-[10em] landscape:h-[6em] landscape:lg:h-[8em] bg-[#253761] top-0">

            </div>

            <section className="relative landscape:lg:w-[75%] landscape:w-full portrait:w-full portrait:p-[1em] h-fit flex flex-col landscape:lg:gap-y-[2.5em] portrait:gap-y-[2em] landscape:gap-y-[1.5em] z-[6] landscape:pl-[1.5em] landscape:pr-[1.5em]">
                <section className="relative w-full landscape:lg:h-[15em] landscape:h-[13em] portrait:h-[70vh] portrait:gap-y-[1.5em] flex landscape:flex-row portrait:flex-col justify-center landscape:gap-x-[1.5em] landscape:lg:gap-x-[2em]">
                    <section className="relative landscape:lg:w-[45%] landscape:w-[50%] portrait:w-full h-full bg-[#ffffff] flex flex-col items-center rounded-md shadow-light">
                        <div className="relative w-full h-[15%] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                <span className="capitalize">sales</span> by <span className="capitalize">location</span>
                            </h4>
                        </div>
                        <div className="relative w-full h-[85%]">
                            <ResponsiveContainer width='100%' height="100%">
                                <BarChart margin={{ top: 30, left: 30, right: 30, bottom: 20 }} data={dashContext.salesByLocation}>
                                    <Tooltip />
                                    <Bar dataKey={"sales"} barSize={60} fill={"#6a80b4"}>
                                        <LabelList dataKey={"totalSales"} position={'top'} fontSize={13} className={'font-quicksandBold'} />
                                    </Bar>
                                    <XAxis dataKey={"name"} orientation={'bottom'} fontSize={15} className={"capitalize font-quicksandSemiBold"} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </section>

                    <section className="relative landscape:lg:w-[45%] landscape:w-[50%] h-full bg-[#ffffff] flex flex-col items-center rounded-md shadow-light">
                        <div className="relative w-full h-[15%] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                <span className="capitalize">sales</span> by <span className="capitalize">month</span>
                            </h4>
                        </div>

                        <div className="relative w-full h-[85%]">
                            <ResponsiveContainer width='100%' height="100%">

                                <BarChart data={dashContext.salesByMonth} margin={{ right: 30 }}>
                                    <CartesianGrid stroke={'#6a80b4'} strokeDasharray={"3 3"} opacity={'0.5'} />
                                    <Tooltip />
                                    <Bar type={"monotone"} dataKey={"sold"} fill={"#6a80b4"} radius={2} >
                                        <LabelList stroke="grey" strokeWidth={0.5} dataKey={"sales"} position={'top'} fontSize={10} className={'font-quicksandRegular'} />
                                    </Bar>
                                    <XAxis dataKey={"month"} type={'category'} fontSize={10} className={'font-quicksandSemiBold'} />
                                    <YAxis type={'number'} yAxisId={0} fontSize={9} className={'font-quicksandBold'} domain={['dataMin', dashContext.dataMax]} stroke='red' strokeWidth={0.5} tickCount={5} dataKey={'orders'} />

                                </BarChart>
                            </ResponsiveContainer>

                        </div>

                    </section>
                </section>


                <div className="relative w-full landscape:lg:h-[16em] landscape:h-[13em] portrait:h-fit flex portrait:flex-col landscape:flex-row landscape:lg:gap-x-[2em] landscape:gap-x-[1.5em] justify-center portrait:gap-y-[2em]">
                    <section className="relative landscape:lg:w-[45%] landscape:w-[50%] portrait:w-full landscape:lg:h-full portrait:h-[18em] flex justify-center ">
                        <div className="relative w-full h-full bg-[#ffffff] rounded-md shadow-light flex flex-col items-center">
                            <div className="relative w-full h-[15%] flex items-center justify-start pl-[2em]">
                                <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                    <span className="capitalize">average order value</span> by <span className="capitalize">month</span>
                                </h4>
                            </div>

                            <div className="relative w-full h-[85%]">
                                <ResponsiveContainer width={"100%"} height="90%">

                                    <LineChart data={dashContext.salesByMonth} margin={{ right: 30 }}>
                                        <CartesianGrid stroke={'#6a80b4'} strokeDasharray={"3 3"} opacity={'0.5'} />
                                        <Tooltip />
                                        <Line type={"monotone"} dataKey={"orders"} strokeWidth={1} stroke={'red'} fill={"#e11d48"} opacity={0.8}>
                                            <LabelList stroke="grey" strokeWidth={0.5} dataKey={"orders"} position={'top'} fontSize={10} className={'font-quicksandRegular'} />
                                        </Line>
                                        <XAxis dataKey={"month"} type={'category'} fontSize={10} className={'font-quicksandSemiBold'} />
                                        <YAxis type={'number'} yAxisId={0} fontSize={9} className={'font-quicksandBold'} domain={[5000, dashContext.dataMax]} stroke='red' strokeWidth={0.5} tickCount={5} dataKey={'orders'} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                        </div>


                    </section>

                    <section className="relative landscape:lg:w-[45%] landscape:w-[50%] portrait:w-full portrait:h-[18em] landscape:lg:h-full flex justify-center">
                        <div className="relative w-full h-full bg-[#ffffff] rounded-md shadow-light flex flex-col items-center">
                            <div className="relative w-full h-[15%] flex items-center justify-start pl-[2em]">
                                <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                    <span className="capitalize">sales</span> by <span className="capitalize">subcategory</span>
                                </h4>
                            </div>

                            <div className="relative w-full h-[85%]">
                                <ResponsiveContainer width={"100%"} height="90%">

                                    <BarChart data={dashContext.salesByCategory} margin={{ left: 30 }}>
                                        <CartesianGrid stroke={'blue'} opacity={0.3} strokeDasharray={"3 3"} />
                                        <Tooltip />
                                        <Bar type={"monotone"} dataKey={'sold'} barSize={60} fill={'#6a80b4'}>
                                            <LabelList stroke="blue" strokeWidth={0.5} dataKey={"sales"} position={'top'} fontSize={10} className={'font-quicksandBold'} />
                                        </Bar>
                                        <XAxis dataKey={"category"} type="category" fontSize={10} className={'font-quicksandSemiBold'} />

                                        <YAxis fontSize={9} className={'font-quicksandBold'} orientation={'right'} domain={[0, 500000]} tickCount={5} tickFormatter={(label) => `${'$' + label}`} stroke='blue' strokeWidth='0.5px' />

                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                        </div>


                    </section>
                </div>
            </section>

            <section className="relative landscape:lg:w-[25%] landscape:w-full portrait:w-full landscape:h-full portrait:h-fit z-10 flex portrait:flex-col landscape:lg:flex-col landscape:flex-row gap-y-[15px] items-center portrait:p-[1em] landscape:pl-[1.5em] landscape:pr-[1.5em] landscape:gap-x-[1.5em]">

                <div className="relative landscape:lg:w-[95%] landscape:w-[50%] portrait:w-full landscape:h-[20em] portrait:h-[23em] bg-[#ffffff] rounded-md shadow-light flex flex-col justify-between">
                    <div className="relative w-full h-[20%] flex flex-col justify-center items-center">
                        <h4 className="relative capitalize text-[0.85em] font-quicksandSemiBold text-gray-600">
                            product returned most
                        </h4>

                        <h2 className="relative font-quicksandBold text-rose-700 text-[2em] capitalize">
                            {dashContext.returnedMost}
                        </h2>
                    </div>

                    < hr className="relative w-[90%] mx-auto border-gray-500" />
                    <div className="relative w-full h-[80%]">
                        <ResponsiveContainer width={'100%'} height={'100%'}>
                            <PieChart margin={{ right: 20, left: 20 }}>
                                <Pie data={dashContext.pieSales} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#9447ff" />
                                <Pie data={dashContext.pieSales} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} label={renderLabel} fontSize={13}>
                                    {
                                        dashContext && dashContext.pieSales.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index]} />
                                        ))
                                    }
                                </Pie>
                                <Legend align="center" verticalAlign='bottom' type="circle" payload={[{ value: 'delivered', type: 'circle', id: 0, color: '#2a4994' }, { value: 'returned', type: 'circle', id: 1, color: '#e11d48' }]} iconSize={10} />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                   </div>
                </div>


                <div className="relative landscape:lg:w-[95%] landscape:w-[50%] portrait:w-full portrait:h-fit landscape:h-[20em] landscape:lg:h-fit bg-[#ffffff] rounded-md shadow-light overflow-hidden">
                    <div className="relative w-full landscape:lg:h-[2em] bg-[#a8b6d3] flex items-center pl-2">
                        <h3 className="relative font-quicksandRegular text-[0.9em] capitalize text-gray-700 text-start">
                            reason for return
                        </h3>
                    </div>
                    <div className="relative w-full h-fit ">
                        {
                            dashContext && dashContext.returnReasons.map((reason, index) => (

                                <div key={index} id="reasons" className="relative w-full h-[2em] flex flex-row items-center justify-between pl-2 pr-2">
                                    <p className="relative capitalize text-gray-800 font-quicksandRegular text-[0.8em]">
                                        {
                                            reason.type + '-' + reason.reason
                                        }
                                    </p>

                                    <p className="relative font-quicksandRegular text-[0.8em] text-gray-800">
                                        {reason.count}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}
