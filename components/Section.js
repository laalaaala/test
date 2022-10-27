import styles from "../styles/Section.module.scss";
const Section = ({
  children,
  id,
  className,
  title,
  subtitle,
  description,
  border,
}) => {
  return (
    <section
      id={id}
      className={`${className} ${border ? "" : styles.noBorder} ${
        styles.container
      }`}
    >
      {title && (
        <div className={styles.title}>
          <h3>
            <span>{subtitle}</span>
          </h3>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      )}
      {title ? <div className={styles.children}>{children}</div> : children}
    </section>
  );
};

Section.defaultProps = {
  border: true,
};

export default Section;
