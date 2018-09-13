<?php
		if (isset($_GET['id'])){
		$nomFichier = 'commande/' . $_GET['id'] . '.txt'; 
		$fichierClient = fopen($nomFichier, 'r+');
		$mail = '';
		while (!feof($fichierClient))
		{
			/*On lit la ligne courante*/
			$ligne = fgets($fichierClient);
			/*On l'affiche*/
			$mail .= $ligne;
		}
		fclose($fichierClient);
		unlink($nomFichier);
		$mon_email = "nepasrepondre@peinturedevinaigre.com";
		$son_email = "fannysud@free.fr";
		$son_email2 = "mathias.faure.31@gmail.com";
		
		
		// Headers
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$headers .= "From : <".$mon_email.">" ;
		// Sujet
		$subject = "Votre commande Trait-Gourmand";
		// Message
		$message = $mail . $_SERVER['HTTP_REFERER'] . "";
		//Destinataire
		$to = $son_email;
		$to2 = $son_email;
		// Envoie de l'email
		mail($to,$subject,$message,$headers);
		mail($to2,$subject,$message,$headers);
		?>
		<br><br><br><br><center><img src="images/chargement.gif" style="height:35px"> <br><br>Votre commande est en cours de traitement veuillez patienter.</center>
		<?php
		} else {
			echo "une erreur est survenue inopinément";
		}
?>
