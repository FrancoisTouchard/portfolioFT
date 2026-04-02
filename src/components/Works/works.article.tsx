import React from 'react';

import { WorkProps } from './types';

export const CARROUSEL_ARTICLE: WorkProps['article'] = {
  intro: (
    <>
      <p>
        Lors de mon alternance chez Édifice, on m’a confié la mission de
        développer un carrousel multimédia devant permettre de{' '}
        <b>
          visualiser, télécharger et partager des fichiers image, audio, vidéo
          et pdf.
        </b>
      </p>
      <p>
        {' '}
        Ce carrousel a vocation à être{' '}
        <b>utilisé dans plusieurs modules de l’application</b> : dans un billet
        de blog, un message, un devoir du cahier de textes ou un mot sur le
        carnet de liaison de l’élève ou encore pour consulter les fichiers et
        médias que les utilisateurs ont stockés dans l’espace prévu à cet
        effet.{' '}
      </p>
      <p>
        À noter que dans le cas de formats de fichier non compatibles avec le
        carrousel, les utilisateurs peuvent tout de même accéder à la ressource
        en téléchargeant directement le fichier.
      </p>
    </>
  ),
  context: (
    <>
      <p>
        Cette tâche consistait à <b>améliorer l’implémentation existante</b> du
        carrousel photo et de la visionneuse de médias. Voici ce qui existait en
        production au moment où j’ai démarré ce chantier :
      </p>
      <ul>
        <li>
          Un carrousel uniquement fonctionnel pour les images/photos, présentant
          quelques bugs visuels
        </li>
        <li>
          Une visionneuse pour les fichiers audio et vidéo, qui ne permettait de
          visionner qu’un seul et unique média à la fois
        </li>
        <li>Un renvoi sur le navigateur web pour la consultation des pdf</li>
        <li>
          Un composant permettant de télécharger et partager les fichiers non
          visionnables sur l’application
        </li>
      </ul>
      <p>
        L’enjeu du point de vue utilisateur était donc d’
        <b>unifier et simplifier l’expérience de consultation de médias</b> sur
        l’application en réunissant ces quatre composants en un seul.
      </p>
      <p>
        Du point de vue de l’ingénierie logicielle, il s’agissait de{' '}
        <b>moderniser et simplifier</b> la codebase en faisant appel à des
        librairies tierces mises à jour, ainsi que de{' '}
        <b>réduire la quantité de code à maintenir</b>.
      </p>
    </>
  ),
  steps: (
    <>
      <p>
        En premier lieu, il m’a fallu{' '}
        <b>comprendre l’implémentation existante</b>. Le principal challenge
        était d’identifier tous les moyens utilisés pour accéder au carrousel
        photo, à la visionneuse et ceux pour gérer l’ouverture des fichiers pdf.
        Par exemple, le module de Blog et celui du Cahier de textes utilisent
        une logique différente pour accéder aux ressources médias, qu’il m’a
        fallu comprendre, analyser et inventorier. J’ai également du comprendre
        comment fonctionnaient les composants du carrousel photo et de la
        visionneuse audio/vidéo.
      </p>
      <p>
        Ensuite, j’ai fait des recherches pour identifier une librairie tierce
        répondant à ma problématique. La librairie que j’ai utilisé est{' '}
        <i>react-native-reanimated-carrousel</i>, qui m’a permis de gagner du
        temps en évitant d’avoir à coder la logique de consultation circulaire
        de contenus typique d’un carrousel.
      </p>
      <p>
        Une fois cette solution identifiée, j’ai cherché à rendre possible
        l’intégration des composants utilisés pour visionner les fichiers
        images, audio et vidéo.
      </p>
      <p>
        Pour ce qui est des images, je n’ai pas pu réutiliser le composant
        existant car il s’appuyait sur une autre librairie trop contraignante à
        conjuguer avec la librairie. J’ai donc développé mon propre composant,
        intégrant notamment la possibilité de{' '}
        <b>
          zoomer/dézoomer sur l’image sans entrer en conflit avec la gestuelle
          de swipe du carrousel
        </b>
        .
      </p>
      <p>
        Pour les audio et vidéo, j’ai repris l’existant en bonne partie, mais
        j’ai eu à adapter un <b>changement logique très important</b> : l’ancien
        composant ne gérait qu’un seul média à la fois, là où je devais prendre
        en charge un nombre indéfini de contenus différents. Cette différence de
        fonctionnement a entrainé des complexités à résoudre quant à la gestion
        des états de lecture/pause des contenus. Par exemple, le carrousel ne
        savait pas identifier automatiquement quel contenu lire parmi ceux de la
        liste, et on pouvait se retrouver dans des situations où l’on lançait
        une vidéo dont la bande son correspondait à celle d’une autre vidéo.
      </p>
      <p>
        En ce qui concerne les fichiers pdf, il n’était plus question de les
        consulter via un navigateur car cela aurait fait sortir l’utilisateur du
        carrousel, et aussi de l’application. J’ai donc eu recours à la
        librairie <i>react-native-pdf</i>, préalablement identifiée, qui
        permettait de résoudre facilement ce souci.
      </p>
      <p>
        Je disposais à présent de composants me permettant de visionner tous les
        types de médias souhaités. Cependant, d’autres bugs similaires à celui
        évoqué sur les audio/vidéo sont apparus. Il a fallu par exemple gérer
        l’état de chargement des différents composant, ou encore gérer l’état de
        zoom/dézoom d’un contenu, rendus difficiles à contrôler en raison du
        fonctionnement interne de la librairie utilisée pour le carrousel.
      </p>
      <p>
        Le composant à créer ensuite était celui affichant la <b>pagination</b>{' '}
        que vous pouvez voir en bas de l’écran sur la vidéo de démonstration. Si
        la librairie prenait en charge une bonne partie du travail, j’ai du{' '}
        <b>programmer toutes les animations des cards</b>, pour, notamment le
        changement de taille et d’opacité, ainsi que le repositionnement au
        centre de l’écran du contenu sélectionné.
      </p>
      <p>
        Puis, j’ai procédé à la <b>gestion du mode paysage</b> pour donner aux
        utilisateurs la possibilité de consulter les contenus de manière plus
        confortable.
      </p>
      <p>
        Pour rendre l’expérience complète, j’ai implémenté les fonctionnalités
        de <b>téléchargement et partage des médias</b>, permettant aux
        utilisateurs de faire ces actions en quelques clics en faisant appel aux
        modales natives proposées par iOS et Android.
      </p>
      <p>
        Afin de <b>gérer les cas de fichiers impossibles à lire ou à trouver</b>
        , j’ai développé des empty screens associés qui permettent de
        télécharger le fichier si possible, ou tout simplement d’informer
        l’utilisateur d’une erreur lors de la récupération.
      </p>
      <p>
        Le développement terminé, j’ai pu soumettre mon travail à la personne en
        charge de l’analyse de qualité dans mon équipe. Son intervention a
        permis d’<b>identifier certains dysfonctionnements</b> sur des modèles
        de téléphones et des versions d&apos;iOS / Android spécifiques. Après
        quelques correctifs, j’ai pu ajouter ce composant à la branche de
        travail utilisée pour le <b>déploiement en production</b>.
      </p>
    </>
  ),
  actors: (
    <>
      <p>
        J’ai eu l’occasion de <b>travailler avec tous les corps de métiers</b>{' '}
        que compte notre équipe, du designer au Quality Analyst en passant par
        le project manager. J’ai pu échanger avec chacun d’entre eux en suivant
        un processus itératif qui a conduit à l’
        <b>
          affinement des spécifications techniques et/ou des maquettes d’origine
        </b>{' '}
        lorsque c’était nécessaire.
      </p>
      <p>
        J’ai également reçu de l’aide d’un développeur mobile sénior qui m’a
        aiguillé sur la résolution des problèmes les plus complexes.
      </p>
    </>
  ),
  results: (
    <>
      <p>
        La <b>mise en production</b> de ce composant a eu lieu en avril 2026, il
        est donc un peu tôt pour mesurer les résultats.
      </p>
      <p>
        Les précédents composants servant à visionner des contenus causaient de
        nombreux bugs visuels et techniques. Il sera donc intéressant de{' '}
        <b>comparer le nombre de bugs</b> liés au carrousel remontés après cette
        mise en production avec le nombre de bugs liés au visionnage de contenus
        à N-1 pour se faire une idée du <b>gain de temps pour l’équipe</b> qui
        n’aura plus à résoudre ces anciens bugs.
      </p>
      <p>
        C’est également une partie de la <b>dette technique qui s’efface</b>{' '}
        avec ce refactoring puisque nous avons maintenant{' '}
        <b>un seul composant qui en remplace quatre anciens</b>.
      </p>
      <p>
        Enfin, du point de vue des utilisateurs, l’équipe support ne manquera
        pas de me communiquer leurs retours comme ils en ont l’habitude, je
        regarderai donc ces commentaires avec attention pour{' '}
        <b>mesurer ma capacité à avoir répondu au besoin</b>.
      </p>
    </>
  ),
  future: (
    <>
      <p>
        Une évolution de ce carrousel multimédia est d’ores et déjà prévue et
        devra permettre l’intégration de <b>nouveaux types de fichiers</b>,
        notamment ceux de la suite Office.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Ce projet a été <b>l’une de mes principales réalisations</b> au cours de
        cette alternance et m’a permis d’énormément progresser en ayant eu à
        refactoriser, et donc comprendre, beaucoup de code existant pour ensuite
        développer un nouveau composant répondant mieux au besoin de
        l’utilisateur.
      </p>
      <p>
        J’ai été confronté à de nombreux challenges qui m’ont conduit à devoir
        faire des choix techniques et à justifier des redéfinitions des
        spécifications et des maquettes afin de trouver les meilleurs compromis
        possibles. Ces moments d’échange avec les designers et le project
        manager ont contribué à{' '}
        <b>
          améliorer ma capacité à anticiper et gérer des impératifs techniques
        </b>
        , j’ai du justifier mes choix en expliquant clairement les contraintes
        auxquelles je faisais face et en proposant des solutions.
      </p>
      <p>
        Le fait d’avoir{' '}
        <b>orchestré le fonctionnement de plusieurs librairies tierces</b> dans
        un même composant a également été très formateur, j’ai notamment du
        patcher ces librairies pour modifier leur fonctionnement, ce que je
        n’avais pas eu beaucoup l’occasion de faire jusque là.
      </p>
      <p>
        Je n’ai qu’un seul regret sur ce projet, c’est de ne pas avoir eu assez
        de temps pour essayer de rendre le composant de pagination scrollable
        horizontalement. La solution que j’ai trouvé aurait été trop chronophage
        dans le temps imparti, mais j’ai documenté cette possibilité pour
        pouvoir reprendre ce sujet lors du développement d’une version
        ultérieure.
      </p>
      <p>
        Je suis globalement très satisfait du résultat et je pense avoir
        développé une solution d&apos;une qualité supérieure à ce qui existait
        avant tout en ayant veillé à{' '}
        <b>produire un code simple, efficace et maintenable</b>.
      </p>
    </>
  ),
};

export const CHATBOT_ARTICLE: WorkProps['article'] = {
  intro: (
    <>
      <p>
        Lors de mon stage chez Pickme, j’ai eu l’occasion d’intégrer l’accès au
        chatbot HelloMyBot à l’application mobile. Il s’agit d’un chatbot qui
        redirige automatiquement les utilisateurs vers les pages de la FAQ, et
        est destiné à répondre aux questions simples et courantes liées à
        l’utilisation de Pickme.
      </p>
    </>
  ),
  context: (
    <>
      <p>
        L’objectif principal de cette intégration était de réduire le nombre
        important de sollicitations faites à l’équipe en charge du support
        utilisateur. Comme toute start-up ambitieuse, Pickme met un point
        d’honneur à{' '}
        <b>
          traiter toutes les demandes de ses utilisateurs en fournissant des
          réponses rapides et de qualité
        </b>
        .
      </p>
      <p>
        Pour <b>réduire ce nombre de sollicitations</b>, le CTO de Pickme à
        identifié HelloMyBot comme une solution appropriée. En effet, de
        nombreuses demandes concernaient des problèmes courants d’utilisation,
        dont les réponses étaient déjà fournies dans la FAQ existante. Il
        manquait simplement une brique permettant d’
        <b>amener cette FAQ jusqu’aux utilisateurs</b>.
      </p>
    </>
  ),
  steps: (
    <>
      <p>
        Tout a commencé avec l’expression du <b>besoin de l’équipe support</b>.
        Cette équipe de taille restreinte faisait face à un{' '}
        <b>nombre croissant de sollicitations</b>, allant de pair avec le succès
        rencontré par l’application.
      </p>
      <p>
        La responsable de l’équipe a donc exprimé son besoin au CTO de trouver
        une solution technologique qui permette de mettre en avant la FAQ afin
        de <b>réduire le nombre de demandes simples</b> à traiter, et que
        l’équipe puisse se concentrer sur les problèmes les plus complexes.
      </p>
      <p>
        Le CTO a ensuite étudié plusieurs solutions qui permettaient de{' '}
        <b>mettre en avant les pages de la FAQ</b> auprès des utilisateurs. Le
        choix final s&apos;est porté sur HelloMyBot, un chatbot qui repose sur
        un système de mots-clés et un arbre conversationnel lui permettant de
        répondre aux questions des utilisateurs en les renvoyant vers la page
        appropriée de la FAQ. Cette solution présentait l’avantage d’être
        facilement intégrable dans l’application React Native.
      </p>
      <p>
        La tâche d’intégrer le chatbot m’a ensuite été confiée. La vidéo
        d’exemple montre le POC de cette intégration, à savoir un bouton placé
        sur la page d’accueil de l’application, qui ouvre ensuite un écran où
        l’on peut démarrer la conversation avec le chatbot. J’ai eu recours au
        composant Webview de React Native qui m’a permis d’
        <b>intégrer la page web de HelloMyBot</b> tout en restant dans le
        contexte de l’application mobile.
      </p>
    </>
  ),
  actors: (
    <>
      <p>
        La mise en place de l’arborescence conversationnelle proposée pour le
        chatbot a été directement vue entre le CTO de Pickme et les équipes
        d’HelloMyBot.
      </p>
      <p>
        Pour mener à bien cette intégration, j’ai principalement échangé avec le
        CTO de Pickme, qui m’a donné des spécifications techniques qui
        précisaient comment interagir avec le chatbot, où placer le bouton sur
        la page d’accueil, et qu&apos;il me faudrait utiliser le composant
        Webview de React Native pour accueillir l&apos;écran de conversation.
      </p>
    </>
  ),
  results: (
    <>
      <p>
        Pickme ne souhaitant pas partager publiquement de résultats, je ne peux
        donner aucune donnée chiffrée.
      </p>
      <p>
        En termes d’apprentissage, ça a été une expérience enrichissante dans le
        sens où cela m’a permis de découvrir le composant Webview et de
        comprendre son fonctionnement pour offrir la possibilité de consulter un
        site web directement depuis l’application mobile, sans avoir à quitter
        cette dernière.
      </p>
      <p>
        À l’époque de ce développement, HelloMyBot était une solution très
        récente qui n’avait encore{' '}
        <b>jamais été intégrée directement dans une application mobile</b>. Il
        n’y avait donc pas de documentation ou d&apos;exemple sur lequel
        s&apos;appuyer, ce qui constituait un challenge supplémentaire
        intéressant à relever.
      </p>
    </>
  ),
  future: (
    <>
      <p>
        Cette intégration a été l’un de mes derniers chantiers avant de quitter
        l’entreprise. L’intégration du chatbot a été une réussite et{' '}
        <b>
          les équipes support ont pu y rendre accessibles les pages de la FAQ
          qu’ils souhaitaient mettre en avant
        </b>
        .
      </p>
      <p>
        Le côté pratique de cette intégration est qu’elle{' '}
        <b>ne nécessite plus aucune modification</b> du développement
        applicatif,{' '}
        <b>sa qualité ne dépend plus que de l’enrichissement de la FAQ</b> et de
        son implémentation dans l’arbre conversationnel du chatbot.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Ce stage fut ma première expérience professionnelle à un niveau
        débutant, et j’ai pu acquérir suffisamment de confiance de la part du
        CTO pour{' '}
        <b>
          participer au développement d’une fonctionnalité visible sur le
          principal écran de l’application
        </b>
        .
      </p>
      <p>
        Si ce développement en lui-même ne relève pas d’une grande complexité,
        je pense que le fait de me confier une feature visible par tous les
        utilisateurs malgré mon niveau débutant démontre tout de même une
        reconaissance de ma capacité à être{' '}
        <b>investi et consciencieux dans mon travail</b>.
      </p>
    </>
  ),
};

export const INDIGO_ARTICLE: WorkProps['article'] = {
  intro: (
    <>
      <p>
        Ce projet personnel consistait à reproduire en React Native le niveau du
        Plateau Indigo, issu des premiers jeux Pokémon sur Game Boy. L’ensemble
        de ce projet à été réalisé en TypeScript, JavaScript et CSS.
      </p>
    </>
  ),
  context: (
    <>
      <p>
        À l’époque où j’ai fait ce projet, j’étais un{' '}
        <b>
          développeur novice qui souhaitait accroître sa maîtrise de React
          Native
        </b>
        . Je savais mettre en place des interfaces basiques, et je voulais me
        perfectionner dans l’utilisation d’animations, de travail dans le
        respect de contraintes graphiques, ainsi qu’en algorithmie.
      </p>
      <p>
        Un autre de mes objectifs était d’apprendre à{' '}
        <b>mettre en place un cadre de travail professionnel et organisé</b>{' '}
        pour mener à bien ce projet, c’est ce que j’ai commencé par faire au
        lieu de commencer directement à coder.
      </p>
    </>
  ),
  steps: (
    <>
      <p>
        La première étape a donc consisté à mettre en place un cadre de travail
        professionnel.
      </p>
      <p>
        J’ai commencé par{' '}
        <b>construire un pipeline utilisant les GitHub actions</b>, intervenant
        à chaque push sur la branche principale. J’ai ajouté un outil de
        formattage de commits (Commitizen), qui m’a aidé à écrire des noms et
        messages de commits clairs et structurés.
      </p>
      <p>
        Après cela, j’ai paramétré le <b>système de pull requests</b> sur Github
        grâce à un ami développeur sénior qui me donnait régulièrement des
        conseils en jouant le rôle de reviewer. Cela m&apos;empêchait par
        exemple fusionner du code qu&apos;il n&apos;avait pas validé.
      </p>
      <p>
        Ensuite, j’ai pris le temps d’<b>initialiser mon projet proprement</b>,
        en intégrant des <b>règles Eslint</b> et une{' '}
        <b>configuration personnalisée pour TypeScript</b>.
      </p>
      <p>
        Le projet étant configuré, j’ai{' '}
        <b>commencé à établir le découpage du travail</b> à produire en me
        créant un Trello où je renseignais les tâches sous forme de tickets
        catégorisés.
      </p>
      <p>
        L’étape suivante consistait à <b>réunir tous les assets graphiques</b>
        {''} nécessaires. Fort heureusement, la franchise Pokémon peut compter
        une grande communauté, et j’ai facilement pu trouver un site web qui
        réunissait tous les assets graphiques dont j’avais besoin (notamment les
        personnages et les cartes).
      </p>
      <p>
        À partir de là, j’avais une idée claire de comment procéder, et
        disposais de toutes les ressources nécessaires. Voici un résumé succint
        des fonctionnalités que j’ai pu développer dans ce projet :
      </p>
      <ul>
        <li>Création du splash screen (écran de démarrage) de l’application</li>
        <li>
          Mise en place d’une UI fidèle à celle de la Game Boy, notamment des
          boutons de contrôle
        </li>
        <li>
          Création d’une animation à l’ouverture de l’app, faisant office
          d’écran d’accueil
        </li>
        <li>
          Modélisation de la première salle du niveau sous la forme d’un tableau
          en deux dimensions afin de pouvoir gérer le déplacement du personnage
          ainsi que les collisions
        </li>
        <li>
          Intégration du personnage principal et de toutes les animations de
          déplacement
        </li>
        <li>
          Gestion des collisions (le personnage ne doit pas pouvoir traverser
          les murs ou sortir de la carte)
        </li>
        <li>
          Gestion des interactions : ouverture d’un menu en consultant le PC ou
          déclenchement des dialogues de l’infirmière et du vendeur, par exemple
        </li>
      </ul>
    </>
  ),
  actors: (
    <>
      <p>
        Pour me guider dans ce projet,{' '}
        <b>
          j’ai pu compter sur l’aide d’un ami développeur sénior et spécialiste
          de React Native
        </b>
        .
      </p>
      <p>
        C’est lui qui m’a suggéré de réaliser toutes les étapes préalables au
        développement, et m’a aussi donné des conseils pour les parties les plus
        techniques liées à la gestion des déplacements du personnage. Il m’a
        également aiguillé sur les façons d’écrire un code de meilleure qualité
        en tant que reviewer de mes pulls requests.
      </p>
    </>
  ),
  results: (
    <>
      <p>
        J’ai énormément appris grâce à ce projet et{' '}
        <b>atteint les objectifs que je m’étais fixés</b>, même en n’ayant
        développé qu’une fraction de ce que j’avais prévu.
      </p>
      <p>
        Toute la partie préalable au développement m’a énormément servi dans mes
        expériences professionnelles où mes managers constataient régulièrement
        que j’avais <b>une attention aux détails et une rigueur</b> plutôt
        avancées pour un junior.
      </p>
      <p>
        Sur la partie algorithmique,{' '}
        <b>le code développé pour gérer les déplacements du personnage</b> sur
        la carte m’a beaucoup fait progresser et m’a appris à avancer pas à pas
        et à bien <b>décomposer une tâche complexe</b> en sous-problèmes plus
        simples.
      </p>
      <p>
        Sur la partie React Native, j’ai pu{' '}
        <b>mettre en place des outils propres à React Native</b> comme mes
        propres custom hooks et aussi utiliser les hooks classiques,{' '}
        <b>dont je me suis beaucoup servi par la suite en entreprise</b>.
      </p>
    </>
  ),
  future: (
    <>
      <p>
        Ce projet n’est pas terminé, et je compte le compléter en tant que
        projet de loisir, à finir purement par plaisir. Je n’irai pas beaucoup
        plus loin que cela, mais j’aimerais tout de même implémenter la
        possibilité de se consituer une équipe de pokémons pour se préparer à la
        suite du jeu. Cela serait assez simple à faire au vu des nombreuses API
        gratuites qui me fourniraient les données et images nécessaires.
      </p>
      <p>
        Je ne pense pas qu’il soit nécessaire d’aller beaucoup plus loin que
        cela car{' '}
        <b>
          j’ai désormais les moyens d’aborder des projets plus complexes et
          concrets
        </b>
        .
      </p>
      <p>
        Néanmoins, ce projet occupera toujours une place importante pour moi,
        car il représente l’un de mes tout premiers challenges de développeur
        d’applications mobiles.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        L’idée derrière ce projet personnel était simplement de m’améliorer en
        tant que développeur en choisissant un sujet amusant sur lequel
        travailler. Je pense que cela montre déjà{' '}
        <b>
          ma volonté de vouloir progresser et de m’améliorer sans crainte
          d’aborder des sujets complexes
        </b>{' '}
        à l’image de la logique de déplacement du personnage et de la gestion
        des collisions.
      </p>
      <p>
        Au-delà du développement en lui-même, le fait d’avoir mis en place un
        cadre de travail rigoureux (pipeline ci/cd, formatage des commits,
        configuration eslint et typescript, découpage des tickets sur trello),
        et d’avoir obtenu l’accompagnement d’un développeur sénior sur ce projet
        démontre ma volonté de <b>produire un travail soigné</b>, proche d’un
        contexte de travail en entreprise.
      </p>
      <p>
        Ce projet m’a donné l’occasion d’
        <b>accroître la qualité de ma méthode de travail</b> tout en progressant
        sur ma <b>maîtrise de l’algorithmie et de la librairie React Native</b>.
      </p>
    </>
  ),
};

export const MY_GIF_LIBRARY_ARTICLE: WorkProps['article'] = {
  intro: (
    <>
      <p>
        Ce projet est une Single Page Application React permettant à
        l’utilisateur de rechercher des gifs via l’API de Giphy et de les
        organiser par catégorie afin de pouvoir accéder rapidement à ses gifs
        favoris.
      </p>
    </>
  ),
  context: (
    <>
      <p>
        MyGifLibrary est le <b>résultat du test technique</b> qu’il m’avait été
        demandé de réaliser pour mon embauche en stage pour ma toute première
        expérience professionnelle en tant que développeur fullstack chez
        Pickme.
      </p>
      <p>
        J’ai eu une semaine pour développer ce projet, mais mes journées étaient
        prises par la formation à la Coding Academy d&apos;Epitech. J’estime
        avoir mis deux jours pour réaliser ce test. À l&apos;époque j&apos;étais
        débutant.
      </p>
      <p>Voici le brief tel qu’il m’avait été donné par le CTO :</p>
      <p>
        «L’objectif est de réaliser une single page sur laquelle nous pouvons
        ajouter des GIFs dans notre bibliothèque.
      </p>
      <p>En arrivant sur cette page, on devra trouver :</p>
      <ul>
        <li>Un header simple présentant le site</li>
        <li>
          Un formulaire permettant de rechercher un GIF via l’API de Giphy
        </li>
        <li>
          Un bloc “Résultats de recherche” qui permet de visualiser les 10 GIFs
          les plus pertinents renvoyés par Giphy lors d’une recherche. Sur
          chaque résultat de recherche, un bouton “+” nous permet d’ajouter
          notre GIF à la bibliothèque. Ce bloc “formulaire de recherche” peut
          ensuite être fermée.
        </li>
        <li>
          Un bloc “Mes GIFs” affichant en liste les GIFs que tu as sélectionné
          et ajouté à ta bibliothèque.
        </li>
        <li>
          BONUS: Sur chacun de ces GIFs, tu dois pouvoir ajouter une catégorie
          que tu auras manuellement créé. Une catégorie contient seulement un
          titre.
        </li>
      </ul>
      <p>
        Les données doivent bien enregistrées et les GIFs de ta bibliothèque ne
        sont pas perdus après un reload.
      </p>
      <p>
        Le livrable attendu est un repo git contenant le projet, les
        instructions pour l’installer et le lancer sur sa propre machine.
      </p>
      <p>
        Pour réaliser ce mini-projet, tu devras utiliser en front React (via
        create-react-app). Tu peux utiliser toutes les librairies que tu jugeras
        nécessaire.»
      </p>
    </>
  ),
  steps: (
    <>
      <p>
        J’ai suivi les étapes dans l’ordre du brief, en les complétant avec les
        étapes préalables d’initialisation de projet et d’identification des
        ressources utiles :
      </p>
      <ul>
        <li>Initialisation du projet et obtention de la clé API Giphy</li>
        <li>
          Identification de composants Material UI et de la libraire
          react-toastify pour gagner du temps sur les composants de base
          (boutons et toasts)
        </li>
        <li>Création des composants header et footer</li>
        <li>
          Création du bloc de recherche, avec la barre de recherche, le call API
          associé, et les logiques d’affichage et masquage
        </li>
        <li>Création du composant restituant le résultat de la recherche</li>
        <li>Création de la modale de sauvegarde et des fonctions associées</li>
        <li>Création du composant restituant la liste des gifs sauvegardés</li>
        <li>
          Implémentation de l’ajout d’une catégorie et d’une fonction de tri
          pour organiser les gifs sauvegardés
        </li>
      </ul>
      <p>
        À ce stade, j’avais répondu au brief en tous points.{' '}
        <b>J’ai pris le temps d’ajouter des fonctionnalités</b> comme la copie
        et suppression des gifs sauvegardés, sans lesquelles l’expérience aurait
        été incomplète selon moi. J’ai donc choisi d’ajouter deux boutons sur
        chaque gif sauvegardé :
      </p>
      <ul>
        <li>
          Un bouton de suppression, pour parfaire l’organisation de la
          bibliothèque
        </li>
        <li>
          Un bouton de copie de l’url du gif, dans le but de pouvoir le partager
          facilement
        </li>
      </ul>
    </>
  ),
  actors: (
    <>
      <p>
        J’ai développé ce projet de façon autonome, je n’ai reçu que le brief de
        la part du CTO. Un entretien a ensuite eu lieu pour évaluer mon rendu.
      </p>
    </>
  ),
  results: (
    <>
      <p>
        Les résultats de ce projet ont été positifs puisque ce test technique a
        débouché sur l’obtention du stage.
      </p>
      <p>
        Lors de la restitution, nous avons fait le tour des fonctionnalités
        développées. Lorsque j’ai envoyé le mail avec mon rendu, j’ai précisé
        avoir volontairement fait l’impasse sur quelques finitions de design
        pour me concentrer sur l’ajout des fonctionnalités de copie et
        suppression.
      </p>
      <p>
        J’ai certes perdu quelques points dû au design qui n’était pas fini à
        100%, mais j’ai pu expliquer ma démarche de me concentrer sur le fait
        vouloir <b>proposer une expérience complète</b> et cela a été apprécié.
      </p>
    </>
  ),
  future: (
    <>
      <p>
        J’ai trouvé ce test très intéressant à réaliser, car il{' '}
        <b>répond à un vrai besoin</b> exprimé par de nombreux utilisateurs. Le
        gif est devenu un moyen d’expression courant et s’est ancré dans les
        usages avec une ampleur comparable à celle des emojis. Il était donc
        intéressant de travailler sur une solution qui permette d&apos;en{' '}
        <b>faciliter la manipulation</b>.
      </p>
      <p>
        Le principal frein à la mise en production de ce projet serait le coût
        représenté par l’API de Giphy qui fait qu’on peut difficilement proposer
        cette application en version gratuite.
      </p>
      <p>
        On pourrait cependant imaginer une version payante, intégrant d’autres
        API de recherche de gifs pour avoir des résultats plus complets.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Au moment où j’ai réalisé ce projet, j’étais encore débutant.
        Aujourd’hui je porte un regard dessus avec un an et demi d’expérience
        supplémentaire, et je trouve que pour un projet fait en deux jours je
        m’en suis bien sorti.
      </p>
      <p>
        J’ai évidemment une certaine frustration de ne pas avoir complètement
        terminé le design, mais dans le cadre d’un test technique pour un
        entretien d’embauche, il me paraît largement acceptable de ne pas avoir
        fini cet aspect pour proposer des fonctionnalités qui n’étaient pas
        demandées à la base, alors qu’elles sont plus qu’essentielles.
      </p>
      <p>
        Je pense que ce que cela dit de moi, c’est que je suis quelqu’un qui
        préfère se concentrer sur le fait de{' '}
        <b>
          proposer le meilleur produit possible, et qui sait prioriser les
          chantiers les plus importants
        </b>
        .
      </p>
    </>
  ),
};
