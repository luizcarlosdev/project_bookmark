import Styles from './Section.module.css';
import Container from '../container/Container';

export default function Section() {
    return (
        <div className={Styles.section}>
            <Container>
                <section>
                    <article>
                        <h1>a simple bookmark<br /> manager</h1>
                        <p>
                            A clean and simple interface to organize your favorite<br /> websites. Open a new browser tab and see your sites load<br /> instantly. Try for free.
                        </p>
                        <div className={Styles.btn_group_choose}>
                            <a href="#"><button className={Styles.btn_01}>Get it on Chrome</button></a>
                            <a href="#"><button className={Styles.btn_02}>Get it on Firefox</button></a>
                        </div>
                    </article>
                    <div className={Styles.hero_banner}>
                        <img src="images/illustration-hero.svg" alt="" />
                    </div>
                    <div className={Styles.effect}></div>
                </section>
            </Container>
        </div>
    )
}