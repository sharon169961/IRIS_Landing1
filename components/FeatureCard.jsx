export default function FeatureCard({ title, children, icon }) {
  return (
    <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-violet-300 mb-2">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
