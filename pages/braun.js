import { useEffect } from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import styles from '../styles/braun.module.scss';

export default function Braun() {
    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', '#fff');
        document.documentElement.style.setProperty('--color', '#000');
    }, []);

    return (
        <>
            <Head>
                <title>Braun</title>
                <meta name="description" content="Braun" />
            </Head>
            <div id={styles['braun']} className={classNames({})}>
                <h1>Stephen Matheis</h1>
                <h2>
                    Lorem ipsum <br />
                    dolor sit amet.
                </h2>
                <h3>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
        </>
    )
}