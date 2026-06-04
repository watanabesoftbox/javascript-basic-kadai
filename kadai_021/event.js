const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    // 2秒後（2000ミリ秒後）に実行するタイマー処理
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});