/* eslint-disable @next/next/no-img-element */
import { ChangeEventHandler, MouseEventHandler } from 'react';
import Styles from './Bookmarking.module.css';
import Container from '../../container/Container';

interface ItemsBookmarking {
    visibility: boolean;
    image: any;
    title: string;
    text: string;
    textButton: string;
}

export default function Bookmarking(props: ItemsBookmarking) {
    return (
        <div className={Styles.book_in_click} style={{ display: (props.visibility ? "block" : "none") }}>
            <Container>
                <section>
                    <div className={Styles.section_banner}>
                        <img src={props.image} alt="" />
                    </div>
                    <div className={Styles.section_intro}>
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                        <button>{props.textButton}</button>
                    </div>
                </section>
            </Container>
            <div className={Styles.add_effect}></div>
        </div>
    )
}