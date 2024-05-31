import Styles from './Dowload.module.css';
import Container from '../container/Container';
import Card from './dowload_cards/Card';

export default function Dowload() {
    return (
        <div className={Styles.section_dowload}>
            <Container>
                <div className={Styles.dowload_area}>
                    <div className={Styles.dowload_header}>
                        <h1>Dowload the extension</h1>
                        <p>We`ve got more in the pipeline. Please do let us know if<br/> you`ve got a favourite you`d like us to priorize.</p>
                    </div>
                    <div className={Styles.dowload_cards}>
                        <Card 
                        image="images/logo-chrome.svg"
                        browserName='Chrome'
                        browserVersion={62}
                        />
                        <Card 
                        image="images/logo-firefox.svg"
                        browserName='Firefox'
                        browserVersion={55}
                        />
                        <Card 
                        image="images/logo-opera.svg"
                        browserName='Opera'
                        browserVersion={46}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}