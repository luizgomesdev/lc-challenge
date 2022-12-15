import { useTheme } from "@chakra-ui/react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

const RevenueChartLine = () => {
  const { colors } = useTheme();
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = [
    { name: "JAN", actual: "379.07", expected: "289.55" },
    { name: "FEB", actual: "474.84", expected: "425.00" },
    { name: "MAR", actual: "268.79", expected: "108.73" },
    { name: "APR", actual: "702.25", expected: "184.20" },
    { name: "MAY", actual: "803.82", expected: "914.30" },
    { name: "JUN", actual: "3.77", expected: "179.88" },
    { name: "JUL", actual: "691.51", expected: "251.03" },
    { name: "AUG", actual: "323.64", expected: "761.78" },
    { name: "SEP", actual: "571.24", expected: "730.93" },
    { name: "OCT", actual: "819.62", expected: "439.51" },
    { name: "NOV", actual: "163.03", expected: "354.20" },
    { name: "DEC", actual: "319.87", expected: "77.91" },
  ];

  return (
    <Line
      options={{
        responsive: true,

        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            border: {
              display: false,
            },
            display: false,
          },
        },
      }}
      data={{
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: "Actual",
            data: data.map((item) => item.actual),
            fill: false,
            backgroundColor: colors.teal["500"],
            borderColor: colors.teal["500"],
          },
          {
            label: "Expected",
            data: data.map((item) => item.expected),
            fill: false,
            backgroundColor: colors.purple["500"],
            borderColor: colors.purple["500"],
          },
        ],
      }}
    />
  );
};

export default RevenueChartLine;
