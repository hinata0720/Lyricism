document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const mainContent = document.getElementById('main-content');
    const keywordCloudBtn = document.getElementById('keyword-cloud-btn');

    const contentData = {
        'society-economy': {
            title: '社会・経済',
            text: '2010年代は、東日本大震災からの復興と「アベノミクス」による経済政策が特徴的でした。デフレ脱却を目指す金融緩和や財政出動が行われ、株価は上昇しましたが、実質賃金の伸び悩みなど課題も残りました。また、少子高齢化がさらに進行し、外国人労働者の受け入れ拡大など、労働市場の変化が見られました。',
            visualData: '経済成長率: 年平均0.9%\n失業率: 2010年5.1% → 2019年2.4%\n日経平均株価: 2010年10,228円 → 2019年23,656円\n訪日外国人数: 2010年861万人 → 2019年3,188万人'
        },
        'politics': {
            title: '政治',
            text: '2010年代の日本政治は、自民党の長期政権が特徴的でした。2012年に第二次安倍内閣が発足し、「アベノミクス」や集団的自衛権の行使容認など、大きな政策転換が行われました。一方で、森友・加計問題など政治とカネをめぐる問題も浮上。2019年には令和への改元が行われ、新しい時代の幕開けとなりました。',
            visualData: '主要政策: 2015年 安全保障関連法成立、2016年 18歳選挙権導入\n選挙結果: 2012年, 2014年, 2017年 自民党勝利\n改元: 2019年5月1日 令和に改元'
        },
        'culture-trend': {
            title: '文化・流行',
            text: '2010年代は、スマートフォンとSNSの普及により、文化の消費と発信の形が大きく変化しました。音楽ではストリーミングサービスが主流となり、動画配信プラットフォームの台頭でコンテンツの多様化が進みました。アニメや漫画の海外展開がさらに加速し、「クールジャパン」として日本文化の輸出が推進されました。',
            visualData: '音楽: サブスクリプションサービスの普及（Spotify日本上陸2016年）\nSNS利用率: 2010年31.7% → 2019年69.0%\n流行語: 2011年「なでしこジャパン」, 2016年「ポケモンGO」\nインバウンド消費: 2019年4.8兆円'
        },
        'technology': {
            title: 'テクノロジー',
            text: '2010年代は、第4次産業革命の時代と呼ばれ、AI、IoT、ビッグデータなどの技術が急速に発展しました。スマートフォンが生活に不可欠なデバイスとなり、クラウドサービスの普及でビジネスモデルも変化。自動運転技術や仮想現実（VR）、拡張現実（AR）の開発も進み、Society 5.0の実現に向けた取り組みが始まりました。',
            visualData: 'スマートフォン保有率: 2010年9.7% → 2019年83.4%\n5G: 2020年商用サービス開始\n主要技術: AI（人工知能）, IoT, ブロックチェーン\nデジタルトランスフォーメーション（DX）の推進'
        },
        'disasters-events': {
            title: '災害・出来事',
            text: '2010年代は、東日本大震災（2011年）という未曾有の災害から始まりました。原子力発電所事故を含むこの災害は、日本社会に大きな影響を与え続けています。その他にも熊本地震（2016年）や西日本豪雨（2018年）など、大規模な自然災害が相次ぎました。国際的には、2015年のパリ協定採択など、気候変動対策が重要課題となりました。',
            visualData: '主要災害・事件:\n2011年 東日本大震災（死者・行方不明者約1.8万人）\n2016年 熊本地震（死者273名）\n2018年 西日本豪雨（死者237名）\n2019年 京都アニメーション放火殺人事件（死者36名）'
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
            <h2>2010年代のキーワードクラウド</h2>
            <div class="keyword-cloud-content">
                <img src="images/2010's_wordcloud.jpg" alt="2010年代のキーワードクラウド" class="keyword-cloud-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                <h3>時代を象徴するキーワード</h3>
                <p class="keyword-cloud-description">
                2010年代の音楽は、愛や夢、希望といった明るいテーマを多く扱いながらも、孤独や別れといった切ない感情も描いています。特に、キーワードクラウドに浮かび上がる「君」「僕」「愛」「夢」といった言葉から、個人のつながりや希望が多くの楽曲で大事にされていることがわかります。同時に、「消える」「泣く」「悲しい」といったネガティブな言葉も散見され、現代社会の複雑な感情を反映していることがうかがえます。2010年代の音楽は、ポジティブなメッセージだけではなく、失恋や別れ、葛藤といった感情にも焦点を当てることで、よりリアルで多面的な感情を表現しているのが特徴です。
                </p>
                <div class="additional-images">
                    <div class="image-container">
                        <img src="images/2010's_posinega_summary.jpeg" alt="2010年代のセンチメント分析" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>センチメント分析</h4>
                        <p>全体としてポジティブな感情を表現した曲は少数派で、ネガティブな感情を含む曲が比較的多いことが見受けられます。また、約半数の楽曲が中立的な感情を表現しており、単純に明るいか暗いかという二元的な感情表現ではなく、微妙な感情や複雑な内面が描かれていることが特徴です。</p>
                    </div>
                    <div class="image-container">
                        <img src="images/2010's_emotionSummary.jpeg" alt="2010年代の感情レーダーチャート" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>感情のレーダーチャート</h4>
                        <p>
                        2010年代の音楽は、「怒り」という感情をしっかりと反映しており、社会や政治に対する不満を表現する手段として重要な役割を果たしていました。音楽は単なるエンターテインメントではなく、時代の声を伝える力を持っていると言えます。アーティストたちは、自らの楽曲を通じて、社会の問題や不正に対する怒りを訴えかけ、リスナーに共感を呼び起こしていました。</p>
                    </div>
                </div>
                <div class="additional-text">
                    <h4>感情とセンチメント分析の結果</h4>
                    <p>2010年代の音楽は、ポジティブな感情とネガティブな感情が共存しており、現代の複雑な社会や個人の葛藤が色濃く反映されています。愛や喜び、つながりといった希望を描きながらも、孤独や悲しみといった繊細な感情にもフォーカスが当てられており、リスナーに深い共感を生む力を持った楽曲が多い時代だったと言えるでしょう。</p>
                </div>
            </div>
        `;
    });
});