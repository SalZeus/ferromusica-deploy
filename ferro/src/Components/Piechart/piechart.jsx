import Chart from "react-apexcharts";
import {motion} from "framer-motion"
import "./piechart.scss";

function Piechart() {
  return (
    <motion.section className="pie-container">
      <div className="chart">
        <Chart
          className="pie"
          type="pie"
          series={[30622, 22839, 18392, 10273]}
          options={{
            plotOptions: { donut: { size: "65%" } },
            title: {
              text: "Raking",
              align: "center",
              margin: 0,
              style: {
                fontSize: "60px",
                fontWeight: "bold",
                color: "#E91717",
                fontFamily: "'Kanit', sans-serif",
              },
            },
            subtitle: {
              text: "Mis Mejores Canciones",
              align: "center",
              margin: 120,
              style: {
                fontSize: "60px",
                fontWeight: "bold",
                color: "#E91717",
                fontFamily: "'Kanit', sans-serif",
              },
            },
            noData: {
              text: "Empty Data",
            },
            colors: [
              "rgb(226, 76, 37)",
              "rgb(233, 23, 23)",
              "rgb(24, 60, 161)",
              "rgb(154, 45, 154)",
            ],
            labels: ["Mirame Otra Vez", "Clandestino", "Hoy No", "Secreto"],
            donut: {
              size: "10%",
              labels: {
                show: true,
              },
            },
            theme: {
              palette: "pallete8",
              monochrome: {
                enabled: false,
                color: "#E91717",
                shadeIntensity: 1,
                shadeTo: "light",
              },
            },
            chart: {
              foreColor: "#ffffff",
              fontFamily: "'DM Sans', sans-serif",
            },
            animations: {
              enabled: true,
              easing: "easeinout",
              speed: 800,
              animateGradually: {
                enabled: true,
                delay: 3500,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 500,
              },
            },
            legend: {
              show: false,
              fontSize: "22px",
            },
            stroke: {
              show: false,
            },
            // fill: {
            //     type: 'image',
            //     opacity: 0.85,
            //     image: {
            //        src: ["../../assets/foto5.png", "../../assets/foto6.png", "../../assets/foto7.png", "../../assets/foto8.png"],
            //       width: 25,
            //       imagedHeight: 25
            //     }
            // }
          }}
        />
      </div>
      <div className="chart">
        <Chart
          className="pie"
          type="pie"
          series={[4070, 12640, 4300, 2500]}
          options={{
            plotOptions: { donut: { size: "65%" } },
            title: {
              text: "Desde Donde",
              align: "center",
              margin: 0,
              style: {
                fontSize: "60px",
                fontWeight: "bold",
                color: "#E91717",
                fontFamily: "'Kanit', sans-serif",
              },
            },
            subtitle: {
              text: "Nos Escuchan?",
              align: "center",
              margin: 120,
              style: {
                fontSize: "60px",
                fontWeight: "bold",
                color: "#E91717",
                fontFamily: "'Kanit', sans-serif",
              },
            },
            noData: { text: "Empty Data" },
            colors: [
              "rgb(226, 76, 37)",
              "rgb(233, 23, 23)",
              "rgb(24, 60, 161)",
              "rgb(154, 45, 154)",
            ],
            labels: ["Costa Rica", "Colombia", "Argentina", "Chile"],
            donut: { size: "10%", labels: { show: true } },
            theme: {
              palette: "pallete8",
              monochrome: {
                enabled: false,
                color: "#E91717",
                shadeIntensity: 1,
                shadeTo: "light",
              },
            },
            chart: {
              foreColor: "#ffffff",
              fontFamily: "'DM Sans', sans-serif",
            },
            animations: {
              enabled: true,
              easing: "easeinout",
              speed: 800,
              animateGradually: {
                enabled: true,
                delay: 3500,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 500,
              },
            },
            legend: {
              show: false,
              fontSize: "22px",
            },
            stroke: { show: false },
            // fill: {
            //     type: 'image',
            //     opacity: 0.85,
            //     image: {
            //        src: ["../../assets/foto5.png", "../../assets/foto6.png", "../../assets/foto7.png", "../../assets/foto8.png"],
            //       width: 25,
            //       imagedHeight: 25
            //     }
            // }
          }
        }
        />
      </div>
    </motion.section>
  );
}
export default Piechart;
