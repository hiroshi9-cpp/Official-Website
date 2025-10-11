import resumePDF from "../assets/resume.pdf";

const Resume = () => (
  <section id="Resume" className="py-20 px-6">
    <h2 className="text-4xl text-cyber-blue font-bold text-center mb-12">Resume</h2>
    <div className="text-center">
      <a href={resumePDF} download className="bg-cyber-blue text-cyber-dark px-6 py-3 rounded-lg font-bold hover:bg-cyber-neon transition">
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
