import styled from "styled-components";
import StarImg from "./images/Star 1.svg";
import TreeTopImg from "./images/colored-top-1.svg";
import TreeMidImg from "./images/colored-mid-1.svg";
import TreeBottomImg from "./images/colored-bottom-1.svg";
import TreeLogImg from "./images/colored-log-1.svg";
import CaneImg from "./images/crane.svg";
import { motion } from "framer-motion";

const Layout = styled(motion.div)`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #17202a;
`;
const TreeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  div{
    display: flex;
    width: 100%;
    min-height: 70px;
    justify-content: center;
    position: relative;
  }
  img {
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
const Star = styled(motion.img)`
  margin-top: 30px;
  z-index: ${(props) => props.zIndex};
`;
const TreeTopContainer = styled(motion.div)`
  top: -10px;
  height: ${props => props.height}px;
  z-index: ${(props) => props.zIndex};
`;
const TreeMidContainer = styled(motion.div)`
  top: -55px;
  height: ${props => props.height}px;
  z-index: ${(props) => props.zIndex};
`;
const TreeBottomContainer = styled(motion.div)`
  top: -100px;
  height: ${props => props.height}px;
  z-index: ${(props) => props.zIndex};
`;
const TreeLog = styled(motion.img)`
  position: relative;
  top: -145px;
  z-index: ${(props) => props.zIndex};
`;
const BaseImage = styled.img`
  position: relative;
`;
const Cane = styled(motion.img)`
  position: absolute;
  top: ${props => props.top}%;
  left: ${(props) => props.left}%;
  transform: rotate(${props => props.rotation}deg);
  width: 20px;
`;
function App() {
  return (
    <Layout>
      <TreeContainer>
        <Star
          src={StarImg}
          zIndex={5}
          whileTap={{
            scale: 0.8,
            transition: { duration: 0.1 },
          }}
        />
        <TreeTopContainer
          zIndex={4}
          // animate={{
          //   rotate: [0, -3, 2, -2, 0],
          //   transition: { ease: "easeInOut", duration: 9, loop: Infinity },
          // }}
          whileTap={{
            scale: 0.8,
            transition: { duration: 0.1 },
          }}
          height={135}
        >
          <BaseImage src={TreeTopImg} />
          <Cane src={CaneImg} top={38} left={45} rotation={Math.floor(Math.random() * 50)}/>
        </TreeTopContainer>
        <TreeMidContainer
          zIndex={3}
          // animate={{
          //   rotate: [0, -2, 3, -3, 0],
          //   transition: { ease: "easeInOut", duration: 9, loop: Infinity },
          // }}
          whileTap={{
            scale: 0.8,
            transition: { duration: 0.1 },
          }}
          height={164}
        >
          <BaseImage src={TreeMidImg} />
          <Cane src={CaneImg} top={44} left={63} rotation={Math.floor(Math.random() * 50)}/>
        </TreeMidContainer>
        <TreeBottomContainer
          zIndex={2}
          // animate={{
          //   rotate: [0, -1, 3, -2, 0],
          //   transition: { ease: "easeInOut", duration: 13, loop: Infinity },
          // }}
          whileTap={{
            scale: 0.8,
            transition: { duration: 0.1 },
          }}
          height={164}
        >
          <BaseImage src={TreeBottomImg} />
          <Cane src={CaneImg} top={45} left={40} rotation={Math.floor(Math.random() * 50)}/>
        </TreeBottomContainer>
        <TreeLog src={TreeLogImg} zIndex={1} />
      </TreeContainer>
    </Layout>
  );
}

export default App;
