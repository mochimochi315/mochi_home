'use strict';
let level_data2 = {};

let query_data5 = GetQueryString(level_data2);

let gakunen_data_atai2 = query_data5.gakunen;

let kyouka_data_atai2 = query_data5.kyouka;

let tangen_data_atai2 = query_data5.tangen;

let query_data8;


// セッションストレージから過去の入力を取得
let previousInput = sessionStorage.getItem('result_user');

//ダイアログボックスで、ユーザー名を入力させる。
//登録されていないユーザー名の場合には、「ゲスト」と入力する。
//|| は論理 OR 演算子と呼ばれ、次のような動作をします。
//左側の値が「truthy」（有効な値：空でない文字列、数値、オブジェクトなど）なら、左側の値を返します。
//左側の値が「falsy」（無効な値：null、undefined、false、0、NaN、空の文字列 "" など）なら、右側の値を返します。
var result_user = prompt("ユーザー名を入力してください", previousInput || "");

// キャンセルしなければ新しい入力をセッションストレージに保存
if (result_user !== null) {
    sessionStorage.setItem('result_user', result_user);
    //alert(`入力が保存されました: ${result_user}`);
}


//ユーザー名が空欄の場合には、「ゲスト」にする。
//空欄でない場合には、登録されているユーザーかどうかを調べ、
//登録されていない場合には、「ゲスト」にする。
if (result_user === null) {
    result_user = "ゲスト";
} else {

    // findメソッドを使って、指定した値を見つける
    const foundValue = user_mei.find(value => value === result_user);

    // 結果を表示する
    if (foundValue !== undefined) {
        console.log('値が見つかりました:', foundValue);
    } else {
        result_user = "ゲスト";
    }
}

//ユーザー名は、全角文字列なので、エンコードする。
const user_mei2 = encodeURIComponent(result_user);
console.log(user_mei2);

//テンプレート文字列で、変数を入力している。バックティックで囲んでいる。
let query_data7 = `kyouka=${kyouka_data_atai2}` + "&" + `gakunen=${gakunen_data_atai2}`;

//教科名が、「その他」の場合には、ファイル名には、学年をつけないようにした。
if (kyouka_data_atai2 === "sonota") {

    query_data8 = `${kyouka_data_atai2}.js`

} else {

    query_data8 = `${gakunen_data_atai2}_` + `${kyouka_data_atai2}.js`

}

//window.alert(query_data8);

function GetQueryString(result) {
    if (1 < window.location.search.length) {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        let query = window.location.search.substring(1);

        // クエリの区切り記号 (&) で文字列を配列に分割する
        let parameters = query.split('&');

        for (var i = 0; i < parameters.length; i++) {
            // パラメータ名とパラメータ値に分割する
            let element = parameters[i].split('=');

            // エンコードされたパラメータ名とパラメータ値をデコードする
            //URLのクエリ文字列がtestのような半角英数文字ならエンコードはされず、そのまま取得できる。
            //よって、以下のデコード処理も不要。
            let paramName = decodeURIComponent(element[0]);
            let paramValue = decodeURIComponent(element[1]);

            // パラメータ名をキーとして連想配列に追加する
            result[paramName] = paramValue;

            console.log(result);
        }
    }
    return result;
}

// カスタム関数showAttributeを定義
function showAttribute(element) {

    //window.alert("fname_ichibu2=" + fname_ichibu2)

    //以下のコードは、ここでは、エラーになる。なぜならば、「level.js」ファイルが、
    //「5_shakai.js」ファイルよりも先に読み込まれるためだと思われる。
    //ここに記述するためには、コールバックを記述しなくてはならないのかもしれない。
    //以下のコードは、VBAを使って、「5_shakai.js」ファイル内に記述させるようにした。
    //let fname_ichibu2 = tangen_mei.find(item => item.number == tangen_data_atai2).fname_ichibu;

    //「shutsudai.html」から、「level.html」に戻る時に、tangen2データが必要になるため、
    //以下のように記述した。
    let query_data6 = `tangen=${fname_ichibu2}` + "&" + `kyouka=${kyouka_data_atai2}` +
        "&" + `gakunen=${gakunen_data_atai2}` + "&" + `tangen2=${tangen_data_atai2}` + "&" + `user_mei=${user_mei2}`;


    // href属性を取得
    const hrefValue3 = element.getAttribute('href');

    // 属性値をアラートで表示
    //alert('取得したhref属性の値: ' + hrefValue);

    let to_level_url3;

    //以下のコードで、「次のページに進んだときのクエリ」と「前のページに戻った時のクエリ」を設定している。
    if (hrefValue3 === "#") {
        to_level_url3 = ('tangen.html?' + query_data7);
    } else {
        to_level_url3 = (hrefValue3 + '&' + query_data6);
    }

    // リンク先を動的に設定
    window.location.href = to_level_url3;
}

//以下のコードは、前のページに戻る時に使用していたが、今は使用していない。参考として残してある。
/*---------------------------------------------------------------------------------------------
function modoru() {
    let level_data3 = {};

    let query_data6 = GetQueryString(level_data3);

    let gakunen_data_atai3 = query_data6.gakunen;

    let kyouka_data_atai3 = query_data6.kyouka;

    //テンプレート文字列で、変数を入力している。バックティックで囲んでいる。
    let query_data7 = `kyouka=${kyouka_data_atai3}` + "&" + `gakunen=${gakunen_data_atai3}`;

    let to_level_url4 = ('tangen.html?' + query_data7);
    window.alert(to_level_url4);
    // リンク先を動的に設定
    window.location.href = to_level_url4;
}
------------------------------------------------------------------------------------------------*/

//オブジェクト配列（例…5_shakai.js）ファイルは、tangen.htmlファイルの読み込みの時に、
//単元名（例…水産業のさかんな地域）を取得するために読み込んでいる。
//ここ（level.js）では、要素の「fname_ichibu」を取得するために、
//オブジェクト配列（例…5_shakai.js）ファイルをもう一度読み込んでいる。
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.appendChild(script);
    });
}

//「tangen.js」ファイル内でも実行された「loadScript」文が、ここでも再度、実行されることによって、
//<script src="5_shakai.js"><script>タグが動的に生成される。
//動的に生成されると、要素の「fname_ichibu」が取得できるようになる。
//その後リンクをクリックして、「Shutsudai.js」ファイルに遷移すると、
//「5_shakai_1_1.js」ファイルではなく、「5_shakai_suisangyou_1.js」ファイルが呼び出されるようになる。
//ここでは、<script src="5_shakai.js"><script>タグが動的に生成された後に、「.then」文が実行され、
//変数「query_data9」には、「5_shakai_suisangyou」がセットされるように設定した。
//ここから先は、この変数「query_data9」を使って、「レベル１」から「レベル１７」までのダグのうち、不要なタグを削除していく。
let query_data9;
let query_data10;
let level_number = 1;
let basePath;

//「5_shakai.js」ファイルを読み込む。
//「.then」は、「5_shakai.js」ファイルの読み込みが完了してから行われる。
//「.then」では、「5_shakai.js」ファイル内の中から、「fname_ichibu2」変数の値を読み込んでいる。
document.addEventListener("DOMContentLoaded", () => {
    loadScript('script/data/' + query_data8)
        .then(() => {
            query_data9 = `${gakunen_data_atai2}_${kyouka_data_atai2}_${fname_ichibu2}_`;
            //console.log("query_data9=" + query_data9);
            query_data10 = `${kyouka_data_atai2}_${fname_ichibu2}_`;
            //console.log("query_data10=" + query_data10);
        })
        .then(async () => {

            for (let i = 0; i < 17; i++) {
                // 繰り返し処理をここに記述
                console.log(`ループ回数: ${i + 1}`);

                const links = document.querySelectorAll('.home-course');

                //sonotaのファイルの場合には、ファイル名の先頭には、学年はつかない。
                //そのために、ここで分岐を行っている。
                if (kyouka_data_atai2 === "sonota") {
                    basePath = 'script/data/' + kyouka_data_atai2 + '/' + query_data10 + level_number + ".js";
                } else {
                    basePath = 'script/data/' + gakunen_data_atai2 + 'nen/' + kyouka_data_atai2 + '/' + query_data9 + level_number + ".js";
                }

                //console.log("basePath=" + basePath);

                async function checkScriptExistence(src) {
                    try {
                        const response = await fetch(src, { method: 'HEAD' });
                        return response.ok;
                    } catch (error) {
                        return false;
                    }
                }

                //scriptPathを定義せずに、basePathのままでも良いと思う。一応このままにしてある。
                const scriptPath = `${basePath}`;
                //console.log("scriptPath=" + scriptPath);

                const exists = await checkScriptExistence(scriptPath);
                if (!exists) {
                    // href 属性が "shutsudai.html?level=5" の <a> タグを特定
                    const specificLink = document.querySelector(`a[href="shutsudai.html?level=${level_number}"]`);

                    // 該当のリンクを非表示にする
                    //specificLink.style.display = 'none';
                    //console.log(`レベル${level_number} タグを非表示にしました: `, specificLink);

                    // 該当のリンクを削除する
                    //specificLink.remove();
                    //console.log(`レベル${level_number} タグを削除しました: `, specificLink);


                    // 該当のリンクの親要素 (li) を削除する
                    specificLink.parentElement.remove();
                    console.log(`レベル${level_number} の親要素 li タグを削除しました: `, specificLink);

                } else {
                    console.log(`${query_data9}${level_number}.jsファイルが存在します。`);
                }

                level_number = level_number + 1;

            }

        })
        .catch(error => {
            console.error(error);
        });
});
