"use client"
import React, { useState } from 'react';
import styles from './page.module.css'
import { Flex } from "@chakra-ui/react";

const Contactform: React.FC = () => {
    const [formData, setFormData] = useState({
        
        name: '',
        email: '',
        inquiry: '',
        
      })
 

      const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const onhandleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
          // フォームデータをサーバーに送信
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',},
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
                        <form onSubmit={onhandleSubmit}  method='POST' action="/api/contact" className={styles.form}>
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

export default Contactform;