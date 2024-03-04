"use client"
import { useState } from 'react';


import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Flex } from "@chakra-ui/react";

//import prisma from '../../lib/prisma';
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
                
                <div>
                    <Flex className={styles.prehome}>
                        <h1>Contact Form</h1>
                    </Flex>
                    
                    <Flex className={styles.home}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div>
                            <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="inquiry">Inquiry</label>
                                <textarea
                                    id="inquiry"
                                    name="inquiry"
                                    placeholder="Enter your inquiry"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <Flex className={styles.prehome}>
                                <button type="submit">Submit</button>
                            </Flex>
                        </form>
                    </Flex >
                </div>

                



            </div>
        
            <Footer />

        </div>
    )
}