
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Button, Flex, Heading, Input, position, useColorMode, useColorModeValue} from "@chakra-ui/react";


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
                href="/blog"
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
            現在、作業中。
        </Flex>

        <Flex className={styles.home}>
            以下のリンク及びgithubをご参照お願いします。
            https://micro-cms-tutorial-seven.vercel.app/
        </Flex>

    </div>
    
        <Footer />

</div>
  )
}