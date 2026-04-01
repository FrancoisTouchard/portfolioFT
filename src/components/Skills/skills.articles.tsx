import React from 'react';
import { Link } from 'react-router-dom';

import {
  SKILLS_TAGS,
  WORKS_TAGS,
} from '../../utils/navigation/navigation-links';
import { SkillProps } from './types';

export const COMMUNICATION_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        La communication pour un développeur consiste à savoir{' '}
        <b>travailler efficacement</b> avec différents corps de métier en étant
        capable de <b>comprendre et restituer les informations pertinentes.</b>
      </p>

      <p>
        Avec un autre développeur, il s’agit de faire en sorte d’être{' '}
        <b>synthétique et précis</b> dans l’explication du code qu’on a produit
        ou d’une difficulté à laquelle on fait face.
      </p>

      <p>
        Avec un designer ou un project manager, il faudra s’assurer de{' '}
        <b>bien comprendre le besoin exprimé</b> en posant les questions
        nécessaires et en argumentant ses éventuelles objections.
      </p>

      <p>
        Avec un testeur ou quality analyst, il faut veiller à obtenir une liste
        exhaustive de critères qualifiant un dysfonctionnement, et savoir en
        expliquer la cause en vulgarisant la partie technique.
      </p>

      <p>
        Avec une personne extérieure à l’équipe, il s’agira de pousser la
        vulgarisation un cran plus loin, et de{' '}
        <b>rendre compréhensible par n’importe qui les enjeux techniques</b> que
        l’on souhaite aborder.
      </p>

      <p>
        Savoir communiquer est selon moi une grande qualité pour un développeur,
        je pense qu’un bon développeur qui est également bon communicant a plus
        d’impact au sein d’une équipe qu’un développeur qui serait excellent
        techniquement et très mauvais en communication.
      </p>

      <p>
        C’est ce que montrent les résultats de{' '}
        <a
          href="https://www.linkedin.com/pulse/devskiller-report-2024-skills-management-assessment-insights-luujf/"
          target="_blank">
          ce rapport
        </a>{' '}
        basé sur les évaluations des développeurs de la plateforme DevSkiller :{' '}
        <b>
          48% des développeurs ont identifié la communication comme étant la
          compétence non-technique la plus importante pour un développeur
        </b>
        , devançant même la capacité à résoudre des problèmes (46%).
      </p>
    </>
  ),

  proofs: (
    <>
      <p>
        Avoir eu un précédent métier où la communication jouait un rôle central
        m’aide énormément au quotidien en tant que développeur.
      </p>

      <p>
        Lorsque je travaillais dans la publicité, la base de mon métier
        consistait à comprendre les besoins du consommateur que l’on cherchait à
        atteindre. J’y vois une analogie naturelle avec le métier de développeur
        qui se doit avant tout de comprendre le besoin de l’utilisateur que la
        solution technique cherche à satisfaire.
      </p>

      <p>
        Avant même d’être développeur, j’avais déjà cet automatisme de me poser
        beaucoup de questions sur l’intérêt de la tâche à accomplir pour la
        personne qui en bénéficiera. C’est aujourd’hui une de mes qualités qui
        je pense est parmi les plus appréciées, je ne me lance jamais tête
        baissée dans un développement et je sollicite toujours les
        interlocuteurs nécessaires, et cela permet à l’équipe de gagner du temps
        en évitant de produire du code qui se serait révélé inutile car basé sur
        une mauvaise compréhension du besoin initial.
      </p>

      <p>
        Une bonne communication pour un développeur, c’est aussi{' '}
        <b>savoir restituer</b> son travail. Il m’est arrivé de devoir expliquer
        à un designer ou à un project manager pourquoi il n’était pas possible
        ou trop coûteux de développer une solution qu’il avait envisagé. Savoir
        simplifier l’explication d’une difficulté technique contribue souvent à
        faciliter l’identification d’une solution appropriée.
      </p>

      <p>
        En dehors des métiers connexes à la programmation,{' '}
        <b>savoir expliquer</b> un enjeu technique à quelqu’un est très
        important.
      </p>

      <p>
        Les développeurs ont la réputation de ne pas être de très bons
        communicants, et j’ai pu voir plusieurs interlocuteurs être
        particulièrement satisfaits des explications que je pouvais leur fournir
        car certains avaient même pris l’habitude de redouter ce genre de
        conversations, tout simplement parce qu’il y avait un malaise créé par
        des manques de communication dans leurs précédentes expériences avec
        d’autres développeurs.
      </p>

      <p>
        En <b>facilitant leur compréhension des enjeux techniques</b>, ils
        avaient davantage tendance à valoriser mon travail car ils en
        saisissaient tous les tenants et aboutissants.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Grâce à mon ancien métier où la communication était extrêmement
        importante, je pense aujourd’hui qu’il s’agit d’
        <b>une de mes soft skills à plus forte valeur ajoutée</b>.
      </p>
      <p>
        Les retours de mes collègues actuels mentionnent fréquemment la
        communication comme étant l’un de mes points forts, et j’essaie de
        mettre en place des réflexes au quotidien pour que cela reste le cas.
      </p>
      <p>
        Par exemple, lorsque l’on m’assigne un ticket Jira consistant à réparer
        un bug, j’ai pour habitude de le commenter en expliquant synthétiquement
        quel était la cause technique du problème et ce que j’ai fait pour le
        résoudre. Cela paraît anodin, mais c’est vraiment très pratique pour
        tout le monde : cela me permet de rapidement retrouver le fil lorsque
        l’on me parle de ce ticket plusieurs semaines après sa résolution, et
        cela{' '}
        <b>
          évite des allers/retours chronophages en rendant l’information
          disponible
        </b>{' '}
        à toutes les personne susceptibles d’en avoir besoin.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        Je pense que ma marge de progression sur cette compétence se situe au
        niveau de la <b>vulgarisation des enjeux techniques</b>. Je découvre ou
        approfondis toutes les semaines de nouvelles notions, et il me faut les
        maîtriser davantage pour les restituer correctement.
      </p>
      <p>
        Progresser en ce sens m’aidera d’une part à{' '}
        <b>
          faciliter le contact avec les métiers connexes ou étrangers à celui de
          développeur
        </b>
        . D’autre part, cela fluidifiera également les échanges avec les métiers
        techniques puisqu’en comprenant mieux les notions que j’aborde, les
        questions que je poserai seront plus pertinentes et je serai aussi plus
        en mesure de comprendre les réponses que l’on me proposera.
      </p>
    </>
  ),
};

export const COMMITMENT_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        L’implication, c’est le fait de <b>se sentir naturellement concerné</b>{' '}
        par ce que l’on fait, d’y mettre du coeur sans même sans rendre compte,
        un peu par automatisme. C’est une mentalité qui consiste à{' '}
        <b>rechercher le meilleur résultat possible</b> avant même de commencer
        à travailler.
      </p>

      <p>
        Pour définir l’implication, on peut aussi partir de son opposé : tout le
        monde a un jour eu à expérimenter le manque d’envie au travail ou dans
        la réalisation d’une tâche. Il est évident que le lorsqu’on entreprend
        quelque chose à contrecoeur, on obtient un résultat moins convaincant
        que lorsqu’on le fait avec passion et en étant soucieux de la qualité de
        ce que l’on produit.
      </p>
      <p>
        Je pense qu’aujourd’hui avec la généralisation de l’intelligence
        artificielle et des LLM qui aident à produire du code, la capacité d’un
        développeur à être se sentir impliqué par son travail est devenu encore
        plus importante.
      </p>
      <p>
        Comme le souligne Michael Bolton dans{' '}
        <a
          href="https://medium.com/@michaelbolton/to-the-developer-about-your-impending-promotion-86f27ac99025"
          target="_blank">
          cet article
        </a>
        , les IA ne se posent pas de questions avant de répondre à un prompt,
        elles produisent simplement la réponse la plus probable, la plus
        statistiquement acceptable. Elles n’ont pas l’implication nécessaire
        pour se demander si la solution qu’elles fournissent répond avec qualité
        au besoin exprimé.
      </p>
    </>
  ),
  proofs: (
    <>
      <p>
        Impossible pour moi d’illustrer cette qualité d’implication sans parler
        du fait que le métier de développeur est le fruit de ma reconversion
        professionnelle.
      </p>

      <p>
        Pour reprendre ce que je mentionnais en introduction, j’ai très bien
        connu ce sentiment de désimplication dans mon précédent métier qui
        consistait à élaborer des stratégies publicitaires pour le compte de
        grandes marques. La finalité de ce travail a fini par me paraître
        désuette, voire nocive, et à la fin je me fichais complètement de savoir
        si j’étais parvenu à un résultat de qualité ou non.
      </p>

      <p>
        J’ai commencé cette reconversion par la formation bootcamp{' '}
        <Link to={'/experiences/epitech'}>Coding Academy d’Epitech</Link>, qui
        imposait un rythme de travail soutenu pour parvenir à acquérir les bases
        de la programmation en partant quasiment de zéro. Aujourd’hui, après
        avoir complété cette formation par une alternance de deux ans à l’ISCOD,
        je constate que{' '}
        <b>ma motivation est toujours aussi forte qu’au départ</b>.
      </p>

      <p>
        Je le vois aussi lorsque j’aborde des tâches complexes qui me mettent en
        difficulté, ce qui m’est arrivé plus d’une fois en travaillant chez
        Édifice. Malgré la difficulté et les blocages, repenser ne serait-ce
        qu’une minute à mon expérience passée en communication et publicité
        suffit à me rebooster et à me rappeler à quel point j’ai fait le bon
        choix.
      </p>

      <p>
        À mon avis, en tant que développeur, on peut trouver beaucoup de
        satisfaction dans son travail car le résultat que l’on produit est
        &quot;palpable&quot;, un peu comme un artisan qui réalise un objet, on
        est en mesure de contempler et utiliser notre travail une fois celui-ci
        accompli et en tirer de la fierté.
      </p>

      <p>
        Je pense que mon premier projet personnel,{' '}
        <Link to={`/works/${WORKS_TAGS.indigo.path}`}>The Indigo Project</Link>,
        démontre ma qualité d’implication ne serait-ce que par les étapes de
        préparation.{' '}
        <b>
          Avant même de commencer à coder, j’ai souhaité mettre en place un
          environnement proche des conditions de travail en entreprise
        </b>
        .
      </p>

      <p>
        J’ai créé un pipeline avec des actions Github, une configuration Eslint
        et TypeScript, un Trello pour m’organiser, et sollicité l’aide d’un
        développeur sénior qui m’a apporté des conseils en faisant ses retours
        sur ce que je produisais. Avoir établi ce cadre de travail témoigne de
        ma volonté de produire un résultat de qualité et montre que{' '}
        <b>je sais me donner les moyens d’y parvenir</b>.
      </p>

      <p>
        Pour citer un autre exemple en situation professionnelle, le{' '}
        <Link to={`/works/${WORKS_TAGS.carrousel.path}`}>
          Carrousel Multimédia
        </Link>{' '}
        que j’ai développé pour Édifice était un projet que l’entreprise avait
        &quot;dans les cartons&quot; depuis un moment, et dont les
        spécifications techniques et fonctionnelles étaient datées et assez
        vagues dans leur description.
      </p>

      <p>
        J’ai donc développé ce composant sans avoir d’idée précise de mon cap,
        je découvrais au fur et à mesure du développement que telle
        fonctionnalité n’était pas réalisable, ou encore qu’il fallait ajouter
        des éléments indispensables qui n’avaient pas été prévus.
      </p>

      <p>
        Quand je vois le résultat auquel j’ai abouti, qui est beaucoup plus
        poussé que ce qui était prévu à la base, je trouve que c’est une bonne
        démonstration de la rigueur et de l’implication que j’ai pu consacrer à
        ce projet, là où un développeur moins consciencieux aurait pu se
        contenter de développer simplement ce qui était prévu.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Étant au début de ma carrière de développeur, je suis enthousiaste à
        l’idée de commencer n’importe quel chantier ou tâche, et suis encore
        beaucoup trop « jeune » pour être blasé.
      </p>
      <p>
        Je me sens toujours très investi et fortement impliqué dans mon travail,
        et faire la comparaison avec ce que je ressentais en faisant mon
        précédent métier m’aide à maintenir un haut niveau d’implication.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        Je dirais que mon évolution dans cette capacité d’implication consiste à
        maintenir cette dernière à un niveau élevé. Ce sera avant tout un
        exercice de rigueur et je pense qu’il me faudra veiller à ne pas rester
        enfermé trop longtemps sur le mêmes chantiers et à trouver de nouvelles
        sources d’intérêt pour raviver la flamme de l’implication lorsque j’en
        aurai besoin.
      </p>
      <p>
        Je pense également que la popularité croissante de l’usage des
        intelligences artificielles sera un piège à éviter, dans le sens où l’on
        pourrait se contenter de générer laisser l’IA générer du code «. les
        yeux fermés », ce que je devrai veiller à éviter.
      </p>
    </>
  ),
};

export const CREATIVITY_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        Le métier de développeur frontend consiste en bonne partie à{' '}
        <b>créer des interfaces</b> en respectant un ensemble de{' '}
        <b>contraintes</b> exprimées par les spécifications techniques et
        fonctionnelles.
      </p>

      <p>
        Dans ce contexte, être créatif c’est être en mesure de{' '}
        <b>répondre à des problèmes en identifiant une solution simple</b>. En
        effet, plus la solution est simple, moins elle prend de temps à
        développer, et plus elle sera facile à maintenir.
      </p>

      <p>
        Pour un développeur, c’est aussi la capacité à réutiliser du code
        existant pour répondre à un nouveau challenge{' '}
        <b>sans chercher à réinventer la roue</b> comme le décrit{' '}
        <a
          href="https://www.computer.org/csdl/magazine/so/2024/02/10445159/1URb85tSMOA"
          target="_blank">
          cet article
        </a>{' '}
        publié par les équipes de Google Engineering Productivity Research.
      </p>

      <p>
        Le développement d’interfaces utilisateur se fait souvent à partir des
        maquettes créées par les designers. Connaître les règles et techniques
        basiques utilisées par les designers permet de mieux comprendre les
        choix créatifs faits par ces derniers.
      </p>

      <p>
        Cela facilite également les échanges qui peuvent avoir lieu lorsqu’un
        développeur souhaite remettre en question un élément d’une maquette qui
        serait trop compliqué à programmer. C’est une situation fréquente, et le
        fait d’<b>avoir des notions de design</b> permet au développeur d’une
        part de <b>mieux expliquer</b> la nature de la contrainte technique
        rencontrée, et d’autre part de pouvoir <b>proposer des alternatives</b>{' '}
        plus simples à réaliser et qui répondront au <b>même objectif</b>.
      </p>

      <p>
        La créativité pour un développeur frontend, c’est donc la rencontre
        entre la recherche de simplicité technique de la réalisation, et la
        sensibilité artistique nécessaire pour comprendre l’intention ou le
        message à exprimer.
      </p>
    </>
  ),

  proofs: (
    <>
      <p>
        C’est lors de mon alternance chez Édifice que j’ai le plus progressé sur
        l’aspect créatif de mon métier. Pendant ces deux ans, j’ai pu échanger
        quasiment quotidiennement avec une équipe de trois designers grâce à qui
        j’ai pu beaucoup progresser dans ma façon d’analyser le design d’une
        application, et surtout de le réaliser.
      </p>

      <p>
        Un premier exemple imageant cette collaboration a été le développement
        du module{' '}
        <Link to={`/works/${WORKS_TAGS.wiki.path}`}>Cours et Wiki</Link> qui m’a
        confié sur l’application mobile éditée par Édifice. Ce module permet à
        des enseignants de publier leurs cours, et aux élèves d’y accéder
        facilement.
      </p>

      <p>
        Lors de la phase de conception et de la présentation des maquettes par
        les designers,{' '}
        <b>nous avions identifié plusieurs difficultés techniques</b> quant aux
        choix représentés sur les maquettes. L’un d’entre eux concernait un
        composant de card où se trouvait la description du cours. Si cette card
        contenait beaucoup de texte, il fallait positionner un bouton{' '}
        <i>Voir plus</i> sur lequel cliquer pour la déplier. Sur la maquette, ce
        bouton était aligné avec la dernière ligne de texte visible, et
        impliquait de tronquer le texte pour laisser la place au bouton.
      </p>

      <p>
        Il se trouve que sur mobile, la méthode de détection de la valeur de
        hauteur d’une ligne de texte diffère selon les systèmes
        d&apos;exploitation, et cela entraînait des complexités techniques pour
        aligner le bouton avec le texte, qui est une tâche a priori facile à
        réaliser.{' '}
        <b>
          Nous avons résolu cette situation en changeant la position du bouton
          pour qu’il soit beaucoup plus simple à positionner
        </b>
        , et donc rapide à développer.
      </p>

      <p>
        Sur un autre chantier, toujours chez Édifice, lorsque j’ai développé le{' '}
        <Link to={`/works/${WORKS_TAGS.carrousel.path}`}>
          Carrousel Multimédia
        </Link>
        , j’ai rencontré{' '}
        <b>
          une situation qui m’a permis d’illustrer ma capacité à trouver des
          solutions simples permettant d’éviter un développement coûteux
        </b>
        .
      </p>

      <p>
        Lors de l’implémentation du composant permettant de visionner les pdfs,
        la librairie que j’utilisais pour créer l’effet de carrousel présentait
        un bug : lorsqu’on avait qu’un seul pdf à visionner, celui-ci
        n’apparaissait pas à l’écran. Il était affiché sur un composant doublon
        invisible créé par la librairie pour permettre la logique de
        consultation circulaire des médias.
      </p>

      <p>
        <b>
          Plutôt que de chercher un fix à ce bug complexe, j’ai tout simplement
          choisi de ne pas utiliser le carrousel pour ce cas spécifique
        </b>{' '}
        où il n’y a qu’une seule ressource à visionner, je rendais directement
        mon composant permettant de visionner les pdf. N’ayant qu’une seule
        ressource à visionner, il n’était pas nécessaire d’embarquer les
        contraintes liées au swipe et à la consultation circulaire des médias.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Je ne pratique aucune activité artistique visuelle (j’ai préféré la
        musique). Cependant, j’ai toujours eu beaucoup d’intérêt pour les arts
        picturaux et le design d’une manière générale. Je pense disposer du
        minimum de sensibilité requis, et d’un{' '}
        <b>
          regard qui me permet de repérer des défauts ou des optimisations
          possibles dès le premier coup d’oeil
        </b>{' '}
        sur une interface utilisateur.
      </p>
      <p>
        Je pense avoir une capacité créative tout de même assez prononcée, et je
        peux mesurer cela à la façon dont j’aborde un nouveau chantier. Je me
        rends compte que mon oeil est beaucoup plus acéré qu’au début de mon
        parcours. J’ai tendance à identifier rapidement les points
        problématiques, et ma capacité à simplifier des implémentations s’est
        également beaucoup améliorée.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        La créativité est une compétence qui, je pense, se cultive tout au long
        de la vie. J’ai encore de nombreux progrès à faire tant sur l’aspect
        relevant purement des connaissances créatives que sur ma capacité à
        résoudre des problèmes en trouvant des contournements judicieux.
      </p>
      <p>
        Le fait de travailler directement avec plusieurs designers m’aidera
        beaucoup pour le premier aspect. Nous avons régulièrement des moments où
        je peux leur poser des questions sur leurs partis pris créatifs et cela
        contribue grandement à ma compréhension de ces enjeux.
      </p>
      <p>
        Pour ce qui est de la créativité purement technique, je pense que cela
        viendra naturellement avec l’expérience : plus je rencontrerai et
        résoudrai ce genre de problèmes, plus j’aurai d’aisance à résoudre les
        suivants.
      </p>
    </>
  ),
};

export const CRITICAL_THINKING_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        L’esprit critique est la faculté à être{' '}
        <b>
          objectif et rationnel dans l’analyse et le jugement que l’on va porter
        </b>{' '}
        sur une idée ou une réalisation. C’est la capacité à{' '}
        <b>
          se remettre en question et à chercher des arguments qui ne feront pas
          débat
        </b>{' '}
        pour étayer ses choix. On peut aussi parler de prise de recul.
      </p>

      <p>
        Comme le dit Gergely Orosz sur son blog{' '}
        <a
          href="https://blog.pragmaticengineer.com/critical-thinking/"
          target="_blank">
          Pragmatic Engineer
        </a>
        , il ne faut jamais se fier aux apparences et ne pas hésiter à remettre
        en jeu ce qui paraît évident.
      </p>

      <p>
        On dit souvent qu’il faut <b>se demander pourquoi on fait les choses</b>{' '}
        pour bien les faire. C’est le point de départ de ce que j’entends par
        esprit critique. Comprendre comment ce qu’on développe va être utilisé,
        par qui, dans quel but, c’est la base d’un plan bien réfléchi et cela
        donne dès le départ des critères qui permettent de savoir si l’on suit
        la bonne direction ou pas.
      </p>

      <p>
        Au fur et à mesure qu’on avance dans la réalisation d’une tâche, il faut
        savoir se demander si l’on a bien maintenu le cap ou si l’on s’en
        éloigne. Cela passe souvent par le fait de demander leur avis à d’autres
        personnes pour <b>bénéficier d’un oeil neuf et d’un regard extérieur</b>
        . Il faut aussi savoir intégrer les retours qu’on nous fait et de savoir
        abandonner les convictions qu’on pouvaient avoir et qui se révèlent
        erronées.
      </p>

      <p>
        Il s’agit autant d’être critique envers soi-même qu’envers les autres,
        de se jeter dans l’inconfort de la remise en question pour arriver à un
        meilleur résultat. Toutefois, il convient de rester dans certaines
        limites, car à trop se remettre en question on finit par avoir plus de
        doutes que de certitudes. C’est donc un <b>équilibre à maintenir</b>.
      </p>
    </>
  ),
  proofs: (
    <>
      <p>
        Avoir initié une reconversion professionnelle à 30 ans vers un métier
        technique favorise le développement de l’esprit critique. Recommencer un
        parcours professionnel avec un statut de débutant implique aussi de
        savoir <b>rester humble</b>, car dans un métier technique comme celui de
        développeur, on est souvent amené à se tromper.
      </p>

      <p>
        Lorsque je présentais mon travail à des développeurs sénior, beaucoup
        plus expérimentés que moi, les retours qu’ils me faisaient prenaient
        souvent la forme de petits commentaires très courts, les uns à la suite
        des autres dans une pull request. Mes collègues avaient leur propre
        travail à accomplir, et prenaient le temps de me faire des retours sans
        forcément entrer dans les détails.
      </p>

      <p>
        Je savais donc que j’avais des corrections à apporter, mais je n’en
        comprenais pas toujours la raison. Quand c’était le cas, plutôt que de
        simplement appliquer le conseil, j’ai cherché à{' '}
        <b>comprendre pourquoi</b> en allant lire la documentation associée ou
        en posant la question à une intelligence artificielle par exemple.
      </p>

      <p>
        Il se trouve que dans de rares cas, la suggestion qu’on m’avait apporté
        n’était pas légitime, voire contre-productive. J’ai donc pu argumenter
        en réponse et avoir fait preuve d’esprit critique m’a aidé à progresser
        et à produire un résultat de qualité.
      </p>

      <p>
        J’essaie de faire preuve d’esprit critique dans mon travail au
        quotidien. L’essentiel de mon métier de développeur consiste à réfléchir
        à comment je vais procéder pour coder, et c’est lors de cette étape que
        j’essaie de me poser le plus de questions sur la démarche à adopter.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        J’essaie de faire preuve d’esprit critique dans mon travail au
        quotidien. L’essentiel de mon travail de développeur consiste à
        réfléchir à comment je vais procéder pour coder, et c’est lors de cette
        étape que j’essaie de me poser le plus de questions sur la démarche à
        adopter.
      </p>
      <p>
        Il y a aussi des moments où l’on s’en rend compte trop tard, après avoir
        livré un développement par exemple. Le réflexe que j’essaie d’avoir à ce
        moment là est de laisser un commentaire sur l’amélioration à laquelle
        j’ai pensé pour pouvoir y revenir lorsque j’aurai l’occasion de
        travailler à nouveau dessus.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        Je pense qu’on doit développer l’esprit critique tout au long de sa vie,
        il s’agit plus d’une compétence à entretenir qu’à développer.
      </p>
      <p>
        Se demander régulièrement pourquoi on fait les choses et vérifier si ce
        qu’on est en train de produire répond bien à la demande est une bonne
        habitude à prendre et à conserver.
      </p>
    </>
  ),
};

export const JAVASCRIPT_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        JavaScript est un langage de programmation qui permet de{' '}
        <b>donner vie</b> à une page web en la rendant{' '}
        <b>dynamique et interactive</b>.
      </p>

      <p>
        C’est la <b>brique de base</b> pour la construction de toute interface
        graphique sur le web. JavaScript est la source de tous les frameworks
        utilisés en programmation frontend web, tels que React, Vue ou Angular.
      </p>

      <p>
        C’est donc un langage extrêmement répandu, qui est souvent le point de
        départ en programmation pour de nombreux développeurs. Selon{' '}
        <a
          href="https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/"
          target="_blank">
          ce rapport
        </a>{' '}
        Statista, c’est tout simplement le langage le plus utilisé à l’échelle
        mondiale en 2025 : <b>66% des développeurs le pratiquent</b>.
      </p>
    </>
  ),

  proofs: (
    <>
      <p>
        C’est avec JavaScript que j’ai commencé la programmation et créé mes
        premières variables et fonctions. C’est avec ce langage que j’ai
        découvert les outils que j’utilise à présent tous les jours : les
        conditions, les boucles, la manipulation des objets et celle du DOM, le
        fetch de données, la gestion d’erreur ou encore l’émission et l’écoute
        d’événements.
      </p>

      <p>
        Aujourd’hui spécialisé en développement d’applications mobile, je
        continue de pratiquer quotidiennement le JavaScript avec l’utilisation
        du framework React Native.
      </p>

      <p>
        Sur mobile, l’enjeu de performance du code est encore plus important que
        sur le web : une mauvaise utilisation de JavaScript peut conduire à des
        conséquences particulièrement indésirables, comme une consommation
        excessive de la batterie du téléphone ou des données mobiles de
        l’utilisateur.
      </p>

      <p>
        Conscient de ces problématiques, je m’emploie à appliquer les{' '}
        <b>bonnes pratiques de développement</b> ainsi qu’à systématiquement me
        poser des questions liées au fonctionnement du code que je produis afin
        de minimiser les risques mentionnés à l’instant.
      </p>

      <p>
        À titre d’exemple, lors de mon expérience chez <i>Édifice</i>, j’ai du
        résoudre un bug présent en production qui m’a amené à comprendre et
        débugger du code que je n’ai pas moi même créé.
      </p>

      <p>
        Pour rester synthétique, le bug empêchait les utilisateurs d’utiliser
        les modules <i>Blog</i> et <i>Messagerie</i> de l’application : ils ne
        pouvaient plus publier un post ou un message dès lors qu’ils mettaient
        une image en pièce jointe.
      </p>

      <p>
        J’ai pu résoudre ce bug en me rendant compte que les requêtes API de
        création de post/message étaient refusées pour un défaut
        d’authentification : il manquait dans les headers un cookie
        oneSessionId. J’ai donc retracé le parcours des données depuis le login
        jusqu’à la création d’un contenu pour m’apercevoir qu’il manquait dans
        le flux applicatif un appel à une méthode permettant de rafraîchir ce
        cookie.
      </p>

      <p>
        Les connaissances que j’ai acquises m’ont permis de comprendre et
        débugger rapidement un code dont je n&apos;étais pas l’auteur. Je sais
        que des situations similaires et plus complexes se présenteront à
        l’avenir, et pour c’est pour cela que je m’applique à{' '}
        <b>challenger mon propre code</b> et à <b>apprendre régulièrement</b> de
        nouvelles façons de résoudre des problèmes.
      </p>

      <p>
        Ce genre d’expérience m’a montré que la maîtrise du JavaScript est
        essentielle pour aborder ce métier avec sérénité.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Je considère aujourd’hui avoir acquis de bonnes bases en JavaScript,
        tout en étant conscient qu’il s’agit d’un langage extrêmement vaste{' '}
        <b>dont la maîtrise demande du temps et de la pratique</b>.
      </p>

      <p>
        Dans mon métier actuel de développeur d’applications mobiles, JavaScript
        occupe une place centrale puisque c’est le langage sur lequel repose le
        framework React Native avec lequel je travaille quotidiennement. La
        qualité et la performance du code JavaScript ont donc un impact direct
        sur l’expérience utilisateur, ce qui rend cette compétence
        particulièrement importante dans mon profil professionnel.
      </p>

      <p>
        Avec le recul, je perçois JavaScript comme un apprentissage continu :
        chaque semaine je rencontre de nouvelles situations qui m’amènent à
        approfondir certains concepts ou à découvrir de nouvelles façons de
        résoudre un problème. Cette réalité me pousse à adopter une posture de
        remise en question régulière de mon code.
      </p>

      <p>
        Pour progresser dans ce domaine, il me semble essentiel de conserver une
        démarche active d’analyse et de compréhension du fonctionnement du
        langage. Je pense également qu’{' '}
        <b>
          un développeur ne doit pas se contenter de produire un code
          fonctionnel, mais chercher à comprendre ses implications
        </b>{' '}
        en termes de lisibilité, de maintenabilité et de performance.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        À moyen terme, je souhaite approfondir mes compétences en JavaScript sur
        deux axes principaux :{' '}
        <b>l’algorithmie et la maîtrise de l’écosystème du langage</b>.
      </p>

      <p>
        Le premier axe concerne ma capacité à{' '}
        <b>traduire efficacement des raisonnements algorithmiques</b> en
        JavaScript, en appliquant les <b>bonnes pratiques</b> de développement
        tout en restant attentif à la <b>performance d’exécution</b> du code.
        Cela implique notamment d’améliorer ma maîtrise des méthodes de
        manipulation de tableaux ainsi que des différents types d’objets
        manipulés dans le langage.
      </p>

      <p>
        Le second axe concerne l’approfondissement de ma connaissance des outils
        et des API disponibles. Pour cela, je m’appuie notamment sur la
        documentation du Mozilla Developer Network (MDN), qui constitue une
        référence pour JavaScript. J’y consulte régulièrement des exemples et
        des cas d’usage que je prends le temps d’expérimenter dans mes projets
        personnels ou professionnels.
      </p>

      <p>
        Je m’efforce également de rester attentif à{' '}
        <b>l’évolution de l’écosystème JavaScript</b>, notamment à travers les
        librairies tierces et les nouvelles pratiques de développement. Cette
        veille technique me permet progressivement d’enrichir mes méthodes de
        travail et d’améliorer la qualité du code que je produis.
      </p>
    </>
  ),
};

export const ORGANIZATION_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        L’organisation est une compétence clé pour un développeur, le fait de{' '}
        <b>mettre en place un cadre de travail</b> et de le maintenir en ordre{' '}
        <b>fait gagner un temps considérable</b> au quotidien et aide aussi à{' '}
        <b>mieux anticiper et répartir la charge de travail</b>.
      </p>
      <p>
        Comme le décrit le développeur Ricardo Campos dans{' '}
        <a
          href="https://dev.to/rmcampos/how-i-got-my-time-organized-as-a-tech-lead-2oab"
          target="_blank">
          cet article
        </a>
        , ce cadre de travail se matérialise par la création d’une liste de
        tâches priorisées ainsi que la mise en place d’outils améliorant la
        productivité. Ces outils peuvent prendre la forme de template d’une
        journée type où l’on accorde{' '}
        <b>
          un temps déterminé à l’avance pour la réalisation de différents types
          de tâches
        </b>
        .
      </p>
      <p>
        C’est également une compétence vitale pour <b>travailler en équipe</b>.
        Par exemple dans une équipe qui suit la méthode agile, maintenir le
        statut de ses tickets à jour permet de faire gagner du temps à tout le
        monde et évite des échanges de messages pour communiquer sur l’avancée
        du projet.
      </p>
      <p>
        Lorsqu’on travaille avec d’autres développeurs, il est primordial d’être
        bien organisé au niveau de la gestion des branches sur git : une
        mauvaise organisation pourrait conduire à des erreurs qui entraîneraient
        la suppression de son travail ou de celui des autres, ce qui ferait
        perdre du temps à l’équipe.
      </p>
    </>
  ),
  proofs: (
    <>
      <p>
        Lorsque j’ai travaillé sur mon tout premier projet personnel{' '}
        <Link to={`/works/${WORKS_TAGS.indigo.path}`}>The Indigo Project</Link>,
        j’ai pris le soin de <b>préparer un cadre de travail et des outils</b>{' '}
        pour faciliter ma gestion du projet.
      </p>
      <p>
        La première chose que j’ai faite a été de créer un <i>Trello</i> afin de
        pouvoir y <b>définir et organiser le découpage des tâches</b> sous forme
        de tickets, de les trier selon leur statut (à faire, en cours, fait) et
        leur ordre de priorité (majeur, mineur). Cela m’a fait gagner beaucoup
        de temps par la suite car je n’avais plus à garder en tête toutes ces
        informations et pouvais me reposer sur ce travail de préparation.
      </p>
      <p>
        Grâce à cet outil, j’ai pu créer un template pour gérer mon temps de
        travail : je décidais d’allouer un certain temps pour chaque tâche, et
        une fois que je les avais toutes accomplies, je recommençais un cycle en
        en définissant de nouvelles.
      </p>
      <p>
        Sur ce même projet, j’ai aussi utilisé <i>Commitizen</i> afin de mieux
        m’organiser. Cet outil permet de formater l’écriture des commits sur
        Github et donc de retrouver facilement le code réalisé sur une tâche
        donnée. J’y entrais le contexte de mon commit (par exemple le nom de
        l’écran concerné), et un court message expliquant ce que le code
        apportait comme modification.
      </p>
      <p>
        Pour donner un second exemple plus orienté vers le travail en équipe,
        j’ai pu mettre en place des bonnes pratiques visant à améliorer
        l’organisation de mon travail pendant mon alternance chez Édifice,
        notamment sur le projet du{' '}
        <Link to={`/works/${WORKS_TAGS.carrousel.path}`}>
          Carrousel Multimédia
        </Link>
        .
      </p>
      <p>
        Le développement de ce composant a requis l’utilisation de plusieurs
        librairies tierces (une pour gérer la lecture des fichiers vidéo et
        audio, une autre pour la lecture des fichiers pdf ainsi qu&apos;une
        gérant la circulation des contenus).
      </p>
      <p>
        Pour mener le projet à bien, il m’a fallu modifier le fonctionnement de
        ces trois librairies en réalisant des patchs, que j’ai pris le soin de
        documenter afin de <b>pouvoir en garder une trace en cas de problème</b>{' '}
        dans le futur. J’ai du faire preuve d’organisation en procédant à
        l’écriture de cette documentation directement après avoir testé le patch
        concerné. J’ai donc mis en place cette même mécanique pour chacune des
        trois librairies.
      </p>
      <p>
        Si dans le futur un membre de l’équipe a besoin de modifier ce patch, il
        trouvera dans cette documentation toutes les informations nécessaires
        pour en conserver le bon fonctionnement.
      </p>
      <p>
        Au-delà de ces patchs, j’ai pu ensuite produire la documentation
        concernant le composant du carrousel dans son intégralité après avoir
        testé et validé son fonctionnement. Il s’agit dans ce cas d’
        <b>expliquer comment ce composant doit être utilisé</b> en mentionnant
        toutes les subtilités techniques et en fournissant des exemples pour en{' '}
        <b>faciliter la maintenance</b> par un autre développeur.
      </p>
      <p>
        Pour être sûr de penser à produire ces différentes documentations, j’ai
        créé des rappels dans mon agenda. En début de projet, j’estimais la date
        à laquelle je pensais finir le développement afin de penser à consacrer
        du temps à l’écriture de la documentation.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        J’ai déjà pris le réflexe de <b>créer des outils et routines</b> pour
        améliorer mon organisation, donc je dirais que c’est un bon début mais
        encore largement perfectible.
      </p>
      <p>
        Je dirais qu’il <b>me manque encore de l’expérience</b> pour créer des
        outils outils d’organisation pertinents et efficaces. J’ai besoin d’
        <b>être confronté à davantage de situations complexes</b> et de me
        heurter à des problèmes récurrents afin d’identifier des améliorations
        au niveau de l’organisation de mon travail au quotidien.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        Je pense que mon axe de progression principal en matière d’organisation
        consiste à être capable de mieux anticiper les difficultés techniques
        liées à la réalisation d’un chantier pour pouvoir{' '}
        <b>estimer plus précisément</b> le temps que cela me prendra.
      </p>
      <p>
        Aussi, je dois faire en sorte de <b>prendre plus souvent du recul</b>{' '}
        sur mon travail et prendre le temps de me poser la question de ce que je
        pourrais améliorer par un changement d’organisation.
      </p>
    </>
  ),
};

export const REACT_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        React est une librairie JavaScript qui permet de{' '}
        <b>créer des applications monopage</b> (ou Single Page Application){' '}
        <b>au moyen de composants</b>, que l’on peut voir comme les{' '}
        <b>briques interchangeables de l&apos;interface utilisateur</b>.
      </p>
      <p>
        L’application monopage est l’usage principal de React comme le montrent
        les résultats de l’étude{' '}
        <a
          href="https://2025.stateofreact.com/en-US/usage/#js_app_patterns"
          target="_blank">
          State of React 2025
        </a>{' '}
        : 84% des utilisateurs de React s’en servent dans ce but. Cette
        librairie offre également la possibilité de créer des applications
        rendues côté serveur, ainsi que des applications statiques (comme ce
        portfolio).
      </p>
      <p>
        React permet de construire aussi bien des applications web que des
        applications mobiles grâce à sa déclinaison dédiée React Native.{' '}
        <Link to={`/skills/${SKILLS_TAGS.reactNative.path}`}>
          Cette dernière étant au coeur de mon savoir-faire
        </Link>
        , nous allons ici nous concentrer uniquement sur l’aspect web de cette
        librairie.
      </p>
      <p>
        Les composants React consistent à{' '}
        <b>
          faire cohabiter des variables et fonctions issues de JavaScript avec
          les balises html
        </b>{' '}
        qui font la structure de l’interface utilisateur pour rendre cette
        dernière dynamique.
      </p>
      <p>
        Une notion clé de React est le cycle de vie des composants. Il faut
        comprendre comment faire circuler la donnée, quand, où et pourquoi la
        mettre à jour afin de développer une application performante.
      </p>
    </>
  ),
  proofs: (
    <>
      <p>
        C’est lors de ma première formation à la{' '}
        <Link to={'/experiences/epitech'}>Coding Academy d’Epitech</Link> que
        j’ai découvert React. Conscient de l’importance prise par cette
        librairie sur le marché ainsi que de sa polyvalence technique, j’ai
        décidé d’en faire mon premier choix sur les projets développés dans le
        cadre de cette formation.
      </p>
      <p>
        Aujourd’hui, je suis spécialisé sur la déclinaison mobile React Native,
        qui a un fonctionnement extrêmement proche de la version web, mais c’est
        bien par cette dernière que je suis entré dans le monde de React.
      </p>

      <p>
        L’une de mes toutes premières réalisations,{' '}
        <Link to={`/works/${WORKS_TAGS.myGifLibrary.path}`}>
          My Gif Library
        </Link>
        , est une application React web développée dans le cadre d’un test
        technique qui a ensuite abouti à mon embauche en stage chez Pickme.{' '}
        <b>
          Cette application permet à son utilisateur de rechercher, sauvegarder
          et organiser une sélection de gifs
        </b>
        .
      </p>

      <p>
        Pour développer ce projet, j’ai dû{' '}
        <b>respecter un cahier des charges</b> établi par le CTO de Pickme qui
        spécifiait les éléments devant être présents ainsi que leur
        comportement. Il fallait par exemple inclure une barre de recherche
        permettant de requêter l’API de Giphy, et faire en sorte que les données
        soient persistantes (qu’elles ne disparaissent pas si on actualise la
        page).
      </p>

      <p>
        Cette application symbolise en quelque sorte ma première réussite en
        React puisque le test à été concluant et j’ai ensuite été pris en stage.
      </p>

      <p>
        Dans la continuité,{' '}
        <b>j’ai pu aussi pratiquer React lors de mon passage chez Pickme</b>{' '}
        comme le montre ma réalisation{' '}
        <Link to={`/works/${WORKS_TAGS.chatbot.path}`}>
          Pickme & HelloMyBot
        </Link>
        , qui consistait à <b>intégrer un chatbot dans l’application mobile</b>.
      </p>
      <p>
        Il se trouve que pour faire fonctionner cette intégration, j’ai dû{' '}
        <b>mobiliser à la fois mes connaissances en React et React Native</b>.
        La partie React était nécessaire pour{' '}
        <b>comprendre la structure du site web</b> de Pickme et y{' '}
        <b>incorporer un script</b> permettant la liaison avec le chatbot depuis
        l’application mobile.
      </p>

      <p>
        Pour entrer brièvement dans les détails techniques en les vulgarisant un
        peu, l’intégration du chatbot repose sur l’utilisation d’un composant
        Webview, qui permet d’
        <b>utiliser un navigateur web à l’intérieur d’une application mobile</b>
        . Ainsi, l’utilisateur peut accéder à ce module conversationnel sans
        sortir de l’application, mais la conversation se déroule en réalité
        directement sur le web.
      </p>
      <p>
        Enfin, comme je code exclusivement sur la version mobile de React, j’ai
        choisi de <b>réaliser ce portfolio avec la version web</b> afin d’en
        accroître ma maîtrise. J’ai conscience que l’intérêt d’utiliser React
        est réduit puisque ce portfolio est une application statique, mais cela
        me permet néanmoins de démontrer ma maîtrise de cette librairie qui est
        au coeur de mes compétences.{' '}
        <b>
          Le code de cette application est disponible publiquement sur mon
          profil Github
        </b>
        .
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        <b>La partie web de React n’est donc pas mon coeur de métier</b>, mais
        je pense que je suis en mesure de démontrer que j’ai{' '}
        <b>une bonne maîtrise des outils</b> offerts par cette librairie puisque{' '}
        <b>la plupart sont communs au web et au mobile</b>.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        Mes principaux <b>axes de progression</b> en React concernent la{' '}
        <b>gestion de la performance</b> d’une application ou encore la{' '}
        <b>maîtrise du cycle de vie des composants</b> qui sont des sujets
        complexes sur lesquels je dois encore progresser.
      </p>
    </>
  ),
};

export const REACT_NATIVE_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        Il s’agit de la{' '}
        <b>déclinaison dédiée au mobile de la librairie React</b>. React Native
        peut être vu comme un traducteur, qui va prendre en entrée du code
        JavaScript, pour ensuite le traduire en code natif iOS (Swift) et
        Android (Java/Kotlin){' '}
        <b>
          afin d’obtenir une application prête à l’emploi sur ces deux systèmes
          d’exploitation
        </b>
        .
      </p>

      <p>
        C’est <b>l’une des deux solutions les plus privilégiées</b> par les
        développeurs <b>pour créer des applications mobiles</b>. Selon l’étude{' '}
        <a
          href="https://survey.stackoverflow.co/2024/technology#1-other-frameworks-and-libraries"
          target="_blank">
          Stack Overflow Survey 2024
        </a>
        , 9,4% des répondants déclarent utiliser Flutter, contre 9% pour React
        Native.{' '}
      </p>

      <p>
        React Native présente l’avantage d’être{' '}
        <b>construit sur la même base que React</b>, ce qui est notamment
        pratique pour les entreprises qui proposent à la fois un site web et une
        application mobile : cela facilite le partage de connaissances entre
        développeurs.
      </p>
    </>
  ),
  proofs: (
    <>
      <p>
        Dès le début de ma reconversion, j’ai souhaité <b>me spécialiser</b> sur
        le développement d’applications mobiles. Je voulais éviter la position
        du développeur « touche à tout » et me bâtir un{' '}
        <b>socle de compétences</b> fort dans une direction précise.
      </p>
      <p>
        J’ai rapidement identifié React Native comme étant la librairie la plus
        appropriée pour moi, notamment pour sa proximité avec React, qui m’a
        permis{' '}
        <b>
          d’apprendre avec les mêmes outils à créer des sites web et des
          applications mobiles
        </b>
        .
      </p>
      <p>
        La quasi-totalité de mes projets sont codés en React Native. J’ai pu
        avoir une première expérience professionnelle de 6 mois lors de mon
        stage chez Pickme, puis approfondir mes connaissances pendant 2 ans en
        alternance chez Édifice.
      </p>
      <p>
        <b>
          C’est cette dernière entreprise qui m’a offert eu le cadre de travail
          le plus complet ainsi que mes plus grands challenges en tant que
          développeur.
        </b>
      </p>
      <p>
        J’ai pu y rejoindre une équipe de trois développeurs dédiés au mobile,
        travailler avec des designers, des testeurs et des product owners en
        suivant la méthode Agile/Scrum.
      </p>
      <p>
        L’une de mes premières réalisations à consisté à accompagner un
        développeur sénior dans la création du{' '}
        <Link to={`/works/${WORKS_TAGS.wiki.path}`}>module Cours & Wiki</Link>.
        Ce module permet aux enseignants de poster des cours au format wiki, et
        à leurs élèves de les consulter facilement.
      </p>
      <p>
        J’ai pu apprendre grâce à cette expérience comment créer un nouveau
        module en partant de zéro et l’intégrer à l’application existante. La
        codebase étant déjà bien fournie, les enjeux liés à la navigation et à
        la communication avec le backend sont fondamentaux, et j’ai pu les
        appréhender de A à Z grâce à ce projet.
      </p>
      <p>
        L’une de mes tâches consistait à{' '}
        <b>développer un composant générique</b> pour accueillir l’image
        accompagnant le titre du cours. Il fallait que ce composant soit{' '}
        <b>capable de gérer plusieurs formats d’images</b> (png ou svg par
        exemple), et aussi de gérer le cas où aucune image n’était fournie en
        affichant en remplacement le logo du module. Ce composant a par la suite
        pu être réutilisé dans d’autres endroits de l’application.
      </p>
      <p>
        Pour une autre réalisation, j’ai pu développer le composant{' '}
        <Link to={`/works/${WORKS_TAGS.carrousel.path}`}>
          Carrousel Multimédia
        </Link>{' '}
        par moi-même. Il s’agit d’un{' '}
        <b>composant permettant de visionner des fichiers</b> image, audio,
        vidéo et pdf. J’ai pu solliciter l’aide des développeurs sénior sur les
        parties les plus compliquées, et ensuite appliquer leurs conseils, mais
        j’étais le seul développeur sur ce chantier.
      </p>
      <p>
        Ce chantier m’a beaucoup aidé à accroître ma maîtrise de React Native.
        J’ai du conjuguer l’utilisation de plusieurs librairies tierces, gérer
        les états de chargement, de lecture et d’affichage des médias, permettre
        leur partage et téléchargement ou encore assurer la prise en charge des
        interactions tactiles (swipe, zoom).
      </p>
      <p>
        J’ai pu mener ce projet à bien en collaborant avec tous les corps de
        métiers de l’équipe. Nous avons eu de nombreux échanges sur des
        problématiques techniques complexes au cours de ce chantier qui a duré
        plusieurs mois et qui constitue donc{' '}
        <b>mon expérience la plus complète</b> réalisée en autonomie.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Je pense avoir la maîtrise de React Native qui est attendue pour mon
        niveau tout en ayant conscience qu’il me reste beaucoup à apprendre.
      </p>
      <p>
        Cette librairie propose beaucoup d’outils qui présentent{' '}
        <b>de nombreuses subtilités techniques</b> dans leur utilisation{' '}
        <b>que je dois approfondir</b>, mais je pense en avoir une bonne
        compréhension car{' '}
        <b>
          j’ai souvent des retours positifs de la part des autres développeurs
          quant à la qualité du code que je produis
        </b>
        .
      </p>
      <p>
        Pour progresser, il faut que je continue d’aborder des sujets qui me
        confronteront à des problématiques diverses et variées et me permettront
        de me familiariser avec les parties de React Native que je ne connais
        pas encore suffisamment bien.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        J’ai identifié <b>deux axes de progression</b> au niveau de ma maîtrise
        de React Native.
      </p>
      <p>
        Le premier concerne la <b>gestion de la performance</b> de mes
        programmes : c’est une dimension technique dont je connais et pratique
        les bases, mais il me reste beaucoup de choses à apprendre pour me
        sentir à l’aise sur ce sujet.
      </p>
      <p>
        L’une des limites de React Native réside dans sa capacité à traduire en
        code natif la totalité du code JavaScript/TypeScript pris en entrée. Il
        est fréquent de voir certaines imperfections et différences de
        traitement sur un système d’exploitation par rapport à l’autre.
      </p>
      <p>
        Pour combler cette limite et améliorer la qualité du code que je
        produis, il me faudra donc <b>apprendre ces langages natifs</b>.
      </p>
    </>
  ),
};

export const TYPESCRIPT_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        Typescript est une syntaxe additionnelle de JavaScript qui donne la
        possibilité de typer les données que l’on manipule et offre ainsi un{' '}
        <b>meilleur contrôle</b> au développeur sur le fonctionnement de son
        code.
      </p>

      <p>
        L’intérêt principal est <b>d’identifier des erreurs</b> potentielles dès
        la phase d’écriture du programme, donc avant son exécution.
      </p>

      <p>
        Je dirais aussi que TypeScript permet au développeur d’avoir une{' '}
        <b>meilleure compréhension</b> du code qu’il écrit car le typage des
        données facilite la construction d’une <b>représentation mentale</b> du
        code : on a une meilleure idée de ce que l’on veut faire et de comment y
        arriver.
      </p>
      <p>
        Le couplage entre TypeScript et JavaScript devient de plus en plus
        incontournable comme le montrent{' '}
        <a
          href="https://2025.stateofjs.com/en-US/usage/#js_ts_balance"
          target="_blank">
          les résultats 2025 de l’étude State of JS
        </a>{' '}
        :{' '}
        <b>
          40% des développeurs utilisant JavaScript déclarent coder
          l’intégralité de leur projet en TypeScript
        </b>
        .
      </p>
      <p>
        TypeScript est donc devenu un <b>standard industriel</b> et cela se
        ressent sur le marché de l’emploi : la plupart des offres en
        programmation frontend publiées aujourd’hui requièrent la maîtrise de
        TypeScript.
      </p>
    </>
  ),

  proofs: (
    <>
      <p>
        Je n’y ai donc naturellement pas échappé, les offres de stage/alternance
        pour mes deux premières expériences professionnelles chez Pickme et
        Édifice demandaient de bien connaître les bases de TypeScript.
      </p>

      <p>
        J’ai donc commencé ce chemin en déclarant mes premiers types et
        interfaces sur de petites structures de données, que je manipulais
        ensuite avec des fonctions dont je typais les arguments et valeurs de
        retour.
      </p>

      <p>
        Au fil de la pratique, j’ai été confronté à de nombreuses situations
        contraignantes qui m’ont poussé à découvrir des outils plus avancés,
        comme le <i>Narrowing</i> avec les opérateurs <i>in</i>, <i>typeof</i>,{' '}
        <i>instanceof</i>, ou encore les types utilitaires qui facilitent la
        transformation, comme <i>Partial</i>, <i>Pick</i>, ou <i>Required</i>.
      </p>

      <p>
        Lors de mon passage chez Pickme en tant que développeur fullstack, j’ai
        eu l’occasion de pratiquer Typescript tant côté front avec React Native,
        que côté back avec Node.js et le framework Nest.
      </p>

      <p>
        Il m’arrivait fréquemment de devoir intégrer de nouvelles données à des
        structures existantes, ce qui impliquait d’abord de{' '}
        <b>comprendre leur typage</b>, puis comment{' '}
        <b>l’enrichir et le manipuler</b>.
      </p>

      <p>
        Pouvoir travailler sur le typage des données à la fois en back et en
        front m’a permis de rapidement progresser et d’acquérir une meilleure
        compréhension du code que je produisais des deux côtés.
      </p>

      <p>
        Chez Édifice, j’ai pu être confronté à une autre configuration en étant
        100% dédié au frontend.
      </p>

      <p>
        Cela m’a conduit à devoir trouver des solutions pour adapter mes
        programmes aux données que je recevais du backend et dont je ne pouvais
        pas choisir la forme.
      </p>

      <p>
        Cette situation m’a amené à collaborer plus souvent avec des
        développeurs backend à qui je devais clairement exprimer mon besoin, et
        cela m’a appris à mieux identifier et anticiper des difficultés liées au
        typage, notamment lors des kick off de chantiers.
      </p>

      <p>
        Lorsqu’il n’était pas possible de faire modifier le code backend, j’ai
        du trouver des solutions pour me débrouiller avec ce qui existait tout
        en préservant la cohérence du typage, ce qui a{' '}
        <b>renforcé ma faculté d’adaptation</b> et ma capacité à me sortir de
        contextes très contraignants.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        J’ai utilisé TypeScript quotidiennement dans mes deux expériences
        professionnelles ainsi que dans mes projets personnels, et aussi pour ce
        portfolio. Je pense en avoir une{' '}
        <b>bonne maîtrise pour mon niveau de développeur junior</b>. Il faut
        dire que la documentation est particulièrement riche et explicite, et ça
        aide beaucoup.
      </p>

      <p>
        Néanmoins, je sais que j’ai tendance à revenir sur la façon dont j’ai
        typé mes données assez régulièrement afin de gérer quelques cas
        spécifiques que je n’avais pas forcément identifié au début d’un projet.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        Comme pour tout langage ou syntaxe de programmation, j’ai encore
        énormément de choses à apprendre pour devenir un véritable expert de
        TypeScript.
      </p>

      <p>
        À titre d’exemple, l’utilisation et la{' '}
        <b>manipulation de types génériques </b>
        constitue un de mes axes de progression à court terme. Je suis certain
        que je trouverai prochainement une bonne occasion de l’utiliser chez
        Édifice puisque nous tendons à coder à 100% en TypeScript.
      </p>
      <p>
        D’une manière générale, je dois continuer de découvrir et manipuler les
        outils offerts par cette syntaxe afin d’en tirer le meilleur parti
        possible. <b>J’ai compris quels sont les bénéfices</b> apportés par
        cette syntaxe, je dois maintenant trouver les meilleurs moyens de les
        mettre en application.
      </p>
    </>
  ),
};

export const UXUI_ARTICLE: SkillProps['article'] = {
  definition: (
    <>
      <p>
        <b>L’expérience utilisateur</b> (UX) englobe{' '}
        <b>l’ensemble des ressentis, perceptions et interactions</b> vécus par
        l’utilisateur pendant son utilisation du produit ou service concerné.
      </p>
      <p>
        <b>L’interface utilisateur</b> (UI) désigne <b>l’apparence</b> de
        l’écran utilisé lors de l’interaction : son <b>design graphique</b>{' '}
        (couleurs, polices, espacements, bordures…), sa façon de{' '}
        <b>présenter les informations</b>, sa capacité à être
        <b>intuitive</b>. Il s’agit d’une spécialisation de l’UX centrée sur
        l’aspect visuel.
      </p>
      <p>
        Tout développeur frontend se doit d’avoir des notions d’UX/UI. Notre
        métier consistant à donner vie aux maquettes imaginées par les
        designers, il est essentiel de connaître les bonnes pratiques de design
        d’interface et d’expérience utilisateur afin de{' '}
        <b>comprendre parfaitement les intentions</b> à mettre en place, et
        aussi pour pouvoir repérer des dysfonctionnements avant le déploiement
        du code.
      </p>
      <p>
        C’est le sens de{' '}
        <a
          href="https://www.freecodecamp.org/news/why-front-end-developers-should-understand-uiux-design/"
          target="_blank">
          cet article
        </a>{' '}
        de Free Code Camp qui détaille les bonnes pratiques UX/UI clés qu’un
        développeur frontend doit connaitre. Cet article propose d’ailleurs une
        comparaison qui résume l’intérêt pour un développeur de maîtriser ces
        notions en comparant l’aspect fonctionnel d’un développement (est-ce que
        ça fonctionne ?) à l’aspect ergonomique (est-ce que cela semble naturel
        à utiliser ?).{' '}
        <b>
          Un développeur sensibilisé à ce questionnement produira spontanément
          une solution qui répond aux enjeux d’ergonomie
        </b>
        .
      </p>
    </>
  ),
  proofs: (
    <>
      <p>
        Lors de mon alternance chez Édifice,{' '}
        <b>j’ai pu travailler avec trois designers</b>. Pendant ces deux ans,
        j’ai vécu avec eux à plusieurs reprises le{' '}
        <b>cycle complet de développement d’une nouvelle fonctionnalité</b>,
        dont le point de départ est la <b>recherche utilisateur</b> et la{' '}
        <b>réalisation de maquettes</b>, produites par leurs soins.
      </p>
      <p>
        En tant que développeur je suis peu impliqué sur la prise d’insights
        utilisateurs, c’est donc principalement en discutant avec eux que{' '}
        <b>
          je me tiens au courant de la façon dont les utilisateurs interagissent
          avec notre application
        </b>
        . Lorsque j&apos;apprends qu’ils vont rencontrer des utilisateurs,
        j’écoute toujours leurs feedbacks avec beaucoup d’attention.
      </p>
      <p>
        Au cours de mon alternance, j’ai pu participer au développement du{' '}
        <Link to={`/works/${WORKS_TAGS.wiki.path}`}>module Cours & Wiki</Link>{' '}
        qui permet aux enseignants de créer un cours au format wiki, et aux
        élèves de le consulter facilement. Le point de départ de ce chantier
        était une maquette créée par les designers sur le logiciel Figma.
      </p>
      <p>
        Pendant la présentation des maquettes, nous (les développeurs) avons pu
        poser plusieurs questions aux designers sur la façon dont ils avaient
        agencés les éléments. Il se trouve que la disposition des pages et
        sous-pages du cours telle qu’elle était présentée posait un grand
        challenge technique.
      </p>
      <p>
        Nous avons commencé par <b>chercher à comprendre les intentions</b> des
        designers pour ensuite <b>trouver ensemble une solution plus simple</b>{' '}
        à réaliser, tout en répondant aux mêmes enjeux UX/UI. Une fois ces
        problématiques résolues, nous pouvions commencer à coder.
      </p>
      <p>
        J’ai donc <b>appris à utiliser Figma</b> au cours de mon alternance, qui
        s’avère très utile pour{' '}
        <b>garantir la fidélité du développement envers les maquettes</b>. Nous
        disposons grâce à Figma de toutes les informations cruciales, comme la
        taille des éléments, la valeur en pixels des espacements, ou encore les
        codes des couleurs à utiliser par exemple.
      </p>
      <p>
        Pour la réalisation du{' '}
        <Link to={`/works/${WORKS_TAGS.carrousel.path}`}>
          Carrousel Multimédia
        </Link>
        , j’ai été confronté à plusieurs{' '}
        <b>
          difficultés techniques qui m’ont conduit à devoir remettre en question
          certains choix des designers
        </b>
        .
      </p>
      <p>
        Il était initialement prévu de{' '}
        <b>faire apparaître le composant de pagination</b> (l’élément présentant
        les vignettes miniatures de médias cliquables) <b>à chaque swipe</b> sur
        un nouvel élément du carrousel.{' '}
      </p>
      <p>
        Cette mécanique entrait en conflit avec l’apparition de l’interface de
        contrôles des composants audio et vidéo, notamment la barre de
        progression qui indique la durée de lecture qui devait être rendue au
        même endroit que le composant de pagination.{' '}
        <b>
          Nous avons donc convenu avec les designers d’une logique différente
        </b>{' '}
        pour les médias de ce type, dont le résultat consistait à{' '}
        <b>créer une animation</b> pour masquer le composant de pagination
        lorsqu’on swipe sur un média audio ou vidéo.
      </p>
      <p>
        Le fait d’avoir été sensibilisé aux bonnes pratiques UX/UI m’a permis de
        repérer cette anomalie et d’avoir un échange constructif avec les
        designers pour trouver apporter une solution.
      </p>
    </>
  ),
  criticism: (
    <>
      <p>
        Je pense avoir une sensibilité aux enjeux UX/UI qui me permet de{' '}
        <b>me poser les bonnes questions</b> au démarrage d’un développement, et
        de <b>contribuer à l’identification de solutions pertinentes</b> tant
        dans la dimension technique que dans celle du design.
      </p>
      <p>
        Je ne dispose pas d’un oeil aussi acéré que celui d’un designer, mais
        j’apprends constamment de nouvelles notions qui m’aident à m’en
        rapprocher et à améliorer la qualité du code que je produis au
        quotidien.
      </p>
      <p>
        Les échanges que je peux avoir avec les designers sont toujours riches
        d’enseignements, ce sont des{' '}
        <b>
          moments privilégiés que je considère comme importants et
          indispensables
        </b>
        , j’essaie donc d’en tirer un maximum de valeur.
      </p>
    </>
  ),
  evolution: (
    <>
      <p>
        L’axe de progression principal que j’ai identifié sur cette compétence
        consiste à <b>apprendre des notions d’UX/UI plus complexes</b> et à me
        documenter de manière plus exhaustive afin de pouvoir connaître toutes
        les règles d’or et bonnes pratiques qui me seront utiles.
      </p>
    </>
  ),
};
