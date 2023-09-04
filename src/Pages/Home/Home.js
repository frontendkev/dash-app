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

    const monthlySales = [
        {
            month: 'jan', sold: 20000, sales: "$2m", orders: 15000
        },
        {
            month: "feb", sold: 45000, sales: "$4.5m", orders: 20000
        },
        {
            month: "mar", sold: 30000, sales: "$3m", orders: 35000
        },
        {
            month: "apr", sold: 40000, sales: "$4m", orders: 45000
        },
        {
            month: "may", sold: 25000, sales: "$2.5m", orders: 20000
        },
        {
            month: "jun", sold: 35000, sales: "$3.5m", orders: 30000
        },
        {
            month: 'jul', sold: 50000, sales: "$5.5m", orders: 50000
        },
        {
            month: "aug", sold: 40000, sales: "$4m", orders: 25000
        },
        {
            month: "sep", sold: 45000, sales: "$4.5m", orders: 40000
        },
        {
            month: "oct", sold: 25000, sales: "$2.5m", orders: 30000
        },
        {
            month: "nov", sold: 40000, sales: "$4m", orders: 40000
        },
        {
            month: "dec", sold: 45000, sales: "$4.5m", orders: 55000
        },
    ]



    const categorySales = [
        {
            category: 'phones', sold: 800, sales: "$800k"
        },
        {
            category: 'tablets', sold: 2700, sales: "$270k"
        },
        {
            category: 'home audio', sold: 1700, sales: "$170k"
        },
        {
            category: 'tv sets', sold: 1000, sales: "$100k"
        }
    ]


    const colors = [
        '#2a4994', '#e11d48'
    ]

    const pieSales = [
        {
            name: 'delivered',
            value: 80,
            percentage: '80%'
        },
        {
            name: 'returned',
            value: 20,
            percentage: "20%"
        }
    ]

    function renderLabel(entry) {
        return entry.percentage
    }

    const returnReasons = [
        {
            type: 'delivery',
            reason: 'wrong item',
            count: 345
        },
        {
            type: 'product',
            reason: 'not fitting expectation',
            count: 138
        },
        {
            type: 'quality',
            reason: 'defective item',
            count: 531
        },
        {
            type: 'onsite',
            reason: 'description mismatch',
            count: 145
        },
        {
            type: 'delivery',
            reason: 'missing item/part',
            count: 215
        }
    ]

    return (
        <section className={'relative w-full landscape:h-[85vh] portrait:min-h-screen flex landscape:flex-row portrait:flex-col bg-[#d3d8e0] overflow-hidden'}>
            <div className="absolute w-full landscape:lg:h-[8em] bg-[#253761]">

            </div>
            <section className="relative landscape:lg:w-[75%] portrait:w-full portrait:p-[1em] h-fit flex flex-col gap-y-[2.5em]">
                <section className="relative w-full landscape:lg:h-[15em] portrait:h-[70vh] portrait:gap-y-[1.5em] flex landscape:flex-row portrait:flex-col justify-center landscape:gap-x-[2em]">
                    <section className="relative landscape:lg:w-[45%] portrait:w-full h-full bg-[#ffffff] flex flex-col items-center rounded-md shadow-light">
                        <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                <span className="capitalize">sales</span> by <span className="capitalize">location</span>
                            </h4>
                        </div>
                        <ResponsiveContainer width='100%' height="100%">
                            <BarChart margin={{ top: 30, left: 30, right: 30, bottom: 20 }} data={locationData}>
                                <Tooltip />
                                <Bar dataKey={"sales"} barSize={60} fill={"#6a80b4"}>
                                    <LabelList dataKey={"totalSales"} position={'top'} fontSize={13} className={'font-quicksandBold'} />
                                </Bar>
                                <XAxis dataKey={"name"} orientation={'bottom'} fontSize={15} className={"capitalize font-quicksandSemiBold"} />
                            </BarChart>
                        </ResponsiveContainer>
                    </section>

                    <section className="relative landscape:lg:w-[45%] h-full bg-[#ffffff] flex flex-col items-center rounded-md shadow-light">
                        <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                            <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                <span className="capitalize">sales</span> by <span className="capitalize">month</span>
                            </h4>
                        </div>
                        <ResponsiveContainer width='100%' height="100%">

                            <BarChart data={monthlySales} margin={{ right: 30 }}>
                                <CartesianGrid stroke={'#6a80b4'} strokeDasharray={"3 3"} opacity={'0.5'} />
                                <Tooltip />
                                <Bar type={"monotone"} dataKey={"sold"} fill={"#6a80b4"} radius={2} >
                                    <LabelList stroke="grey" strokeWidth={0.5} dataKey={"sales"} position={'top'} fontSize={10} className={'font-quicksandRegular'} />
                                </Bar>
                                <XAxis dataKey={"month"} type={'category'} fontSize={10} className={'font-quicksandSemiBold'} />
                                <YAxis type={'number'} yAxisId={0} fontSize={9} className={'font-quicksandBold'} domain={['dataMin', 60000]} stroke='red' strokeWidth={0.5} tickCount={5} dataKey={'orders'} />

                            </BarChart>
                        </ResponsiveContainer>

                    </section>
                </section>
                <div className="relative w-full landscape:lg:h-[16em] portrait:h-fit flex portrait:flex-col landscape:flex-row landscape:gap-x-[2em] justify-center portrait:gap-y-[2em]">
                    <section className="relative landscape:w-[45%] portrait:w-full landscape:lg:h-full portrait:h-[18em] flex justify-center ">
                        <div className="relative w-full h-full bg-[#ffffff] rounded-md shadow-light flex flex-col items-center">
                            <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                                <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                    <span className="capitalize">average order value</span> by <span className="capitalize">month</span>
                                </h4>
                            </div>
                            <ResponsiveContainer width={"100%"} height="90%">

                                <LineChart data={monthlySales} margin={{ right: 30 }}>
                                    <CartesianGrid stroke={'#6a80b4'} strokeDasharray={"3 3"} opacity={'0.5'} />
                                    <Tooltip />
                                    <Line type={"monotone"} dataKey={"orders"} strokeWidth={1} stroke={'red'} fill={"#e11d48"} opacity={0.8}>
                                        <LabelList stroke="grey" strokeWidth={0.5} dataKey={"orders"} position={'top'} fontSize={10} className={'font-quicksandRegular'} />
                                    </Line>
                                    <XAxis dataKey={"month"} type={'category'} fontSize={10} className={'font-quicksandSemiBold'} />
                                    <YAxis type={'number'} yAxisId={0} fontSize={9} className={'font-quicksandBold'} domain={['dataMin', 60000]} stroke='red' strokeWidth={0.5} tickCount={5} dataKey={'orders'} />

                                    <Legend verticalAlign={'top'} fontSize={50} align="center" iconType="rect" iconSize={8} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>


                    </section>

                    <section className="relative landscape:w-[45%] portrait:w-full portrait:h-[18em] landscape:lg:h-full flex justify-center">
                        <div className="relative w-full h-full bg-[#ffffff] rounded-md shadow-light flex flex-col items-center">
                            <div className="relative w-full landscape:lg:h-[3em] flex items-center justify-start pl-[2em]">
                                <h4 className={'relative font-quicksandBold text-[0.8em] text-gray-500'}>
                                    <span className="capitalize">sales</span> by <span className="capitalize">subcategory</span>
                                </h4>
                            </div>
                            <ResponsiveContainer width={"100%"} height="90%">

                                <BarChart data={categorySales} margin={{ left: 30 }}>
                                    <CartesianGrid stroke={'blue'} opacity={0.3} strokeDasharray={"3 3"} />
                                    <Tooltip />
                                    <Bar type={"monotone"} dataKey={'sold'} barSize={60} fill={'#6a80b4'}>
                                        <LabelList stroke="blue" strokeWidth={0.5} dataKey={"sales"} position={'top'} fontSize={10} className={'font-quicksandBold'} />
                                    </Bar>
                                    <XAxis dataKey={"category"} type="category" fontSize={10} className={'font-quicksandSemiBold'} />

                                    <YAxis fontSize={9} className={'font-quicksandBold'} orientation={'right'} domain={[0, 5000]} tickCount={5} tickFormatter={(label) => `${'$' + label}k`} stroke='blue' strokeWidth='0.5px' />

                                </BarChart>
                            </ResponsiveContainer>
                        </div>


                    </section>
                </div>
            </section>

            <section className="relative landscape:w-[25%] portrait:w-full landscape:h-[100vh] portrait:h-fit z-10 flex flex-col gap-y-[15px] items-center portrait:p-[1em]">

                <div className="relative landscape:w-[95%] portrait:w-full landscape:lg:h-[20em] portrait:h-[23em] bg-[#ffffff] rounded-md shadow-light">
                    <div className="relative w-full landscape:lg:h-[5em] flex flex-col justify-center">
                        <h4 className="relative capitalize text-[0.85em] font-quicksandSemiBold text-gray-600">
                            product returned most
                        </h4>

                        <h2 className="relative font-quicksandBold text-rose-700 text-[2em] capitalize">
                            kitchen and dining
                        </h2>
                    </div>

                    < hr className="relative w-[90%] mx-auto border-gray-500" />
                    <ResponsiveContainer width={'100%'} height={'70%'}>
                        <PieChart>
                            <Pie data={pieSales} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#9447ff" />
                            <Pie data={pieSales} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} label={renderLabel} fontSize={13}>
                                {
                                    pieSales.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]} />
                                    ))
                                }
                            </Pie>
                            <Legend align="center" verticalAlign='bottom' type="circle" payload={[{ value: 'delivered', type: 'circle', id: 0, color: '#2a4994' }, { value: 'returned', type: 'circle', id: 1, color: '#e11d48' }]} iconSize={10} />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>


                <div className="relative landscape:w-[95%] portrait:w-full h-fit bg-[#ffffff] rounded-md shadow-light overflow-hidden">
                    <div className="relative w-full landscape:lg:h-[2em] bg-[#a8b6d3] flex items-center pl-2">
                        <h3 className="relative font-quicksandRegular text-[0.9em] capitalize text-gray-700 text-start">
                            reason for return
                        </h3>
                    </div>
                    <div className="relative w-full h-fit ">
                        {
                            returnReasons.map((reason, index) => (

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
