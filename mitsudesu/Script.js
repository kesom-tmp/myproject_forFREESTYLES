enchant();
enchant.Sound.enabledInMobileSafari = true;




window.onload = function () {
	var game = new Core(400, 500);  				//画面サイズを400*500にする
	
	var scale_h = window.innerHeight/500;//画面サイズをスマホのブラウザに合わせる
	var scale_w = window.innerWidth/400;
	if (scale_h >= scale_w) {
		game.scale = scale_w;
	} else {
		gameme.scale = scale_h;
	}
	game.fps = 30;

	//結果ツイート時にURLを貼るため、このゲームのURLをここに記入
	//var url = "https://gamingchahan.com/mitsudesu/";
	var url = "https://gamingchahan.com/mitsudesu/"
	url = encodeURI(url); //きちんとURLがツイート画面に反映されるようにエンコードする
	////////////////////////////////////////////////



	//ゲーム開始前に必要な画像・音を読み込む部分
	///////////音
	//密です
	var so_mitsudesu = "sounds/mitsudesu.wav";
	game.preload([so_mitsudesu]);
	var so_arigato = "sounds/arigato2.wav";
	game.preload([so_arigato]);
	var so_damedesuyo = "sounds/damedesuyo.wav";
	game.preload([so_damedesuyo]);
	var so_kiken = "sounds/kiken.wav";
	game.preload([so_kiken]);
	var so_kinkyu = "sounds/kinkyu2.wav";
	game.preload([so_kinkyu]);
	var so_shokuryouhin = "sounds/shokuryouhin2.wav";
	game.preload([so_shokuryouhin]);
	var so_speed = "sounds/speed3.wav";
	game.preload([so_speed]);
	var so_sugoiyo = "sounds/sugoiyo.wav";
	game.preload([so_sugoiyo]);
	var so_yoroshiku = "sounds/yoroshiku.wav";
	game.preload([so_yoroshiku]);
	var so_yoroshiku2 = "sounds/yoroshiku2.wav";
	game.preload([so_yoroshiku2]);
	var so_ouchi = "sounds/ouchi.wav";
	game.preload([so_ouchi]);
	var so_hai = "sounds/hai.wav";
	game.preload([so_hai]);
	var so_start = "sounds/start.wav";
	game.preload([so_start]);
	var so_tokubetu = "sounds/tokubetu.wav";
	game.preload([so_tokubetu]);

	
	
	//ダメージ
	//マスクゲット
	//お肉ゲット
	//おさかなゲット
	//BGM

	////////////画像
	//あざらしさん画像
	//var AzarashiImg = "Azarashi.png";//通常時
	//var AzarashiImg = "azarashiwithmargin.png";//通常時
	//game.preload([AzarashiImg]);
	//タイトル背景
	var img_title = "images/title.png";
	game.preload([img_title]);
	//背景
	var img_background = "images/background.png";
	game.preload([img_background]);
	//ゆりこ
	var img_yuriko = "images/yuriko.png";
	game.preload([img_yuriko]);
	//密です
	var img_mitsudesu = "images/mitsudesu.png";
	game.preload([img_mitsudesu]);
	//人たち
	var img_people = "images/people.png";
	game.preload([img_people]);
	//アベ
	var img_abe = "images/abe.png";
	game.preload([img_abe]);
	//マスク
	var img_mask = "images/mask.png";
	game.preload([img_mask]);
	var img_darkmask = "images/darkmask.png";
	game.preload([img_darkmask]);
	var img_MP = "images/MP.png";
	game.preload([img_MP])
	var img_MPdark = "images/MPdark.png";
	game.preload([img_MPdark]);
	//和牛
	var img_wagyu = "images/wagyu.png";
	game.preload([img_wagyu]);
	//おさかな
	var img_fish = "images/fish.png";
	game.preload([img_fish]);
	//ツイート
	var img_tweet = "images/tweet.png";
	game.preload([img_tweet]);
	//リトライ
	var img_retry = "images/retry.png";
	game.preload([img_retry]);
	//アイコン
	var img_wagyuicon = "images/wagyuicon.png";
	game.preload([img_wagyuicon]);
	var img_fishicon = "images/fishicon.png";
	game.preload([img_fishicon]);
	//テキスト
	var img_LEVEL = "images/LEVEL.png";
	game.preload([img_LEVEL]);
	//かける
	var img_kakeru = "images/kakeru.png";
	game.preload([img_kakeru]);
	//数字
	var img_numbers = "images/numbers.png";
	game.preload([img_numbers]);
	//ソーシャルディスタンス
	var img_socialdistance = "images/socialdistance.png";
	game.preload([img_socialdistance]);
	//エンディング背景
	var img_endback = "images/endback.png";
	game.preload([img_endback]);
	//ランク
	var img_rank = "images/rank.png";
	game.preload([img_rank]);
	//黒背景
	var img_black = "images/black.png";
	game.preload([img_black]);
	//難易度ボタン
	var img_buttoneasy = "images/buttoneasy.png";
	game.preload([img_buttoneasy]);
	var img_buttonnormal = "images/buttonnormal.png";
	game.preload([img_buttonnormal]);
	

	//読み込み終わり
	/////////////////////////////////////////////////

	game.onload = function () {					//ロードが終わった後にこの関数が呼び出されるので、この関数内にゲームのプログラムを書こう


		/////////////////////////////////////////////////
		//定数
		//const HEARTTIME = 10;
		const ONESECOND = 30;//fps

		const FRICTION = 1;

		//色んなサイズ
		const SCREENWID = 400;//画面
		const SCREENHEI = 500;
		const BACKWID = 400;//背景
		const BACKHEI = 500;
		const YURIKOWID = 21;//ゆりこ
		const YURIKOHEI = 43;
		const MITSUHEI = 75;//みつ
		const MITSUWID = 75;
		const PEOPLEWID = 26;//人たち
		const PEOPLEHEI = 40;
		const MASKWID = 36;//マスク
		const MASKHEI = 25;
		const ABEWID = 38;//あべ
		const ABEHEI = 54;
		const WAGYUWID = 35;
		const WAGYUHEI = 23;
		const FISHWID = 30;
		const FISHHEI = 30;
		const SDWID = 76;
		const SDHEI = 76;

		

		const YURIKO_FIRSTX = SCREENWID/2;
		const YURIKO_FIRSTY = 400;

		const FIRSTMGN = 0.15;//最初の密です倍率
		const FIRST_MITSUMAX = 1.6;
		const MITSU_GROWTHRATE = 0.05;
		const MITSU_MAXGROWTHRATE = 0.2;
		const MITSU_TIME = 13;
		const FISHRATE = 0.3;
		const FIRSTSCALE = 0.3;
		

		const MITSUPOWER = 10;//人を遠ざける力

		const MPMAX = 5;//最大MP
		const MASKMARGIN = 5
		const MPX = 190;
		const MPY = SCREENHEI - (MASKHEI+MASKMARGIN);

		const SOCIAL_DISTANCE = YURIKOHEI*1.5;

		const NOENEMYTIME = 60;
		const ABESMASKX = 25;
		const ABESMASKY = -6;
		const TWOMASKMARGIN = 3;

		const GAMEOVER_STOP_TIME = 90;

		const VELGROWTH = 0.2;

		const WALKMARGIN = 10;//歩きアニメーションの間フレーム
		const FLASHMARGIN = 1.5;//無敵時間点滅

		const LEVELYELLOWTIME = 60;
		const LEVELFLASHMARGIN = 5;

		const PEOPLEKIND = 10;

		const ENDINGSTARTTIME = 45;
		const ENDMARGIN = 30;
		const RANKMARGIN = 45;

		const LEVELPEOPLE = 100;
		const DIFPEOPLE = 50;

		const APPROACHDIS = 1.9;
		const APPROACHVEL = 0.6;

		const SD_GROWTH = 9;

		const RANDOMVEL = 20;
		const RANDOMMARGIN = 60;

		const FIRSTVEL = 1;

		const APPROACHP = 97;
		const RANDOMP = 90;
		const FRIENDSP = 95;
		const ABEP = 93;
		const WAGYUP = 95;
		const FISHP = 95;

		const BYELINE = 400;
		
		const FRIENDSVEL = 1.3;
		const FRIENDSDIS = 50;

		const DIFMITSUPOWER = 0.5;
		//グローバル変数 
		var mousex;
		var mousey;

		var t = 0;//時間
		var TouchFlag = 0;
		var TouchingTime = 0;
		var TouchedTime = -1;
		var TouchEndTime = -1;
		var MitsuFlag = 0;


		var PeopleAry = [];
		var ObjAry = [];

		var MitsuMax = 1.5;//密の最大倍率

		var MaskAry = [];
		var MP;
		var AffectedTime = -1;

		var AbeFlag = 0;

		var AbeMaskAry = [];

		var WagyuFlag = 0;
		var WagyuAry = [];
		var WagyuCnt = 0;

		var FishFlag = 0;
		var FishAry = [];
		var FishCnt = 0;

		var pret = 0;

		var GameoverFlag = 0;
		var GameoverTime = 0;

		var Level = 0;
		var LevelTime = [ONESECOND*30, ONESECOND*30, ONESECOND*30];

		var WagyuCntAry = [];
		var FishCntAry = [];
		var LevelAry = [];
		var LevelChangedTime = -1;

		var et = 0;
		var Rank = 0;

		var StartBlack = 0;
		var StartSoundFlag = 0;

		var EndLevelAry = [];
		var EndWagyuAry = [];
		var EndFishAry = [];

		var PeopleCnt = 0;

		var LevelTime = [0];
		var ObjCnt = 0;
		var LevelFinishFlag = [];

		var PeoplePersonality = [];

		var SocialDistance = SOCIAL_DISTANCE;

		var Difficulty = 0;
		var StartingFlag = 0;

		
		//グローバル変数終わり
		var PeopleAppearTime = [
			[],
			[],
			[],
		];
		var PeopleAppearX = [
			[],
			[],
			[],
		];
		var ApproachFlag = [
			[],[],[],
		]
		var RandomFlag = [];
		var FriendsFlag = [];
		var AbeTime = [
			[],[],[],
		]
		var AbeX = [];
		var WagyuTime = [];
		var WagyuX = [];
		var FishTime = [];
		var FishX = [];
		var LevelPeople = [];
		var HelpAbe = 0;
		var HelpWagyu = 0;
		var HelpFish = 0;

		var DifText = "";

		//難易度毎の
		var PeopleInitiation = [];
		PeopleInitiation[0] = function() {
			Claster(0,1,200,10,10,10);
			Claster(0,5,250,100,500,100);
			Claster(0,10,300,75,1000,100);
			AbeX[0] = [180];
			AbeTime[0] = [1500];
			LevelPeople[0] = 16;

			Claster(1,10,400,400,0,20);
			Claster(1,8,180,20,550,200);//18
			AbeX[1] = [180];
			AbeTime[1] = [1000];
			Claster(1,10,220,50,1300,100);//28
			RandomFlag[1] = [19,21,22,24,];
			Claster(1,15,400,400,1800,0);//43
			RandomFlag[1].push(29,34,37,39,42);
			AbeX[1].push(180);
			AbeTime[1].push(2000);
			LevelPeople[1] = PeopleAppearTime[1].length-1;
			
			WagyuX[2] = [180];
			WagyuTime[2] = [50];
			Claster(2,20,220,100,350,100);//20
			Claster(2,10,400,400,850,100);//30
			FriendsFlag[2] = [21,23,24,27,28,29]
			AbeX[2] = [180];
			AbeTime[2] = [1350];
			Claster(2,15,300,200,1650,200);//45
			FriendsFlag[2].push(31,35,38,41);
			RandomFlag[2] = [34,35,37,40,42];
			FishX[2] = [180];
			FishTime[2] = [2300];
			Claster(2,20,400,400,2750,80);//65
			AbeX[2].push(250);
			AbeTime[2].push(3150);
			LevelPeople[2] = 65;

			Claster(3,15,115,70,20,100);
			Claster(3,20,380,100,250,100);//35
			ApproachFlag[3] = [0,3,16,17,18,21,27,31];
			WagyuX[3] = [100];
			WagyuTime[3] = [400];
			AbeX[3] = [140];
			AbeTime[3] = [750];
			Claster(3,10,300,200,1000,200);//45
			ApproachFlag[3].push(36,40,43,44);
			Claster(3,20,400,400,1500,50);//65
			RandomFlag[3] = [47,50,59,62];
			FriendsFlag[3] = [46,51,59,60,64];
			FishX[3] = [100];
			FishTime[3] = [1700];

			LevelPeople[3] = 65;

		}
		PeopleInitiation[1] = function() {
			Claster(0,5,250,100,10,40);
			Claster(0,15,300,75,300,100);
			Claster(0,25,150,100,700,50);//45

			Claster(0,10,250,100,1200,100);
			Claster(0,15,250,100,1500,100);
			Claster(0,20,250,100,1800,100);//90
			RandomFlag[0] = [65,66,70,74,78,85,86,86,87,88,89];
			
			Claster(0,40,400,400,2400,200);
			RandomFlag[0].push(91,93,99,102,107,110,114,119,125);//130
			//FriendsFlag[0].push(106,110,115,117,120,125,130,140,141,142,143,144,146,150,151,155,157,158,161);*/

			LevelPeople[0] = PeopleAppearTime[0].length;

			RandomFlag[1] = [];
			FriendsFlag[1] = [];
			ApproachFlag[1] = [];
			Claster(1,15,115,70,20,100);
			Claster(1,20,380,100,250,100);//35
			ApproachFlag[1].push(0,3,7,10,16,17,18,19,20,21,22,26,27,28,30,31,32,34);

			AbeTime[1] = [750];
			AbeX[1] = [180];

			Claster(1,20,350,200,1050,100);
			Claster(1,30,250,100,1500,50);//85
			ApproachFlag[1].push(36,45,46,50,55,63,69,73,79,84);

			AbeTime[1].push(2000);
			AbeX[1].push(250);

			Claster(1,60,400,400,2340,400);
			//Claster(1,30,400,400,2900,200);//145
			FriendsFlag[1].push(106,115,117,130,140,143);	
			
			Claster(1,15,400,400,3250,100);//165
			AbeTime[1].push(3550);
			AbeX[1].push(150);

			LevelPeople[1] = PeopleAppearTime[1].length;

			WagyuTime[2] = [20,1800];
			WagyuX[2] = [185,330];

			Claster(2,30,300,150,400,100);//30
			FriendsFlag[2] = [1,26];
			ApproachFlag[2] = [6,15,20];
			RandomFlag[2] = [3,7,14,19,25];
			AbeTime[2] = [500];
			AbeX[2] = [220];

			FishTime[2] = [1130,2200];
			FishX[2] = [190,80];

			AbeTime[2].push(1500,2000,2850);
			AbeX[2].push(180,80,190);
			Claster(2,100,225,50,1550,750);//160
			RandomFlag[2].push(31,35,38,50,81,102,110,118,131,144,151,152);
			FriendsFlag[2].push(70,75,72,79,84,88,92,96,99,105,110,111,119,121,126);
			LevelPeople[2] = PeopleAppearTime[2].length;
		}


		LevelPeople[2] = PeopleAppearTime[2].length;
		//var PeopleAppearY = [];

		////////関数置き場
		//2点の距離を返す　x1,y1, x2, y2
		function distance(a,b,c,d) {
			return Math.pow(Math.pow(a - c, 2) + Math.pow(b - d, 2), 1/2);
		}
		//密じゃなくなる
		function Dismitsu(object) {
			if (TouchedTime > 0 && distance(mousex,mousey,object.x+object.wid/2,object.y+object.hei/2) < (MITSUWID/2)*Mitsudesu.scaleX*0.95 + distance(0,0,object.wid/2,object.hei/2)) {
				if (distance(mousex,mousey,object.x+object.wid/2,object.y+object.hei/2) != 0)  {
					object.velX = (1+DIFMITSUPOWER*(1-Difficulty)) *(1+Mitsudesu.scaleX/8)*MITSUPOWER*(object.x+object.wid/2 - mousex)/distance(mousex,mousey,object.x+object.wid/2,object.y+object.hei/2);
					object.velY = (1+DIFMITSUPOWER*(1-Difficulty)) *(1+Mitsudesu.scaleX/8)*MITSUPOWER*(object.y+object.hei/2 - mousey)/distance(mousex,mousey,object.x+object.wid/2,object.y+object.hei/2);
				} else {		
					object.velX = (1+DIFMITSUPOWER*(1-Difficulty)) *Mitsudesu.scaleX*MITSUPOWER*(object.x+object.wid/2 - mousex)/distance(mousex,mousey,object.x+object.wid/2,object.y+object.hei/2+1);
					object.velY = (1+DIFMITSUPOWER*(1-Difficulty)) *Mitsudesu.scaleX*MITSUPOWER*(object.y+object.hei/2 - mousey)/distance(mousex,mousey,object.x+object.wid/2,object.y+object.hei/2+1);		
				}
			}
		}
		//画面外に出たら削除
		function Remove(object) {
			if (object.y > SCREENHEI) {
				if (ObjAry[object.number] != null) {
					object.parentNode.removeChild(object);
					ObjAry[object.number] = null;
					ObjCnt--;
				}
			}
		}

		//登場する
		function Appear(name, wid, hei, image, x) {
			name.image = game.assets[image];
			name.number = ObjAry.length;
			name.wid = wid;
			name.hei = hei;
			name.exist = 1;
			name.RealX = x;
			name.RealY = Yuriko.RealY - (YURIKO_FIRSTY+name.hei);
			name.velX = 0;
			name.velY = 0;

			ObjAry.push(name);
			S_MAIN.addChild(name);
			ObjCnt ++;
		}
		//摩擦計算
		function FrictionCalc(object) {
			if (object.velX > 0) object.velX -= FRICTION;
			if (object.velX < 0) object.velX += FRICTION;
			if (object.velY > 0) object.velY -= FRICTION;
			if (object.velY < 0) object.velY += FRICTION;
			if (Math.abs(object.velX) <= FRICTION) object.velX = object.velX/10;
			if (Math.abs(object.velY) <= FRICTION) object.velY = object.velY/10;
		}
		//座標計算
		function CoordinateCalc(object) {
			object.RealX += object.velX;
			object.RealY += object.velY;
			object.x = object.RealX;
			object.y = object.RealY - Yuriko.RealY + YURIKO_FIRSTY;
		}
		//接しているかどうか
		function They_Are_Tangent(object1,object2) {
			if (distance(object1.RealX+object1.wid/2, object1.RealY+object1.hei/2, object2.RealX+object2.wid/2, object2.RealY+object2.hei/2) 
			< distance(0,0,object1.wid/2,object1.hei/2) + distance(0,0,object2.wid/2,object2.hei/2)) {
				return(true);
			} else {
				return(false);
			}
		}
		//クラスター発生装置
		function Claster(level, number, x, variance_x, time, variance_time){
			for (var i=0;i<number;i++){
				if (PeopleAppearTime[level] == null) PeopleAppearTime[level] = [];
				if (PeopleAppearX[level] == null) PeopleAppearX[level] = [];
				PeopleAppearTime[level].push(time+Math.floor(Math.random()*variance_time));
				PeopleAppearX[level].push(x - (Math.random()*variance_x));
				//PeopleApproachingOrNot[level].push(0);
			}
		}
		//ユリコに近づくAI
		function Approaching(object) {
			if (distance(object.RealX,object.RealY,Yuriko.RealX,Yuriko.RealY) <= SocialDistance*APPROACHDIS*(1+(Level-4)/30) && distance(object.Realx,object.Realy,Yuriko.Realx,Yuriko.Realy)!=0) {
				object.RealX += (1+(Level-1)/25)*APPROACHVEL*(Yuriko.RealX-object.RealX)/distance(object.RealX,object.RealY,Yuriko.RealX,Yuriko.RealY);
				object.RealY += (1+(Level-1)/25)*APPROACHVEL*(Yuriko.RealY-object.RealY)/distance(object.RealX,object.RealY,Yuriko.RealX,Yuriko.RealY);
				//object.velX = 100;
			}
			//object.velX = 100;
		}
		//ランダムに動くAI
		function RandomWalk(object) {
			if (t%Math.floor(RANDOMMARGIN + (0.5-Math.random())*Math.random()*RANDOMMARGIN) == 0){
				object.velX = (0.5 - Math.random()) * Math.random()*RANDOMVEL*(1+(Level-1)/30);
				object.velY = (0.5 - Math.random()) * Math.random()*RANDOMVEL*(1+(Level-1)/30);
			}
		}
		//友達に近づくAI
		function FriendsWalk(object) {
			for (var i=0;i<object.friends.length;i++){
				if (distance(object.RealX,object.RealY,object.friends[i].RealX,object.friends[i].RealY) > object.friendsdis) {
					object.RealX += object.friendsvel*(object.friends[i].RealX-object.RealX)/distance(object.RealX,object.RealY,object.friends[i].RealX,object.friends[i].RealY)
					object.RealY += object.friendsvel*FRIENDSVEL*(object.friends[i].RealY-object.RealY)/distance(object.RealX,object.RealY,object.friends[i].RealX,object.friends[i].RealY)
				}
			}
		}
		//性格01を返す
		function PeopleApproachingOrNot(level,number) {
			if (ApproachFlag[level-1] == null) ApproachFlag[level-1] = [];
			var a=0;
			for (var i=0;i<ApproachFlag[level-1].length;i++){
				if (ApproachFlag[level-1][i] == number) a = 1;
			}
			return(a);
		}
		function PeopleRandomOrNot(level,number) {
			if (RandomFlag[level-1] ==null) RandomFlag[level-1] = [];
			var a=0;
			for (var i=0;i<RandomFlag[level-1].length;i++){
				if (RandomFlag[level-1][i] == number) a = 1;
			}
			return(a);
		}
		function PeopleFriendsOrNot(level,number) {
			if (FriendsFlag[level-1] == null) FriendsFlag[level-1] = [];
			var a = 0;
			for (var i=0;i<FriendsFlag[level-1].length;i++){
				if (FriendsFlag[level-1][i] == number) a =1;
			}
			return(a);
		}
		//アイテム発生
		function AppearPush(level,time,x,n) {
			if (time[level] == null) time[level] = [];
			if (x[level] == null) x[level] = [];
			time[level].push(PeopleAppearTime[level][n]);
			x[level].push((SCREENWID-WAGYUWID)*Math.random());
		}
		//スタート処理
		function Starting(dif) {
			if (StartSoundFlag == 0) game.assets[so_start].clone().play();
			StartSoundFlag = 1;
			S_START.onenterframe = function() {
				StartBlack ++;
				if ( StartBlack >= 2) {
					Title.opacity -= 0.02;
					ButtonEasy.opacity -= 0.02;
					ButtonNormal.opacity -= 0.02;
				}
				if (Title.opacity <= 0) {
					game.popScene(S_START);
					init();//初期化
					game.pushScene(S_MAIN);  					//S_MAINシーンオブジェクトを画面に設置
					S_MAIN.backgroundColor = "black"; 			//S_MAINシーンの背景は黒くした
				}
			}
			Difficulty = dif;
			PeopleInitiation[dif]();
		}
		/////////////////////////////////////////////////

		//初期化
		function init() {
			//変数初期化
			t = 0;
			TouchedTime = -1

			//スプライトの削除
			for (var i=0;i<ObjAry.length;i++) {
				if (ObjAry[i] != null) ObjAry[i].parentNode.removeChild(ObjAry[i]);
			}
			Mitsudesu.moveTo(SCREENWID*3,SCREENHEI*3);

			
			if (WagyuCnt > 0) {
				for (var i=0;i<Math.floor(Math.log10(WagyuCnt)+1);i++) {
					WagyuCntAry[i].parentNode.removeChild(WagyuCntAry[i]);
				}
				Wagyuicon.parentNode.opacity = 0;
				kakeru1.parentNode.opacity = 0;
			}
			if (FishCnt > 0) {
				for (var i=0;i<Math.floor(Math.log10(FishCnt)+1);i++) {
					FishCntAry[i].parentNode.removeChild(FishCntAry[i]);
				}
				Fishicon.parentNode.opacity = 0;
				kakeru2.parentNode.opacity = 0;

			}
			for (var i=0;i<LevelAry.length;i++) {
				if (t!=1){
				if (LevelAry[i] != null) LevelAry[i].parentNode.removeChild(LevelAry[i]);
				}
			}


			Yuriko.x = YURIKO_FIRSTX;
			Yuriko.y = YURIKO_FIRSTY;
			Yuriko.RealX = YURIKO_FIRSTX;
			Yuriko.RealY = 0;
			PeopleAry = [];
			ObjAry = [];
			MitsuMax = FIRST_MITSUMAX;
			MP = MPMAX;
			AffectedTime = -1;
			AbeFlag = 0;
			AbeMaskAry = [];
			WagyuFlag = 0;
			FishFlag = 0;
			WagyuAry = [];
			FishAry = [];
			WagyuCnt = 0;
			TouchEndTime = -1;
			FishCnt = 0;
			pret = 0;
			GameoverFlag = 0;
			GameoverTime = 0;
			Level = 1;
			WagyuCntAry = [];
			FishCntAry = [];
			LevelAry[0] = Level;
			LevelChangedTime = -1;
			Background.RealY = 0;
			Background2.RealY = -(BACKHEI+40);
			et = 0;
			Rank = 0;
			StartBlack = 0;
			StartSoundFlag = 0;
			S_BLACK.opacity = 1;
			PeopleCnt = 0;
			LevelTime = [0];
			ObjCnt = 0;
			LevelFinishFlag[0] = 0;
			SocialDistance = SOCIAL_DISTANCE;

			RandomFlag[0] = [];
			FriendsFlag[0] = [];
			ApproachFlag[0] = [];



		
			Level = 1;
			if (LevelTime[Level-1] == null) LevelTime[Level-1] = 0;
			if (LevelFinishFlag[Level-1] == null) LevelFinishFlag[Level-1] = 0;
			//LevelTime[5]=0;
			//覚書
			//Clester（レベル-1,人数、ｘ座標、座標の分散、時間（レベルごと）、時間の分散
			//Approachtime[レベル-1]　= [アプローチ性格を持った人が出てくる順番]
		}

		///////スタートシーン
		var S_START = new Scene();
		game.pushScene(S_START);
		S_START.backgroundColor = "black";

		var Title = new Sprite(SCREENWID, SCREENHEI);
		Title.image = game.assets[img_title];
		Title.opacity = 1;
		S_START.addChild(Title);

		var EasyX = 40;
		var EasyY = 350;
		var ButtonEasy = new Sprite(120,60);
		ButtonEasy.image = game.assets[img_buttoneasy];
		ButtonEasy.moveTo(EasyX,EasyY);
		S_START.addChild(ButtonEasy);

		var ButtonNormal = new Sprite(120,60);
		ButtonNormal.image = game.assets[img_buttonnormal];
		ButtonNormal.moveTo(SCREENWID/2 + (SCREENWID/2-EasyX-120),EasyY);
		S_START.addChild(ButtonNormal);

		ButtonEasy.ontouchstart = function () {//画面タップ
			if (StartingFlag == 0) {
				StartingFlag = 1;
				Starting(0);
			}
		}
		ButtonNormal.ontouchstart = function () {
			if (StartingFlag == 0) {
				Starting(1);
			}
		}
			
		




		//メインシーン
		var S_MAIN = new Scene();					//メインシーン作成
		//S_MAIN.fps = ONESECOND;
		//game.pushScene(S_MAIN);  					//S_MAINシーンオブジェクトを画面に設置
		
		//スプライト作成
		//背景
		var Background = new Sprite(BACKWID,BACKHEI+40);
		Background.image = game.assets[img_background];
		S_MAIN.addChild(Background);
		Background.RealX = 0;
		Background.RealY = 0;
		
		var Background2 = new Sprite(BACKWID,BACKHEI+40);
		Background2.image = game.assets[img_background];
		S_MAIN.addChild(Background2);
		Background2.RealX = 0;
		Background2.RealY = -BACKHEI;

		//ユリコ
		var Yuriko = new Sprite(YURIKOWID,YURIKOHEI);
		Yuriko.image = game.assets[img_yuriko];
		Yuriko.wid = YURIKOWID;
		Yuriko.hei = YURIKOHEI;
		S_MAIN.addChild(Yuriko);
		Yuriko.moveTo(SCREENWID/2, 400);

		//ソーシャルディスタンス
	
		var SD_Circle= new Sprite(SDWID, SDHEI);
		SD_Circle.moveTo(Yuriko.x+YURIKOWID/2-SDWID,Yuriko.y+YURIKOHEI/2-SDWID);
		SD_Circle.image = game.assets[img_socialdistance];
		S_MAIN.addChild(SD_Circle);

		//体力ゲージ
		for (var i=0;i<MPMAX;i++) {
			var DarkMask = new Sprite(MASKWID,MASKHEI);
			DarkMask.image = game.assets[img_darkmask];
			DarkMask.moveTo(MPX+(MASKWID+MASKMARGIN)*i, MPY);
			S_MAIN.addChild(DarkMask);
			var Mask = new Sprite(MASKWID,MASKHEI);
			Mask.image = game.assets[img_mask];
			Mask.moveTo(MPX+MASKWID*i, MPY);
			MaskAry.push(Mask);
			S_MAIN.addChild(Mask);
		}


		//残り時間
		//左右ボタン
		//密です
		var Mitsudesu = new Sprite(MITSUWID,MITSUHEI);
		Mitsudesu.image = game.assets[img_mitsudesu];
		Mitsudesu.moveTo(-100,-100);
		//S_MAIN.addChild(Mitsudesu);
		Mitsudesu.mgn = FIRSTMGN;

		//level
		var LEVELTEXT = new Sprite(120,30);
		LEVELTEXT.image = game.assets[img_LEVEL];
		LEVELTEXT.moveTo(-10,460);
		S_MAIN.addChild(LEVELTEXT);
		//最初の数字
		/*
		var Number = new Sprite(18,25);
		Number.image = game.assets[img_numbers];
		Number.frame = 0;
		Number.moveTo(100,460);
		S_MAIN.addChild(Number);
		LevelAry[0] = Number;*/
		//アイコン
		var Wagyuicon = new Sprite(WAGYUWID+4,WAGYUHEI+4);
		Wagyuicon.image = game.assets[img_wagyuicon];
		Wagyuicon.moveTo(10,380);
		S_MAIN.addChild(Wagyuicon);
		Wagyuicon.opacity = 0;
		var Fishicon = new Sprite(FISHWID+4,FISHHEI+4);
		Fishicon.image = game.assets[img_fishicon];
		Fishicon.moveTo(10,420);
		S_MAIN.addChild(Fishicon);
		Fishicon.opacity = 0;
		//かけるマーク
		var kakeru1 = new Sprite(25,25);
		kakeru1.image = game.assets[img_kakeru];
		kakeru1.moveTo(45,380);
		S_MAIN.addChild(kakeru1);
		kakeru1.opacity = 0;
		//S_MAIN.addChild(kakeru1);
		var kakeru2 = new Sprite(25,25);
		kakeru2.image = game.assets[img_kakeru];
		kakeru2.moveTo(45,420);
		S_MAIN.addChild(kakeru2);
		kakeru2.opacity = 0;
	//	S_MAIN.addChild(kakeru2);

		//黒
		var S_BLACK = new Sprite(400,500);
		S_BLACK.image = game.assets[img_black];
		S_MAIN.addChild(S_BLACK);		




		//画面タッチの処理
		S_MAIN.ontouchstart = function(e) {
			if (GameoverFlag == 0) {
			
			//密です登場
			if (MitsuFlag == 0){
				mousex = e.localX;//タッチ座標取得
				mousey = e.localY;
				TouchedTime = t;
				Mitsudesu.scaleX = FIRSTSCALE + (t-TouchedTime)*Mitsudesu.mgn;
				Mitsudesu.scaleY = FIRSTSCALE + (t-TouchedTime)*Mitsudesu.mgn;
				Mitsudesu.moveTo(mousex-MITSUWID/2, mousey-MITSUHEI/2);
				S_MAIN.addChild(Mitsudesu);
				//音が鳴る
				game.assets[so_mitsudesu].clone().play();//音
				//密ですの座標
				//密ですフラグ
				MitsuFlag = 1;
			}


			}//消さない
		}
		S_MAIN.ontouchend = function() {
			if (MitsuFlag == 1){
				MitsuFlag = 2;
				TouchEndTime = t;
			}
		}

		///////////////////////////////////////////////////
		//メインループ　ここに主要な処理をまとめて書こう
		S_MAIN.onenterframe = function () {

			//暗転
			if (S_BLACK.opacity > 0.06) {
				S_BLACK.opacity -= 0.05;
			} else if (S_BLACK.opacity == 0.05) {
				S_BLACK.parentNode.removeChild(S_BLACK);
			}

			//時間管理
			t++;
			if (t==1) game.assets[so_yoroshiku].clone().play();//音
			LevelTime[Level-1]++;
			LevelTime[Level] = 0;
			if (GameoverFlag == 0){
			
			//人が登場する
			if (PeopleAppearTime[Level-1] == null) PeopleAppearTime[Level-1] = [];
			if (PeopleAppearX[Level-1] == null) PeopleAppearX[Level-1] = [];
			for (var i=0;i<PeopleAppearTime[Level-1].length;i++){
				if ( LevelTime[Level-1] == PeopleAppearTime[Level-1][i]) {
					var People = new Sprite(PEOPLEWID,PEOPLEHEI);
					Appear(People, PEOPLEWID, PEOPLEHEI, img_people, PeopleAppearX[Level-1][i]);
					PeopleAry.push(People);
					People.frame = Math.floor(Math.random()*100)%PEOPLEKIND;
					People.AffectFlag = 0;
					PeopleCnt ++;
					People.friends = [];

					People.personality = 0;
					if (PeopleApproachingOrNot(Level,i) == 1) {
						People.personality = 1;
					} 
					if (PeopleRandomOrNot(Level,i) == 1){
						People.personality = 2;
					}
					if (PeopleFriendsOrNot(Level,i) == 1) {
						var FriendNumber = Math.floor(Math.random()*PeopleAry.length);
						if (PeopleAry[FriendNumber] != null && PeopleAry[FriendNumber].y < SCREENHEI*1.5 ) {
							People.friends.push(PeopleAry[FriendNumber]);
							PeopleAry[FriendNumber].friends.push(People);
							People.friendsvel = Math.random()*FRIENDSVEL*(1 + Level*0.1);
							PeopleAry[FriendNumber].friendsvel = Math.random()*FRIENDSVEL*(1 + Level*0.1);
							People.friendsdis = Math.random()*FRIENDSDIS;
							PeopleAry[FriendNumber].friendsdis = Math.random()*FRIENDSDIS;
						}
					}

				}
			}
				
			//人ごとに…
			for (var i=0;i<PeopleAry.length;i++) {
				if (PeopleAry[i] != null) {
					//当たり判定 体力を削る
					if (distance(PeopleAry[i].x+PEOPLEWID/2,PeopleAry[i].y+PEOPLEHEI/2,Yuriko.x+YURIKOWID/2,Yuriko.y+YURIKOHEI/2) < SocialDistance
						&& PeopleAry[i].AffectFlag == 0 && PeopleAry[i].y <= SCREENHEI && PeopleAry[i].x > -PEOPLEWID && PeopleAry[i].x < SCREENWID) {
						if (AffectedTime < 0 || t - AffectedTime > NOENEMYTIME) {
							MP --;
							if ( MP <= 0 ) MP = 0;
							AffectedTime = t;
							PeopleAry[i].AffectFlag = 1;
							if ( MP > 1) game.assets[so_damedesuyo].clone().play();//音
							if ( MP == 1) game.assets[so_kiken].clone().play();
							if ( MP == 0) game.assets[so_kinkyu].clone().play();
						}
						if (PeopleAry[i].personality == 1) PeopleAry[i].personality = 0;
					}
				}
			}
				
			//アベ登場
			if (AbeTime[Level-1] == null) AbeTime[Level-1] = [];
			if (AbeX[Level-1] == null) AbeX[Level-1] = [];
			for (var i=0;i<AbeTime[Level-1].length;i++){
				if (LevelTime[Level-1] == AbeTime[Level-1][i]) {
					var Abe = new Sprite(ABEWID,ABEHEI);
					Appear(Abe, ABEWID, ABEHEI, img_abe, AbeX[Level-1][i]);
					//AbeFlag = 1;
					//マスク2枚
					var OneMask = new Sprite(MASKWID,MASKHEI);
					var TwoMask = new Sprite(MASKWID,MASKHEI);
					Appear(OneMask, MASKWID, MASKHEI, img_mask, Abe.RealX+ABESMASKX);
					Appear(TwoMask, MASKWID, MASKHEI, img_mask, Abe.RealX+ABESMASKX+MASKMARGIN);
					AbeMaskAry.push(Abe);
					AbeMaskAry.push(OneMask);
					AbeMaskAry.push(TwoMask);
				}
			}
			if (Level >= 4 && PeopleCnt == PeopleAppearTime[Level-1].length && Level%2 == 0 && HelpAbe == 0) {
				var Abe = new Sprite(ABEWID,ABEHEI);
				Appear(Abe, ABEWID, ABEHEI, img_abe, 190);
				Abe.RealY -= 400;
				//AbeFlag = 1;
				//マスク2枚
				var OneMask = new Sprite(MASKWID,MASKHEI);
				var TwoMask = new Sprite(MASKWID,MASKHEI);
				Appear(OneMask, MASKWID, MASKHEI, img_mask, Abe.RealX+ABESMASKX);
				Appear(TwoMask, MASKWID, MASKHEI, img_mask, Abe.RealX+ABESMASKX+MASKMARGIN);
				AbeMaskAry.push(Abe);
				AbeMaskAry.push(OneMask);
				AbeMaskAry.push(TwoMask);
				HelpAbe = 1;
			}
			//アベごとに…
			for (var i=0;i<AbeMaskAry.length/3;i++) {
				if (AbeMaskAry[i*3] != null) {
					//当たり判定
					if (They_Are_Tangent(AbeMaskAry[i*3], Yuriko)) {
						if (AbeMaskAry[i*3+1] != null && AbeMaskAry[i*3+2] != null) MP += 2;
						if (MP >= MPMAX) MP = 5;
						if (AbeMaskAry[i*3+1] != null) {
							AbeMaskAry[i*3+1].parentNode.removeChild(AbeMaskAry[i*3+1]);
							ObjAry[AbeMaskAry[i*3+1].number] = null;
							AbeMaskAry[i*3+1] = null;
							ObjCnt--;
						}
						if (AbeMaskAry[i*3+2] != null) {
							AbeMaskAry[i*3+2].parentNode.removeChild(AbeMaskAry[i*3+2]);
							ObjAry[AbeMaskAry[i*3+2].number] = null;
							AbeMaskAry[i*3+2] = null;
							ObjCnt--;
							game.assets[so_arigato].clone().play();//音
						}
						
						
 					}
				}
			}

			//お肉登場
			if (WagyuTime[Level-1] == null) WagyuTime[Level-1] = [];
			if (WagyuX[Level-1] == null) WagyuX[Level-1] = [];
			for (var i=0;i<WagyuTime.length;i++) {
				if (LevelTime[Level-1] == WagyuTime[Level-1][i]) {
					var Wagyu = new Sprite(WAGYUWID,WAGYUHEI);
					Appear(Wagyu, WAGYUWID, WAGYUHEI, img_wagyu, WagyuX[Level-1][i]);
					//WagyuFlag = 1;
					WagyuAry.push(Wagyu);
				}
			}

			//お肉当たり判定
			for (var i=0;i<WagyuAry.length;i++) {
				if (WagyuAry[i] != null) {
					if (They_Are_Tangent(WagyuAry[i],Yuriko)) {
						WagyuCnt++;
						WagyuAry[i].parentNode.removeChild(WagyuAry[i]);
						ObjAry[WagyuAry[i].number] = null;
						WagyuAry[i] = null;
						ObjCnt --;
						game.assets[so_shokuryouhin].clone().play();//音
					}
				}
			}

			//おさかな登場
			if (FishTime[Level-1] == null) FishTime[Level-1] = [];
			if (FishX[Level-1] == null) FishX[Level-1] = [];
			for (var i=0;i<FishTime.length;i++) {
				if (LevelTime[Level-1] == FishTime[Level-1][i]) {
					var Fish = new Sprite(FISHWID,FISHHEI);
					Appear(Fish, FISHWID, FISHHEI, img_fish, FishX[Level-1][i]);
					//FishFlag = 1;
					FishAry.push(Fish);

				}
			}

			//おさかな当たり判定
			for (var i=0;i<FishAry.length;i++) {
				if (FishAry[i] != null) {
					if (They_Are_Tangent(FishAry[i], Yuriko)) {
						FishCnt++;
						FishAry[i].parentNode.removeChild(FishAry[i]);
						ObjAry[FishAry[i].number] = null;
						FishAry[i] = null;
						ObjCnt --;
						game.assets[so_speed].clone().play();//音
					}
				}
			}

			//ひとびと
			for (var i=0;i<PeopleAry.length;i++){
				if (PeopleAry[i].personality == 1) Approaching(PeopleAry[i]);
				if (PeopleAry[i].personality == 2) RandomWalk(PeopleAry[i]);
				if (PeopleAry[i].friends.length > 0) FriendsWalk(PeopleAry[i]);
				//if (PeopleAry[i].personality == 3) FriendsWalk(PeopleAry[i]);
			}

			//描画座標計算
			Yuriko.vel = (1 - 0.5*(1-Difficulty))*Level*VELGROWTH+FIRSTVEL;
			Yuriko.RealY -= Yuriko.vel;





			//全てのオブジェクトごとに、
			for (var i=0;i<ObjAry.length;i++) {
				if (ObjAry[i] != null) {
					//密なら距離をとる
					Dismitsu(ObjAry[i]);
					//摩擦計算
					FrictionCalc(ObjAry[i]);
					//座標計算
					CoordinateCalc(ObjAry[i]);
					//画面外で消す
					Remove(ObjAry[i]);
					//GoodBye(ObjAry[i]);
				}
			}

			//アベトマスク
			for (var i=0;i<(AbeMaskAry.length)/3;i++) {
				//座標計算（マスクはアベのそば
				if (AbeMaskAry[i*3+1] != null) {
					AbeMaskAry[i*3+1].RealX = AbeMaskAry[i*3].RealX + ABESMASKX;
					AbeMaskAry[i*3+1].RealY = AbeMaskAry[i*3].RealY + ABESMASKY;
				}
				if (AbeMaskAry[i*3+2] != null) {
					AbeMaskAry[i*3+2].RealX = AbeMaskAry[i*3].RealX + ABESMASKX + MASKMARGIN;
					AbeMaskAry[i*3+2].RealY = AbeMaskAry[i*3].RealY + ABESMASKY + MASKMARGIN;			
				}		
				
			}

			//密の拡大
			MitsuMax = FIRST_MITSUMAX + WagyuCnt*MITSU_MAXGROWTHRATE;
			Mitsudesu.mgn = FIRSTMGN + FishCnt*MITSU_GROWTHRATE;
			if (MitsuFlag != 2) {
				Mitsudesu.scaleX = FIRSTSCALE + (t-TouchedTime)*Mitsudesu.mgn;
				Mitsudesu.scaleY = FIRSTSCALE + (t-TouchedTime)*Mitsudesu.mgn;
			}
			if (MitsuFlag == 1 ) {
				if (Mitsudesu.scaleX >= MitsuMax) {
					Mitsudesu.scaleX = MitsuMax;
					MitsuFlag = 2;
					TouchEndTime = t;
				}
				if (Mitsudesu.scaleY >= MitsuMax) {
					Mitsudesu.scaleY = MitsuMax;
				}
			}

			//描画
			//背景
			Background.y = Background.RealY - Yuriko.RealY + YURIKO_FIRSTY;
			Background2.y = Background2.RealY - Yuriko.RealY + YURIKO_FIRSTY;
			if (Background.y >= BACKHEI ) {
				Background.RealY = Background2.RealY-(BACKHEI+40);
			}
			if (Background2.y >= BACKHEI) {
				Background2.RealY = Background.RealY-(BACKHEI+40);
			}

			//ゆりこアニメーション
			Yuriko.frame = Math.floor(t/WALKMARGIN)%4;
			SD_Circle.frame = 0;
			//無敵時間点滅
			if (AffectedTime >= 0 && t - AffectedTime <= NOENEMYTIME) {
				Yuriko.frame += 4*(Math.floor(t/FLASHMARGIN)%2);
				//SD_Circle.frame += Math.floor(t/FLASHMARGIN)%2;
			}

			//あべにっこり
			for (var i=0;i<AbeMaskAry.length/3;i++) {
				if (AbeMaskAry[i*3+1] == null){
					AbeMaskAry[i*3].frame = 1;
				} else {
					AbeMaskAry[i*3].frame = 0;
				}
			}

			//ソーシャルディスタンスサークル
			SocialDistance = SOCIAL_DISTANCE + Math.floor(Level-1)*SD_GROWTH*(1-0.5*(1-Difficulty));
			SD_Circle.scaleX = 2*SocialDistance/SDWID;
			SD_Circle.scaleY = 2*SocialDistance/SDHEI;
			SD_Circle.moveTo(Yuriko.x + YURIKOWID/2 - SDWID/2, Yuriko.y+YURIKOHEI/2 - SDHEI/2);

			//体力ゲージ
			for (var i=0;i<MPMAX;i++) {
				//体力ない場合は画面外に移動
				if (i<MP) MaskAry[i].moveTo(MPX+(MASKWID+MASKMARGIN)*i, MPY);
				else MaskAry[i].moveTo(SCREENWID*3,SCREENHEI*3);
			}

			if (MitsuFlag == 2) {
				if (t-TouchEndTime > MITSU_TIME - FishCnt*FISHRATE) {
					Mitsudesu.parentNode.removeChild(Mitsudesu);
					TouchedTime = -1;
					MitsuFlag = 0;
				}
			}



			//アイコン
			if (WagyuCnt > 0) {
				Wagyuicon.parentNode.removeChild(Wagyuicon);
				S_MAIN.addChild(Wagyuicon);
				Wagyuicon.opacity = 1;
				kakeru1.parentNode.removeChild(kakeru1);
				S_MAIN.addChild(kakeru1);
				kakeru1.opacity = 1;
				for (var i=0;i<WagyuCntAry.length;i++) {
					if (WagyuCntAry[i] != null) WagyuCntAry[i].parentNode.removeChild(WagyuCntAry[i]);
				}
				for (var i=0;i<Math.floor(Math.log10(WagyuCnt)+1);i++) {
					var Number = new Sprite(18,25);
					Number.image = game.assets[img_numbers];
					Number.frame = (WagyuCnt/Math.pow(10,i))%10;
					Number.moveTo(100+Math.floor(Math.log10(WagyuCnt)-1)*20-i*20,380);
					S_MAIN.addChild(Number);
					WagyuCntAry[i] = Number;
				}

			} else {
				Wagyuicon.opacity = 0;
				kakeru1.opacity = 0;
			}
			if (FishCnt > 0) {
				Fishicon.parentNode.removeChild(Fishicon);
				S_MAIN.addChild(Fishicon);
				Fishicon.opacity = 1;
				kakeru1.parentNode.removeChild(kakeru2);
				S_MAIN.addChild(kakeru2);
				kakeru2.opacity = 1;
				for (var i=0;i<FishCntAry.length;i++) {
					if (FishCntAry[i] != null) FishCntAry[i].parentNode.removeChild(FishCntAry[i]);
				}
				for (var i=0;i<Math.floor(Math.log10(FishCnt)+1);i++) {
					var Number = new Sprite(18,25);
					Number.image = game.assets[img_numbers];
					Number.frame = (FishCnt/Math.pow(10,i))%10;
					Number.moveTo(100+Math.floor(Math.log10(FishCnt)-1)*20-i*20,420);
					S_MAIN.addChild(Number);
					FishCntAry[i] = Number;
				}
			} else {
				Fishicon.opacity = 0;
				kakeru2.opacity = 0;
			}

			//LEVEL
			LEVELTEXT.parentNode.removeChild(LEVELTEXT);
			S_MAIN.addChild(LEVELTEXT);
			LEVELTEXT.frame = 0;
			for (var i=0;i<LevelAry.length;i++) {
				if (t!=1){
				if (LevelAry[i] != null) LevelAry[i].parentNode.removeChild(LevelAry[i]);
				}
			}
			for (var i=0;i<Math.floor(Math.log10(Level)+1);i++) {
				var Number = new Sprite(18,25);
				Number.image = game.assets[img_numbers];
				Number.frame = (Level/Math.pow(10,i))%10;
				//レベルが上がると黄色く点滅
				if (LevelChangedTime > 0 && t - LevelChangedTime <= LEVELYELLOWTIME) {
					Number.frame += (Math.floor(t/LEVELFLASHMARGIN)%2)*10;
				}
				Number.moveTo(110+Math.floor(Math.log10(Level))*20-i*20,463);
				S_MAIN.addChild(Number);
				LevelAry[i] = Number;
				
			}
			if (LevelChangedTime > 0 && t - LevelChangedTime <= LEVELYELLOWTIME) {
				LEVELTEXT.frame += (Math.floor(t/LEVELFLASHMARGIN)%2);
			}

		




			}//消さないで

			
			//レベル上がる処理
			if (PeopleCnt >= LevelPeople[Level-1] && ObjCnt <= 0 && LevelFinishFlag[Level-1] == 0) {
				LevelFinishFlag[Level-1] = 1;
				LevelFinishFlag[Level] = 0;
				Level++;
				LevelChangedTime = t;
				game.assets[so_sugoiyo].clone().play();//音
				LevelTime.push(0);
				PeopleCnt = 0;
				HelpAbe = 0;
				HelpWagyu = 0;
				HelpFish = 0;

				if (LevelPeople[Level-1] == null) LevelPeople[Level-1] = LEVELPEOPLE + (Level-1)*10 - DIFPEOPLE*(1-Difficulty);
				if (PeopleAppearTime[Level-1] == null) {
					PeopleAppearTime[Level-1] = [];
					PeopleAppearX[Level-1] = [];
					for (var i=0; i>-1;i++){
						Claster(Level-1, Math.floor(Math.random()*(20-10*(1-Difficulty))),(SCREENWID-PEOPLEWID)*Math.random(),100*Math.random(),Math.floor((500*(1-Difficulty)+1500)*Math.random()),150*Math.random());
						if (PeopleAppearTime[Level-1].length >= LevelPeople[Level-1]) break;
					}
					ApproachFlag[Level-1] = [];
					RandomFlag[Level-1] = [];
					FriendsFlag[Level-1] = [];

					for (var i=0;i<PeopleAppearTime[Level-1].length;i++){
						if (Math.random()*100 >= APPROACHP - Level) ApproachFlag[Level-1].push(i);
						if (Math.random()*100 >= RANDOMP - Level) RandomFlag[Level-1].push(i);
						if (Math.random()*100 >= FRIENDSP - Level) FriendsFlag[Level-1].push(i);
						if (Math.random()*100 >= ABEP + (Level-4)*0.014) AppearPush(Level-1,AbeTime,AbeX,i);
						if (Math.random()*100>= WAGYUP + (Level-4)*0.014) AppearPush(Level-1,WagyuTime,WagyuX,i);							
						if (Math.random()*100>= FISHP + (Level-4)*0.014) AppearPush(Level-1,FishTime,FishX,i);			
					}
				}
				
			}

			//エンディング
			//体力が尽きた場合
			if (MP <= 0) {
				if (GameoverTime == 0) GameoverTime = t;
				GameoverFlag = 1;
			}

			//乗り切った場合

			//少し止めてゲームオーバー画面
			if (GameoverFlag == 1) {
				Yuriko.frame = 0;
				S_BLACK.opacity += 0.06;
				if ( t - GameoverTime >= GAMEOVER_STOP_TIME ) {
					//game.popScene();
					//game.assets[EndingSound].clone().play();
					if ( Level <= 5 ) Rank = 0;
					if ( 6 <= Level && Level <= 14 ) Rank = 1;
					if ( 10 <= Level ) Rank = 2;
					if ( 20 <= Level ) Rank = 3;
					if (Difficulty == 0) DifText = "かんたん";
					if (Difficulty == 1) DifText = "ふつう";
					//Rank = Level;
					game.popScene(S_MAIN);
					game.pushScene(S_END);
					
				}
			}

			
			
		};




		////////////////////////////////////////////////////////////////
		//結果画面
		S_END = new Scene();
		S_END.backgroundColor = "rgba(255,255,255,1)";//透明
		//背景
		var EndBack = new Sprite(SCREENWID,SCREENHEI);
		EndBack.image = game.assets[img_endback];
		S_END.addChild(EndBack);

		//ランク
		var FinalRank = new Sprite(32,60)
		FinalRank.image = game.assets[img_rank];
		FinalRank.moveTo(290,295);

		//エンディングテキスト
		
		//リトライボタン
		var RetryButton = new Sprite(120,60);
		RetryButton.moveTo(50,380);
		RetryButton.image = game.assets[img_retry];
		
		RetryButton.ontouchend = function() {
			for (var i=0;i<EndLevelAry.length;i++){
				EndLevelAry[i].parentNode.removeChild(EndLevelAry[i]);
			}
			EndLevelAry = [];
			for (var i=0;i<EndWagyuAry.length;i++){
				EndWagyuAry[i].parentNode.removeChild(EndWagyuAry[i]);
			}
			EndWagyuAry = [];
			for (var i=0;i<EndFishAry.length;i++){
				EndFishAry[i].parentNode.removeChild(EndFishAry[i]);
			}

			EndFishAry = [];
			FinalRank.parentNode.removeChild(FinalRank);
			//FinalRank.moveTo(SCREENWID,SCREENHEI);
			RetryButton.parentNode.removeChild(RetryButton);
			TweetButton.parentNode.removeChild(TweetButton);
			game.assets[so_start].clone().play();
			game.popScene(S_END);
			game.pushScene(S_MAIN);
			init();
		}
	
		//ツイートボタン
		var TweetButton = new Sprite(120, 60);				//画像サイズをここに書く。使う予定の画像サイズはプロパティで見ておくこと
		TweetButton.moveTo(230, 380);						//リトライボタンの位置
		TweetButton.image = game.assets[img_tweet];			//読み込む画像の相対パスを指定。　事前にgame.preloadしてないと呼び出せない
		

		TweetButton.ontouchend = function () {				//S_Tweetボタンをタッチした（タッチして離した）時にこの中の内容を実行する
			//ツイートＡＰＩに送信

			window.open("http://twitter.com/intent/tweet?text=私の都知事レベルは " + Level + " です。難易度："+DifText+"&hashtags=密ですゲーム,STAYHOME &url=" + url); //ハッシュタグにahogeタグ付くようにした。
		};	
		

		S_END.onenterframe = function() {
			et++;
			if (et >= ENDINGSTARTTIME) {
				if (et == ENDINGSTARTTIME) {

					for (var i=0;i<Math.floor(Math.log10(Level)+1);i++) {
						var Number = new Sprite(18,25);
						Number.image = game.assets[img_numbers];
						Number.frame = (Level/Math.pow(10,i))%10;
						Number.moveTo(300+Math.floor(Math.log10(Level))*20-i*20,145);
						S_END.addChild(Number);
						EndLevelAry.push(Number);
					}
					game.assets[so_hai].clone().play();//音
				}
				if (et == ENDINGSTARTTIME+ENDMARGIN) {
					for (var i=0;i<Math.floor(Math.log10(WagyuCnt)+1);i++) {
						var Number = new Sprite(18,25);
						Number.image = game.assets[img_numbers];
						Number.frame = (WagyuCnt/Math.pow(10,i))%10;
						Number.moveTo(300+Math.floor(Math.log10(WagyuCnt))*20-i*20,195);
						S_END.addChild(Number);
						EndWagyuAry.push(Number);
					}		
					if (WagyuCnt ==0){
						var Number = new Sprite(18,25);
						Number.image = game.assets[img_numbers];
						Number.frame = 0;
						Number.moveTo(300,195);
						S_END.addChild(Number);	
						EndWagyuAry.push(Number);					
					}	
					game.assets[so_hai].clone().play();//音
				}
				if (et == ENDINGSTARTTIME+ENDMARGIN*2) {
					for (var i=0;i<Math.floor(Math.log10(FishCnt)+1);i++) {
						var Number = new Sprite(18,25);
						Number.image = game.assets[img_numbers];
						Number.frame = (FishCnt/Math.pow(10,i))%10;
						Number.moveTo(300+Math.floor(Math.log10(FishCnt))*20-i*20,245);
						S_END.addChild(Number);
						EndFishAry.push(Number);
					}	
					if (FishCnt ==0){
						var Number = new Sprite(18,25);
						Number.image = game.assets[img_numbers];
						Number.frame = 0;
						Number.moveTo(300,245);
						S_END.addChild(Number);		
						EndFishAry.push(Number);				
					}	
					game.assets[so_hai].clone().play();//音
				}
				if (et == ENDINGSTARTTIME+ENDMARGIN*2+RANKMARGIN) {
					FinalRank.frame = Rank;
					S_END.addChild(FinalRank);
					S_END.addChild(TweetButton);					//S_ENDにこのリトライボタン画像を貼り付ける  
					S_END.addChild(RetryButton);
					game.assets[so_ouchi].clone().play();//音
				}
			}

		}
		
	};
	game.start();
};