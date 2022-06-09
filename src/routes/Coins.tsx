// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../utils/fetcher";
import { CoinList, Container, Header, Title, Coin, Img, Loader } from './styles';

interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

const Coins = () => {
  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 10));
  //     setLoading(false);
  //   })();
  // }, []);

  // useQuery("쿼리 key", fetcher)
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Header>
        <Title>CoinGyeom</Title>
      </Header>
      {isLoading ? 
      (<Loader>Loading...</Loader>):(
        <CoinList>
          {data?.slice(0, 10).map((coin) => (
              <Coin key={coin.id}>
                {/* 라우터 6버전 Link to/state */}
                <Link 
                  to ={`${coin.id}`} 
                  state={{
                          name: coin.name,
                        }}
                >
                  <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt='coinImg' />
                  {coin.name}
                </Link>
              </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;