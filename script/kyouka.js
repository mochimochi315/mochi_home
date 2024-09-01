'use strict';
let gakunen_data = {};

//配列gakunen_datを空にした状態で、関数GetQueryStringを実行し、その戻り値を配列gakunen_dataに代入する。
gakunen_data = GetQueryString(gakunen_data);

//配列gakunen_dataの中から、gakunenプロパティの値を変数gakunen_data_ataiに代入する。
let gakunen_data_atai = gakunen_data.gakunen;

//テンプレート文字列で、変数を入力している。バックティックで囲んでいる。
//URLに乗せるために、以下のコードを記述している。
let gakunen_data2 = `gakunen=${gakunen_data_atai}`;

//関数GetQueryStringの定義
//以下のコードは、URLから、「?」より後ろの文字列を取得して、連想配列として格納する処理。
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
            //よって、以下のデコード処理は、現在は不要だが、参考のために残してある。
            let paramName = decodeURIComponent(element[0]);
            let paramValue = decodeURIComponent(element[1]);

            // パラメータ名をキーとして連想配列に追加する
            result[paramName] = paramValue;
        }
    }
    return result;
}


// カスタム関数showAttributeを定義
function showAttribute(element) {
    // href属性を取得
    //前のページからは、「showAttribute(this)」で送られてきているので、「const hrefValue = element.getAttribute('href');」は、
    //「const hrefValue = this.getAttribute('href');」のことを指している。thisとは、クリックした時の要素（ダグ）のことを示している。
    const hrefValue = element.getAttribute('href');

    // 属性値をアラートで表示
    //alert('取得したhref属性の値: ' + hrefValue);

    let to_tangen_url = (hrefValue + '&' + gakunen_data2);

    // リンク先を動的に設定
    //「kyouka.html」ファイルには、「onclick="showAttribute(this);event.preventDefault();"」と記述してある。
    //「event.preventDefault();」が記述してあるため、リンク先に勝手に飛ばずに、以下のコードが設定したURLに飛ぶことができるようになっている。
    //「event.preventDefault();」が記述してないと、以下のコードは実行されずに、勝手にリンク先に飛んで行ってしまう。
    window.location.href = to_tangen_url;
}








