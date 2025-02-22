function Projects() {
  return (
    <div className="projects" id="my-work">
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
            <a
              href="https://davidnino21.github.io/pokemon-index/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Pokemon Index</h3>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="/groovy.png" alt="" />
          <div>
            <a
              href="https://ai-groovy-graphics-dd548751a1ac.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Groovy Graphics</h3>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="/text-editor.png" alt="" />
          <div>
            <a
              href="https://texteditor-80wv.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Text Editor</h3>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="/time-transformer.png" alt="" />
          <div>
          <a
              href="https://time-transformer.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Time Transformer</h3>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="/calculator.png" alt="" />
          <div>
            <a
              href="https://davidnino21.github.io/simple-calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Calculator</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
