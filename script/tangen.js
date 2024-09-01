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


// カスタム関数showAttributeを定義
function showAttribute(element) {


    // href属性を取得
    const hrefValue2 = element.getAttribute('href');

    // 属性値をアラートで表示
    //alert('取得したhref属性の値: ' + hrefValue);

    let to_level_url2;

    //以下のコードで、「次のページに進んだときのクエリ」と「前のページに戻った時のクエリ」を設定している。
    if (hrefValue2 === '#') {
        to_level_url2 = ('kyouka.html?' + query_data5);
    } else {
        to_level_url2 = (hrefValue2 + '&' + query_data4);
    }

    // リンク先を動的に設定
    window.location.href = to_level_url2;
}








