import styles from "../components/footer.module.css"
export default function Footer({CompletedTodos, TotalLength}){
    return <div className={styles.footer}>
        <span className={styles.item}>Complted Todo's : {CompletedTodos}</span>
        <span className={styles.item}>Total Todo's : {TotalLength   }</span>
    </div>
}