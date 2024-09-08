'use strict';
let level_data2 = {};

let query_data5 = GetQueryString(level_data2);

let gakunen_data_atai2 = query_data5.gakunen;

let kyouka_data_atai2 = query_data5.kyouka;

let tangen_data_atai2 = query_data5.tangen;



//テンプレート文字列で、変数を入力している。バックティックで囲んでいる。
let query_data7 = `kyouka=${kyouka_data_atai2}` + "&" + `gakunen=${gakunen_data_atai2}`;

let query_data8 = `${gakunen_data_atai2}_` + `${kyouka_data_atai2}.js`

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
        "&" + `gakunen=${gakunen_data_atai2}` + "&" + `tangen2=${tangen_data_atai2}`;


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


// 使用例
loadScript('script/data/' + query_data8)
    .then(() => {
        console.log(window.mondai); // mondai.js内の配列にアクセス
    })
    .catch(error => {
        console.error(error);
    });





