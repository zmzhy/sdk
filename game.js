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
    {"id":"p110","name":"PRX2","realName":"PRX Player","country":"🇸🇬","team":"Paper Rex","role":"Controller","avatar":"PR","power":82,"rating":"B","price":320000,"aim":74,"gameSense":84,"leadership":82,"utility":84,"isPro":true,"bio":"Paper Rex 替补控场，新加坡老将。d4v41 和 f0rsakeN 的可靠后盾。"}
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
    {"name":"NRG 2","tag":"NRG2","region":"Americas","country":"🇺🇸","power":70,"color":"#FA0000","coach":"Turtle","bio":"NRG 发展联盟，培养一队替补和未来之星。Turtle 最有潜力年轻选手。"}
];

const TOTAL_WEEKS = 24;
const MAX_ROSTER = 8;

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
    const numProPlayers = 4;
    const numAgents = 8;
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
    document.getElementById('team-name-display').textContent = gameState.teamName;
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
    if (nextMatch) {
        const opp = AI_TEAMS.find(t => t.name === nextMatch.opponent);
        const oppPower = getTeamPowerByName(nextMatch.opponent);
        nextInfo.innerHTML = `
            <div class="teams-row">
                <div class="team-half">
                    <h3>${gameState.teamName}</h3>
                    <span class="power">战力 ${gameState.teamPower}</span>
                </div>
                <div class="vs-badge">VS</div>
                <div class="team-half">
                    <h3>${nextMatch.opponent} ${opp ? opp.country : ''}</h3>
                    <span class="power">战力 ${oppPower}</span>
                </div>
            </div>
        `;
        playBtn.style.display = 'block';
    } else {
        nextInfo.innerHTML = '<p class="no-match">本周无比赛或赛季结束</p>';
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
            </div>
            <div class="agent-card-footer">
                ${isOwned ? `
                    <div class="agent-actions">
                        <button class="btn btn-train" onclick="trainAgent('${agent.uniqueId}')">训练 $5,000</button>
                        <button class="btn btn-basic" onclick="showAgentDetail('${agent.uniqueId}', true)">详情</button>
                        <button class="btn btn-release" onclick="releaseAgent('${agent.uniqueId}')">释放</button>
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
    const cost = 5000;
    if (gameState.money < cost) { showToast('资金不足', '训练需要 $5,000', 'error'); return; }
    gameState.money -= cost;
    const statNames = ['aim', 'gameSense', 'leadership', 'utility'];
    const randomStat = statNames[Math.floor(Math.random() * statNames.length)];
    const increase = Math.floor(Math.random() * 4) + 2;
    agent[randomStat] = Math.min(100, agent[randomStat] + increase);
    agent.power = calculateAgentPower(agent);
    updateAgentRating(agent);
    const statCN = { aim: '瞄准', gameSense: '意识', leadership: '领导', utility: '技能' };
    showToast('训练完成', agent.name + ' 的 ' + statCN[randomStat] + ' +' + increase + '!', 'success');
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
    const modal = document.getElementById('match-modal');
    modal.classList.remove('hidden');
    const playerPower = gameState.teamPower;
    const opponentPower = getTeamPowerByName(match.opponent);
    const opp = AI_TEAMS.find(t => t.name === match.opponent);
    document.getElementById('match-week-label').textContent = '第 ' + match.week + ' 周 · VCT 冠军联赛';
    document.getElementById('match-team-left-name').textContent = gameState.teamName;
    document.getElementById('match-team-right-name').textContent = match.opponent + (opp ? ' ' + opp.country : '');
    document.getElementById('match-team-left-power').textContent = '战力 ' + playerPower;
    document.getElementById('match-team-right-power').textContent = '战力 ' + opponentPower;
    document.getElementById('match-team-left-score').textContent = '0';
    document.getElementById('match-team-right-score').textContent = '0';
    document.getElementById('match-plays').innerHTML = '';
    document.getElementById('match-result').textContent = '';
    document.getElementById('match-close-btn').style.display = 'none';
    let playerScore = 0; let opponentScore = 0; const winLimit = 13; let round = 0;
    const interval = setInterval(() => {
        round++;
        const ownRound = Math.random() < (playerPower / (playerPower + opponentPower));
        let playEntry = '';
        if (ownRound) { playerScore++; playEntry = `<div class="play-entry own">第 ${round} 回合: ${gameState.teamName} 拿下！${playerScore} - ${opponentScore}</div>`; }
        else { opponentScore++; playEntry = `<div class="play-entry">第 ${round} 回合: ${match.opponent} 拿下！${playerScore} - ${opponentScore}</div>`; }
        const playsDiv = document.getElementById('match-plays');
        playsDiv.innerHTML += playEntry; playsDiv.scrollTop = playsDiv.scrollHeight;
        document.getElementById('match-team-left-score').textContent = playerScore;
        document.getElementById('match-team-right-score').textContent = opponentScore;
        if (playerScore >= winLimit || opponentScore >= winLimit) { clearInterval(interval); finishMatch(match, playerScore, opponentScore); }
    }, 500);
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
    if (gameState.currentWeek >= TOTAL_WEEKS) { showToast('赛季结束', '所有比赛已完成！', 'success'); }
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
    const oldName = gameState.teamName;
    gameState.teamName = newName;
    if (newTag) gameState.teamTag = newTag;
    const playerStanding = gameState.standings.find(s => s && s.isPlayerTeam);
    if (playerStanding) { playerStanding.name = newName; playerStanding.tag = newTag; }
    gameState.schedule.forEach(m => { if (m.playerTeam === oldName) m.playerTeam = newName; });
    gameState.matchHistory.forEach(m => { if (m.playerTeam === oldName) m.playerTeam = newName; });
    closeModal();
    showToast('队名已修改', '新队名: ' + newName + ' (' + (newTag || 'MY') + ')', 'success');
    updateAllDisplays(); renderDashboard();
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
    hideStartScreen();
    showToast('自创战队', '从零开始，打造你的王朝！', 'success');
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

const APP_VERSION = '1.0.0';

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