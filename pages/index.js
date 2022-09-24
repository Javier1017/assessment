import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/header'
import Footer from '../component/footer'
import React from "react";
import ReactDOM from "react-dom";

export default function Home() {
  return (
    <div className={styles.container}>
        <React.StrictMode>
        <Header></Header>
  </React.StrictMode>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
