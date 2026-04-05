import React from 'react';
import { Link } from 'react-router-dom';

import { SKILLS_TAGS } from '../../../utils/navigation/navigation-links';

export const ABOUT_ARTICLE = {
  presentation: (
    <>
      <p>
        Je suis{' '}
        <b>
          développeur frontend spécialisé en applications mobiles iOS & Android
        </b>
        . J&apos;ai d&apos;abord appris le{' '}
        <Link to={`/skills/${SKILLS_TAGS.javascript.path}`}>JavaScript</Link>,
        puis me suis tourné vers le framework{' '}
        <Link to={`/skills/${SKILLS_TAGS.react.path}`}>React</Link> et plus
        particulièrement vers sa déclinaison dédiée au mobile :{' '}
        <b>
          <Link to={`/skills/${SKILLS_TAGS.reactNative.path}`}>
            React Native
          </Link>
        </b>
        .
      </p>
      <p>
        Ce métier est le fruit d&apos;une <b>reconversion professionnelle</b> :
        initialement diplômé d&apos;un Master en communication & marketing,
        j&apos;ai travaillé pendant 5 ans dans des agences de publicité en tant
        que <b>planneur stratégique</b>, poste consistant à imaginer des
        stratégies de communication basées sur la compréhension des besoins et
        des aspirations des consommateurs.
      </p>
      <p>
        J&apos;ai toujours souhaité proposer des dispositifs dépassant le cadre
        de la communication et avoir une grande liberté dans la conception et la
        réalisation des expériences que j&apos;imagine. C&apos;est donc la
        possibilité de <b>donner vie à mes idées</b> qui m&apos;a poussé à
        changer de métier pour devenir développeur.
      </p>
      <p>
        Cette reconversion a abouti en septembre 2026 à l&apos;obtention du{' '}
        <b>
          Master Expert en Ingénierie du Logiciel à l&apos;
          <Link to={'/experiences/iscod'}>ISCOD</Link>
        </b>
        , ainsi qu&apos;à la fin d&apos;une{' '}
        <b>
          alternance de 2 ans chez{' '}
          <Link to={'/experiences/edifice'}>Édifice</Link>
        </b>{' '}
        au sein de l&apos;équipe en charge du développement des applications
        mobiles.
      </p>
      <p>
        Édifice édite un <b>Espace de Travail Numérique</b> utilisé dans de
        nombreux établissements scolaires en France et à l&apos;étranger. Cela
        m&apos;a permis de me former en participant à des projets de long terme
        et en étant confronté aux retours de multiples utilisateurs aux profils
        variés : les élèves, leurs parents, les enseignants et les porteurs du
        projet au sein des académies.
      </p>
      <p>
        C&apos;était un cadre idéal pour apprendre en étant entouré des métiers
        iconiques de la méthode <b>Agile/Scrum</b> : Product Owner/Manager,
        Quality Analysts, designers, sans oublier les nombreux développeurs
        frontend, backend et mobile.
      </p>
      <p>
        J&apos;ai toujours eu une grande affinité pour le mobile, principalement
        car il est devenu essentiel dans le quotidien de beaucoup de gens, et
        qui offre un champ des possibles très vaste en s&apos;appuyant sur des
        technologies très intéressantes à exploiter comme la{' '}
        <b>géolocalisation</b>, l&apos;<b>appareil photo</b>, la{' '}
        <b>captation audio et vidéo</b>, la <b>réalité augmentée</b> ou encore
        des dispositifs comme le <b>gyroscope</b> ou l&apos;<b>accéléromètre</b>
        .
      </p>
      <p>
        Mon expérience chez Édifice m&apos;a conforté dans le choix de cette
        spécialisation en me donnant deux ans pour me familiariser à tous les
        enjeux liés au développement d&apos;une application mobile.
      </p>
      <p>
        J&apos;ai pu participer à la réalisation de plusieurs fonctionnalités
        que vous pouvez en partie retrouver sur la{' '}
        <Link to="/works">page Réalisations</Link>. Pendant ces développements,
        j&apos;ai pu bénéficier du regard d&apos;un développeur sénior qui
        m&apos;a sensibilisé aux <b>bonnes pratiques</b>, aux techniques
        permettant de garantir la <b>performance de l&apos;application</b>, et
        aux nombreuses subtilités qu&apos;implique le développement{' '}
        <b>cross-platform iOS/Android</b> (prendre en compte des différentes
        versions de systèmes d&apos;exploitations clients, et de la variété des
        modèles de téléphones utilisés).
      </p>
      <p>
        Au cours de cette alternance, j&apos;ai aussi pu découvrir les aspects
        techniques liés à la <b>maintenance de l&apos;application</b> en
        apprenant à utiliser la console <b>Firebase</b> pour le monitoring et la
        remontée de bugs rencontrés en production par nos utilisateurs.
        J&apos;ai également eu l&apos;opportunité de travailler sur les
        problématiques de{' '}
        <b>déploiement et de mise à disposition de l&apos;application</b> sur
        les stores Apple et Google.
      </p>
      <p>
        J&apos;ai désormais toutes les cartes en main pour bâtir des expériences
        numériques de qualité, et m&apos;oriente à présent vers l&apos;étude et
        la pratique des langages natifs iOS et Android, <b>Swift et Kotlin</b>,
        afin de parfaire ma maîtrise du développement d&apos;applications
        mobiles.
      </p>
    </>
  ),
  values: (
    <>
      <p>
        <b>Loyauté, Humilité, Créativité, Persévérance</b>
      </p>
      <p>
        La <b>loyauté</b> est une valeur que je considère fondamentale, aussi
        bien dans ma vie professionnelle que personnelle. Elle se traduit par un
        engagement sincère et constant envers les projets et les personnes avec
        lesquels je collabore. Durant mes deux années d&apos;alternance chez
        Édifice, j&apos;ai eu à cœur de m&apos;investir pleinement dans chaque
        mission confiée, même face aux défis techniques les plus ardus. Cette
        loyauté envers l&apos;équipe et le produit s&apos;est manifestée par une
        implication allant au-delà du simple cadre de mes attributions :
        participer activement aux discussions sur les orientations techniques,
        contribuer à l&apos;amélioration continue de l&apos;application, et
        rester disponible pour mes collègues lorsqu&apos;ils en avaient besoin.
      </p>
      <p>
        L&apos;<b>humilité</b> est, à mes yeux, une condition indispensable pour
        progresser dans un domaine aussi vaste et en constante évolution que le
        développement logiciel. Ma reconversion professionnelle m&apos;a
        enseigné cette valeur de façon concrète : j&apos;ai dû accepter de
        repartir de zéro, d&apos;être débutant après avoir été un professionnel
        expérimenté. Cette expérience m&apos;a appris à accueillir les retours
        sans les vivre comme des attaques, à reconnaître mes lacunes pour mieux
        les combler, et à valoriser le savoir de ceux qui ont davantage
        d&apos;expérience. Au sein des équipes que j&apos;ai côtoyées chez
        Édifice, j&apos;ai toujours cherché à apprendre de mes collègues
        développeurs frontend, backend ou mobile, conscient que chaque
        perspective enrichit ma propre compréhension et rend le produit
        meilleur.
      </p>
      <p>
        La <b>créativité</b> est peut-être la valeur qui a le plus guidé mon
        parcours. C&apos;est elle qui m&apos;a conduit à quitter le monde de la
        communication pour celui du développement : non pas pour fuir la
        création, mais pour lui donner une dimension concrète et technique. En
        tant que planneur stratégique, j&apos;imaginais des expériences que
        d&apos;autres réalisaient. Aujourd&apos;hui, je les conçois et les
        construis. Cette double culture, créative et technique, me permet
        d&apos;aborder les problèmes sous un angle singulier, en cherchant des
        solutions qui conjuguent <b>esthétique, ergonomie et performance</b>.
      </p>
      <p>
        La <b>persévérance</b> est une qualité que j&apos;ai dû exercer tout au
        long de ma reconversion. Apprendre à coder en parallèle d&apos;une vie
        professionnelle active, puis réussir à intégrer une alternance de deux
        ans dans une entreprise éditrice de logiciels reconnue, n&apos;a pas été
        un parcours sans obstacles. Chaque bug difficile à corriger, chaque
        concept complexe à assimiler, chaque délai serré à respecter ont exigé
        de tenir bon. Cette persévérance, je la considère aujourd&apos;hui comme
        l&apos;un de mes atouts les plus précieux : elle me permet de
        m&apos;inscrire dans la durée sur des projets techniquement exigeants
        sans perdre le fil ni la motivation.
      </p>
    </>
  ),
  qualities: (
    <>
      <p>
        <b>Implication, Ouverture d&apos;esprit, Curiosité</b>
      </p>
      <p>
        Mon <b>implication</b> se manifeste dans la façon dont j&apos;aborde
        chaque tâche. Je n&apos;aime pas laisser un travail inachevé ou bâclé.
        Chez Édifice, cette exigence envers moi-même m&apos;a conduit à prendre
        soin de la <b>qualité du code produit</b> : m&apos;assurer que les
        fonctionnalités développées étaient correctement testées et revues avant
        que je ne les livre.
      </p>
      <p>
        Travailler dans un environnement agile avec des Product Owners, des
        Quality Analysts et des designers m&apos;a renforcé dans cette culture :
        chaque livraison avait un impact direct et mesurable sur des{' '}
        <b>milliers d&apos;utilisateurs</b> aux profils très différents, ce qui
        impose une rigueur permanente.
      </p>
      <p>
        Mon <b>ouverture d&apos;esprit</b> est profondément ancrée dans mon
        parcours atypique. Avoir évolué dans deux univers professionnels très
        différents, la communication stratégique et le développement logiciel,
        m&apos;a appris à ne jamais m&apos;enfermer dans une seule façon de voir
        les choses. Cette ouverture me permet de mieux collaborer avec des
        profils variés : je comprends les enjeux business et utilisateurs autant
        que les contraintes techniques.
      </p>
      <p>
        Elle se manifeste également dans mon rapport aux langages : après
        m&apos;être spécialisé en <b>JavaScript, TypeScript et React Native</b>,
        je m&apos;intéresse désormais aux langages natifs <b>Swift et Kotlin</b>
        , avec la conviction que comprendre les fondements permet de mieux
        maîtriser les abstractions qui les recouvrent.
      </p>
      <p>
        Ma <b>curiosité</b> est le moteur de tout ce que j&apos;entreprends.
        C&apos;est elle qui m&apos;a poussé à changer de métier, à explorer des
        domaines techniques toujours plus exigeants, et à ne jamais me
        satisfaire de savoir utiliser un outil sans en comprendre le
        fonctionnement. Cette curiosité dépasse largement le cadre professionnel
        : j&apos;ai toujours pris plaisir à comprendre des points de vue
        différents des miens, à discuter avec les autres pour élargir mon champ
        de vision et découvrir des idées auxquelles je n&apos;aurai jamais pensé
        tout seul.
      </p>
    </>
  ),
  interests: (
    <>
      <p>
        🥁🎸 La musique occupe une place très importante dans ma vie. Je suis
        batteur dans un groupe formé avec des amis, et pratique aussi la guitare
        occasionnellement. Je me rends souvent à des concerts, de préférence
        dans des petites salles pour découvrir de nouveaux artistes.
      </p>
      <p>
        📚 La lecture est une de mes sources d&apos;évasion favorites.
        J&apos;essaie de m&apos;intéresser à des auteurs, autrices et des genres
        divers et variés. C&apos;est aussi un excellent moyen de me couper des
        écrans devant lesquels je passe beaucoup de temps.
      </p>
      <p>
        ⚽🎾⛷️🏂 J&apos;aime également beaucoup le sport, et notamment les
        sports d&apos;hiver, le football et le tennis que je pratique dès que
        j&apos;en ai l&apos;occasion et dont je suis régulièrement
        l&apos;actualité.
      </p>
      <p>
        🎮 Ce ne sera pas original pour un développeur, mais j&apos;aime
        également beaucoup les jeux vidéos pour leur capacité à me faire voyager
        de manière interactive dans des mondes fantastiques, et aussi à me
        réunir avec mes amis lorsque nous jouons en ligne. Mes titres préférés
        par exemple les Resident Evil, The Witcher ou encore Red Dead
        Redemption.
      </p>
      <p>
        🌍🇬🇧🇪🇸🇯🇵 Enfin, j&apos;ai beaucoup d&apos;intérêt pour les cultures et
        les langues étrangères, ce qui m&apos;a poussé à voyager notamment en
        Amérique du Nord et du Sud, au Népal ou au Japon. Je parle couramment
        anglais, un espagnol correct, et je débute en japonais.
      </p>
    </>
  ),
};
