const tangen_mei = [
    { number: 1, tangen_mei: '九九プラス',fname_ichibu:'kukuplus'},
    { number: 2, tangen_mei: 'ローマ字',fname_ichibu:'roumaji'},
    { number: 3, tangen_mei: 'たし算ひき算1',fname_ichibu:'1+-1'},
    { number: 4, tangen_mei: 'わり算1',fname_ichibu:'2waru1'},
    { number: 5, tangen_mei: '3桁のたし算',fname_ichibu:'3tasizan'},
    { number: 6, tangen_mei: '3桁のひき算',fname_ichibu:'3hikizan'},
    { number: 7, tangen_mei: '2桁のかけ算',fname_ichibu:'2kakezan'},
    { number: 8, tangen_mei: 'わり算2',fname_ichibu:'2waruwaru1'},
    { number: 9, tangen_mei: 'わり算3',fname_ichibu:'3waru1'}
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
//以下の変数「tangen_data_atai2」は、ここでは、宣言されていないので、Chromeブラウザのコンソールでは、
//「未定義エラー」として表示される。
//だが、後から読み込まれる「shutsudai.js」ファイル上で、変数の宣言を行っているため、正常に動作する。
//逆に、「shutsudai.js」ファイルを先に読み込ませて、このファイルを後から読み込ませると、
//エラーとなって、Webページが正しく表示されない。そのため、未定義エラーは、このままで良い。
//コールバックで記述すれば、「未定義エラー」は、表示されなくなると思う。
let fname_ichibu2 = tangen_mei.find(item => item.number == tangen_data_atai2).fname_ichibu;