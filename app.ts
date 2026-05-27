import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

// 背景文字のスクロール連動
window.addEventListener('scroll', () => {
    const bgText = document.querySelector('.background-text') as HTMLElement;
    if (bgText) bgText.style.transform = `translateX(-50%) translateY(-${window.scrollY * 0.2}px)`;
});

const form = document.getElementById("application-form") as HTMLFormElement;
form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = {
        name: (document.getElementById("user-name") as HTMLInputElement).value,
        email: (document.getElementById("user-email") as HTMLInputElement).value,
        purpose: (document.getElementById("user-purpose") as HTMLSelectElement).value,
        message: (document.getElementById("user-message") as HTMLTextAreaElement).value
    };

    try {
        // 1. Firebaseに保存
        await addDoc(collection(db, "applications"), { ...formData, createdAt: serverTimestamp() });
        
        // 2. Discord通知
        if (webhookUrl) {
            const discordMessage = {
                content: `**SPAC新入生通知Botアプリ**\n` +
                         `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                         `**お名前:** ${formData.name}\n` +
                         `**メール:** ${formData.email}\n` +
                         `**ご用件:** ${formData.purpose}\n` +
                         `**メッセージ:** ${formData.message}\n\n` +
                         `━━━━━━━━━━━━━━━━━━━━━━━━`
            };

            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(discordMessage)
            });
        }
        
        alert("送信完了しました！");
        form.reset();
        
    } catch (e) {
        console.error(e); // コンソールにエラー内容を出力
        alert("送信エラーが発生しました。");
    }
});