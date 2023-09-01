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
    Legend
} from "recharts";


export default function Home() {
    const locationData = [
        {
            name: "abuja", sales: 80, totalSales: "$3.5m"
        },
        {
            name: "kano", sales: 64, totalSales: "$2.8m"
        },
        {
            name: "lagos", sales: 56, totalSales: "$2.4m"
        },
        {
            name: "ghana", sales: 44, totalSales: "$1.9m"
        },
        {
            name: "london", sales: 36, totalSales: "$1.5m"
        }
    ]


    const salesData = [
        {
            year: 2018, orders: 600, sales: 820, x: "$1.8m"
        },
        {
            year: 2019, orders: 1000, sales: 1205, x: "$2.5m"
        },
        {
            year: 2020, orders: 500, sales: 950, x: "$2m"
        },
        {
            year: 2021, orders: 800, sales: 1160, x: "$2.2m"
        },
        {
            year: 2022, orders: 1240, sales: 900, x: "$1.9m"
        },
        {
            year: 2023, orders: 1300, sales: 1500, x: "$3m"
        },
    ]

    const phoneSales = [
        {
            year: 2018, sold: 1000, sales: "$0.7m", orders: 300
        },
        {
            year: 2019, sold: 500, sales: "$500k", orders: 1150
        },
        {
            year: 2020, sold: 1700, sales: "$1.3m", orders: 1000
        },
        {
            year: 2021, sold: 2000, sales: "$1.5m", orders: 2400
        },
        {
            year: 2022, sold: 1400, sales: "$1m", orders: 2000
        },
        {
            year: 2023, sold: 3000, sales: "$2.2m", orders: 2500
        },
    ]

    const clothingSales = [
        {
            year: 2018, sold: 800, sales: "$400k", orders: 200
        },
        {
            year: 2019, sold: 2700, sales: "$800k", orders: 3500
        },
        {
            year: 2020, sold: 1700, sales: "$600k", orders: 500
        },
        {
            year: 2021, sold: 3500, sales: "$900k", orders: 4500
        },
        {
            year: 2022, sold: 2500, sales: "$700k", orders: 1000
        },
        {
            year: 2023, sold: 5000, sales: "$1.8m", orders: 3700
        },
    ]

    const furnitureSales = [
        {
            year: 2018, sold: 800, sales: "$300k", orders: 200
        },
        {
            year: 2019, sold: 3700, sales: "$1.3m", orders: 4500
        },
        {
            year: 2020, sold: 1700, sales: "$600k", orders: 3000
        },
        {
            year: 2021, sold: 5500, sales: "$1.8m", orders: 4500
        },
        {
            year: 2022, sold: 3000, sales: "$1m", orders: 4000
        },
        {
            year: 2023, sold: 5000, sales: "$1.6m", orders: 5800
        },
    ]

    return (
        <section className={'relative w-full min-h-screen flex landscape:flex-row portrait:flex-col bg-[#d3d8e0]'}>
            <div className="absolute w-full landscape:lg:h-[8em] bg-[#253761]">

            </div>
            <section className="relative landscape:lg:w-[75%] portrait:p-[1em] min-h-[100vh] flex flex-col gap-y-[1em] overflow-hidden">
                <section className="relative w-full landscape:lg:h-[15em] portrait:h-[70vh] portrait:gap-y-[1em] flex landscape:flex-row portrait:flex-col justify-center landscape:gap-x-[2em]">
                    <section className="relative landscape:lg:w-[45%] portrait:w-full h-full bg-[#ffffff] flex flex-col items-center rounded-md shadow-light">
                        <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[1em] text-gray-500'}>
                                <span className="capitalize"> sales</span> by <span className="capitalize">location</span>
                            </h4>
                        </div>
                        <ResponsiveContainer width='100%' height="100%">
                            <BarChart margin={{ top: 30, left: 30, right: 30, bottom: 20 }} data={locationData}>
                                <Tooltip />
                                <Bar dataKey={"sales"} barSize={60} fill={"#2a4994"}>
                                    <LabelList dataKey={"totalSales"} position={'top'} fontSize={13} className={'font-quicksandBold'} />
                                </Bar>
                                <XAxis dataKey={"name"} orientation={'bottom'} fontSize={15} className={"capitalize font-quicksandSemiBold"} />
                            </BarChart>
                        </ResponsiveContainer>
                    </section>

                    <section className="relative landscape:lg:w-[45%] h-full bg-[#ffffff] flex flex-col items-center rounded-md shadow-light">
                        <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[1em] text-gray-500'}>
                                <span className="capitalize"> sales</span> and <span className="capitalize">average order value</span> by <span className="capitalize"> year</span>
                            </h4>
                        </div>
                        <ResponsiveContainer width='100%' height="100%">

                            <ComposedChart data={salesData} margin={{ top: 30, right: 30, left: 30, bottom: 20 }}>
                                <CartesianGrid stroke={'#f5f5f5'} strokeDasharray={"3 3"} />

                                <Bar type={"monotone"} dataKey={"sales"} barSize={40} fill={"#2a4994"}>
                                    <LabelList dataKey={"x"} position={'top'} fontSize={13} className={'font-quicksandBold'} />
                                </Bar>
                                <Line type={"monotone"} dataKey={"orders"} stroke={'#9447ff'} strokeWidth={2}>
                                    <LabelList dataKey={"orders"} position={'top'} fontSize={13} className={'font-quicksandBold text-[10px]'} />
                                </Line>
                                <XAxis dataKey={"year"} fontSize={13} className={'font-quicksandSemiBold'} />
                                <YAxis type="number" includeHidden width={30} fontSize={10} />
                                <Tooltip />
                            </ComposedChart>
                        </ResponsiveContainer>

                    </section>
                </section>
                <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                    <h4 className={'relative font-quicksandBold text-[1.5em] text-gray-500'}>
                        <span className="capitalize"> sales</span> by <span className="capitalize">sub</span><span className="capitalize">category</span>
                    </h4>
                </div>
                <section className="relative w-full landscape:lg:h-[20em] flex justify-center portrait:p-[0.8em]">
                    <div className="relative w-[60em] h-[18em] bg-[#ffffff] rounded-md shadow-light flex flex-col items-center">
                        <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[1em] text-gray-500'}>
                                <span className="capitalize">mobile phone sales and order value</span> by <span className="capitalize">year</span>
                            </h4>
                        </div>
                        <ResponsiveContainer width={"100%"} height="90%">

                            <LineChart data={phoneSales} margin={{ left: 20, right: 20 }}>
                                <CartesianGrid stroke={'blue'} opacity={0.3} strokeDasharray={"3 3"} />

                                <Line type={"monotone"} dataKey={"sold"} strokeWidth={0.5} stroke={'blue'} fill={"#2a4994"} >
                                    <LabelList stroke="blue" strokeWidth={0.5} dataKey={"sales"} position={'top'} fontSize={10} className={'font-quicksandBold'} />
                                </Line>
                                <Line type={"monotone"} dataKey={"orders"} strokeWidth={0.5} stroke={'red'} fill={"#e11d48"}>
                                    <LabelList dataKey={"orders"} position={'top'} fontSize={10} className={'font-quicksandBold'} strokeWidth={0.5} stroke='red' />
                                </Line>
                                <XAxis dataKey={"year"} fontSize={10} className={'font-quicksandSemiBold'} />
                                <YAxis type={'number'} yAxisId={0} fontSize={9} className={'font-quicksandBold'} domain={[0, 4000]} stroke='red' strokeWidth={0.5} />
                                <YAxis yAxisId={1} fontSize={9} className={'font-quicksandBold'} orientation={'right'} domain={[0, 3]} tickCount={5} tickFormatter={(label) => `${'$' + label}m`} stroke='blue' strokeWidth='0.5px' />
                                <Tooltip />
                                <Legend verticalAlign={'top'} fontSize={50} align="center" type='rect' iconType="rect" iconSize={8} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>


                </section>

                <section className="relative w-full landscape:lg:h-[20em] flex justify-center">
                    <div className="relative w-[60em] h-[18em] bg-[#ffffff] rounded-md shadow-light flex flex-col items-center">
                        <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[1em] text-gray-500'}>
                                <span className="capitalize">clothing sales and order value</span> by <span className="capitalize">year</span>
                            </h4>
                        </div>
                        <ResponsiveContainer width={"100%"} height="90%">

                            <LineChart data={clothingSales} margin={{ left: 20, right: 20 }}>
                                <CartesianGrid stroke={'blue'} opacity={0.3} strokeDasharray={"3 3"} />

                                <Line type={"monotone"} dataKey={"sold"} strokeWidth={0.5} stroke={'blue'} fill={"#2a4994"} >
                                    <LabelList stroke="blue" strokeWidth={0.5} dataKey={"sales"} position={'top'} fontSize={10} className={'font-quicksandBold'} />
                                </Line>
                                <Line type={"monotone"} dataKey={"orders"} strokeWidth={0.5} stroke={'red'} fill={"#e11d48"}>
                                    <LabelList dataKey={"orders"} position={'top'} fontSize={10} className={'font-quicksandBold'} strokeWidth={0.5} stroke='red' />
                                </Line>
                                <XAxis dataKey={"year"} fontSize={10} className={'font-quicksandSemiBold'} />
                                <YAxis type={'number'} yAxisId={0} fontSize={9} className={'font-quicksandBold'} domain={[0, 6000]} stroke='red' strokeWidth={0.5} />
                                <YAxis yAxisId={1} fontSize={9} className={'font-quicksandBold'} orientation={'right'} domain={[0, 2]} tickCount={5} tickFormatter={(label) => `${'$' + label}m`} stroke='blue' strokeWidth='0.5px' />
                                <Tooltip />
                                <Legend verticalAlign={'top'} fontSize={50} align="center" type='rect' iconType="rect" iconSize={8} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>


                </section>

                <section className="relative w-full landscape:lg:h-[20em] flex justify-center">
                    <div className="relative w-[60em] h-[18em] bg-[#ffffff] rounded-md shadow-light flex flex-col items-center">
                        <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[1em] text-gray-500'}>
                                <span className="capitalize">furniture sales and order value</span> by <span className="capitalize">year</span>
                            </h4>
                        </div>
                        <ResponsiveContainer width={"100%"} height="90%">
                            <LineChart data={furnitureSales} margin={{left: 20, right: 20}}>
                                <CartesianGrid stroke={'blue'} opacity={0.3} strokeDasharray={"3 3"} />

                                <Line type={"monotone"} dataKey={"sold"} strokeWidth={0.5} stroke={'blue'} fill={"#2a4994"} >
                                    <LabelList stroke="blue" strokeWidth={0.5} dataKey={"sales"} position={'top'} fontSize={10} className={'font-quicksandBold'} />
                                </Line>
                                <Line type={"monotone"} dataKey={"orders"} strokeWidth={0.5} stroke={'red'} fill={"#e11d48"}>
                                    <LabelList dataKey={"orders"} position={'top'} fontSize={10} className={'font-quicksandBold'} strokeWidth={0.5} stroke='red' />
                                </Line>
                                <XAxis dataKey={"year"} fontSize={10} className={'font-quicksandSemiBold'} />
                                <YAxis type={'number'} yAxisId={0} fontSize={9} className={'font-quicksandBold'} domain={[0, 6000]} stroke='red' strokeWidth={0.5} />
                                <YAxis yAxisId={1} fontSize={9} className={'font-quicksandBold'} orientation={'right'} domain={[0, 2]} tickCount={5} tickFormatter={(label) => `${'$' + label}m`} stroke='blue' strokeWidth='0.5px'/>
                                <Tooltip />
                                <Legend verticalAlign={'top'} fontSize={50} align="center" type='rect' iconType="rect" iconSize={8} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>


                </section>
            </section>

            <section className="relative w-[25%] h-[100vh] bg-blue-300 z-10">

            </section>
        </section>
    )
}
