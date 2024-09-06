const tangen_mei= [
'大造じいさんとがん','言葉の文化２'
];

//単元名をタグに書き込む。配列は、0から始まるので、「i-1」にしてある。
for (let i = 1; i <= tangen_mei.length; i++) {
document.getElementById('tangen_mei_' + i).textContent = tangen_mei[(i - 1)];
}
