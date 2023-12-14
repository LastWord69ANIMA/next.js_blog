//"use client"

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
        {/*<Image
            src="/ID003_Western-Castle_night-300x169_waifu2x_noise1_scale4x.png"
            alt="ファンタジー風背景"
            layout="fill"
            objectFit="cover"
            className={styles.backgroundImage}
        />*/}
        <Flex className={styles.home}>
            ポ＾トフォリオ
        </Flex>
    </div>
    
        <Footer />

</div>
  )
}