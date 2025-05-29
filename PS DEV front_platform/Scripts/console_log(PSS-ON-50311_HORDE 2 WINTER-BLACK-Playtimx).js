
const fs = require('fs');
var iconv = require('/Users/Ivan_Li/node_modules/iconv-lite');

const data = 

[
    {
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#a1f7ff",
        "page": 1,
        "lineText": {
            "sch": "免费游戏奖励",
            "eng": "FREE SPINS BONUS",
            "tai": "รางวัลฟรีสปิน",
            "ind": "Hadiah permainan gratis",
            "kor": "프리 스핀 보너스",
            "vie": "Thưởng trò chơi miễn phí",
            "tch": "免費遊戲獎勵",
            "mys": "Bonus putaran percuma",
            "jp": "フリースピンボーナス",
            "ru": "Бонусбесплатныевращения",
            "por": "Bônus de jogos grátis",
            "esp": "Bono de giros gratis",
            "tur": "Ücretsiz dönüş bonusu"
        },
        "position": {
            "x": 288,
            "y": 890
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "lineText": {
            "sch": "4个以上<BONUS>符號赢得免费游戏",
            "eng": "4 OR MORE <BONUS> SYMBOL WIN FREE SPINS BONUS",
            "tai": "<BONUS> 4 อันขึ้นไปได้รับฟรีสปิน",
            "ind": "4 <BONUS> atau lebih memenangkan bonus putaran gratis",
            "kor": "4 또는 그 이상 <BONUS> 무료 스핀 보너스를 땁니다",
            "vie": "4 <BONUS> trở lên sẽ trúng thưởng vòng quay miễn phí",
            "tch": "4個以上<BONUS>符號贏得免費遊戲",
            "mys": "4 atau lebih <BONUS> menang bonus putaran percuma",
            "jp": "4個以上の<BONUS>でボーナスゲームを獲得",
            "ru": "Более 4 <BONUS> позволяют выиграть бонусные фриспины",
            "por": "A obtenção de 4 ou mais símbolos <BONUS> resulta em um jogo grátis",
            "esp": "4 o más símbolos <BONUS> ganan un bono de giros gratis",
            "tur": "4 veya daha fazla <bonus> sembolü, ücretsiz döndürme bonusu kazanma."
        },
        "position": {
            "x": 295,
            "y": 809
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 295,
            "y": 650
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "lineText": {
            "sch": "<WILD>视为一个符号",
            "eng": "<WILD>SEEN AS 1 SYMBOL.",
            "tai": "<WILD> ถือเป็น 1 สัญลักษณ์",
            "ind": "<WILD>dianggap sebagai 1 simbol.",
            "kor": "<WILD> 1 기호로 간주",
            "vie": "<WILD>được xem như là 1 biểu tượng.",
            "tch": "<WILD>視為一個符號",
            "mys": "<WILD>dikenali sebagai 1 simbol.",
            "jp": "<WILD> 1シンボルと見なされます。",
            "ru": "<WILD>рассматривается как 1 символ.",
            "por": "<WILD>considerado como 1 símbolo.",
            "esp": "<WILD>considerado como 1 símbolo.",
            "tur": "<WILD> 1 sembol olarak görülüyor."
        },
        "position": {
            "x": 295,
            "y": 580
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 295,
            "y": 160
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 155,
            "y": 718
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 419,
            "y": 718
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 155,
            "y": 435
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 419,
            "y": 435
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 155,
            "y": 153
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
        "lineText": {
            "sch": "X1 - ",
            "eng": "X1 - ",
            "tai": "X1 - ",
            "ind": "X1 - ",
            "kor": "X1 - ",
            "vie": "X1 - ",
            "tch": "X1 - ",
            "mys": "X1 - ",
            "jp": "X1 - ",
            "ru": "X1 - ",
            "por": "X1 - ",
            "esp": "X1 - ",
            "tur": "X1 - "
        },
        "position": {
            "x": 419,
            "y": 153
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 3,
        "lineText": {
            "sch": "在任何旋转期间，第2、第3、第4、第5和第6转轴上,那些占据2个符号位置的符号(不包括 <WILD>符号和 <BONUS>符号),将有可能被银框所包围。",
            "eng": "DURING ANY SPINS, SOME SYMBOLS (EXCLUDING <WILD>SYMBOL AND <BONUS> SYMBOL) IN REELS 2, 3, 4, 5 AND 6 THAT OCCUPY 2 SYMBOLS' SPACES MAY HAVE A SILVER FRAME AROUND ITSELF.",
            "tai": "ในระหว่างการหมุนใดๆ ก็ตาม สัญลักษณ์บางตัว\n (ยกเว้นสัญลักษณ์ <WILD> และสัญลักษณ์ <BONUS>)\n ในเพลา 2, 3, 4, 5 และ 6 ที่กินพื้นที่ 2 ช่องสัญลักษณ์\nอาจมีกรอบสีเงินล้อมรอบ",
            "ind": "Selama putaran apapun, beberapa simbol (kecuali simbol <WILD> dan Simbol <BONUS>) di rol 2, 3, 4, 5 dan 6 yang menempati ruang yang cukup untuk 2 simbol bisa saja memiliki bingkai perak di sekelilingnya.",
            "kor": "스핀 중에 2, 3, 4, 5 및 6번 릴에서 2개 심볼의 공간을 차지하는 일부 심볼(<WILD> 심볼 및 <BONUS> 심볼 제외)은 그 주변에 실버 프레임이 있습니다",
            "vie": "Trong bất kỳ vòng quay, một số biểu tượng (ngoại trừ biểu tượng <WILD> và <BONUS>) trên các guồng 2, 3, 4, 5 và 6 chiếm không gian từ 2 biểu tượng có thể có một khung bạc bao quanh nó.",
            "tch": "在任何旋轉期間，第2、第3、第4、第5和第6轉軸上,那些佔據2個符號位置的符號(不包括 <WILD>符號和 <BONUS>符號)，將有可能被銀框所包圍。",
            "mys": "Semasa sebarang putaran, seskuati (terkecuali simbol <WILD> dan simbol <BONUS>) di reel 2, 3, 4, 5, dan 6 yang mengisi ruang 2 simbol boleh memiliki bingkai perak di sekelilingnya.",
            "jp": "すべてのスピンで、リール2、3、4、5または6の一部のシンボル (<WILD>シンボルと<BONUS>シンボルを除く) は、2シンボルのスペースを埋めることがあり、その周りに銀フレームが現れることがあります。",
            "ru": "Во время любого вращения некоторые символы (кроме символов <WILD> и <BONUS>) на барабанах 2, 3, 4, 5 и 6, которые занимают от 2 позиций, могут иметь серебряную рамку.",
            "por": "Durante qualquer rodada, alguns símbolos (excluindo o símbolo <WILD> e o símbolo <BONUS>) nos rodos 2, 3, 4, 5 e 6 que ocupam 2 espaços de símbolos podem ter uma moldura prateada ao seu redor.",
            "esp": "Durante cualquier giro, algunos símbolos (excluyendo el símbolo <WILD> y el símbolo <BONUS>) en los rodillos 2, 3, 4, 5 y 6 que ocupen 2 espacios de símbolos pueden tener un marco plateado alrededor de sí mismos.",
            "tur": "Herhangi bir döndürme sirasinda, 2, 3, 4, 5 ve 6. Makaralarda (<WILD> sembolü ve <BONUS> sembolü hariç) 2 sembol alanini kaplayan belirli semboller, kendisinin etrafinda gümüş çerçeve taşiyabilir."
        },
        "position": {
            "x": 360,
            "y": 547
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 4,
        "lineText": {
            "sch": "在新符号跌落后的每一轮旋转中，上一轮赢奖中所涉及的任何银框符号将被转换为一个随机并带有金框的符号(<BONUS>符号除外)。在新符号跌落后的每一轮旋转中，上一轮赢奖中所涉及的任何金框符号将被转换为<WILD>符号。",
            "eng": "AT EVERY NEW ROUND AFTER THE NEW SYMBOLS HAVE CASCADED DOWN, ANY SILVER-FRAMED SYMBOL(S) THAT IS INVOLVED IN A WIN IN THE PREVIOUS ROUND WILL BE TRANSFORMED INTO A RANDOMLY SELECTED SYMBOL (OTHER THAN <BONUS> SYMBOL) WITH A GOLD FRAME AROUND ITSELF. AT EVERY NEW ROUND AFTER THE NEW SYMBOLS HAVE CASCADED DOWN, ANY GOLD-FRAMED SYMBOL(S) THAT IS INVOLVED IN A WIN IN THE PREVIOUS ROUND WILL BE TRANSFORMED INTO <WILD> SYMBOL.",
            "tai": "ในทุกรอบเกมใหม่หลังจากสัญลักษณ์ใหม่ได้ตกลงมา\n สัญลักษณ์ใดๆ ก็ตามที่มีกรอบสีเงินที่มีส่วนในการชนะรางวัล\n ในรอบก่อนหน้าจะถูกแปลงเป็นสัญลักษณ์อื่นแบบสุ่ม \n ที่ไม่ใช่สัญลักษณ์ <BONUS> และกรอบเปลี่ยนเป็นสีทอง\n ในทุกรอบเกมใหม่หลังจากสัญลักษณ์ใหม่ได้ตกลงมา\n สัญลักษณ์ใดๆ ก็ตามที่มีกรอบสีทองที่มีส่วนในการชนะรางวัล\n ในรอบก่อนหน้าจะถูกเปลี่ยนเป็นสัญลักษณ์ <WILD>\n",
            "ind": "Pada setiap babak baru setelah simbol baru telah berjatuhan, simbol berbingkai perak apapun yang terlibat dalam sebuah kemenangan di babak sebelumnya akan diubah menjadi simbol yang dipilih secara acak (selain simbol <BONUS>) dengan bingkai emas di sekelilingnya.Di setiap babak baru setelah simbol baru berjatuhan, simbol apapun yang memiliki bingkai emas yang terlibat dalam kemenangan di babak sebelumnya akan diubah menjadi simbol <WILD>.",
            "kor": "새 심볼이 내려온 후 새 라운드에서는 이전 라운드의 승리에 관련되었던 모든 실버 프레임 심볼이 그 주변에 골드 프레임이 있는 무작위로 선택된 심볼(<BONUS> 심볼 제외)로 변환됩니다. 새 심볼이 내려온 후 새 라운드마다 이전 라운드에서 승리에 관련되었던 모든 골드 프레임 심볼은 <WILD> 심볼로 변환됩니다",
            "vie": "Ở mỗi vòng chơi mới sau khi các biểu tượng mới rơi xuống, bất kỳ biểu tượng khung bạc tham gia vào một chiến thắng từ vòng chơi trước sẽ được chuyển hóa thành một biểu tượng được chọn ngẫu nhiên (ngoài biểu tượng <BONUS>) với một khung vàng bao quanh nó. Ở mỗi vòng chơi mới sau khi các biểu tượng mới rơi xuống, bất kỳ biểu tượng khung vàng tham gia vào một chiến thắng từ vòng chơi trước sẽ được chuyển đổi thành biểu tượng<WILD>.",
            "tch": "在新符號掉落後的每一輪旋轉中，上一輪贏分中所涉及的任何銀框符號將被轉換為一個隨機並帶有金框的符號(<BONUS>符號除外)。在新符號掉落後的每一輪旋轉中，上一輪贏分中所涉及的任何金框符號將被轉換為<WILD>符號。",
            "mys": "Setiap kali pusaran baru berlaku selepas simbol-simbol baru telah berjatuh, sebarang simbol berbingkai perak yang terlibat dalam kemenangan pada pusaran sebelumnya akan diubah menjadi simbol pilihan rawak (kecuali simbol <BONUS>) yang memiliki bingkai emas di sekitarnya. Setiap kali pusaran baru berlaku selepas simbol-simbol baru telah jatuh, sebarang simbol berbingkai emas yang terlibat dalam kemenangan pada pusaran sebelumnya akan diubah menjadi simbol <WILD>.",
            "jp": "新しいシンボルが落ちた後の新しいラウンドごとに、直前ラウンドで当たりの一部となった銀フレームのシンボルは、ランダムに選ばれたシンボル (<BONUS>シンボル以外) に変化し、周囲に金フレームが表示されます。新しいシンボルが落ちた後の新しいラウンドごとに、直前のラウンドで当たりの一部となった金フレームのシンボルは、<WILD>シンボルに変化します。",
            "ru": "Во время каждого нового раунда после выпадения новых символов все символы в серебряной рамке, которые принесли выигрыш в предыдущем раунде, превращаются в случайные символы (кроме символов <BONUS>) в золотой рамке. Во время каждого нового раунда после выпадения новых символов все символы в золотой рамке, которые принесли выигрыш в предыдущем раунде, превращаются в 2–4 символа <WILD> в соответствии с количеством позиций, занятых соответствующими символами в золотой рамке.",
            "por": "Em cada rodada de rotação após a queda dos novos símbolos, qualquer símbolo com moldura prateada envolvido em uma vitória na rodada anterior será transformado em um símbolo selecionado aleatoriamente com uma moldura dourada ao seu redor, exceto o símbolo <BONUS>. Em cada rodada de rotação após a queda dos novos símbolos, qualquer símbolo com moldura dourada envolvido em uma vitória na rodada anterior será transformado em um símbolo <WILD>.",
            "esp": "En cada nueva ronda después de que los nuevos símbolos hayan caído, cualquier símbolo con marco plateado que esté involucrado en una ganancia en la ronda anterior se transformará en un símbolo seleccionado aleatoriamente (que no sea el símbolo <BONUS>) con un marco dorado alrededor de él. En cada nueva ronda después de que los nuevos símbolos hayan caído, cualquier símbolo con marco dorado que esté involucrado en una ganancia en la ronda anterior se transformará en el símbolo <WILD>.",
            "tur": "Yeni sembollerin aşağiya doğru kademeli olarak inişinden sonra her yeni turda, önceki turdaki kazançta rol oynayan herhangi bir gümüş çerçeveli sembol, kendisinin etrafinda altin çerçeve ile seçilen rastgele bir sembole (<BONUS> sembolü hariç) dönüşecektir. Yeni sembollerin aşağiya doğru kademeli olarak inişinden sonra her yeni turda, önceki turdaki kazançta rol oynayan herhangi bir altin çerçeveli sembol, <WILD> sembolüne dönüşecektir."
        },
        "position": {
            "x": 360,
            "y": 547
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#a1f7ff",
        "page": 5,
        "lineText": {
            "sch": "奖金倍数",
            "eng": "MULTIPLIER",
            "tai": "ตัวคูณเงินรางวัล",
            "ind": "Kelipatan bonus",
            "kor": "승수",
            "vie": "Hệ số nhân",
            "tch": "贏分倍數",
            "mys": "Pengganda",
            "jp": "賞金倍率",
            "ru": "Множитель",
            "por": "Multiplicador de bônus",
            "esp": "Multiplicador",
            "tur": "Çarpici"
        },
        "position": {
            "x": 360,
            "y": 933
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 5,
        "lineText": {
            "sch": "若在任何旋转期间，赢奖符号若包含金框符号，金框符号上的奖金倍数将累积。在任何旋转期间，带有<WILD>的符号都将乘以当前累积奖金倍数。",
            "eng": "DURING ANY SPINS, IF WINNING SYMBOLS INCLUDE GOLD FRAME, THE MULTIPLIER ON THE GOLD FRAMED WILL ACCUMULATE.DURING ANY SPINS, SYMBOL WITH <WILD> WILL BE MULTIPLIED BY THE CURRENT ACCUMULATED MULTIPLIER.",
            "tai": "ในระหว่างการหมุนเกมทุกครั้ง หากสัญลักษณ์ที่ชนะรางวัล\n มีกรอบทอง ตัวคูณบนสัญลักษณ์กรอบทองนั้นจะถูกสะสมเพิ่มขึ้น\n ในระหว่างการหมุนใดๆ สัญลักษณ์ที่มี <WILD>\n จะถูกคูณด้วยตัวคูณโบนัสสะสมปัจจุบัน\n",
            "ind": "Selama putaran apapun, jika simbol menang termasuk bingkai emas, pengganda pada simbol bingkai emas akan bertambah. Selama putaran apa pun, simbol dengan<WILD>akan dikalikan dengan pengali bonus terkumpul saat ini.",
            "kor": "어떤 회전이든지, 승리 심볼에 금 프레임이 포함되어 있다면, 금 프레임의 배수가 누적됩니다. 회전 중에는 <WILD>가 있는 기호가 현재 누적 보너스 배수로 곱해집니다.",
            "vie": "Trong bất kỳ lượt quay nào, nếu các biểu tượng chiến thắng bao gồm khung vàng, bội số trên biểu tượng khung vàng sẽ tích luỹ. Trong bất kỳ vòng quay nào, biểu tượng có<WILD>sẽ được nhân với hệ số thưởng tích lũy hiện tại.",
            "tch": "若在任何旋轉期間，贏分符號若包含金框符號，金框符號上的贏分倍數將累積。在任何旋轉期間，帶有<WILD>的符號都將乘以當前累積贏分倍數。",
            "mys": "Semasa putaran apa pun, jika simbol menang termasuk bingkai emas, pengganda pada simbol bingkai emas akan bertambah. Semasa putaran mana-mana, simbol dengan<WILD>akan didarabkan dengan pengganda bonus terkumpul semasa.",
            "jp": "いかなるスピン中でも、勝利のシンボルに金の枠が含まれている場合、金の枠の上の乗数が蓄積されます。どの回転中でも、<WILD>のあるシンボルは現在の累積ボーナス乗数で乗算されます。",
            "ru": "Во время любого спина, если выигрышные символы включают в себя золотую рамку, множитель на символе с золотой рамкой будет накапливаться. Во время любого вращения символ <WILD>умножается на текущий накопленный множитель бонуса.",
            "por": "Durante qualquer rodada, se os símbolos vencedores incluírem um quadro dourado, o multiplicador no símbolo com quadro dourado irá acumular. Durante qualquer rotação, o símbolo com<WILD>será multiplicado pelo multiplicador de bônus acumulado atual.",
            "esp": "Durante cualquier giro, si los símbolos ganadores incluyen un marco dorado, el multiplicador en el símbolo con marco dorado se acumulará. Durante cualquier giro, el símbolo con<WILD>se multiplicará por el multiplicador de bonificación acumulada actual.",
            "tur": "Herhangi bir spin sırasında, kazanan semboller altın çerçeve içeriyorsa, altın çerçeveli sembol üzerindeki çarpan birikecektir. Herhangi bir dönüş sırasında, <WILD> olan sembol mevcut birikmiş bonus çarpanıyla çarpılır."
        },
        "position": {
            "x": 360,
            "y": 621
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#a1f7ff",
        "page": 6,
        "lineText": {
            "sch": "免费游戏奖励",
            "eng": "FREE SPINS BONUS",
            "tai": "รางวัล ฟรีสปิน",
            "ind": "Hadiah permainan gratis",
            "kor": "프리 게임 보너스",
            "vie": "Thưởng trò chơi miễn phí",
            "tch": "免費遊戲獎勵",
            "mys": "Bonus putaran percuma",
            "jp": "フリースピンボーナス",
            "ru": "Бонусбесплатныевращения",
            "por": "Bônus de jogos grátis",
            "esp": "Bono de giros gratis",
            "tur": "Ücretsiz dönüş bonusu"
        },
        "position": {
            "x": 360,
            "y": 933
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
        "lineText": {
            "sch": "4,5或6个<BONUS>赢得10,12或15个免费游戏。在免费游戏开始前，会随机选择起始倍数。在免費旋转期间，赢奖符号若包含金框符号，金框符号上的奖金倍数将累积，直到免费旋转结束。免费游戏中，4,5或6个<BONUS>可重复赢得5个免费游戏。最大免费游戏数为200。",
            "eng": "4, 5 OR 6 <BONUS> CAN WIN 10,12 OR 15 FREE SPINS.BEFORE THE FREE SPIN, THE INITIAL MULTIPLIER WILL RANDOMLY SELECTED.DURING THE FREE SPIN, IF WINNING SYMBOLS INCLUDE GOLD FRAME, THE MULTIPLIER ON THE GOLD FRAME WILL ACCUMULATES UNTIL THE END OF FREE SPIN. 4, 5 OR 6 <BONUS> CAN WIN 5 FREE SPINS DURING BONUS. MAX NUMBER OF FREE SPINS IS 200.",
            "tai": "ถ้าได้สัญลักษณ์ <BONUS> 4, 5 หรือ 6 อัน จะได้รับ\n 10,12 หรือ 15 ฟรีสปิน ตามลำดับ\n ก่อนที่โบนัสเกมจะเริ่มต้น จะมีแถบบูสตัวคูณเพื่อสุ่ม\n ตัวคูณเริ่มต้นในช่วงโบนัสเกม\n ในระหว่างการหมุนฟรีสปิน ถ้าสัญลักษณ์ที่ชนะมีกรอบสีทอง\n ตัวคูณบนสัญลักษณ์กรอบสีทองจะถูกสะสมไปเรื่อยๆ\n จนสิ้นสุดโบนัสเกม\n ในระหว่างฟรีสปิน ถ้าได้สัญลักษณ์ <BONUS> 4, 5 หรือ 6 อัน \n จะได้รับฟรีสปินเพิ่ม 5 ฟรีสปิน \n จำนวนฟรีสปินสูงสุดคือ 200\n",
            "ind": "4, 5 atau 6 <BONUS> menangkan 10,12 atau 15 permainan gratis. Sebelum putaran gratis, pengganda awal akan dipilih secara acak. Selama putaran gratis, jika simbol-simbol menang termasuk bingkai emas, pengganda pada bingkai emas akan mengakumulasi hingga akhir putaran gratis. 4, 5 atau 6 <BONUS> bisa memenangkan 5 putaran gratis selama bonus. Jumlah permainan gratis paling banyak adalah 200.",
            "kor": "4, 5 또는 6 개의 <BONUS> 는 10개 ,12개 또는 15 개의 프리 게임을 획득할 수 있습니다. 무료 스핀 전에 초기 배율이 무작위로 선택됩니다. 프리 스핀 중에는 금 프레임을 포함한 이기는 심볼이 있으면 금 프레임의 배수가 프리 스핀 종료까지 누적됩니다. 4, 5 또는 6 <BONUS> 보너스 도중 5 회 무료 스핀을 획득할 수 있습니다. 최대 프리 게임수는 200",
            "vie": "4, 5 hoặc 6 <BONUS> giành được 10 , 12 hoặc 15 trò chơi miễn phí. Trước khi quay miễn phí, hệ số ban đầu sẽ được chọn ngẫu nhiên. Trong lượt quay miễn phí, nếu các ký hiệu chiến thắng bao gồm khung vàng, bội số trên khung vàng sẽ tích luỹ cho đến khi kết thúc lượt quay miễn phí. 4, 5 hoặc 6 <BONUS> trở lên có thể thắng 5 vòng quay miễn phí trong trò chơi trúng thưởng. Số trò chơi miễn phí lớn nhất là 200.",
            "tch": "4、5 或 6個 <BONUS> 贏得 10、12 或 15 個免費遊戲。在免費遊戲開始前，會隨機選擇起始倍數。在免費旋轉期間，贏分符號若包含金框符號，金框符號上的贏分倍數將累積，直到免費旋轉結束。免費遊戲中，4、5 或 6個 <BONUS>可重複贏得5個免費遊戲。最大免費遊戲數為200。",
            "mys": "4, 5 atau 6 <BONUS> boleh memenangi 10, 12 atau 15 putaran percuma. Sebelum putaran percuma, pengganda awal akan dipilih secara rawak. Semasa putaran bebas, jika simbol kemenangan termasuk bingkai emas, pengganda pada bingkai emas akan terkumpul sehingga akhir putaran bebas. 4, 5 atau 6 <BONUS> boleh memenangi 5 putaran percuma semasa bonus. Bilangan putaran percuma maksimum adalah 200.",
            "jp": "<BONUS> 4、5 または 6個で、無料ゲームを 10個、12個または15個獲得できる。フリースピンの前に、初期乗数がランダムに選択されます。フリースピン中には、勝利シンボルにゴールドフレームが含まれている場合、ゴールドフレームの乗数はフリースピンの終了まで蓄積されます。ボーナスゲームでは、4,5,6個の＜BONUS＞で、5 回のフリーゲームを獲得することができます。無料ゲームの数は最大200個。",
            "ru": "4, 5 или 6 <BONUS> могут выиграть 10 ,12 или 15 фриспинов. Перед бесплатным вращением начальный множитель будет выбран случайным образом. Во время бесплатного вращения, если выигрышные символы включают в себя золотую рамку, множитель на золотой рамке будет накапливаться до конца бесплатного вращения. В бонусной игре 4, 5 и 6 <BONUS> могут выиграть 5 фриспинов. Макс Фриспинов 200 . ",
            "por": "4, 5 ou 6 <BONUS> podem ganhar 10, 12 ou 15 giros grátis. Antes da rodada grátis, o multiplicador inicial será selecionado aleatoriamente. Durante a rodada grátis, se os símbolos vencedores incluírem uma moldura dourada, o multiplicador na moldura dourada acumulará até o final da rodada grátis. 4, 5 ou 6 <BONUS> podem ganhar 5 giros grátis durante o bônus. O número máximo de giros grátis é 200.",
            "esp": "4, 5 o 6 símbolos <BONUS> pueden ganar 10, 12 o 15 giros gratis. Antes del giro gratis, el multiplicador inicial será seleccionado al azar. Durante la tirada gratuita, si los símbolos ganadores incluyen un marco dorado, el multiplicador en el marco dorado se acumulará hasta el final de la tirada gratuita. En los juegos gratuitos, 4, 5 o 6 símbolos <BONUS> pueden ganar 5 juegos gratuitos adicionales. El número máximo de juegos gratuitos es de 200.",
            "tur": "4, 5 veya 6 <BONUS>, sirasiyla 10, 12 veya 15 ücretsiz dönüş kazanabilir. Ücretsiz dönüşten önce, başlangıç çarpanı rastgele seçilecektir. Ücretsiz dönem sırasında, kazanan semboller altın çerçeve içeriyorsa, altın çerçeve üzerindeki çarpan ücretsiz dönemin sonuna kadar birikecektir. Ücretsiz oyunlar sirasinda, 4, 5 veya 6 <BONUS>, 5 ücretsiz oyunu tekrar kazanabilir. En fazla ücretsiz dönüş sayisi 200'dür."
        },
        "position": {
            "x": 360,
            "y": 879
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#a1f7ff",
        "page": 7,
        "lineText": {
            "sch": "游戏玩法",
            "eng": "HOW TO WIN",
            "tai": "วิธีการเล่น",
            "ind": "Cara untuk menang",
            "kor": "윈 방법",
            "vie": "Cách thắng",
            "tch": "遊戲玩法",
            "mys": "Cara untuk menang",
            "jp": "ゲームの遊び方",
            "ru": "Как выиграть",
            "por": "Como ganhar",
            "esp": "Cómo ganar",
            "tur": "Nasil Kazanilir"
        },
        "position": {
            "x": 360,
            "y": 933
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
        "lineText": {
            "sch": "轮转数= 6",
            "eng": "NUMBER OF REELS = 6",
            "tai": "จำนวนรีล = 6",
            "ind": "Jumlah roda putaran=6",
            "kor": "릴수 = 6",
            "vie": "Số guồng quay = 6",
            "tch": "輪轉數 = 6",
            "mys": "Gelendung = 6",
            "jp": "リール = 6",
            "ru": "Барабаны = 6",
            "por": "Número de bobinas = 6",
            "esp": "Carretes = 6",
            "tur": "Makara Sayisi = 6"
        },
        "position": {
            "x": 360,
            "y": 870
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
        "lineText": {
            "sch": "需 50 彩分",
            "eng": "NEED 50 CREDITS",
            "tai": "ต้องการ 50คะแนน",
            "ind": "Butuh 50 nilai lottery",
            "kor": " 50 채점 필요",
            "vie": "Cần 50 điểm thưởng",
            "tch": "贏分顯示，1K=1000，1M=1,000,000。",
            "mys": "Perlukan 50 kredit",
            "jp": "50クレジットが必要",
            "ru": "Нужно 50 кредитов",
            "por": "Preciso de 50 créditos",
            "esp": "Requiere 50 créditos",
            "tur": "50 kredi gerekli"
        },
        "position": {
            "x": 360,
            "y": 830
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
        "lineText": {
            "sch": "第一滚轮即为激活滚轮。",
            "eng": "THE FIRST REEL IS THE ACTIVATED REEL.",
            "tai": "รีลแรกคือ รีลเปิดใช้งาน",
            "ind": "Reel pertama adalah reel yang diaktifkan .",
            "kor": "첫 번째 릴은 활성화된 릴입니다.",
            "vie": "Reel đầu tiên là reel đã kích hoạt .",
            "tch": "第一滾輪即為啟用滾輪。",
            "mys": "Reel pertama adalah reel yang diaktifkan.",
            "jp": "最初のリールはアクティベートされたリールです。",
            "ru": "Первый барабан - активированный барабан.",
            "por": "O primeiro rolo é o rolo ativado.",
            "esp": "El primer rodillo es el rodillo activado.",
            "tur": "İLk Makara Akti̇vasyon Makarasidir."
        },
        "position": {
            "x": 360,
            "y": 787
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
        "lineText": {
            "sch": "除了<BONUS>外所有符号出现在激活滚轮位置即变成赢分符号。除了<BONUS>外所有符号与赢分符号相连也会变成赢分符号。4个以上的赢分符号根据赔付表一次性给分。",
            "eng": "ALL SYMBOLS EXCEPT <BONUS> LAND ON ACTIVATED REEL POSITION BECOME WINNING SYMBOL. ALL SYMBOLS EXCEPT <BONUS> CONNECTED WITH WINNING SYMBOL ARE BECOMING WINNING SYMBOL. 4 OR MORE WINNING SYMBOLS ARE PAID ACCORDING TO PAYTABLE.",
            "tai": "ทุกสัญลักษณ์ที่ไม่ใช่ <BONUS> ที่ปรากฏบนตำแหน่งรีล\n ที่เปิดใช้งานจะกลายเป็นสัญลักษณ์ชนะทันที\n และนอกจาก <BONUS> แล้วสัญลักษณ์ทั้งหมดที่เรียงเส้นกับ\n สัญลักษณ์แต้มจะกลายเป็นสัญลักษณ์แต้มไปด้วย\n สัญลักษณ์แต้ม 4 อันขึ้นไปจะให้แต้มตามตาราง\n อัตราต่อรองในครั้งเดียว\n",
            "ind": "Semua simbol kecuali <BONUS> yang muncul di posisi gulungan yang di-aktifkan menjadi simbol menang. Semua simbol kecuali <BONUS> yang terhubung dengan simbol kemenangan akan menjadi simbol kemenangan. 4 simbol kemenangan atau lebih sudah dibayar menurut paytable.",
            "kor": "활성화된 릴 위치에 나타나는 <BONUS>를 제외한 모든 기호는 승리 심볼이 됩니다. 위닝 심볼과 연결된 모든 심볼(<BONUS> 제외)은 위닝 심볼이 됩니다. 위닝 심볼 4개 이상인 경우 페이 테이블에 따라 지급됩니다",
            "vie": "Tất cả các biểu tượng nằm ngoài <BONUS> xuất hiện trên vị trí cuộn được kích hoạt sẽ trở thành biểu tượng thắng. Mọi biểu tượng trừ <BONUS> đã kết nối với biểu tượng thắng đang trở thành biểu tượng thắng. 4 biểu tượng thắng trở lên sẽ được trả theo bảng trả thưởng.",
            "tch": "除了<BONUS>外所有符號落在啟用滾輪位置即變成贏分符號。除了<BONUS>外所有符號與贏分符號相連也會變成贏分符號。4個以上的贏分符號根據賠付表一次性給分。",
            "mys": "Semua simbol kecuali <BONUS> yang muncul di tempat reel yang di-aktifkan akan menjadi simbol menang. Semua simbol kecuali <BONUS> yang bersambung dengan simbol kemenangan menjadi simbol kemenangan. 4 atau lebih simbol kemenangan dibayar menurut jadual pembayaran.",
            "jp": "<BONUS> 以外のすべてのシンボルは、アクティブなリール位置に現れると勝利シンボルになります。勝ちシンボルと隣接している<BONUS>を除くすべてのシンボルも勝ちシンボルとなります。4個以上の勝ちシンボルは、ペイテーブルに従って支払われます。",
            "ru": "Все символы, кроме <BONUS>, которые появляются на активной позиции барабана, становятся символами выигрыша. За исключением <BONUS>, все символы, связанные с выигрышным символами, становятся выигрышными. За 4 и более выигрышных символа начисляется выплата в соответствии с таблицей выплат.",
            "por": "Todos os símbolos, exceto <BONUS>, que caírem na posição rolo ativado se tornam símbolos vencedores. Todos os símbolos, exceto <BONUS>, que estiverem conectados ao símbolo vencedor se tornam símbolos vencedores. Quatro ou mais símbolos vencedores são pagos de acordo com a tabela de pagamento.",
            "esp": "Todos los símbolos, excepto el símbolo <BONUS>, que aterrizan en la posición del rodillo activado se convierten en símbolos ganadores. Todos los símbolos, excepto el símbolo <BONUS>, que están conectados con el símbolo ganador se convierten en símbolos ganadores. Se pagan 4 o más símbolos ganadores según la tabla de pagos.",
            "tur": "<BONUS> hariç tüm semboller, aktive edilmiş makara pozisyonunda iniş yapar ve kazanan sembol haline gelir. <BONUS> hariç, kazanan sembolle bağlantili olan tüm semboller, kazanan sembol haline gelir. 4 veya daha fazla kazanç sembolü, ödemeler tablosuna göre ödenir."
        },
        "position": {
            "x": 360,
            "y": 760
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
        "lineText": {
            "sch": "以下例子",
            "eng": "EXAMPLE AS BELOW",
            "tai": "ตัวอย่างดังต่อไปนี้",
            "ind": "Contoh",
            "kor": "다음 예시를 참조하세요",
            "vie": "Xem ví dụ bên dưới",
            "tch": "以下例子為投注 50",
            "mys": "Contoh seperti di bawah",
            "jp": "以下の例",
            "ru": "См. Пример ниже",
            "por": "Exemplo como abaixo",
            "esp": "Un ejemplo sería el siguiente",
            "tur": "Aşağidaki Gibi Bir öRnek"
        },
        "position": {
            "x": 360,
            "y": 490
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
        "lineText": {
            "sch": "没有赢分",
            "eng": "NO WIN",
            "tai": "ไม่มีแต้ม",
            "ind": "Tidak menang",
            "kor": "윈 없음",
            "vie": "Không thắng",
            "tch": "沒有贏分",
            "mys": "Tiada kemenangan",
            "jp": "勝ち点なし",
            "ru": "Нет выигрыша",
            "por": "Sem vitória",
            "esp": "Sin ganancia",
            "tur": "Kazanç Yok"
        },
        "position": {
            "x": 196,
            "y": 448
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
        "lineText": {
            "sch": "赢分",
            "eng": "WIN",
            "tai": "รางวัล",
            "ind": "Menang",
            "kor": "윈",
            "vie": "Thắng",
            "tch": "贏分",
            "mys": "Menang",
            "jp": "勝ち点",
            "ru": "Выигрыш",
            "por": "Vitória",
            "esp": "Ganancia",
            "tur": "Kazanç"
        },
        "position": {
            "x": 424,
            "y": 448
        },
        "Anchor": {
            "x": 1,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#a1f7ff",
        "page": 8,
        "lineText": {
            "sch": "游戏玩法",
            "eng": "HOW TO WIN",
            "tai": "วิธีการเล่น",
            "ind": "Cara untuk menang",
            "kor": "윈 방법",
            "vie": "Cách thắng",
            "tch": "遊戲玩法",
            "mys": "Cara untuk menang",
            "jp": "ゲームの遊び方",
            "ru": "Как выиграть",
            "por": "Como ganhar",
            "esp": "Cómo ganar",
            "tur": "Nasil Kazanilir"
        },
        "position": {
            "x": 360,
            "y": 933
        },
        "Anchor": {
            "x": 0.5,
            "y": 0.5
        }
    },
    {
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 8,
        "lineText": {
            "sch": "除了银框、金框以外，每轮游戏结束并发放奖金后，参与赢奖的滚轮都将爆炸消除，该滚轮产生新的结果，以进行新一轮的旋转，每当银框、金框连线后，符号将会进行转换。额外的中奖组合都将计入每次的旋转赢分中，直到没有其他中奖组合。第2、第3、第4、第5和第6转轴上的一些符号将有可能占据2个符号位置，在计算赢奖时，这些符号将计为1个符号",
            "eng": "APART FROM THE SILVER FRAME AND GOLD FRAME,AFTER THE PAYOUT OF EVERY ROUND IS MADE, ALL WINNING SYMBOLS WILL EXPLODE ALLOWING THE REELS GENERATE NEW RESULTS TO INITIATE A NEW ROUND OF SPINNING. WHENEVER THE SILVER FRAME OR GOLD FRAME IS CONNECTED, THE SYMBOLS WILL UNDERTIONGO A TRANSFORMA. ADDITIONAL WINNING COMBINATION WILL BE TALLIED IN EVERY ROUND UNTIL NO MORE WINNING COMBINATION CAN BE TALLIED. SOME SYMBOLS IN REELS 2, 3, 4, 5 AND6 MAY OCCUPY 2 SYMBOLS' SPACES AND EACH OF THESE SYMBOLS WILL REPRESENT AS A SINGLE SYMBOL DURING PAYOUT CALCULATIONS.",
            "tai": "หลังจากสิ้นสุดเกมแต่ละรอบและจ่ายรางวัลแล้ว\n สัญลักษณ์ที่ชนะทั้งหมดจะระเบิดออก ทำให้รีล\n สร้างผลลัพธ์ใหม่เพื่อเป็นการเริ่มต้นรอบใหม่ของการหมุน\n (ยกเว้น สัญลักษณ์กรอบเงินและกรอบทอง)\n เมื่อสัญลักษณ์กรอบเงินหรือกรอบทองถูกเชื่อมต่อกัน\n สัญลักษณ์จะเปลี่ยนรูปร่างไปจากเดิม\n หากมีชุดสัญลักษณ์ที่ได้รางวัลเพิ่มเติมจะถูกนับรวม\n เข้าด้วยกันในทุกรอบจนกว่าจะไม่มีชุดสัญลักษณ์\n ที่ได้รางวัลให้คำนวณอีก\n สัญลักษณ์บางตัว ในเพลา 2, 3, 4, 5 และ 6 มีโอกาส\n กินพื้นที่ 2 ช่องสัญลักษณ์ และสัญลักษณ์แต่ละตัวเหล่านี้\n จะคิดเป็น สัญลักษณ์เดียวในระหว่างการคำนวณรางวัล\n",
            "ind": "Selain bingkai perak dan bingkai emas, setelah pembayaran setiap putaran selesai, semua simbol menang akan meledak memungkinkan gulungan menghasilkan hasil baru untuk memulai putaran baru dari putaran berikutnya. Setiap kali bingkai perak atau bingkai emas terhubung, simbol-simbol akan mengalami transformasi. Tambahan kombinasi yang menang akan dihitung di setiap babak hingga tidak ada lagi kombinasi yang menang untuk dihitung. Beberapa simbol di rol 2, 3, 4, 5 dan 6 bisa saja menempati 2 ruang simbol dan setiap simbol tersebut akan tampil sebagai simbol tunggal selama perhitungan pembayaran.",
            "kor": "은색 프레임과 금색 프레임을 제외하고, 모든 승리 심볼은 지불 후 폭발하여 실린더가 새로운 결과를 생성하고 새로운 회전을 시작할 수 있도록 합니다. 은 프레임 또는 금 프레임이 연결될 때마다 심볼은 변형됩니다. 더 이상 승리 조합을 조합할 수 없을 때까지 추가 승리 조합을 조합합니다. 2, 3, 4, 5 및 6번 릴의 일부 심볼은 2개 심볼의 공간을 차지할 수 있으며 각 심볼들은 지급액 계산 중에 한 개 심볼을 나타냅니다",
            "vie": "Ngoài viền bạc và viền vàng, sau khi trả tiền cho mỗi vòng, tất cả các biểu tượng chiến thắng sẽ nổ, cho phép các cuộn tạo ra kết quả mới để khởi đầu một vòng quay mới. Mỗi khi khung bạc hoặc khung vàng được kết nối, các biểu tượng sẽ trải qua một quá trình biến đổi. Kết hợp chiến thắng bổ sung sẽ được tính trong mỗi vòng chơi cho đến khi không thể tạo ra kết hợp chiến thắng nào nữa. Một số biểu tượng trên các guồng 2, 3, 4, 5 và 6 có thể chiếm không gian từ 2 biểu tượng và mỗi một biểu tượng trong số này sẽ thể hiện như một biểu tượng khi tính toán trả thưởng.",
            "tch": "除了銀框、金框以外，每輪遊戲結束並發放贏分後，參與贏分的滾輪都將爆炸消除，該滾輪產生新的結果，以進行新一輪的旋轉。每當銀框、金框連線後，符號將會進行轉換。額外的贏分組合都將計入每次的旋轉贏分中，直到沒有其他贏分組合。第2、第3、第4、第5和第6轉軸上的一些符號將有可能佔據2個符號位置，在計算贏分時，這些符號將計為1個符號",
            "mys": "Selain bingkai perak dan bingkai emas, setelah pembayaran setiap putaran selesai, semua simbol kemenangan akan meletup, membolehkan gulungan menghasilkan hasil baru untuk memulakan putaran pusingan baru. Setiap kali bingkai perak atau bingkai emas disambungkan, simbol-simbol akan mengalami transformasi. Kombinasi kemenangan tambahan akan dikira dalam setiap pusingan sehingga tiada lagi kombinasi kemenangan yang boleh dikira. Beberapa simbol dalam gulungan 2, 3, 4, 5, dan 6 mungkin menduduki 2 ruang simbol dan setiap simbol ini akan diwakili sebagai simbol tunggal semasa pengiraan bayaran.",
            "jp": "銀色の枠と金色の枠を除いて、各ラウンドの払い出し後、すべての勝利シンボルが爆発し、リールが新しい結果を生成し、新しいスピンのラウンドを開始します。銀枠または金枠が接続されると、シンボルは変形します。追加の勝利の組み合わせは、勝利の組み合わせがこれ以上集計されなくなるまですべてのラウンドで集計されます。リール2、3、4、5または6の一部のシンボルは、2ンボルのスペースを埋めることがあり、各シンボルはペイアウトの計算では1つのシンボルとして示されます。",
            "ru": "За исключением серебряной и золотой рамок, после выплаты каждого раунда все выигрышные символы взрываются, позволяя барабанам генерировать новые результаты для начала нового раунда вращения. Всякий раз, когда соединяется серебряная или золотая рамка, символы претерпят преобразование. Следующие выигрышные комбинации учитываются в каждом раунде до тех пор, пока на барабанах не останется ни одной выигрышной комбинации. Некоторые символы на барабанах 2, 3, 4, 5 и 6 могут занимать от 2  позиций. При расчете выплат каждый из этих символов рассматривается как один символ.",
            "por": "Além das molduras de prata e ouro, após o pagamento de cada rodada, todos os símbolos vencedores explodirão, permitindo que os rolos gerem novos resultados para iniciar uma nova rodada de rotação. Sempre que a moldura de prata ou moldura de ouro estiver conectada, os símbolos sofrerão uma transformação. Todas as combinações vencedoras adicionais serão incluídas nos ganhos de cada rodada, até que não haja mais combinações vencedoras. Em alguns dos rolos 2, 3, 4, 5 e 6, é possível que alguns símbolos ocupem duas posições de símbolos, e ao calcular as vitórias, esses símbolos contarão como um único símbolo.",
            "esp": "Además del marco plateado y el marco dorado, después de que se realice el pago de cada ronda, todos los símbolos ganadores explotarán, permitiendo que los rodillos generen nuevos resultados para iniciar una nueva ronda de giros. Siempre que el marco plateado o el marco dorado estén conectados, los símbolos sufrirán una transformación. Se sumarán combinaciones ganadoras adicionales en cada ronda hasta que no sea posible contar más combinaciones ganadoras. Algunos símbolos en los rodillos 2, 3, 4, 5 y 6 pueden ocupar 2 espacios de símbolos, y cada uno de estos símbolos se considerará como un único símbolo durante el cálculo de los pagos.",
            "tur": "Gümüş çerçeve ve altin çerçeve dişinda, her turun ödemesi yapildiktan sonra, tüm kazanç sembolleri patlayacak ve makaralar yeni sonuçlar oluşturarak yeni bir döneme başlamak için izin verecektir. Herhangi bir zaman gümüş çerçeve veya altin çerçeve bağlandiğinda, semboller bir dönüşüme uğrayacaktir. Her turda ek kazanan kombinasyonlar sayılacak, daha fazla kazanan kombinasyon sayılamayana kadar devam edecektir. 2, 3, 4, 5 ve 6. makaralardaki bazı semboller, 2 sembol alanını kaplayabilir ve ödeme hesaplamaları sırasında her biri tek bir sembol olarak temsil edilecektir."
        },
        "position": {
            "x": 360,
            "y": 879
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    }
]


const wirte = (data)=> {
    return data
    
}

// console.log('第1筆(index=0)help_info(繁中):', '\n', data[0].lineText.tch, '\n')  // 遍歷陣列中第1筆(index=0)help_info資訊(繁中)
// console.log('第27筆(index=26)help_info(繁中):', '\n', data[26].lineText.tch, '\n')  // 遍歷陣列中第27筆(index=26)help_info資訊(繁中)
// console.log('第2筆(index=1)help_info(All):', data[1].lineText, '\n')  // 遍歷陣列中第2筆(index=1)help_info資訊


// console.log('所有help_info(簡中):', '\n')
console.log('所有help_info(英/日):', '\n')

for (let i = 0; i < 27; i++){

// console.log(data[i].lineText.sch, '\n')  // 遍歷陣列中所有help_info資訊(簡中)
console.log(data[i].lineText.eng, '\n', data[i].lineText.jp, '\n')  // 遍歷陣列中所有help_info資訊(英/日)


  };
    




// for (let i = 0; i < 26; i++){
      
//     // fs.readFile('/Users/Ivan_Li/Desktop/console_js.csv', 'utf8', function(err, info) {  // 增量寫入
//     // if (err) console.log('文件读取失败！' + err.message)
//     // //   console.log(`文件读取成功！`,info)
//     // console.log(`文件读取成功！`)
//     fs.appendFileSync ("/AutoControl_test/(x). PS DEV front_platform/Console.log Data(PSS-ON-00160)/Raw data_test/PSS-ON-00160_helpInfo_" + [i] + ".csv", `${JSON.stringify(wirte(data.HelpTextConfig[i].lineText))}\n`, err => {
//         if (err) console.log('檔案寫入成功！' + err.message)

//     // fs.appendFileSync ("/AutoControl_test/(x). PS DEV front_platform/PSS-ON-00160_helpInfo_{}.csv", `${JSON.stringify(wirte(data.HelpTextConfig[i].lineText.key))}\n`, err => {
//     //     if (err) console.log('檔案寫入成功！' + err.message)
//         // console.log(`文件写入成功！${__dirname}\\console_js.csv`)
//         console.log(`檔案寫入失敗！`)
//     })
//     };