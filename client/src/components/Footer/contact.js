import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
  return (
    <section className="contact-area" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="contact-content text-center">
            <div className="hr"></div>
            <h6>
              +234 80 706675 53<span>|</span>+234 80 3285 90 22
            </h6>
            <div className="contact-social">
              <ul>
                <li>
                  <a
                    className="hover-target"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white' }}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    <div className="account-links"></div>
                  </a>
                </li>
                <li>
                  <a
                    className="hover-target"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white' }}
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    <div className="account-links"></div>
                  </a>
                </li>
                <li>
                  <a
                    className="hover-target"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white' }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <div className="account-links"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="social-links">
      <small>
        <a href="https://github.com/2virtual" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          https://github.com/2virtual
        </a>
        &nbsp;|&nbsp;
        <a href="https://twitter.com/TechieAfrica" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          https://twitter.com/TechieAfrica
        </a>
        &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/PinkeeBAM/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          https://www.linkedin.com/in/PinkeeBAM/
        </a>
      </small>
      <br />
      <small>
        <a href="https://github.com/BusolaAM" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          https://github.com/BusolaAM
        </a>
        &nbsp;|&nbsp;
        <a href="https://twitter.com/PinkeeBAM" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          https://twitter.com/PinkeeBAM
        </a>
        &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/PinkeeBAM/olalekan-Ogundipe" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          https://www.linkedin.com/in/PinkeeBAM/olalekan-Ogundipe
        </a>
      </small>
    </div>
  </section>
  );
}

export default ContactSection;








// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faLinkedinIn, faGithub, faBehance, faPinterestP } from '@fortawesome/free-brands-svg-icons';


// function ContactSection() {
//     return (
//       <section className="contact-area" id="contact">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 offset-lg-3">
//             <div className="contact-content text-center">

//               <div className="hr"></div>
//               <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
//               <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
//               <div className="contact-social">
//                 <ul>
//                   <li><a className="hover-target" href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
//                   <li><a className="hover-target" href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
//                   <li><a className="hover-target" href="/"><FontAwesomeIcon icon={faGithub} /></a></li>
//                   <li><a className="hover-target" href="/"><FontAwesomeIcon icon={faBehance} /></a></li>
//                   <li><a className="hover-target" href="/"><FontAwesomeIcon icon={faPinterestP} /></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     );
//   }

//   export default ContactSection;