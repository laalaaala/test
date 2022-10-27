import styles from "../styles/Navbar.module.scss";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import useOnClickOutside from "../hooks/ClickOutside";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ setMode, mode }) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef();
  useOnClickOutside(mobileNav, () => setIsActive(false));
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.outer} ${isScrolled ? styles.scrolled : undefined}`}
    >
      <div className={styles.container}>
        <nav className={styles.inner}>
          {/* LEFT SIDE */}
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
          {/* RIGHTSIDE */}
          <ul className={styles.nav_list}>
            <li>
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <a>Cemonym</a>
              </Link>
            </li>
            <li>
              <Link href="#methods">
                <a>Isyanmood</a>
              </Link>
            </li>
            <li>
              <Link href="#pricing">
                <a>Info</a>
              </Link>
            </li>
            <li>
              <Link href="#clients">
                <a>Kontakt</a>
              </Link>
            </li>
            <li>
            </li>
            <div className={styles.mobile}>
              <button onClick={() => setIsActive(true)}>
                <FaBars />
              </button>
            </div>
            <button
              className={`${styles.mode} ${!mode ? styles.light : ""}`}
              onClick={() => setMode(!mode)}
            >
              {mode ? <BsSun /> : <BsMoon />}
            </button>
          </ul>
        </nav>
      </div>
      {/* MOBILE NAVIGATION */}
      <div
        className={`${styles.mobileNav} ${
          isActive ? undefined : styles.notActive
        }`}
      >
        <nav ref={mobileNav}>
          {isActive && (
            <ul className={styles.mobileNavList}>
              <div className={styles.close}>
                {/* LOGO */}
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
                            src="/profile-transparent.png"
                          />
                        </div>
                        <div className={styles.border}></div>
                      </div>
                    </a>
                  </Link>
                </div>
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              <li onClick={() => setIsActive(false)}>
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#services">
                  <a>Cemonym</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#methods">
                  <a>Isyanmood</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#pricing">
                  <a>Info</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#pricing">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
