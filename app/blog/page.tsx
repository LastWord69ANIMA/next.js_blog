import styles from './page.module.css'
import Link from 'next/link';
import { Flex} from "@chakra-ui/react";

import Header from "@/app/src/components/Header"
import Footer from '../src/components/Footer';


export default function Home() {
  return (
    <div
    className={styles.Isometric}
    >

    <div>
        <Header />
    </div>

    <div>
        <Flex className={styles.prehome}>
            ※次回、microCMSのAPIを使用する予定
        </Flex>

        <Flex className={styles.prehome}>
            <p>以下のリンク及びgithubをご参照お願いします。</p>
        </Flex>

        <Flex className={styles.prehome}>
            <Link href="https://micro-cms-tutorial-seven.vercel.app/">microCMS</Link>
        </Flex>

    </div>
    
        <Footer />

</div>
  )
}