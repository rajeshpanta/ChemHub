import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.scss';
import { IoMdCart, IoIosSearch } from 'react-icons/io'; // Importing the cart and search icons
import MainMenu from '../menu/MainMenu'; // Make sure the path is correct based on your project structure

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topRow}>
                <div className={styles.logoContainer}>
                    {/* Wrap the image and text with a Link to the homepage */}
                    <Link to="/" className={styles.logoLink}>
                        <img src="/path/to/logo.png" alt="Company Logo" className={styles.logo} />
                        <span className={styles.logoText}>ChemCart</span>
                    </Link>
                </div>
                <div className={styles.searchContainer}>
                    <input className={styles.searchInput} type="text" placeholder="Search..." />
                    <button className={styles.searchButton} onClick={() => console.log('Searching...')}>
                        <IoIosSearch size="2em" />
                    </button>
                </div>
                <div className={styles.loginLink}>
                    <Link to="/login">Login</Link>
                </div>
                <div className={styles.cartIcon}>
                    <Link to="/cart"><IoMdCart size="2em" /></Link>
                </div>
            </div>
            <MainMenu />
        </header>
    );
}

export default Header;
