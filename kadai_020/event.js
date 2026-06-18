const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされた時のイベント処理を追加する
buttonElement.addEventListener('click', () => {
    // h2要素のテキストを書き換える
    textElement.textContent = 'ボタンをクリックしました';
});