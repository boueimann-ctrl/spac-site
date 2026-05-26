import { submitApplication } from "./firebase.js";

// ─── 1. タイトルや初期データのシミュレーション ───
// ※ もしすでに他のファイルやAPIから取得している場合は、適宜調整してください
const initSiteData = () => {
  const siteTitle = document.getElementById("site-title");
  if (siteTitle) {
    siteTitle.innerText = "SPAC";
  }

  // Next Activity（イベント）の動的生成
  const eventContainer = document.getElementById("event-container");
  if (eventContainer) {
    eventContainer.innerHTML = `
      <div class="event-card" style="border: 1px solid var(--accent, #ff4a4a); padding: 24px; border-radius: 8px; background: rgba(255,255,255,0.02);">
        <span class="event-date" style="font-weight: bold; color: var(--accent, #ff4a4a); display: block; margin-bottom: 8px;">NEXT: 2026.06.14 (SUN)</span>
        <h3 style="margin: 0 0 12px 0; font-size: 1.5rem;">新歓サバゲー体験会 @千葉インドアフィールド</h3>
        <p style="margin: 0 0 16px 0; color: #aaa; font-size: 0.95rem;">大学から直行バスあり！初心者向けのレクチャーと、手ぶらで遊べるフルレンタル付きの体験会です。</p>
        <a href="#join-form" class="btn-modern" style="display: inline-block; padding: 8px 16px; font-size: 0.85rem;">このイベントに参加申請する</a>
      </div>
    `;
  }
};

// ─── 2. スクロールアニメーションの制御 ───
const initScrollAnimation = () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible"); // CSS側でアニメーションをトリガーするクラス
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
};

// ─── 3. Firebase フォーム送信イベント ───
const initFormSubmission = () => {
  const joinForm = document.getElementById("join-form") as HTMLFormElement | null;

  if (joinForm) {
    joinForm.addEventListener("submit", async (e: Event) => {
      e.preventDefault(); // 画面リロードをブロック

      // 各入力要素を取得
      const nameInput = document.getElementById("user-name") as HTMLInputElement;
      const emailInput = document.getElementById("user-email") as HTMLInputElement;
      const typeSelect = document.getElementById("join-type") as HTMLSelectElement;
      const messageInput = document.getElementById("user-message") as HTMLInputElement;
      const submitBtn = joinForm.querySelector(".btn-submit") as HTMLButtonElement;

      // ボタンを一時的に無効化（連打・二重送信対策）
      if (submitBtn) {
        submitBtn.disabled = true;
        const btnText = submitBtn.querySelector("span");
        if (btnText) btnText.innerText = "送信中...";
      }

      // `src/firebase.ts` からインポートした関数を叩いてデータをFirestoreへ転送
      const success = await submitApplication(
        nameInput.value,
        emailInput.value,
        typeSelect.value,
        messageInput.value
      );

      // 送信結果のフィードバック
      if (success) {
        alert("サークルへの加入申請（お問い合わせ）が完了しました！\n確認メールまたはSNSより追ってご連絡いたします。");
        joinForm.reset(); // 入力欄をクリア
      } else {
        alert("通信エラーが発生しました。時間をおいて再度お試しください。");
      }

      // ボタンの状態を復元
      if (submitBtn) {
        submitBtn.disabled = false;
        const btnText = submitBtn.querySelector("span");
        if (btnText) btnText.innerText = "送信する";
      }
    });
  }
};

// ─── 4. 画面読み込み完了時にすべてを起動 ───
document.addEventListener("DOMContentLoaded", () => {
  initSiteData();
  initScrollAnimation();
  initFormSubmission();
});