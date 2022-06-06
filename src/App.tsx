import React from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';

interface Props{
  bgColor: string;
}

const Father = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

// 애니메이션(keyframes)
const Animation = keyframes`
  0%{
    border-radius: 0px;
    transform:rotate(0deg);
  }
  50%{
    border-radius: 100px;
    transform:rotate(360deg);
  }
  100%{
    border-radius: 0px;
    transform:rotate(0deg);
  }
`;

const Emoji = styled.span`
  font-size: 30px;
`;

const Box = styled.div<Props>`
  background-color: ${(props => props.bgColor)};
  width: 100px;
  height: 100px;
  /* animation: ${Animation} 3s linear infinite; */
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}{
    &:hover{
      background-color: red;
   }
  }

`;

// // 상속
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

// // HTML 태그 변경(as)
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border-radius: 15px;
//   border: 0px;
// `;

// // 속성값 생성(attrs)
// const Input = styled.input.attrs({required:true, minLength:10})`
//   background-color: blue;
//   color: white;
//   width: 100px;
//   height: 30px;
// `;
function App() {
  return (
    <Father>
      {/* <Box bgColor='teal'/>
      <Box bgColor='tomato'/>
      <Circle bgColor='blue'/> */}
      {/* <Btn>log in</Btn>
      <Btn as='a' href='/'>log in</Btn> */}
      {/* <Input /> */}
      <Box bgColor='yellow'>
        <Emoji>😊</Emoji> 
      </Box>
    </Father>
  );
}

export default App;
