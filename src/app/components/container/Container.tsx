import Styles from './Container.module.css';

export default function Container(props: any) {
    return (
        <div className={Styles.container}>
            {props.children}
        </div>
    )
}