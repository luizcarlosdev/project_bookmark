/* eslint-disable @next/next/no-img-element */
import Styles from './Header.module.css';
import Container from '../container/Container';

export default function Header() {
    return (
        <div className={Styles.header}>
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
                </div>
            </Container>
        </div>
    )
}