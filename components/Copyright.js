import styles from "../styles/Footer.module.scss";
import Link from "next/link";

const Copyright = () => {
  return (
    <div className={styles.outer} style={{ padding: "1.5rem 0" }}>
      <div
        className={styles.inner}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* LINKS */}
        <div className={styles.col}>
          <ul style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <li>
              <Link href="#">
                <a style={{ fontSize: "0.7rem" }}>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a style={{ fontSize: "0.7rem" }}>Terms And Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a style={{ fontSize: "0.7rem" }}>Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* COPYRIGHT */}
        <span
          style={{
            display: "block",
            color: "var(--color-gray-100)",
            fontSize: "0.7rem",
            transform: "translateY(12%)",
          }}
        >
          @ IsyanWorld 2022
        </span>
      </div>
    </div>
  );
};

export default Copyright;
