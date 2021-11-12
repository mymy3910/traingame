//ボタンクリックでイベント発火
document.getElementById("button").onclick = function(){
  //対象の配列
  const themeArray =
   ["山手線","中央線","京浜東北線","丸いもの","〇色のもの（色シリーズ）","冷たいもの","楽器の名前","漫画タイトル","俳優の名前","AKBメンバー",
   "ハロプロメンバー","仮面ライダーの名前","ジブリ映画タイトル","ディズニーアトラクション","ユニバアトラクション","お寿司のネタ","スタバメニュー",
   "国民の祝日","四字熟語","オリンポス12神","Youtuberの名前","世界遺産","ジャニーズの曲名","動物の名前","動物の鳴き声","花の名前",
   "セーラー戦士の名前","小説のタイトル","サッカー選手の名前"];
  //ランダムに1つ取得
  const get = themeArray[Math.floor(Math.random() * themeArray.length)];
  //取得したお題を書き出す
  document.getElementById("outputTheme").innerHTML = get;
};