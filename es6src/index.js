import React from 'react';

import ReactDOM from "react-dom";
import TodoApp from './TodoApp'
import MarkdownEditor from './MarkdownEditor'
import Table from './FragmentTest'

ReactDOM.render(
  <div>
     <Table />,
     <TodoApp/>,
     <MarkdownEditor/>
  </div>,
  document.getElementById('root')
);