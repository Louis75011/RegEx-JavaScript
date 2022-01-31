# REGEX

## Cours Udemy "Expressions Régulières : La Formation Ultime de Vincent ANDRIEU", de niveau zéro à expert.

### Sites clefs d'aide : https://regex101.com/ (moteur de recherche : online regex testeur)

#### Programmation JavaScript.

    * Notes de cours

"RegEx" est le diminutif d'expression régulière (regular expression - RE), qui est un morceau de texte qui décrit un motif (patern) de recherche.

Ces REGEX peuvent se baser sur n'importe quel langage de programmation, seule l'implémentation du code varie (sinon outil en ligne de commande UNIX, dans un tableur, dans la fonction RECHERCHER d'un éditeur de texte, sur le site Google Sheets, ou encore une application en ligne spécialisée).

Les "expressions régulières" servent dans un projet en développement à créer des contraintes de sécurité pour une meilleure gestion du site et de l'expérience utilisateur.

Il est possible par exemple d'empêcher dans un "input" de taper au clavier soit des lettres, soit des chiffres ou encore des caractères alphanumériques.

La langue française crée quelques difficultés supplémentaires à cause des lettres accentués.

Le fondateur est le mathématicien Stephen Kleene en 1956, seulement ses travaux n'ont plus grand chose à voir avec le résultat d'aujourd'hui. Depuis cette époque, il y a des étapes importantes qui vont amener à ce que l'on utilise de nos jours. Les standards sont bien fixés à partir de l'année 1997.

Divers cas d'utilisation des RegEx :
- Vérifier qu'une ligne contient un match (un élément qui concorde), elle renvoie un booléen avec un fichier filtré (+ sans rien ni avant ni après appliqué notamment à un formulaire).
- Extraire/remplacer les "matchs" par un texte statique (tous les matches remplacer par la même chose, comme un texte à plusieurs espaces à nettoyer dans les noms de fichier).
- Remodeler les matchs, dans ce cas on corrige aussi les matchs en les modifiants par ce que l'on veut (des points pour séparer les mots pour l'exemple). On peut placer des dates selon les formats américains ou/et français avec cela.

Matcher caractères littéraux et méta-caractères :
Pour échapper un caractère il faut utiliser l'anti-slash (slash inversé) suivi du caractère concerné. Vous retrouverez ainsi dans un texte toutes les parenthèses ouvrantes en tapant la chose suivante : "\(" (ou fermante ainsi "\)"). Pour trouver du texte, le pluriel espagnol es "\es\" en JavaScript.

Tous les mots du texte seront trouvés/sélectionnés :
.js let regex = \pa.ier\
.txt panier pilier palier parier

Dans "Notepad++", vous avez le mode de recherche normal mais aussi celui "expression régulière" pour obtenir le même résultat.
Idem dans "VisualStudioCode", faites une recherche ctrl+f paramètre "étoile" avec "pa.ier".