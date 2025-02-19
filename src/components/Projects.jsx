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
          <div>
            <h3>Pokemon Index</h3>
          </div>
        </div>
        <div className="project-card">
          <img src="/groovy.png" alt="" />
          <div>
            <h3>Groovy Graphics</h3>
          </div>
        </div>

        <div className="project-card">
          <img src="/converter.png" alt="" />
          <div>
            <h3>XchangeXpert</h3>
          </div>
        </div>
        <div className="project-card">
          <img src="/time-transformer.png" alt="" />
          <div>
            <h3>Time-Transformer</h3>
          </div>
        </div>
        <div className="project-card">
          <img src="/calculator.png" alt="" />
          <div>
            <h3>Calculator</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
