import styles from './HowItWorks.module.css';

const steps = [
    {
        number: 1,
        title: 'Browse Vendors',
        description: 'Explore a wide variety of local restaurants and food vendors near you.',
    },
    {
        number: 2,
        title: 'Choose Your Meal',
        description: 'Pick your favourite meals from the menu and add them to your order.',
    },
    {
        number: 3,
        title: 'Fast Delivery',
        description: 'Sit back and relax while your food is delivered straight to your door.',
    },
];

const HowItWorks = () => {
    return (
        <section className={`py-5 ${styles.section}`} aria-label="How it works">
            <div className="container">
                <h2 className={`fw-bold mb-5 ${styles.title}`}>How It Works</h2>

                <ol className="row g-4 list-unstyled">
                    {steps.map((step) => (
                        <li key={step.number} className="col-12 col-md-4">
                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber} aria-hidden="true">
                                    {step.number}
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>

            </div>
        </section>
    );
};

export default HowItWorks;