import { FaStar } from 'react-icons/fa';
import styles from './VendorCard.module.css';

const VendorCard = ({
    vendor: {
        store_name,
        category,
        rating,
        delivery_fee,
        delivery_time,
        open_status,
        image,
    },
}) => {

    return (
        <article className={`${styles.card} fadeInUp`} aria-label={store_name}>
            <div className={styles.imageWrapper}>
                <img
                    src={image}
                    alt={store_name + ' food photo'}
                    className={styles.image}
                />
                <span
                    className={`${styles.badge} ${open_status ? styles.badgeOpen : styles.badgeClosed}`}
                    aria-label={open_status ? 'Currently open' : 'Currently closed'}
                >
                    {open_status ? 'Open' : 'Closed'}
                </span>
            </div>

            <div className={styles.content}>
                <p className={styles.storeName}>{store_name}</p>
                <p className={styles.category}>{category}</p>

                <div className={styles.meta}>
                    <span
                        className={styles.rating}
                        aria-label={'Rating ' + rating + ' out of 5'}
                    >
                        <FaStar size={12} /> {rating}
                    </span>
                    <span className={styles.divider} aria-hidden="true">|</span>
                    <span aria-label={'Delivery fee ' + delivery_fee.toLocaleString() + ' naira'}>
                        ₦{delivery_fee.toLocaleString()}
                    </span>
                    <span className={styles.divider} aria-hidden="true">|</span>
                    <span aria-label={'Delivery time ' + delivery_time + ' minutes'}>
                        {delivery_time} min
                    </span>
                </div>
            </div>
        </article>
    );
};

export default VendorCard;