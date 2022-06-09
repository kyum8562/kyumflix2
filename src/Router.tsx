import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";


const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        {/* 중첩 라우팅
          라우터 6에서 아래처럼 사용하고, 
          부모에서 자식화면 랜더링하고싶은 부분에 <Outlet /> 
        */}
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path='price' element={<Price />}/>
          <Route path='chart' element={<Chart />}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  );

}

export default Router;