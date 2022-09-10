import React from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import "./counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = React.useState(false);
  const [counter, setCounter] = React.useState();

  React.useEffect(() => {
    getDonors();
  }, []);

  const getDonors = async () => {
    try {
      const response = await fetch("http://localhost:8060/getallsolvedcases", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // console.log(data);

      const solved = data.filter((item) => item.status === "Solved");

      setCounter(solved.length);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div
        className="wrap colorWhite"
        style={{ backgroundImage: `url(${"slide3.jpg"})` }}
      >
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div>
            <LoyaltyIcon style={{ fontSize: 40, color: "#f52f2f" }} />
            {counterOn && (
              <h3>
                <CountUp start={0} end={3} duration={1} delay={0.001} />
              </h3>
            )}

            <article>YEAR EXPERIENCE</article>
          </div>
        </ScrollTrigger>

        <div>
          <OilBarrelIcon style={{ fontSize: 40, color: "#f52f2f" }} />
          {counterOn && (
            <h3>
              <CountUp start={0} end={2500 + counter} duration={1} delay={0} />
            </h3>
          )}
          <article>HAPPY DONORS</article>
        </div>

        <div>
          <EmojiEventsIcon style={{ fontSize: 40, color: "#f52f2f" }} />
          {counterOn && (
            <h3>
              <CountUp start={0} end={1000} duration={1} delay={0.001} />
            </h3>
          )}
          <article>TOTAL AWARDS</article>
        </div>

        <div>
          <Diversity2Icon style={{ fontSize: 40, color: "#f52f2f" }} />
          {counterOn && (
            <h3>
              <CountUp start={0} end={2000} duration={1} delay={0.001} />
            </h3>
          )}
          <article>HAPPY RECIPIENT</article>
        </div>
      </div>
    </>
  );
};

export default Counter;
