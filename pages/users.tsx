import { useState,useContext} from "react";
import Categories from "../components/molecules/categories/categories";
import Navigation from "../components/molecules/navigation/navigation";
import Slider from "../components/molecules/slider/slider";
import styles from "../styles/Home.module.scss";
import Layout from "../layouts/Layout";
import { AuthContext } from "../auth/AuthContext";
import NotAuthorized from "../components/atoms/not-authorized/notAuthorized";
import PageListUser from "../components/organisms/pageListUser/pageListUser";


export default function Home() {
  const [auth, setAuth] = useState(false);
 const { user } = useContext(AuthContext);

  return (
    <Layout auth={user?.logged}>
        <div className={styles.container}>
            <Navigation username={user?.name}/>
            {user?.role==="admin"?(<div className={styles.main}>
                <PageListUser/>
            </div>
            ):<NotAuthorized/>}
        </div>
  </Layout>
    
  );
}
