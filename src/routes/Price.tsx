import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../utils/fetcher";
import { OverView, OverViewItem } from "./styles";

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

const Price = () => {
  const {coinId} = useOutletContext() as IChartProps;
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  return (
    <OverView>
          {isLoading ? "Loading Price..." :(
            <>
              <OverViewItem>
                <span>HIGH</span>
                <span>{(data?.map((v) => v.high)+"").slice(0,8)}</span>
              </OverViewItem>
              <OverViewItem>
                <span>LOW</span>
                <span>{(data?.map((v) => v.low)+"").slice(0,8)}</span>
              </OverViewItem>
              <OverViewItem>
                <span>OPEN</span>
                <span>{(data?.map((v) => v.open)+"").slice(0,8)}</span>
              </OverViewItem>
              <OverViewItem>
                <span>CLOSE</span>
                <span>{(data?.map((v) => v.close)+"").slice(0,8)}</span>
              </OverViewItem>
            </>
          )}
    </OverView>
  );
}

export default Price;