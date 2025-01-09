import { useEffect, useRef } from 'react';
import { Chart, LinearScale } from 'chart.js';
import { VennDiagramController, ArcSlice } from 'chartjs-chart-venn';

Chart.register(VennDiagramController, ArcSlice, LinearScale);

const VennDiagram = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }


    chartInstanceRef.current = new Chart(ctx, {
      type: VennDiagramController.id,
      data: {
        labels: ['Set A', 'Set B', 'Set C'],
        datasets: [
          {
            label: 'Venn Diagram',
            data: [
              { sets: ['Set A'], value: 30 },
              { sets: ['Set B'], value: 30 },
              { sets: ['Set C'], value: 30 },
              { sets: ['Set A', 'Set B'], value: 20 },
              { sets: ['Set A', 'Set C'], value: 20 },
              { sets: ['Set B', 'Set C'], value: 20 },
              { sets: ['Set A', 'Set B', 'Set C'], value: 10 },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });


    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '350px', height: '300px' }}>
      <canvas ref={chartRef} id="vennChart"></canvas>
    </div>
  );
};

export default VennDiagram;
