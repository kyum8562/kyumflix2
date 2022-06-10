const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}


export const fetchCoinTickers = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export const fetchCoinHistory = (coinId: string | undefined) => {
  const endDate = Math.floor(Date.now() / 1000); // 현재시간을 초로 나타냄
  const startDate = endDate - 60 * 60 * 23 *1; // 현재 해당 사이트는 1일 전까지만 무료로 볼 수 있음
  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then((res) => res.json()); 
}