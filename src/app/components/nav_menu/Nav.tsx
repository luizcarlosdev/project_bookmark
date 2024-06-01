/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler } from 'react';
import Styles from './Nav.module.css';

interface ItemsNav {
    visibility: boolean;
    event: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Nav(props: ItemsNav) {
    return (
        <nav className={Styles.menu} style={{ left: (props.visibility ? "0" : "-100%") }}>
            <div className={Styles.menu_header}>
                <div className={Styles.menu_logo}>
                    <img src="images/logo-bookmark2.svg" alt="" />
                    <button onClick={props.event}>
                        <img src="images/icon-close.svg" alt="" />
                    </button>
                </div>
                <ul>
                    <li><a href="">features</a></li>
                    <li><a href="">pricing</a></li>
                    <li><a href="">contact</a></li>
                    <button>login</button>
                </ul>
            </div>
        </nav>
    )
}