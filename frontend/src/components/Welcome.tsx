// function Welcome() {
//   return (
//     <div>
//       <h1>Welcome to SchedulAI</h1>
//       <p>Manage your academic scheduling intelligently.</p>
//     </div>
//   );
// }   

// export default Welcome;







function Welcome() {
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

      <div className="mt-4">
        {features.map((feature) => (
          <p key={feature} className="mt-2">
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Welcome;