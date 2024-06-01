/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler, useState } from 'react';

import Styles from './Header.module.css';
import Container from '../container/Container';

interface ItemsHeader {
    event: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Header(props: ItemsHeader) {
    const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
    return (
        <div className={Styles.header}>
            <div className={Styles.navMenu}></div>
            <Container>
                <div className={Styles.header_wrapper}>
                    <div className={Styles.header_logo}>
                        <img src="images/logo-bookmark.svg" alt="" />
                    </div>
                    <div className={Styles.header_list_options}>
                        <a href="#">features</a>
                        <a href="#">pricing</a>
                        <a href="#">contact</a>
                        <a href="#"><button>login</button></a>
                    </div>
                    <button className={Styles.menu} onClick={props.event}>
                        <img src="images/icon-hamburger.svg" alt="" />
                    </button>
                </div>
            </Container>
        </div>
    )
}