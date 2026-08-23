import { createRoot } from 'react-dom/client';
import { Milestones } from '../components/index';
import { MilestonesOptions } from '../components/milestones/types';

console.log('Milestones example loading');

const tempWindow = window as Window & {
  initializeExample?: (props: MilestonesOptions) => void;
};

// Create a function to initialize the example that will be globally available
tempWindow.initializeExample = function (props: MilestonesOptions) {
  const appElement = document.getElementById('milestones-container');
  if (!appElement) {
    throw new Error('App element not found');
  }
  const root = createRoot(appElement);
  root.render(<Milestones {...props} />);
};
