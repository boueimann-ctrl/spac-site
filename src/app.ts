import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// --- 1. Firebaseの設定 (元々あったあなたの設定に自動で反映されます) ---
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

// --- 2. Discordの環境変数URLを取得 ---
const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

// --- 3. app.ts から呼ばれる「データ送信＆Discord通知」の関数 ---
export async function submitApplication(formData: any) {
  try {
    // ① まずはFirebaseにデータを保存
    const docRef = await addDoc(collection(db, "applications"), {
      ...formData,
      createdAt: serverTimestamp()
    });
    console.log("Firebaseへの保存に成功しました！ ID:", docRef.id);

    // ② 保存が成功したら、続けてDiscordに通知を飛ばす
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `🔔 **WEBサイトから新着のお申し込みがありました！サークル管理画面を確認してください！！**`
        }),
      });
      console.log("Discord通知の送信に成功しました！");
    }

    return docRef.id;

  } catch (error) {
    console.error("エラーが発生しました:", error);
    throw error;
  }
}