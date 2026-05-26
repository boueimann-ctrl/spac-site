import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO3jCuHTpP8rpuAjqydQxB0_k8Gd2AX0E",
  authDomain: "spac-site.firebaseapp.com",
  projectId: "spac-site",
  storageBucket: "spac-site.firebasestorage.app",
  messagingSenderId: "785803958504",
  appId: "1:785803958504:web:94535d0140baddec49915d",
  measurementId: "G-WNSQQQRRRB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function submitApplication(name: string, email: string, twitter: string, message: string) {
  try {
    const docRef = await addDoc(collection(db, "applications"), {
      name, email, twitter, message,
      createdAt: serverTimestamp()
    });
    console.log("送信成功！:", docRef.id);
    return true;
  } catch (error) {
    console.error("送信エラー:", error);
    return false;
  }
}
// 既存のFirebaseにデータを保存するコードがこの上にある想定です
// 例: await addDoc(collection(db, "applications"), { ... });

// 👇 ここからDiscord通知のコードを追加！
// ⭕ エラーが消えるコード
const discordUrl = (import.meta as any).env.VITE_DISCORD_WEBHOOK_URL;

if (discordUrl) {
  fetch(discordUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    body: JSON.stringify({
  content: `🔔 **WEBサイトから新着のお申し込みがありました！サークル管理画面を確認してください！**`
}),
      // ↑ ※ ${name} や ${email} は、あなたがフォームから取得している変数名に合わせて書き換えてください！
    }),
  });
}