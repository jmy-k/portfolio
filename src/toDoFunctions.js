import chbBRApril from "./assets/DNG-CHB-BR-April.jpg";
import chbBRMay from "./assets/DNG-CHB-BR-May.jpg";
import chbAFApril from "./assets/DNG-CHB-AF-April.jpeg";
import chbArtnet1 from "./assets/DNG-CHB_artnet_300x250.jpg";
import chbArtnet2 from "./assets/DNG-CHB_artnet_300x480.jpg";
import chbArtnet3 from "./assets/DNG-CHB_artnet_300x600.jpg";
import chbArtnet4 from "./assets/DNG-CHB_artnet_640x300.jpg";
import chbArtnet5 from "./assets/DNG-CHB_artnet_970x250.jpg";

const chakaiaItems = [chbBRApril, chbBRMay, chbAFApril, chbArtnet1, chbArtnet2,chbArtnet3,chbArtnet4,chbArtnet5];

const aboutButton = document.querySelector('#about-button');
const workButton = document.querySelector('#work-button');
const dashboard = document.querySelector('#dashboard');
const sidebar = document.querySelector('#sidebar');

/// dom manipulator

export const domManipulator = (function(){
    function emptyDashboard(){
        while (dashboard.children.length>0){
            dashboard.children[0].remove();
        }
    }

    function emptySidebar(){
        while (sidebar.children.length>0){
            sidebar.children[0].remove();
        }
    }

    function aboutPageRender(){
        // about me text
        const mainText = document.createElement('div');
        mainText.id="about-me-text";

        const para1 = document.createElement('div');
        para1.textContent="I was born and raised in Hong Kong, and am currently between home and New York City.";
        
        const para2 = document.createElement('div');
        para2.textContent="My love for art began in the early stages of life through drawing, painting, ceramics, and music. Ultimately this passion combined with my interest in cultural studies led me to earn a degree in Art History at New York University. During my time there, I also developed an interest in coding, for which I took an elective course.";

        const para3=document.createElement('div');
        para3.textContent="I have worked for two galleries, one in Hong Kong, and one in New York, and an art advisory firm in New York. These experiences demonstrated to me a large technological gap in the current art world - platforms meant to connect artists to their audiences and websites intended to support institutions and galleries lack efficiency and usability. This led me to my current journey of web development and UX/UI design, where I am teaching myself HTML, CSS, and JavaScript. I created this site from scratch!"

        const para4=document.createElement('div');
        para4.textContent="Though I have taken a seemingly drastic change, I genuinely believe in the positive potential of the ever-changing Internet in giving the much needed space and tools to artists and creatives. I want to support the community through artist-centered design.";

        mainText.append(para1,para2,para3,para4)

        // social media links + email
        const socialLinks = document.createElement('div');
        socialLinks.id="socials-container"

        const linkedInLink = document.createElement('a');
        linkedInLink.href = "https://www.linkedin.com/in/julia-kan-683828173/";
        linkedInLink.textContent="linkedin";
        linkedInLink.setAttribute('target','_blank');
        linkedInLink.setAttribute('rel','noreferrer noopener');
        linkedInLink.className='socials';

        const gitHubLink =document.createElement('a');
        gitHubLink.href="https://github.com/jmy-k";
        gitHubLink.textContent="github";
        gitHubLink.setAttribute('target','_blank');
        gitHubLink.setAttribute('rel','noreferrer noopener');
        gitHubLink.className='socials';

        const emailLink = document.createElement('a');
        emailLink.href="mailto:myjuliakan@gmail.com";
        emailLink.textContent="email";
        emailLink.className='socials';

        socialLinks.appendChild(linkedInLink);
        socialLinks.appendChild(gitHubLink);
        socialLinks.appendChild(emailLink);

        dashboard.appendChild(mainText);
        dashboard.appendChild(socialLinks)
    }

    function sidebarPopulate(){
        const advertNav=document.createElement('div');
        advertNav.textContent="ads and posters";
        advertNav.className="sidebar-nav";
        advertNav.addEventListener('click',()=>{
            adPageRender();
        })

        const artworkNav = document.createElement('div');
        artworkNav.textContent="artwork previews";
        artworkNav.className="sidebar-nav";

        const projectNav = document.createElement('div');
        projectNav.textContent="projects";
        projectNav.className="sidebar-nav";

        sidebar.appendChild(advertNav);
        sidebar.appendChild(artworkNav);
        sidebar.appendChild(projectNav);

    }

    function adPageRender(){
        const chakaiaContainer = document.createElement('div');
        chakaiaContainer.className="carousel";

        const carouselWrapper = document.createElement('div');
        carouselWrapper.className="carousel-wrapper";

        for (let i=0;i<chakaiaItems.length;i++){
            const carouselItem=document.createElement('div');
            carouselItem.className="carousel-item";
            const itemFigure = document.createElement('figure');
            const itemImage = document.createElement('img');
            itemImage.src=chakaiaItems[i];

            itemFigure.appendChild(itemImage);
            carouselItem.appendChild(itemFigure);

            carouselWrapper.appendChild(carouselItem);
        }

        chakaiaContainer.appendChild(carouselWrapper);

        dashboard.appendChild(chakaiaContainer);
       
    }

    return {
        emptyDashboard,
        emptySidebar,
        aboutPageRender,
        sidebarPopulate,
        adPageRender,
    }
})();



//const chakaiaBrochure = document.createElement('object');
//chakaiaBrochure.className="brochure";
//chakaiaBrochure.data=PDF;
//chakaiaBrochure.type="application/pdf"
//dashboard.appendChild(chakaiaBrochure)