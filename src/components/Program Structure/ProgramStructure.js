import "./ProgramStructure.css";
import ZoomLogo from "../logos/zoom-logo.png";
import DiscordLogo from "../logos/discord-logo.png";
import DiscordIllustration from "../images/illustration-discord.png";
import ZoomIllustration from "../images/illustration-zoom.png";

export default function ProgramStructure() {
    return (
        <div class="ProgramStructure">
            <h1><b>Program</b> Structure</h1>
            <h2>Typical week in the cohort</h2>
            <h3>Communication and networking are core components of the ClasspertX course experience. In this course, you will be part of a global learning community. In order to accommodate all participants, we have designed much of the course experience to take place asynchronously, with a synchronous class session that occurs weekly on Saturdays</h3>
            <div class="ProgramStructure-container">
                <div class="ProgramStructure-item">
                    <div class="content">
                        <div class="list">
                            <h4><img src={DiscordLogo} alt="Discord" height={"30px"} />Async Sessions on Discord</h4>
                            ~ 2 hours of self-paced material during the week
                            <ul>
                                <li>Reading from the book</li>
                                <li>Videos</li>
                                <li>Quizzes</li>
                                <li>Exercises</li>
                                <li>Students will be prompted to submit questions during the week, and the instructor should choose questions to answer for students during the weekend session</li>
                            </ul>
                        </div>
                        <div class="image">
                            <img src={DiscordIllustration} alt="Discord" height={"400px"} />
                        </div>
                    </div>
                </div>
                <div class="ProgramStructure-item">
                <div class="content">
                        <div class="list">
                            <h4><img src={ZoomLogo} alt="Discord" height={"30px"} />Sync Sessions on Zoom</h4>
                            ~ 2 hours of lectures and exercises on the weekend
                            <ul>
                                <li>Q&A with the instructor</li>
                                <li>Additional demos / examples of key topics</li>
                                <li>Group practice - students break out to work on an exercise</li>
                                <li>Group discussion</li>
                            </ul>
                        </div>
                        <div class="image">
                            <img src={ZoomIllustration} alt="Discord" height={"400px"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}