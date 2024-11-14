
// src/App.jsx
import SignupForm from "./components/SignupForm";
import logo from "./assets/uconnect-full-logo.webp";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131313]">
      <img src={logo} alt="uConnect Logo" className="w-48 h-auto mb-8" /> {/* Logo with margin */}
      <SignupForm />
    </div>
  );
}

export default App;

