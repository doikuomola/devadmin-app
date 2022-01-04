// @ts-nocheck
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";
import "./Chart.css";

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <div className="chart">
            <h2 className="chartTitle">{title}</h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {grid && (
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0dfdf" />
                    )}
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line
                        type="monotone"
                        // dataKey="Active User"
                        stroke="#5550bd"
                        // activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
