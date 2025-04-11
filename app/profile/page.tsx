'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Flex} from "@chakra-ui/react";

import Header from "@/app/src/components/Header"
import Footer from '@/app/src/components/Footer';

{/*次回、
    ・項目のコンポーネント化
    ・サイズの調整
    ・職歴と資格欄を、箱内にて箇条書き
*/}
export default function Profile() {
    return(
        <div
        className={styles.Isometric}
        >       
                <Header />
            
            <div>
                
                <Flex className={styles.home}>
                --Profile--
                </Flex>
                <Flex className={styles.home}>
                HN:LastWord69ANIMA
                </Flex>
                <Flex className={styles.home}>
                FROM:Japan
                </Flex>
                <Flex className={styles.home}>
                ↓Work history↓
                </Flex>
                <Flex className={styles.home}>
                2025/4～Now:
                </Flex>
                <Flex className={styles.home}>
                PERSOL CROSS TECHNOLOGY CO., LTD.
                </Flex>

                <Flex className={styles.home}>
                ↓Skill↓
                </Flex>

                <div className={styles.home}>
                    <Flex>
                        2021/6 実用英語技能検定準一級
                    </Flex>

                    <Flex>
                        2023/6 日商簿記2級
                    </Flex>

                    <Flex>
                        2024/3 基本情報技術者試験
                    </Flex>

                    <Flex>
                        2024/10 LPIC-1
                    </Flex>

                    <Flex>
                        2024/12 CCNA(200-301)
                    </Flex>
                </div>

            </div>

        <Footer />
        
        </div>
    )
}