import React from "react";
import Section from "./Section";
import styles from "../styles/Intro.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Intro = () => {
  return (
    <Section className={styles.padding} id="">
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>
            Welcome to Isyanworld&reg;
          </h1>
          <p>
            Alle wichtigen Informationen und Ankündiungen für die Isyanarmy, verlinkungen zu den offiziellen Isyanworld&reg; Kanälen und euren Künstlern Cemonym findet ihr hier.
          </p>
          <div className={styles.actions}>
            <Link href="#">
              <a className={styles.customer}>
                <span></span>
                <FaArrowRight />
              </a>
            </Link>
            <Link href="">
              <a className={styles.contact}>
                <span></span>
                <FaArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
