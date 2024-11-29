document.addEventListener('DOMContentLoaded', function() {
    // Sample data (replace with actual data)
    const emotionData = {
        labels: ['1980', '1990', '2000', '2010', '2020'],
        datasets: [
            {
                label: 'ポジティブ',
                data: [8.6, 9.6, 8.4, 13.7, 4.9],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'ネガティブ',
                data: [36.7, 36.8, 31.7, 34.7, 42.7],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            },
            {
                label: '中立',
                data: [54.7, 53.7, 59.9, 51.6, 52.4],
                borderColor: 'rgb(255, 205, 86)',
                tension: 0.1
            }
        ]
    };

    const themeData = {
        labels: ['喜び', '好き', '悲しみ', '恐れ', '怒り'],
        datasets: [
            {
                label: '1980年代',
                data: [31.1, 52.4, 61.8, 25.1, 79.7],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                pointBackgroundColor: 'rgb(75, 192, 192)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(75, 192, 192)'
            },
            {
                label: '1990年代',
                data: [34.3, 47.4, 79.6, 24.3, 64.5],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
            {
                label: '2000年代',
                data: [32.4, 59.8, 75.2, 21.2, 61.5],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgb(255, 205, 86)',
                pointBackgroundColor: 'rgb(255, 205, 86)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 205, 86)'
            },
            {
                label: '2010年代',
                data: [52.2, 50.6, 53.8, 15.4, 77.9],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            },
            {
                label: '2020年代',
                data: [34.4, 37.6, 68.1, 30.2, 79.7],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgb(153, 102, 255)',
                pointBackgroundColor: 'rgb(153, 102, 255)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(153, 102, 255)'
            }
        ]
    };

    // Emotion Trend Chart
    const emotionCtx = document.getElementById('emotionChart').getContext('2d');
    new Chart(emotionCtx, {
        type: 'line',
        data: emotionData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '感情分析のトレンド'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + '%';
                        }
                    }
                }
            }
        }
    });

    // Theme Comparison Chart
    const themeCtx = document.getElementById('themeChart').getContext('2d');
    new Chart(themeCtx, {
        type: 'radar',
        data: themeData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 100,
                        callback: function(value) {
                            return value === 100 ? value + '%' : '';
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'テーマごとの割合変化'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });


    // Topics Table
    const topicsData = [
        {year: '1980年代', theme: 'ロマンス、夢', background: 'バブル経済の影響', keywords: '「愛」「未来」'},
        {year: '1990年代', theme: '個人の葛藤、孤独', background: 'バブル崩壊、社会不安', keywords: '「孤独」「自由」'},
        {year: '2000年代', theme: '絆、希望', background: 'インターネットの普及、9.11テロ', keywords: '「絆」「明日」'},
        {year: '2010年代', theme: 'SNS文化、多様性', background: 'スマートフォンの普及、グローバル化', keywords: '「SNS」「希望」'},
        {year: '2020年代', theme: 'つながり、日常の価値', background: 'パンデミック、デジタル社会化', keywords: '「つながり」「日常」'}
    ];

    const tableBody = document.querySelector('#topicsTable tbody');
    topicsData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.year}</td>
            <td>${row.theme}</td>
            <td>${row.background}</td>
            <td>${row.keywords}</td>
        `;
        tr.addEventListener('click', () => updateEraContent(row.year));
        tableBody.appendChild(tr);
    });

    // Era Story and Keyword Timeline
    const eraContent = {
        '1980年代': {
            story: '1980年代は、バブル経済の影響を受け、楽観的で華やかな雰囲気が音楽にも反映されました。「夢」や「愛」といったポジティブなテーマが多く取り上げられ、未来への希望に満ちた歌詞が特徴的でした。',
            timeline: '1980年代の「夢」と「愛」は、経済的な繁栄と個人の成功への期待を反映していました。この時代のキーワードは、希望に満ちた未来を象徴していました。'
        },
        '1990年代': {
            story: '1990年代は、バブル崩壊による社会不安を反映し、孤独や葛藤をテーマにした歌詞が増加しました。この時期の音楽は、個人の内面や社会との関係性を深く掘り下げる傾向がありました。',
            timeline: '1990年代に入ると、「孤独」や「自由」といったキーワードが浮上しました。これは社会の変化と個人の価値観の変容を表しています。'
        },
        '2000年代': {
            story: '2000年代は、インターネットの普及と9.11テロの影響を受け、人々のつながりや希望を求める傾向が強まりました。「絆」や「明日」といったキーワードが多く使われ、困難な時代を乗り越えようとする意志が歌詞に反映されました。',
            timeline: '2000年代では「絆」と「明日」がキーワードとして浮上しました。テクノロジーの進歩と同時に、人々は人間関係の大切さと未来への希望を歌に求めるようになりました。'
        },
        '2010年代': {
            story: '2010年代は、スマートフォンとSNSの普及により、コミュニケーションの形が大きく変化しました。多様性や個性を尊重する風潮も強まり、それらのテーマが歌詞にも反映されるようになりました。',
            timeline: '2010年代に入ると、「SNS」や「希望」といったキーワードが目立つようになりました。デジタル時代における人々のつながり方や、多様化する社会への期待が歌詞に表れています。'
        },
        '2020年代': {
            story: '2020年代は、パンデミックやデジタル社会化の影響を強く受けています。SNSを通じたつながりや、日常の大切さを再認識する内容が増加し、共感や連帯を求める傾向が見られます。',
            timeline: '2020年代では「つながり」や「日常」がキーワードとして浮上しています。デジタル化が進む中で、人々は新しい形の絆や、日々の生活の価値を歌に求めるようになりました。'
        }
    };

    function updateEraContent(era) {
        document.getElementById('storyContent').innerHTML = `<p>${eraContent[era].story}</p>`;
        document.getElementById('timelineContent').innerHTML = `<p>${eraContent[era].timeline}</p>`;
    }

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