import Histogram from "./Histogram";

const histogramProps = {
    dataType: "latency",
    showHistogramLabels: true,
    histogramAccentColor: "red",
    label: "히스토그램 그래프",
};

const HistogramPage = () => {
    return <Histogram {...histogramProps} />;
};

export default HistogramPage;
