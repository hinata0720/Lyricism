document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const mainContent = document.getElementById('main-content');
    const keywordCloudBtn = document.getElementById('keyword-cloud-btn');

    const contentData = {
        'society-economy': {
            title: '社会・経済',
            text: '2020年代初頭は、新型コロナウイルス感染症（COVID-19）のパンデミックによって大きく特徴づけられました。感染拡大防止のための行動制限や経済活動の停滞が起こり、テレワークやオンラインサービスの急速な普及など、社会や経済の構造に大きな変化をもたらしました。また、デジタルトランスフォーメーション（DX）の加速や、持続可能な開発目標（SDGs）への取り組みが進んでいます。',
            visualData: '2020年 GDP成長率: -4.5%（戦後最大の落ち込み）\nテレワーク実施率: 2020年5月 27.7%\n電子決済利用率: 2019年 26.8% → 2020年 29.7%\nCOVID-19感染者数: 2021年12月時点で約172万人（日本）'
        },
        'politics': {
            title: '政治',
            text: '2020年代初頭の日本政治は、新型コロナウイルス対策が中心課題となりました。2020年9月に安倍晋三首相が退陣し、菅義偉内閣、岸田文雄内閣と続きました。デジタル庁の設置やカーボンニュートラル宣言など、新たな政策も打ち出されています。国際的には米中対立の激化や、気候変動対策の重要性が増しています。',
            visualData: '主要政策: 2021年 デジタル庁発足、2020年 2050年カーボンニュートラル宣言\n選挙結果: 2021年衆議院選挙 自民党勝利\n国際情勢: 米中対立激化、気候変動対策の重要性増大'
        },
        'culture-trend': {
            title: '文化・流行',
            text: '2020年代初頭は、コロナ禍の影響でオンラインでの文化消費が急増しました。動画配信サービスの利用が拡大し、バーチャルイベントやライブ配信が一般化。SNSを通じた新たな文化現象も生まれています。また、「巣ごもり消費」や「ステイホーム」といった新しいライフスタイルが定着しつつあります。',
            visualData: '動画配信サービス利用率: 2019年 48.3% → 2020年 55.7%\nオンラインライブ市場規模: 2020年 約500億円\n流行語: 2020年「3密」, 2021年「リスケ（予定変更）」\nSNS利用率: 2021年 79.1%'
        },
        'technology': {
            title: 'テクノロジー',
            text: '2020年代は、5Gの本格的な普及が始まり、IoTやAIの活用がさらに進んでいます。また、コロナ禍を契機としたデジタルトランスフォーメーション（DX）の加速により、様々な分野でテクノロジーの導入が進んでいます。宇宙開発や量子コンピューティングなど、最先端技術の研究開発も活発化しています。',
            visualData: '5G契約数: 2021年3月時点で約1,400万件\nAI関連市場規模: 2020年 1兆1,000億円 → 2025年予測 1兆9,000億円\n主要技術トレンド:  エッジコンピューティング、ブロックチェーン、量子コンピューティング\n宇宙ビジネス市場規模: 2040年に約2.5兆円規模（予測）'
        },
        'disasters-events': {
            title: '災害・出来事',
            text: '2020年代初頭は、新型コロナウイルス感染症（COVID-19）のパンデミックが世界中に大きな影響を与えました。日本では感染拡大防止のための緊急事態宣言が複数回発出されるなど、社会生活に大きな変化がありました。また、2021年7-8月には東京オリンピック・パラリンピックが1年延期の末に開催され、無観客での実施となりました。自然災害も依然として大きな課題となっています。',
            visualData: '主要出来事:\n2020年 新型コロナウイルス感染症パンデミック\n2021年 東京オリンピック・パラリンピック開催\n2021年 熱海市土石流災害（死者・行方不明者27名）\n2022年 トンガ海底火山噴火・津波'
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
            <h2>2020年代のキーワードクラウド</h2>
            <div class="keyword-cloud-content">
                <img src="images/2020's_wordcloud.jpg" alt="2020年代のキーワードクラウド" class="keyword-cloud-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                <h3>時代を象徴するキーワード</h3>
                <p class="keyword-cloud-description">
                2020年代は、「君」という言葉を中心に、人間関係が描かれていることが分かります。「孤独」「切ない」「冷めやすい」といったネガティブな言葉が見られる一方で、「愛」「やさしい」「信じる」といったポジティブな言葉も多く存在し、現代の若者たちが抱える複雑で矛盾した感情が反映されていることがわかります。さらに、「変わる」「始まる」「終わる」といった変化や移り変わりを表す言葉が多く登場し、不確実な時代における変化への意識が高まっていることも見受けられます。
                </p>
                <div class="additional-images">
                    <div class="image-container">
                        <img src="images/2020's_posinega_summary.jpeg" alt="2020年代のセンチメント分析" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>センチメント分析</h4>
                        <p>直接的な感情表現を避け、状況や情景を通じて心情を描写しようとする現代的なアプローチを示しているため、全体の52.4%を占める中立的な表現の多さが目立ちます。</p>
                    </div>
                    <div class="image-container">
                        <img src="images/2020's_emotionSummary.jpeg" alt="2020年代の感情レーダーチャート" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>感情のレーダーチャート</h4>
                        <p>コロナ禍という厳しい社会状況や、SNS時代の若者たちが抱える複雑な心情が反映され、「怒り」や「恐れ」といった感情が特に目立ちます。これらは攻撃的な怒りや単純な恐怖というよりも、将来への不安や、社会や人間関係に対する葛藤として表現されていることが多いです。</p>
                    </div>
                </div>
                <div class="additional-text">
                    <h4>感情とセンチメント分析の結果</h4>
                    <p>感情をストレートに表現するのではなく、より洗練された描写を通じて現代の感情を繊細に描く傾向が強いように思います。特に、デジタル社会を生きる若者たちの心理や、不確実な社会の中での心の揺れ動きが、深みを持って表現されている点が印象的です。</p>
                </div>
            </div>
        `;
    });
});