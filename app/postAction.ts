"use server";

export async function postAction(formData: FormData) {
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