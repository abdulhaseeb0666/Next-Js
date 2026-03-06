import { Suspense } from 'react';
import TodoItems from '../components/TodoItems';
import Data2 from '../components/Data2';
import Data3 from '../components/Data3';

const page = async () => {

  
  
  return (
    <div>
        <h1>Todos</h1>
      <Suspense fallback="Loading Todos">
        <TodoItems />        
      </Suspense>

      <br />

      <Suspense fallback="Loading Data2">
        <Data2 />
      </Suspense>

      <br />
      
      <Suspense fallback="Loading Data3">
        <Data3 />
      </Suspense>
    </div>
  )
}

export default page
