import './PageView.css';

import React from 'react';

import { PageViewProps } from './types';

const PageView: React.FC<PageViewProps> = ({ children }) => {
  return <div className="page-view">{children}</div>;
};

export default PageView;
