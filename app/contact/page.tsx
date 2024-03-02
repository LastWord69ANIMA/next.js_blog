import { useState } from 'react';


import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Button, Flex, Heading, Input, position, useColorMode, useColorModeValue} from "@chakra-ui/react";

import { PrismaClient } from '@prisma/client'

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

    const prisma = new PrismaClient()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Prisma Clientを介してデータベースにデータを保存
          const result = await prisma.contact.create({
            data: {
              name: formData.name,
              email: formData.email,
              inquiry: formData.inquiry,
            },
          });
          console.log('Data saved:', result);
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };
    
  return (
    <div
    className={styles.Isometric}
    >

        <div>
            <Header />
        </div>

        <div>
            <Flex className={styles.prehome}>
                <div>
                    <h1>Contact Form</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        />
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        <textarea
                        name="inquiry"
                        placeholder="Inquiry"
                        value={formData.inquiry}
                        onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Flex>

            <Flex className={styles.prehome}>

            </Flex>

        </div>
    
        <Footer />

    </div>
  )
}