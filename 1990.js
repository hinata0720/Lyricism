document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const mainContent = document.getElementById('main-content');
    const keywordCloudBtn = document.getElementById('keyword-cloud-btn');

    const contentData = {
        'society-economy': {
            title: '社会・経済',
            text: '1990年代は、バブル経済崩壊後の「失われた10年」として知られています。景気低迷が続き、終身雇用制度の崩壊や就職氷河期など、日本の社会経済構造に大きな変化が起こりました。一方で、携帯電話やインターネットの普及が始まり、情報化社会への移行が進みました。',
            visualData: '経済成長率: 年平均1.14%\n失業率: 1990年2.1% → 1999年4.7%\nデフレ率: 1995年から0%以下に\n携帯電話普及率: 1990年0.7% → 1999年44.9%'
        },
        'politics': {
            title: '政治',
            text: '1990年代の日本政治は大きな転換期を迎えました。1993年に38年間続いた自民党単独政権が崩壊し、非自民連立政権が誕生。その後、自民党が復権するものの、連立政権が常態化しました。また、1995年の阪神・淡路大震災や地下鉄サリン事件を受けて、危機管理体制の整備が進められました。',
            visualData: '政権交代: 1993年 非自民連立政権誕生\n主要法案: 1994年 政治改革関連法\n選挙制度: 1994年 小選挙区比例代表並立制導入'
        },
        'culture-trend': {
            title: '文化・流行',
            text: '1990年代の日本文化は、バブル崩壊後の「失われた10年」を反映しつつも、多様化が進みました。音楽ではJ-POPが確立し、アニメやマンガ、ゲームなどのポップカルチャーが世界的に注目されるようになりました。ファッションでは渋カジやギャル文化が流行し、若者の個性化が進みました。',
            visualData: '音楽: J-POP確立、globe、SMAP、安室奈美恵など\nアニメ: 「新世紀エヴァンゲリオン」「ポケットモンスター」\nファッション: 渋カジ、ギャル文化、ルーズソックス\nゲーム: プレイステーション発売（1994年）'
        },
        'technology': {
            title: 'テクノロジー',
            text: '1990年代は、デジタル革命の幕開けとなった時代です。パソコンの普及が進み、インターネットが一般家庭にも広がり始めました。携帯電話も急速に普及し、コミュニケーションの形を大きく変えました。また、家庭用ゲーム機の高性能化や、DVDなどの新しいメディアの登場も、この時代の特徴です。',
            visualData: 'インターネット普及率: 1997年9.2% → 1999年21.4%\n携帯電話契約数: 1990年86.8万件 → 1999年5,685万件\nパソコン普及率: 1990年16.3% → 1999年37.7%\n主要技術: Windows 95発売（1995年）、iMac発売（1998年）'
        },
        'disasters-events': {
            title: '災害・出来事',
            text: '1990年代は、日本社会に大きな衝撃を与える出来事が相次ぎました。1995年の阪神・淡路大震災は戦後最大の自然災害となり、同年の地下鉄サリン事件は無差別テロの脅威を日本社会に知らしめました。国際的には、湾岸戦争（1991年）や香港返還（1997年）など、世界秩序の変化を象徴する出来事が起こりました。',
            visualData: '阪神・淡路大震災（1995年）: 死者6,434名\n地下鉄サリン事件（1995年）: 死者13名、負傷者6,000名以上\nその他の主要事件: 1991年 湾岸戦争、1997年 香港返還、1999年 東海村JCO臨界事故'
        }
    };

    genreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.getAttribute('data-genre');
            if (genre) {
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
            }
        });
    });

    keywordCloudBtn.addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>1990年代のキーワードクラウド</h2>
            <div class="keyword-cloud-content">
                <img src="images/1990年代_wordcloud.jpg" alt="1990年代のキーワードクラウド" class="keyword-cloud-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                <h3>時代を象徴するキーワード</h3>
                <p class="keyword-cloud-description">
                これらのキーワードを見ると、1990年代の楽曲も引き続き「愛」や「人との関わり」が大きなテーマであったことがわかります。特に「抱きしめる」、「君」、「あなた」といった言葉が頻繁に登場していることから、個人的で感情的なつながりが重視されていた様子がうかがえます。また、「夢」や「忘れる」というキーワードからは、未来への希望や過去への思い、失恋や喪失感といったテーマも重要視されていたことがわかります。
                さらに、「信じる」、「二人」といった言葉が強調されていることから、信頼や絆、未来への期待が強く歌われていたことも特徴的です。全体的に、愛や切なさ、儚さといった感情が深く描かれている一方で、希望や未来に向かう強さも見られる時代です。
                </p>
                <div class="additional-images">
                    <div class="image-container">
                        <img src="images/1990年代_posinega_summary.png" alt="1990年代のセンチメント分析" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>センチメント分析</h4>
                        <p>1990年代の歌詞には、ポジティブな要素も少し含まれているものの、全体としてはネガティブな感情や中立的な感情が多くを占めていることがわかります。この時代の音楽には感情の多様性が表れており、各曲には喜びや「好き」といった明るい感情だけでなく、悲しみや恐れといった深い感情も込められています。</p>
                    </div>
                    <div class="image-container">
                        <img src="images/1990年代_emotionSummary.png" alt="1990年代の感情レーダーチャート" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>感情のレーダーチャート</h4>
                        <p>日本がバブル経済崩壊を経験した後、経済の不安定さや社会の停滞が続き、人々の生活には多くの苦しみや不安が影を落としました。このような状況の中で、未来に対する悲観的な考え方が広がっていったのです。この影響は音楽や歌詞にも表れ、「悲しみ」や「切なさ」といった感情がより多く反映されるようになりました。</p>
                    </div>
                </div>
                <div class="additional-text">
                    <h4>感情とセンチメント分析の結果</h4>
                    <p>このデータから、1990年代の音楽はバランスの取れた感情表現がされていたことがわかります。1980年代よりもわずかにポジティブな感情が増えている一方で、ネガティブな感情も依然として楽曲の大きな部分を占めていました。</p>
                </div>
            </div>
        `;
    });
});