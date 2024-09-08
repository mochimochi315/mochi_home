'use strict';
let level_data = {};

let query_data3 = GetQueryString(level_data);

let kyouka_data_atai = query_data3.kyouka;

let gakunen_data_atai = query_data3.gakunen;

//テンプレート文字列で、変数を入力している。バックティックで囲んでいる。
let query_data4 = `kyouka=${kyouka_data_atai}` + "&" + `gakunen=${gakunen_data_atai}`;

let query_data5 = `gakunen=${gakunen_data_atai}`;

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

let tangen_number;

// カスタム関数showAttributeを定義
function showAttribute(element) {

    const hrefValue2 = element.getAttribute('href');

    let parts = hrefValue2.split("tangen="); // "tangen="で文字列を分割

    tangen_number = parts[1]; // 右側の文字列を取り出す

    //以下のコードは、うまくいかなかったが、参考のために残してある。
    //うまくいかない原因は、「5_shakai.js」ファイルが、「tangen.js」ファイルの後に
    //読み込まれているためだと思われる。
    //mondai_hanteiオプジェクトの中を探して、hanteiの内容（okかnoか）を変数result4に入れている。
    //let fname_ichibu2 = tangen_mei.find(item => item.number === tangen_number).fname_ichibu;

    let to_level_url2;

    //以下のコードで、「次のページに進んだときのクエリ」と「前のページに戻った時のクエリ」を設定している。
    if (hrefValue2 === '#') {
        to_level_url2 = ('kyouka.html?' + query_data5);
    } else {
        //以下のコードは、うまくいかなかったが、参考のために残してある。
        //to_level_url2 = ('level.html?tangen=' + fname_ichibu2 + '&' + query_data4);
        to_level_url2 = ('level.html?tangen=' + tangen_number + '&' + query_data4);
    }

    // リンク先を動的に設定
    window.location.href = to_level_url2;

}

