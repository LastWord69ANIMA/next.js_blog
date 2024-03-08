"use client"
import React, { ReducerAction, use, useState } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Flex } from "@chakra-ui/react";

import prisma from '../../lib/prisma';
//import { PrismaClient } from '@prisma/client'

//const prisma = new PrismaClient()

import Contactform from '../src/components/Contactform';
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

    {/*上記コンポーネントは、別途フォルダにまとめる。 */}
    {/*以下dbとの連携は適宜見やすいように調整*/}

export default function ContactPage() {
    /*
    const handler = async (req: NextApiRequest, res: NextApiResponse) => {
        if (req.method === 'POST') {
          try {
            const { formData } = req.body; // フォームからのデータを取得
      
            // Prismaを介してデータベースに保存
            const createdData = await prisma.contact.create({
              data: {
                name: formData.name,
                email: formData.email,
                inquiry: formData.inquiry,
              },
            });
      
            res.status(201).json({ message: 'Data saved successfully', data: createdData });
          } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ message: 'Error saving data' });
          }
        } else {
          res.status(302).json({ message: 'Method Not Allowed' });
        }
      }
    */
    return (
        <div
        className={styles.Isometric}
        >

            <div>
                <Header />
            </div>

            <div>
                <div>
                    <Contactform />
                </div>
            </div>
        
            <Footer />

        </div>
        
    )
}