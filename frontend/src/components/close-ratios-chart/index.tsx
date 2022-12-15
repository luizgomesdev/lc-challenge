import { useTheme } from "@chakra-ui/react";
import { useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const CloseRatiosChart = () => {
  const { colors } = useTheme();
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Green", "Red"],
    datasets: [
      {
        label: "# of Votes",
        data: [70, 30],
        backgroundColor: [colors.teal["500"], colors.red["500"]],
        borderColor: [colors.teal["500"], colors.red["500"]],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default CloseRatiosChart;
