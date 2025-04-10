'use strict';

let kaitou = 0;
let seikaisuu = 0;
let machigaetakazu = 0;
let img_question_kazu = img_question.length;
let img_seikai_kazu = img_seikai.length;
let msg_seikai_kazu = msg_seikai.length;
let img_zannen_kazu = img_zannen.length;
let msg_zannen_kazu = msg_zannen.length;
let gazou_no_kirikae_fuka = 0;
let msg_id3;
let result4;
let attack;


//合格ボタンを非表示にしておく。
document.getElementById('sendBtn').style.display = 'none';

//正解するごとに、オブジェクトmondai_hantei内のhanteiが、「"ok"」に変わっていく。
//この配列の中に「ok」がある問題は、出題されないようにしている。
//出題数は、レベル1つにつき、最高20題まで。21題以上出題したい場合には、以下のコードの修正が必要。
//または、「mondai_hantei」をjsファイルにして、100題までOKにして、jsファイルを読み込む形にすると良い。
/*let mondai_hantei = [
    { number: 1, hantei: "no" },
    { number: 2, hantei: "no" },
    { number: 3, hantei: "no" },
    { number: 4, hantei: "no" },
    { number: 5, hantei: "no" },
    { number: 6, hantei: "no" },
    { number: 7, hantei: "no" },
    { number: 8, hantei: "no" },
    { number: 9, hantei: "no" },
    { number: 10, hantei: "no" },
    { number: 11, hantei: "no" },
    { number: 12, hantei: "no" },
    { number: 13, hantei: "no" },
    { number: 14, hantei: "no" },
    { number: 15, hantei: "no" },
    { number: 16, hantei: "no" },
    { number: 17, hantei: "no" },
    { number: 18, hantei: "no" },
    { number: 19, hantei: "no" },
    { number: 20, hantei: "no" }
];*/

//console.log(mondai_hantei);

// 以下は、コールバック関数の書式。'5_shakai_1_1.js'を読み込んで、完了後にrenderChartを実行
//「loadScript」関数は、「'script/data/' + query_data8 + '?v=' + new Date().getTime()」を引数として渡し、
//作業完了後に、「renderChar」関数を実行させる。「renderChar」は、「２つめの引数」なのか「関数」なのかは文字だけでは判別できないが、
//このページ内に、「renderChart」が関数として定義されているので、関数として扱われる。
//「'?v=' + new Date().getTime()」は、jsファイルを毎回強制的に読み込ませるために、現在時間をクエリとして、ファイルの後ろにくっつけている。
//以下のquery_data8は、このファイル内では、変数を定義していないので、query_data8のコメントには、「query_data8が見つかりませんでした。」と
//書かれている。だが、query_data8は、shutsudai.htmlファイル内の<script>タグで変数が定義され、値が入れられている。
//そのため、正常に実行されている。
//sonotaの場合は、学年フォルダがないので、ここで分岐させている。
//query_data8の内容については、「shutsudai.html」ファイルのscriptで、sonotaの場合と、そうでない場合について
//分岐させている。つまり、内容を変えている。なので、下のコードでは、両方ともquery_data8のままで良い。
if (kyouka_data_atai3 === 'sonota') {
    loadScript('script/data/' + kyouka_data_atai3 + '/' + query_data8 + '?v=' + new Date().getTime(), renderChart);


} else {
    loadScript('script/data/' + gakunen_data_atai3 + 'nen/' + kyouka_data_atai3 + '/' + query_data8 + '?v=' + new Date().getTime(), renderChart);
}

// JavaScriptファイルを動的に読み込む関数（コールバック関数）
//2つめの引数にかかれた「callback」は単なる引数ですが、通常「コールバック関数」として渡されるものです。
//つまり、callbackは関数そのものであり、loadScript関数の内部でスクリプトの読み込みが完了した後に呼び出される関数です。
function loadScript(url, callback) {
    //「script」タグを作成する。ただし、タグのみしか作成されない。例…<script></script>
    //この時点でタグは、作成されるが、Webページのどの場所に書き込むかが指示されていないので、
    //Webページ上には、「script」タグは、まだ追加されない。この後、appendChildを実行することで、
    //scriptタグがWebページ上に、動的に追加される。
    const script = document.createElement('script');
    //作成されたscriptタグに、src属性を追加する。
    script.src = url;

    // スクリプトが正常に読み込まれたときにコールバックを実行
    script.onload = function () {
        console.log(`${url} が正常に読み込まれました。`);
        callback(); // ここは、「callback」ではなく、「callback()」と書かれているので、この場所でコールバック関数を実行する。
    };

    // スクリプト読み込みでエラーが発生した場合の処理
    script.onerror = function () {
        console.error(`${url} の読み込みに失敗しました。`);
    };

    //作成されたscriptタグを動的にWebページ上に追加する。
    //ここでは、ヘッダーに追加されている。
    document.head.appendChild(script); // スクリプトをドキュメントに追加
}

// コールバック関数の例: answerQuiz2()を実行する。
function renderChart() {

    //以下のコードで、関数answerQuiz2() に飛ぶ。
    answerQuiz2();

}


//以下のコードは、function modoru()内に使用するが、query_data5.level;のコードだけ、
//他の場所で使用したかったため、function modoru()の外に出してある。
let level_data2 = {};

let query_data5 = GetQueryString(level_data2);

let gakunen_data_atai2 = query_data5.gakunen;

let kyouka_data_atai2 = query_data5.kyouka;

let tangen_data_atai2 = query_data5.tangen;

let tangen2_data_atai2 = query_data5.tangen2;

let user_mei3 = query_data5.user_mei

//エンコードされている名前をデコードする。
let deco_user_mei3 = decodeURIComponent(user_mei3);

let nickname;

//名前が「ゲスト」の場合には、「ゲストさん」、それ以外の名前の場合には、「ユーザーさん」にする。
if (deco_user_mei3 === "ゲスト") {

    nickname = deco_user_mei3;

} else {

    nickname = "ユーザー";

}

//ユーザー名を問題画像の上に表示させる。
document.getElementById('output6').textContent = nickname + 'さん';

//以下のコードは、「レベル○を全問正解しました。」の表示の時に使用している。
let level_data_atai2 = query_data5.level;

//Googleスプレッドシートの列名を指定する。
let tangen_level = tangen_data_atai2 + "_" + level_data_atai2;  //suisangyou_2

//以下のfunction modoru() は、「shutstdai.html」から、「level.html」に戻るためのコード。
//このコードは、正しく動作するが、コードを「level.js」ファイルにコピーして、
//「level.html」ページから、「kyouka.html」ページに戻る時には、正しく動作しなかった。
//正確に言えば、「let to_level_url3 = ('level.html?' + query_data6);」までは、正しく動作して、最後に、
//リンク先に飛ばなかった。「level.html」ページに、「event.preventDefault();」を記述すれば、
//正しく動作するかもしれない（未検証）。
function modoru() {

    //テンプレート文字列で、変数を入力している。バックティックで囲んでいる。
    let query_data6 = `tangen=${tangen2_data_atai2}` + "&" + `kyouka=${kyouka_data_atai2}` + "&" + `gakunen=${gakunen_data_atai2}`;

    let to_level_url3 = ('level.html?' + query_data6);

    // リンク先を動的に設定
    window.location.href = to_level_url3;
}


//以下の関数GetQueryStringの定義は、shutsudai.htmlファイルのscriptタグ内に記述されているので、
//ここでは、コメントにした。ここをコメントにしても正しく動作する。
/*function GetQueryString(result) {
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
}*/



function answerQuiz2() {

    // answer2が空欄でない場合、不正解だった場合には、解答が表示され、さらに、自動的に別の問題に切り替わるので、
    //「次の問題へ」ボタンを無効化してある。そのため、正解した場合には、以下のコードで有効に戻している。
    document.getElementById('nextBtn').disabled = false;

    //問題数を調べる
    const mondai_suu = mondai.length;

    //問題の出題画面の初期化
    document.getElementById('output').textContent = '';
    document.getElementById('output4').textContent = '';
    document.getElementById('output5').textContent = '';
    document.getElementById('form').kaitouran.value = "";

    //問題文をランダムに出す。最初は、「attack = Math.floor(Math.random() * 10) + 1;」と記述して
    //問題部を10問限定にしたが、今は、「attack = Math.floor(Math.random() * mondai_suu) + 1;」に変更している。
    attack = Math.floor(Math.random() * mondai_suu) + 1;

    //以下は、フラグの役割として入れてある。9問正解し、10問目が出題された時に、
    //「次の問題へ」ボタンを押すと、出題画像が次々と切り替わってしまう。
    //児童が遊びで押し続けて、すべての画像をチェックすることができてしまうため、以下のフラグを設定し、
    //「gazou_no_kirikae_fuka === 0」の時だけ、「次の問題へ」ボタンを押した時に、画像が切り替わるようにした。
    if (gazou_no_kirikae_fuka === 0) {
        //questionの画像をランダムに出す。
        //通常は、「msg_id3 = Math.floor(Math.random() * img_question_kazu) + 1;」のように、
        //最後に、「+1」を加えて、1問から10問までの問題を出題するようにしている。
        //だが、ここでは、配列から選択しているため、[0]から[9]までを選択しなくてはならない。
        //よって、以下の式は、「msg_id3 = Math.floor(Math.random() * img_question_kazu);」に変更した。
        msg_id3 = Math.floor(Math.random() * img_question_kazu);
    }

    // .mondai_imgクラスの子要素のimgタグ（img要素）を取得
    const imgElement = document.querySelector('.mondai_img img');

    // src 属性のイメージファイルをランダムな画像に変更する。
    imgElement.src = img_question[msg_id3];

    //window.alert("msg_id3=" + msg_id3 + "  :  imgElement.src =" + imgElement.src);

    //9問正解して、10問目の問題を解くときには、残りの問題は1問。
    //この時に、「次の問題へ」ボタンを押すと、画像が次々と変わっていってしまう。
    //以下のコードは、それを防ぐ処理。9問目の画像が表示された後で、「次の問題へ」ボタンを
    //問題数を書き換える場合には、ここを編集する。
    //押しても、画像は切り替わらない。
    if (seikaisuu === (mondai_suu - 1)) {
        gazou_no_kirikae_fuka = 1;
    }

    //mondai_hanteiオプジェクトの中を探して、hanteiの内容（okかnoか）を変数result4に入れている。
    result4 = mondai_hantei.find(item => item.number === attack).hantei;
    //window.alert(result4);
    //window.alert(img_question[attack]);

    //VBAの習慣で、「result4 = "ok"」としてしまうと、エラーになってしまう。
    //例えば、ランダムによって３番の問題が選ばれた時に、オブジェクトmondai_hanteiの中から、
    //３番を見つけて調べる。hanteiがOKになっている場合には、その問題はすでに解いた問題になるので、
    //再びランダムで数字を選ぶようにしている。
    while (result4 === "ok") {

        attack = Math.floor(Math.random() * mondai_suu) + 1;

        //ランダムによって、新しい問題が選ばれたが、その新しい問題に対してもOKかどうかをチェックしなくてはならい。
        //そのために、以下の変数result4に、もう一度値を入力している。
        //mondai_hanteiオプジェクトの中を探して、hanteiの内容（okかnoか）を変数result4に入れている。
        result4 = mondai_hantei.find(item => item.number === attack).hantei;

        //window.alert("okの中");

        //以下の書き方は、JavaScript特有の書き方で、While文の中で、"no"の場所が見つかったら、
        //While文から抜け出すようにしている。VBAでは、breakを使って抜け出さなくても、
        //「 (result4 === "no")」になった時点で自動的に抜け出してくれるが、JavaScriptのWhile文は、そうはいかないらしい。
        //初期に作成したコードでは、mondai_suuを使わずに、「10」を使っていたため、無限ループに陥っていたのかもしれない。
        //原因不明。今は、以下のコードをコメントにしても、正しく動作するかもしれない。
        if (result4 === "no") {
            break;

        }

        //以下のコードは、無限ループの件を忘れないようにするために残してある。
        //mondai_hanteiオプジェクトがすべてokで埋まると、whileが無限ループになってしまうので、OKをすべて消す。
        /*--------------------------------------------------------------------
        if (seikaisuu >= 10) {
            mondai_hantei.forEach(item => {
                item.hantei = "no";
            })
        }
        --------------------------------------------------------------------*/

    }

    //ランダムな1～10までの数が、変数attackに入る。mondaiオブジェクト内の問題番号が変数numberに入る。
    //変数attackと変数numberは、タイアップさせている。
    //以下は、アロー関数を使って、mondaiオブジェクトの中を順番に１つずつ取り出している。
    //そして、attackの番号と一致するデータを探して、そのデータの問題文を取り出している。
    //以下のコードでは、例えば、３番の問題を出題したときに、その３番の問題文を取り出して、result2変数に代入している。
    const result2 = mondai.find(item => item.number === attack).question;
    //上記のコードをFunctionを使った式にすると、以下になる。
    //const result2 = mondai.find(function(item) {
    //return item.number === attack;
    //}).question;


    //以下のコードでは、例えば、３番の問題を出題したときに、その３番の答えを取り出して、result3変数に代入している。
    const result3 = mondai.find(item => item.number === attack).answer;
    //window.alert("問題の答え" + result3);
    //以下のコードでは、例えば、３番の問題を出題したときに、その３番の答えの文字数を調べて、変数kotaeno_nagasaに代入している。
    let kotaeno_nagasa = String(result3).length

    document.getElementById('kaitou').placeholder = '答えは、ひらがな（カタカナ、数字）' + kotaeno_nagasa + '文字';

    //配列オブジェクトにある「画像ファイルのファイル名」を変数に入れている。
    let image_file_name = mondai.find(item => item.number === attack).image_name;

    //window.alert("image_file_name=" + image_file_name);

    //画像ファイル名が書かれていた場合には、以下の処理を実行する。
    if (image_file_name != "") {
        //理科の「花から実へ」の問題を解いている時に、
        //クラスの１人の児童に、問題文とは違う画像が表示されてしまう現象が何度も発生した。
        //厳密には、最初は正しい画像が表示されるのだが、その瞬間に違う画像になってしまうようだった。
        //原因は、不明だが、以下のようにタイムスタンプをつけたら解決するかもしれないと思い、以下のコードにした。
        //このコードが有効かどうかについては、今後、検証していく予定。2024.9.21
        //理科のような問題文に画像ファイルがある場合には、画像ファイルにタイムスタンプをつけて呼び出すことにしている。
        if (kyouka_data_atai3 === 'sonota') {
            imgElement.src = `images/img_data/${kyouka_data_atai3}/${image_file_name}?v=${new Date().getTime()}`;

        } else {
            imgElement.src = `images/img_data/${gakunen_data_atai3}nen/${kyouka_data_atai3}/${image_file_name}?v=${new Date().getTime()}`;

        }

    }

    //問題文の表示
    //textContentではなく、innerHTMLにしている。つまり、タグを入れるようにしている。
    //これによって、問題文の中に<BR>タグを入れることで、改行できるようになる。
    document.getElementById('choice2').innerHTML = result2;

    //以下のフォームのボタンは、関数answerQuiz2の中にあるにもかかわず、ボタンを押すことで、関数の外からここまで飛んできてしまうことができてしまう。
    //関数の中に入り込んでしまえる点が不思議である。
    //さらに、そこから下のコードもすべて実行されてしまう。
    //ボタンに紐付けられているコードは、answerQuiz2関数であるが、このボタンは、関数だけでなく、gotoラベルのような働きもしている。
    //以下の「document.getElementById('form').onsubmit = function (event) { event.preventDefault();」は、
    //次のページへの遷移をキャンセルしている。詳しくは、「JavaScript超入門」のP156～P164を参照のこと。
    document.getElementById('form').onsubmit = function (event) {
        event.preventDefault();

        //解答欄に入力された答えを変数に入れている。
        let search = document.getElementById('form').kaitouran.value;

        //入力された解答から、半角空白、全角空白を取り除く。
        //VBAと違って、JavaScriptの場合は、trim()で、文字の両端から、半角空白、全角空白、改行等のホワイトスペースを取り除くことができる。
        search = search.trim();

        //window.alert("解答欄の答え=" + search);


        // //以下は、現在のボタンの色を16進数で取得するコード。いつか使うかもしれないので、残している。
        // const submitButton = document.getElementById('submitBtn');

        // // RGB値を16進数に変換する関数
        // function rgbToHex(rgb) {
        //     const rgbValues = rgb.match(/\d+/g); // RGBの数値部分を取得
        //     const hex = rgbValues.map(function (value) {
        //         const hexValue = parseInt(value).toString(16); // 10進数を16進数に変換
        //         return hexValue.padStart(2, '0'); // 2桁になるように0埋め
        //     }).join('');
        //     return `#${hex.toUpperCase()}`; // #をつけて大文字に変換
        // }

        // // // 現在のボタンの背景色を取得して16進数形式に変換
        // const currentColorRGB = window.getComputedStyle(submitButton).backgroundColor;
        // const currentColorHex = rgbToHex(currentColorRGB);
        // alert("現在のボタンの色は: " + currentColorHex);



        //以下のif文を使って、正解した後で、次の問題に進まずに、解答ボタンを押しても、何も動作しないようにした。
        //そのために、以下のコードで、配列から「ok」か「no」かを読み取っている。
        //この場所のコードに来ている時点で、通常は、「no」のはずである。
        //ボタンを２度押ししないと、「ok」のままここには来ない。解答を間違えた場合は、「no」でここにやってくる。
        let result5 = mondai_hantei.find(item => item.number === attack).hantei;

        if (result5 === "no") {

            //attackの番号は、出題時にランダムに決めている。
            //jsファイル内のオブジェクト配列に格納されている解答をkaitou変数に入力している。
            kaitou = result3;

            //以下は、開発中につくったタグなので、削除してもかまわないが、一応残しておく。
            //document.getElementById('output2').textContent = 'search=' + search;
            //document.getElementById('output3').textContent = 'kaitou=' + kaitou;

            //開発中は、便宜上、問題の答えは、半角数字にしていて、文字列にしていなかったため、
            //以下の記述を使って開発していた。一応残してある。
            //let search2 = 0;
            //文字列のsearchを数値に変換する。
            //search2 = parseInt(search);

            //window.alert("kaitou=" + kaitou);


            //「==」は、「値」だけを比較して「型」はチェックしない
            //「===」は、「値」と「型」を比較している
            //テスト運用では、答えを「1」～「10」の半角数字にしていたので、「===」で良かったが、
            //本格的な運用では、答えを文字列にしたので、「===」だとエラーになる。
            //文字列と文字列の比較なので、「==」に変更した。
            if (kaitou == search) {

                //最初は、「if (seikaisuu < 9) {」のように記述して、正解数が9問の時に、
                //この場所にやって来るということは、すでに10問正解しているので、
                //以下の表示は出さないようにしている。
                //今は、「if (seikaisuu < (mondai_suu-1)) {」のように変更した。
                if (seikaisuu < (mondai_suu - 1)) {
                    document.getElementById('output5').textContent = '正解です。';
                }

                //正解画像に対するランダム処理
                //正解画像は、配列から受け取る。配列は0から始まるので、以下のコードに「+1」をつけていない。
                let img_id = Math.floor(Math.random() * img_seikai_kazu);

                // .mondai_imgクラスの子要素のimgタグ（img要素）を取得
                const imgElement = document.querySelector('.mondai_img img');

                // src 属性のイメージファイルをランダムな正解画像に変更する。
                imgElement.src = img_seikai[img_id];

                //window.alert(img_seikai[img_id]);

                //正解メッセージに対するランダム処理
                //正解メッセージは、配列から受け取る。配列は0から始まるので、以下のコードに「+1」をつけていない。
                let msg_id = Math.floor(Math.random() * msg_seikai_kazu);

                //正解のメッセージを表示する。
                document.getElementById('output').textContent = msg_seikai[msg_id];

                mondai_hantei.forEach(item => {
                    if (item.number === attack) {
                        item.hantei = "ok";
                    }
                });

                seikaisuu += 1;

                //正解したら、間違えた数をリセットする。
                machigaetakazu = 0;


            } else {

                //以下のコードでは、例えば、３番の問題を出題したときに、その３番のanswer2を取り出して、result5変数に代入している。
                const result5 = mondai.find(item => item.number === attack).answer2;

                //answer2が、空欄の場合には、間違えた場合には、「不正解です。」を表示する。
                if (result5 === "") {

                    document.getElementById('output5').textContent = '不正解です。';

                } else {
                    //answer2が空欄でない場合には、正解を示すが、その問題はシャッフルされる。
                    //ただし、最後の問題の場合には、シャッフルされても、同じ問題が出題されるので、答えを丸写しすることになる。
                    document.getElementById('output5').textContent = '不正解です。正解は、' + result5 + 'です。';

                    // answer2が空欄でない場合には、「次の問題へ」ボタンを無効化する。
                    document.getElementById('nextBtn').disabled = true;

                    setTimeout(() => {
                        // 3秒後に画像を切り替える。問題画像に戻す。
                        answerQuiz2();
                    }, 3000); // 3秒（2000ミリ秒）後に実行

                }

                //不正解画像に対するランダム処理
                //不正解画像は、配列から受け取る。配列は0から始まるので、以下のコードに「+1」をつけていない。
                let img_id3 = Math.floor(Math.random() * img_zannen_kazu);

                //通常は、正解するとmachigaetakazu=0になるので、ここでは、3問連続間違えた場合の処理を示している。
                if (machigaetakazu >= 2) {

                    // .mondai_imgクラスの子要素のimgタグ（img要素）を取得
                    let imgElement = document.querySelector('.mondai_img img');

                    //問題文専用の画像がない場合のみ、以下の処理を行う。
                    if (image_file_name === "") {
                        // src 属性のイメージファイルを固定された不正解画像に変更する。
                        imgElement.src = "images/zannen/3000.png";

                    }

                } else {

                    /// .mondai_imgクラスの子要素のimgタグ（img要素）を取得
                    let imgElement = document.querySelector('.mondai_img img');

                    //問題文専用の画像がない場合のみ、以下の処理を行う。
                    if (image_file_name === "") {

                        // src 属性のイメージファイルをランダムな不正解画像に変更する。
                        imgElement.src = img_zannen[img_id3];

                    }

                }

                //window.alert(img_zannen[img_id3]);

                //不正解メッセージに対するランダム変数処理
                //「msg_id」ではなく、「const msg_id2」にしなくてはならない。
                //不正解メッセージは、配列から受け取る。配列は0から始まるので、以下のコードに「+1」をつけていない。
                let msg_id3 = Math.floor(Math.random() * msg_zannen_kazu);

                if (machigaetakazu >= 2) {

                    //answer2が空欄の時には、
                    //「先生にヒントをもらいましょう。」を表示させる。
                    if (result5 === "") {

                        //不正解のメッセージを表示する（３問以上間違えた場合）。
                        document.getElementById('output').textContent = "先生にヒントをもらいましょう。";

                    }

                } else {
                    //不正解のメッセージを表示する。
                    document.getElementById('output').textContent = msg_zannen[msg_id3];

                }

                machigaetakazu += 1;
            }


            document.getElementById('output4').textContent = `${seikaisuu}問正解（${mondai_suu}問中）`;

            //正解数が10個になったら、while文は、無限ループになってしまうので、ここで、オブジェクト配列を
            //すべて「hantei:"no"」にする。ここから先は、何問解いても「no」になるとともに、重複した問題が出るようになる。
            //以下のコードには問題がある。10問正解してしまうと、OKがすべて消されてしまうので、11問目を正解させた後は、
            //リターンキーを押すたびに、正解数が増えていってしまう。画像も切り替わっていってしまう。
            /*--------------------------------------------------------------------------
            if (seikaisuu >= 10) {
                mondai_hantei.forEach(item => {
                    item.hantei = "no";
                });
            }
            -----------------------------------------------------------------------------*/

            //問題数を書き換える場合には、ここを編集する。
            if (seikaisuu === mondai_suu) {

                // 全問正解した場合には、「次の問題へ」ボタンを無効化する。
                document.getElementById('nextBtn').disabled = true;

                if (deco_user_mei3 === "ゲスト") {
                    const zenmon_seikai = 'レベル' + level_data_atai2 + 'を全問正解しました。この画面を先生に見せてください。'
                    document.getElementById('output5').textContent = zenmon_seikai;

                } else {

                    const zenmon_seikai = 'レベル' + level_data_atai2 + 'を全問正解しました。合格ボタンを押してください。'
                    document.getElementById('output5').textContent = zenmon_seikai;
                    document.getElementById('sendBtn').style.display = 'inline'; // インライン要素として再表示

                }

            } //else if (seikaisuu > 10) {
            //document.getElementById('output5').textContent = 'すでに全問正解しています。まだまだ続けるのですね。すばらしいです。';
            //}
        }

    };

    //解答欄にフォーカスが移動するコード
    document.getElementById("kaitou").focus();
}
