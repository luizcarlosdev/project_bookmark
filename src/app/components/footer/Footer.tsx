/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Container from '../container/Container';
import Styles from './Footer.module.css';
import { FiGithub } from "react-icons/fi";

export default function Footer() {
    const [showIconError, setShowIconError] = useState<boolean>(false);
    const [showMsgError, setShowMsgError] = useState<boolean>(false);

    function emailIsvalid(event: string) {
        setShowIconError(true);
        setShowMsgError(true);
        const value = event;
        if (value.includes("@") && value.endsWith(".com")) {
            setShowIconError(false);
            setShowMsgError(false);
        } else {
            console.log(event);
        }
    }

    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer_header}>
                <p>35.000+ already joined</p>
                <h1>Stay up-to-date with what<br />we`re doing</h1>
                <div className={Styles.footer_input}>
                    <div className={Styles.input_area}>
                        <div className={Styles.input}>
                            <input type="text" onChange={(event) => emailIsvalid(event.target.value)}/>
                            <button style={{ display: (showIconError ? "block" : "none") }}>
                                <img src="images/icon-error.svg" alt="" />
                            </button>
                        </div>
                        <div className={Styles.input_error} style={{ display: (showMsgError ? "block" : "none") }}>
                            Whoops! Make sure it´s an email
                        </div>
                    </div>
                    <button>contact us</button>
                </div>
            </div>
            <div className={Styles.footer_end}>
                <Container>
                    <div className={Styles.footer_end_items}>
                        <div className={Styles.footer_end_links}>
                            <img src="images/logo-bookmark2.svg" alt="" />
                            <a href="#">features</a>
                            <a href="#">pricing</a>
                            <a href="#">contact</a>
                        </div>
                        <div className={Styles.footer_end_social}>
                            <a href="https://github.com/luizcarlosdev" target='_blank'>
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}