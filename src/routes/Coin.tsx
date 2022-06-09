// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../utils/fetcher";
import { Container, Description, Header, Loader, OverView, OverViewItem, Tab, Tabs, Title } from './styles';

// props 추가사항으로 인한 상속 후 코드 구현
const TabDesign = styled(Tab)<{isActive: boolean}>`
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
`;

interface RouteState{
 state:
      { 
        name : string;
      }
}

interface IInfoData{
  id: string;
  name : string;
  symbol : string;
  rank : number;
  is_new : boolean;
  is_active : boolean;
  type : string;
  description : string;
  message : string;
  open_source : boolean;
  started_at : string;
  development_status : string;
  hardware_wallet : boolean;
  proof_type : string;
  org_structure : string;
  hash_algorithm : string;
  first_data_at : string;
  last_data_at : string;
};

interface IPriceData{
  id : string;
  name : string;
  symbol : string;
  rank : number;
  circulating_supply : number;
  total_supply : number;
  max_supply : number;
  beta_value : number;
  first_data_at : string;
  last_updated : string;
  quotes : {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number; 
      volume_24h: number; 
      volume_24h_change_24h: number;
    } 
  };
};

const Coin = () => {
  const { coinId } = useParams<{coinId: string}>();
  // 라우터 6 useRouteMatch() -> useMatch(), 해당 url 접속 여부(T/F)
  // const priceMatch = useMatch(`/:coinId/price`); 아래코드와 동일?!
  const priceMatch = useMatch(`/:${coinId}/price`);
  const chartMatch = useMatch(`/:${coinId}/chart`);
  const { state } = useLocation() as RouteState;
  const { isLoading: infoLoading, data : infoData } = useQuery<IInfoData>(
    ["info", coinId], () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data : tickersData} = useQuery<IPriceData>(
    ["tickers", coinId], () => fetchCoinTickers(coinId)
  );

  const loading = infoLoading || tickersLoading;

  // 라우터 6버전 useLocation 타입 지정하기
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<IInfoData>();
  // const [priceInfo, setPriceInfo] = useState<IPriceData>();
  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //                       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //                     ).json();
  //     const priceData = await (
  //                       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //                     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);


  return (
    <Container>
      <Header>
          <Title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</Title>
      </Header>
      {loading ? 
        (<Loader>loading...</Loader>) : 
        (
          <>
            <OverView>
              <OverViewItem>
                <span>Rank</span>
                <span>{infoData?.rank}</span>
              </OverViewItem>
              <OverViewItem>
                <span>Symbol</span>
                <span>{infoData?.symbol}</span>
              </OverViewItem>
              <OverViewItem>
                <span>Open Source</span>
                <span>{infoData?.open_source ? "Yes" : "No"}</span>
              </OverViewItem>
            </OverView>
            <Description>{infoData?.description}</Description>
            <OverView>
              <OverViewItem>
                <span>Total Suply</span>
                <span>{tickersData?.total_supply}</span>
              </OverViewItem>
              <OverViewItem>
                <span>Max Suply</span>
                <span>{tickersData?.max_supply}</span>
              </OverViewItem>
            </OverView>
            <Tabs>
              <TabDesign isActive={chartMatch !== null}>
                <Link to={`/${coinId}/chart`}>Chart</Link>
              </TabDesign>
              <TabDesign isActive={priceMatch !== null}>
                <Link to={`/${coinId}/price`}>Price</Link>
              </TabDesign>
            </Tabs>
            <Outlet />
          </>
        )}
    </Container>
  );
}

export default Coin;