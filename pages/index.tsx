import {useEffect, useState,useContext} from "react";
import Categories from "../components/molecules/categories/categories";
import Navigation from "../components/molecules/navigation/navigation";
import Slider from "../components/molecules/slider/slider";
import styles from "../styles/Home.module.scss";
import Layout from "../layouts/Layout";
import { AuthContext } from "../auth/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Layout auth={user?.logged}>
  
      <div className={styles.container}>
        <Navigation username={user?.name}/>
        <div className={styles.main}>
          {user?.role ==="admin"? <Link href="/users"><p className={styles.home__users} > Ver Lista de usuarios registrados</p></Link>:null}
          <Slider />
          <Categories/>
        </div>
      </div>
    </Layout>
    
  );
}
