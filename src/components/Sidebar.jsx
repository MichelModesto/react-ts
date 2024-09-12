import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://media.licdn.com/dms/image/D4D03AQGzk-aHIn_AKw/profile-displayphoto-shrink_800_800/0/1694009510261?e=1728518400&v=beta&t=68yysRYDA62tVVkp7cVUlgu84RkKfzpMxkbK81Xs1Tc" />


                <strong>Miche Modesto</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine />
                        Editar seu Perfil
                    </a>
                </footer>

            </div>
        </aside>
    );
}