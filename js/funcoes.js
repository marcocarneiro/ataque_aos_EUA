var canvas, stage, raiz;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var manifest = [
		{src:"images/arte_MApaNeWYork.png", id:"arte_MApaNeWYork"},
		{src:"images/arte_MApaNeWYork1.png", id:"arte_MApaNeWYork1"},
		{src:"images/arte_MApaNeWYork10.png", id:"arte_MApaNeWYork10"},
		{src:"images/arte_MApaNeWYork11.png", id:"arte_MApaNeWYork11"},
		{src:"images/arte_MApaNeWYork12.png", id:"arte_MApaNeWYork12"},
		{src:"images/arte_MApaNeWYork13.png", id:"arte_MApaNeWYork13"},
		{src:"images/arte_MApaNeWYork2.png", id:"arte_MApaNeWYork2"},
		{src:"images/arte_MApaNeWYork3.png", id:"arte_MApaNeWYork3"},
		{src:"images/arte_MApaNeWYork4.png", id:"arte_MApaNeWYork4"},
		{src:"images/arte_MApaNeWYork5.png", id:"arte_MApaNeWYork5"},
		{src:"images/arte_MApaNeWYork6.png", id:"arte_MApaNeWYork6"},
		{src:"images/arte_MApaNeWYork7.png", id:"arte_MApaNeWYork7"},
		{src:"images/arte_MApaNeWYork8.png", id:"arte_MApaNeWYork8"},
		{src:"images/arte_MApaNeWYork9.png", id:"arte_MApaNeWYork9"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/xaltxalt.png", id:"xaltxalt"}
	];

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	raiz = new lib.ataque_aos_EUA();

	stage = new createjs.Stage(canvas);
	stage.addChild(raiz);
	stage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", stage);
	
	stage.enableMouseOver(55);
	
	//Mc barra inicia exposta
	raiz.barra.gotoAndStop("barraExposta");
		
	//Redimensionamento do stage (canvas)
	windowResize();		
	eventos();
}





function windowResize(){
   stage.canvas.width = window.innerWidth;
   stage.canvas.height = window.innerHeight; 
   var test = (window.innerWidth/(1024))*0.75;
   raiz.scaleY = raiz.scaleX = test;
}



//Atualizar pela cor do objeto

function bgPadrao(){
	$('body').css('background-color','#E1EBEC');
	$('canvas').css('background-color','#E1EBEC');
}
function bgPreto(){
	$('body').css('background-color','#000');
	$('canvas').css('background-color','#000');
}

function eventos(){	

	var tl = raiz.barra.timeline;
	
	//rollovers	
	raiz.bt_iniciar.onMouseOver = cursorSobre;
	raiz.bt_iniciar.onMouseOut = cursorFora;
	raiz.barra.exibeBarra.onMouseOver = cursorSobre;
	raiz.barra.exibeBarra.onMouseOut = cursorFora;
	raiz.barra.exibeInfo.onMouseOver = cursorSobre;
	raiz.barra.exibeInfo.onMouseOut = cursorFora;
	raiz.barra.caixaInformacaoBarra.fecharInfoBarra.onMouseOver = cursorSobre;
	raiz.barra.caixaInformacaoBarra.fecharInfoBarra.onMouseOut = cursorFora;	
	raiz.bt_Voo_11.onMouseOver = cursorSobre;
	raiz.bt_Voo_11.onMouseOut = cursorFora;
	raiz.bt_Voo_77.onMouseOver = cursorSobre;
	raiz.bt_Voo_77.onMouseOut = cursorFora;
	raiz.bt_Voo_175.onMouseOver = cursorSobre;
	raiz.bt_Voo_175.onMouseOut = cursorFora;
	raiz.bt_Voo_93.onMouseOver = cursorSobre;
	raiz.bt_Voo_93.onMouseOut = cursorFora;
	raiz.bt_novaYork.onMouseOver = cursorSobre;
	raiz.bt_novaYork.onMouseOut = cursorFora;
	raiz.animacao_NY.playNY.onMouseOver = cursorSobre;
	raiz.animacao_NY.playNY.onMouseOut = cursorFora;
	raiz.animacao_NY.bt_inicioRaiz.onMouseOver = cursorSobre;
	raiz.animacao_NY.bt_inicioRaiz.onMouseOut = cursorFora;
	raiz.animacao_NY.bt_Play.onMouseOver = cursorSobre;
	raiz.animacao_NY.bt_Play.onMouseOut = cursorFora;
	
	
	//botoes q. dão sequancia na timeline principal (play)
	raiz.bt_iniciar.onClick = function(){
		if(tl.position == 20){
			raiz.barra.play();
		}
		raiz.play();
	};
	
	//barra de informacoes
	raiz.barra.exibeBarra.onClick = function(){
		//verifica timeline do MC barra
		if(tl.position == 20){
			raiz.barra.play();
		}else{
			raiz.barra.gotoAndPlay("desceBarra");
		}		
	};
	raiz.barra.exibeInfo.onClick = function(){
		raiz.barra.gotoAndPlay("mostraInfo");
		bgPreto();
	};
	raiz.barra.caixaInformacaoBarra.fecharInfoBarra.onClick = function(){
		raiz.barra.play();
		bgPadrao();
	};
	
	
	
	raiz.bt_Voo_11.onClick = function(){
		raiz.rotas.gotoAndPlay("voo_11");
	};
	raiz.bt_Voo_77.onClick = function(){
		raiz.rotas.gotoAndPlay("voo_77");
	};
	raiz.bt_Voo_175.onClick = function(){
		raiz.rotas.gotoAndPlay("voo_175");
	};
	raiz.bt_Voo_93.onClick = function(){
		raiz.rotas.gotoAndPlay("voo_93");
	};
	
	raiz.bt_novaYork.onClick = function(){
		raiz.gotoAndPlay("nova_york");
		raiz.animacao_NY.play();
	};
	
	raiz.animacao_NY.playNY.onClick = function(){
		raiz.animacao_NY.gotoAndPlay(0);
	};
	raiz.animacao_NY.bt_inicioRaiz.onClick = function(){
		raiz.gotoAndPlay("intro");
	};
	
	raiz.animacao_NY.bt_Play.onClick = function(){
		raiz.animacao_NY.play();
	};
	
}

function fadeInOut(grafico, tempo){
	if(grafico.alpha == 0){
		createjs.Tween.get(grafico).to({alpha:1},tempo);
	}else{
		createjs.Tween.get(grafico).to({alpha:0},tempo);
	}	
}

function cursorSobre(e){
	document.body.style.cursor='pointer';
}
function cursorFora(e){
	document.body.style.cursor='default';
}










