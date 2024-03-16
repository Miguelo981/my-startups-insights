import { AreaChart, YAxis, XAxis, ResponsiveContainer, CartesianGrid, Tooltip, Area } from "recharts";
import { format } from "date-fns";
import { allMonths } from "../constants";
import type { Startup } from "../models/startup";

type StartupDetailProps = {
    startup: Startup;
};

export default function StartupDetail({ startup }: StartupDetailProps) {
    const groupedData = startup.earnings.reduce((acc, item) => {
        const date = new Date(item.date);
        let month = date.toLocaleString('en-GB', { month: 'short' });
        month = month.charAt(0).toUpperCase() + month.slice(1);
        const existingItem = acc.find((entry) => entry?.name === month);

        if (existingItem) {
          existingItem.$ += item.amount;
        } else {
          acc.push({ name: month, $: item.amount });
        }
        return acc;
    }, []);

    const data = allMonths.map((month) => {
        const existingItem = groupedData.find((entry) => entry?.name === month);
        return existingItem || { name: month, $: 0 };
    });

    return (
        <div className="rounded-2xl bg-white p-4 md:p-8 space-y-4 shadow-md relative z-10">
            <header>
                <div className="mb-4">
                    <div className="flex items-center gap-2">
                        <figure className="w-12 h-auto">
                            <img className="rounded-sm" src={startup.logo} />
                        </figure>
                        <h2 className="text-xl font-bold">{startup.name}</h2>
                        {startup.sold && <span className="bg-blue-500 px-2.5 py-1 text-white rounded-md text-sm font-semibold mb-3">🎉 SOLD</span>}
                    </div>
                    <div></div>
                </div>
                <p className="pb-3">{startup.description}</p>
                <hr />
            </header>
            <ResponsiveContainer width="100%" height="100%" className="!h-32 lg:!h-60 -ml-4">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="$" stroke="#10b981" fill="#a7f3d0" />
                </AreaChart>
            </ResponsiveContainer>
            <footer className="flex flex-col md:flex-row items-center justify-between gap-2">
                <a href={startup.url} target="_blank" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md w-full md:w-fit text-center">Go App</a>
                <span className="text-gray-600 text-xs lg:text-sm">Created at <time className="font-bold">{format(startup.createdAt, 'iiii, do MMMM yyyy')}</time></span>
            </footer>
        </div>
    )
}