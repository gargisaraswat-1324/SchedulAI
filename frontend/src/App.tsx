import { useState } from 'react';
import Welcome from './components/Welcome';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold">
        SchedulAI
      </h1>

      <p className="mt-3 text-slate-400">
        AI-Powered Academic Timetable & Resource Management
      </p>

      <div className="mt-8">
        <Welcome />

        <button
  onClick={() => setCount(count + 1)}
  className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
>
  Clicked {count} times
</button>
      </div>
      
    </div>
  );
}

export default App;