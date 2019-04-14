import React from 'react';

import ReactDOM from "react-dom";
import TodoApp from './TodoApp'
import MarkdownEditor from './MarkdownEditor'
import Table from './FragmentTest'
import Badge from './Badge'

ReactDOM.render(
  <div>
     <Table />
     <TodoApp/>
     <MarkdownEditor/>
     <Badge pill variant="primary">
        Primary
    </Badge>
  </div>,
  document.getElementById('root')
);