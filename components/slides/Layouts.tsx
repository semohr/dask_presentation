import NavBar from './NavBar';
import { SlideControl } from './Utils';

import styles from '@theme/slides.module.scss';
import { Traceback } from 'components/Traceback';

export const Layouts = {
    // Layouts for slides
    // Layouts are defined in the fontMatter.layout can be defined in the mdx header
    // ---
    default: {
        Navbar: (props) => <NavBar {...props} />,
        SlideControl: (props) => <SlideControl {...props} />,
        Source: (props) => (
            <div className={styles.Source} {...props}>
                Source: {props.children}
            </div>
        )
    },
    titlepage: {
        Location: ({ loc1, loc2, ...props }) => (
            <div className={styles.Location} {...props}>
                <h3>{loc1}</h3>
                <h3>{loc2}</h3>
            </div>
        ),
        Author: ({ name, ...props }) => (
            <div className={styles.Author} {...props}>
                <p>{name}</p>
            </div>
        ),
        Date: ({ date, ...props }) => (
            <div className={styles.Date} {...props}>
                <p>{date}</p>
            </div>
        ),
        h1: ({ children, ...props }) => (
            <h1 className={styles.title} {...props}>
                {children}
            </h1>
        ),
        h2: ({ children, ...props }) => (
            <h2 className={styles.subtitle} {...props}>
                {children}
            </h2>
        )
    },
    row: {
        Column: (props) => <div className={styles.column} {...props} />
    },
    dask: {
        Traceback: (props) => <Traceback {...props} />
    },
    edge: {
        Quote: (props) => <blockquote className={styles.Quote} {...props} />,
        Params: (props) => <div className={styles.Params} {...props} />,
        Question: (props) => <div className={styles.Question} {...props} />
    }
};
