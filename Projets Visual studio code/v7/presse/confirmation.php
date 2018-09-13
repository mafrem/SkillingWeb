<center>
<?php
	$NB_PRODUIT = 13;

	$prix[0] = 21.33;
	$prix[1] = 4.50;
	$prix[2] = 4.50;
	$prix[3] = 4.50;
	$prix[4] = 4.50;
	$prix[5] = 4.50;
	$prix[6] = 4.50;
	$prix[7] = 4.50;
	$prix[8] = 5.50;
	$prix[9] = 4.50;
	$prix[10] = 4.60;
	$prix[11] = 4.50;
	$prix[12] = 4.50;
	
	$nom[0] = "Packaging";
	$nom[1] = "Pot: Balsamique";
	$nom[2] = "Pot: Thé";
	$nom[3] = "Pot: Framboise";
	$nom[4] = "Pot: Mûre";
	$nom[5] = "Pot: Groseille";
	$nom[6] = "Pot: Thé & Herbes de Provence";
	$nom[7] = "Pot: Curcuma";
	$nom[8] = "Pot: Curaçao";
	$nom[9] = "Pot: Curry";
	$nom[10] = "Pot: Paprika";
	$nom[11] = "Pot: Curcuma & Cassis";
	$nom[12] = "Pot: Grillotte";
	
	$tableau = '<table border="3" rules="rows" width="600px"><tbody>';
	$prixTotal = 0;
	
	for($i=0;$i<= $NB_PRODUIT -1;$i++){
		$qteProd = "qteProd_" . $i;
		$qte[$i] = 0 + $_POST[$qteProd];
	
		if($qte[$i] != 0){
			$prixTotalEnCour = $qte[$i] * $prix[$i];
			$prixTotalEnCour = number_format($prixTotalEnCour,2);
			$tableau = $tableau . '<tr><td>'.$nom[$i].'</td><td>'.$qte[$i].' x </td><td>'.$prix[$i].'&euro; </td><td align="right">'. $prixTotalEnCour .' &euro;</td></tr>';
			$prixTotal = $prixTotal + $prixTotalEnCour;
		}
	}
	$tva = $prixTotal * 5.5 / 100;
	$tva = number_format($tva,2);
	$prixClient = $tva + $prixTotal + 8;
	$prixClient = number_format($prixClient,2);
	$tableau = $tableau . '<tr><td>TVA (5.5%)</td><td></td><td></td><td align="right">' . $tva . ' &euro;</td></tr>';
	$tableau = $tableau . '<tr><td>Frais de port</td><td></td><td></td><td align="right">8.00 &euro;</td></tr>';
	$tableau = $tableau . '<tr><td>PrixTTC</td><td></td><td></td><td align="right">' . $prixClient . ' &euro;</td></tr>';
	$tableau = $tableau . '</tbody></table><br><br>';
	echo $tableau;
?>

<script type='text/javascript'>
//setTimeout('window.location.replace("http://www.developpez.com")',5000);
</script>
<?php 
	
	$id_client = mt_rand(0,99999);
	$nomFichier = 'commande/' . $id_client . '.txt';
	
	while(file_exists($nomFichier)){
        $id_client = mt_rand(0,99999);
		$nomFichier = 'commande/' . $id_client . '.txt';
	}
	
	$Mailcommande = fopen($nomFichier, 'a+');
	fseek($Mailcommande,0);
	fputs($Mailcommande, $tableau);
	fclose($Mailcommande);
	
	$boutonPaypal = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post">';
	$boutonPaypal = $boutonPaypal . '<input name="item_name" type="hidden" value="Commande Trait Gourmand" />';
	$boutonPaypal = $boutonPaypal . '<input type="hidden" value="' . $prixTotal . '" name="amount" />';
	$boutonPaypal = $boutonPaypal . '<input name="currency_code" type="hidden" value="EUR" />';
	$boutonPaypal = $boutonPaypal . '<input name="shipping" type="hidden" value="8.00" />';
	$boutonPaypal = $boutonPaypal . '<input name="tax" type="hidden" value="' . $tva . '" />';
	$boutonPaypal = $boutonPaypal . '<input name="return" type="hidden" value="http://www.peintures-de-vinaigre.com/traitementCommande.php?id=' . $id_client . '" />';
	$boutonPaypal = $boutonPaypal . '<input name="cancel_return" type="hidden" value="http://www.peintures-de-vinaigre.com" />';
	$boutonPaypal = $boutonPaypal . '<input name="notify_url" type="hidden" value="http://www.peintures-de-vinaigre.com" />';
	$boutonPaypal = $boutonPaypal . '<input name="cmd" type="hidden" value="_xclick" />';
	$boutonPaypal = $boutonPaypal . '<input name="business" type="hidden" value="traitgourmand@gmail.com" />';
	$boutonPaypal = $boutonPaypal . '<input name="lc" type="hidden" value="FR" />';
	$boutonPaypal = $boutonPaypal . '<input name="bn" type="hidden" value="PP-BuyNowBF" />';
	$boutonPaypal = $boutonPaypal . '<input name="custom" type="hidden" value="' . $id_client . '" />';
	$boutonPaypal = $boutonPaypal . '<input onclick="alert('lalala');" alt="Effectuez vos paiements via PayPal : une solution rapide, gratuite et sécurisée" name="submit" src="https://www.paypal.com/fr_FR/FR/i/btn/btn_buynow_LG.gif" type="image" /><img src="https://www.paypal.com/fr_FR/i/scr/pixel.gif" border="0" alt="" width="1" height="1" /></from>';
	
	
	echo $boutonPaypal;
?>
</center>

