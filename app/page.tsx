import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Flex } from "@chakra-ui/react";


export default function Home() {
    const GoToGithub = () => {
        return (
          <Link href="https://github.com/LastWord69ANIMA"
          >
            <Image
                src={"/github-icon.svg"}
                alt={"Picture of Github"}
                width={50}
                height={100}
            ></Image>
          </Link>
        )
    }

    const Header  = () => {
        return(
            <header className={styles.header}>
            <Link
                href="/"
                
            >
                <h1>
                    家
                </h1>
            </Link>

            <Link
                href="https://micro-cms-tutorial-seven.vercel.app/"
            >
                <h1>
                    事
                </h1>
            </Link>

            <Link
                href="/profile"
            >
                <h1>
                    自
                </h1>
            </Link>

            <Link 
                href="/contact"
            >
                <h1>
                    問
                </h1>
            </Link>
        </header>
        )
    }

    const Footer = () => {
        return(
            <footer className={styles.footer}>
            <GoToGithub />
            <p>Copyright ©Lastword69ANIMA ※著作権はありませんが、一応ここに記録。</p>
        </footer>
        )
    }
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