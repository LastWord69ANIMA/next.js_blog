'use client'
import styles from './page.module.css'
import { Flex} from "@chakra-ui/react";

import Header from "@/app/src/components/Header"
import Footer from '@/app/src/components/Footer';

{/*次回のver.3.0でやること･･･の順序
    1.UIをモバイルに対応させる
    2.資格項目のコンポーネント化
    ･･･職歴と資格欄を、箱内にて箇条書き
    3.ブログページをポートフォリオにページ埋め込み
    ･･･microCMSのAPIを利用してGETリクエストをつかってみる
    4.隠し要素（遊び要素）の追加
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
                        2024/8 LPIC-1
                    </Flex>

                    <Flex>
                        2024/12 CCNA(200-301)
                    </Flex>

                    <Flex>
                        2025/6 AWS-SAA
                    </Flex>
                </div>

            </div>

        <Footer />

        </div>
    )
}