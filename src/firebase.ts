// 1. 環境変数を「webhookUrl」という名前で読み込む
const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

// 2. 上で決めた名前（webhookUrl）を使って、中身があるかチェックする
if (webhookUrl) {
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // 3. 重なっていた部分をスッキリ1つに修正
    body: JSON.stringify({
      content: `🔔 **WEBサイトから新着のお申し込みがありました！サークル管理画面を確認してください！！**`
    }),
  })
  .then(() => console.log('Discord通知の送信に成功しました！'))
  .catch((error) => console.error('Discord通知の送信に失敗しました:', error));
}