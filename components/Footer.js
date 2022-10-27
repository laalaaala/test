import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { useState } from "react";

const Footer = () => {
  const schema = z.object({
    email: z
      .string()
      .email({ message: "Email is not valid" })
      .min(1, { message: "Email is required" }),
  });
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const validate = () => {
    const result = schema.safeParse({
      email: email,
    });
    setErrors(result?.error?.format());
  };
  return (
    <footer className={styles.outer}>
      <div className={styles.inner}>
        {/* COL */}
        <div className={styles.col}>
          <div className={styles.me}>
            <Link href={"/"}>
              <a>
                <span>Isyanworld</span>
                <div className={styles.profile}>
                  <div className={styles.imgBorder}>
                    <Image
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      src="/profile.jpg"
                    />
                  </div>
                  <div className={styles.border}></div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        {/* COL */}
        <div className={styles.col}>
          <ul>
            <li className={styles.title}>Services</li>
            <li>
              <Link href="#">
                <a>Clients</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Company</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Startup</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.title}>Products</li>
            <li>
              <Link href="#">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Service</a>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* COL */}
        <div className={styles.col}>
          <ul>
            <li className={styles.title}>Company</li>
            <li>
              <Link href="#">
                <a>Corporate</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>SEO Agency</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Web Agency</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.title}>Solutions</li>
            <li>
              <Link href="#">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Service</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* COL */}
        <div className={styles.col}>
          <div className={styles.newsletter}>
            <h2 className={styles.title}>Newsletter</h2>
            <p>1000+ Our clients are subscribe Around the World!</p>
          </div>
          <form className={styles.input} onClick={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors && <span>{errors?.email?._errors[0]}</span>}
            <button onClick={() => validate()}>Submit Now</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
