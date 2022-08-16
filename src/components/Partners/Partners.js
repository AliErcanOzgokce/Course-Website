import "./Partners.css";
import udemy from "../logos/udemy-logo-white.svg";
import udacity from "../logos/udacity-logo-white.svg";
import coursera from "../logos/coursera-logo-white.svg";
import skillshare from "../logos/skillshare-logo-white.svg";
import linkedin from "../logos/linkedin-logo-white.svg";

export default function Partners() {
    return (
        <div className="Partners">
            <h1>Partners</h1>
            <div className="partners-container">
                <img src={udemy} alt="udemy" />
                <img src={udacity} alt="udacity" />
                <img src={coursera} alt="coursera" />
                <img src={skillshare} alt="skillshare" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
    );
}