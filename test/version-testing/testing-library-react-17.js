// Custom adapter for @testing-library/react with React 17
const React = require('react-17');
const ReactDOM = require('react-dom-17');
const { getQueriesForElement, prettyDOM, fireEvent } = require('@testing-library/dom');

// Create act function from React 17
const act = React.act || ((callback) => {
  callback();
  return undefined;
});

function render(ui, options = {}) {
  const container = options.container || document.createElement('div');
  if (!container.parentNode) {
    document.body.appendChild(container);
  }

  act(() => {
    ReactDOM.render(ui, container);
  });

  return {
    container,
    baseElement: container.parentElement,
    debug: (el = container) => console.log(prettyDOM(el)),
    unmount: () => {
      act(() => { 
        ReactDOM.unmountComponentAtNode(container); 
      });
    },
    rerender: (ui) => {
      act(() => { 
        ReactDOM.render(ui, container); 
      });
    },
    ...getQueriesForElement(container),
  };
}

// Re-export everything from the testing library
module.exports = {
  render,
  act,
  fireEvent,
  // Add other exports as needed
};