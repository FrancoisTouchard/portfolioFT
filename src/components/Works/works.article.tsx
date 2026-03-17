import React from 'react';
import { WorkProps } from './types';

export const CARROUSEL_ARTICLE: WorkProps['article'] = {
  intro: (
    <>
      <p>Lors de mon alternance chez Édifice, on m’a confié la mission de développer un carrousel multimédia devant permettre de <b>visualiser, télécharger et partager des fichiers image, audio, vidéo et pdf.</b></p>
      <p> Ce carrousel a vocation à être <b>utilisé dans plusieurs modules de l’application</b> : dans un billet de blog, un message, un devoir du cahier de textes ou un mot sur le carnet de liaison de l’élève ou encore pour consulter les fichiers et médias que les utilisateurs ont stockés dans l’espace prévu à cet effet. </p>
      <p>À noter que dans le cas de formats de fichier non compatibles avec le carrousel, les utilisateurs peuvent tout de même accéder à la ressource en téléchargeant directement le fichier.</p>
    </>
  ),
  context: (
    <>
      <p>Cette tâche consistait à <b>améliorer l’implémentation existante</b> du carrousel photo et de la visionneuse de médias. Voici ce qui existait en production au moment où j’ai démarré ce chantier :</p>
      <ul>
        <li>Un carrousel uniquement fonctionnel pour les images/photos, présentant quelques bugs visuels</li>
        <li>Une visionneuse pour les fichiers audio et vidéo, qui ne permettait de visionner qu’un seul et unique média à la fois</li>
        <li>Un renvoi sur le navigateur web pour la consultation des pdf</li>
        <li>Un composant permettant de télécharger et partager les fichiers non visionnables sur l’application</li>
      </ul>
      <p>L’enjeu du point de vue utilisateur était donc d’<b>unifier et simplifier l’expérience de consultation de médias</b> sur l’application en réunissant ces quatre composants en un seul.</p>
      <p>Du point de vue de l’ingénierie logicielle, il s’agissait de <b>moderniser et simplifier</b> la codebase en faisant appel à des librairies tierces mises à jour, ainsi que de <b>réduire la quantité de code à maintenir</b>.</p>
    </>
  ),
  steps: (
    <>
      <p>En premier lieu, il m’a fallu <b>comprendre l’implémentation existante</b>. Le principal challenge était d’identifier tous les moyens utilisés pour accéder au carrousel photo, à la visionneuse et ceux pour gérer l’ouverture des fichiers pdf. Par exemple, le module de Blog et celui du Cahier de textes utilisent une logique différente pour accéder aux ressources médias, qu’il m’a fallu comprendre, analyser et inventorier. J’ai également du comprendre comment fonctionnaient les composants du carrousel photo et de la visionneuse audio/vidéo.</p>
      <p>Ensuite, j’ai fait des recherches pour identifier une librairie tierce répondant à ma problématique. La librairie que j’ai utilisé est <i>react-native-reanimated-carrousel</i>, qui m’a permis de gagner du temps en évitant d’avoir à coder la logique de consultation circulaire de contenus typique d’un carrousel.</p>
      <p>Une fois cette solution identifiée, j’ai cherché à rendre possible l’intégration des composants utilisés pour visionner les fichiers images, audio et vidéo.</p>
      <p>Pour ce qui est des images, je n’ai pas pu réutiliser le composant existant car il s’appuyait sur une autre librairie trop contraignante à conjuguer avec la librairie. J’ai donc développé mon propre composant, intégrant notamment la possibilité de <b>zoomer/dézoomer sur l’image sans entrer en conflit avec la gestuelle de swipe du carrousel</b>.</p>
      <p>Pour les audio et vidéo, j’ai repris l’existant en bonne partie, mais j’ai eu à adapter un <b>changement logique très important</b> : l’ancien composant ne gérait qu’un seul média à la fois, là où je devais prendre en charge un nombre indéfini de contenus différents. Cette différence de fonctionnement a entrainé des complexités à résoudre quant à la gestion des états de lecture/pause des contenus. Par exemple, le carrousel ne savait pas identifier automatiquement quel contenu lire parmi ceux de la liste, et on pouvait se retrouver dans des situations où l’on lançait une vidéo dont la bande son correspondait à celle d’une autre vidéo.</p>
      <p>En ce qui concerne les fichiers pdf, il n’était plus question de les consulter via un navigateur car cela aurait fait sortir l’utilisateur du carrousel, et aussi de l’application. J’ai donc eu recours à la librairie <i>react-native-pdf</i>, préalablement identifiée, qui permettait de résoudre facilement ce souci.</p>
      <p>Je disposais à présent de composants me permettant de visionner tous les types de médias souhaités. Cependant, d’autres bugs similaires à celui évoqué sur les audio/vidéo sont apparus. Il a fallu par exemple gérer l’état de chargement des différents composant, ou encore gérer l’état de zoom/dézoom d’un contenu, rendus difficiles à contrôler en raison du fonctionnement interne de la librairie utilisée pour le carrousel.</p>
      <p>Le composant à créer ensuite était celui affichant la <b>pagination</b> que vous pouvez voir en bas de l’écran sur la vidéo de démonstration. Si la librairie prenait en charge une bonne partie du travail, j’ai du <b>programmer toutes les animations des cards</b>, pour, notamment le changement de taille et d’opacité, ainsi que le repositionnement au centre de l’écran du contenu sélectionné.</p>
      <p>Puis, j’ai procédé à la <b>gestion du mode paysage</b> pour donner aux utilisateurs la possibilité de consulter les contenus de manière plus confortable.</p>
      <p>Pour rendre l’expérience complète, j’ai implémenté les fonctionnalités de <b>téléchargement et partage des médias</b>, permettant aux utilisateurs de faire ces actions en quelques clics en faisant appel aux modales natives proposées par iOS et Android.</p>
      <p>Afin de <b>gérer les cas de fichiers impossibles à lire ou à trouver</b>, j’ai développé des empty screens associés qui permettent de télécharger le fichier si possible, ou tout simplement d’informer l’utilisateur d’une erreur lors de la récupération.</p>
      <p>Le développement terminé, j’ai pu soumettre mon travail à la personne en charge de l’analyse de qualité dans mon équipe. Son intervention a permis d’<b>identifier certains dysfonctionnements</b> sur des modèles de téléphones et des versions d’OS spécifiques. Après quelques correctifs, j’ai pu ajouter ce composant à la branche de travail utilisée pour le <b>déploiement en production</b>.</p>
    </>
  ),
  actors: (
    <>
      <p>J’ai eu l’occasion de <b>travailler avec tous les corps de métiers</b> que compte notre équipe, du designer au Quality Analyst en passant par le project manager. J’ai pu échanger avec chacun d’entre eux en suivant un processus itératif qui a conduit à l’<b>affinement des spécifications techniques et/ou des maquettes d’origine</b> lorsque c’était nécessaire.</p>
      <p>J’ai également reçu de l’aide d’un développeur mobile sénior qui m’a aiguillé sur la résolution des problèmes les plus complexes.</p>
    </>
  ),
  results: (
    <>
      <p>La <b>mise en production</b> de ce composant a eu lieu en avril 2026, il est donc un peu tôt pour mesurer les résultats.</p>
      <p>Les précédents composants servant à visionner des contenus causaient de nombreux bugs visuels et techniques. Il sera donc intéressant de <b>comparer le nombre de bugs</b> liés au carrousel remontés après cette mise en production avec le nombre de bugs liés au visionnage de contenus à N-1 pour se faire une idée du <b>gain de temps pour l’équipe</b> qui n’aura plus à résoudre ces anciens bugs.</p>
      <p>C’est également une partie de la <b>dette technique qui s’efface</b> avec ce refactoring puisque nous avons maintenant <b>un seul composant qui en remplace quatre anciens</b>.</p>
      <p>Enfin, du point de vue des utilisateurs, l’équipe support ne manquera pas de me communiquer leurs retours comme ils en ont l’habitude, je regarderai donc ces commentaires avec attention pour <b>mesurer ma capacité à avoir répondu au besoin</b>.</p>
    </>
  ),
  future: (
    <>
      <p>Une évolution de ce carrousel multimédia est d’ores et déjà prévue et devra permettre l’intégration de <b>nouveaux types de fichiers</b>, notamment ceux de la suite Office.</p>
    </>
  ),
  criticism: (
    <>
      <p>Ce projet a été <b>l’une de mes principales réalisations</b> au cours de cette alternance et m’a permis d’énormément progresser en ayant eu à refactoriser, et donc comprendre, beaucoup de code existant pour ensuite développer un nouveau composant répondant mieux au besoin de l’utilisateur.</p>
      <p>J’ai été confronté à de nombreux challenges qui m’ont conduit à devoir faire des choix techniques et à justifier des redéfinitions des spécifications et des maquettes afin de trouver les meilleurs compromis possibles. Ces moments d’échange avec les designers et le project manager ont contribué à <b>améliorer ma capacité à anticiper et gérer des impératifs techniques</b>, j’ai du justifier mes choix en expliquant clairement les contraintes auxquelles je faisais face et en proposant des solutions.</p>
      <p>Le fait d’avoir <b>orchestré le fonctionnement de plusieurs librairies tierces</b> dans un même composant a également été très formateur, j’ai notamment du patcher ces librairies pour modifier leur fonctionnement, ce que je n’avais pas eu beaucoup l’occasion de faire jusque là.</p>
      <p>Je n’ai qu’un seul regret sur ce projet, c’est de ne pas avoir eu assez de temps pour essayer de rendre le composant de pagination scrollable horizontalement. La solution que j’ai trouvé aurait été trop chronophage dans le temps imparti, mais j’ai documenté cette possibilité pour pouvoir reprendre ce sujet lors du développement d’une version ultérieure.</p>
      <p>Je suis globalement très satisfait du résultat et je pense avoir développé une solution d'une qualité supérieure à ce qui existait avant tout en ayant veillé à <b>produire un code simple, efficace et maintenable</b>.</p>
    </>
  ),
}
