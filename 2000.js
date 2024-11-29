document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const genreInfo = document.getElementById('genre-info');

    genreInfo.style.display = 'none'; // Set initial display state to none

    const contentData = {
        'society-economy': {
            title: '社会・経済',
            text: '2000年代は、ITバブルの崩壊から始まりましたが、その後の景気回復期を経て、2008年のリーマンショックで再び経済危機に見舞われました。少子高齢化が進行し、非正規雇用の増加など雇用形態の多様化が進みました。また、環境問題への意識が高まり、エコロジーへの取り組みが活発化しました。',
            visualData: '経済成長率: 年平均0.6%\n失業率: 2002年5.4%（ピーク） → 2007年3.9% → 2009年5.1%\n非正規雇用率: 2000年26.0% → 2009年33.7%\n高齢化率: 2000年17.3% → 2009年22.7%'
        },
        'politics': {
            title: '政治',
            text: '2000年代の日本政治は、小泉純一郎首相の長期政権（2001-2006）に特徴づけられます。郵政民営化や構造改革が推進される一方、格差社会が問題視されるようになりました。2009年には民主党が圧勝し、政権交代が実現。しかし、東日本大震災への対応などで批判を受け、短期間で政権を失うことになります。',
            visualData: '主要政策: 2005年 郵政民営化法成立\n選挙結果: 2005年 自民党圧勝（郵政選挙）、2009年 民主党圧勝（政権交代）\n首相在任期間: 小泉純一郎 1,980日（戦後3位）'
        },
        'culture-trend': {
            title: '文化・流行',
            text: '2000年代は、インターネットの普及により文化の多様化が進みました。音楽ではiPodの登場でデジタル音楽が主流となり、アニメや漫画の海外展開が加速しました。ファッションでは「ギャル」や「お兄系」など、細分化されたサブカルチャーが発展。SNSの登場により、個人の情報発信が容易になりました。',
            visualData: '音楽: iPod発売（2001年）、AKB48デビュー（2005年）\nアニメ: 「千と千尋の神隠し」アカデミー賞受賞（2003年）\nファッション: ギャル文化、お兄系、古着ブーム\nSNS: mixi（2004年）、Facebook日本語版（2008年）'
        },
        'technology': {
            title: 'テクノロジー',
            text: '2000年代は、モバイル技術とインターネットの融合が進んだ時代です。携帯電話はメール機能や写真機能を備え、スマートフォンの登場で通信革命が起こりました。家庭ではブロードバンドが普及し、動画共有サイトやSNSが登場。また、薄型テレビの普及やデジタル家電の進化など、家庭生活のデジタル化が進みました。',
            visualData: 'インターネット普及率: 2000年37.1% → 2009年78.0%\nブロードバンド契約数: 2002年3,857千件 → 2009年31,417千件\nスマートフォン: iPhone 3G日本発売（2008年）\n主要サービス: YouTube（2005年）、Twitter（2006年）'
        },
        'disasters-events': {
            title: '災害・出来事',
            text: '2000年代は、国内外で多くの重大事件や災害が発生しました。2001年のアメリカ同時多発テロ事件は世界に衝撃を与え、国際情勢に大きな影響を及ぼしました。国内では2004年の新潟県中越地震、2005年のJR福知山線脱線事故などが発生。また、2009年の新型インフルエンザの世界的流行は、パンデミックへの対応の重要性を浮き彫りにしました。',
            visualData: '主要事件・災害:\n2001年 アメリカ同時多発テロ事件\n2004年 新潟県中越地震（死者68名）\n2005年 JR福知山線脱線事故（死者107名）\n2009年 新型インフルエンザ流行（国内感染者約2,000万人）'
        }
    };


    function showGenreInfo(genre) {
        const data = contentData[genre];
        genreInfo.innerHTML = `
            <div class="genre-item">
                <h3>${data.title}</h3>
                <p>${data.text}</p>
                <div class="visual-data">
                    <pre>${data.visualData}</pre>
                </div>
            </div>
        `;
        genreInfo.style.display = 'block';
    }

    function hideGenreInfo() {
        genreInfo.innerHTML = '';
        genreInfo.style.display = 'none';
    }

    let activeButton = null;

    genreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.getAttribute('data-genre');

            if (activeButton === button) {
                // 同じボタンをクリックした場合、情報を非表示にする
                button.classList.remove('active');
                hideGenreInfo();
                activeButton = null;
            } else {
                // 新しいボタンをクリックした場合、情報を表示する
                if (activeButton) {
                    activeButton.classList.remove('active');
                }
                button.classList.add('active');
                showGenreInfo(genre);
                activeButton = button;
            }
        });
    });

    // ハンバーガーメニューの機能
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', 
        hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });

    // メニュー項目がクリックされたときにメニューを閉じる
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // メニュー外をクリックしたときにメニューを閉じる
    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});