import { useEffect, useRef } from "react";
import * as d3 from "d3";

const Histogram = ({
    dataType,
    showHistogramLabels,
    histogramAccentColor,
    label,
}) => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (dataType && d3Container.current) {
            // SVG 요소 클리닝
            d3.select(d3Container.current).selectAll("*").remove();
            // 임의의 데이터 생성
            const data = Array.from({ length: 30 }, () =>
                Math.floor(Math.random() * 100)
            );

            // SVG 컨테이너 설정
            const margin = { top: 10, right: 30, bottom: 30, left: 40 },
                width = 460 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            const svg = d3
                .select(d3Container.current)
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // X 축 설정
            const x = d3
                .scaleBand()
                .domain(data.map((d, i) => i)) // 임의의 데이터 기반
                .range([0, width])
                .padding(0.1);

            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x));

            // 데이터 매핑을 위한 Y 축 설정
            const y = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d)]) // 데이터의 최대값을 도메인의 상한으로 사용
                .range([height, 0]); // SVG 높이의 범위를 설정

            svg.append("g").call(d3.axisLeft(y));

            // 바(bar) 그리기
            svg.selectAll(".bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d, i) => x(i))
                .attr("y", (d) => y(d))
                .attr("width", x.bandwidth()) // scaleBand에서 제공하는 bandwidth 함수를 사용하여 바의 너비 설정
                .attr("height", (d) => height - y(d)) // y(d)와 SVG의 전체 높이 사이의 차이를 바의 높이로 설정
                .attr("fill", histogramAccentColor);

            // 레이블 표시 여부
            if (showHistogramLabels) {
                svg.append("text")
                    .attr("text-anchor", "end")
                    .attr("x", width / 2)
                    .attr("y", height + margin.top + 20)
                    .text(label);
            }
        }
    }, [dataType, showHistogramLabels, histogramAccentColor, label]);

    return (
        <>
            <div className="bg-warning"></div>
            <svg ref={d3Container} />
        </>
    );
};

export default Histogram;
