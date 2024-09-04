const tangen_mei= [
'水産業のさかんな地域',
'これからの食料生産',
'自動車の生産に励む人々',
'日本の工業生産と貿易・運輸'
];

//単元名をタグに書き込む。配列は、0から始まるので、「i-1」にしてある。
for (let i = 1; i <= tangen_mei.length; i++) {
document.getElementById('tangen_mei_' + i).textContent = tangen_mei[(i - 1)];
}