/* eslint-disable @next/next/no-img-element */
import Styles from './Card.module.css';

interface ItemsCard {
    image: any;
    browserName: string;
    browserVersion: number;
}

export default function Card(props: ItemsCard) {
    return (
        <div className={Styles.card}>
            <div className={Styles.card_header}>
                <img src={props.image} alt="" />
                <h3>Add to {props.browserName}</h3>
                <p>Minimium vesion: {props.browserVersion}</p>
            </div>
            <div className={Styles.card_btn}>
                <a href="#">
                    <button>Add & install Extension</button>
                </a>
            </div>
        </div>
    )
}