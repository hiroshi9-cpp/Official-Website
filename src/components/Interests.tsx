const Interests = () => (
  <section id="Interests" className="py-20 px-6 bg-cyber-dark">
    <h2 className="text-4xl text-cyber-blue font-bold text-center mb-12">Interests</h2>
    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-gray-200">
      <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-cyber-neon transition cursor-pointer">AI Security</span>
      <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-cyber-neon transition cursor-pointer">Cloud Security</span>
      <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-cyber-neon transition cursor-pointer">Threat Hunting</span>
      <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-cyber-neon transition cursor-pointer">Automation</span>
    </div>
  </section>
);

export default Interests;
