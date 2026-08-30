import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
    return (
        <article className={styles.card} aria-hidden="true">
            <div className={styles.image} />
            <div className={styles.content}>
                <div className={`${styles.line} ${styles.lineMedium}`} />
                <div className={`${styles.line} ${styles.lineShort}`} />
                <div className={`${styles.line} ${styles.lineFull}`} />
            </div>
        </article>
    );
};

export default SkeletonCard;