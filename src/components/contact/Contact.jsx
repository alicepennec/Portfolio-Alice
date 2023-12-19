import "./contact.scss"

const Contact = () => {

    return ( 
        <div className="contact" id="contact">
            <div className="top">
                <h2>Contact</h2>
            </div>
            <div className="container">
                <div className="bulle">
                    <img src="assets/bulle.jpg" alt="" />
                    <p>As a freelance developer, do not hesitate to reach me out so that we can talk about your project. I would be delighted to help you.</p>
                </div>
            </div>
            <div className="bottom">
                <a href="https://linkedin.com/in/alicepennec">
                    <img src="assets/linkedin-icon.png" alt="" />
                </a>
                <a href="mailto:alicepennec@gmail.com">
                    <img src="assets/email.jpg" alt="" />
                </a>
                <a href="https://github.com/alicepennec">
                    <img src="assets/github.png" alt="" />
                </a>
            </div>
        </div>
     );
}
 
export default Contact;