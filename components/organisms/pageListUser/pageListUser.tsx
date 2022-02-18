import React, { useState, useContext ,useEffect} from "react";
import Image from 'next/image'
import styles  from './pageListUser.module.scss';
import Input from '../../atoms/input/input';
import Button from "../../atoms/button/button";
import Router from 'next/router';
import { AuthContext } from "../../../auth/AuthContext";
import TimeAgo from "timeago-react";

export default function PageListUser() {
    const [users, SetUsers] = useState([]);

    const { user } = useContext(AuthContext);

    const getUserLogs= async () => {
        SetUsers([])
        const response = await fetch(`http://localhost:4000/api/users/getUsersLogs`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token":user.token
            },
        });

        const response_data = await response.json();
        console.log(response_data)
        SetUsers(response_data)

    }

    useEffect(() => {
        
        getUserLogs()
      }, [user]);
      



    return (
        <div className={styles.o_page_list_user__content}>
        <h2>Últimas conexiones de los usuarios</h2>
      

        {
            users.length>0? (
                users.map((user) => {
                    return (
                      <div className={styles.o_page_list_user__content__table} key={user._id}>
                          <div className={styles.o_page_list_user__content__table__item}>
                            <div className={styles.o_page_list_user__content__table__item__user}>
                              <p className={styles.o_page_list_user__content__table__item__user__name}>
                                {user.name}
                              </p>
                              <p className={styles.o_page_list_user__content__table__item__user__email}>
                                  {user.email? user.email : "Sin logear"}
                              </p>
                            </div>
                            <div className={styles.o_page_list_user__content__table__item__date}>
                               
                               {user.createdAt? (<><TimeAgo datetime={user.createdAt} locale="ES" /> <h4>{user.device}</h4></>): <p>Sin logear</p>}
                            </div>  
                          </div>
                      </div>
                    );
                  })
            ):<p>Sin conexiones</p>
        }
      </div>
    )
}
