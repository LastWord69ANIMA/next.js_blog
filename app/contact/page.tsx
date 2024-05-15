
import React from 'react';
import styles from './page.module.css'


import Contactform from './Contactform';
import Header from "@/app/src/components/Header"
import Footer from '@/app/src/components/Footer';

export default function ContactPage() {
    return (
        <div
        className={styles.Isometric}
        >

            <div>
                <Header />
            </div>

            <div>
                <div>
                    <Contactform />
                </div>
            </div>
        
            <Footer />

        </div>
        
    )
}