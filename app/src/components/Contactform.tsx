"use client"
import React, { ReducerAction, use, useState } from 'react';


import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Flex } from "@chakra-ui/react";

import prisma from '../../../lib/prisma';
import handler from '@/app/api/route';

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

const Contactform: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          // Prisma Clientを介してデータベースにデータを保存
          const result = await fetch('@/app/api/route',{
            method:'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            });
        
            if (result.ok) {
            const data = await result.json();
            console.log('Data saved successfully:', data);
          } else {
            console.error('Error saving data');
          }
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };
    /*
            data: {
              name: formData.name,
              email: formData.email,
              inquiry: formData.inquiry,
            },
          });
            

          console.log('Data seved successfully.');
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };
    */  
    
    return (
            <div>
                
                <div>
                    <Flex className={styles.prehome}>
                        <h1>Contact Form</h1>
                    </Flex>
                    
                    <Flex className={styles.home}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div>
                                <Flex>
                                <label htmlFor="name">Name</label>
                                </Flex>
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
                                <Flex>
                                <label htmlFor="email">Email</label>
                                </Flex>
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
                                <Flex>
                                <label htmlFor="inquiry">Inquiry</label>
                                </Flex>
                                <textarea
                                    id="inquiry"
                                    name="inquiry"
                                    placeholder="Enter your inquiry"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <Flex className={styles.prehome}>
                                <button type="submit">
                                submit
                                </button>
                            </Flex>
                        </form>
                    </Flex >
                </div>

                



            </div>
    )
}

export default Contactform;
/*

const Home: React.FC = () => {
    const [name, setFormname] = useState("");
    const [email, setFormemail] = useState("");
    const [inquiry, setinquiry] = useState("");

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try{
            //Save the formdata to the database via Prisma
            await prisma.contact.create({
                data:{
                    name,
                    email,
                    inquiry,
                },
            });

            console.log('Data seved successfully.');
        } catch(error){
            console.error('Error saving data:',error);
        }
    }
};

return(
    <div>
        <form onSubmit={submitData}>
            <h1>contact</h1>
            <input
                onChange={(e) => setFormname(e.target.value)}
                placeholder= "name"
                type="text"
                value={name}
            />
            <input 
                onChange={(e) => setFormemail(e.target.value)}
                placeholder="email"
                type="email"
                value={email}
            />
            <textarea
                onChange={(e) -> setInquiry(e.target.value)}
                placeholder="inquiry"
                value={inquiry}
            />
            <input disabled={!FormInquriy || !email || !name} type="submit" value="Create" />
        </form>
    </div>
);

export default Home;
*/