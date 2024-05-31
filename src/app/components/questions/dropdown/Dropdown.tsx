import Styles from './Dropdown.module.css';
import Container from '../../container/Container';

interface ItemsDropdown {
    title: string;
}

export default function Dropdown(props: ItemsDropdown) {
    return (
        <div className={Styles.dropdown_area}>
            <Container>
                <section>
                    <div className={Styles.dropdown}>
                        <div className={Styles.dropdown_header}>
                            <h4>{props.title}</h4>
                            <button>
                                ?
                            </button>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}