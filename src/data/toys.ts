export interface ToyDialogue {
  parent: string;
  child: string;
  reply: string;
}

export interface ToyItem {
  id: string;
  name: string;
  group: string;
  recommend: string;
  scene: string;
  alternative: string;
  image: string;
  dialogue: ToyDialogue[];
  scene2: string;
  dialogueAlt: ToyDialogue[];
  minMonths: number;
  ageLabel: string;
  source?: string;
}

export const TOY_GROUPS = ["全部", "小廚房", "開店請客", "車輛出發", "小手探索", "音樂與走動"] as const;

export const TOYS: ToyItem[] = [
  {
    "id": "50673",
    "name": "洛可可歐風廚房",
    "group": "小廚房",
    "recommend": "正在練習模仿生活動作，也開始能把煮飯步驟說給大人聽、喜歡在固定角落反覆玩扮演",
    "scene": "端出一碗假裝煮好的湯",
    "alternative": "用家裡的幼兒餐碗玩端湯",
    "image": "/toys/50673.jpg",
    "dialogue": [
      {
        "parent": "湯來了。",
        "child": "湯。",
        "reply": "喝湯。"
      },
      {
        "parent": "熱湯來了，吹一下。",
        "child": "好燙。",
        "reply": "湯很燙。"
      },
      {
        "parent": "你把熱湯端來了，我先吹一下。",
        "child": "我端熱湯給你。",
        "reply": "你把熱湯端到桌上了，我等它涼一點。"
      }
    ],
    "scene2": "把玩偶坐到小桌前，端一碗湯給牠",
    "dialogueAlt": [
      {
        "parent": "娃娃要吃飯，我們幫牠放桌上。",
        "child": "給熊熊。",
        "reply": "你把湯端給熊熊了，牠可以慢慢喝。"
      },
      {
        "parent": "熊熊坐好了，你要先端湯還是拿湯匙？",
        "child": "先給湯，再給湯匙。",
        "reply": "好，我們先把湯放好，再幫熊熊拿湯匙。"
      },
      {
        "parent": "今天餐桌有誰？我們一起準備一份餐點。",
        "child": "熊熊吃湯，我吃麵包。",
        "reply": "你幫熊熊安排好湯和麵包，大家都有自己的餐點。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50666",
    "name": "歐風古典娃娃屋",
    "group": "開店請客",
    "recommend": "喜歡替玩偶安排房間、練習日常照顧，也開始用簡單故事說出誰在做什麼",
    "scene": "讓玩偶走進娃娃屋，幫她安排一個房間",
    "alternative": "用布偶和家中的小盒子演房間和床",
    "image": "/toys/50666.jpg",
    "dialogue": [
      {
        "parent": "娃娃回家了。",
        "child": "娃娃。",
        "reply": "娃娃回家。"
      },
      {
        "parent": "娃娃要睡房間了。",
        "child": "睡覺。",
        "reply": "娃娃去房間睡覺。"
      },
      {
        "parent": "我幫娃娃安排好房間，還要替她關門。",
        "child": "我幫她關門。",
        "reply": "你幫娃娃準備好房間，也記得替她關上門。"
      }
    ],
    "scene2": "把玩偶帶到娃娃屋的廚房，演吃飯和睡覺",
    "dialogueAlt": [
      {
        "parent": "娃娃肚子餓了，我們先帶她去吃飯。",
        "child": "吃飯。",
        "reply": "好，我們把娃娃帶到桌邊。"
      },
      {
        "parent": "娃娃吃飽了，要去客廳玩還是回房間？",
        "child": "去房間睡。",
        "reply": "好，先去房間休息一下。"
      },
      {
        "parent": "娃娃今天要出門，你來幫她準備衣服和一個要帶的東西。",
        "child": "穿藍色衣服，帶小包包。",
        "reply": "你幫她挑好衣服和包包，出門的準備完成了。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50678",
    "name": "繽紛糖果小舖",
    "group": "開店請客",
    "recommend": "喜歡點餐、分類和分送物品，也願意練習輪流、用語言介紹自己的選擇",
    "scene": "當小店員，把一樣甜點放進袋子交給客人",
    "alternative": "用小盒子當購物袋，讓玩偶來買東西",
    "image": "/toys/50678.jpg",
    "dialogue": [
      {
        "parent": "糖果，給你。",
        "child": "糖果。",
        "reply": "你買到糖果了。"
      },
      {
        "parent": "你想要哪一個？我幫你放袋子。",
        "child": "要草莓的。",
        "reply": "好，草莓口味放進袋子裡。"
      },
      {
        "parent": "歡迎來糖果店，你想先看看甜甜圈還是巧克力？",
        "child": "我要甜甜圈，還要一顆糖。",
        "reply": "你選了甜甜圈和糖果，我幫你一起裝好。"
      }
    ],
    "scene2": "把不同甜點排在櫃檯，讓孩子幫客人選一份",
    "dialogueAlt": [
      {
        "parent": "甜甜的放這裡，我們一起賣給客人。",
        "child": "蛋糕。",
        "reply": "你找到蛋糕了，放到櫃檯上。"
      },
      {
        "parent": "客人要買兩樣，你想先拿哪一個？",
        "child": "先拿餅乾，再拿糖。",
        "reply": "你先拿餅乾，再拿糖果，兩樣都準備好了。"
      },
      {
        "parent": "今天的糖果店要做活動，你想怎麼介紹這些點心？",
        "child": "這是草莓糖，這是巧克力餅乾。",
        "reply": "你介紹得很清楚，客人知道每一樣是什麼口味。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50577",
    "name": "夢幻甜點午茶",
    "group": "開店請客",
    "recommend": "正在練習分配、輪流和小句子表達，喜歡把點心分給家人或玩偶",
    "scene": "把一份想像中的甜點送到你面前",
    "alternative": "用幼兒餐盤假裝分甜點",
    "image": "/toys/50577.jpg",
    "dialogue": [
      {
        "parent": "蛋糕，給我吃。",
        "child": "蛋糕。",
        "reply": "吃蛋糕。"
      },
      {
        "parent": "一小塊蛋糕，給我吃。",
        "child": "小塊的。",
        "reply": "給我一小塊。"
      },
      {
        "parent": "你切了一小塊甜蛋糕給我。",
        "child": "我切小塊的給你。",
        "reply": "你切了一小塊甜蛋糕給我，小熊的也放這裡。"
      }
    ],
    "scene2": "把甜點分給玩偶，留下最後一塊給自己",
    "dialogueAlt": [
      {
        "parent": "小熊也想吃，我們分一小口給牠。",
        "child": "給熊熊。",
        "reply": "好，這一口是熊熊的。"
      },
      {
        "parent": "你想先分草莓，還是先分蛋糕？",
        "child": "先草莓，再蛋糕。",
        "reply": "你先分草莓，再把蛋糕放到盤子裡。"
      },
      {
        "parent": "如果來了三位客人，甜點要怎麼分才剛好？",
        "child": "一人一塊，這塊給我。",
        "reply": "你想到一人一塊，還把最後一塊留給自己。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50576",
    "name": "經典英式午茶",
    "group": "開店請客",
    "recommend": "會模仿倒水、遞杯子，正在練習輪流和把生活動作說出來",
    "scene": "把杯子遞給你",
    "alternative": "改拿自家幼兒用的空杯",
    "image": "/toys/50576.jpg",
    "dialogue": [
      {
        "parent": "杯子，給我。",
        "child": "喝。",
        "reply": "喝茶。"
      },
      {
        "parent": "我用大杯子喝茶。",
        "child": "大杯子。",
        "reply": "對，大杯子裝茶。"
      },
      {
        "parent": "我端起大杯子，喝一口熱茶。",
        "child": "茶太燙了。",
        "reply": "熱茶太燙了，我們先吹一下再喝。"
      }
    ],
    "scene2": "把杯子排成一列，輪流請玩偶喝茶",
    "dialogueAlt": [
      {
        "parent": "小熊喝茶，杯子放這裡。",
        "child": "喝茶。",
        "reply": "小熊有杯子了，我們一起喝一口。"
      },
      {
        "parent": "你要先請誰喝？喝完再換下一位。",
        "child": "先小熊，再媽媽。",
        "reply": "好，先給小熊，再換媽媽。"
      },
      {
        "parent": "我們來排一排客人的杯子，看看誰先喝、誰後喝。",
        "child": "小熊先喝，媽媽等一下。",
        "reply": "你排好順序了，小熊先喝，媽媽在旁邊等。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50657",
    "name": "摩登咖啡機",
    "group": "開店請客",
    "recommend": "對生活中的泡咖啡流程有興趣，正在練習按壓、旋轉等精細動作與角色對話",
    "scene": "把杯子放到咖啡機旁，等咖啡做好",
    "alternative": "用幼兒杯和空盒假裝泡咖啡",
    "image": "/toys/50657.jpg",
    "dialogue": [
      {
        "parent": "放杯子。",
        "child": "放。",
        "reply": "放這裡。"
      },
      {
        "parent": "小杯子，放這裡。",
        "child": "小杯子。",
        "reply": "把小杯子放好。"
      },
      {
        "parent": "我把小杯子放好，再端熱咖啡給你。",
        "child": "我放好小杯子了。",
        "reply": "小杯子放好了，現在可以做一杯熱咖啡。"
      }
    ],
    "scene2": "按下假裝的按鈕，等咖啡流進小杯子",
    "dialogueAlt": [
      {
        "parent": "按一下就好，咖啡要流進杯子裡。",
        "child": "按按。",
        "reply": "你按好了，我們一起等咖啡滴下來。"
      },
      {
        "parent": "小杯子放穩了，你想做熱咖啡還是冰咖啡？",
        "child": "咖啡給你。",
        "reply": "太好了！這杯咖啡又香又濃，好好喝喔！"
      },
      {
        "parent": "咖啡做好了，你要先聞香味，還是先端給客人？",
        "child": "先聞，再給你。",
        "reply": "你先聞聞看，再把這杯香香的咖啡端給我。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50560",
    "name": "義式咖啡機",
    "group": "開店請客",
    "recommend": "會模仿端飲料、請家人喝，正在練習手眼協調與簡短的來回對話",
    "scene": "假裝做好一杯咖啡，端來請你",
    "alternative": "用幼兒空杯玩端飲料",
    "image": "/toys/50560.jpg",
    "dialogue": [
      {
        "parent": "咖啡來了。",
        "child": "喝。",
        "reply": "喝咖啡。"
      },
      {
        "parent": "熱咖啡，吹一下。",
        "child": "好燙。",
        "reply": "咖啡好燙。"
      },
      {
        "parent": "你端了一杯熱咖啡來，我等它涼一點。",
        "child": "我做好小杯的了。",
        "reply": "你做了一小杯熱咖啡，放桌上讓它涼一下。"
      }
    ],
    "scene2": "把兩個空杯放在桌上，一杯端給家人",
    "dialogueAlt": [
      {
        "parent": "杯子放好，我們來請客喝飲料。",
        "child": "喝咖啡。",
        "reply": "好，這杯是你的，我們一起坐下來喝。"
      },
      {
        "parent": "你要做一杯給我，還是做一杯給自己？",
        "child": "一杯給你，一杯給我。",
        "reply": "你準備了兩杯，想和我一起喝。"
      },
      {
        "parent": "客人來了，你想怎麼介紹這杯咖啡？",
        "child": "這是我做的咖啡，給你喝。",
        "reply": "你說得很清楚，這是你做的咖啡，要請我喝。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-coffee-maker",
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "50636",
    "name": "夏日冰淇淋餐車",
    "group": "開店請客",
    "recommend": "喜歡推行、點餐和分配，正在練習走動中的控制、做選擇和角色互動",
    "scene": "當店員，遞一份想像中的冰淇淋給你",
    "alternative": "用幼兒碗和湯匙假裝舀冰淇淋",
    "image": "/toys/50636.jpg",
    "dialogue": [
      {
        "parent": "冰淇淋，給我。",
        "child": "冰。",
        "reply": "好冰。"
      },
      {
        "parent": "一大球冰淇淋。",
        "child": "大球。",
        "reply": "我要一大球。"
      },
      {
        "parent": "我舀了一大球冰淇淋，裝在碗裡。",
        "child": "我舀大球的給你。",
        "reply": "你舀了大球的給我，我用碗接住。"
      }
    ],
    "scene2": "讓玩偶選口味，再用湯匙送到牠面前",
    "dialogueAlt": [
      {
        "parent": "小熊要吃冰淇淋，我們舀一小口。",
        "child": "冰冰。",
        "reply": "對，冰淇淋冰冰的，小熊也要小口吃。"
      },
      {
        "parent": "你要幫小熊選草莓，還是香草？",
        "child": "草莓給熊熊。",
        "reply": "你選了草莓口味，現在送到小熊面前。"
      },
      {
        "parent": "今天餐車有兩種口味，你要怎麼問客人想吃哪一種？",
        "child": "你要草莓還是香草？",
        "reply": "你會先問客人，再照他的選擇準備冰淇淋。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-ice-cream-cart",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50665",
    "name": "小廚師鍋具",
    "group": "小廚房",
    "recommend": "正在練習舀、攪、端等手部動作，喜歡模仿生活流程並把步驟說出來",
    "scene": "拿湯匙在鍋裡攪",
    "alternative": "用幼兒碗和大湯匙攪一攪",
    "image": "/toys/50665.jpg",
    "dialogue": [
      {
        "parent": "攪湯。",
        "child": "湯。",
        "reply": "煮湯。"
      },
      {
        "parent": "攪一下熱湯。",
        "child": "熱湯。",
        "reply": "你在煮熱湯。"
      },
      {
        "parent": "你攪好了，我來舀一碗熱湯。",
        "child": "我舀熱湯給你。",
        "reply": "你舀了一碗熱湯，我把碗端上桌。"
      }
    ],
    "scene2": "把鍋裡的假裝食物舀到碗裡",
    "dialogueAlt": [
      {
        "parent": "湯煮好了，我們舀一點到碗裡。",
        "child": "舀湯。",
        "reply": "你舀了一碗湯，拿好，不要灑出來。"
      },
      {
        "parent": "你想先放菜，還是先攪一攪？",
        "child": "先放菜，再攪。",
        "reply": "好，先放菜，再慢慢攪，味道會混在一起。"
      },
      {
        "parent": "今天要煮一鍋什麼湯？你可以說說看裡面放了哪些料。",
        "child": "玉米湯，有紅蘿蔔。",
        "reply": "你說的是玉米湯，裡面還有紅蘿蔔，聽起來很香。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-cookitots",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "5011",
    "name": "蔬菜切切拼圖",
    "group": "小廚房",
    "recommend": "正在練習拆分與組合、觀察形狀位置，也願意用顏色和食物名稱表達",
    "scene": "把蔬菜分開，再試著拼回去",
    "alternative": "用兩條大毛巾演分開和靠在一起",
    "image": "/toys/5011.jpg",
    "dialogue": [
      {
        "parent": "菜切開了。",
        "child": "開。",
        "reply": "切開。"
      },
      {
        "parent": "綠色的菜切開了。",
        "child": "綠色的。",
        "reply": "切綠色的菜。"
      },
      {
        "parent": "我把綠色的菜切開，再把兩片拼回去。",
        "child": "我把菜切開了。",
        "reply": "你切開了綠色的菜，要不要把兩片拼回去？"
      }
    ],
    "scene2": "把切開的蔬菜重新拼回去，再說說它的顏色",
    "dialogueAlt": [
      {
        "parent": "兩片靠在一起，就變回一顆菜了。",
        "child": "合起來。",
        "reply": "你把兩片合起來了，綠色的菜回來了。"
      },
      {
        "parent": "你找到哪兩片可以拼在一起？",
        "child": "這兩片，一樣的。",
        "reply": "對，這兩片的形狀接得起來。"
      },
      {
        "parent": "我們來看看每種蔬菜有幾片，拼好後你想端去哪裡？",
        "child": "紅蘿蔔兩片，端去廚房。",
        "reply": "你數到兩片紅蘿蔔，拼好後要送回廚房。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-cutting-vegetables-puzzle",
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "54167",
    "name": "結帳收銀機",
    "group": "開店請客",
    "recommend": "對買賣流程有興趣，正在練習一個一個放、輪流結帳和用語言表達數量",
    "scene": "假裝替你買的東西結帳",
    "alternative": "用空盒當櫃台，用手拍一下演結帳",
    "image": "/toys/54167.jpg",
    "dialogue": [
      {
        "parent": "嗶，結好了。",
        "child": "嗶。",
        "reply": "嗶一聲。"
      },
      {
        "parent": "大盒子，結帳了。",
        "child": "大盒子。",
        "reply": "先結大盒子。"
      },
      {
        "parent": "我先幫你結這個大盒子，再放進袋子。",
        "child": "大盒子放不下。",
        "reply": "大盒子放不進小袋子，我去拿大袋子。"
      }
    ],
    "scene2": "把幾樣玩具食物排隊，逐一放到收銀台結帳",
    "dialogueAlt": [
      {
        "parent": "一個一個放上來，我們慢慢結帳。",
        "child": "放這裡。",
        "reply": "你把東西放到收銀台了，輪到下一個。"
      },
      {
        "parent": "客人買了兩樣東西，你想先刷哪一樣？",
        "child": "先刷大盒子。",
        "reply": "好，先幫大盒子結帳，再刷小盒子。"
      },
      {
        "parent": "客人付錢了，你要找回多少？可以用小木片一起數。",
        "child": "找兩個給他。",
        "reply": "你數出兩個找零，收銀員把錢交給客人。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-cash-register",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50615",
    "name": "綠能立體停車場",
    "group": "車輛出發",
    "recommend": "喜歡推車、停車和觀察上下移動，正在練習空間方向與小車控制",
    "scene": "把車往上推，再找地方停",
    "alternative": "用適齡的大車在地上玩推、停",
    "image": "/toys/50615.jpg",
    "dialogue": [
      {
        "parent": "車上去了。",
        "child": "車。",
        "reply": "車停了。"
      },
      {
        "parent": "大車停在上面。",
        "child": "大車。",
        "reply": "大車開上去。"
      },
      {
        "parent": "我把大車開上去，停在小車旁邊。",
        "child": "我把大車開上去。",
        "reply": "你把大車開到上面了，我把小車停在它旁邊。"
      }
    ],
    "scene2": "把小車送上坡，再從停車格找一個位置",
    "dialogueAlt": [
      {
        "parent": "車車上樓了，我們找停車位。",
        "child": "停車。",
        "reply": "你找到位置了，小車停得好。"
      },
      {
        "parent": "上面和下面都有位置，你想停哪一層？",
        "child": "停上面，這裡。",
        "reply": "好，你把車開到上面這一格。"
      },
      {
        "parent": "停車場客滿了，你可以幫每台車找不同的樓層嗎？",
        "child": "紅車停二樓，藍車停一樓。",
        "reply": "你替兩台車安排了不同樓層，停車場有秩序了。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-green-garage",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50617",
    "name": "鄉村火車軌道組",
    "group": "車輛出發",
    "recommend": "能把車沿路線推行，正在練習路線規劃、先後順序和共同編故事",
    "scene": "沿著軌道推火車",
    "alternative": "用適齡的大車沿地墊邊走",
    "image": "/toys/50617.jpg",
    "dialogue": [
      {
        "parent": "火車開了。",
        "child": "走。",
        "reply": "火車走了。"
      },
      {
        "parent": "長火車，開得很慢。",
        "child": "好長。",
        "reply": "火車好長。"
      },
      {
        "parent": "我把長火車推過彎，到站再停下來。",
        "child": "長火車開過去了。",
        "reply": "長火車開過彎了，下一站要停在哪裡？"
      }
    ],
    "scene2": "讓火車停靠玩偶站，再載玩偶往下一站",
    "dialogueAlt": [
      {
        "parent": "火車到站了，熊熊要下車。",
        "child": "下車。",
        "reply": "好，熊熊下車了，火車再等等下一位乘客。"
      },
      {
        "parent": "下一站要去哪裡？先把軌道接好再出發。",
        "child": "去公園，走這邊。",
        "reply": "你把路線指到公園，我們沿著這條軌道走。"
      },
      {
        "parent": "如果中間多一個車站，火車要在哪裡停一下？",
        "child": "先停森林，再到公園。",
        "reply": "你安排了兩站，火車會先停森林，再到公園。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-new-natural-train-set",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50646",
    "name": "勇敢消防隊總部",
    "group": "車輛出發",
    "recommend": "對救援故事有興趣，正在練習把人物、車輛和事件串成簡單情節",
    "scene": "讓消防隊出發去幫忙",
    "alternative": "用適齡大車搭配嘴巴配音",
    "image": "/toys/50646.jpg",
    "dialogue": [
      {
        "parent": "消防車出發。",
        "child": "走。",
        "reply": "車走了。"
      },
      {
        "parent": "大消防車開出去了。",
        "child": "大車。",
        "reply": "大消防車出發。"
      },
      {
        "parent": "我開大消防車去幫忙，再開回來。",
        "child": "我開消防車去幫忙。",
        "reply": "你開大消防車去幫忙，我在這裡等你回來。"
      }
    ],
    "scene2": "讓消防車停在總部，接到任務後再出發",
    "dialogueAlt": [
      {
        "parent": "消防車回來了，我們把它停好。",
        "child": "回家。",
        "reply": "你把消防車帶回總部休息了。"
      },
      {
        "parent": "警報響了，消防隊要去哪裡幫忙？",
        "child": "去救火。",
        "reply": "好，我們一起出發，去幫忙把火撲滅。"
      },
      {
        "parent": "這次任務需要帶什麼？水、梯子，還是救援工具？",
        "child": "帶水和梯子。",
        "reply": "你想到帶水和梯子，消防隊準備得很完整。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "50647",
    "name": "正義警察局總部",
    "group": "車輛出發",
    "recommend": "喜歡巡邏找路，正在練習觀察、方位和用語言描述誰需要幫忙",
    "scene": "假裝出門巡邏，去幫忙帶路",
    "alternative": "用適齡大車在房間演出門回家",
    "image": "/toys/50647.jpg",
    "dialogue": [
      {
        "parent": "警車出門了。",
        "child": "走。",
        "reply": "車走了。"
      },
      {
        "parent": "藍色的警車開走了。",
        "child": "藍色的車。",
        "reply": "藍色警車出門。"
      },
      {
        "parent": "我開藍色警車去找迷路的小狗。",
        "child": "我找到小狗了。",
        "reply": "你找到迷路的小狗了，我們開車送牠回家。"
      }
    ],
    "scene2": "讓警車巡過家裡幾個地方，最後把玩偶送回家",
    "dialogueAlt": [
      {
        "parent": "警車來了，我們找找誰需要幫忙。",
        "child": "找小狗。",
        "reply": "你找到小狗了，警車要慢慢帶牠回家。"
      },
      {
        "parent": "小狗迷路了，你想先問誰，再帶牠走哪條路？",
        "child": "問媽媽，走大路。",
        "reply": "好，先問媽媽，再沿著大路回家。"
      },
      {
        "parent": "警察要怎麼確認小狗的家？可以看看門牌或問鄰居。",
        "child": "看門牌，送牠回去。",
        "reply": "你想到看門牌，這樣就能把小狗送回正確的家。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-police-station",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "20270",
    "name": "開鎖小木屋",
    "group": "小手探索",
    "recommend": "正在練習抓握、轉動和解決卡住的問題，也會主動用語言尋求協助",
    "scene": "指著打不開的門，想請你幫忙",
    "alternative": "用大毛巾蓋住玩偶，大人掀開玩找找看",
    "image": "/toys/20270.jpg",
    "dialogue": [
      {
        "parent": "開門。開了。",
        "child": "開。",
        "reply": "開門。"
      },
      {
        "parent": "小門卡住了。",
        "child": "卡住了。",
        "reply": "小門卡住了，我來幫忙。"
      },
      {
        "parent": "我扶著小門，你轉一下把它打開。",
        "child": "我打不開小門。",
        "reply": "我來扶著小門，你再試著轉一下。"
      }
    ],
    "scene2": "把小木屋裡的玩偶藏好，再讓孩子找門和鑰匙",
    "dialogueAlt": [
      {
        "parent": "門關起來了，裡面藏著誰？",
        "child": "小熊。",
        "reply": "你猜到小熊在裡面了，我們把門打開看看。"
      },
      {
        "parent": "這扇門需要轉一轉，你想自己試，還是我先示範？",
        "child": "我自己轉，打開了。",
        "reply": "你自己轉開了門，小熊在裡面等你。"
      },
      {
        "parent": "小木屋有好幾個入口，你可以告訴我先開哪一扇、再找誰嗎？",
        "child": "先開紅門，找小狗。",
        "reply": "你說出順序了，我們先開紅門，再找小狗。"
      }
    ],
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "3634",
    "name": "森林造型串珠",
    "group": "小手探索",
    "recommend": "喜歡森林動物圖案，正在練習抓握、穿線和照先後順序排列",
    "scene": "選一顆珠子，接在另一顆後面",
    "alternative": "用大布積木排前後",
    "image": "/toys/3634.jpg",
    "dialogue": [
      {
        "parent": "放後面。",
        "child": "放。",
        "reply": "放這裡。"
      },
      {
        "parent": "小的放後面。",
        "child": "小的。",
        "reply": "把小的放後面。"
      },
      {
        "parent": "我把小的接在後面，排成一列。",
        "child": "我把小的放後面。",
        "reply": "你把小的接在大的後面，隊伍變長了。"
      }
    ],
    "scene2": "把珠子照著動物圖案排隊，說說誰在前面",
    "dialogueAlt": [
      {
        "parent": "小鳥在前面，珠子跟著排。",
        "child": "小鳥。",
        "reply": "你看到小鳥了，牠排在最前面。"
      },
      {
        "parent": "你想讓兔子接在誰後面？",
        "child": "接小鳥後面。",
        "reply": "好，兔子接在小鳥後面，隊伍變長了。"
      },
      {
        "parent": "如果森林裡的動物一起出發，你會怎麼排牠們的順序？",
        "child": "小鳥、兔子、狐狸。",
        "reply": "你排出小鳥、兔子和狐狸，牠們要一起出發了。"
      }
    ],
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "20164",
    "name": "童趣造型串珠",
    "group": "小手探索",
    "recommend": "能挑選形狀和顏色並做簡單穿線，正在練習手眼協調、專注和做選擇",
    "scene": "選一顆想接在前面的珠子",
    "alternative": "用兩塊大布積木排隊",
    "image": "/toys/20164.jpg",
    "dialogue": [
      {
        "parent": "放前面。",
        "child": "放。",
        "reply": "放前面。"
      },
      {
        "parent": "大的放在前面。",
        "child": "大顆的。",
        "reply": "大顆的放前面。"
      },
      {
        "parent": "我先放大顆的，再把小顆的接在後面。",
        "child": "我先放大顆的。",
        "reply": "你把大顆的放在前面，我把小顆的接在後面。"
      }
    ],
    "scene2": "讓孩子挑三顆不同形狀的珠子，排出自己的隊伍",
    "dialogueAlt": [
      {
        "parent": "你挑一顆喜歡的，放到前面。",
        "child": "這顆。",
        "reply": "你選了這顆，放在隊伍最前面。"
      },
      {
        "parent": "下一顆要選圓的，還是三角形的？",
        "child": "三角形，放後面。",
        "reply": "你選了三角形，放在上一顆後面。"
      },
      {
        "parent": "你想設計什麼規律？可以一顆大、一顆小地排。",
        "child": "大、小、大、小。",
        "reply": "你排出大、小、大、小的規律，很容易看出來。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-colourful-life",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "20211",
    "name": "滾珠軌道積木",
    "group": "小手探索",
    "recommend": "喜歡觀察因果，願意反覆試不同路線，正在練習拼搭、預測和解決問題",
    "scene": "看球沿著路線滾下去",
    "alternative": "改用幼兒適用的大軟球在地墊上滾",
    "image": "/toys/20211.jpg",
    "dialogue": [
      {
        "parent": "球滾下來了。",
        "child": "球。",
        "reply": "球滾了。"
      },
      {
        "parent": "圓球滾得好快。",
        "child": "好快。",
        "reply": "圓球滾得好快。"
      },
      {
        "parent": "我從高的地方放球，球一下就滾到底了。",
        "child": "我要從高的地方放球。",
        "reply": "你從高的地方放球，我來下面等它滾過來。"
      }
    ],
    "scene2": "從不同高度放球，觀察哪一條路讓球滾得快",
    "dialogueAlt": [
      {
        "parent": "球要出發了，我們從這裡放下去。",
        "child": "放球。",
        "reply": "你放手了，球沿著路滾下去了。"
      },
      {
        "parent": "你想從高的地方，還是低的地方放球？",
        "child": "高的，跑快一點。",
        "reply": "好，我們從高的地方試試看，再和低的地方比一比。"
      },
      {
        "parent": "兩條路不一樣，你覺得哪一條會先到終點？為什麼？",
        "child": "這條比較陡，會先到。",
        "reply": "你注意到這條比較陡，先猜它會更快到終點。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-marble-blocks",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "20220",
    "name": "海洋多米諾骨牌",
    "group": "小手探索",
    "recommend": "能把物件排成一列、等待再推倒，正在練習順序、因果和手部控制",
    "scene": "排好一列，輕推第一個",
    "alternative": "用適齡大布積木排隊再推倒",
    "image": "/toys/20220.jpg",
    "dialogue": [
      {
        "parent": "推。倒了。",
        "child": "倒了。",
        "reply": "都倒了。"
      },
      {
        "parent": "好長一排，都倒了。",
        "child": "好長。",
        "reply": "排了好長一列。"
      },
      {
        "parent": "我排了好長一列，推第一個，後面的也倒了。",
        "child": "我推了長的那一排。",
        "reply": "你推了長的那排，後面的也跟著倒了。"
      }
    ],
    "scene2": "排出海浪一樣的長列，推倒後再找出倒下的順序",
    "dialogueAlt": [
      {
        "parent": "小魚排隊了，我們從第一個開始推。",
        "child": "推魚魚。",
        "reply": "你推到第一個了，後面的也一個接一個倒下來。"
      },
      {
        "parent": "你想讓哪一張在最前面？排好後再輕輕推。",
        "child": "鯨魚第一個。",
        "reply": "好，鯨魚在最前面，我們看看它會帶倒誰。"
      },
      {
        "parent": "如果中間留一個空格，骨牌還會連著倒嗎？我們試試看。",
        "child": "會停在這裡。",
        "reply": "你發現中間有空格，後面的骨牌可能就不會跟著倒。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-ocean-dominoes",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "20257",
    "name": "草原探險卡車",
    "group": "車輛出發",
    "recommend": "喜歡搬運和配對，正在練習把形狀放進對的位置、推行和編簡單小故事",
    "scene": "讓卡車載著想像中的乘客出發",
    "alternative": "用適齡大車假裝載客",
    "image": "/toys/20257.jpg",
    "dialogue": [
      {
        "parent": "上車，出發。",
        "child": "車。",
        "reply": "車開了。"
      },
      {
        "parent": "大卡車出發了。",
        "child": "大卡車。",
        "reply": "大卡車要載人。"
      },
      {
        "parent": "我開大卡車載大家去草原，到站再下車。",
        "child": "我開大卡車載你。",
        "reply": "我上了你的大卡車，到草原再下車。"
      }
    ],
    "scene2": "把玩偶裝上卡車，送到草原再讓乘客下車",
    "dialogueAlt": [
      {
        "parent": "熊熊上車了，車子要出發。",
        "child": "上車。",
        "reply": "熊熊坐好了，我們慢慢開。"
      },
      {
        "parent": "你要載誰去草原？還要帶什麼東西？",
        "child": "載兔子，帶水。",
        "reply": "好，兔子和水都上車了，出發去草原。"
      },
      {
        "parent": "到了草原，你要先讓誰下車？他們要去哪裡探險？",
        "child": "兔子先下車，去找花。",
        "reply": "你先讓兔子下車，再帶牠去找花，很有順序。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-prairie-adventurer-truck",
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "20259",
    "name": "小小賽車方向盤",
    "group": "車輛出發",
    "recommend": "會模仿開車，正在練習轉動、按壓和理解前進、停下、轉彎等方向詞",
    "scene": "假裝握著方向盤轉彎",
    "alternative": "雙手比劃開車",
    "image": "/toys/20259.jpg",
    "dialogue": [
      {
        "parent": "轉彎。",
        "child": "轉。",
        "reply": "車轉彎。"
      },
      {
        "parent": "小車轉彎了。",
        "child": "小車。",
        "reply": "小車要轉彎。"
      },
      {
        "parent": "我先減速轉彎，再開到寬的路上。",
        "child": "我要走寬的路。",
        "reply": "你轉過彎了，前面那條寬的路可以開過去。"
      }
    ],
    "scene2": "遇到紙膠帶做的彎道，先停一下再轉方向盤",
    "dialogueAlt": [
      {
        "parent": "前面要轉彎了，我們慢慢轉。",
        "child": "轉過去。",
        "reply": "你把方向盤轉過去了，車子繞過彎道。"
      },
      {
        "parent": "彎道前要先做什麼？停一下，還是一直開？",
        "child": "先停，再轉。",
        "reply": "對，先停一下看路，再轉彎比較安全。"
      },
      {
        "parent": "你是小小駕駛，遇到窄路和寬路會怎麼選？",
        "child": "窄路慢慢開，寬路快一點。",
        "reply": "你知道窄路要慢慢開，寬路可以比較順地前進。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-multi-function-steering-wheel",
    "minMonths": 24,
    "ageLabel": "2 歲以上"
  },
  {
    "id": "20277",
    "name": "小熊時鐘學習組",
    "group": "小手探索",
    "recommend": "對日常作息有概念，正在練習顏色、數字配對和用起床吃飯睡覺說出先後順序",
    "scene": "假裝叫小熊起床去吃早餐",
    "alternative": "用適齡的大布偶玩起床和睡覺",
    "image": "/toys/20277.jpg",
    "dialogue": [
      {
        "parent": "小熊起床了。",
        "child": "起床。",
        "reply": "小熊起床。"
      },
      {
        "parent": "小熊好睏，要起床了。",
        "child": "好睏。",
        "reply": "小熊好睏。"
      },
      {
        "parent": "小熊好睏，先伸個懶腰，再去吃早餐。",
        "child": "小熊要去吃早餐。",
        "reply": "好睏的小熊起床了，我們帶牠去吃早餐吧。"
      }
    ],
    "scene2": "讓小熊依照一天的作息，從起床走到睡覺",
    "dialogueAlt": [
      {
        "parent": "小熊起床了，先伸伸手。",
        "child": "起床。",
        "reply": "小熊醒來了，我們陪牠伸懶腰。"
      },
      {
        "parent": "小熊起床後要先刷牙，還是先吃早餐？",
        "child": "先刷牙，再吃飯。",
        "reply": "好，先刷牙，再坐下來吃早餐。"
      },
      {
        "parent": "我們把一天排一排：起床、吃飯、玩耍，最後要做什麼？",
        "child": "最後睡覺，蓋被被。",
        "reply": "你把睡覺放在最後，還記得要蓋好被子。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-tic-tac-bear",
    "minMonths": 24,
    "ageLabel": "2 歲以上"
  },
  {
    "id": "54556",
    "name": "數學量感疊疊樂",
    "group": "小手探索",
    "recommend": "對數字和數量有興趣，正在練習把看到的數字和手上的圓圈一個一個對起來",
    "scene": "先把圓圈一個一個疊上去，感受從低到高",
    "alternative": "1歲先用大積木練習一個一個堆疊，2歲再邊數邊放",
    "image": "/toys/54556.jpg",
    "dialogue": [
      {
        "parent": "一個，放上去。",
        "child": "放。",
        "reply": "你放一個。"
      },
      {
        "parent": "一個、再一個，變高了。",
        "child": "高高。",
        "reply": "對，圓圈一個一個疊起來，變高了。"
      },
      {
        "parent": "你把圓圈拿下來了，我們再放回去。",
        "child": "再放。",
        "reply": "好，我們慢慢放，一個一個來。"
      }
    ],
    "scene2": "把圓圈一個一個放回數字板，邊看邊數",
    "dialogueAlt": [
      {
        "parent": "一個，放上去。",
        "child": "放。",
        "reply": "你放一個。"
      },
      {
        "parent": "我們先放一個，再放一個，數數看。",
        "child": "一個、兩個。",
        "reply": "你放了兩個圓圈，邊放邊數。"
      },
      {
        "parent": "先看數字，再拿相同數量的圓圈來配。",
        "child": "數字四，放四個。",
        "reply": "你先找到四，再數四個圓圈放上去。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-counting-stacker",
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "20180",
    "name": "小手鎖螺絲練習板",
    "group": "小手探索",
    "recommend": "喜歡重複旋轉，正在練習手腕力量、雙手協調和辨認顏色形狀",
    "scene": "假裝修東西，做出轉一轉的動作",
    "alternative": "空手做轉動的手勢，配上聲音",
    "image": "/toys/20180.jpg",
    "dialogue": [
      {
        "parent": "轉一下。",
        "child": "轉。",
        "reply": "轉好了。"
      },
      {
        "parent": "這個鬆了，轉緊一點。",
        "child": "好鬆。",
        "reply": "鬆了，再轉一下。"
      },
      {
        "parent": "我把鬆掉的螺絲轉緊，這樣就不會搖了。",
        "child": "我把鬆的轉緊了。",
        "reply": "你把鬆掉的螺絲轉緊了，現在不會晃了。"
      }
    ],
    "scene2": "先把鬆的螺絲找出來，再用手指慢慢轉緊",
    "dialogueAlt": [
      {
        "parent": "這顆鬆鬆的，我們轉一轉。",
        "child": "轉。",
        "reply": "你轉動手指了，螺絲慢慢變緊。"
      },
      {
        "parent": "哪一顆在搖？找到後把它轉緊看看。",
        "child": "這顆在搖，轉緊。",
        "reply": "你找到了會搖的這顆，轉緊後就穩了。"
      },
      {
        "parent": "如果螺絲太緊了，你會怎麼告訴我？我們一起想辦法。",
        "child": "太緊，請幫我。",
        "reply": "你說太緊了，我們一起調整力氣，不用硬轉。"
      }
    ],
    "minMonths": 36,
    "ageLabel": "3 歲以上"
  },
  {
    "id": "20192",
    "name": "花園蜜蜂遊戲寶箱",
    "group": "小手探索",
    "recommend": "需要多感官探索，正在練習轉、拉、推和尋找目標，喜歡在同一個玩具上反覆發現新玩法",
    "scene": "發現蜜蜂，和你一起假裝牠飛起來",
    "alternative": "家長用手比蜜蜂飛，讓孩子跟著看",
    "image": "/toys/20192.jpg",
    "dialogue": [
      {
        "parent": "蜜蜂飛了。",
        "child": "飛。",
        "reply": "飛走了。"
      },
      {
        "parent": "小蜜蜂飛走了。",
        "child": "小蜜蜂。",
        "reply": "小蜜蜂飛起來了。"
      },
      {
        "parent": "小蜜蜂飛到漂亮的花上，停一下又飛走了。",
        "child": "蜜蜂飛去找花。",
        "reply": "小蜜蜂找到漂亮的花了，牠停在花上。"
      }
    ],
    "scene2": "找出藏在花園裡的蜜蜂，讓牠停在不同顏色的花上",
    "dialogueAlt": [
      {
        "parent": "蜜蜂在哪裡？我們一起找找看。",
        "child": "在這裡。",
        "reply": "你找到了，蜜蜂躲在這朵花旁邊。"
      },
      {
        "parent": "蜜蜂要飛去哪朵花？黃色的，還是紫色的？",
        "child": "紫色花，飛過去。",
        "reply": "好，蜜蜂飛到紫色花上休息。"
      },
      {
        "parent": "花園裡有幾朵花？你可以幫蜜蜂安排一條採蜜路線嗎？",
        "child": "先黃花，再紫花，最後紅花。",
        "reply": "你替蜜蜂排好黃、紫、紅的路線，牠可以一路採蜜。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-honeybee-activity-cube",
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "40597",
    "name": "度假海灘音樂桌",
    "group": "音樂與走動",
    "recommend": "會回應聲音、願意輪流，正在練習聽覺注意、節奏和等待",
    "scene": "敲出一聲，停一下等你",
    "alternative": "拍腿或拍手玩輪流",
    "image": "/toys/40597.jpg",
    "dialogue": [
      {
        "parent": "敲一下。換我。",
        "child": "再。",
        "reply": "再敲一下。"
      },
      {
        "parent": "這一聲好大。",
        "child": "好大聲。",
        "reply": "你敲得好大聲。"
      },
      {
        "parent": "我先輕敲一下，換你敲一個大聲的。",
        "child": "我要敲大聲的。",
        "reply": "你敲了大聲的，這次我輕敲給你聽。"
      }
    ],
    "scene2": "用輕敲和重敲演出一段海邊聲音，輪流讓彼此加入",
    "dialogueAlt": [
      {
        "parent": "聽，海浪來了，我輕輕敲一下。",
        "child": "換我。",
        "reply": "好，換你敲，我聽你的聲音。"
      },
      {
        "parent": "你想用大聲演海浪，還是小聲演沙子？",
        "child": "大聲海浪，小聲沙子。",
        "reply": "你用兩種聲音演出海邊，聽起來有高低變化。"
      },
      {
        "parent": "我們來排一段節奏：輕、輕、重，下一輪換你接。",
        "child": "輕輕重，換我。",
        "reply": "你記住了輕、輕、重，還知道下一輪輪到你。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-beach-music-table",
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "10551",
    "name": "歡樂動物積木拉車",
    "group": "音樂與走動",
    "recommend": "正在練習走動與拉行，也喜歡把動物排隊並用簡單語句說出出發和回家",
    "scene": "假裝帶動物搭車出門",
    "alternative": "用適齡大布偶在手上演去、回來",
    "image": "/toys/10551.jpg",
    "dialogue": [
      {
        "parent": "上車了。走。",
        "child": "走。",
        "reply": "車走了。"
      },
      {
        "parent": "小動物上車了。",
        "child": "小動物。",
        "reply": "小動物要坐車。"
      },
      {
        "parent": "我把小動物載到很遠的地方，再拉回家。",
        "child": "我要載小動物回家。",
        "reply": "小動物坐了很久的車，你把牠們載回家了。"
      }
    ],
    "scene2": "讓動物一隻一隻上車，再拉到另一個房間旅行",
    "dialogueAlt": [
      {
        "parent": "小兔上車了，還有誰要來？",
        "child": "小熊。",
        "reply": "小熊也上車了，大家坐好了。"
      },
      {
        "parent": "你想讓誰坐前面？誰坐後面？",
        "child": "小兔前面，小熊後面。",
        "reply": "你幫兩隻動物排好座位，現在可以出發了。"
      },
      {
        "parent": "這台車要開去森林，你要帶哪些動物？到站後先讓誰下車？",
        "child": "帶兔子和熊，兔子先下車。",
        "reply": "你先安排兔子下車，再讓小熊一起探索森林。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classic-world-pull-dudu-train",
    "minMonths": 18,
    "ageLabel": "18 個月以上"
  },
  {
    "id": "10521",
    "name": "行動廚台學步車",
    "group": "音樂與走動",
    "recommend": "正在練習穩定推行，也喜歡把做飯、送餐等生活動作串在一起",
    "scene": "假裝把餐點送到你面前",
    "alternative": "坐著用幼兒碗玩端菜",
    "image": "/toys/10521.jpg",
    "dialogue": [
      {
        "parent": "送到了，給你。",
        "child": "給。",
        "reply": "給你。"
      },
      {
        "parent": "熱湯送到了。",
        "child": "熱湯。",
        "reply": "你送熱湯來了。"
      },
      {
        "parent": "你把熱湯送到桌邊，我來拿碗接。",
        "child": "我送熱湯給你。",
        "reply": "你把熱湯送過來了，我把碗放桌上。"
      }
    ],
    "scene2": "推著學步車送餐到另一張桌子，再把餐盤放下",
    "dialogueAlt": [
      {
        "parent": "餐點送到了，我們把碗放桌上。",
        "child": "給你。",
        "reply": "謝謝你送來，我把碗接好了。"
      },
      {
        "parent": "你要送湯給誰？走到桌邊要慢慢停下來。",
        "child": "送給媽媽，停。",
        "reply": "你送到媽媽面前，還記得停下來再交給她。"
      },
      {
        "parent": "餐廳有兩桌客人，你要怎麼把湯和麵包送對地方？",
        "child": "湯給這桌，麵包給那桌。",
        "reply": "你分清楚兩桌的餐點，送餐任務完成了。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-kitchen-walker",
    "minMonths": 12,
    "ageLabel": "12 個月以上"
  },
  {
    "id": "10527",
    "name": "森林探險學步車",
    "group": "音樂與走動",
    "recommend": "正在練習站立移動與停下觀察，也會開始用詞語描述自己看見的東西",
    "scene": "出發探險，停下來看前面有什麼",
    "alternative": "坐著玩找家裡看得到的東西",
    "image": "/toys/10527.jpg",
    "dialogue": [
      {
        "parent": "停下來，看。",
        "child": "看。",
        "reply": "我看到了。"
      },
      {
        "parent": "前面有棵大樹。",
        "child": "大樹。",
        "reply": "看到一棵大樹。"
      },
      {
        "parent": "我放慢腳步走到大樹旁邊，停下來找小動物。",
        "child": "我要去大樹旁邊。",
        "reply": "我們走到大樹旁邊吧，找小動物躲在哪裡。"
      }
    ],
    "scene2": "沿著家裡的安全路線走一小段，停下來找森林裡的動物",
    "dialogueAlt": [
      {
        "parent": "前面有什麼？我們停下來看一看。",
        "child": "看樹。",
        "reply": "你看到樹了，我們在樹旁邊停一下。"
      },
      {
        "parent": "探險路上有小路和大路，你想走哪一條？",
        "child": "走大路，找小鳥。",
        "reply": "好，我們走大路，看看小鳥藏在哪裡。"
      },
      {
        "parent": "你是森林探險家，看到樹、石頭和小動物時，會怎麼記錄路線？",
        "child": "先經過石頭，再到大樹找小鳥。",
        "reply": "你說出先後順序了，探險路線很清楚。"
      }
    ],
    "source": "https://www.tomali.com.tw/products/classicworld-forest-walker",
    "minMonths": 12,
    "ageLabel": "12 個月以上"
  }
];
