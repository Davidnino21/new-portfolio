function Projects() {
  return (
    <div className="projects">
      <h2>My Work</h2>
      <div className="projects-photos">
        <div className="project-card">
          <img src="/netflix.png" alt="" />
          <div>
            <a
              href="https://davidnino21.github.io/netflix-landing-page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Netflix Landing Page</h3>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="/pokemon.png" alt="" />
        </div>
        <div className="project-card">
          <img src="/groovy.png" alt="" />
        </div>
        <div className="project-card">
          <img src="/converter.png" alt="" />
        </div>
        <div className="project-card">
          <img src="/time-transformer.png" alt="" />
        </div>
        <div className="project-card">
          <img src="/calculator.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
