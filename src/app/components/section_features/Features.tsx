import { useState } from 'react';
import Styles from './Features.module.css';
import Container from '../container/Container';
import Bookmarking from './simple_bookmarking/Bookmarking';

export default function Features() {
    const [addEffectItem01, setAddEffectItem01] = useState<boolean>(true);
    const [addEffectItem02, setAddEffectItem02] = useState<boolean>(false);
    const [addEffectItem03, setAddEffectItem03] = useState<boolean>(false);

    function isUsingEffectItem01() {
        setAddEffectItem01(true);
        setAddEffectItem02(false);
        setAddEffectItem03(false);
    }

    function isUsingEffectItem02() {
        setAddEffectItem01(false);
        setAddEffectItem02(true);
        setAddEffectItem03(false);
    }

    function isUsingEffectItem03() {
        setAddEffectItem01(false);
        setAddEffectItem02(false);
        setAddEffectItem03(true);
    }


    return (
        <div className={Styles.section_features}>
            <Container>
                <div className={Styles.container}>
                    <div className={Styles.features}>
                        <div className={Styles.features_header}>
                            <h1>Features</h1>
                            <p>
                                Our aim is to make it quick and easy for you to acess your<br /> favourite websites. Your bookmarks sync between your devices<br /> so you can acess them on the go.
                            </p>
                        </div>
                        <div className={Styles.features_list}>
                            <ul>
                                <li className={Styles[(addEffectItem01 ? "add_item_effect" : "")]}
                                onClick={isUsingEffectItem01}
                                >simple bookmarking</li>
                                <li className={Styles[(addEffectItem02 ? "add_item_effect" : "")]}
                                onClick={isUsingEffectItem02}
                                >speedy searching</li>
                                <li className={Styles[(addEffectItem03 ? "add_item_effect" : "")]}
                                onClick={isUsingEffectItem03}
                                >easy sharing</li>
                            </ul>
                        </div>
                    </div>
                    <Bookmarking 
                    visibility={addEffectItem01}
                    image="images/illustration-features-tab-1.svg"
                    title='Book in one click'
                    text='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.'
                    textButton='More info'/>
                </div>
            </Container>
        </div>
    )
}