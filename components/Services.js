import styles from "../styles/Services.module.scss";
import Section from "./Section";
import { Fade } from "react-awesome-reveal";

const Service = ({ line, number, background, color, title, description }) => {
  return (
    <div className={styles.service}>
      <div className={styles.circle} style={{ background: background }}>
        <span style={{ color: color }}>{number}</span>
        {line ? <div className={styles.line}></div> : null}
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
Service.defaultProps = {
  line: true,
  number: 1,
  color: "var(--color-primary)",
  background: "var(--color-primary-dark)",
  title: "Web Development",
  description: "There are many variations variations.",
};

const Services = () => {
  return (
    <Section
      title="Services provided for you."
      subtitle="We Can Do Everything."
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quo!"
      id="services"
    >
      <div className={styles.container}>
        <Fade cascade damping={0.05}>
          <Service number={1} />
          <Service
            number={2}
            background="var(--color-secondary-dark)"
            color="var(--color-secondary)"
            title="Design & Creative"
          />
          <Service
            number={3}
            background="var(--color-tertiary-dark)"
            color="var(--color-tertiary)"
            title="App Development"
          />
          <Service
            number={4}
            line={false}
            background="var(--color-pink-dark)"
            color="var(--color-pink)"
            title="Product Design"
          />
        </Fade>
      </div>
    </Section>
  );
};

export default Services;
