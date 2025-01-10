import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Chart, LinearScale } from "chart.js";
import { VennDiagramController, ArcSlice } from "chartjs-chart-venn";

Chart.register(VennDiagramController, ArcSlice, LinearScale);

const VennDiagram = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);


  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }


    const vennData = [
      { sets: ["Sales"], value: data.reduce((acc, item) => acc + item.sales, 0) },
      { sets: ["Months"], value: data.length }, 
      { sets: ["Sales", "Months"], value: Math.min(data.length, data.reduce((acc, item) => acc + item.sales, 0) / 2) }, // Overlap
    ];

    chartInstanceRef.current = new Chart(ctx, {
      type: VennDiagramController.id,
      data: {
        labels: ["Sales", "Months"],
        datasets: [
          {
            label: "Sales & Months",
            data: vennData,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]); 

  return (
    <div style={{ width: "350px", height: "300px" }}>
      <canvas ref={chartRef} id="vennChart"></canvas>
    </div>
  );
};

export default VennDiagram;






