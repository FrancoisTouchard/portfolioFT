import './Timeline.css';

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { EXPERIENCES } from '../Experience/experiences.data';
import TimelineCard from './card/component';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      },
    );

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="main-title">Mon Parcours</h1>

      <div className="timeline">
        <div className="timeline-line" />

        {EXPERIENCES.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.has(exp.id.toString());

          return (
            <div
              key={exp.id}
              ref={el => {
                itemRefs.current[index] = el;
              }}
              data-id={exp.id}
              className={`timeline-item ${isLeft ? 'timeline-item-left' : 'timeline-item-right'} ${isVisible ? 'timeline-item-visible' : 'timeline-item-hidden'}`}>
              <Link
                className="timeline-content"
                to={`/experiences/${exp.slug}`}>
                <TimelineCard
                  cardTags={exp.cardTags}
                  company={exp.company}
                  description={exp.description}
                  logo={exp.logo}
                  position={isLeft ? 'left' : 'right'}
                  title={exp.cardTitle}
                />
              </Link>

              <div className="timeline-marker">
                <div className="circle" />
                <div className="date-label">{exp.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
