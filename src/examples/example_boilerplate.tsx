import { createRoot } from 'react-dom/client';
import { Milestones } from '../components/index';

console.log('Milestones example loading');

const tempWindow: any = window;

// Create a function to initialize the example that will be globally available
tempWindow.initializeExample = function (props: any) {
  const appElement = document.getElementById('milestones-container');
  if (!appElement) {
    throw new Error('App element not found');
  }
  const root = createRoot(appElement);
  root.render(<Milestones {...props} />);
};
