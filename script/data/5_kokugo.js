const tangen_mei = [
    { number: 1, tangen_mei: '大造じいさんとがん',fname_ichibu:'daizou'}
];

//単元名をオブジェクト配列にしたため、以下のコードに変更になった。
tangen_mei.forEach(item => {
// 対応するHTML要素を取得
const element = document.getElementById('tangen_mei_' + item.number);
if (element) {
// 要素が存在する場合、その内容を更新
element.textContent = item.tangen_mei;
}
});

//以下の行でうまくいかなかった原因は、「item.number === tangen_data_atai2」としていたため。
//数値と文字列を比較していたため、うまくいかなかった。
//「item.number == tangen_data_atai2」としたら解決した。
let fname_ichibu2 = tangen_mei.find(item => item.number == tangen_data_atai2).fname_ichibu;