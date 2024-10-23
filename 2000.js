document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const mainContent = document.getElementById('main-content');
    const keywordCloudBtn = document.getElementById('keyword-cloud-btn');

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
            <h2>2000年代のキーワードクラウド</h2>
            <div class="keyword-cloud-content">
                <img src="images/2000_wordcloud.jpg" alt="2000年代のキーワードクラウド" class="keyword-cloud-image" onerror="this.onerror=null; this.src='images/1980wordcloud.jpg';">
                <h3>時代を象徴するキーワード</h3>
                <p class="keyword-cloud-description">
                2000年代のヒット曲の歌詞から抽出されたキーワードをもとに、以下のような特徴が見受けられます。頻出する言葉として、「愛」、「夢」、「心」、「永遠」が挙げられ、これらは恋愛や希望、感情のつながりを強調しています。一方で、「孤独」、「別れ」、「涙」といったネガティブな言葉も見受けられ、失恋や心の痛みといったテーマが同時に存在していることがわかります。このように、2000年代の歌詞は、ポジティブな感情とネガティブな感情の両方を描き出すことにより、聴く人々の心の奥深くに響くものとなっています。
                </p>
                <div class="additional-images">
                    <div class="image-container">
                        <img src="images/2000_posinega_summary.png" alt="1990年代のセンチメント分析" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>センチメント分析</h4>
                        <p>全体的にはポジティブな歌詞が多く、特に「愛」や「夢」、「未来」などの前向きなキーワードが多用されていました。しかし、ポジティブ一辺倒ではなく、「別れ」や「涙」、「後悔」といったネガティブな感情表現も無視できない存在感を示しており、現実の苦しみや葛藤が歌詞に反映されていることがわかります。このバランスが、当時のリスナーにとってリアルで心に響くものだったのでしょう。</p>
                    </div>
                    <div class="image-container">
                        <img src="images/2000_emotionSummary.png" alt="1990年代の感情レーダーチャート" class="additional-image" onerror="this.onerror=null; this.src='/images/fallback_image.jpg';">
                        <h4>感情のレーダーチャート</h4>
                        <p>2000年代の歌詞は、個人の感情や内面、複雑な人間関係に焦点を当てたものが多く見られました。特に失恋や別れ、孤独といったテーマが繰り返し扱われており、感情的な葛藤や苦しみが歌詞に反映されていました。これらのテーマは、音楽を通じてリスナーが自分自身の感情や経験と向き合う手段として機能していた可能性があります。</p>
                    </div>
                </div>
                <div class="additional-text">
                    <h4>感情とセンチメント分析の結果</h4>
                    <p>2000年代のヒット曲は、ただ明るい希望や夢を歌うだけでなく、現実の辛さや痛みをリアルに描いている点が特徴的です。多くの曲が、希望と共に苦しみや悩みも伝えることで、リスナーに深い共感を与えていました。そうした楽曲は、人々が抱える不安や心の痛みに寄り添い、励ましや癒しを提供する役割を果たしていたのではないでしょうか。現実を直視しながらも、前向きに生きようとするメッセージが、多くの人々の心に響いた時代だったのだと思います。</p>
                </div>
            </div>
        `;
    });
});