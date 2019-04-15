import React from 'react';

import ReactDOM from "react-dom";
import TodoApp from './TodoApp'
import MarkdownEditor from './MarkdownEditor'
import Table from './FragmentTest'
import Badge from './components/Badge'
import UseAntd from './useAntd'
import Affix from './components/Affix'

ReactDOM.render(
  <div>
     <Table />
     <TodoApp/>
     <MarkdownEditor/>
     <Badge pill variant="primary">
        Primary
    </Badge>
    <Affix offsetBottom='0' />
  </div>,
  document.getElementById('root')
);