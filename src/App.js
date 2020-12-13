import styled from "styled-components";
import StarImg from "./images/Star 1.svg";
import TreeTopImg from "./images/colored-top-1.svg";
import TreeMidImg from "./images/colored-mid-1.svg";
import TreeBottomImg from "./images/colored-bottom-1.svg";
import TreeLogImg from "./images/colored-log-1.svg";
import { motion } from 'framer-motion';

const Layout = styled(motion.div)`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #17202a;
`;
const TreeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
const Star = styled(motion.img)`
  top: 30px;
  z-index: ${(props) => props.zIndex};
`;
const TreeTop = styled(motion.img)`
  top: 65px;
  z-index: ${(props) => props.zIndex};
`;
const TreeMid = styled(motion.img)`
  top: 155px;
  z-index: ${(props) => props.zIndex};
`;
const TreeBottom = styled(motion.img)`
  top: 260px;
  z-index: ${(props) => props.zIndex};
`;
const TreeLog = styled(motion.img)`
  top: 360px;
  z-index: ${(props) => props.zIndex};
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
            transition: {duration: 0.1}
          }}
        />
        <TreeTop
          src={TreeTopImg}
          zIndex={4}
          animate={{
            rotate: [0, -4, 3, -2, 0],
            transition: { ease: "easeInOut", duration: 9, loop: Infinity }
          }}
          whileTap={{
            scale: 0.8,
            transition: {duration: 0.1}
          }}
        />
        <TreeMid
          src={TreeMidImg}
          zIndex={3}
          animate={{
            rotate: [0, -5, 5, -4, 0],
            transition: { ease: "easeInOut", duration: 9, loop: Infinity }
          }}
          whileTap={{
            scale: 0.8,
            transition: {duration: 0.1}
          }}
        />
        <TreeBottom
          src={TreeBottomImg}
          zIndex={2}
          animate={{
            rotate: [0, -3, 6, -2, 0],
            transition: { ease: "easeInOut", duration: 13, loop: Infinity }
          }}
          whileTap={{
            scale: 0.8,
            transition: {duration: 0.1}
          }}
        />
        <TreeLog
          src={TreeLogImg}
          zIndex={1}
        />
      </TreeContainer>
    </Layout>
  );
}

export default App;
