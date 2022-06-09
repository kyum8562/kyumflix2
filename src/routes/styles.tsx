import styled from "styled-components";


export const Container = styled.div`
  padding: 0px 20px;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const CoinList = styled.ul`

`;

export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a{
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    padding: 15px;
  }
  &:hover{
    a{
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
`;

export const Img = styled.img`
  max-width: 25px;
  max-height: 25px;
  padding-right: 5px;
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
  font-size: 25px;
`;

export const OverView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

export const OverViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child{
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export const Description = styled.p`
  margin: 20px 10px;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  a{
    display: block;
  }
`;