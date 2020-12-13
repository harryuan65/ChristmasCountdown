import styled from "styled-components";
import StarImg from "./images/Star 1.svg";
import TreeTopImg from "./images/colored-top-1.svg";
import TreeMidImg from "./images/colored-mid-1.svg";
import TreeBottomImg from "./images/colored-bottom-1.svg";
import TreeLogImg from "./images/colored-log-1.svg";
const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #17202a;
`;
const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
const Star = styled.img`
  top: 30px;
  z-index: ${(props) => props.zIndex};
`;
const TreeTop = styled.img`
  top: 65px;
  z-index: ${(props) => props.zIndex};
`;
const TreeMid = styled.img`
  top: 155px;
  z-index: ${(props) => props.zIndex};
`;
const TreeBottom = styled.img`
  top: 260px;
  z-index: ${(props) => props.zIndex};
`;
const TreeLog = styled.img`
  top: 360px;
  z-index: ${(props) => props.zIndex};
`;
function App() {
  return (
    <Layout>
      <TreeContainer>
        <Star src={StarImg} zIndex={5} />
        <TreeTop src={TreeTopImg} zIndex={4} />
        <TreeMid src={TreeMidImg} zIndex={3} />
        <TreeBottom src={TreeBottomImg} zIndex={2} />
        <TreeLog src={TreeLogImg} zIndex={1} />
      </TreeContainer>
    </Layout>
  );
}

export default App;
