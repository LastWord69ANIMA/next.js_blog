'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Flex} from "@chakra-ui/react";

import Header from "@/app/src/components/Header"
import Footer from '@/app/src/components/Footer';

{/*　次回、コンポーネントにして、読みやすくする予定　*/}
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
                </Flex>
                <Flex className={styles.home}>
                2.Reading
                </Flex>
                <Flex className={styles.home}>
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
                            alt={"Picture of react"}
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

                    <Link href="https://www.prisma.io/"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/prisma.svg"}
                            alt={"Picture of prisma"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>
                </div>

                <Flex className={styles.home}>
                Studying:
                </Flex>

                <div className={styles.hidden}>
                <Link href="https://kotlinlang.org/"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/kotlin.svg"}
                            alt={"Picture of kotlin"}
                            width={100}
                            height={100}
                        ></Image>
                    </Link>

                    <Link href="https://developer.android.com/studio?hl=ja"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/android-studio.svg"}
                            alt={"Picture of android studio"}
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

                    <Link href="https://www.tensorflow.org/api_docs"
                        className={styles.logohidden}
                    >
                        <Image
                            src={"/tensorflow.svg"}
                            alt={"Picture of tensorflow"}
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