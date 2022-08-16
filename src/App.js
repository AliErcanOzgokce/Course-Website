import './App.css';
import { motion, useScroll, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Header from './components/Header/Header';
import Partners from './components/Partners/Partners';
import PropagateLoader from "react-spinners/PropagateLoader";
import WYL from './components/What Youll Learn/WYL';
import WCF from './components/Who Is This Course For/WCF';
import FAQ from './components/FAQ/FAQ';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function App() {

  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, []);
  const { scrollYProgress } = useScroll();
  return (
    <div class="App">
      {
        loading ?
        <div class="loader">
          <PropagateLoader class="load" size={25} color={"#f5f5f5"} loading={loading} speedMultiplier={0.8} />
          <h2>Please Wait</h2>
        </div> 
        :
        <>
          <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
          />
          <Section><Header /></Section>
          <section class="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
                <Section>
                  <span><b>Web 3.0 Cohort Course</b></span>
                </Section>
                <br />
            </div>
            <div id="subtitle">
                <Section>
                  <p>
                  A 6 week cohort-based program that will build your knowledge around Web3, crypto, NFTs with a community that is a hub for the Web3 experts & enthusiasts.
                  </p>
                  <a class="enroll-button"><b>Enroll Now</b></a>
                </Section> 
            </div>       
          </section>
          <div class="components">
            <Section><Partners /></Section>
            <Section><WYL /></Section>
            <Section><WCF /></Section>
            <Section><FAQ /></Section>
            <small>© 2022 ÖZGÖKÇE Development, All Rights Reserved</small>
          </div>
        </>
      }
    </div>
  );
}

export default App;
