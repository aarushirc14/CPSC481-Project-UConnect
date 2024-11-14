// src/components/Card.jsx

export default function Card({ title, description }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    );
  }
  