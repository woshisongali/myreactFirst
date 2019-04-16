import React from 'react'
import { hot } from 'react-hot-loader'

import TodoApp from './TodoApp'
import MarkdownEditor from './MarkdownEditor'
import Table from './FragmentTest'
import Badge from './components/Badge'
import UseAntd from './useAntd'
import Affix from './components/Affix'
import Carousel from './components/carousel/Carousel'

const App = () => {
  return (
    <div>
     <Table />
     <TodoApp/>
     <MarkdownEditor/>
     <Badge pill variant="primary">
        Primary
    </Badge>
    <Affix offsetBottom='0' >
      the bottom Affix sss
    </Affix>
    <Carousel></Carousel>
  </div>
  )
}

// export default App
export default hot(module)(App)

