import "../styles/Home.css";

function Home() {
  return (
    <section id="home">
      <div className="home-content">
        <h1>Rutuja</h1>
        <p>Full-Stack Developer | Passionate About Building Scalable Applications</p>
        <div className="buttons">
          <a href="/resume.pdf" download className="btn">Download Resume</a>
          <a href="#contact" className="btn btn-alt">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
