import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexChart = ({ width, height, puntaje }) => {
  const [visible, setVisible] = useState(true)
  const series = [
    {
      name: ["1 - Bajo"],
      data: [
        { x: "1 - Alto", y: puntaje === 1 ? 10 : 5 },
        { x: "2 - Medio", y: puntaje === 2 ? 10 : 3 },
        { x: "3 - Bajo", y: puntaje === 4 ? 20 : 11 },
      ],
    },
    {
      name: "2 - Medio",
      data: [
        { x: "1 - Alto", y: puntaje === 3 ? 10 : 4 },
        { x: "2 - Medio", y: puntaje === 5 ? 20 : 12 },
        { x: "3 - Bajo", y: puntaje === 7 ? 30 : 21 },
      ],
    },
    {
      name: "3 - Alto",
      data: [
        { x: "1 - Alto", y: puntaje === 6 ? 20 : 13 },
        { x: "2 - Medio", y: puntaje === 8 ? 30 : 22 },
        { x: "3 - Bajo", y: puntaje > 8 ? 30 : 23 },
      ],
    },
  ];

  const options = {
    chart: {
      height: width,
      width: "100%",
      type: "heatmap",
      toolbar: {
        show: false,
      },
      selection: {
        enabled: false,
      },
    },
    legend: {
      show: true,
      position: "top",
    },
    title: {
      text: "MAPA DE RIESGO",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#4d494b",
        // fontFamily: "'Montserrat', sans-serif"
      },
    },
    tooltip: {
      enabled: false,
    },

    plotOptions: {
      heatmap: {
        radius: 0,
        distributed: false,
        enableShades: true,
        shadeIntensity: 0,
        reverseNegativeShade: true,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: 1,
              to: 10,
              name: "Bajo",
              color: "#00A100",
            },
            {
              from: 11,
              to: 20,
              name: "Mediano",
              color: "#FFB200",
            },
            {
              from: 21,
              to: 30,
              name: "Alto",
              color: "#FF0000",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (obj, opt) {
          return DataInfo(opt, puntaje)
      },
      textAnchor: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
          fontSize: '40px',
          colors: ['#FFF']

      }
  },

  };

  useEffect(()=> {
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
    }, 1)
  }, [puntaje])

  if(!visible){
    return <></>
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="heatmap"
      height={width}
      width={width + 200}
    />
  );
};

const DataInfo = (loc, puntaje) => {
  const { dataPointIndex, seriesIndex } = loc
  if (seriesIndex === 0 && dataPointIndex === 0 && puntaje === 1) {
    return 'Riesgo'
  }
  if (seriesIndex === 0 && dataPointIndex === 1 && puntaje === 2) {
    return 'Riesgo'
  }
  if (seriesIndex === 0 && dataPointIndex === 2 && puntaje === 4) {
    return 'Riesgo'
  }
  if (seriesIndex === 1 && dataPointIndex === 0 && puntaje === 3) {
    return 'Riesgo'
  }
  if (seriesIndex === 1 && dataPointIndex === 1 && puntaje === 5) {
    return 'Riesgo'
  }
  if (seriesIndex === 1 && dataPointIndex === 2 && puntaje === 7) {
    return 'Riesgo'
  }
  if (seriesIndex === 2 && dataPointIndex === 0 && puntaje === 6) {
    return 'Riesgo'
  }
  if (seriesIndex === 2 && dataPointIndex === 1 && puntaje === 8) {
    return 'Riesgo'
  }
  if (seriesIndex === 2 && dataPointIndex === 2 && puntaje > 8) {
    return 'Riesgo'
  }
}


export default ApexChart;
