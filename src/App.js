import React, { Component } from "react";
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: visible;
  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;
const TreeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  div {
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
  margin-top: 15%;
  z-index: ${(props) => props.zIndex};
`;
const TreeTopContainer = styled(motion.div)`
  top: -10px;
  height: ${(props) => props.height}px;
  z-index: ${(props) => props.zIndex};
`;
const TreeMidContainer = styled(motion.div)`
  top: -55px;
  height: ${(props) => props.height}px;
  z-index: ${(props) => props.zIndex};
`;
const TreeBottomContainer = styled(motion.div)`
  top: -100px;
  height: ${(props) => props.height}px;
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
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: rotate(${(props) => props.rotation}deg);
  width: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
const DateInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Number = styled.span`
  border-radius: 7px;
  background-color: #243d5a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #efefef;
  font-size: 55px;
  padding: 10px;
  margin: 5px;
`;
const style = {
  title: {
    color: "#eee",
    fontSize: 55,
  },
  desc: {
    fontWeight: "bold",
    color: "#ccc",
    fontSize: 30,
  },
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      targetDate: new Date("2020-12-25T00:00:00"),
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  updateCountDownTime = () => {
    let currentDate = new Date();
    let sec = parseInt((this.state.targetDate - currentDate) / 1000);
    let day = parseInt(sec / 86400)
      .toString()
      .padStart(2, "0");
    let hours = parseInt((sec % 86400) / 3600)
      .toString()
      .padStart(2, "0");
    let minutes = parseInt(((sec % 86400) % 3600) / 60)
      .toString()
      .padStart(2, "0");
    let seconds = parseInt((((sec % 86400) % 3600) % 60) % 60)
      .toString()
      .padStart(2, "0");
    this.setState({ day, hours, minutes, seconds });
  };
  componentDidMount() {
    setInterval(this.updateCountDownTime, 1000);
  }
  render() {
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
            animate={{
              rotate: [0, -3, 2, -2, 0],
              transition: { ease: "easeInOut", duration: 9, loop: Infinity },
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.1 },
            }}
            height={135}
          >
            <BaseImage src={TreeTopImg} />
            <Cane src={CaneImg} top={38} left={45} rotation={-13} />
          </TreeTopContainer>
          <TreeMidContainer
            zIndex={3}
            animate={{
              rotate: [0, -2, 3, -3, 0],
              transition: { ease: "easeInOut", duration: 9, loop: Infinity },
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.1 },
            }}
            height={164}
          >
            <BaseImage src={TreeMidImg} />
            <Cane src={CaneImg} top={44} left={53} rotation={20} />
          </TreeMidContainer>
          <TreeBottomContainer
            zIndex={2}
            animate={{
              rotate: [0, -1, 3, -2, 0],
              transition: { ease: "easeInOut", duration: 13, loop: Infinity },
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.1 },
            }}
            height={164}
          >
            <BaseImage src={TreeBottomImg} />
            <Cane src={CaneImg} top={45} left={40} rotation={30} />
          </TreeBottomContainer>
          <TreeLog src={TreeLogImg} zIndex={1} />
        </TreeContainer>
        <InfoContainer>
          <span style={style.title}>Christmas is coming!</span>
          <DateInfo>
            <NumberContainer>
              <Number>{this.state.day}</Number>
              <span style={style.desc}>DAY</span>
            </NumberContainer>
            <NumberContainer>
              <Number>{this.state.hours}</Number>
              <span style={style.desc}>HR</span>
            </NumberContainer>
            <NumberContainer>
              <Number>{this.state.minutes}</Number>
              <span style={style.desc}>MIN</span>
            </NumberContainer>
            <NumberContainer>
              <Number>{this.state.seconds}</Number>
              <span style={style.desc}>SEC</span>
            </NumberContainer>
          </DateInfo>
        </InfoContainer>
      </Layout>
    );
  }
}

export default App;
