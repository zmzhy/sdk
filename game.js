const VALORANT_AGENTS = [
    {"id":1,"name":"Jett","role":"Duelist","avatar":"J","power":82,"rating":"A","price":180000,"aim":85,"gameSense":75,"leadership":70,"utility":80,"isPro":false},
    {"id":2,"name":"Phoenix","role":"Duelist","avatar":"P","power":78,"rating":"B","price":140000,"aim":80,"gameSense":72,"leadership":74,"utility":76,"isPro":false},
    {"id":3,"name":"Raze","role":"Duelist","avatar":"R","power":85,"rating":"A","price":200000,"aim":88,"gameSense":73,"leadership":72,"utility":82,"isPro":false},
    {"id":4,"name":"Reyna","role":"Duelist","avatar":"Y","power":90,"rating":"S","price":320000,"aim":92,"gameSense":82,"leadership":78,"utility":86,"isPro":false},
    {"id":5,"name":"Yoru","role":"Duelist","avatar":"Ÿ","power":75,"rating":"B","price":120000,"aim":76,"gameSense":78,"leadership":68,"utility":70,"isPro":false},
    {"id":6,"name":"Neon","role":"Duelist","avatar":"N","power":77,"rating":"B","price":130000,"aim":79,"gameSense":71,"leadership":69,"utility":78,"isPro":false},
    {"id":7,"name":"Iso","role":"Duelist","avatar":"I","power":76,"rating":"B","price":125000,"aim":82,"gameSense":68,"leadership":72,"utility":74,"isPro":false},
    {"id":8,"name":"Sova","role":"Initiator","avatar":"S","power":80,"rating":"A","price":170000,"aim":75,"gameSense":88,"leadership":85,"utility":82,"isPro":false},
    {"id":9,"name":"Breach","role":"Initiator","avatar":"B","power":74,"rating":"B","price":110000,"aim":68,"gameSense":77,"leadership":75,"utility":80,"isPro":false},
    {"id":10,"name":"KAY/O","role":"Initiator","avatar":"K","power":76,"rating":"B","price":135000,"aim":74,"gameSense":79,"leadership":80,"utility":78,"isPro":false},
    {"id":11,"name":"Gekko","role":"Initiator","avatar":"G","power":73,"rating":"B","price":105000,"aim":66,"gameSense":76,"leadership":70,"utility":82,"isPro":false},
    {"id":12,"name":"Fade","role":"Initiator","avatar":"F","power":72,"rating":"C","price":95000,"aim":65,"gameSense":74,"leadership":68,"utility":79,"isPro":false},
    {"id":13,"name":"Harbor","role":"Controller","avatar":"H","power":71,"rating":"C","price":90000,"aim":62,"gameSense":72,"leadership":66,"utility":82,"isPro":false},
    {"id":14,"name":"Smoke","role":"Controller","avatar":"Sm","power":70,"rating":"C","price":85000,"aim":60,"gameSense":75,"leadership":72,"utility":78,"isPro":false},
    {"id":15,"name":"Viper","role":"Controller","avatar":"V","power":79,"rating":"A","price":160000,"aim":70,"gameSense":85,"leadership":82,"utility":84,"isPro":false},
    {"id":16,"name":"Omen","role":"Controller","avatar":"O","power":77,"rating":"B","price":145000,"aim":72,"gameSense":80,"leadership":78,"utility":78,"isPro":false},
    {"id":17,"name":"Astra","role":"Controller","avatar":"A","power":75,"rating":"B","price":130000,"aim":68,"gameSense":82,"leadership":80,"utility":75,"isPro":false},
    {"id":18,"name":"Sage","role":"Sentinel","avatar":"Sg","power":73,"rating":"B","price":100000,"aim":65,"gameSense":75,"leadership":85,"utility":67,"isPro":false},
    {"id":19,"name":"Cypher","role":"Sentinel","avatar":"C","power":78,"rating":"B","price":150000,"aim":72,"gameSense":86,"leadership":70,"utility":84,"isPro":false},
    {"id":20,"name":"Killjoy","role":"Sentinel","avatar":"Kj","power":74,"rating":"B","price":115000,"aim":70,"gameSense":78,"leadership":72,"utility":76,"isPro":false},
    {"id":21,"name":"Chamber","role":"Sentinel","avatar":"Ch","power":83,"rating":"A","price":190000,"aim":88,"gameSense":77,"leadership":82,"utility":74,"isPro":false},
    {"id":22,"name":"Deadlock","role":"Sentinel","avatar":"D","power":70,"rating":"C","price":80000,"aim":64,"gameSense":73,"leadership":75,"utility":68,"isPro":false},
    {"id":23,"name":"Vyse","role":"Sentinel","avatar":"Vy","power":72,"rating":"C","price":90000,"aim":63,"gameSense":75,"leadership":71,"utility":72,"isPro":false},
    {"id":24,"name":"Clove","role":"Duelist","avatar":"Cl","power":72,"rating":"B","price":110000,"aim":74,"gameSense":76,"leadership":72,"utility":70,"isPro":false},
    {"id":25,"name":"Tejo","role":"Initiator","avatar":"Te","power":74,"rating":"B","price":115000,"aim":72,"gameSense":80,"leadership":76,"utility":78,"isPro":false},
    {"id":26,"name":"Waylay","role":"Initiator","avatar":"Wa","power":73,"rating":"B","price":105000,"aim":70,"gameSense":78,"leadership":74,"utility":80,"isPro":false},
    {"id":27,"name":"Warden","role":"Sentinel","avatar":"Wd","power":75,"rating":"B","price":130000,"aim":72,"gameSense":80,"leadership":78,"utility":82,"isPro":false}
];

const REAL_PRO_PLAYERS = [
    {"id":"p1","name":"TenZ","realName":"Tyson Ngo","country":"🇨🇦","team":"Sentinels","role":"Duelist","avatar":"TZ","power":97,"rating":"S","price":1500000,"aim":98,"gameSense":92,"leadership":88,"utility":85,"isPro":true,"bio":"VCT 传奇，全球公认最强决斗者之一"},
    {"id":"p2","name":"boaster","realName":"Jake Howlett","country":"🇬🇧","team":"FNATIC","role":"Duelist","avatar":"Bo","power":94,"rating":"S","price":1200000,"aim":91,"gameSense":94,"leadership":96,"utility":82,"isPro":true,"bio":"FNATIC 队长，2023 世界冠军 IGL"},
    {"id":"p3","name":"Alfajer","realName":"Emil Bender","country":"🇳🇴","team":"FNATIC","role":"Duelist","avatar":"Al","power":95,"rating":"S","price":1300000,"aim":95,"gameSense":88,"leadership":80,"utility":84,"isPro":true,"bio":"VCT 2023 年度最佳选手"},
    {"id":"p4","name":"Derke","realName":"Nikita Sirmac","country":"🇫🇮","team":"FNATIC","role":"Duelist","avatar":"Dr","power":92,"rating":"S","price":1000000,"aim":93,"gameSense":85,"leadership":78,"utility":80,"isPro":true,"bio":"芬兰狙神！2023 年随 FNC 夺 Champions 后转会 NAVI，继续以恐怖的远距离火力压制对手。NAVI 在 Valorant 的舰队核心。"},
    {"id":"p5","name":"Leo","realName":"Mikko Juntunen","country":"🇫🇮","team":"FNATIC","role":"Initiator","avatar":"Le","power":91,"rating":"S","price":950000,"aim":82,"gameSense":94,"leadership":90,"utility":92,"isPro":true,"bio":"TLBR 年轻控场，以稳定发挥著称。巴西 Valorant 新生代。"},
    {"id":"p6","name":"Aspas","realName":"Erick Santos","country":"🇧🇷","team":"LOUD","role":"Duelist","avatar":"As","power":93,"rating":"S","price":1100000,"aim":94,"gameSense":86,"leadership":78,"utility":82,"isPro":true,"bio":"美洲第一决斗者，LOUD 王牌"},
    {"id":"p7","name":"Less","realName":"Lucas Torres","country":"🇧🇷","team":"LOUD","role":"Duelist","avatar":"Ls","power":91,"rating":"S","price":950000,"aim":92,"gameSense":84,"leadership":76,"utility":80,"isPro":true,"bio":"巴西双子星之一"},
    {"id":"p8","name":"saadhak","realName":"Matheus Seide","country":"🇧🇷","team":"LOUD","role":"Controller","avatar":"Sa","power":90,"rating":"S","price":900000,"aim":80,"gameSense":92,"leadership":94,"utility":90,"isPro":true,"bio":"LOUD 队长，顶级控场者"},
    {"id":"p9","name":"cauanzin","realName":"Cauan dos Santos","country":"🇧🇷","team":"LOUD","role":"Initiator","avatar":"Ca","power":88,"rating":"A","price":650000,"aim":78,"gameSense":90,"leadership":86,"utility":88,"isPro":true,"bio":"巴西先锋新秀"},
    {"id":"p10","name":"Munchkin","realName":"Byeongmun Lee","country":"🇰🇷","team":"DRX","role":"Sentinel","avatar":"Mu","power":89,"rating":"A","price":750000,"aim":82,"gameSense":88,"leadership":78,"utility":92,"isPro":true,"bio":"DRX 王牌哨位，Champion 得主"},
    {"id":"p11","name":"Zest","realName":"Kim Hongseok","country":"🇰🇷","team":"DRX","role":"Duelist","avatar":"Ze","power":90,"rating":"S","price":950000,"aim":93,"gameSense":82,"leadership":75,"utility":80,"isPro":true,"bio":"韩国顶级决斗者"},
    {"id":"p12","name":"MaKo","realName":"Kim Minkyung","country":"🇰🇷","team":"DRX","role":"Controller","avatar":"Ma","power":87,"rating":"A","price":600000,"aim":76,"gameSense":90,"leadership":88,"utility":86,"isPro":true,"bio":"DRX 队长"},
    {"id":"p13","name":"Stax","realName":"Kim Goo-taek","country":"🇰🇷","team":"DRX","role":"Controller","avatar":"St","power":86,"rating":"A","price":550000,"aim":74,"gameSense":88,"leadership":82,"utility":88,"isPro":true,"bio":"DRX 老将"},
    {"id":"p14","name":"Rb","realName":"Goo Min-kang","country":"🇰🇷","team":"DRX","role":"Initiator","avatar":"Rb","power":85,"rating":"A","price":500000,"aim":76,"gameSense":86,"leadership":80,"utility":88,"isPro":true,"bio":"DRX 先锋"},
    {"id":"p15","name":"ZmjjKK","realName":"郑永康","country":"🇨🇳","team":"EDward Gaming","role":"Duelist","avatar":"Zm","power":88,"rating":"A","price":650000,"aim":91,"gameSense":80,"leadership":72,"utility":78,"isPro":true,"bio":"中国第一决斗者，EDG 核心"},
    {"id":"p16","name":"CHICHOO","realName":"周可强","country":"🇨🇳","team":"EDward Gaming","role":"Initiator","avatar":"Ch","power":86,"rating":"A","price":550000,"aim":78,"gameSense":88,"leadership":86,"utility":86,"isPro":true,"bio":"EDG 队长兼先锋"},
    {"id":"p17","name":"Life","realName":"肖功伟","country":"🇨🇳","team":"EDward Gaming","role":"Sentinel","avatar":"Li","power":84,"rating":"A","price":450000,"aim":76,"gameSense":86,"leadership":74,"utility":88,"isPro":true,"bio":"EDG 哨位"},
    {"id":"p18","name":"Haodong","realName":"郭浩东","country":"🇨🇳","team":"EDward Gaming","role":"Controller","avatar":"Hd","power":85,"rating":"A","price":500000,"aim":74,"gameSense":88,"leadership":82,"utility":86,"isPro":true,"bio":"EDG 控场者"},
    {"id":"p19","name":"whzy","realName":"王浩哲","country":"🇨🇳","team":"Bilibili Gaming","role":"Duelist","avatar":"Wh","power":83,"rating":"A","price":400000,"aim":88,"gameSense":78,"leadership":70,"utility":75,"isPro":true,"bio":"BLG 决斗者"},
    {"id":"p20","name":"Xingye","realName":"王浩然","country":"🇨🇳","team":"Bilibili Gaming","role":"Controller","avatar":"Xy","power":82,"rating":"B","price":350000,"aim":72,"gameSense":85,"leadership":80,"utility":84,"isPro":true,"bio":"BLG 控场者"},
    {"id":"p21","name":"johnqt","realName":"Johnny Quach","country":"🇰🇷","team":"T1","role":"Initiator","avatar":"Jq","power":87,"rating":"A","price":600000,"aim":80,"gameSense":90,"leadership":92,"utility":86,"isPro":true,"bio":"T1 队长兼先锋"},
    {"id":"p22","name":"xccurate","realName":"Kevin Susanto","country":"🇮🇩","team":"T1","role":"Sentinel","avatar":"Xc","power":85,"rating":"A","price":480000,"aim":78,"gameSense":86,"leadership":78,"utility":88,"isPro":true,"bio":"T1 哨位"},
    {"id":"p23","name":"Sayaplayer","realName":"Kim Woo-yeol","country":"🇰🇷","team":"T1","role":"Duelist","avatar":"Sa","power":88,"rating":"A","price":620000,"aim":90,"gameSense":82,"leadership":74,"utility":78,"isPro":true,"bio":"T1 王牌决斗者"},
    {"id":"p24","name":"d3ffo","realName":"Dmitry Vasiliev","country":"🇷🇺","team":"NAVI","role":"Initiator","avatar":"D3","power":86,"rating":"A","price":520000,"aim":78,"gameSense":88,"leadership":84,"utility":86,"isPro":true,"bio":"委内瑞拉裔先锋，NAVI 的 IGL 大脑。以疯狂的战术创新和阅读比赛能力著称，2023 年 EMEA 最佳 Initiator。"},
    {"id":"p25","name":"ardis","realName":"Ardis Svarenieks","country":"🇱🇻","team":"NAVI","role":"Duelist","avatar":"Ar","power":85,"rating":"A","price":480000,"aim":87,"gameSense":80,"leadership":72,"utility":76,"isPro":true,"bio":"NAVI 决斗者"},
    {"id":"p26","name":"soulcas","realName":"Dom Sullivan","country":"🇬🇧","team":"Team Liquid","role":"Initiator","avatar":"So","power":84,"rating":"B","price":400000,"aim":76,"gameSense":86,"leadership":84,"utility":84,"isPro":true,"bio":"TL 先锋/IGL"},
    {"id":"p27","name":"Benita","realName":"Benita Ramirez","country":"🇺🇸","team":"Gen.G","role":"Sentinel","avatar":"Be","power":83,"rating":"B","price":360000,"aim":74,"gameSense":86,"leadership":80,"utility":88,"isPro":true,"bio":"Gen.G 哨位"},
    {"id":"p28","name":"pringels","realName":"Jason Ng","country":"🇸🇬","team":"Paper Rex","role":"Initiator","avatar":"Pr","power":82,"rating":"B","price":320000,"aim":74,"gameSense":84,"leadership":78,"utility":84,"isPro":true,"bio":"PRX 先锋"},
    {"id":"p29","name":"kamyk","realName":"Karim Benghalia","country":"🇫🇷","team":"Karmine Corp","role":"Sentinel","avatar":"Ka","power":81,"rating":"B","price":280000,"aim":72,"gameSense":84,"leadership":82,"utility":86,"isPro":true,"bio":"KC 哨位/IGL"},
    {"id":"p30","name":"Shroud","realName":"Michael Grzesiek","country":"🇺🇸","team":"Sentinels","role":"Duelist","avatar":"Sh","power":88,"rating":"A","price":650000,"aim":90,"gameSense":82,"leadership":76,"utility":78,"isPro":true,"bio":"传奇主播回归职业赛场"},
    {"id":"p31","name":"Zellsis","realName":"Jordan Montemurro","country":"🇺🇸","team":"Sentinels","role":"Duelist","avatar":"Ze","power":89,"rating":"A","price":700000,"aim":92,"gameSense":82,"leadership":82,"utility":80,"isPro":true,"bio":"Sentinels 队长"},
    {"id":"p32","name":"JohnSudo","realName":"John Sudo","country":"🇺🇸","team":"Sentinels","role":"Controller","avatar":"Jo","power":84,"rating":"A","price":450000,"aim":74,"gameSense":86,"leadership":84,"utility":86,"isPro":true,"bio":"Sentinels 控场者"},
    {"id":"p33","name":"s0m","realName":"Chris Reid","country":"🇺🇸","team":"NRG Esports","role":"Duelist","avatar":"S0","power":90,"rating":"S","price":900000,"aim":93,"gameSense":86,"leadership":80,"utility":82,"isPro":true,"bio":"NRG 王牌决斗者"},
    {"id":"p34","name":"Ardiis","realName":"Ardis Svarenieks","country":"🇱🇻","team":"NRG Esports","role":"Duelist","avatar":"Ar","power":88,"rating":"A","price":700000,"aim":90,"gameSense":82,"leadership":78,"utility":80,"isPro":true,"bio":"NRG 双决斗核心"},
    {"id":"p35","name":"Alexander","realName":"Alexander Satariano","country":"🇲🇹","team":"NRG Esports","role":"Controller","avatar":"Al","power":87,"rating":"A","price":600000,"aim":80,"gameSense":90,"leadership":92,"utility":88,"isPro":true,"bio":"NRG 队长兼控场"},
    {"id":"p36","name":"crashies","realName":"Brian Corrigan","country":"🇺🇸","team":"NRG Esports","role":"Sentinel","avatar":"Cr","power":85,"rating":"A","price":500000,"aim":78,"gameSense":86,"leadership":80,"utility":88,"isPro":true,"bio":"NRG 哨位"},
    {"id":"p37","name":"Derke","realName":"Nikita Sirmac","country":"🇫🇮","team":"Team Vitality","role":"Duelist","avatar":"Dr","power":91,"rating":"S","price":950000,"aim":93,"gameSense":88,"leadership":80,"utility":82,"isPro":true,"bio":"VIT 决斗者，原 FNATIC"},
    {"id":"p38","name":"Alfajer","realName":"Emil Bender","country":"🇳🇴","team":"Team Vitality","role":"Duelist","avatar":"Aj","power":94,"rating":"S","price":1100000,"aim":95,"gameSense":90,"leadership":82,"utility":85,"isPro":true,"bio":"VIT 核心，2023 最佳选手"},
    {"id":"p39","name":"Crit","realName":"Remo Penn","country":"🇫🇷","team":"Team Vitality","role":"Initiator","avatar":"Cr","power":86,"rating":"A","price":550000,"aim":78,"gameSense":88,"leadership":86,"utility":86,"isPro":true,"bio":"VIT 先锋"},
    {"id":"p40","name":"Leo","realName":"Mikko Juntunen","country":"🇫🇮","team":"Team Vitality","role":"Initiator","avatar":"Le","power":89,"rating":"A","price":750000,"aim":82,"gameSense":92,"leadership":90,"utility":90,"isPro":true,"bio":"VIT 指挥兼先锋"},
    {"id":"p41","name":"Boo","realName":"Anthony Tran","country":"🇺🇸","team":"Cloud9","role":"Initiator","avatar":"Bo","power":86,"rating":"A","price":550000,"aim":80,"gameSense":90,"leadership":88,"utility":86,"isPro":true,"bio":"C9 队长兼先锋"},
    {"id":"p42","name":"xeppa","realName":"Jaden Whitfield","country":"🇺🇸","team":"Cloud9","role":"Duelist","avatar":"Xe","power":87,"rating":"A","price":620000,"aim":89,"gameSense":82,"leadership":78,"utility":80,"isPro":true,"bio":"C9 王牌决斗者"},
    {"id":"p43","name":"qpert","realName":"Josh Lee","country":"🇺🇸","team":"Cloud9","role":"Sentinel","avatar":"Qp","power":84,"rating":"A","price":450000,"aim":78,"gameSense":86,"leadership":82,"utility":88,"isPro":true,"bio":"C9 哨位"},
    {"id":"p44","name":"dapr","realName":"Michael Gulino","country":"🇺🇸","team":"Cloud9","role":"Controller","avatar":"Da","power":85,"rating":"A","price":480000,"aim":76,"gameSense":88,"leadership":84,"utility":86,"isPro":true,"bio":"C9 控场者，原 Sentinels"},
    {"id":"p45","name":"Asuna","realName":"Peter Mazuryk","country":"🇺🇸","team":"100 Thieves","role":"Duelist","avatar":"As","power":86,"rating":"A","price":550000,"aim":88,"gameSense":80,"leadership":74,"utility":76,"isPro":true,"bio":"100T 决斗者"},
    {"id":"p46","name":"Derke","realName":"Nikita Sirmac","country":"🇫🇮","team":"100 Thieves","role":"Duelist","avatar":"De","power":90,"rating":"S","price":850000,"aim":92,"gameSense":86,"leadership":78,"utility":80,"isPro":true,"bio":"100T 核心枪手"},
    {"id":"p47","name":"steel","realName":"Joshua Nissan","country":"🇺🇸","team":"100 Thieves","role":"Controller","avatar":"St","power":84,"rating":"A","price":450000,"aim":74,"gameSense":88,"leadership":90,"utility":86,"isPro":true,"bio":"100T 队长兼控场"},
    {"id":"p48","name":"Jawgemo","realName":"Alexander Morrow","country":"🇺🇸","team":"M80","role":"Duelist","avatar":"Ja","power":85,"rating":"A","price":500000,"aim":89,"gameSense":80,"leadership":76,"utility":78,"isPro":true,"bio":"M80 王牌决斗者"},
    {"id":"p49","name":"neT","realName":"Michael Bernet","country":"🇺🇸","team":"M80","role":"Controller","avatar":"Ne","power":83,"rating":"B","price":380000,"aim":76,"gameSense":86,"leadership":88,"utility":86,"isPro":true,"bio":"M80 队长"},
    {"id":"p50","name":"Johnqt","realName":"Johnny Quach","country":"🇰🇷","team":"Gen.G","role":"Initiator","avatar":"Jq","power":86,"rating":"A","price":550000,"aim":80,"gameSense":88,"leadership":90,"utility":86,"isPro":true,"bio":"Gen.G 队长兼先锋"},
    {"id":"p51","name":"Meteor","realName":"Kim Tae-O","country":"🇰🇷","team":"Gen.G","role":"Controller","avatar":"Me","power":84,"rating":"A","price":450000,"aim":74,"gameSense":86,"leadership":82,"utility":86,"isPro":true,"bio":"Gen.G 教练兼选手"},
    {"id":"p52","name":"pANcada","realName":"Bryan Luna","country":"🇧🇷","team":"LOUD","role":"Controller","avatar":"Pa","power":87,"rating":"A","price":600000,"aim":78,"gameSense":90,"leadership":88,"utility":88,"isPro":true,"bio":"LOUD 控场大师"},
    {"id":"p53","name":"Tuyz","realName":"Arthur Andrade","country":"🇧🇷","team":"LOUD","role":"Duelist","avatar":"Tu","power":86,"rating":"A","price":550000,"aim":90,"gameSense":82,"leadership":76,"utility":80,"isPro":true,"bio":"LOUD 新星决斗者"},
    {"id":"p54","name":"d4v41","realName":"Muhammad Rizky","country":"🇮🇩","team":"Paper Rex","role":"Sentinel","avatar":"D4","power":84,"rating":"A","price":450000,"aim":78,"gameSense":86,"leadership":84,"utility":88,"isPro":true,"bio":"PRX 队长兼哨位"},
    {"id":"p55","name":"f0rsakeN","realName":"Jason Susanto","country":"🇸🇬","team":"Paper Rex","role":"Duelist","avatar":"F0","power":85,"rating":"A","price":480000,"aim":88,"gameSense":82,"leadership":74,"utility":78,"isPro":true,"bio":"PRX 王牌"},
    {"id":"p56","name":"SkRossi","realName":"Abhishek Chaudhary","country":"🇮🇳","team":"Global Esports","role":"Duelist","avatar":"Sk","power":82,"rating":"B","price":320000,"aim":87,"gameSense":78,"leadership":72,"utility":75,"isPro":true,"bio":"印度第一决斗者"},
    {"id":"p57","name":"Laz","realName":"Koji Nakagawa","country":"🇯🇵","team":"ZETA DIVISION","role":"Initiator","avatar":"Lz","power":83,"rating":"B","price":360000,"aim":76,"gameSense":86,"leadership":88,"utility":86,"isPro":true,"bio":"ZETA 队长"},
    {"id":"p58","name":"Dep","realName":"Yuki Matsumoto","country":"🇯🇵","team":"ZETA DIVISION","role":"Duelist","avatar":"De","power":82,"rating":"B","price":320000,"aim":86,"gameSense":80,"leadership":72,"utility":76,"isPro":true,"bio":"ZETA 王牌"},
    {"id":"p59","name":"Kohada","realName":"Ryuma Yokota","country":"🇯🇵","team":"ZETA DIVISION","role":"Controller","avatar":"Kh","power":80,"rating":"B","price":260000,"aim":72,"gameSense":84,"leadership":82,"utility":84,"isPro":true,"bio":"ZETA 控场者"},
    {"id":"p60","name":"Suygetsu","realName":"Alexis Botello","country":"🇲🇽","team":"The Guard","role":"Duelist","avatar":"Su","power":80,"rating":"B","price":280000,"aim":85,"gameSense":78,"leadership":70,"utility":74,"isPro":true,"bio":"TG 决斗者"},
    {"id":"p61","name":"LASTK1NG","realName":"Logan Pinkney","country":"🇺🇸","team":"The Guard","role":"Controller","avatar":"La","power":79,"rating":"B","price":250000,"aim":72,"gameSense":84,"leadership":86,"utility":84,"isPro":true,"bio":"TG 队长"},
    {"id":"p62","name":"ZmjjKK","realName":"郑永康","country":"🇨🇳","team":"Wolves Esports","role":"Duelist","avatar":"Zm","power":87,"rating":"A","price":600000,"aim":91,"gameSense":82,"leadership":74,"utility":80,"isPro":true,"bio":"WOL 核心，原 EDG"},
    {"id":"p63","name":"Xccurate","realName":"Kevin Susanto","country":"🇮🇩","team":"Wolves Esports","role":"Sentinel","avatar":"Xc","power":83,"rating":"B","price":360000,"aim":78,"gameSense":84,"leadership":80,"utility":86,"isPro":true,"bio":"WOL 哨位"},
    {"id":"p64","name":"Sayaplayer","realName":"Kim Woo-yeol","country":"🇰🇷","team":"Gen.G","role":"Duelist","avatar":"Sa","power":88,"rating":"A","price":680000,"aim":91,"gameSense":84,"leadership":76,"utility":80,"isPro":true,"bio":"Gen.G 王牌决斗者"},
    {"id":"p65","name":"Munchkin","realName":"Byeongmun Lee","country":"🇰🇷","team":"Gen.G","role":"Sentinel","avatar":"Mu","power":87,"rating":"A","price":580000,"aim":82,"gameSense":86,"leadership":78,"utility":90,"isPro":true,"bio":"Gen.G 哨位大师"},
    {"id":"p66","name":"kamyk","realName":"Karim Benghalia","country":"🇫🇷","team":"Giants Gaming","role":"Sentinel","avatar":"Ka","power":80,"rating":"B","price":280000,"aim":74,"gameSense":82,"leadership":84,"utility":84,"isPro":true,"bio":"GIA 队长"},
    {"id":"p67","name":"Tomaszy","realName":"Tomasz Machowski","country":"🇵🇱","team":"Giants Gaming","role":"Duelist","avatar":"To","power":81,"rating":"B","price":300000,"aim":85,"gameSense":78,"leadership":72,"utility":76,"isPro":true,"bio":"GIA 决斗者"},
    {"id":"p68","name":"Whirlwind","realName":"Lee Tae-wook","country":"🇰🇷","team":"DRX","role":"Controller","avatar":"Wh","power":85,"rating":"A","price":480000,"aim":76,"gameSense":86,"leadership":84,"utility":88,"isPro":true,"bio":"DRX 新生代控场，以极其精准的烟雾和过人的大局观闻名。是 DRX 重返巅峰的关键拼图，2024 年 Pacific 联赛最佳 Controller 候选人。"},
    {"id":"p69","name":"Buzz","realName":"Park Byeong-cheol","country":"🇰🇷","team":"DRX","role":"Duelist","avatar":"Bu","power":87,"rating":"A","price":580000,"aim":90,"gameSense":82,"leadership":74,"utility":78,"isPro":true,"bio":"韩国最耀眼的新星决斗者！17 岁就在 DRX 打上主力，以无畏的进攻和超越年龄的稳定性震惊 VCT。韩国下一个天才。"},
    {"id":"p70","name":"Derke","realName":"Nikita Sirmac","country":"🇫🇮","team":"NAVI","role":"Duelist","avatar":"De","power":89,"rating":"A","price":680000,"aim":91,"gameSense":85,"leadership":78,"utility":80,"isPro":true,"bio":"NAVI 核心枪手"},
    {"id":"p71","name":"juanpi","realName":"Juan Perez","country":"🇻🇪","team":"NAVI","role":"Initiator","avatar":"Jp","power":84,"rating":"B","price":420000,"aim":76,"gameSense":86,"leadership":84,"utility":86,"isPro":true,"bio":"NAVI 先锋"},
    {"id":"p72","name":"MehL","realName":"Mehdi Lehaire","country":"🇧🇪","team":"Team Liquid","role":"Controller","avatar":"Me","power":83,"rating":"B","price":380000,"aim":74,"gameSense":85,"leadership":80,"utility":84,"isPro":true,"bio":"比利时老将，Team Liquid 稳定的控场。职业生涯跨 CS:GO 和 Valorant，经验极其丰富。2022 Champions 亚军成员。"},
    {"id":"p73","name":"Adrenaline","realName":"Mauro Gaggero","country":"🇦🇷","team":"Team Liquid","role":"Duelist","avatar":"Ad","power":85,"rating":"A","price":450000,"aim":88,"gameSense":80,"leadership":74,"utility":76,"isPro":true,"bio":"阿根廷火焰，TL 的进攻核心。以激情四射的打法和永不放弃的精神著称，是 Americas 赛区最受欢迎的选手之一。"},
    {"id":"p74","name":"dizzy","realName":"Carson Orozco","country":"🇺🇸","team":"Team Liquid","role":"Duelist","avatar":"Dz","power":84,"rating":"B","price":400000,"aim":86,"gameSense":78,"leadership":72,"utility":74,"isPro":true,"bio":"美国 18 岁新星，从挑战者联赛直接升入 VCT 国际。天赋异禀的 Aim，被视为 TL 未来的希望。"},
    {"id":"p75","name":"Xulu","realName":"Mateo Orbegozo","country":"🇦🇷","team":"9z Team","role":"Initiator","avatar":"Xu","power":80,"rating":"B","price":280000,"aim":72,"gameSense":82,"leadership":86,"utility":84,"isPro":true,"bio":"9z 队长兼 IGL，前 KRÜ Esports 核心。阿根廷最聪明的指挥，以坚如磐石的防守体系闻名美洲。"},
    {"id":"p76","name":"delucca","realName":"Nicolas Delucca","country":"🇦🇷","team":"9z Team","role":"Duelist","avatar":"De","power":81,"rating":"B","price":300000,"aim":84,"gameSense":76,"leadership":70,"utility":72,"isPro":true,"bio":"9z 的王牌决斗者，以稳健的步枪和冷静的心态著称。和 Xulu 组成了 9z 的双人核心。"},
    {"id":"p77","name":"Saadhak","realName":"Matheus Seide","country":"🇧🇷","team":"FURIA","role":"Controller","avatar":"Sa","power":86,"rating":"A","price":520000,"aim":78,"gameSense":88,"leadership":90,"utility":88,"isPro":true,"bio":"前 LOUD 传奇队长！2022 Champions 冠军，2024 年转会 FURIA 继续他的辉煌。美洲最伟大的 IGL 之一，控场艺术大师。"},
    {"id":"p78","name":"murizz","realName":"Murillo Arruda","country":"🇧🇷","team":"FURIA","role":"Duelist","avatar":"Mu","power":84,"rating":"B","price":420000,"aim":87,"gameSense":80,"leadership":74,"utility":78,"isPro":true,"bio":"FURIA 火力担当，巴西新生代决斗者。以极其激进的 Raze 玩法闻名，是美洲最令人兴奋的年轻枪男。"},
    {"id":"p79","name":"Luken","realName":"Luqueten","country":"🇦🇷","team":"2Game Esports","role":"Duelist","avatar":"Lu","power":79,"rating":"B","price":260000,"aim":83,"gameSense":75,"leadership":70,"utility":72,"isPro":true,"bio":"2Game Esports 阿根廷狙神。以华丽的操作著称，但队伍整体实力有限。美洲赛区的\"孤胆英雄\"。"},
    {"id":"p80","name":"Shion","realName":"Shin Tae-hee","country":"🇰🇷","team":"T1","role":"Controller","avatar":"Sh","power":84,"rating":"A","price":440000,"aim":74,"gameSense":86,"leadership":82,"utility":86,"isPro":true,"bio":"T1 韩国控场新星！以完美的烟雾部署和冷静指挥著称。T1 Valorant 分部的建队基石。"},
    {"id":"p81","name":"Zer0","realName":"Alexis Bernier","country":"🇫🇷","team":"Karmine Corp","role":"Initiator","avatar":"Ze","power":82,"rating":"B","price":320000,"aim":74,"gameSense":84,"leadership":82,"utility":84,"isPro":true,"bio":"法国先锋新秀，KC 培养的潜力股。以灵动的 Gekko 玩法和独特的战术创意闻名。"},
    {"id":"p82","name":"xEzo","realName":"Lucas","country":"🇫🇷","team":"Karmine Corp","role":"Duelist","avatar":"xE","power":83,"rating":"B","price":340000,"aim":85,"gameSense":78,"leadership":72,"utility":76,"isPro":true,"bio":"KC 年轻决斗者，凭借稳定发挥在 KC 阵容中站稳脚跟。法国 Valorant 的未来。"},
    {"id":"p83","name":"Lakia","realName":"Kim Jong-min","country":"🇰🇷","team":"Team Secret","role":"Duelist","avatar":"La","power":82,"rating":"B","price":320000,"aim":85,"gameSense":78,"leadership":72,"utility":74,"isPro":true,"bio":"前 ZETA DIVISION 韩国老将，转会 Team Secret 后继续征战 Pacific。经验丰富的全能选手。"},
    {"id":"p84","name":"Jinggg","realName":"Wang Jingjie","country":"🇸🇬","team":"Team Secret","role":"Initiator","avatar":"Ji","power":83,"rating":"B","price":340000,"aim":76,"gameSense":85,"leadership":84,"utility":84,"isPro":true,"bio":"新加坡华裔先锋！2023 年 VCT Pacific 最佳 Initiator，以疯狂的 Neon 和 KAY/O 玩法著称。前 PRX 明星，转会 TS 后继续闪耀。"},
    {"id":"p85","name":"Baba","realName":"Benedict Ang","country":"🇸🇬","team":"Team Secret","role":"Sentinel","avatar":"Ba","power":80,"rating":"B","price":280000,"aim":74,"gameSense":82,"leadership":80,"utility":84,"isPro":true,"bio":"新加坡哨位老将，Team Secret 的定海神针。以极其稳健的 Cypher 防守体系著称。"},
    {"id":"p86","name":"Zerst","realName":"Ngo Tan Phat","country":"🇻🇳","team":"TNC Predator","role":"Controller","avatar":"Ze","power":79,"rating":"B","price":260000,"aim":72,"gameSense":82,"leadership":80,"utility":82,"isPro":true,"bio":"越南裔控场，TNC Predator 的队长兼指挥。带领菲律宾战队在 Pacific 赛区苦苦支撑。"},
    {"id":"p87","name":"KKuoh","realName":"Kuo Hao-wei","country":"🇹🇼","team":"TNC Predator","role":"Duelist","avatar":"KK","power":78,"rating":"B","price":240000,"aim":82,"gameSense":74,"leadership":68,"utility":72,"isPro":true,"bio":"台湾小将，TNC 的进攻核心。年纪虽轻但打法老练，是中华台北 Valorant 的希望。"},
    {"id":"p88","name":"Rapid","realName":"Rapid Mark","country":"🇵🇭","team":"Bren Esports","role":"Initiator","avatar":"Ra","power":77,"rating":"B","price":220000,"aim":72,"gameSense":80,"leadership":82,"utility":82,"isPro":true,"bio":"菲律宾老炮，Bren 的队长兼先锋。以多年电竞经验带领新星队伍在 Pacific 打拼。"},
    {"id":"p89","name":"Echo","realName":"Gerald Jarvis","country":"🇵🇭","team":"Bren Esports","role":"Duelist","avatar":"Ec","power":78,"rating":"B","price":240000,"aim":81,"gameSense":72,"leadership":68,"utility":70,"isPro":true,"bio":"菲律宾年轻决斗者，Bren 的火力担当。以敢打敢拼的风格在东南亚崭露头角。"},
    {"id":"p90","name":"Khalid","realName":"Khalid Alharbi","country":"🇸🇦","team":"Falcons Esports","role":"Duelist","avatar":"Kh","power":83,"rating":"B","price":340000,"aim":86,"gameSense":78,"leadership":74,"utility":76,"isPro":true,"bio":"沙特阿拉伯最强 Valorant 选手！Falcons 的王牌决斗者，以精准到恐怖的 Aim 在 EMEA 立足。阿拉伯 Valorant 第一人。"},
    {"id":"p91","name":"Anees","realName":"Anees Ahmed","country":"🇧🇭","team":"Falcons Esports","role":"Initiator","avatar":"An","power":82,"rating":"B","price":320000,"aim":74,"gameSense":84,"leadership":84,"utility":84,"isPro":true,"bio":"巴林队长，Falcons 的 IGL。以聪明的战术和冷静指挥带领中东新贵冲击 EMEA。"},
    {"id":"p92","name":"XFL","realName":"Enes Ekin","country":"🇹🇷","team":"BBL Esports","role":"Duelist","avatar":"XF","power":81,"rating":"B","price":300000,"aim":84,"gameSense":76,"leadership":72,"utility":74,"isPro":true,"bio":"土耳其枪男，BBL 的进攻核心。以极其凶猛的进攻风格著称，是 EMEA 赛区最被低估的选手之一。"},
    {"id":"p93","name":"kRm","realName":"Karaman","country":"🇹🇷","team":"BBL Esports","role":"Controller","avatar":"kR","power":80,"rating":"B","price":280000,"aim":72,"gameSense":82,"leadership":84,"utility":82,"isPro":true,"bio":"BBL 队长兼控场，土耳其 Valorant 的旗帜人物。带领 BBL 在 EMEA 证明土耳其电竞的实力。"},
    {"id":"p94","name":"Jony","realName":"Jonathan Villalon","country":"🇪🇸","team":"Case Esports","role":"Duelist","avatar":"Jo","power":79,"rating":"B","price":260000,"aim":82,"gameSense":74,"leadership":70,"utility":72,"isPro":true,"bio":"西班牙新星，Case Esports 的王牌。以华丽的个人操作闻名，伊比利亚半岛 Valorant 的未来之星。"},
    {"id":"p95","name":"Link","realName":"Link","country":"🇫🇷","team":"Crew Esports","role":"Initiator","avatar":"Li","power":78,"rating":"B","price":240000,"aim":72,"gameSense":80,"leadership":82,"utility":82,"isPro":true,"bio":"法国年轻队长，Crew Esports 的领袖。在 EMEA 低级联赛打拼，期待冲上顶级。"},
    {"id":"p96","name":"Mystic","realName":"Matias","country":"🇨🇱","team":"KRU Esports","role":"Duelist","avatar":"My","power":79,"rating":"B","price":260000,"aim":83,"gameSense":75,"leadership":70,"utility":72,"isPro":true,"bio":"智利枪男，KRU Esports 的进攻核心。带领智利战队在美洲顶级联赛中求生存。"},
    {"id":"p97","name":"dead","realName":"Santiago","country":"🇦🇷","team":"9z Team","role":"Controller","avatar":"De","power":80,"rating":"B","price":280000,"aim":74,"gameSense":82,"leadership":84,"utility":84,"isPro":true,"bio":"前 KRÜ 控场大师，9z Team 的战术核心。以\"死亡之眼\"般的烟雾部署闻名，名字就是他的武器。"},
    {"id":"p98","name":"Yang","realName":"Yang Zhaorong","country":"🇨🇳","team":"Invictus Gaming","role":"Duelist","avatar":"Ya","power":85,"rating":"A","price":460000,"aim":88,"gameSense":80,"leadership":74,"utility":76,"isPro":true,"bio":"中国新一代王牌！IG 的进攻核心，以精准到可怕的枪法在 CN 赛区无敌。被誉为中国的 TenZ。"},
    {"id":"p99","name":"Coldness","realName":"Leng","country":"🇨🇳","team":"Invictus Gaming","role":"Controller","avatar":"Co","power":84,"rating":"A","price":420000,"aim":76,"gameSense":86,"leadership":84,"utility":86,"isPro":true,"bio":"IG 队长兼控场，中国 Valorant 最聪明的指挥。以冷静到冷酷的战术部署带领 IG 冲击 CN 冠军。"},
    {"id":"p100","name":"Jue","realName":"Zhu Jue","country":"🇨🇳","team":"FunPlus Phoenix","role":"Duelist","avatar":"Ju","power":84,"rating":"B","price":400000,"aim":87,"gameSense":78,"leadership":72,"utility":74,"isPro":true,"bio":"FPX 的进攻担当，中国最被看好的年轻决斗者之一。打法凶猛且高效，是 FPX 金凤凰的利爪。"},
    {"id":"p101","name":"Haoye","realName":"Liu Haoye","country":"🇨🇳","team":"JD Gaming","role":"Initiator","avatar":"Ha","power":83,"rating":"B","price":360000,"aim":76,"gameSense":84,"leadership":82,"utility":84,"isPro":true,"bio":"JDG 的先锋指挥，以精准的信息收集和战术调动著称。京东战队的战术大脑。"},
    {"id":"p102","name":"Chen","realName":"Chen Sicheng","country":"🇨🇳","team":"Toutiao Gaming","role":"Sentinel","avatar":"Ch","power":81,"rating":"B","price":300000,"aim":74,"gameSense":82,"leadership":78,"utility":86,"isPro":true,"bio":"TTG 的稳定哨位，以可靠的防守和关键时刻的爆发著称。年轻但成熟。"},
    {"id":"p103","name":"JDM","realName":"JDM","country":"🇺🇸","team":"Gamelanders","role":"Controller","avatar":"JD","power":82,"rating":"B","price":320000,"aim":74,"gameSense":84,"leadership":84,"utility":84,"isPro":true,"bio":"Gamelanders 队长兼控场，北美挑战者联赛的老兵。多年坚持只为打进 VCT 国际的梦想。"},
    {"id":"p104","name":"Turtle","realName":"Turtle","country":"🇺🇸","team":"NRG 2","role":"Duelist","avatar":"Tu","power":80,"rating":"B","price":280000,"aim":83,"gameSense":76,"leadership":72,"utility":74,"isPro":true,"bio":"NRG 2 的超级新星！被认为是 NRG 一队的未来继承人，Aim 天赋爆棚。NRG 培养的下一个 s0m。"},
    {"id":"p105","name":"gloco","realName":"Gloco","country":"🇵🇭","team":"TNC Predator","role":"Initiator","avatar":"Gl","power":77,"rating":"C","price":200000,"aim":70,"gameSense":80,"leadership":82,"utility":80,"isPro":true,"bio":"菲律宾 TNC 的先锋老将，以丰富经验指导队伍。Dota 2 转 Valorant 的多项目选手。"},
    {"id":"p106","name":"Bruno","realName":"Bruno","country":"🇧🇷","team":"Team Liquid Brazil","role":"Duelist","avatar":"Br","power":82,"rating":"B","price":320000,"aim":85,"gameSense":78,"leadership":72,"utility":74,"isPro":true,"bio":"Team Liquid Brazil 的巴西狙神，以稳定的远距离火力著称。巴西新生代枪男。"},
    {"id":"p107","name":"guerra","realName":"Guerra","country":"🇧🇷","team":"FURIA","role":"Sentinel","avatar":"gu","power":81,"rating":"B","price":300000,"aim":75,"gameSense":84,"leadership":84,"utility":86,"isPro":true,"bio":"FURIA 教练兼哨位！身兼两职的传奇，既是场上指挥官又是场下导师。前 CS:GO 职业选手。"},
    {"id":"p108","name":"Leo","realName":"Leo Junior","country":"🇧🇷","team":"Team Liquid Brazil","role":"Controller","avatar":"LJ","power":80,"rating":"B","price":280000,"aim":72,"gameSense":82,"leadership":82,"utility":84,"isPro":true,"bio":"TLBR 控场者"},
    {"id":"p109","name":"M80player","realName":"Player X","country":"🇺🇸","team":"M80","role":"Initiator","avatar":"M8","power":80,"rating":"B","price":280000,"aim":74,"gameSense":82,"leadership":82,"utility":82,"isPro":true,"bio":"M80 替补先锋，偶尔上场时有惊人表现。北美的隐藏天才。"},
    {"id":"p110","name":"PRX2","realName":"PRX Player","country":"🇸🇬","team":"Paper Rex","role":"Controller","avatar":"PR","power":82,"rating":"B","price":320000,"aim":74,"gameSense":84,"leadership":82,"utility":84,"isPro":true,"bio":"Paper Rex 替补控场，新加坡老将。d4v41 和 f0rsakeN 的可靠后盾。"},
    {"id":"p111","name":"miniBoo","realName":"Boo Kwon","country":"🇪🇸","team":"Team Heretics","role":"Initiator","avatar":"mB","power":80,"rating":"B","price":280000,"aim":76,"gameSense":84,"leadership":86,"utility":84,"isPro":true,"bio":"西班牙 Team Heretics 的韩裔指挥，以冷静的节奏控制带领队伍冲击 EMEA 顶级。"},
    {"id":"p112","name":"Zyppan","realName":"Pontus Johansson","country":"🇸🇪","team":"Team Heretics","role":"Duelist","avatar":"Zy","power":82,"rating":"B","price":320000,"aim":86,"gameSense":78,"leadership":72,"utility":74,"isPro":true,"bio":"瑞典枪男，Team Heretics 的头号火力点，以激进入场和精准爆头闻名。"},
    {"id":"p113","name":"Boo","realName":"Boo","country":"🇪🇸","team":"Team Heretics","role":"Controller","avatar":"Bo","power":79,"rating":"B","price":260000,"aim":72,"gameSense":82,"leadership":82,"utility":84,"isPro":true,"bio":"西班牙控场老将，Team Heretics 战术体系的中枢。"},
    {"id":"p114","name":"Nivera","realName":"Nivera","country":"🇧🇪","team":"Team Heretics","role":"Sentinel","avatar":"Ni","power":78,"rating":"B","price":240000,"aim":76,"gameSense":80,"leadership":74,"utility":84,"isPro":true,"bio":"比利时哨位，前 CS 选手转型，守点极其扎实。"},
    {"id":"p115","name":"yetujey","realName":"Yetu","country":"🇹🇷","team":"FUT Esports","role":"Initiator","avatar":"Ye","power":79,"rating":"B","price":260000,"aim":74,"gameSense":82,"leadership":84,"utility":82,"isPro":true,"bio":"FUT 的土耳其先锋指挥，大胆的前压风格令人印象深刻。"},
    {"id":"p116","name":"qutionerX","realName":"Qutioner","country":"🇹🇷","team":"FUT Esports","role":"Duelist","avatar":"Qu","power":80,"rating":"B","price":280000,"aim":85,"gameSense":76,"leadership":70,"utility":72,"isPro":true,"bio":"土耳其最强狙之一，FUT 的进攻箭头。"},
    {"id":"p117","name":"Mojj","realName":"Mojj","country":"🇹🇷","team":"FUT Esports","role":"Controller","avatar":"Mo","power":77,"rating":"B","price":220000,"aim":70,"gameSense":80,"leadership":80,"utility":82,"isPro":true,"bio":"FUT 控场者，擅长用烟雾为队友创造空间。"},
    {"id":"p118","name":"Ata","realName":"Ata","country":"🇹🇷","team":"FUT Esports","role":"Sentinel","avatar":"At","power":76,"rating":"B","price":200000,"aim":72,"gameSense":78,"leadership":72,"utility":82,"isPro":true,"bio":"FUT 哨位，稳健的防守者。"},
    {"id":"p119","name":"Xante","realName":"Xante","country":"🇹🇷","team":"Eternal Fire","role":"Duelist","avatar":"Xa","power":79,"rating":"B","price":260000,"aim":84,"gameSense":76,"leadership":72,"utility":74,"isPro":true,"bio":"Eternal Fire 的土耳其决斗者，火力凶猛。"},
    {"id":"p120","name":"Wolf","realName":"Wolf","country":"🇹🇷","team":"Eternal Fire","role":"Initiator","avatar":"Wo","power":76,"rating":"B","price":210000,"aim":72,"gameSense":80,"leadership":80,"utility":80,"isPro":true,"bio":"EF 先锋，队伍的信息发动机。"},
    {"id":"p121","name":"Jemkin","realName":"Jemkin","country":"🇹🇷","team":"Eternal Fire","role":"Controller","avatar":"Je","power":75,"rating":"B","price":200000,"aim":68,"gameSense":80,"leadership":78,"utility":82,"isPro":true,"bio":"EF 控场，擅长节奏型烟雾。"},
    {"id":"p122","name":"Kawhi","realName":"Kawhi","country":"🇹🇷","team":"Eternal Fire","role":"Sentinel","avatar":"Ka","power":74,"rating":"B","price":180000,"aim":70,"gameSense":78,"leadership":70,"utility":80,"isPro":true,"bio":"EF 哨位，沉稳可靠。"},
    {"id":"p123","name":"HyP","realName":"HyP","country":"🇫🇷","team":"Gentle Mates","role":"Initiator","avatar":"Hy","power":78,"rating":"B","price":240000,"aim":74,"gameSense":82,"leadership":84,"utility":82,"isPro":true,"bio":"法国 Gentle Mates 队长，以天马行空的战术闻名欧洲次级联赛。"},
    {"id":"p124","name":"Taka","realName":"Taka","country":"🇫🇷","team":"Gentle Mates","role":"Duelist","avatar":"Ta","power":79,"rating":"B","price":250000,"aim":83,"gameSense":75,"leadership":70,"utility":72,"isPro":true,"bio":"法国年轻决斗者，Gentle Mates 的突破口。"},
    {"id":"p125","name":"Vert","realName":"Vert","country":"🇫🇷","team":"Gentle Mates","role":"Controller","avatar":"Ve","power":75,"rating":"B","price":200000,"aim":70,"gameSense":80,"leadership":78,"utility":82,"isPro":true,"bio":"Gentle Mates 控场，法国体系的重要一环。"},
    {"id":"p126","name":"Nay","realName":"Nay","country":"🇫🇷","team":"Gentle Mates","role":"Sentinel","avatar":"Na","power":74,"rating":"B","price":180000,"aim":68,"gameSense":78,"leadership":72,"utility":80,"isPro":true,"bio":"Gentle Mates 哨位，以稳定著称。"},
    {"id":"p127","name":"Shado","realName":"Shado","country":"🇬🇧","team":"Apeks","role":"Duelist","avatar":"Sh","power":78,"rating":"B","price":240000,"aim":82,"gameSense":76,"leadership":72,"utility":74,"isPro":true,"bio":"英国 Apeks 的决斗者，北欧体系下的英伦枪手。"},
    {"id":"p128","name":"Kawaii","realName":"Kawaii","country":"🇵🇱","team":"Apeks","role":"Initiator","avatar":"Ka","power":76,"rating":"B","price":210000,"aim":72,"gameSense":80,"leadership":80,"utility":80,"isPro":true,"bio":"波兰先锋，Apeks 的战术执行者。"},
    {"id":"p129","name":"Maka","realName":"Maka","country":"🇸🇪","team":"Apeks","role":"Controller","avatar":"Mk","power":75,"rating":"B","price":200000,"aim":70,"gameSense":80,"leadership":78,"utility":82,"isPro":true,"bio":"瑞典控场，Apeks 的中路指挥官。"},
    {"id":"p130","name":"Papi","realName":"Papi","country":"🇸🇪","team":"Apeks","role":"Sentinel","avatar":"Pa","power":73,"rating":"C","price":160000,"aim":68,"gameSense":76,"leadership":70,"utility":78,"isPro":true,"bio":"Apeks 哨位老将，北欧防守体系专家。"},
    {"id":"p131","name":"Sheydos","realName":"Sheydos","country":"🇪🇸","team":"KOI","role":"Controller","avatar":"Sh","power":76,"rating":"B","price":210000,"aim":72,"gameSense":80,"leadership":80,"utility":82,"isPro":true,"bio":"KOI 控场核心，西班牙赛区知名老将。"},
    {"id":"p132","name":"Koldamenta","realName":"Koldamenta","country":"🇪🇸","team":"KOI","role":"Duelist","avatar":"Ko","power":77,"rating":"B","price":220000,"aim":81,"gameSense":74,"leadership":68,"utility":72,"isPro":true,"bio":"KOI 的西班牙决斗者，枪法出众。"},
    {"id":"p133","name":"Bax","realName":"Bax","country":"🇪🇸","team":"KOI","role":"Initiator","avatar":"Bx","power":74,"rating":"B","price":180000,"aim":70,"gameSense":78,"leadership":78,"utility":80,"isPro":true,"bio":"KOI 先锋，擅长信息收集。"},
    {"id":"p134","name":"Toose","realName":"Toose","country":"🇪🇸","team":"KOI","role":"Sentinel","avatar":"To","power":73,"rating":"C","price":160000,"aim":68,"gameSense":76,"leadership":70,"utility":78,"isPro":true,"bio":"KOI 哨位，西班牙防线的最后一环。"},
    {"id":"p135","name":"AspasJr","realName":"Aspas Jr","country":"🇧🇷","team":"MIBR","role":"Duelist","avatar":"Aj","power":80,"rating":"B","price":280000,"aim":85,"gameSense":76,"leadership":70,"utility":72,"isPro":true,"bio":"MIBR 的巴西新星决斗者，被视为 Aspas 接班人。"},
    {"id":"p136","name":"Frz","realName":"Frz","country":"🇧🇷","team":"MIBR","role":"Initiator","avatar":"Fz","power":77,"rating":"B","price":220000,"aim":72,"gameSense":81,"leadership":80,"utility":80,"isPro":true,"bio":"MIBR 先锋，巴西体系的信息核心。"},
    {"id":"p137","name":"Kurtz","realName":"Kurtz","country":"🇧🇷","team":"MIBR","role":"Controller","avatar":"Ku","power":76,"rating":"B","price":210000,"aim":70,"gameSense":80,"leadership":78,"utility":82,"isPro":true,"bio":"MIBR 控场，老练的巴西指挥。"},
    {"id":"p138","name":"Bzii","realName":"Bzii","country":"🇧🇷","team":"MIBR","role":"Sentinel","avatar":"Bz","power":75,"rating":"B","price":190000,"aim":70,"gameSense":78,"leadership":72,"utility":80,"isPro":true,"bio":"MIBR 哨位，巴西防线新血。"},
    {"id":"p139","name":"kiNgg","realName":"kiNgg","country":"🇨🇱","team":"Leviatán","role":"Duelist","avatar":"kN","power":82,"rating":"B","price":340000,"aim":86,"gameSense":78,"leadership":74,"utility":76,"isPro":true,"bio":"智利 Leviatán 的超级新星，美洲赛区最炙手可热的决斗者之一。"},
    {"id":"p140","name":"Mazino","realName":"Mazino","country":"🇨🇱","team":"Leviatán","role":"Initiator","avatar":"Mz","power":79,"rating":"B","price":260000,"aim":74,"gameSense":82,"leadership":84,"utility":82,"isPro":true,"bio":"Leviatán 的智利队长，美洲次级联赛杀出的顶级 IGL。"},
    {"id":"p141","name":"Tex","realName":"Tex","country":"🇨🇱","team":"Leviatán","role":"Controller","avatar":"Tx","power":77,"rating":"B","price":220000,"aim":70,"gameSense":82,"leadership":80,"utility":82,"isPro":true,"bio":"Leviatán 控场，南美战术体系的执行者。"},
    {"id":"p142","name":"Crow","realName":"Crow","country":"🇨🇱","team":"Leviatán","role":"Sentinel","avatar":"Cr","power":76,"rating":"B","price":210000,"aim":72,"gameSense":78,"leadership":72,"utility":80,"isPro":true,"bio":"Leviatán 哨位，智利防线支柱。"},
    {"id":"p143","name":"Jinggg","realName":"Jinggg","country":"🇸🇬","team":"Talon Esports","role":"Duelist","avatar":"Jg","power":79,"rating":"B","price":260000,"aim":83,"gameSense":76,"leadership":70,"utility":74,"isPro":true,"bio":"新加坡 Talon 的决斗者，前 Paper Rex 选手，东南亚火力代表。"},
    {"id":"p144","name":"Patiphan","realName":"Patiphan","country":"🇹🇭","team":"Talon Esports","role":"Initiator","avatar":"Pt","power":77,"rating":"B","price":220000,"aim":72,"gameSense":80,"leadership":80,"utility":80,"isPro":true,"bio":"泰国先锋，Talon 的东南亚老将。"},
    {"id":"p145","name":"Lakia","realName":"Lakia","country":"🇯🇵","team":"Talon Esports","role":"Controller","avatar":"Lk","power":75,"rating":"B","price":200000,"aim":70,"gameSense":80,"leadership":78,"utility":82,"isPro":true,"bio":"日本控场，Talon 的战术大脑。"},
    {"id":"p146","name":"Sushiboy","realName":"Sushiboy","country":"🇭🇰","team":"Talon Esports","role":"Sentinel","avatar":"Su","power":74,"rating":"B","price":180000,"aim":70,"gameSense":78,"leadership":72,"utility":80,"isPro":true,"bio":"香港哨位，Talon 的稳定后盾。"},
    {"id":"p147","name":"Deryeon","realName":"Deryeon","country":"🇸🇬","team":"Bleed Esports","role":"Duelist","avatar":"Dy","power":76,"rating":"B","price":210000,"aim":81,"gameSense":74,"leadership":68,"utility":72,"isPro":true,"bio":"新加坡 Bleed 的决斗者，东南亚新锐枪手。"},
    {"id":"p148","name":"sScary","realName":"sScary","country":"🇹🇭","team":"Bleed Esports","role":"Controller","avatar":"Sc","power":74,"rating":"B","price":180000,"aim":70,"gameSense":78,"leadership":78,"utility":80,"isPro":true,"bio":"泰国控场，Bleed 的节奏指挥。"},
    {"id":"p149","name":"Crazyguy","realName":"Crazyguy","country":"🇸🇬","team":"Bleed Esports","role":"Initiator","avatar":"Cg","power":73,"rating":"C","price":160000,"aim":68,"gameSense":78,"leadership":76,"utility":78,"isPro":true,"bio":"Bleed 先锋，东南亚赛区敢打敢拼的代表。"},
    {"id":"p150","name":"Neph","realName":"Neph","country":"🇸🇬","team":"Bleed Esports","role":"Sentinel","avatar":"Ne","power":72,"rating":"C","price":150000,"aim":66,"gameSense":76,"leadership":70,"utility":78,"isPro":true,"bio":"Bleed 哨位，稳健的防守者。"},
    {"id":"p151","name":"Jemkin2","realName":"Jemkin RRQ","country":"🇮🇩","team":"Rex Regum Qeon","role":"Duelist","avatar":"J2","power":77,"rating":"B","price":220000,"aim":82,"gameSense":74,"leadership":70,"utility":72,"isPro":true,"bio":"印尼 RRQ 的决斗者，东南亚新崛起的天才少年。"},
    {"id":"p152","name":"Vorz","realName":"Vorz","country":"🇮🇩","team":"Rex Regum Qeon","role":"Initiator","avatar":"Vz","power":75,"rating":"B","price":200000,"aim":70,"gameSense":79,"leadership":80,"utility":80,"isPro":true,"bio":"RRQ 先锋，印尼战队的核心指挥。"},
    {"id":"p153","name":"Shiro","realName":"Shiro","country":"🇮🇩","team":"Rex Regum Qeon","role":"Controller","avatar":"Sr","power":73,"rating":"C","price":160000,"aim":68,"gameSense":78,"leadership":76,"utility":78,"isPro":true,"bio":"RRQ 控场，印尼赛区的战术执行者。"},
    {"id":"p154","name":"Estrella","realName":"Estrella","country":"🇮🇩","team":"Rex Regum Qeon","role":"Sentinel","avatar":"Es","power":72,"rating":"C","price":150000,"aim":66,"gameSense":76,"leadership":70,"utility":78,"isPro":true,"bio":"RRQ 哨位，以稳定发挥立足。"},
    {"id":"p155","name":"KangKang","realName":"康康","country":"🇨🇳","team":"EDward Gaming Youth","role":"Duelist","avatar":"KK","power":78,"rating":"B","price":240000,"aim":82,"gameSense":74,"leadership":70,"utility":72,"isPro":true,"bio":"EDG 青训头号决斗者，被寄予厚望的 CN 未来之星。"},
    {"id":"p156","name":"Yuicaw","realName":"于晨阳","country":"🇨🇳","team":"EDward Gaming Youth","role":"Initiator","avatar":"Yu","power":76,"rating":"B","price":210000,"aim":72,"gameSense":80,"leadership":80,"utility":80,"isPro":true,"bio":"EDG 青训先锋，是青训队的战术大脑。"},
    {"id":"p157","name":"Spring","realName":"史普林","country":"🇨🇳","team":"EDward Gaming Youth","role":"Controller","avatar":"Sp","power":75,"rating":"B","price":200000,"aim":70,"gameSense":80,"leadership":78,"utility":80,"isPro":true,"bio":"EDG 青训控场，沉稳的年轻指挥。"},
    {"id":"p158","name":"BaiYe","realName":"白夜","country":"🇨🇳","team":"EDward Gaming Youth","role":"Sentinel","avatar":"BY","power":74,"rating":"B","price":180000,"aim":70,"gameSense":78,"leadership":72,"utility":78,"isPro":true,"bio":"EDG 青训哨位，防守端的中流砥柱。"},
    {"id":"p159","name":"Feng","realName":"峰","country":"🇨🇳","team":"Wolves Rising","role":"Duelist","avatar":"Fg","power":76,"rating":"B","price":210000,"aim":81,"gameSense":74,"leadership":68,"utility":72,"isPro":true,"bio":"狼队青训决斗者，CN 次级联赛的潜力新人。"},
    {"id":"p160","name":"XiaoL","realName":"小狼","country":"🇨🇳","team":"Wolves Rising","role":"Initiator","avatar":"XL","power":74,"rating":"B","price":180000,"aim":70,"gameSense":78,"leadership":78,"utility":80,"isPro":true,"bio":"狼队青训先锋，敢打敢拼。"},
    {"id":"p161","name":"Mist","realName":"迷雾","country":"🇨🇳","team":"Wolves Rising","role":"Controller","avatar":"Ms","power":73,"rating":"C","price":160000,"aim":68,"gameSense":78,"leadership":76,"utility":78,"isPro":true,"bio":"狼队青训控场，CN 赛区冉冉升起的新星。"},
    {"id":"p162","name":"Ash","realName":"灰烬","country":"🇨🇳","team":"Wolves Rising","role":"Sentinel","avatar":"As","power":72,"rating":"C","price":150000,"aim":66,"gameSense":76,"leadership":70,"utility":78,"isPro":true,"bio":"狼队青训哨位，沉稳可靠。"},
    {"id":"p163","name":"crowd","realName":"Crowd","country":"🇺🇸","team":"自由市场","role":"Duelist","avatar":"Cr","power":84,"rating":"A","price":450000,"aim":88,"gameSense":78,"leadership":70,"utility":74,"isPro":true,"bio":"北美自由市场枪男，等待一支有野心的战队签下他。"},
    {"id":"p164","name":"Sayaplayer","realName":"Sayaplayer","country":"🇰🇷","team":"自由市场","role":"Duelist","avatar":"Sy","power":85,"rating":"A","price":480000,"aim":89,"gameSense":80,"leadership":74,"utility":76,"isPro":true,"bio":"亚洲传奇狙神，自由身等待重返顶级赛场。"},
    {"id":"p165","name":"d4v41","realName":"d4v41","country":"🇸🇬","team":"自由市场","role":"Initiator","avatar":"d4","power":84,"rating":"A","price":450000,"aim":80,"gameSense":86,"leadership":84,"utility":86,"isPro":true,"bio":"东南亚传奇先锋，自由市场最抢手的选手之一。"},
    {"id":"p166","name":"f0rsakeN","realName":"f0rsakeN","country":"🇸🇬","team":"自由市场","role":"Duelist","avatar":"f0","power":85,"rating":"A","price":480000,"aim":88,"gameSense":80,"leadership":74,"utility":76,"isPro":true,"bio":"东南亚最强决斗者，自由身。"},
    {"id":"p167","name":"s0m","realName":"s0m","country":"🇺🇸","team":"自由市场","role":"Controller","avatar":"s0","power":83,"rating":"A","price":420000,"aim":82,"gameSense":84,"leadership":82,"utility":84,"isPro":true,"bio":"北美瞄准天才，自由市场控场。"},
    {"id":"p168","name":"crashies","realName":"crashies","country":"🇺🇸","team":"自由市场","role":"Initiator","avatar":"cs","power":82,"rating":"A","price":400000,"aim":78,"gameSense":86,"leadership":84,"utility":86,"isPro":true,"bio":"北美冠军先锋，经验丰富的自由身老将。"},
    {"id":"p169","name":"SUYGETSU","realName":"SUYGETSU","country":"🇷🇺","team":"自由市场","role":"Sentinel","avatar":"SG","power":82,"rating":"A","price":400000,"aim":78,"gameSense":86,"leadership":80,"utility":88,"isPro":true,"bio":"欧洲顶级哨位，自由市场上最稳的防守核心。"},
    {"id":"p170","name":"nAts","realName":"nAts","country":"🇷🇺","team":"自由市场","role":"Sentinel","avatar":"nA","power":81,"rating":"A","price":380000,"aim":76,"gameSense":86,"leadership":82,"utility":88,"isPro":true,"bio":"欧洲哨位大师，自由身等待新挑战。"},
    {"id":"p171","name":"Jinggg","realName":"Jinggg","country":"🇸🇬","team":"Talon Esports","role":"Duelist","avatar":"Jg","power":88,"rating":"A","price":680000,"aim":90,"gameSense":82,"leadership":76,"utility":78,"isPro":true,"bio":"前 PRX 王牌决斗者，转会 Talon 后继续以飘逸操作统治 Pacific。"},
    {"id":"p172","name":"something","realName":"something","country":"🇹🇭","team":"Bleed Esports","role":"Duelist","avatar":"Sm","power":84,"rating":"A","price":460000,"aim":86,"gameSense":80,"leadership":72,"utility":76,"isPro":true,"bio":"泰国天才决斗者，Bleed 的核心火力点。"},
    {"id":"p173","name":"Vorz","realName":"Vorz","country":"🇮🇩","team":"Rex Regum Qeon","role":"Controller","avatar":"Vz","power":82,"rating":"A","price":420000,"aim":76,"gameSense":86,"leadership":84,"utility":88,"isPro":true,"bio":"RRQ 指挥兼控场，东南亚新生代 IGL 代表。"},
    {"id":"p174","name":"KangKang","realName":"KangKang","country":"🇨🇳","team":"EDward Gaming Youth","role":"Duelist","avatar":"KK","power":83,"rating":"A","price":450000,"aim":88,"gameSense":78,"leadership":70,"utility":74,"isPro":true,"bio":"EDG 青训头号决斗者，CN 未来之星。"},
    {"id":"p175","name":"Yuicaw","realName":"Yuicaw","country":"🇨🇳","team":"EDward Gaming Youth","role":"Initiator","avatar":"Yc","power":81,"rating":"B","price":360000,"aim":76,"gameSense":86,"leadership":80,"utility":86,"isPro":true,"bio":"EDGY 先锋，视野控制与信息拆解能力出色。"},
    {"id":"p176","name":"Feng","realName":"Feng","country":"🇨🇳","team":"Wolves Rising","role":"Controller","avatar":"Fn","power":80,"rating":"B","price":340000,"aim":74,"gameSense":86,"leadership":82,"utility":88,"isPro":true,"bio":"狼队青训指挥，以冷静的烟位调度著称。"},
    {"id":"p177","name":"BerLIN","realName":"BerLIN","country":"🇩🇪","team":"Team BDS","role":"Duelist","avatar":"BL","power":85,"rating":"A","price":520000,"aim":88,"gameSense":80,"leadership":74,"utility":76,"isPro":true,"bio":"BDS 德国决斗者，枪法凶悍的 EMEA 新星。"},
    {"id":"p178","name":"maTc","realName":"maTc","country":"🇫🇷","team":"Team BDS","role":"Initiator","avatar":"mt","power":83,"rating":"A","price":460000,"aim":78,"gameSense":88,"leadership":84,"utility":86,"isPro":true,"bio":"BDS 法国先锋兼 IGL，战术执行严谨。"},
    {"id":"p179","name":"Kami","realName":"Kami","country":"🇫🇷","team":"Team BDS","role":"Sentinel","avatar":"Km","power":82,"rating":"A","price":420000,"aim":76,"gameSense":86,"leadership":80,"utility":90,"isPro":true,"bio":"BDS 哨位核心，残局处理教科书级别。"},
    {"id":"p180","name":"anka","realName":"anka","country":"🇨🇳","team":"FunPlus Phoenix","role":"Duelist","avatar":"ak","power":82,"rating":"A","price":440000,"aim":86,"gameSense":78,"leadership":72,"utility":76,"isPro":true,"bio":"FPX 王牌决斗者，CN 赛区最被低估的火力点之一。"},
    {"id":"p181","name":"BerBer","realName":"BerBer","country":"🇨🇳","team":"FunPlus Phoenix","role":"Controller","avatar":"Bb","power":80,"rating":"B","price":360000,"aim":74,"gameSense":86,"leadership":84,"utility":88,"isPro":true,"bio":"FPX 控场兼指挥，烟位覆盖精准。"},
    {"id":"p182","name":"LifeNP","realName":"LifeNP","country":"🇨🇳","team":"FunPlus Phoenix","role":"Sentinel","avatar":"LN","power":79,"rating":"B","price":320000,"aim":74,"gameSense":84,"leadership":76,"utility":88,"isPro":true,"bio":"FPX 哨位，防守站位刁钻。"},
    {"id":"p183","name":"Zin","realName":"Zin","country":"🇨🇳","team":"Nova Esports","role":"Duelist","avatar":"Zn","power":81,"rating":"B","price":380000,"aim":84,"gameSense":78,"leadership":70,"utility":74,"isPro":true,"bio":"NOVA 决斗者，激进风格的突破手。"},
    {"id":"p184","name":"K1ng","realName":"K1ng","country":"🇨🇳","team":"Nova Esports","role":"Initiator","avatar":"K1","power":79,"rating":"B","price":300000,"aim":74,"gameSense":84,"leadership":80,"utility":84,"isPro":true,"bio":"NOVA 先锋，信息位稳健。"},
    {"id":"p185","name":"AG47","realName":"AG47","country":"🇨🇳","team":"All Gamers","role":"Duelist","avatar":"AG","power":80,"rating":"B","price":340000,"aim":84,"gameSense":76,"leadership":70,"utility":72,"isPro":true,"bio":"AG 王牌决斗者，CN 次级联赛得分王。"},
    {"id":"p186","name":"L1ttt","realName":"L1ttt","country":"🇨🇳","team":"All Gamers","role":"Controller","avatar":"L1","power":78,"rating":"B","price":280000,"aim":72,"gameSense":84,"leadership":82,"utility":86,"isPro":true,"bio":"AG 控场指挥，战术素养扎实。"},
    {"id":"p187","name":"Dirk","realName":"Dirksen","country":"🇳🇱","team":"Trace Esports","role":"Duelist","avatar":"Dk","power":83,"rating":"A","price":460000,"aim":86,"gameSense":80,"leadership":72,"utility":74,"isPro":true,"bio":"Trace 荷兰决斗者，EMEA 挑战者联赛的明星。"},
    {"id":"p188","name":"Kendo","realName":"Kendo","country":"🇪🇸","team":"Trace Esports","role":"Sentinel","avatar":"Ke","power":81,"rating":"A","price":400000,"aim":76,"gameSense":86,"leadership":80,"utility":88,"isPro":true,"bio":"Trace 西班牙哨位，防守核心。"},
    {"id":"p189","name":"loll","realName":"loll","country":"🇪🇸","team":"Movistar Riders","role":"Controller","avatar":"ll","power":82,"rating":"A","price":420000,"aim":74,"gameSense":88,"leadership":84,"utility":90,"isPro":true,"bio":"MRS 控场 IGL，西班牙国家队大脑。"},
    {"id":"p190","name":"T1rax","realName":"T1rax","country":"🇪🇸","team":"Movistar Riders","role":"Duelist","avatar":"T1","power":80,"rating":"B","price":340000,"aim":84,"gameSense":76,"leadership":70,"utility":74,"isPro":true,"bio":"MRS 决斗者，爆发力十足。"},
    {"id":"p191","name":"Laz","realName":"Laz","country":"🇯🇵","team":"DFM","role":"Controller","avatar":"Lz","power":82,"rating":"A","price":420000,"aim":74,"gameSense":88,"leadership":84,"utility":88,"isPro":true,"bio":"DFM 日本传奇控场兼教练，Pacific 常青树。"},
    {"id":"p192","name":"Popogachi","realName":"Popogachi","country":"🇯🇵","team":"DFM","role":"Duelist","avatar":"Pg","power":80,"rating":"B","price":340000,"aim":84,"gameSense":76,"leadership":70,"utility":74,"isPro":true,"bio":"DFM 决斗者，日式精准枪法代表。"},
    {"id":"p193","name":"Striker","realName":"Striker","country":"🇯🇵","team":"FENNEL","role":"Sentinel","avatar":"Sk","power":79,"rating":"B","price":300000,"aim":74,"gameSense":84,"leadership":78,"utility":86,"isPro":true,"bio":"FENNEL 哨位，日本新生代防守专家。"},
    {"id":"p194","name":"Meiy","realName":"Meiy","country":"🇯🇵","team":"FENNEL","role":"Duelist","avatar":"My","power":81,"rating":"B","price":360000,"aim":86,"gameSense":76,"leadership":70,"utility":72,"isPro":true,"bio":"FENNEL 王牌决斗者，Pacific 崛起的新星。"},
    {"id":"p195","name":"Cned","realName":"Cned","country":"🇹🇷","team":"自由市场","role":"Duelist","avatar":"Cn","power":86,"rating":"A","price":560000,"aim":90,"gameSense":78,"leadership":72,"utility":74,"isPro":true,"bio":"土耳其第一决斗者，Champions 冠军成员，自由身。"},
    {"id":"p196","name":"Starxo","realName":"Starxo","country":"🇪🇸","team":"自由市场","role":"Sentinel","avatar":"Sx","power":84,"rating":"A","price":480000,"aim":78,"gameSense":88,"leadership":82,"utility":90,"isPro":true,"bio":"欧洲顶级哨位，自由市场最抢手的防守核心。"},
    {"id":"p197","name":"Redgar","realName":"Redgar","country":"🇷🇺","team":"自由市场","role":"Controller","avatar":"Rg","power":83,"rating":"A","price":440000,"aim":74,"gameSense":90,"leadership":90,"utility":88,"isPro":true,"bio":"俄罗斯传奇 IGL，自由身等待下一支冠军战队。"}
];

const AI_TEAMS = [
    {"name":"FNATIC","tag":"FNC","region":"EMEA","country":"🇬🇧","power":90,"color":"#FF4655","coach":"mini","bio":"VCT 史上最成功战队！2023 年 15 胜 1 负横扫全球，夺 Masters Tokyo 和 Champions 双冠。boaster 带领的英伦之师以完美团队配合和 IGL 指挥闻名，史上最强 Valorant 战队。"},
    {"name":"Team Vitality","tag":"VIT","region":"EMEA","country":"🇫🇷","power":89,"color":"#FF00B0","coach":"Ramon","bio":"法国超级豪门，2024 Champions 世界冠军！Alfajer 领衔银河战舰，签下 Derke、Leo 等超级巨星，打造 VCT 薪资最高阵容。以华丽个人操作和凶猛进攻节奏著称。"},
    {"name":"Sentinels","tag":"SEN","region":"Americas","country":"🇺🇸","power":88,"color":"#00D4FF","coach":"Kaplan","bio":"北美传统豪门，TenZ 的家乡战队。2021 年雷克雅未克创下 Valorant 史上首个国际赛事冠军，零封决赛震惊世界。历经重组但始终顶级。"},
    {"name":"Cloud9","tag":"C9","region":"Americas","country":"🇺🇸","power":88,"color":"#FFD700","coach":"mCe","bio":"北美传奇俱乐部，2024 VCT Americas 冠军！Boo 带领的队伍以坚不可摧防守和致命反击闻名。签下原 OpTic 核心后实力大增，北美第三极。"},
    {"name":"LOUD","tag":"LOUD","region":"Americas","country":"🇧🇷","power":87,"color":"#00FF88","coach":"fRoD","bio":"巴西人民最爱的战队！2022 年里约主场夺 Champions，唯一非欧美籍世界冠军。Saadhak 离开后经历重建，但核心指挥和美洲最狂热粉丝团从未变。"},
    {"name":"NRG Esports","tag":"NRG","region":"Americas","country":"🇺🇸","power":87,"color":"#FA0000","coach":"iTeal","bio":"2023 Champions 冠军！原 Optic 核心组建的超级战队。精准枪法和无情个人能力碾压对手，s0m 被称人类瞄准巅峰。北美最具统治力战队之一。"},
    {"name":"DRX","tag":"DRX","region":"Pacific","country":"🇰🇷","power":86,"color":"#2D2DFF","coach":"termi","bio":"韩国之王，2022 Masters Copenhagen 冠军！无与伦比的战术深度和团队执行力。2023 低谷，但 Buzz 和 Whirlwind 崛起让蓝色巨人重返巅峰。"},
    {"name":"Gen.G","tag":"GEN","region":"Pacific","country":"🇰🇷","power":86,"color":"#C9A84C","coach":"Meteor","bio":"亚洲第一战队！2024 Pacific 统治者，Sayaplayer 亚洲最强决斗者。完美控场和经济运营，Pacific 通往 Champions 最大希望。"},
    {"name":"EDward Gaming","tag":"EDG","region":"China","country":"🇨🇳","power":83,"color":"#FFD700","coach":"Haodong","bio":"中国 Valorant 先驱！最早进入 VCT 国际赛场的中国战队，2023 参加 Champions。稳定发挥和亚洲独有快节奏战术，中国赛区标杆。"},
    {"name":"T1","tag":"T1","region":"Pacific","country":"🇰🇷","power":82,"color":"#E1341E","coach":"Daeny","bio":"LOL 三冠王朝同名战队。Valorant 起步晚，但 T1 品牌号召力加 Shion 加盟，迅速成长为 Pacific 不可忽视的力量。"},
    {"name":"Bilibili Gaming","tag":"BLG","region":"China","country":"🇨🇳","power":81,"color":"#00A1D6","coach":"YY","bio":"B站旗下电竞，专注培养中国年轻选手。VCT CN 多次前四，年轻激进打法，中国赛区潜力股。"},
    {"name":"Wolves Esports","tag":"WOL","region":"China","country":"🇨🇳","power":80,"color":"#FF6600","coach":"GaoGao","bio":"中国老牌电竞，LOL 曾获世界亚军。Valorant 分部迅速成 CN 强队，Xccurate 是队中 MVP 选手。"},
    {"name":"NAVI","tag":"NAVI","region":"EMEA","country":"🇺🇦","power":79,"color":"#FFE500","coach":"Uber","bio":"CS:GO 传奇豪门，2024 才进 Valorant。签 Derke 和 juanpi，目标 EMEA 霸权。黄色巨舰新战场掀起风暴！"},
    {"name":"100 Thieves","tag":"100T","region":"Americas","country":"🇺🇸","power":79,"color":"#E60012","coach":"keita","bio":"嘻哈富豪 Nadeshot 创办的潮牌战队。2021 打入 Champions 四强，近年重建中。美式街头文化和年轻选手培养著称。"},
    {"name":"Team Liquid","tag":"TL","region":"Americas","country":"🇺🇸","power":78,"color":"#00FFEE","coach":"david","bio":"CS:GO 最成功战队之一，2022 Valorant Champions 亚军！Adrenaline 和 MehL 带领，美洲最全面战队，战术体系极成熟。"},
    {"name":"M80","tag":"M80","region":"Americas","country":"🇺🇸","power":78,"color":"#7B2D8E","coach":"Zikz","bio":"北美黑马，前职业选手组建的草根队。2023 从挑战者联赛杀到 VCT 国际，敢打敢拼和永不言败圈粉无数。"},
    {"name":"Paper Rex","tag":"PRX","region":"Pacific","country":"🇸🇬","power":76,"color":"#5B2C6F","coach":"kairi","bio":"东南亚最强！d4v41 和 f0rsakeN 双人组是 Pacific 最强火力。虽非冠军常客，但每次国际赛事都制造惊喜，粉丝最爱东南亚旋风。"},
    {"name":"Karmine Corp","tag":"KC","region":"EMEA","country":"🇫🇷","power":75,"color":"#00FF66","coach":"maLuuK","bio":"法国国民战队！EMEA 不败夺冠神话，法国年轻人最支持的电竞俱乐部。独特欧洲打法和热情粉丝文化。"},
    {"name":"Giants Gaming","tag":"GIA","region":"EMEA","country":"🇪🇸","power":74,"color":"#FF9900","coach":"Arakure","bio":"西班牙老牌，CS:GO 时期就是 EMEA 常客。Valorant 分部 kamyk 领衔，Tomaszy 提供火力，EMEA 不可小觑的橙色军团。"},
    {"name":"The Guard","tag":"TG","region":"Americas","country":"🇺🇸","power":73,"color":"#32CD32","coach":"LASTK1NG","bio":"原 OpTic 和 Sen 选手组建的复仇者联盟。多次阵容变动，但 LASTK1NG 教练始终保持竞争力，美洲绿巨人。"},
    {"name":"Global Esports","tag":"GE","region":"Pacific","country":"🇮🇳","power":72,"color":"#FF6B35","coach":"SkRossi","bio":"印度 VCT 代表队，SkRossi 是印度 Valorant 精神领袖。代表印度征战 Pacific，南亚希望之光。"},
    {"name":"ZETA DIVISION","tag":"ZETA","region":"Pacific","country":"🇯🇵","power":72,"color":"#00FF7F","coach":"Laz","bio":"日本最强！Laz 既是教练也是传奇选手。精准狙击和日式精致战术，日本 Valorant 旗帜。"},
    {"name":"Team Secret","tag":"TS","region":"Pacific","country":"🇲🇾","power":71,"color":"#FFD700","coach":"Jay","bio":"Dota 2 世界冠军俱乐部，签原 PRX Jinggg 和原 ZETA Lakia，组建国际化 Pacific 强队。"},
    {"name":"TNC Predator","tag":"TNC","region":"Pacific","country":"🇵🇭","power":70,"color":"#FF6B35","coach":"Gloco","bio":"菲律宾最知名电竞，Dota 2 TI 冠军。Valorant 分部 Zerst 是指挥核心。"},
    {"name":"Bren Esports","tag":"BREN","region":"Pacific","country":"🇵🇭","power":69,"color":"#FF1493","coach":"Rapid","bio":"菲律宾新兴战队，培养东南亚年轻选手。Rapid 身兼教练和指挥。"},
    {"name":"Falcons Esports","tag":"FAL","region":"EMEA","country":"🇸🇦","power":74,"color":"#8B0000","coach":"Raze","bio":"中东最富有电竞之一，重金打造 Valorant。Khalid 阿拉伯最强决斗者，Anees 稳定指挥，目标 EMEA 新势力。"},
    {"name":"BBL Esports","tag":"BBL","region":"EMEA","country":"🇹🇷","power":72,"color":"#FF0000","coach":"kRm","bio":"土耳其最大电竞，本地庞大粉丝群。kRm 队长兼控场，向 EMEA 顶级发起冲击。"},
    {"name":"Case Esports","tag":"CASE","region":"EMEA","country":"🇪🇸","power":71,"color":"#FFA500","coach":"Jony","bio":"西班牙新星，培养伊比利亚年轻选手。Jony 王牌决斗者。"},
    {"name":"Crew Esports","tag":"CREW","region":"EMEA","country":"🇫🇷","power":70,"color":"#00CED1","coach":"Link","bio":"法国年轻选手摇篮，Link 队长带领新生代在 EMEA 摸爬滚打。"},
    {"name":"2Game Esports","tag":"2G","region":"Americas","country":"🇦🇷","power":70,"color":"#4682B4","coach":"Luken","bio":"阿根廷代表战队，Luken 南美最具人气决斗者之一。南锥体征战 VCT Americas。"},
    {"name":"9z Team","tag":"9z","region":"Americas","country":"🇦🇷","power":71,"color":"#000080","coach":"Dead","bio":"原 KRÜ 核心出走组建。Xulu 队长，dead 控场，阿根廷战队以坚韧防守闻名美洲。"},
    {"name":"FURIA","tag":"FUR","region":"Americas","country":"🇧🇷","power":73,"color":"#006400","coach":"guerra","bio":"巴西传统 CS 豪门，签原 LOUD 队长 Saadhak 后实力飙升。murizz 强火力，guerra 兼教练和哨位。"},
    {"name":"KRU Esports","tag":"KRU","region":"Americas","country":"🇨🇱","power":70,"color":"#DC143C","coach":"Mystic","bio":"智利最成功电竞，曾获 VCT Americas 亚军。9z 出走事件后 Mystic 带新阵容继续征战。"},
    {"name":"Team Liquid Brazil","tag":"TLBR","region":"Americas","country":"🇧🇷","power":72,"color":"#00FFEE","coach":"BR coach","bio":"Team Liquid 巴西分部，Bruno 和 Leo 核心。目标在 LOUD 和 FURIA 夹缝中崛起。"},
    {"name":"Invictus Gaming","tag":"IG","region":"China","country":"🇨🇳","power":79,"color":"#000000","coach":"Wang","bio":"LPL S8 世界冠军！Valorant 分部 Yang 和 Coldness 带领迅速成 CN 顶级，中国冠军有力争夺者。"},
    {"name":"FunPlus Phoenix","tag":"FPX","region":"China","country":"🇨🇳","power":78,"color":"#FFD700","coach":"Luo","bio":"LPL S9 世界冠军金凤凰。Valorant 分部 Jue 是队中王牌。"},
    {"name":"JD Gaming","tag":"JDG","region":"China","country":"🇨🇳","power":77,"color":"#C71585","coach":"Li","bio":"京东集团战队，LPL 2023 春夏双冠。Valorant 分部 Haoye 先锋指挥，体系成熟。"},
    {"name":"Toutiao Gaming","tag":"TTG","region":"China","country":"🇨🇳","power":76,"color":"#FF4500","coach":"Chen","bio":"字节跳动旗下，专注年轻选手培养。Chen 带橙色战队 VCT CN 稳步提升。"},
    {"name":"Gamelanders","tag":"GLD","region":"Americas","country":"🇺🇸","power":72,"color":"#FF4500","coach":"JDM","bio":"北美老牌挑战者联赛战队，多次冲 VCT 未果。JDM 队长兼控场，继续追梦。"},
    {"name":"NRG 2","tag":"NRG2","region":"Americas","country":"🇺🇸","power":70,"color":"#FA0000","coach":"Turtle","bio":"NRG 发展联盟，培养一队替补和未来之星。Turtle 最有潜力年轻选手。"},
    {"name":"Team Heretics","tag":"TH","region":"EMEA","country":"🇪🇸","power":75,"color":"#00E5A0","coach":"Tanish","bio":"西班牙新贵，Team Heretics 以韩式纪律加欧洲创造力崛起，是 EMEA 升班马中的黑马。"},
    {"name":"FUT Esports","tag":"FUT","region":"EMEA","country":"🇹🇷","power":73,"color":"#00B2FF","coach":"Ely","bio":"土耳其电竞豪门 FUT，以双狙体系和凶悍的前压闻名，长期在 EMEA 次级联赛冲顶。"},
    {"name":"Eternal Fire","tag":"EF","region":"EMEA","country":"🇹🇷","power":72,"color":"#FF6A00","coach":"Dark","bio":"土耳其 Eternal Fire 的 Valorant 分部，纪律严明，擅长消耗战和残局。"},
    {"name":"Gentle Mates","tag":"M8","region":"EMEA","country":"🇫🇷","power":71,"color":"#8A2BE2","coach":"Hyp","bio":"法国网红俱乐部 Gentle Mates，以脑洞战术和年轻阵容在 EMEA 次级联赛圈粉。"},
    {"name":"Apeks","tag":"APK","region":"EMEA","country":"🇬🇧","power":70,"color":"#00A86B","coach":"Shado","bio":"英国 Apeks，北欧体系的英伦代表，以稳固防守和团队配合见长。"},
    {"name":"KOI","tag":"KOI","region":"EMEA","country":"🇪🇸","power":69,"color":"#FFD700","coach":"Sheydos","bio":"西班牙 KOI，伊比利亚赛区的老牌挑战者，擅长慢节奏运营。"},
    {"name":"MIBR","tag":"MIBR","region":"Americas","country":"🇧🇷","power":72,"color":"#FF0000","coach":"Kurtz","bio":"巴西 MIBR，CS 传奇俱乐部，Valorant 分部以激进的巴西风格著称。"},
    {"name":"Leviatán","tag":"LEV","region":"Americas","country":"🇨🇱","power":74,"color":"#00C2FF","coach":"Mazino","bio":"智利 Leviatán，美洲次级联赛的统治者之一，kiNgg 是赛区最耀眼的新星。"},
    {"name":"Talon Esports","tag":"TLN","region":"Pacific","country":"🇭🇰","power":68,"color":"#FFB300","coach":"Jinggg","bio":"香港 Talon，太平洋赛区的国际化战队，东南亚火力与日式纪律的结合。"},
    {"name":"Bleed Esports","tag":"BLEED","region":"Pacific","country":"🇸🇬","power":67,"color":"#E60012","coach":"sScary","bio":"新加坡 Bleed，东南亚新生代战队，敢打敢拼。"},
    {"name":"Rex Regum Qeon","tag":"RRQ","region":"Pacific","country":"🇮🇩","power":69,"color":"#FFC000","coach":"Vorz","bio":"印尼 RRQ，东南亚最具人气的挑战者战队，主场氛围火爆。"},
    {"name":"EDward Gaming Youth","tag":"EDGY","region":"China","country":"🇨🇳","power":69,"color":"#FFD700","coach":"KangKang","bio":"EDG 青训队，CN 赛区的人才库，KangKang 与 Yuicaw 被视为下一代核心。"},
    {"name":"Wolves Rising","tag":"WOLR","region":"China","country":"🇨🇳","power":68,"color":"#FF6600","coach":"Feng","bio":"狼队青训，CN 次级联赛的年轻力量，以勤奋和执行力著称。"},
    {"name":"Team BDS","tag":"BDS","region":"EMEA","country":"🇨🇭","power":73,"color":"#00C2FF","coach":"Goose","bio":"瑞士豪门 BDS，EMEA 挑战者联赛统治者，BerLIN 与 maTc 双核带领下冲击顶级联赛。"},
    {"name":"Nova Esports","tag":"NOVA","region":"China","country":"🇨🇳","power":70,"color":"#7B68EE","coach":"Mole","bio":"NOVA 电竞，CN 次级联赛黑马，年轻阵容以快攻和执行力著称。"},
    {"name":"All Gamers","tag":"AG","region":"China","country":"🇨🇳","power":69,"color":"#FF6347","coach":"OldSix","bio":"AG 老牌电竞俱乐部，Valorant 分部深耕 CN 次级联赛，青训体系完善。"},
    {"name":"Trace Esports","tag":"TRACE","region":"EMEA","country":"🇳🇱","power":72,"color":"#00CED1","coach":"Hammer","bio":"荷兰 Trace，EMEA 挑战者联赛稳定前列，Dirk 与 Kendo 一攻一守的核心组合。"},
    {"name":"Movistar Riders","tag":"MRS","region":"EMEA","country":"🇪🇸","power":71,"color":"#FFD700","coach":"Petrow","bio":"西班牙 Movistar Riders，伊比利亚半岛的 Valorant 旗帜，loll 指挥的体系成熟。"},
    {"name":"DFM","tag":"DFM","region":"Pacific","country":"🇯🇵","power":70,"color":"#E60012","coach":"Laz","bio":"日本 DFM，Pacific 常客，Laz 坐镇的控场体系让队伍始终保持竞争力。"},
    {"name":"FENNEL","tag":"FNL","region":"Pacific","country":"🇯🇵","power":69,"color":"#FF69B4","coach":"Reita","bio":"日本 FENNEL，Pacific 新生代力量，Meiy 与 Striker 的年轻组合充满潜力。"}
];

const TOTAL_WEEKS = 24;
const MAX_ROSTER = 8;

/* 商城道具：全部为外观或便利类，绝不修改任何比赛数值 */
const SHOP_CATEGORIES = [
    { key: 'badge', name: '队徽' },
    { key: 'theme', name: '界面主题' },
    { key: 'title', name: '称号' },
    { key: 'board', name: '对局外观' },
    { key: 'banner', name: '战队横幅' },
    { key: 'avatar', name: '管理头像' },
    { key: 'frame', name: '名片框' },
    { key: 'effect', name: '庆典特效' },
    { key: 'base', name: '基地装饰' },
    { key: 'sticker', name: '表情贴纸' },
    { key: 'collect', name: '收藏品' },
    { key: 'analysis', name: '情报分析' },
    { key: 'util', name: '便利道具' }
];

const SHOP_ITEMS = [
    /* ---------- 队徽 ---------- */
    { id: 'badge_phoenix', kind: 'badge', cat: 'badge', name: '凤凰队徽', icon: '🔥', price: 40000, desc: '浴火重生的凤凰图腾，象征永不熄灭的斗志。装备后在控制台队名左侧展示，纯外观不影响比赛。' },
    { id: 'badge_dragon', kind: 'badge', cat: 'badge', name: '龙纹队徽', icon: '🐉', price: 120000, desc: '东方巨龙盘绕的威严徽记，传说能带来连胜运势。装备后在控制台队名左侧展示，纯外观不影响比赛。' },
    { id: 'badge_wolf', kind: 'badge', cat: 'badge', name: '孤狼队徽', icon: '🐺', price: 80000, desc: '独狼啸月的冷峻徽记，适合单兵作战风格的经理。装备后在控制台队名左侧展示，纯外观不影响比赛。' },
    { id: 'badge_skull', kind: 'badge', cat: 'badge', name: '骷髅队徽', icon: '💀', price: 160000, desc: '死亡凝视的骷髅徽记，让对手未战先怯三分。装备后在控制台队名左侧展示，纯外观不影响比赛。' },
    { id: 'badge_lightning', kind: 'badge', cat: 'badge', name: '闪电队徽', icon: '⚡', price: 60000, desc: '雷霆万钧的闪电徽记，代表快攻闪电战的战术哲学。装备后在控制台队名左侧展示，纯外观不影响比赛。' },

    /* ---------- 界面主题 ---------- */
    { id: 'theme_ice', kind: 'theme', cat: 'theme', name: '冰霜主题', icon: '❄', price: 90000, desc: '将整个界面的强调色替换为冷峻的冰蓝色，如同冻结赛场。仅改变视觉风格，不影响任何对局数值。', color: '#53A7E2' },
    { id: 'theme_gold', kind: 'theme', cat: 'theme', name: '黄金主题', icon: '🏅', price: 150000, desc: '把界面强调色换成耀眼的金色，彰显冠军底蕴。仅改变视觉风格，不影响任何对局数值。', color: '#F7B500' },
    { id: 'theme_emerald', kind: 'theme', cat: 'theme', name: '翡翠主题', icon: '💚', price: 120000, desc: '将界面强调色替换为翡翠绿，带来丛林般的生机感。仅改变视觉风格，不影响任何对局数值。', color: '#00E5A0' },
    { id: 'theme_violet', kind: 'theme', cat: 'theme', name: '霓虹紫主题', icon: '💜', price: 180000, desc: '赛博朋克风的霓虹紫强调色，让界面充满未来科技感。仅改变视觉风格，不影响任何对局数值。', color: '#A855F7' },
    { id: 'theme_sakura', kind: 'theme', cat: 'theme', name: '樱花主题', icon: '🌸', price: 140000, desc: '浪漫的樱花粉强调色，为紧张的赛场增添一抹温柔。仅改变视觉风格，不影响任何对局数值。', color: '#FF7BAC' },

    /* ---------- 称号 ---------- */
    { id: 'title_champion', kind: 'title', cat: 'title', name: '「冠军教头」称号', icon: '👑', price: 70000, desc: '为夺冠而生的荣耀称号，证明你是天生的赢家。显示在队名下方的标语位，纯外观不影响比赛。' },
    { id: 'title_godfather', kind: 'title', cat: 'title', name: '「战队教父」称号', icon: '🎩', price: 200000, desc: '俱乐部奠基人般的尊贵称号，象征你缔造了一个王朝。显示在队名下方的标语位，纯外观不影响比赛。' },
    { id: 'title_tactician', kind: 'title', cat: 'title', name: '「战术大师」称号', icon: '🧠', price: 180000, desc: '运筹帷幄的战术大师称号，每一步都深思熟虑。显示在队名下方的标语位，纯外观不影响比赛。' },
    { id: 'title_rookie', kind: 'title', cat: 'title', name: '「菜鸟起飞」称号', icon: '🐣', price: 30000, desc: '初出茅庐却朝气蓬勃的称号，萌新也能闪耀赛场。显示在队名下方的标语位，纯外观不影响比赛。' },

    /* ---------- 对局外观 ---------- */
    { id: 'board_gold', kind: 'board', cat: 'board', name: '黄金战术板', icon: '🟨', price: 150000, desc: '可视化对局中己方点位将以金色高亮，显得贵气十足。仅改变点位颜色，不影响任何战力与判定。', color: '#F7B500' },
    { id: 'board_neon', kind: 'board', cat: 'board', name: '霓虹战术板', icon: '🟩', price: 150000, desc: '可视化对局中己方点位变为霓虹绿，科技感拉满。仅改变点位颜色，不影响任何战力与判定。', color: '#00E5A0' },

    /* ---------- 战队横幅 ---------- */
    { id: 'banner_crown', kind: 'banner', cat: 'banner', name: '王者横幅', icon: '♛', price: 220000, desc: '控制台大横幅的背景装饰，皇冠图标彰显王者气度。纯外观装饰，不影响比赛。' },
    { id: 'banner_flame', kind: 'banner', cat: 'banner', name: '烈焰横幅', icon: '✦', price: 100000, desc: '控制台大横幅的背景装饰，烈焰星芒点燃赛场热情。纯外观装饰，不影响比赛。' },

    /* ---------- 管理头像 ---------- */
    { id: 'avatar_eagle', kind: 'avatar', cat: 'avatar', name: '雄鹰头像', icon: '🦅', price: 50000, desc: '锐利如鹰的眼神，俯瞰整个赛场的指挥者。作为经理头像展示在控制台英雄区，纯外观。' },
    { id: 'avatar_lion', kind: 'avatar', cat: 'avatar', name: '雄狮头像', icon: '🦁', price: 90000, desc: '百兽之王的威严，坐镇中军的王者风范。作为经理头像展示在控制台英雄区，纯外观。' },
    { id: 'avatar_owl', kind: 'avatar', cat: 'avatar', name: '智者猫头鹰头像', icon: '🦉', price: 70000, desc: '智慧与谋略的化身，冷静分析每一场对局。作为经理头像展示在控制台英雄区，纯外观。' },
    { id: 'avatar_fox', kind: 'avatar', cat: 'avatar', name: '狡黠狐狸头像', icon: '🦊', price: 60000, desc: '诡计多端的狐狸，总能找到对手的破绽。作为经理头像展示在控制台英雄区，纯外观。' },
    { id: 'avatar_panda', kind: 'avatar', cat: 'avatar', name: '萌系熊猫头像', icon: '🐼', price: 45000, desc: '人畜无害的熊猫外表下藏着一颗冠军的心。作为经理头像展示在控制台英雄区，纯外观。' },

    /* ---------- 名片框 ---------- */
    { id: 'frame_gold', kind: 'frame', cat: 'frame', name: '黄金名片框', icon: '🟨', price: 100000, desc: '为经理头像镶嵌一圈金色边框，贵气逼人。仅装饰头像边框，不影响比赛。', color: '#F7B500' },
    { id: 'frame_crimson', kind: 'frame', cat: 'frame', name: '绯红名片框', icon: '🟥', price: 80000, desc: '炽热的绯红边框，彰显战斗的血性与激情。仅装饰头像边框，不影响比赛。', color: '#FF4655' },
    { id: 'frame_ocean', kind: 'frame', cat: 'frame', name: '海洋名片框', icon: '🟦', price: 80000, desc: '深邃的海洋蓝边框，带来沉稳冷静的气场。仅装饰头像边框，不影响比赛。', color: '#53A7E2' },
    { id: 'frame_forest', kind: 'frame', cat: 'frame', name: '森林名片框', icon: '🟩', price: 80000, desc: '生机盎然的森林绿边框，象征队伍的生命力。仅装饰头像边框，不影响比赛。', color: '#00E5A0' },

    /* ---------- 庆典特效 ---------- */
    { id: 'effect_confetti', kind: 'effect', cat: 'effect', name: '彩带庆典', icon: '🎉', price: 60000, desc: '每场胜利后撒落漫天彩带，庆祝你的每一次凯旋。仅在胜利结算界面播放，纯外观。' },
    { id: 'effect_fireworks', kind: 'effect', cat: 'effect', name: '烟花盛典', icon: '🎆', price: 120000, desc: '胜利时刻绽放绚丽烟花，为冠军之夜增添仪式感。仅在胜利结算界面播放，纯外观。' },
    { id: 'effect_trophy', kind: 'effect', cat: 'effect', name: '奖杯高光', icon: '🏆', price: 180000, desc: '胜利结算时奖杯高光闪耀，冠军风采尽收眼底。仅在胜利结算界面播放，纯外观。' },
    { id: 'effect_crown', kind: 'effect', cat: 'effect', name: '加冕特效', icon: '👑', price: 220000, desc: '胜利瞬间虚拟皇冠加身，仿佛加冕联赛之王。仅在胜利结算界面播放，纯外观。' },

    /* ---------- 基地装饰 ---------- */
    { id: 'base_arena', kind: 'base', cat: 'base', name: '豪华竞技馆', icon: '🏟️', price: 130000, desc: '将战队基地升级为万人竞技馆，气势恢宏。展示在控制台装饰位，纯外观不影响训练。' },
    { id: 'base_lab', kind: 'base', cat: 'base', name: '高科技实验室', icon: '🔬', price: 150000, desc: '充满未来感的高科技基地，彰显科技战队底蕴。展示在控制台装饰位，纯外观不影响训练。' },
    { id: 'base_gym', kind: 'base', cat: 'base', name: '专业训练馆', icon: '🏋️', price: 90000, desc: '配备顶级器材的训练基地，选手们的第二个家。展示在控制台装饰位，纯外观不影响训练。' },
    { id: 'base_mansion', kind: 'base', cat: 'base', name: '古堡庄园', icon: '🏰', price: 200000, desc: '中世纪古堡风格的战队庄园，神秘而尊贵。展示在控制台装饰位，纯外观不影响训练。' },

    /* ---------- 表情贴纸 ---------- */
    { id: 'sticker_gg', kind: 'sticker', cat: 'sticker', name: 'GG 握手贴纸', icon: '🤝', price: 20000, desc: '经典的 GG 握手表情，体现体育精神。收集后展示在控制台装饰位，纯外观。' },
    { id: 'sticker_clap', kind: 'sticker', cat: 'sticker', name: '鼓掌贴纸', icon: '👏', price: 20000, desc: '为精彩对局鼓掌喝彩的表情贴纸。收集后展示在控制台装饰位，纯外观。' },
    { id: 'sticker_pog', kind: 'sticker', cat: 'sticker', name: 'POG 墨镜贴纸', icon: '😎', price: 25000, desc: '酷到没朋友的墨镜表情，POG 时刻必备。收集后展示在控制台装饰位，纯外观。' },
    { id: 'sticker_sad', kind: 'sticker', cat: 'sticker', name: '心碎贴纸', icon: '😢', price: 15000, desc: '惜败时的无奈表情，胜败乃兵家常事。收集后展示在控制台装饰位，纯外观。' },
    { id: 'sticker_rage', kind: 'sticker', cat: 'sticker', name: '抓狂贴纸', icon: '😤', price: 15000, desc: '被对手翻盘时的抓狂表情，懂的都懂。收集后展示在控制台装饰位，纯外观。' },

    /* ---------- 收藏品 ---------- */
    { id: 'collect_tenz', kind: 'collect', cat: 'collect', name: 'TenZ 签名卡', icon: '🖊', price: 300000, desc: '传奇选手 TenZ 的亲笔签名卡，电竞收藏界的硬通货。展示在队名右侧，纯外观不影响比赛。' },
    { id: 'collect_trophy', kind: 'collect', cat: 'collect', name: 'Champions 复刻奖杯', icon: '🏆', price: 250000, desc: 'VCT Champions 世界冠军奖杯的等比例复刻品。展示在队名右侧，纯外观不影响比赛。' },

    /* ---------- 情报分析（便利） ---------- */
    { id: 'analysis_scout', kind: 'analysis', cat: 'analysis', name: '赛前情报包', icon: '🔍', price: 80000, desc: '解锁赛程中对手战队的战力数值，便于制定针对性战术。仅揭示已有数据，不改变任何比赛结果。' },
    { id: 'analysis_replay', kind: 'analysis', cat: 'analysis', name: '录像复盘服务', icon: '📹', price: 140000, desc: '解锁赛程中对手的近期胜率数据，洞察对手状态起伏。仅揭示已有数据，不改变任何比赛结果。' },

    /* ---------- 便利道具 ---------- */
    { id: 'card_rename', kind: 'rename', cat: 'util', name: '改名卡', icon: '🔄', price: 25000, desc: '修改战队名称时自动消耗一张，可抵扣 $20,000 改名费用。纯便利道具，不影响比赛。' },
    { id: 'card_autosave', kind: 'autosave', cat: 'util', name: '自动存档卡', icon: '💾', price: 60000, desc: '每场比赛结束后自动保存本地存档，再也不怕忘记存档。纯便利道具，不影响比赛。' }
];

function initExtras(state) {
    if (!state.shop || typeof state.shop !== 'object') {
        state.shop = { owned: [], badge: '', title: '', theme: '', autoSave: false, renameCards: 0 };
    }
    if (!Array.isArray(state.shop.owned)) state.shop.owned = [];
    state.shop.badge = state.shop.badge || '';
    state.shop.title = state.shop.title || '';
    state.shop.theme = state.shop.theme || '';
    state.shop.autoSave = !!state.shop.autoSave;
    state.shop.renameCards = Number(state.shop.renameCards) || 0;
    state.shop.boardColor = state.shop.boardColor || '';
    state.shop.bannerIcon = state.shop.bannerIcon || '';
    state.shop.collectible = state.shop.collectible || '';
    state.shop.managerAvatar = state.shop.managerAvatar || '';
    state.shop.avatarFrame = state.shop.avatarFrame || '';
    state.shop.winEffect = state.shop.winEffect || '';
    state.shop.baseDeco = state.shop.baseDeco || '';
    if (!Array.isArray(state.shop.stickers)) state.shop.stickers = [];
    state.shop.scoutUnlocked = !!state.shop.scoutUnlocked;
    state.shop.replayUnlocked = !!state.shop.replayUnlocked;

    state.tactic = state.tactic || 'balanced';
    if (!Array.isArray(state.roster)) state.roster = [];
    state.roster.forEach(p => {
        const m = Number(p.morale);
        p.morale = isNaN(m) ? 70 : Math.max(0, Math.min(100, m));
        p.trainedWeek = Number(p.trainedWeek) || 0;
    });

    if (!Array.isArray(state.mail)) state.mail = [];
    if (!Array.isArray(state.friendlyHistory)) state.friendlyHistory = [];
    if (typeof state.teamNamed !== 'boolean') state.teamNamed = true;
    state.lastSeasonMail = Number(state.lastSeasonMail) || 0;

    if (!state.cups || typeof state.cups !== 'object') state.cups = {};
    if (typeof state.league !== 'string') state.league = '';
    if (!state.leagueTeams || typeof state.leagueTeams !== 'object') state.leagueTeams = null;
    if (typeof state.simulatedWeek !== 'number') state.simulatedWeek = 0;
    if (typeof state.scheduleVersion !== 'number') state.scheduleVersion = 1;
    state.lastAnnouncementVersion = state.lastAnnouncementVersion || '';
    state.seasonEnded = !!state.seasonEnded;
    return state;
}


let gameState = null;

function initGame() {
    gameState = {
        teamName: '我的战队',
        teamTag: 'MY',
        teamPower: 0,
        money: 500000,
        season: 1,
        currentWeek: 1,
        roster: [],
        market: [],
        schedule: [],
        standings: [],
        matchHistory: [],
    };
    setupInitialRoster();
    setupAIStandings();
    generateMarket();
    generateSchedule();
    initExtras(gameState);
    updateAllDisplays();
    showScreen('dashboard');
}

function setupInitialRoster() {
    const starterAgents = [18, 10, 16, 2, 9];
    starterAgents.forEach((id, i) => {
        const template = VALORANT_AGENTS.find(a => a.id === id);
        const agent = cloneAgent(template);
        agent.uniqueId = 'roster_' + Date.now() + '_' + i;
        agent.isPlayerOwned = true;
        agent.wins = 0;
        agent.losses = 0;
        gameState.roster.push(agent);
    });
}

function cloneAgent(template) {
    return JSON.parse(JSON.stringify(template));
}

function setupAIStandings() {
    gameState.standings = AI_TEAMS.map(team => ({
        name: team.name,
        tag: team.tag,
        region: team.region,
        country: team.country,
        color: team.color,
        power: team.power,
        wins: 0,
        losses: 0,
        points: 0,
        isPlayerTeam: false,
    }));
    gameState.standings.push({
        name: gameState.teamName,
        tag: gameState.teamTag,
        region: 'MY',
        country: '🎮',
        color: '#FF4655',
        power: 0,
        wins: 0,
        losses: 0,
        points: 0,
        isPlayerTeam: true,
    });
}

function generateMarket() {
    gameState.market = [];
    const numProPlayers = 8;
    const numAgents = 10;
    const availablePros = shuffle([...REAL_PRO_PLAYERS]);
    availablePros.slice(0, numProPlayers).forEach((template, i) => {
        const pro = cloneAgent(template);
        pro.uniqueId = 'market_pro_' + Date.now() + '_' + i;
        pro.isPlayerOwned = false;
        pro.wins = 0;
        pro.losses = 0;
        gameState.market.push(pro);
    });
    const availableAgents = shuffle([...VALORANT_AGENTS]);
    availableAgents.slice(0, numAgents).forEach((template, i) => {
        const agent = cloneAgent(template);
        agent.uniqueId = 'market_agent_' + Date.now() + '_' + i;
        agent.isPlayerOwned = false;
        agent.wins = 0;
        agent.losses = 0;
        agent.price = Math.round(agent.price * (0.85 + Math.random() * 0.3));
        gameState.market.push(agent);
    });
    gameState.market = shuffle(gameState.market);
}

function refreshMarket() {
    generateMarket();
    renderMarket();
    showToast('市场刷新', '新选手已上架！', 'success');
}

function generateSchedule() {
    gameState.schedule = [];
    const allTeams = AI_TEAMS.map(t => t.name);
    const shuffledOpponents = shuffle(allTeams);
    for (let week = 1; week <= TOTAL_WEEKS; week++) {
        const opponentIdx = (week - 1) % shuffledOpponents.length;
        const opponentName = shuffledOpponents[opponentIdx];
        const isHome = week % 2 === 1;
        gameState.schedule.push({
            week,
            playerTeam: gameState.teamName,
            opponent: opponentName,
            isHome,
            played: false,
            playerScore: 0,
            opponentScore: 0,
            result: null,
        });
    }
}

function calculateTeamPower(teamData) {
    if (teamData.isPlayerTeam) {
        if (gameState.roster.length === 0) return 0;
        const sum = gameState.roster.reduce((acc, a) => acc + a.power, 0);
        return Math.round(sum / gameState.roster.length);
    } else {
        const team = AI_TEAMS.find(t => t.name === teamData.name);
        return team ? team.power : 70;
    }
}

function getTeamMorale() {
    if (!gameState || !gameState.roster || gameState.roster.length === 0) return 70;
    const sum = gameState.roster.reduce((acc, a) => acc + (typeof a.morale === 'number' ? a.morale : 70), 0);
    return Math.round(sum / gameState.roster.length);
}

function getEffectiveTeamPower() {
    const base = gameState.teamPower || 0;
    const factor = 0.9 + (getTeamMorale() / 100) * 0.2;
    return Math.round(base * factor);
}

function applyMoraleToRoster(didWin) {
    if (!gameState || !Array.isArray(gameState.roster)) return;
    const delta = didWin ? 8 : -10;
    gameState.roster.forEach(p => {
        const cur = typeof p.morale === 'number' ? p.morale : 70;
        p.morale = Math.max(0, Math.min(100, cur + delta));
    });
}

function setTactic(t) {
    if (!['aggressive', 'balanced', 'defensive'].includes(t)) return;
    gameState.tactic = t;
    updateAllDisplays();
    renderDashboard();
}

function applyTacticToPower(ownPower, oppPower) {
    const t = (gameState && gameState.tactic) || 'balanced';
    if (t === 'aggressive') return [Math.round(ownPower * 1.05), oppPower];
    if (t === 'defensive') return [ownPower, Math.round(oppPower * 0.95)];
    return [ownPower, oppPower];
}

function updateTeamPower() {
    if (!gameState || !Array.isArray(gameState.standings)) return;
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    if (playerStanding) {
        playerStanding.power = calculateTeamPower(playerStanding);
        gameState.teamPower = playerStanding.power;
    }
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('screen-' + screenName).classList.add('active');
    const activeBtn = document.querySelector(`.nav-btn[data-screen="${screenName}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    if (screenName === 'roster') renderRoster();
    if (screenName === 'market') renderMarket();
    if (screenName === 'schedule') renderSchedule();
    if (screenName === 'standings') { renderStandings(); renderPlayerLeaderboard('power', document.querySelector('.leaderboard-tab')); }
    if (screenName === 'teams') renderTeams();
    if (screenName === 'dashboard') renderDashboard();
    if (screenName === 'online') loadOnlineLeaderboard(false);
    if (screenName === 'workshop') loadWorkshop(false);
    if (screenName === 'versus') renderVersus();
}

function navigateTo(screen) { showScreen(screen); }

document.querySelectorAll('.nav-btn[data-screen]').forEach(btn => {
    btn.addEventListener('click', () => { showScreen(btn.dataset.screen); });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMarket();
    });
});

function updateAllDisplays() {
    updateTeamPower();
    document.getElementById('stat-money').textContent = '$' + gameState.money.toLocaleString();
    document.getElementById('stat-season').textContent = '第 ' + gameState.season + ' 赛季';
    document.getElementById('stat-day').textContent = '第 ' + gameState.currentWeek + ' 周';
    document.getElementById('team-name-display').textContent = (gameState.shop && gameState.shop.badge ? gameState.shop.badge + ' ' : '') + gameState.teamName + (gameState.shop && gameState.shop.collectible ? ' ' + gameState.shop.collectible : '');
    const leagueName = (typeof LEAGUE_META !== 'undefined' && gameState.league) ? LEAGUE_META[gameState.league].name : '';
    const leagueEl = document.getElementById('stat-league');
    if (leagueEl) leagueEl.textContent = leagueName || 'VCT';
    const heroLeague = document.getElementById('hero-league');
    if (heroLeague) {
        heroLeague.textContent = leagueName || 'VCT';
        heroLeague.className = 'hero-league league-' + (gameState.league || 'premier');
    }
    if (gameState.shop && gameState.shop.title) {
        document.getElementById('team-tagline').textContent = gameState.shop.title + ' · 建立你的冠军王朝';
    } else {
        document.getElementById('team-tagline').textContent = '建立你的冠军王朝';
    }
    applyShopTheme();
    updateMailBadge();
}

function applyShopTheme() {
    const app = document.getElementById('app');
    if (!app) return;
    const theme = gameState && gameState.shop ? gameState.shop.theme : '';
    if (theme) app.style.setProperty('--valorant-red', theme);
    else app.style.removeProperty('--valorant-red');
    const deco = document.querySelector('.hero-decoration');
    if (deco) {
        const shop = gameState && gameState.shop ? gameState.shop : {};
        const banner = shop.bannerIcon || '';
        const base = shop.baseDeco || '';
        const stickers = Array.isArray(shop.stickers) ? shop.stickers.join(' ') : '';
        const parts = [];
        if (banner) parts.push(banner + ' ' + banner + ' ' + banner);
        else parts.push('◤ ◥ ◣ ◢');
        if (base) parts.push(base);
        if (stickers) parts.push(stickers);
        deco.textContent = parts.join('   ');
    }
    const avatarEl = document.getElementById('manager-avatar');
    if (avatarEl) {
        const shop = gameState && gameState.shop ? gameState.shop : {};
        if (shop.managerAvatar) {
            avatarEl.textContent = shop.managerAvatar;
            avatarEl.style.display = 'inline-flex';
            avatarEl.style.border = '3px solid ' + (shop.avatarFrame || 'transparent');
            avatarEl.style.borderRadius = '50%';
            avatarEl.style.padding = '4px 6px';
            avatarEl.style.fontSize = '28px';
            avatarEl.style.lineHeight = '1';
            avatarEl.style.marginRight = '10px';
            avatarEl.style.background = 'rgba(0,0,0,0.25)';
        } else {
            avatarEl.style.display = 'none';
        }
    }
}

function renderDashboard() {
    updateAllDisplays();
    updateTeamPower();
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    const rank = getPlayerRank();
    const rankBadge = rank <= 3 ? ['🥇', '🥈', '🥉'][rank - 1] : '#' + rank;
    document.getElementById('hero-power').textContent = gameState.teamPower;
    document.getElementById('hero-wins').textContent = playerStanding.wins;
    document.getElementById('hero-losses').textContent = playerStanding.losses;
    document.getElementById('hero-rank').textContent = rankBadge;
    const hint = document.getElementById('rename-hint');
    if (hint) hint.classList.toggle('hidden', !!gameState.teamNamed);
    const newsEl = document.getElementById('dashboard-news');
    if (newsEl && typeof latestAnnouncement === 'function') {
        const a = latestAnnouncement();
        newsEl.innerHTML = a ? `<span class="news-tag">公告</span><span class="news-text">${a.title} · ${a.tag}</span><span class="news-more">查看 →</span>` : '';
        newsEl.classList.toggle('hidden', !a);
    }
    const recentMatches = gameState.matchHistory.slice(-5).reverse();
    const recentList = document.getElementById('recent-matches-list');
    recentList.innerHTML = recentMatches.length === 0 
        ? '<p class="no-match">暂无比赛记录</p>' 
        : recentMatches.map(m => `
            <div class="match-item ${m.didWin ? 'win' : 'loss'}">
                <span class="match-teams-info">${m.playerTeam} vs ${m.opponent}</span>
                <span class="match-score-info">${m.playerScore} - ${m.opponentScore}</span>
            </div>
        `).join('');
    const nextMatch = gameState.schedule.find(s => s.week === gameState.currentWeek && !s.played);
    const nextInfo = document.getElementById('next-match-info');
    const playBtn = document.getElementById('play-next-match');
    const teamMorale = getTeamMorale();
    const effPower = getEffectiveTeamPower();
    const tacticBtns = ['aggressive', 'balanced', 'defensive'].map(t => {
        const cn = { aggressive: '激进进攻', balanced: '均衡战术', defensive: '稳固防守' }[t];
        const desc = { aggressive: '己方+5%战力', balanced: '无修正', defensive: '对手-5%战力' }[t];
        const active = (gameState.tactic || 'balanced') === t ? 'active' : '';
        return `<button class="tactic-btn ${active}" onclick="setTactic('${t}')">${cn}<small>${desc}</small></button>`;
    }).join('');
    if (nextMatch && nextMatch.opponent) {
        const opp = AI_TEAMS.find(t => t.name === nextMatch.opponent);
        const oppPower = getTeamPowerByName(nextMatch.opponent);
        nextInfo.innerHTML = `
            <div class="match-stage-line">${matchLabel(nextMatch)}</div>
            <div class="teams-row">
                <div class="team-half">
                    <h3>${gameState.teamName}</h3>
                    <span class="power">战力 ${gameState.teamPower} · 有效 ${effPower}</span>
                    <span class="team-morale-summary">💪 士气 ${teamMorale}</span>
                </div>
                <div class="vs-badge">VS</div>
                <div class="team-half">
                    <h3>${nextMatch.opponent} ${opp ? opp.country : ''}</h3>
                    <span class="power">战力 ${oppPower}</span>
                </div>
            </div>
            <div class="tactic-selector">${tacticBtns}</div>
        `;
        playBtn.style.display = 'block';
    } else {
        const week = gameState.schedule.find(s => s.week === gameState.currentWeek);
        const label = week ? matchLabel(week) : '';
        nextInfo.innerHTML = `<p class="no-match">${label || '本周无比赛'}${gameState.currentWeek >= TOTAL_WEEKS ? ' · 赛季结束' : ' · 轮空'}</p>
            <div class="tactic-selector">${tacticBtns}</div>`;
        playBtn.style.display = 'none';
    }
    const miniList = document.getElementById('team-overview-list');
    miniList.innerHTML = gameState.roster.slice(0, 5).map(a => `
        <div class="agent-mini ${a.isPro ? 'pro-mini' : ''}">
            <div class="agent-mini-avatar role-${a.role}">${a.avatar}</div>
            <div class="agent-mini-info">
                <div class="agent-mini-name">${a.name}${a.isPro ? ' ⭐' : ''}</div>
                <div class="agent-mini-role">${a.isPro && a.country ? a.country + ' ' : ''}${getRoleCN(a.role)}</div>
            </div>
            <div class="agent-mini-stats">
                <div class="agent-mini-power">${a.power}</div>
                <div class="agent-mini-rating">${a.rating}</div>
            </div>
        </div>
    `).join('');
}

function renderRoster() {
    const grid = document.getElementById('roster-grid');
    updateTeamPower();
    if (gameState.roster.length === 0) {
        grid.innerHTML = '<p class="no-match" style="grid-column: 1/-1; text-align: center; padding: 40px;">你的战队还没有队员，去转会市场签约吧！</p>';
        return;
    }
    grid.innerHTML = gameState.roster.map(agent => renderAgentCard(agent, true)).join('');
}

function renderAgentCard(agent, isOwned) {
    const proBadge = agent.isPro ? `<span class="pro-badge">VCT ⭐</span>` : '';
    const teamTag = agent.isPro && agent.team ? `<div class="agent-team-tag">原属: ${agent.team}</div>` : '';
    const country = agent.isPro && agent.country ? `<span class="agent-country">${agent.country}</span>` : '';
    return `
        <div class="agent-card ${agent.isPro ? 'pro-card' : ''}">
            ${proBadge}
            <div class="agent-card-header">
                <div class="agent-avatar role-${agent.role}" style="${agent.isPro ? 'box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);' : ''}">
                    ${agent.avatar}
                    <span class="rating-badge rating-${agent.rating}">${agent.rating}</span>
                </div>
                <div class="agent-basic">
                    <div class="agent-name">${agent.name} ${country}</div>
                    <div class="agent-role">${getRoleCN(agent.role)}</div>
                    ${teamTag}
                </div>
                <div class="agent-power-display">
                    <div class="agent-power-num">${agent.power}</div>
                    <div class="agent-power-label">战力</div>
                </div>
            </div>
            <div class="agent-card-body">
                ${renderStatRow('瞄准', agent.aim)}
                ${renderStatRow('意识', agent.gameSense)}
                ${renderStatRow('领导', agent.leadership)}
                ${renderStatRow('技能', agent.utility)}
                ${isOwned ? (() => {
                    const m = typeof agent.morale === 'number' ? agent.morale : 70;
                    const color = m >= 70 ? '#00E5A0' : m >= 40 ? '#F7B500' : '#FF4655';
                    return `<div class="morale-label"><span>士气</span><span>${m}</span></div>
                            <div class="morale-bar"><div class="morale-bar-fill" style="width:${m}%;background:${color};"></div></div>`;
                })() : ''}
            </div>
            <div class="agent-card-footer">
                ${isOwned ? `
                    <div class="agent-actions">
                        <button class="btn ${agent.trainedWeek === gameState.currentWeek ? 'btn-basic' : 'btn-train'}" ${agent.trainedWeek === gameState.currentWeek ? 'disabled' : ''} onclick="trainAgent('${agent.uniqueId}')">${agent.trainedWeek === gameState.currentWeek ? '本周已训练' : '训练 $8,000'}</button>
                        <button class="btn btn-basic" onclick="showAgentDetail('${agent.uniqueId}', true)">详情</button>
                        <button class="btn btn-release" onclick="releaseAgent('${agent.uniqueId}')">释放</button>
                        <button class="btn btn-remove" onclick="removeAgent('${agent.uniqueId}')" title="直接移除，不返还资金">移除</button>
                    </div>
                ` : `
                    <div class="price-tag">身价: <span class="price-amount">$${agent.price.toLocaleString()}</span></div>
                    <div class="agent-actions">
                        <button class="btn btn-primary" onclick="signAgent('${agent.uniqueId}')">签约</button>
                        <button class="btn btn-basic" onclick="showAgentDetail('${agent.uniqueId}', false)">详情</button>
                    </div>
                `}
            </div>
        </div>
    `;
}

function renderMarket() {
    const grid = document.getElementById('market-grid');
    const filter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const search = (document.getElementById('market-search')?.value || '').toLowerCase();
    let filtered = gameState.market.filter(a => {
        let matchRating = true;
        if (filter === 'pro') matchRating = a.isPro;
        else if (filter === 'agent') matchRating = !a.isPro;
        else matchRating = filter === 'all' || a.rating === filter;
        const matchSearch = a.name.toLowerCase().includes(search) || (a.realName || '').toLowerCase().includes(search);
        return matchRating && matchSearch;
    });
    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-match" style="grid-column: 1/-1; text-align: center; padding: 40px;">没有符合条件的选手</p>';
        return;
    }
    grid.innerHTML = filtered.map(agent => renderAgentCard(agent, false)).join('');
}

function renderStatRow(name, value) {
    return `
        <div class="stat-row">
            <span class="stat-name">${name}</span>
            <div class="stat-bar"><div class="stat-bar-fill" style="width: ${value}%;"></div></div>
            <span class="stat-value-num">${value}</span>
        </div>
    `;
}

function renderSchedule() {
    const container = document.getElementById('schedule-list');
    const weeks = {};
    gameState.schedule.forEach(match => {
        if (!weeks[match.week]) weeks[match.week] = [];
        weeks[match.week].push(match);
    });
    container.innerHTML = Object.keys(weeks).sort().map(week => `
        <div class="schedule-week">
            <div class="schedule-week-header">
                <span class="schedule-week-title">第 ${week} 周</span>
                ${parseInt(week) === gameState.currentWeek ? '<span style="color: var(--valorant-red); font-size: 12px; letter-spacing: 2px;">▶ 当前周</span>' : ''}
                ${parseInt(week) > gameState.currentWeek ? '<span style="color: var(--text-secondary); font-size: 12px;">待进行</span>' : ''}
                ${weeks[week].every(m => m.played) ? '<span style="color: var(--success); font-size: 12px;">已完成</span>' : ''}
            </div>
            <div class="schedule-matches">
                ${weeks[week].map(match => {
                    const opp = AI_TEAMS.find(t => t.name === match.opponent);
                    let homeAway = match.isHome ? 'home' : '';
                    let finished = match.played ? 'finished' : '';
                    let result = '';
                    if (match.played) {
                        const won = match.playerScore > match.opponentScore;
                        const lost = match.playerScore < match.opponentScore;
                        if (won) { finished += ' win'; result = `<span class="schedule-result">${match.playerScore} - ${match.opponentScore}</span>`; }
                        else if (lost) { finished += ' loss'; result = `<span class="schedule-result">${match.playerScore} - ${match.opponentScore}</span>`; }
                    }
                    return `
                        <div class="schedule-match ${homeAway} ${finished}">
                            <span class="schedule-team">${match.isHome ? '🏠 ' : '✈️ '}${gameState.teamName}</span>
                            ${result || `<span class="schedule-team" style="color: var(--valorant-muted);">VS</span>`}
                            <span class="schedule-team">${match.opponent} ${opp ? opp.country : ''}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
}

function renderStandings() {
    const tbody = document.getElementById('standings-body');
    const sorted = [...gameState.standings].sort((a, b) => b.points - a.points || b.wins - a.wins);
    gameState.standings = sorted;
    tbody.innerHTML = sorted.map((team, i) => {
        const rank = i + 1;
        const winRate = team.wins + team.losses === 0 ? '0%' : Math.round(team.wins / (team.wins + team.losses) * 100) + '%';
        return `
            <tr class="${team.isPlayerTeam ? 'my-team' : ''}">
                <td><span class="rank-badge rank-${rank > 3 ? '' : rank}">${rank}</span></td>
                <td style="font-weight: 700;">
                    <span class="team-color-dot" style="background: ${team.color || '#768079'};"></span>
                    ${team.name}${team.isPlayerTeam ? ' 👈' : ''}
                    ${!team.isPlayerTeam && team.country ? ` <span style="font-size: 14px;">${team.country}</span>` : ''}
                </td>
                <td style="font-size: 12px; color: var(--text-secondary);">${team.region || '-'}</td>
                <td class="right" style="color: var(--success);">${team.wins}</td>
                <td class="right" style="color: var(--danger);">${team.losses}</td>
                <td class="right">${winRate}</td>
                <td class="right"><span style="color: var(--valorant-red); font-weight: 900;">${team.points}</span></td>
                <td class="right"><span style="color: var(--text-secondary); font-size: 12px;">⚔ ${team.power}</span></td>
            </tr>
        `;
    }).join('');
}

let currentLeaderboardFilter = 'all';

function renderPlayerLeaderboard(type, btn) {
    document.querySelectorAll('.leaderboard-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const teamFilter = document.getElementById('leaderboard-team-filter');
    if (type === 'team') {
        teamFilter.classList.remove('hidden');
    } else {
        teamFilter.classList.add('hidden');
    }

    let players = [...REAL_PRO_PLAYERS, ...VALORANT_AGENTS];

    if (type === 'proOnly') {
        players = REAL_PRO_PLAYERS;
    }

    if (type === 'team' && currentLeaderboardFilter !== 'all') {
        players = REAL_PRO_PLAYERS.filter(p => p.team === currentLeaderboardFilter);
    }

    players.sort((a, b) => {
        if (type === 'rating') {
            const rankMap = { 'S': 5, 'A': 4, 'B': 3, 'C': 2 };
            const diff = rankMap[b.rating] - rankMap[a.rating];
            if (diff !== 0) return diff;
            return b.power - a.power;
        }
        return b.power - a.power;
    });

    const topPlayers = players.slice(0, 25);
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = topPlayers.map((p, i) => {
        const rank = i + 1;
        const rankClass = rank <= 3 ? 'rank-' + rank : '';
        const isPro = p.isPro ? '<span class="pro-tag">PRO</span>' : '';
        const roleCN = getRoleCN(p.role);
        const teamInfo = p.team ? `| ${p.team}` : (p.isPlayerOwned ? '| 你的战队' : '');
        return `
            <div class="leaderboard-item ${rankClass}">
                <div class="leaderboard-rank">#${rank}</div>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${p.name} ${isPro}</div>
                    <div class="leaderboard-meta">${p.country || ''} ${p.realName ? '· ' + p.realName : ''} · ${roleCN} ${teamInfo}</div>
                </div>
                <div class="leaderboard-value">${p.power}</div>
            </div>
        `;
    }).join('');

    if (topPlayers.length === 0) {
        list.innerHTML = '<div style="color: var(--text-secondary); text-align: center; padding: 30px;">没有符合条件的选手</div>';
    }
}

function filterLeaderboardTeam(teamName, btn) {
    document.querySelectorAll('#leaderboard-team-filter .leaderboard-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');
    currentLeaderboardFilter = teamName;
    renderPlayerLeaderboard('team', null);
}

function renderTeams() {
    const container = document.getElementById('teams-grid');
    if (!container) return;
    container.innerHTML = AI_TEAMS.map(team => {
        const teamPros = REAL_PRO_PLAYERS.filter(p => p.team === team.name);
        const standing = gameState.standings.find(s => s.name === team.name);
        return `
            <div class="team-card">
                <div class="team-header" style="border-left-color: ${team.color};">
                    <div class="team-tag-badge" style="background: ${team.color};">${team.tag}</div>
                    <div>
                        <div class="team-name">${team.name} ${team.country}</div>
                        <div class="team-region">${team.region} | 教练: ${team.coach}</div>
                    </div>
                    <div class="team-power-big">⚔ ${standing ? standing.power : team.power}</div>
                </div>
                <div class="team-roster-mini">
                    ${teamPros.length > 0 ? teamPros.map(p => `
                        <div class="team-pro-item">
                            <span class="pro-name">${p.name}</span>
                            <span class="pro-role">${getRoleCN(p.role)}</span>
                            <span class="pro-power">${p.power}</span>
                        </div>
                    `).join('') : '<div class="team-pro-item" style="color: var(--text-secondary);">阵容未公开</div>'}
                </div>
            </div>
        `;
    }).join('');
}

function signAgent(uniqueId) {
    const agent = gameState.market.find(a => a.uniqueId === uniqueId);
    if (!agent) return;
    if (gameState.roster.length >= MAX_ROSTER) { showToast('战队已满员', '最多只能有 ' + MAX_ROSTER + ' 名队员', 'error'); return; }
    if (gameState.money < agent.price) { showToast('资金不足', '还需要 $' + (agent.price - gameState.money).toLocaleString(), 'error'); return; }
    gameState.money -= agent.price;
    agent.isPlayerOwned = true;
    agent.wins = 0; agent.losses = 0;
    agent.morale = 70; agent.trainedWeek = 0;
    gameState.roster.push(agent);
    gameState.market = gameState.market.filter(a => a.uniqueId !== uniqueId);
    const tag = agent.isPro ? 'VCT 巨星加入！' : '签约成功';
    showToast(tag, agent.name + ' 已加入你的战队！', 'success');
    updateTeamPower();
    renderMarket();
    updateAllDisplays();
}

function releaseAgent(uniqueId) {
    const agent = gameState.roster.find(a => a.uniqueId === uniqueId);
    if (!agent) return;
    const confirmPrice = Math.round(agent.price * 0.5);
    showConfirmModal('释放队员', `你确定要释放 ${agent.name} 吗？\n你将获得 $${confirmPrice.toLocaleString()} 补偿金。`, () => {
        gameState.money += confirmPrice;
        gameState.roster = gameState.roster.filter(a => a.uniqueId !== uniqueId);
        agent.isPlayerOwned = false;
        gameState.market.push(agent);
        showToast('释放成功', agent.name + ' 已离开战队', 'success');
        updateTeamPower();
        renderRoster();
        updateAllDisplays();
    });
}

function trainAgent(uniqueId) {
    const agent = gameState.roster.find(a => a.uniqueId === uniqueId);
    if (!agent) return;
    if (agent.trainedWeek === gameState.currentWeek) {
        showToast('本周已训练', agent.name + ' 本周已完成训练，下周再来吧', 'warning');
        return;
    }
    const cost = 8000;
    if (gameState.money < cost) { showToast('资金不足', '训练需要 $' + cost.toLocaleString(), 'error'); return; }
    const body = document.getElementById('modal-body');
    const statCN = { aim: '瞄准', gameSense: '意识', leadership: '领导', utility: '技能' };
    body.innerHTML = `
        <h2>训练 ${agent.name}</h2>
        <p style="margin-bottom: 16px; color: var(--text-secondary);">选择一项属性进行专项训练（花费 $${cost.toLocaleString()}，每名选手每周限 1 次）。</p>
        <div class="train-stat-grid">
            ${['aim','gameSense','leadership','utility'].map(s => `
                <button class="btn btn-primary train-stat-btn" onclick="doTrainAgent('${uniqueId}','${s}')">
                    <div class="train-stat-name">${statCN[s]}</div>
                    <div class="train-stat-val">${agent[s]}</div>
                </button>
            `).join('')}
        </div>
        <div class="modal-actions">
            <button class="btn btn-ghost" onclick="closeModal()" style="flex:1;">取消</button>
        </div>
    `;
    openModal();
}

function doTrainAgent(uniqueId, stat) {
    const agent = gameState.roster.find(a => a.uniqueId === uniqueId);
    if (!agent) return;
    if (agent.trainedWeek === gameState.currentWeek) { closeModal(); showToast('本周已训练', '该选手本周已训练', 'warning'); return; }
    const cost = 8000;
    if (gameState.money < cost) { closeModal(); showToast('资金不足', '训练需要 $' + cost.toLocaleString(), 'error'); return; }
    const base = Math.floor(Math.random() * 4) + 2;
    const increase = agent[stat] >= 90 ? Math.floor(base / 2) : base;
    agent[stat] = Math.min(99, agent[stat] + increase);
    agent.power = calculateAgentPower(agent);
    updateAgentRating(agent);
    agent.trainedWeek = gameState.currentWeek;
    gameState.money -= cost;
    const statCN = { aim: '瞄准', gameSense: '意识', leadership: '领导', utility: '技能' };
    closeModal();
    showToast('训练完成', agent.name + ' 的 ' + statCN[stat] + ' +' + increase + '！', 'success');
    renderRoster();
    updateAllDisplays();
}

function calculateAgentPower(agent) { return Math.round((agent.aim + agent.gameSense + agent.leadership + agent.utility) / 4); }

function updateAgentRating(agent) {
    if (agent.power >= 88) agent.rating = 'S';
    else if (agent.power >= 78) agent.rating = 'A';
    else if (agent.power >= 68) agent.rating = 'B';
    else if (agent.power >= 58) agent.rating = 'C';
    else agent.rating = 'D';
}

function getRoleCN(role) {
    const map = { Duelist: '决斗者', Initiator: '先锋', Controller: '控场者', Sentinel: '哨位' };
    return map[role] || role;
}

function getTeamPowerByName(name) {
    const team = gameState.standings.find(s => s.name === name);
    return team ? team.power : 70;
}

function getPlayerRank() {
    const sorted = [...gameState.standings].sort((a, b) => b.points - a.points || b.wins - a.wins);
    return sorted.findIndex(s => s.isPlayerTeam) + 1;
}

function advanceWeek() {
    if (gameState.currentWeek >= TOTAL_WEEKS) { showToast('赛季结束', '恭喜！你可以开始新赛季了', 'warning'); return; }
    const weeklyBonus = 10000 + gameState.currentWeek * 500;
    gameState.money += weeklyBonus;
    gameState.currentWeek++;
    const nextMatch = gameState.schedule.find(s => s.week === gameState.currentWeek && !s.played);
    showToast('进入第 ' + gameState.currentWeek + ' 周', '获得 $' + weeklyBonus.toLocaleString() + ' 训练津贴', 'success');
    updateAllDisplays();
    renderDashboard();
    if (nextMatch) {
        showConfirmModal('即将开战', '本周你将对阵 ' + nextMatch.opponent + '！现在就开始比赛吗？', () => { playMatch(nextMatch); });
    }
}

function simulateAllMatches() {
    if (gameState.currentWeek >= TOTAL_WEEKS) { showToast('赛季结束', '没有更多比赛了', 'warning'); return; }
    while (gameState.currentWeek <= TOTAL_WEEKS) {
        const match = gameState.schedule.find(s => s.week === gameState.currentWeek && !s.played);
        if (match) simulateMatchResult(match);
        gameState.currentWeek++;
    }
    gameState.currentWeek = TOTAL_WEEKS;
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    const finalRank = getPlayerRank();
    const isChampion = finalRank === 1;
    const title = isChampion ? '🏆 赛季冠军！' : '赛季结束';
    showToast(title, `战绩: ${playerStanding.wins}胜 ${playerStanding.losses}负，排名 #${finalRank}`, isChampion ? 'success' : 'warning');
    updateAllDisplays();
    renderDashboard();
    renderStandings();
}

function simulateMatchResult(match) {
    const playerPower = gameState.teamPower;
    const opponentPower = getTeamPowerByName(match.opponent);
    let playerScore = 0; let opponentScore = 0; const winLimit = 13;
    while (playerScore < winLimit && opponentScore < winLimit) {
        const ownRound = Math.random() < (playerPower / (playerPower + opponentPower));
        if (ownRound) playerScore++; else opponentScore++;
    }
    match.played = true; match.playerScore = playerScore; match.opponentScore = opponentScore;
    match.result = playerScore > opponentScore ? 'win' : 'loss';
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    const oppStanding = gameState.standings.find(s => s.name === match.opponent);
    if (playerScore > opponentScore) { playerStanding.wins++; playerStanding.points += 3; oppStanding.losses++; }
    else { playerStanding.losses++; oppStanding.wins++; oppStanding.points += 3; }
    gameState.matchHistory.push({ week: match.week, playerTeam: gameState.teamName, opponent: match.opponent, playerScore, opponentScore, didWin: playerScore > opponentScore });
}

function playMatch(match) {
    const oppTeam = AI_TEAMS.find(t => t.name === match.opponent);
    const oppPlayers = oppTeam
        ? REAL_PRO_PLAYERS.filter(p => p.team === oppTeam.name).map(p => ({ name: p.name, role: p.role, power: p.power }))
        : [];
    runVisualMatch({
        mode: 'league',
        weekLabel: '第 ' + match.week + ' 周 · VCT 冠军联赛',
        leftName: gameState.teamName,
        rightName: match.opponent + (oppTeam ? ' ' + oppTeam.country : ''),
        leftPower: gameState.teamPower,
        rightPower: getTeamPowerByName(match.opponent),
        leftPlayers: gameState.roster,
        rightPlayers: oppPlayers,
        onFinish: (l, r) => finishMatch(match, l, r)
    });
}

function finishMatch(match, playerScore, opponentScore) {
    match.played = true; match.playerScore = playerScore; match.opponentScore = opponentScore;
    const didWin = playerScore > opponentScore; match.result = didWin ? 'win' : 'loss';
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    const oppStanding = gameState.standings.find(s => s.name === match.opponent);
    if (didWin) {
        playerStanding.wins++; playerStanding.points += 3; if (oppStanding) oppStanding.losses++;
        document.getElementById('match-team-left').classList.add('winner');
        document.getElementById('match-team-right').classList.add('loser');
    } else {
        playerStanding.losses++; if (oppStanding) { oppStanding.wins++; oppStanding.points += 3; }
        document.getElementById('match-team-left').classList.add('loser');
        document.getElementById('match-team-right').classList.add('winner');
    }

    const playerStats = generatePlayerStats(gameState.roster, playerScore, opponentScore, true);
    const oppTeam = AI_TEAMS.find(t => t.name === match.opponent);
    const oppProPlayers = oppTeam ? REAL_PRO_PLAYERS.filter(p => p.team === oppTeam.name) : [];
    const oppStats = generatePlayerStats(oppProPlayers.length > 0 ? oppProPlayers : [], opponentScore, playerScore, false);

    const allStats = [...playerStats, ...oppStats];
    const mvp = allStats.sort((a, b) => b.performance - a.performance)[0];

    playerStats.forEach(s => {
        const player = gameState.roster.find(p => p.name === s.name || p.id === s.id);
        if (player) {
            player.kills = (player.kills || 0) + s.kills;
            player.deaths = (player.deaths || 0) + s.deaths;
            player.assists = (player.assists || 0) + s.assists;
            player.mvps = (player.mvps || 0) + (mvp && mvp.name === player.name && mvp.isPlayerTeam ? 1 : 0);
            player.matches = (player.matches || 0) + 1;
        }
    });

    gameState.matchHistory.push({
        week: match.week,
        playerTeam: gameState.teamName,
        opponent: match.opponent,
        playerScore, opponentScore, didWin,
        mvpName: mvp ? mvp.name : '',
        playerStats: playerStats,
    });

    renderMatchStats(mvp, playerStats, oppStats);

    const resultDiv = document.getElementById('match-result');
    resultDiv.textContent = didWin ? '🏆 胜利！' : '💀 失败...';
    resultDiv.className = 'match-result ' + (didWin ? 'win' : 'loss');
    const bonus = didWin ? 15000 : 5000;
    gameState.money += bonus;
    showToast('比赛奖金', didWin ? '胜利奖金 $15,000' : '安慰奖 $5,000', didWin ? 'success' : 'warning');
    document.getElementById('match-close-btn').style.display = 'block';
    updateAllDisplays(); renderDashboard();
    if (gameState.shop && gameState.shop.autoSave) saveGame();
    if (typeof autoSyncAfterMatch === 'function') autoSyncAfterMatch();
}

function generatePlayerStats(playerList, ourScore, theirScore, isPlayerTeam) {
    if (!playerList || playerList.length === 0) return [];
    const teamFactor = ourScore / Math.max(ourScore + theirScore, 1);
    return playerList.map((p, i) => {
        const basePower = p.power || 70;
        const rand = 0.7 + Math.random() * 0.6;
        const kills = Math.round((basePower / 10) * rand * teamFactor * (ourScore / 13));
        const deaths = Math.round((basePower / 15) * (1.2 - teamFactor) * rand * (theirScore / 13) + 2);
        const assists = Math.round((basePower / 20) * rand + 1);
        const kda = kills / Math.max(deaths, 1);
        const performance = Math.round((kills * 2 + assists - deaths * 0.5 + basePower * 0.3) * (isPlayerTeam ? 1 : 0.7));
        return {
            id: p.id,
            name: p.name,
            role: p.role,
            kills, deaths, assists, kda: kda.toFixed(2),
            performance, isPlayerTeam,
        };
    }).sort((a, b) => b.performance - a.performance);
}

function renderMatchStats(mvp, playerStats, oppStats) {
    const panel = document.getElementById('match-stats-panel');
    panel.classList.remove('hidden');

    if (mvp) {
        document.getElementById('match-mvp').innerHTML = `
            <div class="mvp-name">👑 ${mvp.name}</div>
            <div class="mvp-team">${mvp.isPlayerTeam ? gameState.teamName : '对手战队'}</div>
            <div class="mvp-stats-mini">KDA: ${mvp.kda} · ${mvp.kills}K / ${mvp.deaths}D / ${mvp.assists}A</div>
        `;
    }

    const statsDiv = document.getElementById('match-player-stats');
    statsDiv.innerHTML = '';
    [...playerStats, ...oppStats].forEach(s => {
        const card = document.createElement('div');
        card.className = 'player-stat-card' + (mvp && mvp.name === s.name ? ' is-mvp' : '');
        card.innerHTML = `
            <div class="player-stat-name">${s.name} ${mvp && mvp.name === s.name ? '👑' : ''}</div>
            <div class="player-stat-numbers">
                <span>KDA ${s.kda}</span>
                <span>${s.isPlayerTeam ? '你的队' : '对手'}</span>
            </div>
            <div class="player-stat-score ${s.performance > 60 ? 'good' : ''}">表现 ${s.performance}</div>
        `;
        statsDiv.appendChild(card);
    });
}

function closeMatchModal() {
    const modal = document.getElementById('match-modal'); modal.classList.add('hidden');
    document.getElementById('match-team-left').classList.remove('winner', 'loser');
    document.getElementById('match-team-right').classList.remove('winner', 'loser');
    const statsPanel = document.getElementById('match-stats-panel');
    if (statsPanel) statsPanel.classList.add('hidden');
    if (matchFinishMode === 'friendly') {
        matchFinishMode = 'league';
        if (typeof renderVersus === 'function') renderVersus();
        return;
    }
    if (gameState.currentWeek >= TOTAL_WEEKS) {
        if (!gameState.lastSeasonMail || gameState.lastSeasonMail !== gameState.season) {
            gameState.lastSeasonMail = gameState.season;
            addMail('VCT 联盟', '赛季 ' + gameState.season + ' 结束', '本赛季全部比赛结束，联盟发放赛季结算奖金。', 100000);
            showToast('赛季结算', '赛季奖金已发送到邮箱', 'success');
        } else {
            showToast('赛季结束', '所有比赛已完成！', 'success');
        }
    }
    else {
        showConfirmModal('下一周', '比赛结束！要进入下一周吗？', () => {
            const weeklyBonus = 10000 + gameState.currentWeek * 500;
            gameState.money += weeklyBonus; gameState.currentWeek++;
            showToast('进入第 ' + gameState.currentWeek + ' 周', '获得 $' + weeklyBonus.toLocaleString(), 'success');
            updateAllDisplays(); renderDashboard();
        });
    }
}

function playNextMatch() {
    const match = gameState.schedule.find(s => s.week === gameState.currentWeek && !s.played);
    if (match) playMatch(match);
}

document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-next-match');
    if (playBtn) playBtn.addEventListener('click', playNextMatch);
    const refreshBtn = document.getElementById('refresh-market');
    if (refreshBtn) refreshBtn.addEventListener('click', refreshMarket);
});

function showAgentDetail(uniqueId, isOwned) {
    const agent = isOwned ? gameState.roster.find(a => a.uniqueId === uniqueId) : gameState.market.find(a => a.uniqueId === uniqueId);
    if (!agent) return;
    const body = document.getElementById('modal-body');
    const proInfo = agent.isPro ? `
        <div class="pro-info-box">
            <p><strong>真名:</strong> ${agent.realName}</p>
            <p><strong>国籍:</strong> ${agent.country}</p>
            <p><strong>现效力:</strong> ${agent.team}</p>
            <p style="margin-top: 10px; color: var(--valorant-muted); font-style: italic;">"${agent.bio || ''}"</p>
        </div>` : '';
    body.innerHTML = `
        <h2>${agent.name} <span class="role-icon role-${agent.role}">${getRoleCN(agent.role)}</span> ${agent.isPro ? '<span class="pro-tag">VCT职业</span>' : ''}</h2>
        ${proInfo}
        <div style="display: flex; gap: 30px; margin: 20px 0;">
            <div class="agent-avatar role-${agent.role}" style="width: 100px; height: 100px; font-size: 42px; ${agent.isPro ? 'box-shadow: 0 0 25px rgba(255, 215, 0, 0.5);' : ''}">
                ${agent.avatar}
                <span class="rating-badge rating-${agent.rating}" style="width: 32px; height: 32px; font-size: 14px;">${agent.rating}</span>
            </div>
            <div>
                <p><strong>战力:</strong> <span style="color: var(--valorant-red); font-size: 20px;">${agent.power}</span></p>
                <p><strong>稀有度:</strong> ${agent.rating}级</p>
                <p><strong>角色:</strong> ${getRoleCN(agent.role)}</p>
                ${isOwned ? `<p><strong>战绩:</strong> ${agent.wins}胜 ${agent.losses}负</p>` : `<p><strong>身价:</strong> $${agent.price.toLocaleString()}</p>`}
            </div>
        </div>
        <h3 style="color: var(--text-secondary); font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px;">详细属性</h3>
        ${renderStatRow('瞄准 (Aim)', agent.aim)}
        ${renderStatRow('游戏意识 (Game Sense)', agent.gameSense)}
        ${renderStatRow('领导力 (Leadership)', agent.leadership)}
        ${renderStatRow('技能使用 (Utility)', agent.utility)}
    `;
    openModal();
}

function changeTeamName() {
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2>修改队名</h2>
        <p style="margin-bottom: 15px;">请输入你的战队名称：</p>
        <input type="text" id="new-team-name" value="${gameState.teamName}" maxlength="20" style="width: 100%;">
        <p style="margin-top: 10px; margin-bottom: 15px;">战队缩写 (2-4字)：</p>
        <input type="text" id="new-team-tag" value="${gameState.teamTag}" maxlength="4" style="width: 100%;">
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="confirmChangeName()">确认修改</button>
            <button class="btn btn-ghost" onclick="closeModal()">取消</button>
        </div>
    `;
    openModal();
    setTimeout(() => document.getElementById('new-team-name').focus(), 100);
}

function confirmChangeName() {
    const input = document.getElementById('new-team-name');
    const tagInput = document.getElementById('new-team-tag');
    const newName = input.value.trim();
    const newTag = tagInput.value.trim().toUpperCase();
    if (!newName) { showToast('队名不能为空', '', 'error'); return; }
    if (gameState.teamNamed) {
        if (gameState.shop.renameCards > 0) {
            gameState.shop.renameCards--;
        } else if (gameState.money >= 20000) {
            gameState.money -= 20000;
        } else {
            return showToast('无法改名', '改名需要 $20,000，或购买一张改名卡', 'error');
        }
    }
    renameTeam(newName, newTag);
    gameState.teamNamed = true;
    closeModal();
    showToast('队名已修改', '新队名: ' + newName + ' (' + (newTag || 'MY') + ')', 'success');
    updateAllDisplays(); renderDashboard(); saveGame();
}

function renameTeam(newName, newTag) {
    const oldName = gameState.teamName;
    gameState.teamName = newName;
    if (newTag) gameState.teamTag = newTag;
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    if (playerStanding) { playerStanding.name = newName; playerStanding.tag = gameState.teamTag; }
    gameState.schedule.forEach(m => { if (m.playerTeam === oldName) m.playerTeam = newName; });
    gameState.matchHistory.forEach(m => { if (m.playerTeam === oldName) m.playerTeam = newName; });
}

function openModal() { document.getElementById('modal').classList.remove('hidden'); }
function closeModal() { document.getElementById('modal').classList.add('hidden'); }

function showConfirmModal(title, message, onConfirm) {
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2>${title}</h2>
        <p style="margin-bottom: 20px; white-space: pre-line;">${message}</p>
        <div class="modal-actions">
            <button class="btn btn-danger" id="confirm-btn" style="flex: 1;">确认</button>
            <button class="btn btn-ghost" onclick="closeModal()" style="flex: 1;">取消</button>
        </div>
    `;
    openModal();
    document.getElementById('confirm-btn').onclick = () => { closeModal(); onConfirm(); };
}

function showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = `<div class="toast-title">${title}</div><div class="toast-msg">${message}</div>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function saveGame() {
    try { localStorage.setItem('vct_manager_save', JSON.stringify(gameState)); showToast('存档成功', '游戏已保存到本地', 'success'); }
    catch (e) { showToast('存档失败', e.message, 'error'); }
}

function loadGame() {
    if (loadGameSilent()) {
        hideStartScreen();
        showToast('读档成功', '游戏已加载', 'success');
    }
}

function loadGameSilent() {
    const data = localStorage.getItem('vct_manager_save');
    if (!data) { return false; }
    try {
        gameState = JSON.parse(data);
        if (!sanitizeGameState(gameState)) return false;
        updateAllDisplays();
        showScreen('dashboard');
        return true;
    } catch (e) { return false; }
}

/* 兼容旧版本存档：清理空项、补齐缺失字段与战队条目 */
function sanitizeGameState(state) {
    if (!state || typeof state !== 'object') return false;
    if (!Array.isArray(state.roster)) state.roster = [];
    if (!Array.isArray(state.market)) state.market = [];
    if (!Array.isArray(state.schedule)) state.schedule = [];
    if (!Array.isArray(state.matchHistory)) state.matchHistory = [];
    if (!Array.isArray(state.standings)) state.standings = [];

    state.roster = state.roster.filter(p => p && typeof p === 'object' && p.name);
    state.market = state.market.filter(p => p && typeof p === 'object' && p.name);
    state.standings = state.standings.filter(t => t && typeof t === 'object' && t.name);

    state.teamName = state.teamName || '我的战队';
    state.teamTag = state.teamTag || 'MY';
    state.money = Number(state.money) || 0;
    state.season = Number(state.season) || 1;
    state.currentWeek = Math.min(Math.max(Number(state.currentWeek) || 1, 1), TOTAL_WEEKS);
    state.teamPower = Number(state.teamPower) || 0;

    const hasPlayer = state.standings.some(t => t.isPlayerTeam);
    if (!hasPlayer) {
        state.standings.push({
            name: state.teamName, tag: state.teamTag, region: 'MY', country: '🎮',
            color: '#FF4655', power: state.teamPower, wins: 0, losses: 0, points: 0, isPlayerTeam: true
        });
    }

    const known = new Set(state.standings.map(t => t.name));
    AI_TEAMS.forEach(team => {
        if (!known.has(team.name)) {
            state.standings.push({
                name: team.name, tag: team.tag, region: team.region, country: team.country,
                color: team.color, power: team.power, wins: 0, losses: 0, points: 0, isPlayerTeam: false
            });
        }
    });
    initExtras(state);
    return true;
}

function newGame() {
    showConfirmModal('新游戏', '开始新游戏将清除所有进度，确定吗？', () => {
        localStorage.removeItem('vct_manager_save');
        showStartScreen();
    });
}

function showStartScreen() {
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('app').style.display = 'none';
    document.getElementById('team-pick-section').classList.add('hidden');
}

function hideStartScreen() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('app').style.display = 'block';
}

function selectCustomTeam() {
    initGame_custom();
    gameState.teamNamed = false;
    hideStartScreen();
    showToast('自创战队', '从零开始，打造你的王朝！', 'success');
    if (!gameState.mail || !gameState.mail.some(m => m.subject === '欢迎加入 VCT')) {
        addMail('VCT 联盟', '欢迎加入 VCT', '你的战队已注册成功。先给战队起个名字，再去转会市场签下第一批特工吧。', 50000);
    }
    updateAllDisplays();
    renderDashboard();
    openNamingModal();
}

function showExistingTeams() {
    document.getElementById('mode-pick-section').classList.add('hidden');
    document.getElementById('team-pick-section').classList.remove('hidden');
    renderTeamPickGrid();
}

function backToStart() {
    document.getElementById('mode-pick-section').classList.remove('hidden');
    document.getElementById('team-pick-section').classList.add('hidden');
}

function checkLoadSave() {
    if (loadGameSilent()) {
        hideStartScreen();
    } else {
        showToast('读档失败', '没有找到存档', 'error');
    }
}

function renderTeamPickGrid() {
    const grid = document.getElementById('team-pick-grid');
    grid.innerHTML = '';
    AI_TEAMS.forEach(team => {
        const div = document.createElement('button');
        div.className = 'team-pick-item';
        div.style.borderColor = team.color;
        div.innerHTML = `
            <div class="team-pick-power">${team.power}</div>
            <div class="team-pick-tag">${team.tag}</div>
            <div class="team-pick-name">${team.name}</div>
            <div class="team-pick-meta">${team.country} · ${team.region} · ${team.coach}</div>
        `;
        div.onclick = () => pickExistingTeam(team);
        grid.appendChild(div);
    });
}

function pickExistingTeam(team) {
    const teamProPlayers = REAL_PRO_PLAYERS.filter(p => p.team === team.name);
    const rosterCount = teamProPlayers.length;
    showConfirmModal('接管 ' + team.name, 
        `确定要接管 ${team.name} (${team.tag}) 吗？\n\n` +
        `• 战力: ${team.power}\n` +
        `• 赛区: ${team.region}\n` +
        `• 教练: ${team.coach}\n` +
        `• 阵容: ${rosterCount} 名职业选手\n\n` +
        `你将直接获得这支战队的完整阵容！`,
        () => {
            initGame_withTeam(team);
            hideStartScreen();
            showToast('接管成功', '欢迎成为 ' + team.name + ' 的新任经理！', 'success');
        }
    );
}

function initGame_custom() {
    gameState = {
        teamName: '我的战队',
        teamTag: 'MY',
        teamPower: 0,
        money: 500000,
        season: 1,
        currentWeek: 1,
        roster: [],
        market: [],
        schedule: [],
        standings: [],
        matchHistory: [],
    };
    setupInitialRoster();
    setupAIStandings();
    generateMarket();
    generateSchedule();
    initExtras(gameState);
    updateAllDisplays();
    showScreen('dashboard');
}

function initGame_withTeam(team) {
    const teamProPlayers = REAL_PRO_PLAYERS.filter(p => p.team === team.name);
    const roster = teamProPlayers.map((template, i) => {
        const agent = cloneAgent(template);
        agent.uniqueId = 'roster_' + Date.now() + '_' + i;
        agent.isPlayerOwned = true;
        agent.wins = 0;
        agent.losses = 0;
        agent.isPro = true;
        agent.realName = template.realName;
        agent.nationality = template.country;
        agent.bio = template.bio;
        agent.proTeam = template.team;
        return agent;
    });

    const avgPower = roster.length > 0 
        ? roster.reduce((s, a) => s + a.power, 0) / roster.length 
        : team.power;

    gameState = {
        teamName: team.name,
        teamTag: team.tag,
        teamPower: Math.round(avgPower),
        money: 200000,
        season: 1,
        currentWeek: 1,
        roster: roster,
        market: [],
        schedule: [],
        standings: [],
        matchHistory: [],
    };

    setupAIStandings_override(team);
    generateMarket();
    generateSchedule();
    gameState.teamNamed = true;
    initExtras(gameState);
    updateAllDisplays();
    showScreen('dashboard');
}

function setupAIStandings_override(playerTeam) {
    const allTeams = AI_TEAMS.map(t => ({
        name: t.name,
        tag: t.tag,
        region: t.region,
        country: t.country,
        coach: t.coach,
        color: t.color,
        power: t.power,
        wins: 0,
        losses: 0,
        points: 0,
        isPlayerTeam: t.tag === playerTeam.tag
    }));

    const playerEntry = allTeams.find(t => t.tag === playerTeam.tag);
    if (playerEntry) {
        playerEntry.power = Math.round(gameState.teamPower);
        playerEntry.wins = 0;
        playerEntry.losses = 0;
        playerEntry.points = 0;
    } else {
        allTeams.push({
            name: gameState.teamName,
            tag: gameState.teamTag,
            region: playerTeam.region,
            country: playerTeam.country,
            coach: playerTeam.coach,
            color: playerTeam.color,
            power: Math.round(gameState.teamPower),
            wins: 0,
            losses: 0,
            points: 0,
            isPlayerTeam: true
        });
    }

    gameState.standings = allTeams;
}

(function startup() {
    const hasSave = !!localStorage.getItem('vct_manager_save');
    if (hasSave) {
        showStartScreen();
        const loadBtn = document.querySelector('.start-footer .btn');
        loadBtn.textContent = '📂 读取存档 (已有)';
    } else {
        showStartScreen();
    }
})();

// ==================== ADMIN CONSOLE ====================

let adminVisible = false;

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        toggleAdmin();
    }
    if (e.key === 'Escape' && adminVisible) {
        toggleAdmin();
    }
});

function toggleAdmin() {
    adminVisible = !adminVisible;
    const panel = document.getElementById('admin-panel');
    if (panel) {
        panel.classList.toggle('visible', adminVisible);
        if (adminVisible) refreshAdminStats();
    }
}

function refreshAdminStats() {
    if (!gameState) return;
    document.getElementById('admin-money').textContent = '$' + gameState.money.toLocaleString();
    document.getElementById('admin-week').textContent = gameState.currentWeek + ' / ' + TOTAL_WEEKS;
    document.getElementById('admin-season').textContent = gameState.season;
    document.getElementById('admin-power').textContent = gameState.teamPower;
    document.getElementById('admin-roster').textContent = gameState.roster.length + ' 人';
    document.getElementById('admin-market').textContent = gameState.market.length + ' 人';
    const standing = gameState.standings.find(s => s && s.isPlayerTeam);
    document.getElementById('admin-standing').textContent = standing ? `${standing.wins}W ${standing.losses}L (第${gameState.standings.indexOf(standing)+1}名)` : '-';
}

function adminAddMoney(amount) {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    gameState.money += amount;
    updateAllDisplays();
    refreshAdminStats();
    showToast('💰 获得 $' + amount.toLocaleString(), 'success');
    saveGame();
}

function adminSetMoney() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    const val = prompt('设置金币数量:', gameState.money);
    if (val === null) return;
    const n = parseInt(val.replace(/,/g, ''));
    if (isNaN(n) || n < 0) return showToast('无效数值', 'error');
    gameState.money = n;
    updateAllDisplays();
    refreshAdminStats();
    showToast('💰 金币已设置为 $' + n.toLocaleString(), 'success');
    saveGame();
}

function adminJumpToWeek() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    const val = prompt('跳到第几周? (1-' + TOTAL_WEEKS + ')', gameState.currentWeek);
    if (val === null) return;
    const n = parseInt(val);
    if (isNaN(n) || n < 1 || n > TOTAL_WEEKS) return showToast('无效周数', 'error');
    gameState.currentWeek = n;
    generateSchedule();
    updateAllDisplays();
    refreshAdminStats();
    showToast('📅 跳到第 ' + n + ' 周', 'success');
    saveGame();
}

function adminSimulateRemaining() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    if (gameState.currentWeek >= TOTAL_WEEKS) return showToast('赛季已结束', 'warning');
    const count = TOTAL_WEEKS - gameState.currentWeek;
    for (let i = 0; i < count; i++) {
        simulateAllMatches();
        gameState.currentWeek++;
    }
    generateSchedule();
    updateAllDisplays();
    refreshAdminStats();
    showToast('🏁 模拟了剩余 ' + count + ' 周比赛!', 'success');
    saveGame();
}

function adminWinNextMatch() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    if (!gameState.schedule[gameState.currentWeek - 1]) return showToast('本周无比赛', 'warning');
    const match = gameState.schedule[gameState.currentWeek - 1].find(m => m.playerTeam);
    if (!match) return showToast('本周无你的比赛', 'warning');
    match.playerTeam.wins++;
    match.aiTeam.losses++;
    if (match.playerTeam.score >= match.aiTeam.score) {
        match.playerTeam.score = Math.max(match.playerTeam.score, match.aiTeam.score + 13);
    }
    simulateAllMatches();
    generateSchedule();
    const standing = gameState.standings.find(s => s && s.isPlayerTeam);
    updateAllDisplays();
    refreshAdminStats();
    showToast('🏆 强制获胜! 当前 ' + standing.wins + ' 胜 ' + standing.losses + ' 负', 'success');
    saveGame();
}

function adminNextSeason() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    showConfirmModal('开始下赛季?', '当前赛季将被标记为结束，新赛季将重新生成赛程和转会市场。', () => {
        gameState.season++;
        gameState.currentWeek = 1;
        gameState.money += 200000;
        setupAIStandings();
        generateMarket();
        generateSchedule();
        gameState.matchHistory = [];
        updateTeamPower();
        updateAllDisplays();
        refreshAdminStats();
        showToast('🎊 第 ' + gameState.season + ' 赛季开始! +$200K 奖金', 'success');
        saveGame();
    });
}

function adminUnlockAllPro() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    const pros = REAL_PRO_PLAYERS.filter(p => !gameState.market.find(m => m.id === p.id) && !gameState.roster.find(r => r.id === p.id));
    let added = 0;
    pros.forEach(p => {
        if (gameState.market.length < 40) {
            const copy = { ...p };
            gameState.market.push(copy);
            added++;
        }
    });
    showToast('🔓 解锁了 ' + added + ' 名职业选手到转会市场', 'success');
    refreshAdminStats();
    if (document.getElementById('screen-market').classList.contains('active')) renderMarket();
    saveGame();
}

function adminFreeSignAll() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    const need = MAX_ROSTER - gameState.roster.length;
    if (need <= 0) return showToast('阵容已满!', 'warning');
    const pros = [...REAL_PRO_PLAYERS].sort((a, b) => b.power - a.power);
    let count = 0;
    for (const p of pros) {
        if (count >= need) break;
        if (!gameState.roster.find(r => r.id === p.id)) {
            const copy = { ...p };
            copy.isPro = true;
            gameState.roster.push(copy);
            gameState.market = gameState.market.filter(m => m.id !== p.id);
            count++;
        }
    }
    updateTeamPower();
    updateAllDisplays();
    refreshAdminStats();
    showToast('⚡ 免费签下 ' + count + ' 名顶级职业选手!', 'success');
    if (document.getElementById('screen-roster').classList.contains('active')) renderRoster();
    saveGame();
}

function adminHealTeam() {
    if (!gameState || gameState.roster.length === 0) return showToast('战队为空', 'warning');
    gameState.roster.forEach(p => {
        p.aim = Math.min(99, p.aim + 5);
        p.gameSense = Math.min(99, p.gameSense + 5);
        p.leadership = Math.min(99, p.leadership + 3);
        p.utility = Math.min(99, p.utility + 3);
        calculateAgentPower(p);
        updateAgentRating(p);
    });
    updateTeamPower();
    updateAllDisplays();
    refreshAdminStats();
    showToast('💪 全体队员属性+5/3! 总战力: ' + gameState.teamPower, 'success');
    if (document.getElementById('screen-roster').classList.contains('active')) renderRoster();
    saveGame();
}

function adminLevelUpAll() {
    if (!gameState || gameState.roster.length === 0) return showToast('战队为空', 'warning');
    gameState.roster.forEach(p => {
        p.aim = Math.min(99, p.aim + 10);
        p.gameSense = Math.min(99, p.gameSense + 10);
        p.leadership = Math.min(99, p.leadership + 8);
        p.utility = Math.min(99, p.utility + 8);
        calculateAgentPower(p);
        updateAgentRating(p);
    });
    updateTeamPower();
    updateAllDisplays();
    refreshAdminStats();
    showToast('🚀 全体队员超级强化! 总战力: ' + gameState.teamPower, 'success');
    if (document.getElementById('screen-roster').classList.contains('active')) renderRoster();
    saveGame();
}

function adminForceSave() {
    saveGame();
    showToast('💾 已强制保存', 'success');
}

function adminForceLoad() {
    loadGameSilent();
    updateAllDisplays();
    refreshAdminStats();
    showToast('📂 已强制读取存档', 'success');
}

function adminResetSave() {
    showConfirmModal('⚠ 清除存档?', '这将永久删除你的存档并重新开始!', () => {
        localStorage.removeItem('vct_manager_save');
        showToast('🗑 存档已清除', 'warning');
        setTimeout(() => location.reload(), 800);
    });
}

function adminExportSave() {
    if (!gameState) return;
    const data = JSON.stringify({ gameState, __v: 1 });
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vct_save_${gameState.teamName}_s${gameState.season}_w${gameState.currentWeek}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤 存档已导出', 'success');
}

function adminToggleGodMode() {
    if (!gameState) return;
    gameState.godMode = !gameState.godMode;
    showToast(gameState.godMode ? '👼 上帝模式已开启!' : '👼 上帝模式已关闭', 'info');
    saveGame();
}

function adminViewDebug() {
    if (!gameState) return;
    const winRate = gameState.standings.find(s => s && s.isPlayerTeam);
    const info = [
        `=== 游戏状态调试 ===`,
        `战队: ${gameState.teamName} (${gameState.teamTag})`,
        `赛季/周: S${gameState.season} / W${gameState.currentWeek}`,
        `战力: ${gameState.teamPower} | 金币: $${gameState.money.toLocaleString()}`,
        `阵容: ${gameState.roster.length} | 市场: ${gameState.market.length}`,
        `积分榜: ${winRate ? winRate.wins+'W/'+winRate.losses+'L' : '-'}`,
        `赛季比赛: ${gameState.schedule[gameState.currentWeek - 1] ? gameState.schedule[gameState.currentWeek - 1].length + ' 场本周' : '-'}`,
        `上帝模式: ${gameState.godMode ? 'ON' : 'OFF'}`,
        `LocalStorage: ${localStorage.getItem('vct_manager_save') ? '存在' : '无'}`,
        `\n阵容详情:`,
        ...gameState.roster.map(p => `  • ${p.name}(${p.role}) PWR:${p.power} [${p.rating}]`)
    ].join('\n');
    console.log(info);
    console.log('Full gameState:', JSON.parse(JSON.stringify(gameState)));
    showToast('📊 调试信息已输出到控制台 (F12 查看)', 'info');
}

function adminQuickSim(n) {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    if (gameState.currentWeek + n > TOTAL_WEEKS) n = TOTAL_WEEKS - gameState.currentWeek;
    if (n <= 0) return showToast('赛季已结束', 'warning');
    for (let i = 0; i < n; i++) {
        simulateAllMatches();
        gameState.currentWeek++;
    }
    generateSchedule();
    updateAllDisplays();
    refreshAdminStats();
    showToast('⏩ 快进 ' + n + ' 周! 现在第 ' + gameState.currentWeek + ' 周', 'success');
    saveGame();
}

/* ==================== 正式版：云端 / 全球榜 / 创意工坊 ==================== */

const APP_VERSION = '1.3.0';

/* ---------- GitHub 设置 ---------- */

function openGhSettings() {
    const cfg = GHBackend.getConfig();
    document.getElementById('gh-owner').value = cfg.owner || '';
    document.getElementById('gh-repo').value = cfg.repo || '';
    document.getElementById('gh-branch').value = cfg.branch || 'main';
    document.getElementById('gh-token').value = cfg.token || '';
    document.getElementById('gh-result').innerHTML = '';
    document.getElementById('gh-modal').classList.remove('hidden');
    refreshCloudSaveInfo();
}

function closeGhSettings() {
    document.getElementById('gh-modal').classList.add('hidden');
}

function readGhForm() {
    return {
        owner: document.getElementById('gh-owner').value.trim(),
        repo: document.getElementById('gh-repo').value.trim(),
        branch: (document.getElementById('gh-branch').value.trim() || 'main'),
        token: document.getElementById('gh-token').value.trim()
    };
}

function renderGhResult(html, ok) {
    const box = document.getElementById('gh-result');
    box.innerHTML = html;
    box.className = 'gh-result ' + (ok ? 'ok' : 'bad');
}

async function testGhConnection() {
    const form = readGhForm();
    if (!form.owner || !form.repo) return renderGhResult('请先填写仓库所有者和仓库名', false);
    renderGhResult('连接中…', true);
    const backup = GHBackend.getConfig();
    GHBackend.setConfig(form);
    try {
        const info = await GHBackend.testConnection();
        const parts = [
            `仓库：${info.fullName}${info.private ? '（私有）' : '（公开）'}`,
            `默认分支：${info.defaultBranch}`,
            `写入权限：${info.canPush ? '✅ 有' : '❌ 无'}`,
            `令牌：${info.tokenValid ? '✅ 有效（' + info.user + '）' : (form.token ? '⚠ 无法验证' : '未填写')}`
        ];
        renderGhResult(parts.join('<br>'), info.canPush && info.tokenValid);
        if (!info.canPush) renderGhResult(parts.join('<br>') + '<br><b>令牌缺少 Contents: Read and write 权限，云存档与上榜将会失败。</b>', false);
    } catch (e) {
        GHBackend.setConfig(backup);
        renderGhResult('连接失败：' + e.message + (e.status === 401 ? '（令牌无效）' : e.status === 404 ? '（仓库不存在或无权访问）' : ''), false);
    }
}

function saveGhSettings() {
    const form = readGhForm();
    if (!form.owner || !form.repo) return renderGhResult('仓库所有者和仓库名必填', false);
    GHBackend.setConfig(form);
    renderGhResult('已启用：' + form.owner + '/' + form.repo + ' @ ' + form.branch, true);
    showToast('云端已启用', form.owner + '/' + form.repo, 'success');
    refreshCloudSaveInfo();
    if (document.getElementById('screen-online').classList.contains('active')) loadOnlineLeaderboard(true);
    if (document.getElementById('screen-workshop').classList.contains('active')) loadWorkshop(true);
}

function clearGhSettings() {
    showConfirmModal('断开云端', '将清除本机保存的仓库配置与令牌（云端数据不会删除）。确定吗？', () => {
        GHBackend.clearConfig();
        document.getElementById('gh-owner').value = '';
        document.getElementById('gh-repo').value = '';
        document.getElementById('gh-token').value = '';
        renderGhResult('已断开云端连接', true);
        refreshCloudSaveInfo();
        showToast('已断开', '云端功能已停用', 'info');
    });
}

async function refreshCloudSaveInfo() {
    const box = document.getElementById('cloud-save-info');
    if (!box) return;
    if (!GHBackend.isConfigured()) {
        box.innerHTML = '尚未配置仓库，云存档不可用';
        return;
    }
    box.innerHTML = '正在检查云端存档…';
    try {
        const save = await GHBackend.cloudLoad();
        if (!save) {
            box.innerHTML = '云端暂无你的存档（首次上传后会出现在这里）';
            return;
        }
        box.innerHTML = `云端存档：<b>${escapeHtml(save.playerName || '未命名')}</b> · ` +
            `S${save.state ? save.state.season : '?'} 第${save.state ? save.state.currentWeek : '?'}周 · ` +
            `${new Date(save.updatedAt).toLocaleString()}`;
    } catch (e) {
        box.innerHTML = '读取云端存档失败：' + e.message;
    }
}

/* ---------- 云存档 ---------- */

async function uploadCloudSave() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    if (!GHBackend.canWrite()) return showToast('需要令牌', '请先在云端设置中填写访问令牌', 'error');
    const box = document.getElementById('cloud-save-info');
    if (box) box.innerHTML = '上传中…';
    try {
        const payload = await GHBackend.cloudSave(gameState, { name: gameState.teamName });
        const msg = `已上传 · ${new Date(payload.updatedAt).toLocaleString()}`;
        if (box) box.innerHTML = msg;
        showToast('云存档已上传', gameState.teamName, 'success');
        return true;
    } catch (e) {
        if (box) box.innerHTML = '上传失败：' + e.message;
        showToast('上传失败', e.message, 'error');
        return false;
    }
}

async function downloadCloudSave() {
    if (!GHBackend.isConfigured()) return showToast('未配置', '请先在云端设置中填写仓库', 'warning');
    const box = document.getElementById('cloud-save-info');
    if (box) box.innerHTML = '读取中…';
    try {
        const save = await GHBackend.cloudLoad();
        if (!save || !save.state) {
            if (box) box.innerHTML = '云端没有找到你的存档';
            showToast('无云存档', '云端没有找到你的存档', 'warning');
            return null;
        }
        if (box) box.innerHTML = `已读取 · ${new Date(save.updatedAt).toLocaleString()}`;
        return save;
    } catch (e) {
        if (box) box.innerHTML = '读取失败：' + e.message;
        showToast('读取失败', e.message, 'error');
        return null;
    }
}

async function applyCloudSave(save) {
    gameState = save.state;
    if (!sanitizeGameState(gameState)) {
        showToast('云存档损坏', '数据格式无法识别，已保持当前进度', 'error');
        return;
    }
    localStorage.setItem('vct_manager_save', JSON.stringify(gameState));
    hideStartScreen();
    showScreen('dashboard');
    updateAllDisplays();
    showToast('云存档已载入', (save.playerName || '') + ' · ' + new Date(save.updatedAt).toLocaleString(), 'success');
}

async function checkCloudSave() {
    if (!GHBackend.isConfigured()) {
        showToast('未配置云端', '请先点击"云端设置"填写仓库信息', 'warning');
        return openGhSettings();
    }
    const save = await downloadCloudSave();
    if (!save) return;
    showConfirmModal('载入云存档', `发现云端存档（${save.playerName || '未命名'} · ${new Date(save.updatedAt).toLocaleString()}）。<br>载入会覆盖当前进度，确定吗？`, async () => {
        await applyCloudSave(save);
    });
}

/* ---------- 全球排行榜 ---------- */

let onlineLastData = null;

function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function myRecord() {
    if (!gameState) return null;
    const st = gameState.standings.find(s => s && s.isPlayerTeam);
    if (!st) return null;
    return {
        name: gameState.teamName,
        tag: gameState.teamTag,
        season: gameState.season,
        week: gameState.currentWeek,
        wins: st.wins || 0,
        losses: st.losses || 0,
        power: gameState.teamPower || 0,
        championships: gameState.championships || 0,
        mvps: gameState.roster.reduce((a, p) => a + (p.mvps || 0), 0)
    };
}

function renderOnlineStatus() {
    const box = document.getElementById('online-status');
    if (!box) return;
    if (!GHBackend.isConfigured()) {
        box.className = 'cloud-status warn';
        box.innerHTML = '⚠ 尚未连接 GitHub 仓库 · <a href="javascript:openGhSettings()">前往设置</a>';
    } else {
        const cfg = GHBackend.getConfig();
        box.className = 'cloud-status ok';
        box.innerHTML = `✅ 已连接 <b>${escapeHtml(cfg.owner)}/${escapeHtml(cfg.repo)}</b>` +
            (GHBackend.canWrite() ? ' · 可提交战绩' : ' · 未填令牌（只读）');
    }
}

async function loadOnlineLeaderboard(force) {
    renderOnlineStatus();
    const list = document.getElementById('online-list');
    if (!list) return;
    if (!GHBackend.isConfigured()) {
        list.innerHTML = '<div class="empty-hint">连接 GitHub 仓库后即可查看全球排行榜</div>';
        return;
    }
    list.innerHTML = '<div class="empty-hint">加载中…</div>';
    try {
        const data = await GHBackend.fetchLeaderboard();
        onlineLastData = data;
        if (!data.entries.length) {
            list.innerHTML = '<div class="empty-hint">全球榜还是空的，快去提交第一条战绩！</div>';
            return;
        }
        list.innerHTML = data.entries.map((e, i) => {
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `<span class="online-rank">${i + 1}</span>`;
            const isMe = e.id === GHBackend.playerId();
            return `<div class="online-row${isMe ? ' me' : ''}">
                <div class="online-medal">${medal}</div>
                <div class="online-main">
                    <div class="online-name">${escapeHtml(e.name)} <span class="online-tag">${escapeHtml(e.tag)}</span>${isMe ? ' <span class="online-me-badge">我</span>' : ''}</div>
                    <div class="online-sub">${e.wins}W ${e.losses}L · 战力 ${e.power} · S${e.season} 第${e.week}周</div>
                </div>
                <div class="online-stats">
                    <div class="online-champ">${e.championships ? '🏆 ' + e.championships : ''}</div>
                    <div class="online-winrate">${(e.wins + e.losses) ? Math.round(e.wins / (e.wins + e.losses) * 100) + '%' : '—'}</div>
                </div>
            </div>`;
        }).join('');
        if (data.updatedAt) {
            list.innerHTML += `<div class="online-updated">数据更新：${new Date(data.updatedAt).toLocaleString()}</div>`;
        }
    } catch (e) {
        list.innerHTML = `<div class="empty-hint">加载失败：${escapeHtml(e.message)}</div>`;
    }
}

async function submitMyScore(ev) {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    if (!GHBackend.canWrite()) return showToast('无法提交', '需要令牌才能写入排行榜', 'error');
    const btn = ev && ev.target;
    if (btn) { btn.disabled = true; btn.textContent = '提交中…'; }
    try {
        const res = await GHBackend.submitScore(myRecord());
        showToast('战绩已提交', `全球排名第 ${res.rank} 位`, 'success');
        await loadOnlineLeaderboard(true);
    } catch (e) {
        showToast('提交失败', e.message, 'error');
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = '提交我的战绩'; }
    }
}

/* ---------- 创意工坊 ---------- */

let workshopCache = [];

function renderWorkshopStatus() {
    const box = document.getElementById('workshop-status');
    if (!box) return;
    if (!GHBackend.isConfigured()) {
        box.className = 'cloud-status warn';
        box.innerHTML = '⚠ 尚未连接 GitHub 仓库 · <a href="javascript:openGhSettings()">前往设置</a>';
    } else if (!GHBackend.canWrite()) {
        box.className = 'cloud-status warn';
        box.innerHTML = '✅ 已连接（只读）· 填写令牌后可以发布作品';
    } else {
        box.className = 'cloud-status ok';
        box.innerHTML = '✅ 已连接 · 可以浏览和发布作品';
    }
}

async function loadWorkshop(force) {
    renderWorkshopStatus();
    const list = document.getElementById('workshop-list');
    if (!list) return;
    if (!GHBackend.isConfigured()) {
        list.innerHTML = '<div class="empty-hint">连接 GitHub 仓库后即可浏览创意工坊</div>';
        return;
    }
    list.innerHTML = '<div class="empty-hint">加载中…</div>';
    try {
        workshopCache = await GHBackend.fetchWorkshopIndex();
        if (!workshopCache.length) {
            list.innerHTML = '<div class="empty-hint">还没有作品，来发布第一个自创战队吧！</div>';
            return;
        }
        list.innerHTML = workshopCache.map(item => `
            <div class="ws-card">
                <div class="ws-color-bar" style="background:${escapeHtml(item.color || '#FF4655')}"></div>
                <div class="ws-card-head">
                    <span class="ws-name">${escapeHtml(item.name)}</span>
                    <span class="ws-tag">${escapeHtml(item.tag || '')}</span>
                    <span class="ws-power">战力 ${item.power || 0}</span>
                </div>
                <div class="ws-meta">${escapeHtml(item.region || '')} · by ${escapeHtml(item.author)} · ${new Date(item.createdAt).toLocaleDateString()}</div>
                <div class="ws-desc">${escapeHtml(item.description || '')}</div>
                <div class="ws-actions">
                    <button class="btn btn-sm btn-primary" onclick="loadWorkshopItem('${escapeHtml(item.id)}')">载入战队</button>
                    <button class="btn btn-sm btn-ghost" onclick="deleteWorkshopItem('${escapeHtml(item.id)}')">删除</button>
                </div>
            </div>
        `).join('');
    } catch (e) {
        list.innerHTML = `<div class="empty-hint">加载失败：${escapeHtml(e.message)}</div>`;
    }
}

function openWorkshopPublish() {
    if (!GHBackend.canWrite()) return showToast('无法发布', '请先在云端设置中填写令牌', 'error');
    document.getElementById('ws-result').innerHTML = '';
    document.getElementById('ws-name').value = gameState ? gameState.teamName : '';
    document.getElementById('ws-tag').value = gameState ? gameState.teamTag : '';
    document.getElementById('workshop-modal').classList.remove('hidden');
}

function closeWorkshopPublish() {
    document.getElementById('workshop-modal').classList.add('hidden');
}

async function publishWorkshopNow() {
    if (!gameState) return showToast('请先开始游戏', 'warning');
    const name = document.getElementById('ws-name').value.trim();
    const tag = document.getElementById('ws-tag').value.trim();
    const color = document.getElementById('ws-color').value;
    const region = document.getElementById('ws-region').value;
    const desc = document.getElementById('ws-desc').value.trim();
    const box = document.getElementById('ws-result');
    if (!name) { box.innerHTML = '请填写战队名称'; return; }
    box.innerHTML = '发布中…';
    try {
        const roster = gameState.roster.map(p => ({
            name: p.name, role: p.role, power: p.power, rating: p.rating,
            avatar: p.avatar, country: p.country, bio: p.bio
        }));
        const res = await GHBackend.publishWorkshop({
            author: gameState.teamName,
            name, tag, color, region, description: desc,
            roster, power: gameState.teamPower
        });
        box.innerHTML = `发布成功：${res.id}`;
        showToast('作品已发布', name, 'success');
        addMail('创意工坊', '作品发布成功：' + name, '你的战队已发布到创意工坊，其他玩家可以载入或挑战它。', 0);
        setTimeout(closeWorkshopPublish, 800);
        loadWorkshop(true);
    } catch (e) {
        box.innerHTML = '发布失败：' + e.message;
    }
}

async function loadWorkshopItem(id) {
    try {
        const item = await GHBackend.fetchWorkshopItem(id);
        if (!item) return showToast('不存在', '该作品已被删除', 'warning');
        showConfirmModal('载入工坊战队',
            `载入《${escapeHtml(item.name)}》（${item.roster.length} 名选手，战力 ${item.power}）？<br>将以此战队开始一个全新赛季。`,
            () => startFromWorkshop(item));
    } catch (e) {
        showToast('载入失败', e.message, 'error');
    }
}

function startFromWorkshop(item) {
    localStorage.removeItem('vct_manager_save');
    initGame();
    gameState.teamName = item.name;
    gameState.teamTag = item.tag || 'WS';
    gameState.teamColor = item.color;
    gameState.teamRegion = item.region;
    gameState.roster = (item.roster || []).map((p, i) => ({
        uniqueId: 'ws_' + Date.now() + '_' + i,
        id: 'ws_' + i,
        name: p.name, role: p.role, power: p.power, rating: p.rating || 'B',
        avatar: p.avatar || (p.name || '?').slice(0, 2),
        country: p.country || '🌐',
        bio: p.bio || '来自创意工坊的选手',
        aim: p.power || 70, gameSense: p.power || 70,
        leadership: p.power || 70, utility: p.power || 70,
        isPlayerOwned: true, isPro: false,
        wins: 0, losses: 0, kills: 0, deaths: 0, assists: 0, mvps: 0, matches: 0
    }));
    setupAIStandings();
    updateTeamPower();
    updateAllDisplays();
    showScreen('dashboard');
    saveGame();
    showToast('已载入工坊战队', item.name, 'success');
}

async function deleteWorkshopItem(id) {
    if (!GHBackend.canWrite()) return showToast('无法删除', '需要令牌', 'error');
    showConfirmModal('删除作品', '将从云端永久删除该作品，确定吗？', async () => {
        try {
            await GHBackend.deleteWorkshop(id);
            showToast('已删除', '作品已从云端移除', 'success');
            loadWorkshop(true);
        } catch (e) {
            showToast('删除失败', e.message, 'error');
        }
    });
}

/* ---------- 自动同步 ---------- */

function autoSyncAfterMatch() {
    if (!gameState || !GHBackend.canWrite()) return;
    const save = () => GHBackend.cloudSave(gameState, { name: gameState.teamName }).catch(() => {});
    if (gameState.currentWeek >= TOTAL_WEEKS) {
        save();
        GHBackend.submitScore(myRecord()).catch(() => {});
    } else {
        save();
    }
}

const versionEl = document.getElementById('app-version');
if (versionEl) versionEl.textContent = APP_VERSION;

/* ==================== v1.1.0：起名 / 商城 / 邮箱 / 玩家对战 / 可视化对局 ==================== */

let matchFinishMode = 'league';
let matchRunner = null;
let pvpState = null;
const LINEUP_PREFIX = 'VCT1:';

/* ---------- 1. 自创战队起名提醒 ---------- */

function openNamingModal() {
    if (!gameState) return;
    const nameEl = document.getElementById('naming-name');
    const tagEl = document.getElementById('naming-tag');
    nameEl.value = (gameState.teamName && gameState.teamName !== '我的战队') ? gameState.teamName : '';
    tagEl.value = (gameState.teamTag && gameState.teamTag !== 'MY') ? gameState.teamTag : '';
    document.getElementById('naming-modal').classList.remove('hidden');
    setTimeout(() => nameEl.focus(), 120);
}

function closeNamingModal() {
    document.getElementById('naming-modal').classList.add('hidden');
}

function confirmNaming() {
    if (!gameState) return;
    const name = document.getElementById('naming-name').value.trim();
    const tag = document.getElementById('naming-tag').value.trim().toUpperCase();
    if (!name) return showToast('队名不能为空', '请输入一个战队名字', 'error');
    renameTeam(name, tag);
    gameState.teamNamed = true;
    closeNamingModal();
    updateAllDisplays();
    renderDashboard();
    saveGame();
    showToast('命名完成', name + ' 已正式成立！', 'success');
}

/* ---------- 2. 商城（纯外观 / 便利） ---------- */

function openShop() {
    if (!gameState) return showToast('请先开始游戏', '进入战队后才能购物', 'warning');
    document.getElementById('shop-result').innerHTML = '';
    renderShop();
    document.getElementById('shop-modal').classList.remove('hidden');
}

function closeShop() {
    document.getElementById('shop-modal').classList.add('hidden');
}

function renderShop() {
    document.getElementById('shop-money').textContent = '$' + gameState.money.toLocaleString();
    const grid = document.getElementById('shop-grid');
    grid.innerHTML = SHOP_ITEMS.map(item => {
        const owned = gameState.shop.owned.indexOf(item.id) !== -1;
        const affordable = gameState.money >= item.price;
        return `
            <div class="shop-card${owned ? ' owned' : ''}">
                <div class="shop-icon">${item.icon}</div>
                <div class="shop-body">
                    <div class="shop-name">${item.name}</div>
                    <div class="shop-desc">${item.desc}</div>
                    <div class="shop-price">$${item.price.toLocaleString()}</div>
                </div>
                <button class="btn btn-sm ${owned ? 'btn-ghost' : 'btn-primary'}"
                    ${owned || !affordable ? 'disabled' : ''}
                    onclick="buyShopItem('${item.id}')">${owned ? '已拥有' : (affordable ? '购买' : '资金不足')}</button>
            </div>
        `;
    }).join('');
}

function buyShopItem(id) {
    if (!gameState) return;
    const item = SHOP_ITEMS.find(i => i.id === id);
    if (!item) return;
    if (gameState.shop.owned.indexOf(id) !== -1) return;
    if (gameState.money < item.price) return showToast('资金不足', '还差 $' + (item.price - gameState.money).toLocaleString(), 'error');
    gameState.money -= item.price;
    gameState.shop.owned.push(id);
    applyShopItem(item);
    addMail('战队商城', '购买成功：' + item.name, '已扣除 $' + item.price.toLocaleString() + '，该道具不影响比赛数值。', 0);
    document.getElementById('shop-result').innerHTML = '已购买：' + item.name;
    updateAllDisplays();
    renderDashboard();
    renderShop();
    saveGame();
    showToast('购买成功', item.name + '（纯外观，不影响对局）', 'success');
}

function applyShopItem(item) {
    if (item.kind === 'badge') gameState.shop.badge = item.icon;
    if (item.kind === 'theme') gameState.shop.theme = item.color;
    if (item.kind === 'title') gameState.shop.title = item.name;
    if (item.kind === 'rename') gameState.shop.renameCards++;
    if (item.kind === 'autosave') gameState.shop.autoSave = true;
}

/* ---------- 3. 站内邮箱 ---------- */

function addMail(from, subject, body, rewardAmount) {
    if (!gameState) return null;
    if (!Array.isArray(gameState.mail)) gameState.mail = [];
    const mail = {
        id: 'mail_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
        from: from || '系统',
        subject: subject || '(无标题)',
        body: body || '',
        time: new Date().toLocaleString('zh-CN'),
        read: false,
        reward: Number(rewardAmount) || 0,
        claimed: false
    };
    gameState.mail.unshift(mail);
    if (gameState.mail.length > 60) gameState.mail.length = 60;
    updateMailBadge();
    return mail;
}

function updateMailBadge() {
    const badge = document.getElementById('mail-badge');
    if (!badge) return;
    const unread = (gameState && Array.isArray(gameState.mail))
        ? gameState.mail.filter(m => m && !m.read).length : 0;
    badge.textContent = unread > 99 ? '99+' : String(unread);
    badge.style.display = unread > 0 ? 'inline-flex' : 'none';
}

function openMailbox() {
    if (!gameState) return showToast('请先开始游戏', '', 'warning');
    document.getElementById('mail-detail').classList.add('hidden');
    document.getElementById('mail-list').classList.remove('hidden');
    renderMailList();
    document.getElementById('mail-modal').classList.remove('hidden');
}

function closeMailbox() {
    document.getElementById('mail-modal').classList.add('hidden');
}

function renderMailList() {
    const list = document.getElementById('mail-list');
    const mails = (gameState && Array.isArray(gameState.mail)) ? gameState.mail : [];
    if (!mails.length) {
        list.innerHTML = '<p class="empty-hint">邮箱是空的。比赛、购买、发布作品后都会收到通知。</p>';
        return;
    }
    list.innerHTML = mails.map(m => `
        <div class="mail-item${m.read ? '' : ' unread'}" onclick="openMailDetail('${m.id}')">
            <div class="mail-item-main">
                <div class="mail-item-subject">${m.read ? '' : '<span class="mail-dot"></span>'}${escapeHtml(m.subject)}</div>
                <div class="mail-item-meta">${escapeHtml(m.from)} · ${escapeHtml(m.time)}</div>
            </div>
            ${m.reward > 0 ? `<div class="mail-reward${m.claimed ? ' claimed' : ''}">$${m.reward.toLocaleString()}</div>` : ''}
        </div>
    `).join('');
}

function openMailDetail(id) {
    const mail = gameState.mail.find(m => m && m.id === id);
    if (!mail) return;
    mail.read = true;
    document.getElementById('mail-list').classList.add('hidden');
    const detail = document.getElementById('mail-detail');
    detail.classList.remove('hidden');
    detail.innerHTML = `
        <button class="btn btn-ghost btn-sm" onclick="renderMailList(); document.getElementById('mail-detail').classList.add('hidden'); document.getElementById('mail-list').classList.remove('hidden');">← 返回收件箱</button>
        <h3 class="mail-detail-subject">${escapeHtml(mail.subject)}</h3>
        <div class="mail-item-meta">${escapeHtml(mail.from)} · ${escapeHtml(mail.time)}</div>
        <div class="mail-detail-body">${escapeHtml(mail.body)}</div>
        ${mail.reward > 0
            ? (mail.claimed
                ? '<div class="mail-claimed">奖励已领取</div>'
                : `<button class="btn btn-primary" onclick="claimMailReward('${mail.id}')">领取奖励 $${mail.reward.toLocaleString()}</button>`)
            : ''}
    `;
    updateMailBadge();
}

function claimMailReward(id) {
    const mail = gameState.mail.find(m => m && m.id === id);
    if (!mail || mail.claimed || mail.reward <= 0) return;
    gameState.money += mail.reward;
    mail.claimed = true;
    updateAllDisplays();
    renderDashboard();
    saveGame();
    openMailDetail(id);
    showToast('领取成功', '+$' + mail.reward.toLocaleString(), 'success');
}

function markAllMailRead() {
    if (!gameState) return;
    gameState.mail.forEach(m => { if (m) m.read = true; });
    renderMailList();
    updateMailBadge();
}

function clearReadMail() {
    if (!gameState) return;
    gameState.mail = gameState.mail.filter(m => m && !m.read);
    renderMailList();
    updateMailBadge();
}

function adminSendMail() {
    if (!gameState) return;
    const subject = prompt('系统邮件标题', '赛季运营公告');
    if (!subject) return;
    const body = prompt('邮件正文', '感谢各位经理的支持，祝取得好成绩！') || '';
    addMail('VCT 联盟', subject, body, 0);
    showToast('已群发', subject, 'success');
}

/* ---------- 4. 玩家对战：阵容码 ---------- */

function b64FromText(text) {
    const bytes = new TextEncoder().encode(text);
    let bin = '';
    bytes.forEach(b => { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/=+$/, '');
}

function textFromB64(b64) {
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

function encodeLineup() {
    const payload = {
        n: gameState.teamName,
        t: gameState.teamTag,
        p: gameState.teamPower,
        r: gameState.roster.map(p => [p.name, p.role, p.power, p.rating || 'B'])
    };
    return LINEUP_PREFIX + b64FromText(JSON.stringify(payload));
}

function decodeLineup(code) {
    const raw = (code || '').trim().replace(/\s+/g, '');
    if (!raw.startsWith(LINEUP_PREFIX)) throw new Error('阵容码格式不正确（应以 VCT1: 开头）');
    let obj;
    try {
        obj = JSON.parse(textFromB64(raw.slice(LINEUP_PREFIX.length)));
    } catch (e) {
        throw new Error('阵容码内容损坏，无法解析');
    }
    if (!obj || !Array.isArray(obj.r) || obj.r.length === 0) throw new Error('阵容码里没有选手数据');
    return {
        name: obj.n || '神秘战队',
        tag: obj.t || '???',
        power: Number(obj.p) || 0,
        players: obj.r.map(row => ({
            name: row[0] || '未知选手',
            role: row[1] || 'Duelist',
            power: Number(row[2]) || 70,
            rating: row[3] || 'B'
        }))
    };
}

function showMyLineupCode() {
    if (!gameState) return;
    document.getElementById('lineup-title').textContent = '🔗 我的阵容码';
    document.getElementById('lineup-desc').textContent = '把这段码发给朋友，对方在「导入对手阵容码」里粘贴即可与你对战。';
    document.getElementById('lineup-code-wrap').classList.remove('hidden');
    document.getElementById('lineup-import-wrap').classList.add('hidden');
    document.getElementById('lineup-code').value = encodeLineup();
    document.getElementById('lineup-result').innerHTML = '';
    document.getElementById('lineup-modal').classList.remove('hidden');
    document.getElementById('lineup-btn-copy').style.display = '';
    document.getElementById('lineup-btn-start').style.display = 'none';
}

function openLineupImport() {
    if (!gameState) return showToast('请先开始游戏', '', 'warning');
    document.getElementById('lineup-title').textContent = '🔗 导入对手阵容码';
    document.getElementById('lineup-desc').textContent = '粘贴朋友发来的阵容码，立刻在本地打一场友谊赛（不影响联赛积分）。';
    document.getElementById('lineup-code-wrap').classList.add('hidden');
    document.getElementById('lineup-import-wrap').classList.remove('hidden');
    document.getElementById('lineup-import').value = '';
    document.getElementById('lineup-result').innerHTML = '';
    document.getElementById('lineup-modal').classList.remove('hidden');
    document.getElementById('lineup-btn-copy').style.display = 'none';
    document.getElementById('lineup-btn-start').style.display = '';
}

function closeLineupModal() {
    document.getElementById('lineup-modal').classList.add('hidden');
}

function copyLineupCode() {
    const code = document.getElementById('lineup-code').value;
    if (!code) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(
            () => showToast('已复制', '阵容码已复制到剪贴板', 'success'),
            () => showToast('复制失败', '请手动全选复制', 'error')
        );
    } else {
        document.getElementById('lineup-code').select();
        document.execCommand('copy');
        showToast('已复制', '阵容码已复制', 'success');
    }
}

function startAsyncFriendly() {
    const box = document.getElementById('lineup-result');
    let opponent;
    try {
        opponent = decodeLineup(document.getElementById('lineup-import').value);
    } catch (e) {
        box.innerHTML = '导入失败：' + escapeHtml(e.message);
        return;
    }
    closeLineupModal();
    startFriendlyMatch(opponent);
}

/* ---------- 4b. 玩家对战：友谊赛 ---------- */

function startFriendlyMatch(opponent) {
    if (!gameState) return;
    if (!gameState.roster || gameState.roster.length === 0) {
        return showToast('没有选手', '先去转会市场签下队员再打友谊赛', 'error');
    }
    runVisualMatch({
        mode: 'friendly',
        weekLabel: '友谊赛 · ' + (opponent.source || '玩家对战'),
        leftName: gameState.teamName,
        rightName: opponent.name + (opponent.tag ? ' [' + opponent.tag + ']' : ''),
        leftPower: gameState.teamPower,
        rightPower: opponent.power || 70,
        leftPlayers: gameState.roster,
        rightPlayers: opponent.players || [],
        onFinish: (l, r) => finishFriendlyMatch(opponent, l, r)
    });
}

function finishFriendlyMatch(opponent, playerScore, opponentScore) {
    const didWin = playerScore > opponentScore;
    const myStats = generatePlayerStats(gameState.roster, playerScore, opponentScore, true);
    const oppStats = generatePlayerStats(opponent.players || [], opponentScore, playerScore, false);
    const mvp = [...myStats, ...oppStats].sort((a, b) => b.performance - a.performance)[0];
    renderMatchStats(mvp, myStats, oppStats);

    const resultDiv = document.getElementById('match-result');
    resultDiv.textContent = didWin ? '🏆 友谊赛胜利！' : '💀 友谊赛失利';
    resultDiv.className = 'match-result ' + (didWin ? 'win' : 'loss');

    gameState.friendlyHistory.unshift({
        opponent: opponent.name,
        source: opponent.source || '阵容码',
        playerScore, opponentScore, didWin,
        time: new Date().toLocaleString('zh-CN')
    });
    if (gameState.friendlyHistory.length > 20) gameState.friendlyHistory.length = 20;

    const bonus = didWin ? 8000 : 3000;
    gameState.money += bonus;
    showToast('友谊赛结束', (didWin ? '胜利' : '惜败') + ' · 奖励 $' + bonus.toLocaleString(), didWin ? 'success' : 'warning');
    document.getElementById('match-close-btn').style.display = 'block';
    updateAllDisplays();
    renderDashboard();
    saveGame();
}

function renderFriendlyHistory() {
    const box = document.getElementById('friendly-list');
    if (!box) return;
    const list = gameState && Array.isArray(gameState.friendlyHistory) ? gameState.friendlyHistory : [];
    if (!list.length) {
        box.innerHTML = '<p class="empty-hint">还没有友谊赛记录，去打一场吧。</p>';
        return;
    }
    box.innerHTML = list.map(m => `
        <div class="friendly-row">
            <span class="friendly-vs">${escapeHtml(m.opponent)}</span>
            <span class="friendly-score ${m.didWin ? 'win' : 'loss'}">${m.playerScore} - ${m.opponentScore}</span>
            <span class="friendly-meta">${escapeHtml(m.source || '')} · ${escapeHtml(m.time)}</span>
        </div>
    `).join('');
}

/* ---------- 4c. 玩家对战：同屏双人 ---------- */

const PVP_TACTIC_LABEL = { rush: '快攻', hold: '稳守', rotate: '转点' };
const PVP_BEATS = { rush: 'hold', hold: 'rotate', rotate: 'rush' };

function openLocalPvp() {
    if (!gameState) return showToast('请先开始游戏', '', 'warning');
    pvpState = null;
    document.getElementById('pvp-setup').classList.remove('hidden');
    document.getElementById('pvp-arena').classList.add('hidden');
    document.getElementById('pvp-name-1').value = gameState.teamName || '玩家 1';
    document.getElementById('pvp-name-2').value = '挑战者';
    document.getElementById('pvp-modal').classList.remove('hidden');
}

function closeLocalPvp() {
    pvpState = null;
    document.getElementById('pvp-modal').classList.add('hidden');
}

function startLocalPvp() {
    const n1 = document.getElementById('pvp-name-1').value.trim() || '玩家 1';
    const n2 = document.getElementById('pvp-name-2').value.trim() || '玩家 2';
    pvpState = { n1, n2, s1: 0, s2: 0, round: 1, phase: 'pick1', pick1: null, pick2: null };
    document.getElementById('pvp-setup').classList.add('hidden');
    document.getElementById('pvp-arena').classList.remove('hidden');
    document.getElementById('pvp-side-name-1').textContent = n1;
    document.getElementById('pvp-side-name-2').textContent = n2;
    document.getElementById('pvp-log').innerHTML = '';
    pvpRender();
}

function pvpRender() {
    if (!pvpState) return;
    document.getElementById('pvp-score-1').textContent = pvpState.s1;
    document.getElementById('pvp-score-2').textContent = pvpState.s2;
    const turn = document.getElementById('pvp-turn');
    if (pvpState.phase === 'over') {
        turn.textContent = (pvpState.s1 > pvpState.s2 ? pvpState.n1 : pvpState.n2) + ' 获胜！';
    } else if (pvpState.phase === 'pick1') {
        turn.textContent = '第 ' + pvpState.round + ' 回合 · ' + pvpState.n1 + ' 请选择战术（' + pvpState.n2 + ' 请回避）';
    } else {
        turn.textContent = '第 ' + pvpState.round + ' 回合 · ' + pvpState.n2 + ' 请选择战术';
    }
}

function pvpLog(text) {
    const box = document.getElementById('pvp-log');
    const el = document.createElement('div');
    el.className = 'pvp-log-entry';
    el.textContent = text;
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
}

function pvpPick(tactic) {
    if (!pvpState || pvpState.phase === 'over') return;
    if (pvpState.phase === 'pick1') {
        pvpState.pick1 = tactic;
        pvpState.phase = 'pick2';
        pvpRender();
        return;
    }
    if (pvpState.phase === 'pick2') {
        pvpState.pick2 = tactic;
        const a = pvpState.pick1, b = pvpState.pick2;
        const labA = PVP_TACTIC_LABEL[a], labB = PVP_TACTIC_LABEL[b];
        if (a === b) {
            pvpLog('R' + pvpState.round + ' · 双方同为「' + labA + '」，本回合重打');
            pvpState.phase = 'pick1';
            pvpState.pick1 = null; pvpState.pick2 = null;
            pvpRender();
            return;
        }
        const p1Wins = PVP_BEATS[a] === b;
        if (p1Wins) pvpState.s1++; else pvpState.s2++;
        pvpLog('R' + pvpState.round + ' · ' + labA + ' vs ' + labB + ' → ' +
            (p1Wins ? pvpState.n1 : pvpState.n2) + ' 得分  ' + pvpState.s1 + '-' + pvpState.s2);
        pvpState.round++;
        pvpState.phase = 'pick1';
        pvpState.pick1 = null; pvpState.pick2 = null;
        if (pvpState.s1 >= 13 || pvpState.s2 >= 13) {
            pvpState.phase = 'over';
            const winner = pvpState.s1 > pvpState.s2 ? pvpState.n1 : pvpState.n2;
            pvpLog('🏆 ' + winner + ' 以 ' + pvpState.s1 + '-' + pvpState.s2 + ' 获胜');
            showToast('对战结束', winner + ' 获胜', 'success');
        }
        pvpRender();
    }
}

/* ---------- 5. 可视化对局 ---------- */

function runVisualMatch(cfg) {
    if (!gameState) return;
    matchFinishMode = cfg.mode === 'friendly' ? 'friendly' : 'league';
    const modal = document.getElementById('match-modal');
    modal.classList.remove('hidden');
    document.getElementById('match-week-label').textContent = cfg.weekLabel || 'VCT 冠军联赛';
    document.getElementById('match-team-left-name').textContent = cfg.leftName;
    document.getElementById('match-team-right-name').textContent = cfg.rightName;
    document.getElementById('match-team-left-power').textContent = '战力 ' + Math.round(cfg.leftPower || 0);
    document.getElementById('match-team-right-power').textContent = '战力 ' + Math.round(cfg.rightPower || 0);
    document.getElementById('match-team-left-score').textContent = '0';
    document.getElementById('match-team-right-score').textContent = '0';
    document.getElementById('match-plays').innerHTML = '';
    document.getElementById('match-result').textContent = '';
    document.getElementById('match-result').className = 'match-result';
    document.getElementById('match-close-btn').style.display = 'none';
    document.getElementById('match-team-left').classList.remove('winner', 'loser');
    document.getElementById('match-team-right').classList.remove('winner', 'loser');
    const statsPanel = document.getElementById('match-stats-panel');
    if (statsPanel) statsPanel.classList.add('hidden');
    document.querySelectorAll('.match-controls .btn').forEach(b => { b.disabled = false; });

    matchRunner = { cfg, leftScore: 0, rightScore: 0, round: 0, speed: 1, timer: null, pips: [] };
    renderMatchPips();
    drawMatchBoard(0);
    setMatchSpeed(1);
}

function startMatchTimer() {
    if (!matchRunner) return;
    clearInterval(matchRunner.timer);
    if (matchRunner.speed === 0) { matchRunner.timer = null; return; }
    matchRunner.timer = setInterval(matchTick, Math.round(650 / matchRunner.speed));
}

function matchTick() {
    const r = matchRunner;
    if (!r) return;
    const total = (r.cfg.leftPower || 1) + (r.cfg.rightPower || 1);
    applyMatchRound(Math.random() < ((r.cfg.leftPower || 1) / total));
}

function applyMatchRound(own) {
    const r = matchRunner;
    if (!r) return;
    r.round++;
    if (own) r.leftScore++; else r.rightScore++;
    r.pips.push(own ? 'left' : 'right');
    document.getElementById('match-team-left-score').textContent = r.leftScore;
    document.getElementById('match-team-right-score').textContent = r.rightScore;
    renderMatchPips();
    drawMatchBoard(r.round);
    appendMatchPlay(r, own);
    if (r.leftScore >= 13 || r.rightScore >= 13) finishMatchRunner();
}

function appendMatchPlay(r, own) {
    const plays = document.getElementById('match-plays');
    const myNames = (r.cfg.leftPlayers || []).map(p => p && p.name).filter(Boolean);
    const oppNames = (r.cfg.rightPlayers || []).map(p => p && p.name).filter(Boolean);
    const myKiller = myNames.length ? myNames[Math.floor(Math.random() * myNames.length)] : r.cfg.leftName;
    const oppKiller = oppNames.length ? oppNames[Math.floor(Math.random() * oppNames.length)] : r.cfg.rightName;
    const entry = document.createElement('div');
    entry.className = 'play-entry ' + (own ? 'own' : 'enemy');
    entry.textContent = own
        ? 'R' + r.round + ' · ' + myKiller + ' 突破拿下回合  ' + r.leftScore + '-' + r.rightScore
        : 'R' + r.round + ' · ' + oppKiller + ' 残局获胜  ' + r.leftScore + '-' + r.rightScore;
    plays.appendChild(entry);
    plays.scrollTop = plays.scrollHeight;
}

function renderMatchPips() {
    const box = document.getElementById('match-pips');
    if (!box) return;
    const pips = matchRunner ? matchRunner.pips : [];
    let html = '';
    for (let i = 0; i < 25; i++) {
        html += '<span class="match-pip' + (pips[i] ? ' ' + pips[i] : '') + '"></span>';
    }
    box.innerHTML = html;
}

function drawMatchBoard(round) {
    const svg = document.getElementById('match-board-svg');
    if (!svg) return;
    const dot = (color, x, y) => '<circle cx="' + x + '" cy="' + y + '" r="4" fill="' + color + '"/>';
    let leftDots = '', rightDots = '';
    for (let i = 0; i < 5; i++) {
        const leftColor = (gameState && gameState.shop && gameState.shop.boardColor) ? gameState.shop.boardColor : '#FF4655';
        leftDots += dot(leftColor, 18 + Math.random() * 150, 20 + Math.random() * 140);
        rightDots += dot('#53A7E2', 232 + Math.random() * 150, 20 + Math.random() * 140);
    }
    svg.innerHTML = `
        <rect x="0" y="0" width="400" height="180" fill="#0B131B"/>
        <g stroke="#2B3A4A" fill="none" stroke-width="1">
            <rect x="6" y="6" width="388" height="168"/>
            <line x1="200" y1="6" x2="200" y2="174"/>
            <rect x="18" y="26" width="96" height="52"/>
            <rect x="18" y="102" width="96" height="52"/>
            <rect x="152" y="54" width="96" height="72"/>
            <rect x="286" y="26" width="96" height="52"/>
            <rect x="286" y="102" width="96" height="52"/>
        </g>
        <g fill="#768079" font-size="9" font-family="Consolas, monospace" letter-spacing="1">
            <text x="26" y="42">A SITE</text>
            <text x="26" y="118">B SITE</text>
            <text x="184" y="64">MID</text>
            <text x="294" y="42">A SITE</text>
            <text x="294" y="118">B SITE</text>
            <text x="352" y="170" fill="#4A5A68">R${round}</text>
        </g>
        ${leftDots}${rightDots}
    `;
}

function setMatchSpeed(speed) {
    if (!matchRunner) return;
    matchRunner.speed = speed;
    document.querySelectorAll('.match-controls .btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('match-speed-' + speed);
    if (btn) btn.classList.add('active');
    startMatchTimer();
}

function skipMatch() {
    if (!matchRunner) return;
    matchRunner.speed = 0;
    clearInterval(matchRunner.timer);
    matchRunner.timer = null;
    while (matchRunner && matchRunner.leftScore < 13 && matchRunner.rightScore < 13) {
        const total = (matchRunner.cfg.leftPower || 1) + (matchRunner.cfg.rightPower || 1);
        applyMatchRound(Math.random() < ((matchRunner.cfg.leftPower || 1) / total));
    }
}

function finishMatchRunner() {
    const r = matchRunner;
    if (!r) return;
    clearInterval(r.timer);
    r.timer = null;
    const cfg = r.cfg, l = r.leftScore, rr = r.rightScore;
    matchRunner = null;
    document.querySelectorAll('.match-controls .btn').forEach(b => { b.disabled = true; });
    drawMatchBoard(r.round);
    if (typeof cfg.onFinish === 'function') cfg.onFinish(l, rr);
}

/* ---------- 玩家对战页面渲染 ---------- */

function renderVersus() {
    if (!gameState) return;
    renderFriendlyHistory();
    renderVersusWorkshop();
}

async function renderVersusWorkshop() {
    const box = document.getElementById('versus-workshop-list');
    if (!box) return;
    if (!GHBackend.isConfigured()) {
        box.innerHTML = '<p class="empty-hint">连接 GitHub 仓库后可从创意工坊挑选对手。<br><a href="#" onclick="openGhSettings(); return false;">去云端设置 →</a></p>';
        return;
    }
    box.innerHTML = '<p class="empty-hint">加载中…</p>';
    try {
        const items = await GHBackend.fetchWorkshopIndex();
        if (!items || !items.length) {
            box.innerHTML = '<p class="empty-hint">工坊还没有作品。</p>';
            return;
        }
        box.innerHTML = items.slice(0, 8).map(item => `
            <div class="versus-item">
                <span class="versus-item-name">${escapeHtml(item.name)}</span>
                <span class="versus-item-power">战力 ${item.power || 0}</span>
                <button class="btn btn-sm btn-ghost" onclick="challengeWorkshopTeam('${escapeHtml(item.id)}')">挑战</button>
            </div>
        `).join('');
    } catch (e) {
        box.innerHTML = '<p class="empty-hint">读取失败：' + escapeHtml(e.message) + '</p>';
    }
}

async function challengeWorkshopTeam(id) {
    if (!gameState) return;
    try {
        const item = await GHBackend.fetchWorkshopItem(id);
        if (!item) return showToast('作品不存在', '可能已被删除', 'warning');
        startFriendlyMatch({
            name: item.name,
            tag: item.tag,
            power: item.power,
            players: item.roster || [],
            source: '工坊挑战'
        });
    } catch (e) {
        showToast('读取失败', e.message, 'error');
    }
}

/* ==================== v1.2.0：联赛金字塔 / 杯赛 / 升降级 / 商店 / 公告 ==================== */

const LEAGUE_META = {
    premier: { key: 'premier', name: 'VCT 顶级联赛', short: 'VCT', color: '#FF4655' },
    challengers: { key: 'challengers', name: 'VCT Challengers 次级联赛', short: 'CH', color: '#53A7E2' }
};
const LEAGUE_KEYS = ['premier', 'challengers'];
const CUP_NAMES = { masters: 'Masters 季中冠军赛', champions: 'Champions 世界冠军赛' };
const CUP_ROUND_NAMES = ['八强赛', '半决赛', '总决赛'];

function buildLeaguePools(excludeName) {
    const teams = AI_TEAMS.filter(t => t.name !== excludeName).slice().sort((a, b) => b.power - a.power);
    const half = Math.ceil(teams.length / 2);
    return {
        premier: teams.slice(0, half).map(t => t.name),
        challengers: teams.slice(half).map(t => t.name)
    };
}

function ensureLeaguePools() {
    if (!gameState) return;
    if (!gameState.leagueTeams || !Array.isArray(gameState.leagueTeams.premier) || !Array.isArray(gameState.leagueTeams.challengers)) {
        gameState.leagueTeams = buildLeaguePools(gameState.teamName);
        if (!LEAGUE_META[gameState.league]) gameState.league = 'challengers';
    }
    if (!LEAGUE_META[gameState.league]) gameState.league = 'challengers';
    LEAGUE_KEYS.forEach(k => {
        if (!Array.isArray(gameState.leagueTeams[k])) gameState.leagueTeams[k] = [];
        gameState.leagueTeams[k] = gameState.leagueTeams[k].filter(n => n && n !== gameState.teamName);
    });
    if (!gameState.leagueTeams[gameState.league].includes(gameState.teamName)) {
        gameState.leagueTeams[gameState.league].push(gameState.teamName);
    }
}

function leagueTable(leagueKey) {
    return [...gameState.standings]
        .filter(t => t && t.league === leagueKey)
        .sort((a, b) => (b.points - a.points) || (b.wins - a.wins) || (b.power - a.power) || a.name.localeCompare(b.name));
}

function leagueOfTeam(name) {
    if (!gameState.leagueTeams) return gameState.league || 'challengers';
    if (gameState.leagueTeams.premier.includes(name)) return 'premier';
    if (gameState.leagueTeams.challengers.includes(name)) return 'challengers';
    return gameState.league || 'challengers';
}

function setupLeagueStandings() {
    ensureLeaguePools();
    gameState.standings = AI_TEAMS
        .filter(t => t.name !== gameState.teamName)
        .map(t => ({
            name: t.name,
            tag: t.tag,
            region: t.region,
            country: t.country,
            color: t.color,
            power: t.power,
            wins: 0,
            losses: 0,
            points: 0,
            league: leagueOfTeam(t.name),
            isPlayerTeam: false
        }));
    gameState.standings.push({
        name: gameState.teamName,
        tag: gameState.teamTag,
        region: 'MY',
        country: '🎮',
        color: '#FF4655',
        power: 0,
        wins: 0,
        losses: 0,
        points: 0,
        league: gameState.league,
        isPlayerTeam: true
    });
}

function setupAIStandings() {
    setupLeagueStandings();
}

function setupAIStandings_override(playerTeam) {
    const pools = buildLeaguePools(playerTeam ? playerTeam.name : gameState.teamName);
    gameState.leagueTeams = pools;
    const powers = AI_TEAMS.filter(t => t.name !== (playerTeam ? playerTeam.name : '')).map(t => t.power).sort((a, b) => b - a);
    const median = powers[Math.floor(powers.length / 2)] || 75;
    gameState.league = (playerTeam && playerTeam.power >= median) ? 'premier' : 'challengers';
    setupLeagueStandings();
}

function getPlayerRank() {
    if (!gameState) return 1;
    const table = leagueTable(gameState.league);
    const idx = table.findIndex(t => t.isPlayerTeam);
    return idx < 0 ? table.length + 1 : idx + 1;
}

/* ---------- 赛季日历 ---------- */

function buildSeasonSchedule(teamName, league, pools) {
    const schedule = [];
    const pool = ((pools && pools[league]) || []).filter(n => n && n !== teamName);
    const firstHalf = shuffle(pool).slice(0, 9);
    const secondHalf = shuffle(pool).slice(0, 9);
    const base = { playerTeam: teamName, isHome: true, played: false, playerScore: 0, opponentScore: 0, result: null };
    for (let w = 1; w <= 9; w++) {
        schedule.push(Object.assign({}, base, {
            week: w, stage: 'league', stageNo: 1, opponent: firstHalf[w - 1] || '',
            isHome: w % 2 === 1
        }));
    }
    for (let w = 10; w <= 12; w++) {
        schedule.push(Object.assign({}, base, {
            week: w, stage: 'masters', cupRound: w - 10, opponent: '', isHome: true
        }));
    }
    for (let w = 13; w <= 21; w++) {
        schedule.push(Object.assign({}, base, {
            week: w, stage: 'league', stageNo: 2, opponent: secondHalf[w - 13] || '',
            isHome: w % 2 === 0
        }));
    }
    for (let w = 22; w <= 24; w++) {
        schedule.push(Object.assign({}, base, {
            week: w, stage: 'champions', cupRound: w - 22, opponent: '', isHome: true
        }));
    }
    return schedule;
}

function generateSchedule() {
    ensureLeaguePools();
    gameState.schedule = buildSeasonSchedule(gameState.teamName, gameState.league, gameState.leagueTeams);
    gameState.scheduleVersion = 2;
    gameState.simulatedWeek = 0;
    gameState.cups = {};
}

function matchLabel(match) {
    if (!match) return '';
    if (match.stage === 'masters' || match.stage === 'champions') {
        const roundName = CUP_ROUND_NAMES[match.cupRound] || '淘汰赛';
        return (CUP_NAMES[match.stage] || '杯赛') + ' · ' + roundName;
    }
    const meta = LEAGUE_META[gameState.league] || LEAGUE_META.premier;
    return meta.name + ' · 常规赛 ' + (match.stageNo === 2 ? '第二阶段' : '第一阶段');
}

function isCupMatch(match) {
    return !!match && (match.stage === 'masters' || match.stage === 'champions');
}

/* ---------- 每周推进与 AI 赛果 ---------- */

function simulateAIResult(a, b) {
    if (!a || !b) return;
    const total = (a.power || 70) + (b.power || 70);
    if (Math.random() < (a.power || 70) / total) {
        a.wins++; b.losses++; a.points += 3;
    } else {
        b.wins++; a.losses++; b.points += 3;
    }
}

function simulateLeagueRound() {
    if (!gameState) return;
    if (gameState.simulatedWeek === gameState.currentWeek) return;
    gameState.simulatedWeek = gameState.currentWeek;
    const entry = gameState.schedule.find(s => s.week === gameState.currentWeek);
    if (!entry || isCupMatch(entry)) return;
    LEAGUE_KEYS.forEach(key => {
        const teams = shuffle(gameState.standings.filter(t => t.league === key && !t.isPlayerTeam && t.name !== entry.opponent));
        for (let i = 0; i + 1 < teams.length; i += 2) simulateAIResult(teams[i], teams[i + 1]);
    });
}

function beginWeek() {
    if (!gameState) return;
    simulateLeagueRound();
    const entry = gameState.schedule.find(s => s.week === gameState.currentWeek);
    if (entry && entry.stage === 'masters') resolveCupWeek('masters', entry.week);
    if (entry && entry.stage === 'champions') resolveCupWeek('champions', entry.week);
}

/* ---------- 杯赛 ---------- */

function ensureCupRound(cup, idx) {
    if (!cup || idx < 0) return;
    if (cup.rounds[idx]) return;
    const prev = cup.rounds[idx - 1] || [];
    const next = [];
    for (let i = 0; i + 1 < prev.length; i += 2) {
        next.push({ a: prev[i].winner, b: prev[i + 1].winner, sa: 0, sb: 0, winner: null });
    }
    cup.rounds[idx] = next;
}

function cupHasPlayer(m) {
    return !!m && (m.a === gameState.teamName || m.b === gameState.teamName);
}

function simulateCupMatch(m) {
    if (!m || m.winner) return;
    if (!m.a && !m.b) { m.winner = null; return; }
    if (!m.a || !m.b) { m.winner = m.a || m.b; return; }
    const [sa, sb] = simulateScoreFor(getTeamPowerByName(m.a), getTeamPowerByName(m.b));
    m.sa = sa; m.sb = sb;
    m.winner = sa > sb ? m.a : m.b;
}

function initCup(type) {
    const seeds = leagueTable(gameState.league).slice(0, 8).map(t => t.name);
    while (seeds.length < 8) seeds.push('待定');
    const order = [0, 7, 3, 4, 1, 6, 2, 5];
    const round0 = [];
    for (let i = 0; i < 8; i += 2) {
        round0.push({ a: seeds[order[i]], b: seeds[order[i + 1]], sa: 0, sb: 0, winner: null });
    }
    const cup = { type, league: gameState.league, participants: seeds, rounds: [round0], roundIndex: 0, champion: null, done: false, awarded: false };
    gameState.cups[type] = cup;
    return cup;
}

function simulateCupRemaining(cup) {
    if (!cup) return;
    let guard = 0;
    while (!cup.done && guard++ < 10) {
        const idx = cup.roundIndex;
        if (idx > 2) { cup.done = true; break; }
        ensureCupRound(cup, idx);
        const round = cup.rounds[idx] || [];
        if (!round.length) { cup.done = true; break; }
        round.forEach(m => simulateCupMatch(m));
        if (idx === 2) {
            cup.champion = round[0].winner || null;
            cup.done = true;
        } else {
            cup.roundIndex = idx + 1;
        }
    }
    if (cup.done) awardCup(cup);
}

function awardCup(cup) {
    if (!cup || cup.awarded) return;
    cup.awarded = true;
    const label = CUP_NAMES[cup.type] || '杯赛';
    const champ = cup.champion || '未知战队';
    if (champ === gameState.teamName) {
        const prize = cup.type === 'masters' ? 150000 : 300000;
        gameState.money += 50000;
        addMail('VCT 联盟', '🏆 ' + label + ' 冠军', '你率队夺得 ' + label + ' 冠军！冠军奖金已发放，另奖励 $50,000 现金。', prize);
        showToast('🏆 ' + label + ' 冠军', '冠军奖金已发送到邮箱', 'success');
    } else {
        addMail('VCT 联盟', label + ' 收官', champ + ' 夺得本届 ' + label + ' 冠军。', 0);
        showToast(label + ' 结束', champ + ' 夺冠', 'info');
    }
}

function resolveCupWeek(type, weekNum) {
    const entry = gameState.schedule.find(s => s.week === weekNum);
    if (!entry) return;
    if (!gameState.cups) gameState.cups = {};
    let cup = gameState.cups[type];
    if (!cup || cup.league !== gameState.league) cup = initCup(type);
    if (cup.done) {
        entry.opponent = '';
        entry.bye = true;
        return;
    }
    const idx = cup.roundIndex;
    ensureCupRound(cup, idx);
    const round = cup.rounds[idx] || [];
    round.forEach(m => { if (m && !m.winner && !cupHasPlayer(m)) simulateCupMatch(m); });
    const mine = round.find(m => m && !m.winner && cupHasPlayer(m));
    if (mine) {
        entry.opponent = mine.a === gameState.teamName ? mine.b : mine.a;
        entry.bye = false;
        entry.cupRound = idx;
    } else {
        entry.opponent = '';
        entry.bye = true;
        entry.cupRound = idx;
        simulateCupRemaining(cup);
    }
}

function applyCupPlayerResult(match, sa, sb) {
    if (!match) return;
    const cup = gameState.cups[match.stage];
    if (!cup) return;
    const idx = (typeof match.cupRound === 'number') ? match.cupRound : cup.roundIndex;
    ensureCupRound(cup, idx);
    const round = cup.rounds[idx] || [];
    const mine = round.find(m => m && cupHasPlayer(m) && !m.winner);
    if (!mine) return;
    mine.sa = sa; mine.sb = sb;
    mine.winner = sa > sb ? mine.a : mine.b;
    round.forEach(m => { if (m && !m.winner) simulateCupMatch(m); });
    cup.roundIndex = idx + 1;
    if (mine.winner === gameState.teamName) {
        if (idx === 2) {
            cup.champion = gameState.teamName;
            cup.done = true;
            awardCup(cup);
        } else {
            ensureCupRound(cup, idx + 1);
        }
    } else {
        simulateCupRemaining(cup);
    }
}

/* ---------- 赛果 ---------- */

function simulateScoreFor(a, b) {
    let sa = 0, sb = 0;
    const pa = (a || 70) / ((a || 70) + (b || 70));
    while (sa < 13 && sb < 13) {
        if (Math.random() < pa) sa++; else sb++;
    }
    return [sa, sb];
}

function recordStandingResult(opponent, didWin) {
    const ps = gameState.standings.find(s => s && s.isPlayerTeam);
    const os = gameState.standings.find(s => s && s.name === opponent);
    if (!ps) return;
    if (didWin) {
        ps.wins++; ps.points += 3;
        if (os) os.losses++;
    } else {
        ps.losses++;
        if (os) { os.wins++; os.points += 3; }
    }
}

function simulateMatchResult(match) {
    if (!match || match.played || !match.opponent) return;
    const effOwn = getEffectiveTeamPower();
    const oppPower = getTeamPowerByName(match.opponent);
    const [ownP, oppP] = applyTacticToPower(effOwn, oppPower);
    const [sa, sb] = simulateScoreFor(ownP, oppP);
    match.played = true;
    match.playerScore = sa;
    match.opponentScore = sb;
    match.result = sa > sb ? 'win' : 'loss';
    applyMoraleToRoster(sa > sb);
    if (isCupMatch(match)) applyCupPlayerResult(match, sa, sb);
    else recordStandingResult(match.opponent, sa > sb);
    gameState.matchHistory.push({
        week: match.week,
        stage: match.stage || 'league',
        label: matchLabel(match),
        playerTeam: gameState.teamName,
        opponent: match.opponent,
        playerScore: sa, opponentScore: sb, didWin: sa > sb
    });
}

function playMatch(match) {
    const oppTeam = AI_TEAMS.find(t => t.name === match.opponent);
    const oppPlayers = oppTeam
        ? REAL_PRO_PLAYERS.filter(p => p.team === oppTeam.name).map(p => ({ name: p.name, role: p.role, power: p.power }))
        : [];
    const effOwn = getEffectiveTeamPower();
    const oppPower = getTeamPowerByName(match.opponent);
    const [leftP, rightP] = applyTacticToPower(effOwn, oppPower);
    runVisualMatch({
        mode: 'league',
        weekLabel: matchLabel(match),
        leftName: gameState.teamName,
        rightName: match.opponent + (oppTeam ? ' ' + oppTeam.country : ''),
        leftPower: leftP,
        rightPower: rightP,
        leftPlayers: gameState.roster,
        rightPlayers: oppPlayers,
        onFinish: (l, r) => finishMatch(match, l, r)
    });
}

function finishMatch(match, playerScore, opponentScore) {
    match.played = true; match.playerScore = playerScore; match.opponentScore = opponentScore;
    const didWin = playerScore > opponentScore; match.result = didWin ? 'win' : 'loss';
    applyMoraleToRoster(didWin);
    const cup = isCupMatch(match);
    if (cup) applyCupPlayerResult(match, playerScore, opponentScore);
    else recordStandingResult(match.opponent, didWin);

    if (didWin) {
        document.getElementById('match-team-left').classList.add('winner');
        document.getElementById('match-team-right').classList.add('loser');
    } else {
        document.getElementById('match-team-left').classList.add('loser');
        document.getElementById('match-team-right').classList.add('winner');
    }

    const playerStats = generatePlayerStats(gameState.roster, playerScore, opponentScore, true);
    const oppTeam = AI_TEAMS.find(t => t.name === match.opponent);
    const oppProPlayers = oppTeam ? REAL_PRO_PLAYERS.filter(p => p.team === oppTeam.name) : [];
    const oppStats = generatePlayerStats(oppProPlayers.length > 0 ? oppProPlayers : [], opponentScore, playerScore, false);

    const allStats = [...playerStats, ...oppStats];
    const mvp = allStats.sort((a, b) => b.performance - a.performance)[0];

    playerStats.forEach(s => {
        const player = gameState.roster.find(p => p.name === s.name || p.id === s.id);
        if (player) {
            player.kills = (player.kills || 0) + s.kills;
            player.deaths = (player.deaths || 0) + s.deaths;
            player.assists = (player.assists || 0) + s.assists;
            player.mvps = (player.mvps || 0) + (mvp && mvp.name === player.name && mvp.isPlayerTeam ? 1 : 0);
            player.matches = (player.matches || 0) + 1;
        }
    });

    gameState.matchHistory.push({
        week: match.week,
        stage: match.stage || 'league',
        label: matchLabel(match),
        playerTeam: gameState.teamName,
        opponent: match.opponent,
        playerScore, opponentScore, didWin,
        mvpName: mvp ? mvp.name : '',
        playerStats: playerStats,
    });

    renderMatchStats(mvp, playerStats, oppStats);

    const resultDiv = document.getElementById('match-result');
    const winFx = (gameState.shop && gameState.shop.winEffect) ? gameState.shop.winEffect + ' ' : '';
    resultDiv.textContent = didWin ? (winFx + '🏆 胜利！') : '💀 失败...';
    resultDiv.className = 'match-result ' + (didWin ? 'win' : 'loss');

    let bonus;
    if (cup) {
        const round = Math.min(2, Math.max(0, match.cupRound || 0));
        bonus = didWin ? [25000, 40000, 80000][round] : [8000, 12000, 20000][round];
        showToast(didWin ? '杯赛晋级！' : '杯赛止步', (didWin ? '晋级奖金' : '参赛补贴') + ' $' + bonus.toLocaleString(), didWin ? 'success' : 'warning');
    } else {
        bonus = didWin ? 15000 : 5000;
        showToast('比赛奖金', didWin ? '胜利奖金 $15,000' : '安慰奖 $5,000', didWin ? 'success' : 'warning');
    }
    gameState.money += bonus;

    document.getElementById('match-close-btn').style.display = 'block';
    updateAllDisplays(); renderDashboard();
    if (gameState.shop && gameState.shop.autoSave) saveGame();
    if (typeof autoSyncAfterMatch === 'function') autoSyncAfterMatch();
}

function advanceWeek() {
    if (!gameState) return;
    if (gameState.currentWeek >= TOTAL_WEEKS) { showSeasonSummary(); return; }
    const entry = gameState.schedule.find(s => s.week === gameState.currentWeek);
    if (entry && entry.opponent && !entry.played) simulateMatchResult(entry);
    const weeklyBonus = 10000 + gameState.currentWeek * 500;
    gameState.money += weeklyBonus;
    gameState.currentWeek++;
    beginWeek();
    showToast('进入第 ' + gameState.currentWeek + ' 周', '获得 $' + weeklyBonus.toLocaleString() + ' 训练津贴', 'success');
    updateAllDisplays();
    renderDashboard();
}

function simulateAllMatches() {
    if (!gameState) return;
    if (gameState.currentWeek >= TOTAL_WEEKS) { showSeasonSummary(); return; }
    while (gameState.currentWeek <= TOTAL_WEEKS) {
        beginWeek();
        const entry = gameState.schedule.find(s => s.week === gameState.currentWeek);
        if (entry && entry.opponent && !entry.played) simulateMatchResult(entry);
        if (gameState.currentWeek >= TOTAL_WEEKS) break;
        gameState.money += 10000 + gameState.currentWeek * 500;
        gameState.currentWeek++;
    }
    beginWeek();
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    const finalRank = getPlayerRank();
    const isChampion = finalRank === 1;
    showToast(isChampion ? '🏆 联赛冠军！' : '赛季结束',
        `战绩: ${playerStanding.wins}胜 ${playerStanding.losses}负，联赛排名 #${finalRank}`,
        isChampion ? 'success' : 'warning');
    updateAllDisplays();
    renderDashboard();
    renderStandings();
    showSeasonSummary();
}

function closeMatchModal() {
    const modal = document.getElementById('match-modal'); modal.classList.add('hidden');
    document.getElementById('match-team-left').classList.remove('winner', 'loser');
    document.getElementById('match-team-right').classList.remove('winner', 'loser');
    const statsPanel = document.getElementById('match-stats-panel');
    if (statsPanel) statsPanel.classList.add('hidden');
    if (matchFinishMode === 'friendly') {
        matchFinishMode = 'league';
        if (typeof renderVersus === 'function') renderVersus();
        return;
    }
    if (gameState.currentWeek >= TOTAL_WEEKS) {
        showSeasonSummary();
        return;
    }
    showConfirmModal('下一周', '比赛结束！要进入下一周吗？', () => {
        const weeklyBonus = 10000 + gameState.currentWeek * 500;
        gameState.money += weeklyBonus;
        gameState.currentWeek++;
        beginWeek();
        showToast('进入第 ' + gameState.currentWeek + ' 周', '获得 $' + weeklyBonus.toLocaleString(), 'success');
        updateAllDisplays(); renderDashboard();
    });
}

/* ---------- 赛季结算 / 升降级 / 下赛季 ---------- */

function simulateLeaguePlayoff(leagueKey) {
    const table = leagueTable(leagueKey).slice(0, 4);
    if (table.length < 4) return null;
    const powerOf = (t) => t.isPlayerTeam ? (gameState.teamPower || 70) : ((AI_TEAMS.find(a => a.name === t.name) || {}).power || 70);
    const sim = (a, b) => {
        const [sa, sb] = simulateScoreFor(powerOf(a), powerOf(b));
        return { a: a.name, b: b.name, sa, sb, winner: sa > sb ? a.name : b.name };
    };
    const sf1 = sim(table[0], table[3]);
    const sf2 = sim(table[1], table[2]);
    const sf1W = sf1.winner === table[0].name ? table[0] : table[3];
    const sf2W = sf2.winner === table[1].name ? table[1] : table[2];
    const final = sim(sf1W, sf2W);
    return { semifinal1: sf1, semifinal2: sf2, final, champion: final.winner };
}

function buildSeasonSummary() {
    const table = leagueTable(gameState.league);
    const me = table.find(t => t.isPlayerTeam) || {};
    const myRank = table.findIndex(t => t.isPlayerTeam) + 1;
    const prem = leagueTable('premier');
    const chal = leagueTable('challengers');
    const over = gameState.currentWeek >= TOTAL_WEEKS;
    const playoff = over ? simulateLeaguePlayoff(gameState.league) : null;
    return {
        table,
        me,
        myRank,
        leader: table[0] || null,
        playoff,
        masters: (gameState.cups && gameState.cups.masters) ? gameState.cups.masters : null,
        champions: (gameState.cups && gameState.cups.champions) ? gameState.cups.champions : null,
        promoted: chal.slice(0, 2).map(t => t.name),
        relegated: prem.slice(-2).map(t => t.name),
        playerPromoted: gameState.league === 'challengers' && myRank > 0 && myRank <= 2,
        playerRelegated: gameState.league === 'premier' && table.length > 2 && myRank > table.length - 2
    };
}

function showSeasonSummary() {
    if (!gameState) return;
    const s = buildSeasonSummary();
    const over = gameState.currentWeek >= TOTAL_WEEKS;
    if (over) gameState.seasonEnded = true;

    if (over && s.playoff && gameState._playoffSeason !== gameState.season) {
        gameState._playoffSeason = gameState.season;
        const champ = s.playoff.champion;
        gameState.money += 80000;
        addMail('🏆 联赛季后赛', champ + ' 赢得了 ' + LEAGUE_META[gameState.league].name + ' 季后赛冠军，获得 $80,000 奖金！' + (champ === gameState.teamName ? ' 恭喜你的战队夺冠！' : ''), 'info');
    }

    const cupLine = (cup) => {
        if (!cup || !cup.champion) return '进行中 / 未决出';
        return cup.champion + (cup.champion === gameState.teamName ? ' 👈 你的战队' : '');
    };
    const news = [];
    if (s.playerPromoted) news.push('🎉 恭喜！你的战队获得次级联赛前二，下赛季将升入 <b>VCT 顶级联赛</b>。');
    if (s.playerRelegated) news.push('⚠ 你的战队位于顶级联赛末二，下赛季将降入 <b>Challengers 次级联赛</b>。');
    if (over && s.playoff && s.playoff.champion === gameState.teamName) news.push('🏆 恭喜！你的战队夺得联赛季后赛冠军！');

    const playoffHtml = s.playoff ? `
        <div class="playoff-bracket">
            <h3 style="margin: 18px 0 10px;">联赛季后赛</h3>
            <div class="playoff-round">
                <div class="playoff-match"><span>${s.playoff.semifinal1.a}</span><b>${s.playoff.semifinal1.sa}</b> - <b>${s.playoff.semifinal1.sb}</b><span>${s.playoff.semifinal1.b}</span></div>
                <div class="playoff-match"><span>${s.playoff.semifinal2.a}</span><b>${s.playoff.semifinal2.sa}</b> - <b>${s.playoff.semifinal2.sb}</b><span>${s.playoff.semifinal2.b}</span></div>
            </div>
            <div class="playoff-final">
                <div class="playoff-match final"><span>${s.playoff.final.a}</span><b>${s.playoff.final.sa}</b> - <b>${s.playoff.final.sb}</b><span>${s.playoff.final.b}</span></div>
                <div class="playoff-champion">🏆 冠军：<b>${s.playoff.champion}</b>${s.playoff.champion === gameState.teamName ? ' 👈 你的战队' : ''}</div>
            </div>
        </div>
    ` : '';

    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2>${over ? '第 ' + gameState.season + ' 赛季结算' : '赛季数据总览'}</h2>
        <p class="gh-desc" style="margin: 10px 0 18px;">
            ${gameState.season} 赛季 · ${LEAGUE_META[gameState.league].name} ·
            ${over ? '赛季已结束' : '第 ' + gameState.currentWeek + ' / ' + TOTAL_WEEKS + ' 周'}
        </p>
        <div class="season-summary-grid">
            <div class="season-summary-item"><span>你的排名</span><b>#${s.myRank || '-'}</b></div>
            <div class="season-summary-item"><span>战绩</span><b>${s.me.wins || 0} 胜 ${s.me.losses || 0} 负</b></div>
            <div class="season-summary-item"><span>联赛积分</span><b>${s.me.points || 0}</b></div>
            <div class="season-summary-item"><span>Masters 冠军</span><b>${cupLine(s.masters)}</b></div>
            <div class="season-summary-item"><span>Champions 冠军</span><b>${cupLine(s.champions)}</b></div>
            <div class="season-summary-item"><span>${LEAGUE_META[gameState.league].name} 第一名</span><b>${s.leader ? s.leader.name : '-'}</b></div>
        </div>
        ${playoffHtml}
        <div class="season-zone-preview">
            <div class="zone-line zone-up">↑ 次级联赛前二升级：${s.promoted.join('、') || '-'}</div>
            <div class="zone-line zone-down">↓ 顶级联赛末二降级：${s.relegated.join('、') || '-'}</div>
        </div>
        ${news.length ? '<div class="season-news">' + news.join('<br>') + '</div>' : ''}
        <div class="modal-actions">
            ${over ? '<button class="btn btn-primary" onclick="startNextSeason()" style="flex:1;">进入第 ' + (gameState.season + 1) + ' 赛季 ▶</button>' : '<button class="btn btn-ghost" onclick="closeModal()" style="flex:1;">继续赛季</button>'}
        </div>
    `;
    openModal();
    saveGame();
}

function applyPromotionRelegation() {
    ensureLeaguePools();
    const prem = leagueTable('premier');
    const chal = leagueTable('challengers');
    const relegated = prem.slice(-2).map(t => t.name);
    const promoted = chal.slice(0, 2).map(t => t.name);
    const pools = gameState.leagueTeams;

    relegated.forEach(n => {
        pools.premier = pools.premier.filter(x => x !== n);
        if (!pools.challengers.includes(n)) pools.challengers.push(n);
    });
    promoted.forEach(n => {
        pools.challengers = pools.challengers.filter(x => x !== n);
        if (!pools.premier.includes(n)) pools.premier.push(n);
    });

    const inPrem = new Set(pools.premier);
    const inChal = new Set(pools.challengers);
    gameState.standings.forEach(t => {
        if (inPrem.has(t.name)) t.league = 'premier';
        else if (inChal.has(t.name)) t.league = 'challengers';
    });
    const oldLeague = gameState.league;
    gameState.league = inPrem.has(gameState.teamName) ? 'premier' : 'challengers';
    return { promoted, relegated, oldLeague, newLeague: gameState.league };
}

function startNextSeason() {
    if (!gameState) return;
    if (gameState._lastSeasonStartAt && Date.now() - gameState._lastSeasonStartAt < 3000) return;
    gameState._lastSeasonStartAt = Date.now();
    closeModal();
    const champBefore = leagueTable('premier')[0];
    const wasChamp = champBefore && champBefore.isPlayerTeam;
    const pr = applyPromotionRelegation();

    currentStandingsLeague = gameState.league;
    gameState.season++;
    gameState.currentWeek = 1;
    gameState.matchHistory = [];
    gameState.cups = {};
    gameState.seasonEnded = false;
    gameState.money += 200000 + (wasChamp ? 300000 : 0);

    setupLeagueStandings();
    generateMarket();
    generateSchedule();
    beginWeek();
    updateTeamPower();
    updateAllDisplays();
    renderDashboard();

    let body = '第 ' + gameState.season + ' 赛季正式开幕！联盟已发放 $200,000 运营资金。';
    if (pr.oldLeague !== pr.newLeague) {
        body += pr.newLeague === 'premier'
            ? '\n🎉 你的战队已升入 VCT 顶级联赛，迎接更强的对手吧！'
            : '\n⚠ 你的战队降入 Challengers 次级联赛，下赛季冲回顶级！';
    }
    if (wasChamp) body += '\n🏆 上赛季顶级联赛冠军奖金 $300,000 已发放。';
    addMail('VCT 联盟', '第 ' + gameState.season + ' 赛季开幕', body, 50000);
    saveGame();
    showToast('新赛季开幕', '第 ' + gameState.season + ' 赛季 · ' + LEAGUE_META[gameState.league].name, 'success');
}

/* ---------- 赛程 / 积分榜 / 战队页面 ---------- */

function renderSchedule() {
    const container = document.getElementById('schedule-list');
    if (!container) return;
    const weeks = {};
    gameState.schedule.forEach(match => {
        if (!weeks[match.week]) weeks[match.week] = [];
        weeks[match.week].push(match);
    });
    container.innerHTML = Object.keys(weeks).sort((a, b) => a - b).map(week => {
        const matches = weeks[week];
        const current = parseInt(week) === gameState.currentWeek;
        return `
        <div class="schedule-week${current ? ' current' : ''}">
            <div class="schedule-week-header">
                <span class="schedule-week-title">第 ${week} 周</span>
                <span class="schedule-stage-name">${matchLabel(matches[0])}</span>
                ${current ? '<span class="week-current-tag">▶ 当前周</span>' : ''}
                ${matches.every(m => m.played || m.bye) ? '<span class="week-done-tag">已完成</span>' : ''}
            </div>
            <div class="schedule-matches">
                ${matches.map(match => {
                    if (!match.opponent) {
                        return `<div class="schedule-match bye"><span class="schedule-team">${match.bye ? '轮空 / 未晋级' : '对手待定'}</span></div>`;
                    }
                    const opp = AI_TEAMS.find(t => t.name === match.opponent);
                    let cls = match.isHome ? 'home' : '';
                    if (match.played) {
                        cls += match.result === 'win' ? ' finished win' : ' finished loss';
                    }
                    const result = match.played ? `<span class="schedule-result">${match.playerScore} - ${match.opponentScore}</span>` : '<span class="schedule-team" style="color: var(--valorant-muted);">VS</span>';
                    const oppStanding = gameState.standings.find(s => s.name === match.opponent);
                    let oppInfo = opp ? opp.country : '';
                    if (!match.played && gameState.shop) {
                        if (gameState.shop.scoutUnlocked && opp) oppInfo += ' · ⚔' + opp.power;
                        if (gameState.shop.replayUnlocked && oppStanding) {
                            const total = (oppStanding.wins || 0) + (oppStanding.losses || 0);
                            const wr = total ? Math.round((oppStanding.wins || 0) / total * 100) : 0;
                            oppInfo += ' · ' + wr + '%胜率';
                        }
                    }
                    return `
                        <div class="schedule-match ${cls}">
                            <span class="schedule-team">${match.isHome ? '🏠 ' : '✈️ '}${gameState.teamName}</span>
                            ${result}
                            <span class="schedule-team">${match.opponent} ${oppInfo}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>`;
    }).join('');
}

let currentStandingsLeague = '';

function setStandingsLeague(key) {
    currentStandingsLeague = key;
    renderStandings();
}

function renderStandings() {
    const tbody = document.getElementById('standings-body');
    if (!tbody) return;
    if (!LEAGUE_META[currentStandingsLeague]) currentStandingsLeague = gameState.league;
    const table = leagueTable(currentStandingsLeague);
    const note = document.getElementById('standings-note');
    if (note) {
        note.innerHTML = `${LEAGUE_META[currentStandingsLeague].name} · 第 ${gameState.season} 赛季 · 共 ${table.length} 支战队
            ${currentStandingsLeague === 'challengers' ? '<span class="zone-line zone-up">前 2 名升级</span>' : '<span class="zone-line zone-down">末 2 名降级</span>'}`;
    }
    document.querySelectorAll('.league-tab').forEach(b => {
        b.classList.toggle('active', b.dataset.league === currentStandingsLeague);
    });
    const size = table.length;
    tbody.innerHTML = table.map((team, i) => {
        const rank = i + 1;
        const winRate = team.wins + team.losses === 0 ? '0%' : Math.round(team.wins / (team.wins + team.losses) * 100) + '%';
        let zone = '';
        if (currentStandingsLeague === 'challengers' && rank <= 2) zone = 'zone-up';
        if (currentStandingsLeague === 'premier' && size > 2 && rank >= size - 1) zone = 'zone-down';
        return `
            <tr class="${team.isPlayerTeam ? 'my-team' : ''} ${zone}">
                <td><span class="rank-badge rank-${rank > 3 ? '' : rank}">${rank}</span></td>
                <td style="font-weight: 700;">
                    <span class="team-color-dot" style="background: ${team.color || '#768079'};"></span>
                    ${team.name}${team.isPlayerTeam ? ' 👈' : ''}
                    ${!team.isPlayerTeam && team.country ? ` <span style="font-size: 14px;">${team.country}</span>` : ''}
                    ${zone === 'zone-up' ? '<span class="zone-tag up">升级区</span>' : ''}
                    ${zone === 'zone-down' ? '<span class="zone-tag down">降级区</span>' : ''}
                </td>
                <td style="font-size: 12px; color: var(--text-secondary);">${team.region || '-'}</td>
                <td class="right" style="color: var(--success);">${team.wins}</td>
                <td class="right" style="color: var(--danger);">${team.losses}</td>
                <td class="right">${winRate}</td>
                <td class="right"><span style="color: var(--valorant-red); font-weight: 900;">${team.points}</span></td>
                <td class="right"><span style="color: var(--text-secondary); font-size: 12px;">⚔ ${team.power}</span></td>
            </tr>
        `;
    }).join('');
}

function renderTeams() {
    const container = document.getElementById('teams-grid');
    if (!container) return;
    const cardFor = (team) => {
        const teamPros = REAL_PRO_PLAYERS.filter(p => p.team === team.name);
        const standing = gameState.standings.find(s => s.name === team.name);
        return `
            <div class="team-card">
                <div class="team-header" style="border-left-color: ${team.color};">
                    <div class="team-tag-badge" style="background: ${team.color};">${team.tag}</div>
                    <div>
                        <div class="team-name">${team.name} ${team.country}</div>
                        <div class="team-region">${team.region} | 教练: ${team.coach}</div>
                    </div>
                    <div class="team-power-big">⚔ ${standing ? standing.power : team.power}</div>
                </div>
                <div class="team-roster-mini">
                    ${teamPros.length > 0 ? teamPros.map(p => `
                        <div class="team-pro-item">
                            <span class="pro-name">${p.name}</span>
                            <span class="pro-role">${getRoleCN(p.role)}</span>
                            <span class="pro-power">${p.power}</span>
                        </div>
                    `).join('') : '<div class="team-pro-item" style="color: var(--text-secondary);">阵容未公开</div>'}
                </div>
            </div>`;
    };
    container.innerHTML = LEAGUE_KEYS.map(key => {
        const teams = AI_TEAMS.filter(t => leagueOfTeam(t.name) === key);
        return `<div class="team-group">
            <h2 class="team-group-title" style="border-left-color:${LEAGUE_META[key].color};">${LEAGUE_META[key].name} <span>${teams.length} 支</span></h2>
            <div class="teams-grid-inner">${teams.map(cardFor).join('')}</div>
        </div>`;
    }).join('');
}

/* ---------- 我的战队：直接移除特工（不返还资金） ---------- */

function removeAgent(uniqueId) {
    if (!gameState) return;
    const agent = gameState.roster.find(a => a.uniqueId === uniqueId);
    if (!agent) return;
    showConfirmModal('移除特工', `确定要移除 ${agent.name} 吗？\n\n直接移除不会返还任何资金，阵容位会被腾出。`, () => {
        showConfirmModal('再次确认', `${agent.name} 将永久离开你的战队，且不会获得任何补偿。\n\n真的要移除吗？`, () => {
            gameState.roster = gameState.roster.filter(a => a.uniqueId !== uniqueId);
            updateTeamPower();
            renderRoster();
            updateAllDisplays();
            renderDashboard();
            saveGame();
            showToast('已移除', agent.name + ' 已离开战队，未返还资金', 'warning');
        });
    });
}

/* ---------- 旧存档迁移 ---------- */

function migrateLeagueState(state) {
    if (!state.leagueTeams || !Array.isArray(state.leagueTeams.premier) || !Array.isArray(state.leagueTeams.challengers)) {
        state.leagueTeams = buildLeaguePools(state.teamName);
        if (!LEAGUE_META[state.league]) {
            const powers = AI_TEAMS.filter(t => t.name !== state.teamName).map(t => t.power).sort((a, b) => b - a);
            const median = powers[Math.floor(powers.length / 2)] || 75;
            state.league = (Number(state.teamPower) || 0) >= median ? 'premier' : 'challengers';
        }
    }
    if (!LEAGUE_META[state.league]) state.league = 'challengers';
    LEAGUE_KEYS.forEach(k => {
        if (!Array.isArray(state.leagueTeams[k])) state.leagueTeams[k] = [];
        state.leagueTeams[k] = state.leagueTeams[k].filter(n => n && n !== state.teamName);
    });
    state.leagueTeams[state.league].push(state.teamName);

    const inPrem = new Set(state.leagueTeams.premier);
    const inChal = new Set(state.leagueTeams.challengers);
    const known = new Set(state.standings.map(t => t.name));
    AI_TEAMS.forEach(team => {
        if (known.has(team.name) || team.name === state.teamName) return;
        state.standings.push({
            name: team.name, tag: team.tag, region: team.region, country: team.country,
            color: team.color, power: team.power, wins: 0, losses: 0, points: 0,
            league: inPrem.has(team.name) ? 'premier' : 'challengers', isPlayerTeam: false
        });
    });
    state.standings.forEach(t => {
        if (t.isPlayerTeam) t.league = state.league;
        else if (!LEAGUE_META[t.league]) t.league = inPrem.has(t.name) ? 'premier' : 'challengers';
    });

    if (Number(state.scheduleVersion) !== 2) {
        const old = Array.isArray(state.schedule) ? state.schedule.slice() : [];
        const oldByWeek = {};
        old.forEach(m => { if (m && m.week) oldByWeek[m.week] = m; });
        state.schedule = buildSeasonSchedule(state.teamName, state.league, state.leagueTeams);
        state.schedule.forEach(nm => {
            const om = oldByWeek[nm.week];
            if (om && om.played && nm.stage === 'league' && om.opponent) {
                nm.opponent = om.opponent;
                nm.played = true;
                nm.playerScore = Number(om.playerScore) || 0;
                nm.opponentScore = Number(om.opponentScore) || 0;
                nm.result = om.result || null;
            }
        });
        state.scheduleVersion = 2;
    }
    state.simulatedWeek = Number(state.currentWeek) || 1;
}

function sanitizeGameState(state) {
    if (!state || typeof state !== 'object') return false;
    if (!Array.isArray(state.roster)) state.roster = [];
    if (!Array.isArray(state.market)) state.market = [];
    if (!Array.isArray(state.schedule)) state.schedule = [];
    if (!Array.isArray(state.matchHistory)) state.matchHistory = [];
    if (!Array.isArray(state.standings)) state.standings = [];

    state.roster = state.roster.filter(p => p && typeof p === 'object' && p.name);
    state.market = state.market.filter(p => p && typeof p === 'object' && p.name);
    state.standings = state.standings.filter(t => t && typeof t === 'object' && t.name);

    state.teamName = state.teamName || '我的战队';
    state.teamTag = state.teamTag || 'MY';
    state.money = Number(state.money) || 0;
    state.season = Number(state.season) || 1;
    state.currentWeek = Math.min(Math.max(Number(state.currentWeek) || 1, 1), TOTAL_WEEKS);
    state.teamPower = Number(state.teamPower) || 0;
    if (!Array.isArray(state.matchHistory)) state.matchHistory = [];

    const hasPlayer = state.standings.some(t => t.isPlayerTeam);
    if (!hasPlayer) {
        state.standings.push({
            name: state.teamName, tag: state.teamTag, region: 'MY', country: '🎮',
            color: '#FF4655', power: state.teamPower, wins: 0, losses: 0, points: 0,
            league: state.league || 'challengers', isPlayerTeam: true
        });
    }

    initExtras(state);
    migrateLeagueState(state);
    return true;
}

/* ---------- 初始化 ---------- */

function initGame() {
    gameState = {
        teamName: '我的战队', teamTag: 'MY', teamPower: 0, money: 500000,
        season: 1, currentWeek: 1, roster: [], market: [], schedule: [],
        standings: [], matchHistory: [], league: 'challengers', leagueTeams: null, cups: {}
    };
    gameState.leagueTeams = buildLeaguePools(gameState.teamName);
    gameState.league = 'challengers';
    setupInitialRoster();
    setupLeagueStandings();
    generateMarket();
    generateSchedule();
    initExtras(gameState);
    beginWeek();
    updateAllDisplays();
    showScreen('dashboard');
}

function initGame_custom() {
    initGame();
    maybeAnnounceVersion();
}

function initGame_withTeam(team) {
    const teamProPlayers = REAL_PRO_PLAYERS.filter(p => p.team === team.name);
    const roster = teamProPlayers.map((template, i) => {
        const agent = cloneAgent(template);
        agent.uniqueId = 'roster_' + Date.now() + '_' + i;
        agent.isPlayerOwned = true;
        agent.wins = 0;
        agent.losses = 0;
        agent.isPro = true;
        agent.realName = template.realName;
        agent.nationality = template.country;
        agent.bio = template.bio;
        agent.proTeam = template.team;
        return agent;
    });
    const avgPower = roster.length > 0
        ? roster.reduce((sum, a) => sum + a.power, 0) / roster.length
        : team.power;

    gameState = {
        teamName: team.name, teamTag: team.tag, teamPower: Math.round(avgPower), money: 200000,
        season: 1, currentWeek: 1, roster: roster, market: [], schedule: [],
        standings: [], matchHistory: [], league: '', leagueTeams: null, cups: {}
    };
    gameState.leagueTeams = buildLeaguePools(team.name);
    const powers = AI_TEAMS.filter(t => t.name !== team.name).map(t => t.power).sort((a, b) => b - a);
    const median = powers[Math.floor(powers.length / 2)] || 75;
    gameState.league = team.power >= median ? 'premier' : 'challengers';
    gameState.leagueTeams[gameState.league].push(team.name);

    setupLeagueStandings();
    generateMarket();
    generateSchedule();
    gameState.teamNamed = true;
    initExtras(gameState);
    beginWeek();
    updateTeamPower();
    updateAllDisplays();
    showScreen('dashboard');
    maybeAnnounceVersion();
}

function loadGameSilent() {
    const data = localStorage.getItem('vct_manager_save');
    if (!data) return false;
    try {
        const parsed = JSON.parse(data);
        if (!sanitizeGameState(parsed)) return false;
        gameState = parsed;
        beginWeek();
        updateTeamPower();
        updateAllDisplays();
        showScreen('dashboard');
        maybeAnnounceVersion();
        return true;
    } catch (e) { return false; }
}

function adminNextSeason() {
    if (!gameState) return showToast('请先开始游戏', '', 'warning');
    showConfirmModal('开始下赛季?', '当前赛季将被结算，升降级生效，新赛季重新生成赛程和转会市场。', () => {
        startNextSeason();
        refreshAdminStats();
    });
}

function adminWinNextMatch() {
    if (!gameState) return showToast('请先开始游戏', '', 'warning');
    const entry = gameState.schedule.find(s => s.week === gameState.currentWeek);
    if (!entry || !entry.opponent) return showToast('本周没有可进行的比赛', '', 'warning');
    if (!entry.played) simulateMatchResult(entry);
    const ps = gameState.standings.find(s => s && s.isPlayerTeam);
    updateAllDisplays();
    renderDashboard();
    refreshAdminStats();
    showToast('已模拟本周比赛', (ps ? ps.wins + ' 胜 ' + ps.losses + ' 负' : ''), 'success');
    saveGame();
}

function adminQuickSim(n) {
    if (!gameState) return showToast('请先开始游戏', '', 'warning');
    for (let i = 0; i < n; i++) {
        if (gameState.currentWeek >= TOTAL_WEEKS) break;
        beginWeek();
        const entry = gameState.schedule.find(s => s.week === gameState.currentWeek);
        if (entry && entry.opponent && !entry.played) simulateMatchResult(entry);
        gameState.money += 10000 + gameState.currentWeek * 500;
        gameState.currentWeek++;
    }
    beginWeek();
    updateAllDisplays();
    renderDashboard();
    refreshAdminStats();
    showToast('已快进 ' + n + ' 周', '当前第 ' + gameState.currentWeek + ' 周', 'success');
    saveGame();
}

/* ---------- 完善商店：分类展示 ---------- */

function renderShop() {
    const moneyEl = document.getElementById('shop-money');
    if (moneyEl) moneyEl.textContent = '$' + gameState.money.toLocaleString();
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    const cardFor = (item) => {
        const owned = gameState.shop.owned.indexOf(item.id) !== -1;
        const affordable = gameState.money >= item.price;
        return `
            <div class="shop-card${owned ? ' owned' : ''}">
                <div class="shop-icon">${item.icon}</div>
                <div class="shop-body">
                    <div class="shop-name">${item.name}</div>
                    <div class="shop-desc">${item.desc}</div>
                    <div class="shop-price">$${item.price.toLocaleString()}</div>
                </div>
                <button class="btn btn-sm ${owned ? 'btn-ghost' : 'btn-primary'}"
                    ${owned || !affordable ? 'disabled' : ''}
                    onclick="buyShopItem('${item.id}')">${owned ? '已拥有' : (affordable ? '购买' : '资金不足')}</button>
            </div>`;
    };
    grid.innerHTML = SHOP_CATEGORIES.map(cat => {
        const items = SHOP_ITEMS.filter(i => i.cat === cat.key);
        if (!items.length) return '';
        return `<div class="shop-category">
            <h3 class="shop-category-title">${cat.name}</h3>
            <div class="shop-category-grid">${items.map(cardFor).join('')}</div>
        </div>`;
    }).join('') + '<p class="shop-note">所有道具均为外观或便利类，不会改变任何比赛数值，保证公平对局。</p>';
}

function applyShopItem(item) {
    if (!item || !gameState) return;
    if (!gameState.shop) gameState.shop = { owned: [], badge: '', title: '', theme: '', autoSave: false, renameCards: 0 };
    if (item.kind === 'badge') gameState.shop.badge = item.icon;
    if (item.kind === 'theme') gameState.shop.theme = item.color;
    if (item.kind === 'title') gameState.shop.title = item.name;
    if (item.kind === 'rename') gameState.shop.renameCards++;
    if (item.kind === 'autosave') gameState.shop.autoSave = true;
    if (item.kind === 'board') gameState.shop.boardColor = item.color;
    if (item.kind === 'banner') gameState.shop.bannerIcon = item.icon;
    if (item.kind === 'collect') gameState.shop.collectible = item.icon;
    if (item.kind === 'avatar') gameState.shop.managerAvatar = item.icon;
    if (item.kind === 'frame') gameState.shop.avatarFrame = item.color;
    if (item.kind === 'effect') gameState.shop.winEffect = item.icon;
    if (item.kind === 'base') gameState.shop.baseDeco = item.icon;
    if (item.kind === 'sticker') {
        if (!Array.isArray(gameState.shop.stickers)) gameState.shop.stickers = [];
        if (gameState.shop.stickers.indexOf(item.icon) === -1) gameState.shop.stickers.push(item.icon);
    }
    if (item.kind === 'analysis') {
        if (item.id === 'analysis_scout') gameState.shop.scoutUnlocked = true;
        if (item.id === 'analysis_replay') gameState.shop.replayUnlocked = true;
    }
}

/* ---------- 游戏公告 ---------- */

const GAME_ANNOUNCEMENTS = [
    {
        version: '1.3.0',
        date: '2026-11-07',
        tag: '选手养成 & 赛季深度',
        title: 'v1.3.0 大型更新：士气 · 战术 · 训练升级 · 联赛季后赛',
        content: [
            '新增选手士气系统：胜场提升、负场下降，团队平均士气影响有效战力（90%~110%）。',
            '新增赛前战术选择：激进进攻（己方+5%）、均衡、稳固防守（对手-5%），控制台随时切换。',
            '训练系统升级：可指定训练属性，每名选手每周限训 1 次，90 以上属性收益减半。',
            '新增联赛季后赛：赛季末所在联赛前 4 进行单败淘汰赛，决出联赛冠军并发放奖金。',
            '选手池扩充 27 人、战队池扩充 7 支，次级联赛与转会市场更加丰富。',
            'UI 优化：阵容卡片显示士气条与训练状态，控制台展示有效战力与战术选择器。'
        ]
    },
    {
        version: '1.2.0',
        date: '2026-11-07',
        tag: '联赛金字塔',
        title: '联赛金字塔全面上线：顶级联赛 · Challengers · Masters · Champions',
        content: [
            'VCT 赛事体系重构：全部战队划分为「VCT 顶级联赛」与「Challengers 次级联赛」。',
            '新增季中 Masters 八强单败淘汰赛：常规赛第一阶段前 8 名晋级。',
            '新增季末 Champions 世界冠军赛：常规赛第二阶段结束后前 8 名晋级。',
            '升降级：Challengers 前 2 名升入顶级联赛，顶级联赛末 2 名降入 Challengers。',
            'AI 战队每周进行真实模拟比赛，积分榜会随赛程动态变化。',
            '新赛季自动结算并发放运营资金，升降级结果写入联盟邮件。'
        ]
    },
    {
        version: '1.2.0',
        date: '2026-11-07',
        tag: '内容更新',
        title: '50+ 新选手、13 支新战队、22 件商城道具',
        content: [
            '转会市场新增 50 余名真实风格职业选手与 13 支新战队（Heretics、FUT、Leviatán、MIBR、TALON 等）。',
            '商城扩充至 22 件道具，分为队徽 / 主题 / 称号 / 对局外观 / 横幅 / 收藏 / 便利七大类。',
            '「我的战队」新增「移除」：可直接移除特工，腾出阵容位，但不会返还任何资金（需二次确认）。',
            '新增战绩分享卡片与一键复制文案，方便把你的王朝战绩分享给朋友。'
        ]
    }
];

function latestAnnouncement() {
    return GAME_ANNOUNCEMENTS.length ? GAME_ANNOUNCEMENTS[0] : null;
}

function openAnnouncement() {
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2>📢 游戏公告</h2>
        <div class="announcement-list">
            ${GAME_ANNOUNCEMENTS.map(a => `
                <div class="announcement-item">
                    <div class="announcement-head">
                        <span class="announcement-tag">${a.tag}</span>
                        <span class="announcement-ver">v${a.version}</span>
                        <span class="announcement-date">${a.date}</span>
                    </div>
                    <h3>${a.title}</h3>
                    <ul>${a.content.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
            `).join('')}
        </div>
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="closeModal()" style="flex:1;">知道了</button>
        </div>
    `;
    openModal();
}

function renderStartAnnouncement() {
    const el = document.getElementById('start-announcement');
    if (!el) return;
    const a = latestAnnouncement();
    if (!a) { el.classList.add('hidden'); return; }
    el.innerHTML = `
        <div class="start-announcement-inner" onclick="openAnnouncement()">
            <span class="news-tag">${a.tag}</span>
            <span class="news-text">${a.title}</span>
            <span class="news-more">查看公告 →</span>
        </div>`;
    el.classList.remove('hidden');
}

function maybeAnnounceVersion() {
    if (!gameState) return;
    if (gameState.lastAnnouncementVersion === APP_VERSION) return;
    gameState.lastAnnouncementVersion = APP_VERSION;
    const a = latestAnnouncement();
    addMail('VCT 联盟', 'v' + APP_VERSION + ' 版本公告：' + (a ? a.title : '游戏更新'),
        (a ? a.content.join('\n') : '欢迎回到 VCT 战队经理。') + '\n\n登录奖励 $30,000 已随本邮件发放。', 30000);
}

/* ---------- 分享战绩 ---------- */

function buildShareText() {
    const standing = gameState.standings.find(s => s && s.isPlayerTeam);
    const rank = getPlayerRank();
    const meta = LEAGUE_META[gameState.league] || LEAGUE_META.premier;
    const masters = gameState.cups && gameState.cups.masters && gameState.cups.masters.champion;
    const champions = gameState.cups && gameState.cups.champions && gameState.cups.champions.champion;
    const best = [...gameState.roster].sort((a, b) => b.power - a.power)[0];
    return [
        '【VCT 战队经理】' + gameState.teamName,
        '第 ' + gameState.season + ' 赛季 · ' + meta.name,
        '战绩：' + standing.wins + ' 胜 ' + standing.losses + ' 负 · 联赛排名 #' + rank,
        masters ? 'Masters 冠军：' + masters : 'Masters：冲击中',
        champions ? 'Champions 冠军：' + champions : 'Champions：冲击中',
        best ? '核心选手：' + best.name + '（战力 ' + best.power + '）' : '',
        '来挑战我的王朝 → https://zmzhy.github.io/sdk/'
    ].filter(Boolean).join('\n');
}

function copyShareText() {
    const text = buildShareText();
    const fallback = () => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); showToast('已复制分享文案', '去粘贴给你的朋友吧', 'success'); }
        catch (e) { showToast('复制失败', '请手动长按复制', 'warning'); }
        document.body.removeChild(ta);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast('已复制分享文案', '去粘贴给你的朋友吧', 'success')).catch(fallback);
    } else {
        fallback();
    }
}

function shareNative() {
    const text = buildShareText();
    if (navigator.share) {
        navigator.share({ title: 'VCT 战队经理 · ' + gameState.teamName, text, url: 'https://zmzhy.github.io/sdk/' })
            .catch(() => { });
    } else {
        copyShareText();
    }
}

function drawShareCard() {
    const canvas = document.getElementById('share-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const standing = gameState.standings.find(s => s && s.isPlayerTeam);
    const rank = getPlayerRank();
    const meta = LEAGUE_META[gameState.league] || LEAGUE_META.premier;
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#0F1923');
    grad.addColorStop(0.55, '#1C2B3A');
    grad.addColorStop(1, '#0A1118');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = meta.color;
    ctx.lineWidth = 6;
    ctx.strokeRect(12, 12, W - 24, H - 24);

    ctx.fillStyle = meta.color;
    ctx.font = 'bold 22px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('VCT MANAGER · SEASON ' + gameState.season, 44, 66);

    ctx.fillStyle = '#ECE8E1';
    ctx.font = 'bold 56px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText(gameState.teamName.slice(0, 12), 44, 146);
    ctx.fillStyle = '#768079';
    ctx.font = '24px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText(meta.name, 44, 186);

    ctx.fillStyle = '#FF4655';
    ctx.font = 'bold 96px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('#' + rank, 44, 318);
    ctx.fillStyle = '#768079';
    ctx.font = '22px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('联赛排名', 44, 350);

    ctx.fillStyle = '#ECE8E1';
    ctx.font = 'bold 40px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText((standing.wins || 0) + ' 胜  ' + (standing.losses || 0) + ' 负', 330, 300);
    ctx.fillStyle = '#768079';
    ctx.font = '22px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('赛季战绩 · 积分 ' + (standing.points || 0), 330, 340);

    const masters = gameState.cups && gameState.cups.masters && gameState.cups.masters.champion;
    const champions = gameState.cups && gameState.cups.champions && gameState.cups.champions.champion;
    ctx.strokeStyle = '#2B3A4A';
    ctx.lineWidth = 2;
    for (let i = 0; i < 2; i++) ctx.strokeRect(44, 400 + i * 78, W - 88, 62);
    ctx.fillStyle = '#768079';
    ctx.font = '20px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('Masters 冠军', 64, 438);
    ctx.fillText('Champions 冠军', 64, 516);
    ctx.fillStyle = masters ? '#F7B500' : '#ECE8E1';
    ctx.font = 'bold 22px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText(masters || '冲击中', 300, 438);
    ctx.fillStyle = champions ? '#F7B500' : '#ECE8E1';
    ctx.fillText(champions || '冲击中', 300, 516);

    ctx.fillStyle = '#ECE8E1';
    ctx.font = 'bold 26px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('首发阵容', 44, 610);
    const roster = gameState.roster.slice(0, 5);
    roster.forEach((p, i) => {
        ctx.fillStyle = i === 0 ? '#FF4655' : '#768079';
        ctx.font = '20px "Segoe UI", "Microsoft YaHei", sans-serif';
        ctx.fillText((i + 1) + '. ' + p.name + '  ' + getRoleCN(p.role) + '  ⚔' + p.power, 44 + (i % 2) * 300, 650 + Math.floor(i / 2) * 34);
    });

    ctx.fillStyle = meta.color;
    ctx.font = 'bold 20px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('https://zmzhy.github.io/sdk/', 44, H - 52);
    ctx.fillStyle = '#768079';
    ctx.font = '18px "Segoe UI", "Microsoft YaHei", sans-serif';
    ctx.fillText('Build Your Championship Dynasty', 44, H - 24);
}

function openShareCard() {
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2>📤 分享战绩</h2>
        <div class="share-canvas-wrap"><canvas id="share-canvas" width="640" height="800"></canvas></div>
        <div class="modal-actions">
            <button class="btn btn-primary" onclick="copyShareText()" style="flex:1;">复制文案</button>
            <button class="btn btn-ghost" onclick="shareNative()">系统分享</button>
            <button class="btn btn-ghost" onclick="downloadShareCard()">下载卡片</button>
        </div>
        <div class="modal-actions">
            <button class="btn btn-basic" onclick="closeModal()" style="flex:1;">关闭</button>
        </div>
    `;
    openModal();
    setTimeout(drawShareCard, 20);
}

function downloadShareCard() {
    const canvas = document.getElementById('share-canvas');
    if (!canvas) return;
    try {
        const link = document.createElement('a');
        link.download = 'vct-' + gameState.teamName + '-season' + gameState.season + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('卡片已导出', '已保存为 PNG 图片', 'success');
    } catch (e) {
        showToast('导出失败', '请尝试截图保存', 'warning');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderStartAnnouncement === 'function') renderStartAnnouncement();
});