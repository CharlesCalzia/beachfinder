import './About.scss'

const About = () => {

    return <>
    <div className="About-cont">
            <br></br>
            <p class="h1 ms-4 mb-3">About us</p>
            <p class="ms-5">BeachFinder is a simple platform for you to discover and enjoy beaches!</p>
            <p class="ms-5">BeachFinder uses various APIs and algorithms to show you nearby beaches, with all the basic information you need about them. You can make an account to save your favourite beaches and have a personalised experience. </p>
            <p class="ms-5">Love beach themed music? Well we've got you covered, BeachFinder has a dedicated section where you can listen to awesome beach themed music, for the vibes of it.</p>
            <p class="ms-5 mb-3">We are continuously developing our platform, adding new features, getting feedback from users and growing our user base</p>
            
            <p class="ms-5 h3 mb-4">We aim to make your beach visit memorable</p>
            

            <form action="https://beachfinder.tech/Signup">
                <input type="submit" value="Sign up" class="button ms-5"/>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p class="ms-5">All Rights Reserved © | BeachFinder</p>
    </div>
    </>
}

export default About;