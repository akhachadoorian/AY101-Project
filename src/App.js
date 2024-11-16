import logo from './logo.svg';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className="index">
      <div className="galaxy-header">
          <div className="galaxy">
              <h1>Milky Way</h1>

          </div>
      </div>

      <div className="formation-solar-system">
          <h2>Start to the Formation of the Solar System</h2>
          <div className="formation">
              <div className="glass-box">
                  <div className="icon-w-head">
                      <i className="fa-brands fa-cloudflare"></i>
                      <h4>Protosolar Nebula</h4>
                  </div>
                  <p>A protosolar nebula is a collapsing gas cloud that spins very slowly around a horizontal axis. This horizontal spinning causes the height of the gas cloud to decrease, as it is easier for the gas to fall in the direction perpendicular to its rotation.</p>
              </div>
              <div className="glass-box">
                  <div className="icon-w-head">
                      <i className="fa-solid fa-rotate-right"></i>
                      <h4>Conservation of Momentum</h4>
                  </div>
                  
                  <p>During its collapse, the material within the protosolar nebula congregates in the center. The aggregation of material, alongside the nebula's decrease in size, permits the nebula to conserve angular momentum, which increases its rotation speed, and causes it to flatten more quickly.</p>
              </div>
              <div className="glass-box">
                  <div className="icon-w-head">
                      <i className="fa-solid fa-temperature-arrow-up"></i>
                      <h4>Energy Conversion</h4>
                  </div>
                  <p>The potential energy in the protosolar nebula is converted into thermal energy, increasing the temperature at the center of the gas cloud. This extremely hot center is where the protostar, which will be the Sun, is formed.</p>
              </div>
          </div>
      </div>


      <div className="planet-components">
          <h2>Components for Planet Building</h2>
          <div className="planet-comp" id="planet-comp">
  
          </div>

          <div className="planet-comp">
              <div className="glass-box">
                  <div className="icon-w-head">
                      <i className="fa-solid fa-mound"></i>
                      <h4>Rocks</h4>
                  </div>
                  <p><strong>Relative Abundance by mass: </strong>0.4%</p>
                  <p><strong>Typical condensation temperature: </strong>500 - 1300 K</p>
                  <p><strong>Examples:</strong> Various minerals</p> 
              </div>
              <div className="glass-box">
                  <div className="icon-w-head">
                      <i className="fa-solid fa-mountain"></i>
                      <h4>Metal</h4>
                  </div>
                  <p><strong>Relative Abundance by mass: </strong>0.2%</p>
                  <p><strong>Typical condensation temperature: </strong>1000 - 1600 K</p>
                  <p><strong>Examples:</strong> Iron, Nickel, and Aluminum</p> 
              </div>
          </div>
      </div>

      <div className="protoplanet-formation">
          <h2>Protoplanetary Core Formation</h2>
          <div className="proto-planet">
              <div className="text">
                  <p>The nebula's center has a very high temperature, which decreases as you move to the outskirts. This temperature distribution affects the formation of protoplanetary cores — specifically their size and composition — by limiting the amount and type of material available.</p>
                  <p>The <strong>frost line</strong>, located between the orbits of Mars and Jupiter, designates the position within the nebula where elements besides hydrogen begin to condense. Thus, planets formed within the frost line are composed of rock and metal, whereas planets formed outside the frost line are composed of rock, metal, and ice.</p>
              </div>
              <div className="filler"></div>
          </div>
          
      </div>
    </div>
  );
}

export default App;
