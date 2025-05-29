
// for (const i in data){
//     console.log(data[i]);

const { buffer } = require('stream/consumers');

// }

// const values = Object.values(data);
// values.forEach(value => {
//   console.log(value);
// });

// let console_value = Object.values(data);
// console.log(console_value); 


// data.forEach((value, i) => { //数组循环
//     for (var pl in value) { //数组对象遍历
//     //   console.log(pl, '获取key'); //获取key
//       console.log(value[pl]) //获取key的值
//     }
//   })

// for (let index in data) {
//     // console.log(index)            
//     console.log(data[index])
// }


// var allbu=[];
// JSON.stringify(data, function(k, v) {
//     if (k === 'lineText') allbu.push(v);
//     return v;
// });

// var allbuid=[];
// JSON.stringify(data,(k,v)=>{if(k==='lineText')allbuid.push(v);return v;});


// function deepmap(arr,prop){
//     let props=[];
//     arr.map(el=>{
//         Object.keys(el).map(el2=>{
//         if(el2===prop){
//             props.push(el[el2]);
//         }
//         if(Array.isArray(el[el2])){
//             let _result=deepmap(el[el2],prop);
//             if(_result.length>0){
//                 _result.map(el3=>props.push(el3));
//             }
//         }
//         });
//     });
//     return props;
// }

// deepmap(data,"lineText")


// console.table(data[0].HelpTextConfig)

// function findObjectByProporigin(arr, prop, val) {
//     let result=[];
//     arr.map(function(el){
//         if(el[prop]===val){
//             result.push(el);
//         }
//     });
//     return result;
// }
// findObjectByProporigin(data,"lineText")


// const data_1 = 
// {
//     "HelpTextConfig": [
//         {
//             "lineText": "免費遊戲獎勵",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 1,
//             "position": {
//                 "x": 288,
//                 "y": 916
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": " 4個或更多 ",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 844
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - 隨機",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 682
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - 隨機",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 441
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - 隨機",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 203
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - ",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 155,
//                 "y": 718
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 419,
//                 "y": 718
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 155,
//                 "y": 435
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 419,
//                 "y": 435
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 155,
//                 "y": 153
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "贏分倍數",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 3,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "在任何旋轉期間，所有贏分都將乘以轉輪上方所顯示的倍數 第一輪～第十輪旋轉中的任何贏分都會使下一輪旋轉的倍數隨機遞增 隨機贏分倍數最大至99倍",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 3,
//             "position": {
//                 "x": 360,
//                 "y": 734
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "當<龍>出現在第一滾輪，所有滾輪會重新旋轉，產生新的結果。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 4,
//             "position": {
//                 "x": 360,
//                 "y": 700
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "免費遊戲獎勵",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 5,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "4、5 或 6個 <胡> 贏得 10、12 或 15 個免費遊戲。 免費遊戲中，4、5 或 6個 <胡>可重複贏得5個免費遊戲。 最大免費遊戲數為200。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 5,
//             "position": {
//                 "x": 360,
//                 "y": 879
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "遊戲玩法",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "輪轉數 = 6",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 870
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "第一滾輪即為啟用滾輪。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 787
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "除了<胡>外所有符號落在啟用滾輪位置即變成贏分符號。 除了<胡>外所有符號與贏分符號相連也會變成贏分符號。 4個以上的贏分符號根據賠付表一次性給分。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 760
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "以下例子(押注為100)",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 490
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "沒有贏分",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 196,
//                 "y": 448
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "贏分",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 424,
//                 "y": 448
//             },
//             "Anchor": {
//                 "x": 1,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "贏分",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 424,
//                 "y": 414
//             },
//             "Anchor": {
//                 "x": 1,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "遊戲玩法",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 7,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "每輪遊戲結束並發放贏分後，所有參與贏分的滾輪都將爆炸消除，讓其上方的符號向下掉落，以進行新一輪的旋轉。 額外的贏分組合都將計入每次的旋轉贏分中，直到沒有其他贏分組合。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 7,
//             "position": {
//                 "x": 360,
//                 "y": 879
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         }
//     ]
// }


// for (let i = 0; i < 25; i++){
//     console.log(data_1.HelpTextConfig[i].lineText);
    
//     const fs = require('fs');
//     // 将对象转换为字符串
//     const objectString = JSON.stringify(data_1.HelpTextConfig[i].lineText, null, 2);
//     // 将字符串写入文件
//     fs.writeFile('output.txt', objectString, (err) => {
//     if (err) {
//         console.error('写入文件时发生错误:', err);
//         return;
//     }
//     console.log('对象已成功保存到output.txt文件');
//     });

// }


// console.log('help_info text_index_0 = ', data_1.HelpTextConfig[0])  // 輸出help_info text (index 0)資訊
// console.log('\n')

// console.log('help_info text_index_0(lineText) = ', data_1.HelpTextConfig[0].lineText);  // 輸出help_info text (index 0)_lineText資訊
// console.log('\n')

// for (let i = 0; i < 25; i++){
//     console.log('help_info text_index', [i], '=', data_1.HelpTextConfig[i].lineText);    // 輸出所有 help_info text (index 0 ~ 24)

// }


// const data_2 = 
// {
//     "HelpTextConfig": [
//         {
//             "lineText": "免費遊戲獎勵",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 1,
//             "position": {
//                 "x": 288,
//                 "y": 916
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": " 4個或更多 ",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 844
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - 隨機",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 682
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - 隨機",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 441
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - 隨機",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 1,
//             "position": {
//                 "x": 295,
//                 "y": 203
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 - ",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 155,
//                 "y": 718
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 419,
//                 "y": 718
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 155,
//                 "y": 435
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 419,
//                 "y": 435
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "X1 -",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 2,
//             "position": {
//                 "x": 155,
//                 "y": 153
//             },
//             "Anchor": {
//                 "x": 0,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "贏分倍數",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 3,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "在任何旋轉期間，所有贏分都將乘以轉輪上方所顯示的倍數 第一輪～第十輪旋轉中的任何贏分都會使下一輪旋轉的倍數隨機遞增 隨機贏分倍數最大至99倍",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 3,
//             "position": {
//                 "x": 360,
//                 "y": 734
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "當<龍>出現在第一滾輪，所有滾輪會重新旋轉，產生新的結果。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 4,
//             "position": {
//                 "x": 360,
//                 "y": 700
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "免費遊戲獎勵",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 5,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "4、5 或 6個 <胡> 贏得 10、12 或 15 個免費遊戲。 免費遊戲中，4、5 或 6個 <胡>可重複贏得5個免費遊戲。 最大免費遊戲數為200。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 5,
//             "position": {
//                 "x": 360,
//                 "y": 879
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "遊戲玩法",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "輪轉數 = 6",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 870
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "第一滾輪即為啟用滾輪。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 787
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "除了<胡>外所有符號落在啟用滾輪位置即變成贏分符號。 除了<胡>外所有符號與贏分符號相連也會變成贏分符號。 4個以上的贏分符號根據賠付表一次性給分。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 760
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         },
//         {
//             "lineText": "以下例子(押注為100)",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 360,
//                 "y": 490
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "沒有贏分",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 196,
//                 "y": 448
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "贏分",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 424,
//                 "y": 448
//             },
//             "Anchor": {
//                 "x": 1,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "贏分",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 6,
//             "position": {
//                 "x": 424,
//                 "y": 414
//             },
//             "Anchor": {
//                 "x": 1,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "遊戲玩法",
//             "fontName": "Tahoma Bold",
//             "fontSize": 36,
//             "color": "#ffc258",
//             "page": 7,
//             "position": {
//                 "x": 360,
//                 "y": 933
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 0.5
//             }
//         },
//         {
//             "lineText": "每輪遊戲結束並發放贏分後，所有參與贏分的滾輪都將爆炸消除，讓其上方的符號向下掉落，以進行新一輪的旋轉。 額外的贏分組合都將計入每次的旋轉贏分中，直到沒有其他贏分組合。",
//             "fontName": "Tahoma Bold",
//             "fontSize": 24,
//             "color": "#f1f1f1",
//             "page": 7,
//             "position": {
//                 "x": 360,
//                 "y": 879
//             },
//             "Anchor": {
//                 "x": 0.5,
//                 "y": 1
//             }
//         }
//     ]
// }


// var fs = require('fs');
// for (let i = 0; i < 25; i++){
//     console.log(data_2.HelpTextConfig[i].lineText);  // 覆蓋寫入

//     fs.writeFile("/Users/Ivan_Li/Desktop/console_js.csv", JSON.stringify(data_2.HelpTextConfig[i].lineText), function(err) {
//         if(err) {
//             return console.log(err);
//         }

//         console.log("The file was saved!");
//     });
// }


// const fs = require('fs');
// // const data = {
// // 	name: 'zs'
// // };
// const  wirte = (data_2) => {
// 	return data_2
// }
// fs.readFile('/Users/Ivan_Li/Desktop/console_js.csv', 'utf8', function(err, info) {  // 增量寫入
//   if (err) console.log('文件读取失败！' + err.message)
// //   console.log(`文件读取成功！`,info)
//   console.log(`文件读取成功！`)
//   fs.writeFile("/Users/Ivan_Li/Desktop/console_js.csv", `${info};const time${new Date().getTime()} = ${JSON.stringify(wirte(data_2))}`, err => {
//     if (err) console.log('文件写入失败！' + err.message)
//     // console.log(`文件写入成功！${__dirname}\\console_js.csv`)
//     console.log(`文件写入成功！`)
//   })
// });



const fs = require('fs');
var iconv = require('/Users/Ivan_Li/node_modules/iconv-lite');
const data_2 = 
{
    "HelpTextConfig": [
        {
            "lineText": "免費遊戲獎勵",
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
            "lineText": " 4個或更多 ",
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
            "lineText": "X1 - 隨機",
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
            "lineText": "X1 - 隨機",
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
            "lineText": "X1 - 隨機",
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
            "lineText": "贏分倍數",
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
            "lineText": "在任何旋轉期間，所有贏分都將乘以轉輪上方所顯示的倍數 第一輪～第十輪旋轉中的任何贏分都會使下一輪旋轉的倍數隨機遞增 隨機贏分倍數最大至99倍",
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
            "lineText": "當<龍>出現在第一滾輪，所有滾輪會重新旋轉，產生新的結果。",
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
            "lineText": "免費遊戲獎勵",
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
            "lineText": "4、5 或 6個 <胡> 贏得 10、12 或 15 個免費遊戲。 免費遊戲中，4、5 或 6個 <胡>可重複贏得5個免費遊戲。 最大免費遊戲數為200。",
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
            "lineText": "遊戲玩法",
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
            "lineText": "輪轉數 = 6",
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
            "lineText": "第一滾輪即為啟用滾輪。",
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
            "lineText": "除了<胡>外所有符號落在啟用滾輪位置即變成贏分符號。 除了<胡>外所有符號與贏分符號相連也會變成贏分符號。 4個以上的贏分符號根據賠付表一次性給分。",
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
            "lineText": "以下例子(押注為100)",
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
            "lineText": "沒有贏分",
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
            "lineText": "贏分",
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
            "lineText": "贏分",
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
            "lineText": "遊戲玩法",
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
            "lineText": "每輪遊戲結束並發放贏分後，所有參與贏分的滾輪都將爆炸消除，讓其上方的符號向下掉落，以進行新一輪的旋轉。 額外的贏分組合都將計入每次的旋轉贏分中，直到沒有其他贏分組合。",
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
};

const wirte = (data_2)=> {
    return data_2
    
}
for (let i = 0; i < 25; i++){
    // fs.readFile('/Users/Ivan_Li/Desktop/console_js.csv', 'utf8', function(err, info) {  // 增量寫入
    // if (err) console.log('文件读取失败！' + err.message)
    // //   console.log(`文件读取成功！`,info)
    // console.log(`文件读取成功！`)
    fs.appendFileSync ("/AutoControl_test/(x). PS DEV front_platform/PSS-ON-50002_helpInfo_1.csv", `${JSON.stringify(wirte(data_2.HelpTextConfig[i].lineText))}\n`, err => {
        if (err) console.log('檔案寫入成功！' + err.message)
        // console.log(`文件写入成功！${__dirname}\\console_js.csv`)
        console.log(`檔案寫入失敗！`)
    })
    };


// fs.readFile('./end.js', 'utf8', function(err, info) {
//     if (err) console.log('文件读取失败！' + err.message)
//     console.log(`文件读取成功！`,info)
//     fs.writeFile("./end.js", `${info};const time${new Date().getTime()} = ${JSON.stringify(wirte(data))}`, err => {
//       if (err) console.log('文件写入失败！' + err.message)
//       console.log(`文件写入成功！${__dirname}\\end.js`)
//     })
//   });





// const fs = require('fs');
// // const data = {
// // 	name: 'zs'
// // };
// const  wirte = (data_2) => {
// 	return data_2
// }
// fs.readFile('/Users/Ivan_Li/Desktop/console_js.csv', 'utf8', function(err, info) {  // 增量寫入
//   if (err) console.log('文件读取失败！' + err.message)
// //   console.log(`文件读取成功！`,info)
//   console.log(`文件读取成功！`)
//   fs.writeFile("/Users/Ivan_Li/Desktop/console_js.csv", `${info};const time${new Date().getTime()} = ${JSON.stringify(wirte(data_2))}`, err => {
//     if (err) console.log('文件写入失败！' + err.message)
//     // console.log(`文件写入成功！${__dirname}\\console_js.csv`)
//     console.log(`文件写入成功！`)
//   })
// });






// var fs = require('fs');

// fs.writeFile('C:\Users\Ivan_Li\Desktop\console_js.txt', data_2, function (err) {
//     if (err)
//         console.log(err);
//     else
//         console.log('Write operation complete.');
// });






