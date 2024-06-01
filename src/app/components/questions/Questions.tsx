import { useState } from 'react';

import Styles from './Questions.module.css';
import Container from '../container/Container';
import Dropdown from './dropdown/Dropdown';

export default function Questions() {
    const [showDropdownText1, setShowDropdownText1] = useState<boolean>(false)
    const [showDropdownText2, setShowDropdownText2] = useState<boolean>(false)
    const [showDropdownText3, setShowDropdownText3] = useState<boolean>(false)
    const [showDropdownText4, setShowDropdownText4] = useState<boolean>(false)
    return (
        <div className={Styles.container}>
            <Container>
                <section>
                    <div className={Styles.questions_header}>
                        <h1>frequently asked questions</h1>
                        <p>
                            Here are some of our FAqs. If you have any other questions<br />you`d like answered please feel free to email us.
                        </p>
                    </div>
                    <div className={Styles.questions_body}>
                        <Dropdown
                            title='What is Bookmark?'
                            display={showDropdownText1}
                            event1={() => setShowDropdownText1(!showDropdownText1)}
                            event={() => setShowDropdownText1(!showDropdownText1)}
                        />
                        <Dropdown
                            title='How can i request a new browser?'
                            display={showDropdownText2}
                            event1={() => setShowDropdownText2(!showDropdownText2)}
                            event={() => setShowDropdownText2(!showDropdownText2)}
                        />
                        <Dropdown
                            title='Is there a mobile app?'
                            display={showDropdownText3}
                            event1={() => setShowDropdownText3(!showDropdownText3)}
                            event={() => setShowDropdownText3(!showDropdownText3)}
                        />
                        <Dropdown
                            title='What about other Chromium browsers?'
                            display={showDropdownText4}
                            event1={() => setShowDropdownText4(!showDropdownText4)}
                            event={() => setShowDropdownText4(!showDropdownText4)}
                        />
                    </div>
                    <button className={Styles.btn_more_info}>More info</button>
                </section>
            </Container>
        </div>
    )
}