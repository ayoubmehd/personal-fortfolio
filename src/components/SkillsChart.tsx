import * as d3 from "d3";
import { For, onMount } from "solid-js";

export default function SkillsChart({ data }: { data: { name: string; years: number }[] }) {
    // Declare the chart dimensions and margins.
    const width = 904;
    const height = 600;
    const margin = { top: 40, right: 50, bottom: 40, left: 120 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const maxYears = Math.max(...data.map(item => item.years));

    const x = d3.scaleLinear()
        .domain([0, maxYears])
        .range([0, innerWidth])
        .nice();

    const y = d3
        .scaleBand()
        .domain(data.map(d => d.name))
        .range([0, innerHeight])
        .padding(0.2);

    const colorScale = d3.scaleOrdinal<string>().domain(Array.from(new Set(data.map(item => item.name)))).range(d3.schemeSet2);

    const xTicks = x.ticks(7);

    return <svg
        width={width}
        height={height} viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet">
        <g transform={`translate(${margin.left},${margin.top})`}>
            <For each={xTicks}>
                {/** Dashes */}
                {item => (
                    <line
                        x1={x(item)}
                        y1={0}
                        x2={x(item)}
                        y2={innerHeight}
                        stroke="#e5e7eb"
                        stroke-dasharray="4,4"
                    />
                )}
            </For>

            {/** Bars */}
            <For each={data}>
                {item => (
                    <g>
                        <rect
                            y={y(item.name)}
                            height={y.bandwidth()}
                            fill={colorScale(item.name)}
                            rx={4}
                            ry={4}
                            width={x(item.years)}
                        >
                            <animate
                                attributeName="width"
                                from={0}
                                to={x(item.years)}
                                dur="1s"
                                fill="freeze"
                            />
                        </rect>
                    </g>
                )}
            </For>

            <g transform={`translate(0, ${innerHeight})`}>
                <line x1={0} y1={0} x2={innerWidth} y2={0} stroke="#374151" />
                <For each={xTicks}>
                    {item => (
                        <g transform={`translate(${x(item)}, 0)`}>
                            <line y2={2} stroke="#374151" />
                            <text
                                y={20}
                                text-anchor="middle"
                                class="text-sm fill-gray-400"
                            >
                                {item} {item === 1 ? 'year' : 'years'}
                            </text>
                        </g>
                    )}
                </For>
            </g>

            <g>
                <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="#374151" />
                <For each={data}>
                    {item => (
                        <g
                            transform={`translate(0, ${y(item.name)! + y.bandwidth() / 2})`}
                        >
                            <line x2={-6} stroke="#374151" />
                            <text
                                x={-10}
                                text-anchor="end"
                                dominant-baseline="middle"
                                class="text-sm fill-gray-200"
                            >
                                {item.name}
                            </text>
                        </g>
                    )}
                </For>
            </g>

            <text
                x={innerWidth / 2}
                y={-margin.top / 2}
                text-anchor="middle"
                class="text-2xl font-bold fill-white"
            >
                Experienced in
            </text>

            {/* <g transform={`translate(${innerWidth + 20}, 0)`}>
                    <For each={data}>
                        {(item, index) => (
                            <g transform={`translate(0, ${index() * 20})`}>
                                <rect
                                    width={10} 
                                    height={10}
                                    fill={colorScale(item.name)}
                                    rx={2}
                                />
                                <text
                                    x={15} 
                                    y={8}
                                    class="text-sm fill-gray-200"
                                >
                                    {item.name}
                                </text>
                            </g>
                        )}
                    </For> 
                </g> */}
        </g>
    </svg>
}