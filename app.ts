import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// --- 1. Firebaseの設定 ---
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

// --- 3. 画面表示＆送信イベント処理 ---
const init = () => {
  const siteTitle = document.getElementById("site-title");
  if (siteTitle) {
    siteTitle.textContent = "SPAC"; // ついに「読み込み中...」を消し去ります！
  }

  const form = document.getElementById("application-form") as HTMLFormElement | null;
  if (form) {
    form.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const nameInput = document.getElementById("user-name") as HTMLInputElement | null;
      const emailInput = document.getElementById("user-email") as HTMLInputElement | null;
      const purposeInput = document.getElementById("user-purpose") as HTMLSelectElement | null;
      const messageInput = document.getElementById("user-message") as HTMLTextAreaElement | null;

      if (!nameInput || !emailInput || !purposeInput || !messageInput) {
        return;
      }

      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        purpose: purposeInput.value,
        message: messageInput.value
      };

      try {
        // ① Firebaseにデータを保存
        const docRef = await addDoc(collection(db, "applications"), {
          ...formData,
          createdAt: serverTimestamp()
        });
        console.log("Firebase保存成功:", docRef.id);

        // ② Discordに通知
        if (webhookUrl) {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              content: `🔔 **WEBサイトから新着のお申し込みがありました！**\n━━━━━━━━━━━━━━━━━━━━━━━━\n👤 **お名前**: ${formData.name}\n📧 **メール**: ${formData.email}\n📌 **ご用件**: ${formData.purpose}\n💬 **メッセージ**: ${formData.message}\n━━━━━━━━━━━━━━━━━━━━━━━━`
            }),
          });
          console.log('Discord通知成功');
        }

        alert("お申し込みが完了しました！");
        form.reset();

      } catch (error) { 
        console.error("エラーが発生しました:", error);
        alert("送信に失敗しました。");
      }
    });
  }
};

// 画面の読み込み状態に合わせて安全に起動する仕掛け
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}