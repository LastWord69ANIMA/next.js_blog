'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Button, Flex, Heading, Input, position, useColorMode, useColorModeValue} from "@chakra-ui/react";

const GoToGithub = () => {
    return (
      <Link href="https://github.com/LastWord69ANIMA"
      >
        <Image
            src={"/github-icon.svg"}
            alt={"Picture of Github"}
            width={50}
            height={50}
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

export default function Profile() {
    return(
        <div
        className={styles.Isometric}
        >       
                <Header />
            
            <div>
                
                <Flex className={styles.home}>
                --プロフィール--
                </Flex>
                <Flex className={styles.home}>
                HN:LastWord69ANIMA
                </Flex>
                <Flex className={styles.home}>
                FROM:Japan
                </Flex>
                <Flex className={styles.home}>
                HOBBY:
                </Flex>
                <Flex className={styles.home}>
                1.Programing

                2.Philosophy 

                3.Work out 
                
                etc...
                </Flex>

                <Flex className={styles.home}>
                Skill:
                </Flex>

                <div className={styles.hidden}>
                    <Link href="https://developer.mozilla.org/ja/docs/Web/JavaScript"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/javascript.svg"}
                            alt={"Picture of JavaScript"}
                            width={100}
                            height={100}
                            ></Image>
                    </Link>

                    <Link href="https://www.typescriptlang.org/docs/"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/typescript-icon.svg"}
                            alt={"Picture of TypeScript"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://www.php.net/manual/ja/index.php"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/php.svg"}
                            alt={"Picture of PHP"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://docs.python.org/ja/3/"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/python.svg"}
                            alt={"Picture of Python"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                </div>

                <Flex className={styles.home}>
                Framework/Library:
                </Flex>

                <div className={styles.hidden}>
                    <Link href="https://nextjs.org/docs"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/nextjs-icon.svg"}
                            alt={"Picture of Next.js"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://react.dev/learn"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/react.svg"}
                            alt={"Picture of Next.js"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>
                </div>

                <Flex className={styles.home}>
                Others:
                </Flex>

                <div className={styles.hidden}>
                        
                    <Link href="https://docs.docker.jp/"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/docker-icon.svg"}
                            alt={"Picture of Docker"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://vercel.com/docs"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/vercel.svg"}
                            alt={"Picture of vercel"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://www.mysql.com/jp/"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/mysql.svg"}
                            alt={"Picture of Mysql"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>
                </div>

                <Flex className={styles.home}>
                Studying:
                </Flex>

                <div className={styles.hidden}>
                    <Link href="https://nodejs.org/ja/docs"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/nodejs.svg"}
                            alt={"Picture of Node.js"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://learn.microsoft.com/ja-jp/cpp/c-language/?view=msvc-170"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/c.svg"}
                            alt={"Picture of C言語"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://www.oracle.com/jp/java/"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/java.svg"}
                            alt={"Picture of java"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://www.tensorflow.org/api_docs"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/tensorflow.svg"}
                            alt={"Picture of java"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>
                </div>

            </div>

        <Footer />
        
        </div>
    )
}