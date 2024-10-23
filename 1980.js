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
            <h2>1980年代のキーワードクラウド</h2>
            <div class="keyword-cloud-content">
                <img src="images/1980wordcloud.jpg" alt="1980年代のキーワードクラウド" class="keyword-cloud-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                <h3>時代を象徴するキーワード</h3>
                <p class="keyword-cloud-description">
                これらのキーワードから、1980年代の楽曲が愛や感情的なつながりを中心にしていたことが読み取れます。「抱きしめる」や「愛」、「あなた」といった言葉は、人との深い絆や親密さがテーマであったことを示しています。一方で、「切ない」や「涙」といった言葉からは、恋愛に伴う痛みや悲しみが多く描かれていたことが伺えます。「夢」や「忘れる」などの言葉は、過去や失ったものへの思いを感じさせ、ノスタルジックな雰囲気を醸し出しています。
                </p>
                <div class="additional-images">
                    <div class="image-container">
                        <img src="images/1980posinega.png" alt="歌詞から読み取れる感情" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>センチメント分析</h4>
                        <p>特に「悲しみ」や「愛」に関する曲が多く、ポジティブな感情は比較的少ないことが目立ちます。その分、ネガティブや中立的な感情が強く表現されていて、聴く人々に深い共感を与える作品が多かったように思います。</p>
                    </div>
                    <div class="image-container">
                        <img src="images/1980emotion.png" alt="歌詞から読み取れる感情" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>感情のレーダーチャート</h4>
                        <p>多くの歌詞は、個人の感情や人間関係の葛藤を描いています。特に愛や別れのテーマでは、感情の高まりや怒りがよく表現されているため、「怒り」のグラフが高く現れています。</p>
                    </div>
                </div>
                <div class="additional-text">
                    <h4>感情とセンチメント分析の結果</h4>
                    <p>このデータから、1980年代の音楽は感情豊かでありながら、特にネガティブや中立的なトーンが多かったことが分かります。恋愛の切なさや喪失感が中心的に描かれた一方で、内省的で落ち着いたテーマが多く取り上げられていた時代だったことがわかります。</p>
                </div>
            </div>
        `;
    });
});