const experiences = [
  {
    role: "Security Engineer",
    company: "Grant Thornton Advisors",
    duration: "2023 - Present",
    bullets: [
      "SIEM Engineering: Developed custom EQL/KQL rules reducing false positives by 25%",
      "EDR Operations: Led real-time remediation under 1-hour SLA",
      "Automation: Built threat-hunting workflows cutting manual effort by 95%"
    ]
  },
  // Add more experiences here
];

const WorkExperience = () => {
  return (
    <section id="WorkExperience" className="py-20 px-6 bg-cyber-dark">
      <h2 className="text-4xl text-cyber-blue font-bold text-center mb-12">Work Experience</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-2xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-gray-400">{exp.duration}</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
