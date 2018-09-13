/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'highslide/graphics/';
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.75;
hs.align = 'center';
hs.captionEval = 'this.a.title';
hs.captionOverlay.position = 'below';


// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		className: 'large-dark',
		opacity: 0.6,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -15,
		hideOnMouseOut: true
	}
});

// French language strings
hs.lang = {
	cssDirection: 'ltr',
	loadingText: 'Chargement...',
	loadingTitle: 'Cliquer pour annuler',
	focusTitle: 'Cliquer pour amener au premier plan',
	fullExpandTitle: 'Afficher à la taille réelle',
	creditsText: /*'Propulsé par <i>Highslide JS</i>'*/'',
	creditsTitle: 'Site Web de Highslide JS',
	previousText: 'Précédente',
	nextText: 'Suivante',
	moveText: 'Déplacer',
	closeText: 'Fermer',
	closeTitle: 'Fermer (esc ou Échappement)',
	resizeTitle: 'Redimensionner',
	playText: 'Lancer',
	playTitle: 'Lancer le diaporama (barre d\'espace)',
	pauseText: 'Pause',
	pauseTitle: 'Suspendre le diaporama (barre d\'espace)',
	previousTitle: 'Précédente (flèche gauche)',
	nextTitle: 'Suivante (flèche droite)',
	moveTitle: 'Déplacer',
	fullExpandText: 'Taille réelle',
	number: 'Image %1 sur %2',
	restoreTitle: 'Cliquer pour fermer l\'image, cliquer et faire glisser pour déplacer, utiliser les touches flèches droite et gauche pour suivant et précédent.'
};

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	transitions: ['expand', 'crossfade']
};
