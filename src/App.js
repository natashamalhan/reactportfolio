import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <div>
  <header className="w3-display-container w3-content w3-center" style={{maxWidth: 1500}}>
    <div className="w3-display-middle w3-padding-large w3-border w3-wide w3-text-light-grey w3-center">
      <h3 className="w3-hide-medium w3-hide-small">Natasha Malhan CS Student</h3>
    </div>
  </header>
  <div className="w3-center w3-light-grey w3-padding-16 w3-hide-medium">
    <div className="w3-bar w3-light-grey">
      <a href="#about" className="w3-bar-item w3-button">About Me</a>
      <a href="#portfolio" className="w3-bar-item w3-button">Portfolio</a>
      <a href="#contact" className="w3-bar-item w3-button">Contact</a>
    </div>
  </div>
  <div className="w3-light-grey w3-padding-large w3-padding-32 w3-margin-top" id="about">
    <h3 className="w3-center">About</h3>
    <hr />
    <center><p>My name is Natasha Malhan, I'm a current CS Student with UW Bootcamp, </p></center>
  </div>
  <div className="w3-content w3-padding-large w3-margin-top" id="portfolio">
    <img src={require("./Screenshot 2023-06-07 at 6.01.55 PM.png")} alt="notetaker" className="w3-image" width={1000} height={500} />
    <img src={require("./Screenshot 2023-06-21 at 12.21.55 PM (2).png")} alt="password generator" className="w3-image w3-margin-top" width={1000} height={500} />
    <img src={require("./Screenshot 2023-06-21 at 12.25.40 PM (2).png")} alt="forever veggies" width={1000} height={500} />
    <div className="w3-light-grey w3-padding-large w3-padding-32 w3-margin-top" id="contact">
      <h3 className="w3-center">Contact</h3>
      <hr />
      <p>Click below to contact me for all of your coding needs!</p>
      <form action="/action_page.php" target="_blank">
        <div className="w3-section">
          <label>Name</label>
          <input className="w3-input w3-border" type="text" required name="Name" />
        </div>
        <div className="w3-section">
          <label>Email</label>
          <input className="w3-input w3-border" type="text" required name="Email" />
        </div>
        <div className="w3-section">
          <label>Message</label>
          <input className="w3-input w3-border" required name="Message" />
        </div>
        <button type="submit" className="w3-button w3-block w3-dark-grey">Send</button>
      </form><br />
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
