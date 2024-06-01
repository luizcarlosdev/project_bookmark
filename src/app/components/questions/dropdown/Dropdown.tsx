import Styles from './Dropdown.module.css';
import Container from '../../container/Container';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MouseEventHandler } from 'react';

interface ItemsDropdown {
    title: string;
    text?: string;
    display: boolean;
    event: MouseEventHandler<HTMLButtonElement> | undefined;
    event1: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function Dropdown(props: ItemsDropdown) {
    return (
        <div className={Styles.dropdown_area}>
            <Container>
                <section>
                    <div className={Styles.dropdown}>
                        <div className={Styles.dropdown_header} onClick={props.event1}>
                            <h4>{props.title}</h4>
                            <button onClick={props.event}
                                style={{ color: (props.display ? "#f00" : "") }}
                            >
                                {(props.display ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                            </button>
                        </div>
                        <div style={{ display: (props.display ? "block" : "none") }} className={Styles.dropdown_body}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis fugiat architecto aliquid est quas, iusto a placeat molestias corrupti velit suscipit mollitia, veniam vel corporis labore enim consequuntur similique. Saepe, cum sapiente suscipit libero nostrum cupiditate possimus illo enim, voluptates odit quia? Dolores ullam corporis impedit assumenda quam optio?
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}