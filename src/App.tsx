import logo from "./assets/logo.png";

export function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-100">
      <img className="w-[500px]" src={logo} />
      <h1 className="text-xl font-bold">
        Combined Virtual Air Operations Group
      </h1>
      <div className="mt-5 text-lg">Coming Soon</div>
    </div>
  );
}
