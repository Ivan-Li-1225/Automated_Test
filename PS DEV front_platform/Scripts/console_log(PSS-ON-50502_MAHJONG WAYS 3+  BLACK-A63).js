
const fs = require('fs');
var iconv = require('/Users/Ivan_Li/node_modules/iconv-lite');

const data = 

[
    {
        "lineText": "FREE SPINS BONUS",
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#ffc258",
        "page": 1,
        "position": {
            "x": 288,
            "y": 916
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "lineText": " 4 OR MORE ",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "position": {
            "x": 295,
            "y": 844
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "lineText": "X1 - RANDOM",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "position": {
            "x": 295,
            "y": 682
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "lineText": "X1 - RANDOM",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "position": {
            "x": 295,
            "y": 441
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "lineText": "X1 - RANDOM",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 1,
        "position": {
            "x": 295,
            "y": 203
        },
        "Anchor": {
            "x": 0,
            "y": 0.5
        }
    },
    {
        "lineText": "X1 - ",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
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
        "lineText": "X1 -",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
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
        "lineText": "X1 -",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
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
        "lineText": "X1 -",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
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
        "lineText": "X1 -",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 2,
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
        "lineText": "MULTIPLIER",
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#ffc258",
        "page": 3,
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
        "lineText": "DURING ANY SPIN, ALL WINS WILL BE MULTIPLIED BY THE MULTIPLIER DISPLAYED ABOVE THE REEL. ANY WIN DURING THE FIRST TO TENTH ROUND WILL INCREASE THE MULTIPLIER RANDOMLY FOR THE NEXT SPIN. MAX RANDOM MULTIPLIER IS x99.",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 3,
        "position": {
            "x": 360,
            "y": 734
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "lineText": "WHEN <DRAGON> APPEARS ON FIRST REEL, ALL REELS ARE RE-SPIN AND GENERATE NEW OUTCOME.",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 4,
        "position": {
            "x": 360,
            "y": 700
        },
        "Anchor": {
            "x": 0.5,
            "y": 1
        }
    },
    {
        "lineText": "FREE SPINS BONUS",
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#ffc258",
        "page": 5,
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
        "lineText": "4, 5 OR 6 <BONUS> CAN WIN 10, 12 OR 15 FREE SPINS. 4, 5 OR 6 <BONUS> CAN WIN 5 FREE SPINS DURING BONUS. MAX NUMBER OF FREE SPINS IS 200.",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 5,
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
        "lineText": "HOW TO WIN",
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#ffc258",
        "page": 6,
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
        "lineText": "NUMBER OF REELS = 6",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
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
        "lineText": "NEED 100 CREDITS",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
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
        "lineText": "THE FIRST REEL IS THE ACTIVATED REEL.",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
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
        "lineText": "ALL SYMBOLS EXCEPT <BONUS> LAND ON ACTIVATED REEL POSITION BECOME WINNING SYMBOL. ALL SYMBOLS EXCEPT <BONUS> CONNECTED WITH WINNING SYMBOL ARE BECOMING WINNING SYMBOL. 4 OR MORE WINNING SYMBOLS ARE PAID ACCORDING TO PAYTABLE.",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
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
        "lineText": "EXAMPLE AS BELOW",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
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
        "lineText": "NO WIN",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
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
        "lineText": "WIN",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
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
        "lineText": "WIN",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 6,
        "position": {
            "x": 424,
            "y": 414
        },
        "Anchor": {
            "x": 1,
            "y": 0.5
        }
    },
    {
        "lineText": "HOW TO WIN",
        "fontName": "Tahoma Bold",
        "fontSize": 36,
        "color": "#ffc258",
        "page": 7,
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
        "lineText": "AFTER THE PAYOUT OF EVERY ROUND IS MADE, ALL WINNING REELS WILL EXPLODE ALLOWING THE SYMBOLS ABOVE THEM TO CASCADE DOWN FOR A NEW ROUND. ADDITIONAL WINNING COMBINATION WILL BE TALLIED IN EVERY ROUND UNTIL NO MORE WINNING COMBINATION CAN BE TALLIED.",
        "fontName": "Tahoma Bold",
        "fontSize": 24,
        "color": "#f1f1f1",
        "page": 7,
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



// console.log('第1筆(index=0)help_info:', '\n', data[0].lineText, '\n')  // 遍歷陣列中第1筆(index=0)help_info資訊
// console.log('第26筆(index=25)help_info:', '\n', data[25].lineText, '\n')  // 遍歷陣列中第26筆(index=25)help_info資訊


// console.log('前5筆help_info:', '\n')
// for (let i = 0; i < 5; i++){

// console.log(data[i].lineText, '\n')  // 遍歷陣列中前5筆help_info資訊

// };



// console.log('所有help_info:', '\n')
// for (let i = 0; i < 26; i++){

// console.log(data[i].lineText, '\n')  // 遍歷陣列中所有help_info資訊

// };
