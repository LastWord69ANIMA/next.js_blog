import styles from './page.module.css'
import { Flex } from "@chakra-ui/react";
import Header from "@/app/src/components/Header"
import Footer from '@/app/src/components/Footer';

export default function Home() {
  return (
    <div
    className={styles.Isometric}
    >

    <div>
        <Header />
    </div>

    <div>
        <Flex className={styles.home}>
            ポートフォリオ v2.0
        </Flex>
    </div>
    <Flex>
        <div>
        <h1 className={styles.prehome}>訪問者様へ</h1>
        <p className={styles.prehome}>「事」内の記事はタグでの絞り込みをご活用ください</p>
        <p className={styles.prehome}>「問」の本文は短文でお願いします（DB容量の都合上）</p>
        </div>
    </Flex>

        <Footer />

</div>
  )
}