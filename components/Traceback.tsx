// Import all styles from the layouts of the theme
import styles from '@theme/slides.module.scss';

/** Shows a traceback massage nicely formatted
 *  E.g.
 * MemoryError: Unable to allocate 1.00 GiB for an array with shape (1000000000,) and data type int64
 */
export function Traceback({ type, msg, ...divProps }) {
    return (
        <div className={styles.Traceback} {...divProps}>
            <span className={styles.Type}>{type}</span>
            <span className={styles.Msg}>: {msg}</span>
        </div>
    );
}
