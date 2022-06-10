import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../utils/fetcher";
import { OverView, OverViewItem } from "./styles";
// Apex Charts : https://apexcharts.com/docs/options/
import ApexChart from 'react-apexcharts';

interface IChartProps {
  coinId : string;
}

interface IHistorical {
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  time_close: string;
  time_open: string;
  volume: number;
}

const Chart = () => {
  // const { coinId } = useParams();
  // 하위 컴포넌트에서 useOutletContext() 훅을 이용해서 props를 받아올 수 있다.
  const {coinId} = useOutletContext() as IChartProps;
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
 
  return (
    <OverView>
      <OverViewItem>
        <div>{isLoading ? "Loading Chart..." :
          <ApexChart 
            type="bar" 
            series={[
              {
                name: "hello",
                data: data?.map((price) => price.close) as number[]
              },
            ]}
            options={{
              chart: {
                height: 300, 
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: {show: false},
              stroke:{
                curve: "straight",
                width: 4,
              },
              yaxis:{
                show: false,
              },
              xaxis:{
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false,
                          datetimeFormatter:{month:" mmm 'yy"}},
                type: "datetime",
                categories: data?.map((price) => price.time_close.slice(0,10)),
              },
              fill: {
                type: "gradient",
                gradient: {gradientToColors: ["#0be881"], stops: [0, 100]},
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `${value.toFixed(2)}`,
                },
              },
            }}
          />}
        </div>
      </OverViewItem>
    </OverView>
  );
}

export default Chart;