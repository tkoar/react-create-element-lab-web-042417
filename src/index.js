import React from 'react';
import ReactDOM from 'react-dom';

// var me =  React.createElement('h1', {}, "Terrance's super awesome page")
// var description = React.createElement('p', {}, "description of terrance")
//
// var li1 = React.createElement('li', {}, 'JS')
// var li2 = React.createElement('li', {}, '~REACT~')
// var li3 = React.createElement('li', {}, '~RAILS~')
//
// var list = React.createElement('ul', { className: 'my-interests' }, [li1, li2, li3])

const meInReact = React.createElement('div', { className: 'me' },
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', { className: 'my-interests' }, [
      React.createElement('li', {}, 'JavaScript'),
      React.createElement('li', {}, 'React'),
      React.createElement('li', {}, 'Movies'),
      React.createElement('li', {}, 'Ice cream')
    ])
  )

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
