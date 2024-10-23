document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const mainContent = document.getElementById('main-content');
    const keywordCloudBtn = document.getElementById('keyword-cloud-btn');

    const contentData = {
        'society-economy': {
            title: '社会・経済',
            text: '1980年代は日本経済の黄金期であり、バブル経済の絶頂期でした。企業の設備投資が活発化し、不動産価格が高騰。「Japan as No.1」と呼ばれるほど、日本の経済力は世界から注目されました。',
            visualData: '経済成長率: 年平均4.5%\n株価: 日経平均38,915円（1989年末）\n地価: 1980年比で3.4倍（1990年）'
        },
        'politics': {
            title: '政治',
            text: '1980年代の日本政治は、自民党長期政権下で安定していました。中曽根康弘首相の下で行政改革や国鉄民営化が進められ、国際的にも日本の存在感が増しました。冷戦末期の国際情勢の中で、日本の役割も変化しつつありました。',
            visualData: '選挙投票率: 70%前後で推移\n自民党議席数: 過半数を維持\n主要法案: 国鉄民営化法（1986年）'
        },
        'culture-trend': {
            title: '文化・流行',
            text: '1980年代は、ディスコやニューウェーブなど多様な音楽ジャンルが流行しました。ファッションではボディコンスーツやスーツスタイルが人気を集め、バブル経済を反映した華やかさが特徴的でした。テレビではトレンディドラマが大ヒットし、若者文化に大きな影響を与えました。',
            visualData: '人気音楽ジャンル: ディスコ、ニューウェーブ\nファッショントレンド: ボディコンスーツ、肩パッド\n人気テレビ番組: 「金曜日の妻たちへ」「男女7人夏物語」'
        },
        'technology': {
            title: 'テクノロジー',
            text: '1980年代は、パーソナルコンピュータやゲーム機の普及が始まった時代です。日本製の電子機器が世界市場を席巻し、ウォークマンやファミコンなどが大ヒット商品となりました。また、自動車産業でも日本メーカーの躍進が目立ちました。',
            visualData: 'PC普及率: 1980年 5.8% → 1990年 16.3%\nファミコン累計販売台数: 約6,000万台（1990年まで）\n携帯電話加入者数: 1985年 2.9万人 → 1990年 86.8万人'
        },
        'disasters-events': {
            title: '災害・出来事',
            text: '1980年代は比較的平和な時代でしたが、いくつかの重要な出来事がありました。1985年の日本航空123便墜落事故は、戦後最大の航空機事故として記憶に残っています。また、1986年のチェルノブイリ原子力発電所事故は、世界中に衝撃を与えました。',
            visualData: '日航機事故犠牲者数: 520名\nチェルノブイリ事故による避難者数: 約10万人\n1983年 三宅島噴火'
        }
    };

    genreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.getAttribute('data-genre');
            const content = contentData[genre];
            mainContent.innerHTML = `
                <h2>${content.title}</h2>
                <div class="content">
                    <div class="text">
                        <p>${content.text}</p>
                    </div>
                    <div class="visual">
                        <pre>${content.visualData}</pre>
                    </div>
                </div>
            `;
            mainContent.scrollIntoView({ behavior: 'smooth' });
        });
    });

    keywordCloudBtn.addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>1980年代のキーワードクラウド</h2>
            <div class="keyword-cloud-content">
                <p>バブル経済, ディスコ, ウォークマン, 冷戦終結, 阪神淡路大震災, トレンディドラマ, ファミコン, ボディコン, 肩パッド, 日本航空123便事故, チェルノブイリ原発事故, レーガノミクス, グラスノスチ, ベルリンの壁崩壊, エイズ, スペースシャトル・チャレンジャー号事故</p>
            </div>
        `;
        mainContent.scrollIntoView({ behavior: 'smooth' });
    });
});