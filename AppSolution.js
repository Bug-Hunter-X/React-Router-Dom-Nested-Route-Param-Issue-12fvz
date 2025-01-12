```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ParentRoute />}>
          <Route path=":childId" element={<ChildRoute />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function ParentRoute() {
  let {id} = useParams();
  return (
    <div>
      <h1>Parent Route: {id}</h1>
      <Routes>
        <Route path=":childId" element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

function ChildRoute() {
  let {id, childId} = useParams();
  return (
    <div>
      <h1>Child Route: {childId}</h1>
      <p>Parent ID: {id}</p>
    </div>
  );
}

function NotFound() { return <h1>404 Not Found</h1>;}
export default App;
```