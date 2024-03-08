
import React, { ReducerAction, use, useState } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';

import styles from './page.module.css'
import { Flex } from "@chakra-ui/react";


export default function Contactform() {
    "use server"
        const [formData, setFormData] = useState({
            
            name: '',
            email: '',
            inquiry: '',
            
        })
    

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        };

        const handleSubmit = async (e: React.SyntheticEvent) => {
            e.preventDefault();

            try {
            // フォームデータをサーバーに送信
            const response = await fetch('/api/post/[contact]/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                
                },
                body: JSON.stringify(formData),
            });
        
            if (response.ok) {
                console.log('Data saved successfully!');
                // 他の処理を実行（リダイレクトなど）
            } else {
                console.error('Error saving data.');
            }
            } catch (error) {
            console.error('Error saving data:', error);
            }
        };
        
        return (
                <div>
                    
                    <div>
                        <Flex className={styles.prehome}>
                            <h1>Contact Form</h1>
                        </Flex>
                        
                        <Flex className={styles.home}>
                            <form onSubmit={handleSubmit} action='/api/post/[contact]/' method='post'  className={styles.form}>
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
                                        onChange={onChangeHandler}
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
                                        onChange={onChangeHandler}
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
                                        onChange={onChangeHandler}
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