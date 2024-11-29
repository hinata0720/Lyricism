document.addEventListener('DOMContentLoaded', function() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    const genreInfo = document.getElementById('genre-info');

    genreInfo.style.display = 'none'; // Set initial display state to none

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