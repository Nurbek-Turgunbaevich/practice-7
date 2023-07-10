import "./App.css";
import { styled } from "styled-components";
import Button from "./UI/Button";
import { useState } from "react";
import Zamen from "./Zamen";
import Zamen2 from "./UI/Zamen2";
import Counter from "./Counter";

function App() {
  const color = "green";
  function addHandler() {
    console.log("Hello");
  }
  const [input, setInput] = useState("");
  const [state, setState] = useState("");
  const [zamen, setZamen] = useState(false);
  const [text, setText] = useState("open Form");

  const zamenFunction = () => {
    setZamen((prev) => !prev);
    setText("close Form");
  };

  const handleSubmit = () => {
    console.log("input", input);

    setState(`${input}`);

    setInput("");
  };

  // console.log(`${5}+${5}`);

  return (
    <div className="App">
      <HeaderStyle>
        <h1>MY BOOKS</h1>
        <button onClick={zamenFunction}>{text}</button>
      </HeaderStyle>
      <Counter/>
      {zamen === false ? <Zamen /> : <Zamen2 />}
      {/* {text === false ? <h2>login</h2> : <h2>logUt</h2>} */}
      <ContainerGlav>
        <MainStyle>
          <h1>BOOKS</h1>
          <ContainerStyle color={color}>
            <h2>Test1</h2>
            <ImgStyle src="https://cdn.wheel-size.com/thumbs/5d/ec/5dec4cfcb011fc5a04325cc1746d9fda.jpg" />
            <span>500 som</span>
            <button>DEL</button>
          </ContainerStyle>
        </MainStyle>

        <ContainerInputStyle>
          <input
            style={{ border: "3px solid red", padding: '10px 20px' }}
            onChange={(event) => setInput(event.target.value)}
            id="input"
            value={input}
            type="text"
            placeholder="Напиши color и нажми Click"
            
          ></input>
          <Button padding='10px 30px' border-radius='10px' background-color='yellow' color="red" text="Delete"></Button>
          <Button padding='30px 30px' border-radius='50px' background-color= 'green' color="blue" onClick={addHandler} text="ADD"></Button>
          <Button padding='20px 150px' border-radius='10px' background-color= 'brown' color="green" text="Cancel"></Button>
          <Button border-radius='50px'  background-color='black' color="cyan" onClick={handleSubmit} text="Click"></Button>
          <H2Style color={state}>{state}</H2Style>
        </ContainerInputStyle>
      </ContainerGlav>
      
    </div>
  );
}

export default App;

const H2Style = styled.h2`
  color: ${(p) => p.color};
`;

const ContainerGlav = styled.div`
  border: 1px solid;
  width: 1200px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderStyle = styled.header`
  border: 1px solid;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: bisque;
  & button {
    padding: 20px 40px;
    font-size: 20px;
  }
`;
const MainStyle = styled.main`
  border: 1px solid;
  height: 400px;
  width: 550px;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & h1 {
    border: 1px solid;
    width: 550px;
    height: 100px;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerStyle = styled.div`
  width: 500px;
  height: 200px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.color };
  border-radius: 10px;
`;
const ImgStyle = styled.img`
  width: 150px;
  height: 100px;
`;
const ContainerInputStyle = styled.div`
  border: 1px solid;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  background-color: blanchedalmond;
`;
