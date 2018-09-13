var leftDiapo = "359px";
var opacitCote = 0.5;
var vitesseTransla = 500;
var vitesseFade = 300;
var NB_PRODUIT = 13;
var DEB_PLAGE_POTS = 1;
var FIN_PLAGE_POTS = 13;

var initImage = {
	position: "absolute",
	top: "144px",
	width: "600px",
	height: "548px",
	opacity: 1,
	left: leftDiapo,
	display: "none"
};

var initAchat = {
	display: "none"
};

var imageFondMenuAchat = {
	background : "url('images/categorieAchat.png') no-repeat"
};

var imageFondMenuAchatSelect = {
	background : "url('images/categorieAchatSelect.png') no-repeat"
};

var displayNone = {
	display: "none"
};

var displayBlock = {
	display: "block"
};

creatLotPots = new Array(12);

produit = new Array(NB_PRODUIT);
produit[0] = Array("Packaging","Pckg",0,21.33);
produit[1] = Array("Pot: Balsamique","PotBals",0,4.50);
produit[2] = Array("Pot: Thé ","PotThe",0,4.50);
produit[3] = Array("Pot: Framboise","PotFram",0,4.50);
produit[4] = Array("Pot: Mûre","PotMure",0,4.50);
produit[5] = Array("Pot: Groseille","PotGros",0,4.50);
produit[6] = Array("Pot: Thé & Herbes de Provence","PotT&Hb",0,4.50);
produit[7] = Array("Pot: Curcuma","PotCurc",0,4.50);
produit[8] = Array("Pot: Curaçao","PotCura",0,5.50);
produit[9] = Array("Pot: Curry","PotCurr",0,4.50);
produit[10] = Array("Pot: Paprika","PotPapr",0,4.60);
produit[11] = Array("Pot: Curcuma & Cassis","PotC&Ca",0,4.50);
produit[12] = Array("Pot: Grillotte","PotGril",0,4.50);

$(document).ready(function(){
$("#contenuAchat2").css(initAchat);
$("#contenuAchat3").css(initAchat);
$("#menu1").css(imageFondMenuAchatSelect);
$("#image1").css(initImage);
$("#image2").css(initImage);
$("#image3").css(initImage);
$("#image4").css(initImage);
$("#image5").css(initImage);
$("#image6").css(initImage);
$("#logoAccueil").css(initImage);
$("#texteLogoAccueil").css(initImage);
$("#logoAccueil").fadeIn(3000);
$("#texteLogoAccueil").fadeIn(3000);
$("#titre1").css(initImage);
$("#titre2").css(initImage);
$("#titre3").css(initImage);
$("#titre4").css(initImage);
$("#titre5").css(initImage);
$("#titre6").css(initImage);
$("#texte1").css(initImage);
$("#texte2").css(initImage);
$("#texte3").css(initImage);
$("#texte4").css(initImage);
$("#texte5").css(initImage);
$("#texte6").css(initImage);
$("#menuPrincipal1 a.image1").hoverIntent(makeTall1,makeShort1);
$("#menuPrincipal2 a.image2").hoverIntent(makeTall2,makeShort2);
$("#menuPrincipal3 a.image3").hoverIntent(makeTall3,makeShort3);
$("#menuPrincipal4 a.image4").hoverIntent(makeTall4,makeShort4);
$("#menuPrincipal5 a.image5").hoverIntent(makeTall5,makeShort5);
$("#menuPrincipal6 a.image6").hoverIntent(makeTall6,makeShort6);
/*--------------------------------------------------------
			Gestion contact et complément
--------------------------------------------------------*/
$("#divButtonCetC1 a.nousEcrire").click(function(){
	$("#divContenuCetC2").css(displayNone);
	$("#divContenuCetC3").css(displayNone);
	$("#divContenuCetC5").css(displayNone);
	if(document.getElementById('divContenuCetC1').style.display != "block"){
		$("#divContenuCetC1").css(displayBlock);
	}
	else {
		$("#divContenuCetC1").css(displayNone);
	}
})
	
$("#divButtonCetC2 a.nousTrouver").click(function(){
	$("#divContenuCetC1").css(displayNone);
	$("#divContenuCetC3").css(displayNone);
	$("#divContenuCetC5").css(displayNone);
	if(document.getElementById('divContenuCetC2').style.display != "block"){
		$("#divContenuCetC2").css(displayBlock);
	}
	else {
		$("#divContenuCetC2").css(displayNone);
	}
})
	
$("#divButtonCetC3 a.brevet").click(function(){
	$("#divContenuCetC1").css(displayNone);
	$("#divContenuCetC2").css(displayNone);
	$("#divContenuCetC5").css(displayNone);
	if(document.getElementById('divContenuCetC3').style.display != "block"){
		$("#divContenuCetC3").css(displayBlock);
	}
	else {
		$("#divContenuCetC3").css(displayNone);
	}
})
	
$("#divButtonCetC4 a.notice").click(function(){
	$("#divContenuCetC1").css(displayNone);
	$("#divContenuCetC2").css(displayNone);
	$("#divContenuCetC3").css(displayNone);
	$("#divContenuCetC5").css(displayNone);
})
	
$("#divButtonCetC5 a.webDesign").click(function(){
	$("#divContenuCetC1").css(displayNone);
	$("#divContenuCetC2").css(displayNone);
	$("#divContenuCetC3").css(displayNone);
	if(document.getElementById('divContenuCetC5').style.display != "block"){
		$("#divContenuCetC5").css(displayBlock);
	}
	else {
		$("#divContenuCetC5").css(displayNone);
	}
})
/*---------------------------------------------------------------------
			Gestion Achat
--------------------------------------------*/


/*---------------------------------------------------------------------
			Action menu Achat
--------------------------------------------*/
		$("#menu1 a.achat1").click(function(){
			$("#menu1").css(imageFondMenuAchatSelect);
			$("#menu2").css(imageFondMenuAchat);
			$("#menu3").css(imageFondMenuAchat);
			$("#contenuAchat2").fadeOut(0);
			$("#contenuAchat3").fadeOut(0);
			$("#contenuAchat1").fadeIn(vitesseTransla);
		});
		
		$("#menu2 a.achat2").click(function(){
			$("#menu1").css(imageFondMenuAchat);
			$("#menu2").css(imageFondMenuAchatSelect);
			$("#menu3").css(imageFondMenuAchat);

			$("#contenuAchat3").fadeOut(0);
			$("#contenuAchat1").fadeOut(0);
			$("#contenuAchat2").fadeIn(vitesseTransla);
		});
		
		$("#menu3 a.achat3").click(function(){
			$("#menu1").css(imageFondMenuAchat);
			$("#menu2").css(imageFondMenuAchat);
			$("#menu3").css(imageFondMenuAchatSelect);
			$("#contenuAchat2").fadeOut(0);
			$("#contenuAchat1").fadeOut(0);
			$("#contenuAchat3").fadeIn(vitesseTransla);
		});


/*-----------------------------------------------------------------------------
			Action des boutons au survol
-----------------------------------------------------*/
	function makeTall1(){
		if(document.getElementById('image2').style.opacity == 1){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image3').style.opacity == 1){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image4').style.opacity == 1){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image5').style.opacity == 1){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image6').style.opacity == 1){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image1').style.left == leftDiapo){
			$("#image1").fadeIn(vitesseTransla);
			$("#titre1").fadeIn(vitesseTransla);
		}
		$("#texteLogoAccueil").fadeOut(vitesseTransla);
		$("#texte2").fadeOut(vitesseTransla);
		$("#texte3").fadeOut(vitesseTransla);
		$("#texte4").fadeOut(vitesseTransla);
		$("#texte5").fadeOut(vitesseTransla);
		$("#texte6").fadeOut(vitesseTransla);
		return false;
	};
/*-----------------------------------------------------------------------------*/
	function makeTall2(){
		if(document.getElementById('image1').style.opacity == 1){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image3').style.opacity == 1){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image4').style.opacity == 1){
			$("#image4").fadeOut(vitesseTransla);
			$("#image4").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image5').style.opacity == 1){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image6').style.opacity == 1){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image2').style.left == leftDiapo){
			$("#titre2").fadeIn(vitesseTransla);
			$("#image2").fadeIn(vitesseTransla);
		}
		$("#texteLogoAccueil").fadeOut(vitesseTransla);
		$("#texte1").fadeOut(vitesseTransla);
		$("#texte3").fadeOut(vitesseTransla);
		$("#texte4").fadeOut(vitesseTransla);
		$("#texte5").fadeOut(vitesseTransla);
		$("#texte6").fadeOut(vitesseTransla);
		 return false; 
	};
/*-----------------------------------------------------------------------------*/	
	function makeTall3(){
		if(document.getElementById('image1').style.opacity == 1){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
			}
		if(document.getElementById('image2').style.opacity == 1){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
			}
		if(document.getElementById('image4').style.opacity == 1){
			$("#image4").fadeOut(vitesseTransla);
			$("#image4").fadeOut(vitesseTransla);
			}
		if(document.getElementById('image5').style.opacity == 1){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image6').style.opacity == 1){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image3').style.left == leftDiapo){
			$("#image3").fadeIn(vitesseTransla);
			$("#titre3").fadeIn(vitesseTransla);
		}
		$("#texteLogoAccueil").fadeOut(vitesseTransla);
		$("#texte1").fadeOut(vitesseTransla);
		$("#texte2").fadeOut(vitesseTransla);
		$("#texte4").fadeOut(vitesseTransla);
		$("#texte5").fadeOut(vitesseTransla);
		$("#texte6").fadeOut(vitesseTransla);
		return false;
	};
/*-----------------------------------------------------------------------------*/
	function makeTall4(){
		if(document.getElementById('image1').style.opacity == 1){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
			}
	  	if(document.getElementById('image2').style.opacity == 1){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
			}
	  	if(document.getElementById('image3').style.opacity == 1){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
			}
		if(document.getElementById('image5').style.opacity == 1){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image6').style.opacity == 1){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image4').style.left == leftDiapo){
			$("#image4").fadeIn(vitesseTransla);
			$("#titre4").fadeIn(vitesseTransla);
		}
		$("#texteLogoAccueil").fadeOut(vitesseTransla);
		$("#texte1").fadeOut(vitesseTransla);
		$("#texte2").fadeOut(vitesseTransla);
		$("#texte3").fadeOut(vitesseTransla);
		$("#texte5").fadeOut(vitesseTransla);
		$("#texte6").fadeOut(vitesseTransla);
		 return false; 
	};
/*-----------------------------------------------------------------------------*/
	function makeTall5(){
		if(document.getElementById('image1').style.opacity == 1){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
			}
	  	if(document.getElementById('image2').style.opacity == 1){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
			}
	  	if(document.getElementById('image3').style.opacity == 1){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
			}
		if(document.getElementById('image4').style.opacity == 1){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image6').style.opacity == 1){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image5').style.left == leftDiapo){
			$("#image5").fadeIn(vitesseTransla);
			$("#titre5").fadeIn(vitesseTransla);
		}
		$("#texteLogoAccueil").fadeOut(vitesseTransla);
		$("#texte1").fadeOut(vitesseTransla);
		$("#texte2").fadeOut(vitesseTransla);
		$("#texte3").fadeOut(vitesseTransla);
		$("#texte4").fadeOut(vitesseTransla);
		$("#texte6").fadeOut(vitesseTransla);
		 return false; 
	};
/*-----------------------------------------------------------------------------*/	
	function makeTall6(){
		if(document.getElementById('image1').style.opacity == 1){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
			}
	  	if(document.getElementById('image2').style.opacity == 1){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
			}
	  	if(document.getElementById('image3').style.opacity == 1){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
			}
		if(document.getElementById('image4').style.opacity == 1){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image6').style.opacity == 1){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		if(document.getElementById('image6').style.left == leftDiapo){
			$("#image6").fadeIn(vitesseTransla);
			$("#titre6").fadeIn(vitesseTransla);
		}
		$("#texteLogoAccueil").fadeOut(vitesseTransla);
		$("#texte1").fadeOut(vitesseTransla);
		$("#texte2").fadeOut(vitesseTransla);
		$("#texte3").fadeOut(vitesseTransla);
		$("#texte4").fadeOut(vitesseTransla);
		$("#texte5").fadeOut(vitesseTransla);
		 return false; 
	};
	
/*-----------------------------------------------------
		Action des boutons au départ de la souris
-----------------------------------------------------*/	
	
	function makeShort1(){
		if(document.getElementById('image6').style.left == leftDiapo){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		else{
			$("#texte6").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image5').style.left == leftDiapo){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		else{
			$("#texte5").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image4').style.left == leftDiapo){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		else{
			$("#texte4").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image3').style.left == leftDiapo){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		else{
			$("#texte3").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image2').style.left == leftDiapo){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
		}
		else{
			$("#texte2").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image1').style.left == leftDiapo){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
		}
		else{
			$("#texte1").fadeIn(vitesseTransla);
		}
		if(document.getElementById('logoAccueil').style.display != "none") {
			$("#texteLogoAccueil").fadeIn(vitesseTransla);
		}
		return false;
	};	
/*-----------------------------------------------------------------------------*/	
	function makeShort2(){
		if(document.getElementById('image6').style.left == leftDiapo){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		else{
			$("#texte6").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image5').style.left == leftDiapo){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		else{
			$("#texte5").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image4').style.left == leftDiapo){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		else{
			$("#texte4").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image3').style.left == leftDiapo){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		else{
			$("#texte3").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image2').style.left == leftDiapo){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
		}
		else{
			$("#texte2").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image1').style.left == leftDiapo){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);

		}
		else{
			$("#texte1").fadeIn(vitesseTransla);
		}
		if(document.getElementById('logoAccueil').style.display != "none") {
			$("#texteLogoAccueil").fadeIn(vitesseTransla);
		}
		return false;
	};
/*-----------------------------------------------------------------------------*/		
	function makeShort3(){
		if(document.getElementById('image6').style.left == leftDiapo){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		else{
			$("#texte6").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image5').style.left == leftDiapo){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		else{
			$("#texte5").fadeIn(vitesseTransla);
		}
	
		if(document.getElementById('image4').style.left == leftDiapo){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		else{
			$("#texte4").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image3').style.left == leftDiapo){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		else{
			$("#texte3").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image2').style.left == leftDiapo){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
		}
		else{
			$("#texte2").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image1').style.left == leftDiapo){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
		}
		else{
			$("#texte1").fadeIn(vitesseTransla);
		}
		if(document.getElementById('logoAccueil').style.display != "none") {
			$("#texteLogoAccueil").fadeIn(vitesseTransla);
		}
		return false;
	};
/*-----------------------------------------------------------------------------*/		
	function makeShort4(){
		if(document.getElementById('image6').style.left == leftDiapo){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		else{
			$("#texte6").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image5').style.left == leftDiapo){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		else{
			$("#texte5").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image4').style.left == leftDiapo){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		else{
			$("#texte4").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image3').style.left == leftDiapo){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		else{
			$("#texte3").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image2').style.left == leftDiapo){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
		}
		else{
			$("#texte2").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image1').style.left == leftDiapo){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
		}
		else{
			$("#texte1").fadeIn(vitesseTransla);
		}
		if(document.getElementById('logoAccueil').style.display != "none") {
			$("#texteLogoAccueil").fadeIn(vitesseTransla);
		}
		return false;
	};
/*-----------------------------------------------------------------------------*/		
	function makeShort5(){
		if(document.getElementById('image6').style.left == leftDiapo){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		else{
			$("#texte6").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image5').style.left == leftDiapo){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		else{
			$("#texte5").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image4').style.left == leftDiapo){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		else{
			$("#texte4").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image3').style.left == leftDiapo){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		else{
			$("#texte3").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image2').style.left == leftDiapo){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
		}
		else{
			$("#texte2").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image1').style.left == leftDiapo){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
		}
		else{
			$("#texte1").fadeIn(vitesseTransla);
		}
		if(document.getElementById('logoAccueil').style.display != "none") {
			$("#texteLogoAccueil").fadeIn(vitesseTransla);
		}
		return false;
	};
/*-----------------------------------------------------------------------------*/
	function makeShort6(){
		if(document.getElementById('image6').style.left == leftDiapo){
			$("#image6").fadeOut(vitesseTransla);
			$("#titre6").fadeOut(vitesseTransla);
		}
		else{
			$("#texte6").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image5').style.left == leftDiapo){
			$("#image5").fadeOut(vitesseTransla);
			$("#titre5").fadeOut(vitesseTransla);
		}
		else{
			$("#texte5").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image4').style.left == leftDiapo){
			$("#image4").fadeOut(vitesseTransla);
			$("#titre4").fadeOut(vitesseTransla);
		}
		else{
			$("#texte4").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image3').style.left == leftDiapo){
			$("#image3").fadeOut(vitesseTransla);
			$("#titre3").fadeOut(vitesseTransla);
		}
		else{
			$("#texte3").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image2').style.left == leftDiapo){
			$("#image2").fadeOut(vitesseTransla);
			$("#titre2").fadeOut(vitesseTransla);
		}
		else{
			$("#texte2").fadeIn(vitesseTransla);
		}
		if(document.getElementById('image1').style.left == leftDiapo){
			$("#image1").fadeOut(vitesseTransla);
			$("#titre1").fadeOut(vitesseTransla);
		}
		else{
			$("#texte1").fadeIn(vitesseTransla);
		}
		if(document.getElementById('logoAccueil').style.display != "none") {
			$("#texteLogoAccueil").fadeIn(vitesseTransla);
		}
		return false;
	};
/*-----------------------------------------------------
			Action des boutons au clic
-----------------------------------------------------*/
	$("#menuPrincipal1 a.image1").click(function(){
		if(document.getElementById('image2').style.left == "-400px"){
			$("#image2").css(initImage);
			$("#titre2").css(initImage);
			$("#texte2").css(initImage);
		}
		if(document.getElementById('image3').style.left == "-400px"){
			$("#image3").css(initImage);
			$("#titre3").css(initImage);
			$("#texte3").css(initImage);
		}
		if(document.getElementById('image4').style.left == "-400px"){
			$("#image4").css(initImage);
			$("#titre4").css(initImage);
			$("#texte4").css(initImage);
		}
		if(document.getElementById('image5').style.left == "-400px"){
			$("#image5").css(initImage);
			$("#titre5").css(initImage);
			$("#texte5").css(initImage);
		}
		if(document.getElementById('image6').style.left == "-400px"){
			$("#image6").css(initImage);
			$("#titre6").css(initImage);
			$("#texte6").css(initImage);
		}
		$("#logoAccueil").css(displayNone);
		$("#texteLogoAccueil").css(displayNone);
		$("#image1").animate({ left:"-400px", opacity:opacitCote}, vitesseTransla);
		$("#titre1").fadeOut(vitesseTransla);
		$("#texte1").fadeIn(vitesseTransla);
		return false;
	});
/*-----------------------------------------------------------------------------*/	
	$("#menuPrincipal2 a.image2").click(function(){
			if(document.getElementById('image1').style.left == "-400px"){
			$("#image1").css(initImage);
			$("#titre1").css(initImage);
			$("#texte1").css(initImage);
		}
			if(document.getElementById('image3').style.left == "-400px"){
			$("#image3").css(initImage);
			$("#titre3").css(initImage);
			$("#texte3").css(initImage);
		}
			if(document.getElementById('image4').style.left == "-400px"){
			$("#image4").css(initImage);
			$("#titre4").css(initImage);
			$("#texte4").css(initImage);
		}
			if(document.getElementById('image5').style.left == "-400px"){
			$("#image5").css(initImage);
			$("#titre5").css(initImage);
			$("#texte5").css(initImage);
		}
			if(document.getElementById('image6').style.left == "-400px"){
			$("#image6").css(initImage);
			$("#titre6").css(initImage);
			$("#texte6").css(initImage);
		}
		$("#logoAccueil").css(displayNone);
		$("#texteLogoAccueil").css(displayNone);
		$("#image2").animate({ left:"-400px", opacity:opacitCote}, vitesseTransla);
		$("#titre2").fadeOut(vitesseTransla);
		$("#texte2").fadeIn(vitesseTransla);
		 return false; 
	});
/*-----------------------------------------------------------------------------*/	
	$("#menuPrincipal3 a.image3").click(function(){
				if(document.getElementById('image1').style.left == "-400px"){
			$("#image1").css(initImage);
			$("#titre1").css(initImage);
			$("#texte1").css(initImage);
		}
			if(document.getElementById('image2').style.left == "-400px"){
			$("#image2").css(initImage);
			$("#titre2").css(initImage);
			$("#texte2").css(initImage);
		}
			if(document.getElementById('image4').style.left == "-400px"){
			$("#image4").css(initImage);
			$("#titre4").css(initImage);
			$("#texte4").css(initImage);
		}
			if(document.getElementById('image5').style.left == "-400px"){
			$("#image5").css(initImage);
			$("#titre5").css(initImage);
			$("#texte5").css(initImage);
		}
			if(document.getElementById('image6').style.left == "-400px"){
			$("#image6").css(initImage);
			$("#titre6").css(initImage);
			$("#texte6").css(initImage);
		}
		$("#logoAccueil").css(displayNone);
		$("#texteLogoAccueil").css(displayNone);
		$("#image3").animate({ left:"-400px", opacity:opacitCote}, vitesseTransla);
		$("#titre3").fadeOut(vitesseTransla);
		$("#texte3").fadeIn(vitesseTransla);
		return false;
	});
/*-----------------------------------------------------------------------------*/	
	$("#menuPrincipal4 a.image4").click(function(){
			if(document.getElementById('image1').style.left == "-400px"){
			$("#image1").css(initImage);
			$("#titre1").css(initImage);
			$("#texte1").css(initImage);
		}
			if(document.getElementById('image2').style.left == "-400px"){
			$("#image2").css(initImage);
			$("#titre2").css(initImage);
			$("#texte2").css(initImage);
		}
			if(document.getElementById('image3').style.left == "-400px"){
			$("#image3").css(initImage);
			$("#titre3").css(initImage);
			$("#texte3").css(initImage);
		}
			if(document.getElementById('image5').style.left == "-400px"){
			$("#image5").css(initImage);
			$("#titre5").css(initImage);
			$("#texte5").css(initImage);
		}
			if(document.getElementById('image6').style.left == "-400px"){
			$("#image6").css(initImage);
			$("#titre6").css(initImage);
			$("#texte6").css(initImage);
		}
		$("#logoAccueil").css(displayNone);
		$("#texteLogoAccueil").css(displayNone);
		$("#image4").animate({ left:"-400px", opacity:opacitCote}, vitesseTransla);
		$("#titre4").fadeOut(vitesseTransla);
		$("#texte4").fadeIn(vitesseTransla);
		 return false; 
	});
/*-----------------------------------------------------------------------------*/
		$("#menuPrincipal5 a.image5").click(function(){
				if(document.getElementById('image1').style.left == "-400px"){
			$("#image1").css(initImage);
			$("#titre1").css(initImage);
			$("#texte1").css(initImage);
		}
			if(document.getElementById('image2').style.left == "-400px"){
			$("#image2").css(initImage);
			$("#titre2").css(initImage);
			$("#texte2").css(initImage);
		}
			if(document.getElementById('image3').style.left == "-400px"){
			$("#image3").css(initImage);
			$("#titre3").css(initImage);
			$("#texte3").css(initImage);
		}
			if(document.getElementById('image4').style.left == "-400px"){
			$("#image4").css(initImage);
			$("#titre4").css(initImage);
			$("#texte4").css(initImage);
		}
			if(document.getElementById('image6').style.left == "-400px"){
			$("#image6").css(initImage);
			$("#titre6").css(initImage);
			$("#texte6").css(initImage);
		}
		$("#logoAccueil").css(displayNone);
		$("#texteLogoAccueil").css(displayNone);
		$("#image5").animate({ left:"-400px", opacity:opacitCote}, vitesseTransla);
		$("#titre5").fadeOut(vitesseTransla);
		$("#texte5").fadeIn(vitesseTransla);
		return false;
	});
/*-----------------------------------------------------------------------------*/	
		$("#menuPrincipal6 a.image6").click(function(){
				if(document.getElementById('image1').style.left == "-400px"){
			$("#image1").css(initImage);
			$("#titre1").css(initImage);
			$("#texte1").css(initImage);
		}
			if(document.getElementById('image2').style.left == "-400px"){
			$("#image2").css(initImage);
			$("#titre2").css(initImage);
			$("#texte2").css(initImage);
		}
			if(document.getElementById('image3').style.left == "-400px"){
			$("#image3").css(initImage);
			$("#titre3").css(initImage);
			$("#texte3").css(initImage);
		}
			if(document.getElementById('image4').style.left == "-400px"){
			$("#image4").css(initImage);
			$("#titre4").css(initImage);
			$("#texte4").css(initImage);
		}
			if(document.getElementById('image5').style.left == "-400px"){
			$("#image5").css(initImage);
			$("#titre5").css(initImage);
			$("#texte5").css(initImage);
		}
		$("#logoAccueil").css(displayNone);
		$("#texteLogoAccueil").css(displayNone);
		$("#image6").animate({ left:"-400px", opacity:opacitCote}, vitesseTransla);
		$("#titre6").fadeOut(vitesseTransla);
		$("#texte6").fadeIn(vitesseTransla);
		return false;
	});
 });
 
function setInputNb(num){
	var nbPots = 0;
//	var nbPipettes = 0;
	
	if(document.getElementById("inputNb" + num).value < 0) {
		document.getElementById("inputNb" + num).value = 0;
	}
	
	creationFonct = Array(FIN_PLAGE_POTS - DEB_PLAGE_POTS);
	for(i=1;i<=(FIN_PLAGE_POTS - DEB_PLAGE_POTS);i++){
		qt = parseInt(document.getElementById("inputNb" + i).value);
		nbPots += qt;
		nbPots += produit[i][2];
		if(creatLotPots[i-1] != qt){
			creatLotPots[i-1] = qt;
		}
	}
	
	compteurPots.innerHTML = nbPots + "/4 Pots minimum";

	if((nbPots >= 4)){
		document.getElementById("ajouterPanier").disabled = false;
	}
	else {
		document.getElementById("ajouterPanier").disabled = true;
	}
};
/*
function setInputNbPipette(num){
 	var nbPipettes = 0;
	var nbPots = 0;
	
	if(document.getElementById("inputNb" + num).value < 0) {
		document.getElementById("inputNb" + num).value = 0;
	}
	
	for(i=1;i<=12;i++){
		nbPipettes = nbPipettes + parseInt(document.getElementById("inputNbPipette" + i).value);
		nbPots = nbPots + parseInt(document.getElementById("inputNb" + i).value);
	}
	if(nbPipettes > 3) {
		var ancienValeurInputCourant = parseInt(document.getElementById("inputNbPipette" + num).value);
		document.getElementById("inputNbPipette" + num).value = ancienValeurInputCourant - (nbPipettes - 3);
		nbPipettes = 3;
	}
	compteurPipettes.innerHTML = nbPipettes + "/3 Pipettes";
	
	if((nbPots == 6) && (nbPipettes == 3)){
		document.getElementById("ajouterPanier").disabled = false;
	}
	else {
		document.getElementById("ajouterPanier").disabled = true;
	}
};
*/
function enleverQuantiteProduit(l,qt) {
	produit[l][2] = produit[l][2] - qt;
	actualiserPanier();
		//mise a jour du compteur
		nbPots = 0;
	for(i=1;i<=(FIN_PLAGE_POTS - DEB_PLAGE_POTS);i++){
		qt = parseInt(document.getElementById("inputNb" + i).value);
		nbPots += qt;
		nbPots += produit[i][2];
	}

	compteurPots.innerHTML = nbPots + "/4 Pots minimum";
};

function ajouterQuantiteProduit(m,qt) {
	produit[m][2] = produit[m][2] + qt;
	actualiserPanier();
};

function ajouterUnLotDePots(){
	for(j=0;j<=(FIN_PLAGE_POTS - DEB_PLAGE_POTS) - 1;j++){
		ajouterQuantiteProduit(j+1,creatLotPots[j]);
		document.getElementById("inputNb" + (j+1)).value = 0;
		creatLotPots[j] = 0;
	}
	document.getElementById("ajouterPanier").disabled = true;
}

function actualiserPanier(){
	tableau = "<table border=\"3\" rules=\"all\" width=\"95%\"><tbody><tr><th>Libelle</th><th>Qte</th><th>Prix</th><th>S</th></tr>";
	prixTotal = 0;
	nbPots = 0;
	for(i=0;i<=(NB_PRODUIT - 1);i++){
		if(produit[i][2] != 0){
			tableau += "<tr><td>"+produit[i][1]+"</td><td>"+produit[i][2]+"</td><td>"+produit[i][3]+"&euro; </td><td><a OnClick=\"enleverQuantiteProduit("+i+",1);\" href=\"#\"><img src=\"images/moins.png\" /></a></td></tr>";
			if(i>=DEB_PLAGE_POTS && i<= FIN_PLAGE_POTS){
				nbPots += produit[i][2];
			}
		}
		prixTotal += produit[i][2] * produit[i][3];
	}
	tva = Math.round(prixTotal * 5.5) / 100;
	prixTotal = Math.round(prixTotal * 100) / 100;
	prixTTC = Math.round((tva + prixTotal) * 100) / 100;
	tableau += "</tbody></table><br><table border=\"3\" rules=\"rows\" width=\"95%\"><thead><tr><td>Prix</td><td></td><td align=\"right\">"+prixTotal+"&euro;</td><td></td></tr></thead>";
	tableau += "<tbody><tr><td>TVA</td><td>5,5%</td><td align=\"right\">"+tva+"&euro;</td><td></td></tr>";
	tableau += "<tr><td>PrixTTC</td><td></td><td align=\"right\">"+ prixTTC +"&euro;</td><td></td></tr>";
	tableau += "</tbody></table><br>";
	
	if(nbPots < 4 && nbPots != 0){
		tableau += "<center>";
		tableau += "<input OnClick=\"alert('Vous ne pouvez pas command&eacute;e moins de 4 pots')\" alt=\"Effectuez vos paiements via PayPal : une solution rapide, gratuite et sécurisée\" name=\"submit\" src=\"https://www.paypal.com/fr_FR/FR/i/btn/btn_buynow_LG.gif\" type=\"image\" /><img src=\"https://www.paypal.com/fr_FR/i/scr/pixel.gif\" border=\"0\" alt=\"\" width=\"1\" height=\"1\" />";
		tableau += "</center>";
	}
	else {
	//	tableau += "<center><form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">";
		tableau += "<center><form action=\"http://peintures-de-vinaigre.com/confirmation.php\" method=\"post\">";
		for(r=0;r<=NB_PRODUIT - 1;r++){
			tableau += "<input name=\"qteProd_"+ r +"\" type=\"hidden\" value=\""+ produit[r][2] +"\" />";
		}
		
		tableau += "<input alt=\"Effectuez vos paiements via PayPal : une solution rapide, gratuite et sécurisée\" name=\"submit\" src=\"https://www.paypal.com/fr_FR/FR/i/btn/btn_buynow_LG.gif\" type=\"image\" /><img src=\"https://www.paypal.com/fr_FR/i/scr/pixel.gif\" border=\"0\" alt=\"\" width=\"1\" height=\"1\" />";
		tableau += "</form></center>";
	}
	panier.innerHTML = tableau;
	
};
