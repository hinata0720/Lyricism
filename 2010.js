document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const genreInfo = document.getElementById('genre-info');

    genreInfo.style.display = 'none'; // Set initial display state to none

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