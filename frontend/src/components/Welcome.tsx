import { useState } from 'react';


function Welcome() {
  const [showFeatures, setShowFeatures] = useState(true);

  const isLoggedIn = true; // Replace with actual authentication logic

  const features = [
    "Timetable Management",
    "Faculty Management",
    "Room Management",
  ];

  return (
    
    <div className="rounded-xl bg-white p-6 text-slate-900 shadow-lg">
      <h1 className="text-2xl font-bold">
        Welcome to SchedulAI
      </h1>

      <p className="mt-2 text-slate-500">
        Manage your academic scheduling intelligently.
      </p>

      {isLoggedIn ? (
        <p className="mt-2 text-green-600">
          You are logged in!
        </p>
      ) : (
        <p className="mt-2 text-red-600">
          Please log in to access all features.
        </p>
      )}

      <button onClick={() => setShowFeatures(!showFeatures)} 
        className = "mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white ">
         {showFeatures ? 'Hide Features' : 'Show Features' }
      </button>

      {showFeatures && (
      <div className="mt-4">
        {features.map((feature) => (
          <p key={feature} className="mt-2">
            {feature}
          </p>
        ))}
      </div>
      )}
    </div>
  );
}

export default Welcome;