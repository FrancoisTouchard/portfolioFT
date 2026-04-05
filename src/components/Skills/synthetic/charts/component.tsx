import './SkillsRadarCharts.css';

import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  TooltipItem,
} from 'chart.js';
import React, { useMemo } from 'react';
import { Radar } from 'react-chartjs-2';

import { HARD_SKILLS_RADAR, SOFT_SKILLS_RADAR } from './radar.data';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const HARD_FILL = 'rgba(99, 179, 237, 0.25)';
const HARD_BORDER = 'rgba(99, 179, 237, 1)';
const HARD_POINT = 'rgba(99, 179, 237, 1)';

const SOFT_FILL = 'rgba(154, 117, 228, 0.25)';
const SOFT_BORDER = 'rgba(154, 117, 228, 1)';
const SOFT_POINT = 'rgba(154, 117, 228, 1)';

const CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding: { top: 0, right: 4, bottom: 0, left: 4 },
  },
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
        display: false,
      },
      pointLabels: {
        color: 'rgba(248, 250, 252, 1)',
        font: {
          family: "'Next Art', sans-serif",
          size: 10,
        },
      },
      grid: {
        color: 'rgba(248, 250, 252, 0.15)',
      },
      angleLines: {
        color: 'rgba(248, 250, 252, 0.15)',
      },
      startAngle: 16,
      afterFit(scale: RadialLinearScale) {
        scale.xCenter = Math.round(scale.chart.width / 2);
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx: TooltipItem<'radar'>) =>
          ` ${ctx.dataset.label ?? ''} : ${ctx.parsed.r} / 5`,
      },
    },
  },
};

const SkillsRadarCharts = () => {
  const data = useMemo(() => {
    const hardLabels = HARD_SKILLS_RADAR.map(e => e.label);
    const softLabels = SOFT_SKILLS_RADAR.map(e => e.label);
    const labels = [...softLabels, ...hardLabels];

    const hardScores: (number | null)[] = [
      ...Array(SOFT_SKILLS_RADAR.length).fill(null),
      ...HARD_SKILLS_RADAR.map(e => e.score),
    ];
    const softScores: (number | null)[] = [
      ...SOFT_SKILLS_RADAR.map(e => e.score),
      ...Array(HARD_SKILLS_RADAR.length).fill(null),
    ];

    return {
      labels,
      datasets: [
        {
          label: 'Compétences techniques',
          data: hardScores,
          backgroundColor: HARD_FILL,
          borderColor: HARD_BORDER,
          pointBackgroundColor: HARD_POINT,
          pointBorderColor: HARD_BORDER,
          borderWidth: 2,
          pointRadius: 4,
          spanGaps: false,
        },
        {
          label: 'Compétences humaines',
          data: softScores,
          backgroundColor: SOFT_FILL,
          borderColor: SOFT_BORDER,
          pointBackgroundColor: SOFT_POINT,
          pointBorderColor: SOFT_BORDER,
          borderWidth: 2,
          pointRadius: 4,
          spanGaps: false,
        },
      ],
    };
  }, []);

  return (
    <div className="skills-radar-charts">
      <div className="skills-radar-legend-items">
        <span className="skills-radar-legend-item">
          <span className="skills-radar-legend-dot skills-radar-legend-dot--hard" />
          Compétences techniques
        </span>
        <span className="skills-radar-legend-item">
          <span className="skills-radar-legend-dot skills-radar-legend-dot--soft" />
          Compétences humaines
        </span>
      </div>
      <div className="skills-radar-canvas-wrapper">
        <Radar data={data} options={CHART_OPTIONS} />
      </div>
      <p className="skills-radar-legend">1 : Débutant / 5 : Expert</p>
    </div>
  );
};

export default SkillsRadarCharts;
