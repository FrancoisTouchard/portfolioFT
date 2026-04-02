import './PreviousLife.css';

import React from 'react';

const PreviousLife = () => {
  return (
    <div className="previous-life-container">
      <h2 className="previous-life-title">Et avant celà...</h2>
      <p className="previous-life-text">
        Avant de devenir développeur, j&apos;ai obtenu un Master en{' '}
        <b>marketing et communication</b>, puis ai travaillé pendant 5 ans dans
        des agences de publicité à Paris. La posture de consultant ne me
        convenant pas vraiment, j&apos;ai fait le choix en 2022 de faire une{' '}
        <b>reconversion professionnelle</b> afin de pouvoir exercer un métier
        qui m&apos;intéresse pleinement.
      </p>
      <p className="previous-life-text">
        Je garde quelques atouts de mon précédent parcours, notamment une
        sensibilité qui me permet de{' '}
        <b>penser naturellement à l&apos;utilisateur final</b> de la solution
        que je vais développer, la publicité ayant ce point commun avec la
        programmation d&apos;être centrée sur la personne à qui elle est
        destinée.
      </p>

      <p className="previous-life-text">
        Aujourd&apos;hui, après 4 années passées à me former, je suis convaincu
        d&apos;avoir fait le bon choix en ayant opté pour un métier qui permet
        de <b>s&apos;épanouir tant sur le plan technique que créatif</b>, et où
        l&apos;on a jamais fini d&apos;apprendre.
      </p>
    </div>
  );
};

export default PreviousLife;
