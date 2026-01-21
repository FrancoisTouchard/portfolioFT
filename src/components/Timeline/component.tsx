import React, { useState, useEffect, useRef } from 'react';
import './Timeline.css';
import TimelineCard from './card/component';
import logoEdifice from '../../assets/logos/logo_edifice.png';
import logoIscod from '../../assets/logos/logo_iscod.jpg';
import logoPickme from '../../assets/logos/logo_pickme.png';
import logoEpitech from '../../assets/logos/logo_epitech.png';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      id: 1,
      title: "Développeur Frontend Mobile",
      company: "Édifice (en alternance)",
      date: "02/09/2024 au 02/09/2026",
      description: "Développement de la version application mobile (Android & iOS) de l'espace de travail numérique édité par Édifice. Alternance réalisée dans le cadre de la préparation de mon master à l'ISCOD.",
      logo: { src: logoEdifice, alt: 'Logo Édifice' },
      tags: ["React Native", "JavaScript", "TypeScript", "CSS", "Git"]
    },
    {
      id: 2,
      title: `Master "Expert Ingénierie du Logiciel"`,
      company: "ISCOD",
      date: "02/09/2024 au 02/09/2026",
      description: "Préparation en 2 ans d'un Master visant à finaliser ma reconversion. J'ai suivi à l'ISCOD une formation généraliste de développeur full-stack web.",
      logo: { src: logoIscod, alt: 'Logo ISCOD' },
      tags: ["JavaScript", "TypeScript", "Java", "Kotlin", "Angular", "CSS"]
    },
    {
      id: 3,
      title: "Développeur Fullstack Mobile",
      company: "Pickme (en stage)",
      date: "xx/xx/202x",
      description: "Pickme est une plateforme de livraison collaborative de particuliers qui réceptionnent les colis pour leurs voisins. Stage réalisé dans le cadre de la formation Coding Academy by Epitech.",
      logo: { src: logoPickme, alt: 'Logo Pickme' },
      tags: ["React Native", "Node.js", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Formation Développeur Web",
      company: "Coding Academy by Epitech",
      date: "xx/xx/202x",
      description: "Formation bootcamp de 6 mois sur les technologies web modernes et les bonnes pratiques de développement.",
      logo: { src: logoEpitech, alt: 'Logo Epitech' },
      tags: ["React", "React Native", "JavaScript", "Vue.js", "PHP", "HTML", "CSS", "Git", "Mongo DB", "SQL"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <h1 className="mainTitle">Mon Parcours</h1>

      <div className="timeline">
        <div className="timelineLine" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.has(exp.id.toString());

          return (
            <div
              key={exp.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }} data-id={exp.id}
              className={`timelineItem ${isLeft ? 'timelineItemLeft' : 'timelineItemRight'} ${isVisible ? 'timelineItemVisible' : 'timelineItemHidden'}`}
            >

              <div className="timelineContent">
                <TimelineCard
                  title={exp.title}
                  company={exp.company}
                  description={exp.description}
                  logo={exp.logo}
                  tags={exp.tags}
                  position={isLeft ? 'left' : 'right'}
                />
              </div>

              <div className="timelineMarker">
                <div className="circle" />
                <div className="dateLabel">{exp.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;