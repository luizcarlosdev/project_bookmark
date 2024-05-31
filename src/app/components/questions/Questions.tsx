import { useState } from 'react';

import Styles from './Questions.module.css';
import Container from '../container/Container';
import Dropdown from './dropdown/Dropdown';

export default function Questions() {
    return (
        <div className={Styles.container}>
            <Container>
                <section>
                    <div className={Styles.questions_header}>
                        <h1>frequently asked questions</h1>
                        <p>
                            Here are some of our FAqs. If you have any other questions<br/>you`d like answered please feel free to email us.
                        </p>
                    </div>
                    <div className={Styles.questions_body}>
                        <Dropdown
                        title='What is Bookmark?'
                        />
                    </div>
                </section>
            </Container>
        </div>
    )
}