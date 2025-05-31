import styles from './page.module.css'
import { Flex } from "@chakra-ui/react";
import Header from "@/app/src/components/Header"
import Footer from '@/app/src/components/Footer';
import Link from 'next/link';

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
            ポートフォリオ v2.3
        </Flex>
    </div>

    <div>
        <Flex className={styles.prehome}>
            <Link href={"https://youtu.be/jF6EQNtUBtQ"} target={"_blank"}>
                管理者側の視点
            </Link>
        </Flex>
    </div>

        <Footer />

</div>
  )
}