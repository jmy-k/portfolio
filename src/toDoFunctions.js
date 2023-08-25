import chbBRApril from "./assets/DNG-CHB-BR-April.jpg";
import chbBRMay from "./assets/DNG-CHB-BR-May.jpg";
import chbAFApril from "./assets/DNG-CHB-AF-April.jpeg";
import chbArtnet from "./assets/DNG-CHB-Artnet-ads.jpeg";
import chbBrochureSmall from "./assets/DNG-CHB-brochure.jpg";

import jvBRFeb from "./assets/DNG-JV-BR-Feb.jpg";
import jvInvite from "./assets/DNG-JV-invite-full.jpg";
import jvArtnet1 from "./assets/DNG-JV-Artnet-ad-full1.jpg";
import jvArtnet2 from "./assets/DNG-JV-Artnet-ad-full2.jpg";

const chakaiaPosters = ["Chakaia Booker: Public Opinion", {title: "The Brooklyn Rail, April Issue", content: chbBRApril}, {title: "The Brooklyn Rail, May Issue", content:chbBRMay}, {title:"Artforum, April Issue", content:chbAFApril},{title: "Artnet Website Desktop and Mobile", content: chbArtnet}, {title:"Exhibition Card Brochure", content:chbBrochureSmall}];
const jorindePosters = ["Jorinde Voigt: The Match", {title:"The Brooklyn Rail, February Issue", content:jvBRFeb},{title:"Artnet Website Desktop and Mobile Set 1", content:jvArtnet1},{title:"Artnet Website Desktop and Mobile Set 2", content:jvArtnet2},{title:"Exhibition Invitation Card", content:jvInvite}]

const adInfo = [{title:"David Nolan Gallery", intro:"i created press packages for each exhibition which includes print media, website and email banners, invitation cards, and information brochures.\r\neach package maintains gallery branding while subtly incorporating thematic styles unique to the exhibition. for each item, i was in charge of image selection, color scheme, and layout."}]


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

        // had to separate it like this in order for nice lineb breaks
        const para1 = document.createElement('div');
        para1.textContent="I was born and raised in Hong Kong, and am currently between home and New York City.";
        
        const para2 = document.createElement('div');
        para2.textContent="My love for art began in the early stages of life through drawing, painting, ceramics, and music. Ultimately this passion combined with my interest in cultural studies led me to earn a degree in Art History at New York University. During my time there, I also developed an interest in coding, for which I took an elective course.";

        const para3=document.createElement('div');
        para3.textContent="I have worked for two galleries, one in Hong Kong, and one in New York, and an art advisory firm in New York. These experiences demonstrated to me a large technological gap in the current art world; platforms meant to connect artists to their audiences and websites intended to support institutions and galleries lack efficiency and usability. This led me to my current journey of web development and UX UI design, where I am teaching myself HTML, CSS, and JavaScript. I created this site from scratch!"

        const para4=document.createElement('div');
        para4.textContent="Though I have taken a seemingly drastic change, I genuinely believe in the positive potential of the everchanging Internet in giving the much needed space and tools to artists and creatives. I want to support the community through artist centered design.";

        mainText.append(para1,para2,para3,para4)

        dashboard.appendChild(mainText);
    }

    function sidebarWork(){ //called when "work" is clicked
        const advertNav=document.createElement('div');
        advertNav.textContent="ads and posters";
        advertNav.className="sidebar-nav";
        advertNav.addEventListener('click',()=>{
            projectInfo(adInfo);
            adContentRender(chakaiaPosters);
            adContentRender(jorindePosters);
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

    function sidebarAbout(){
        const linkedInLink = document.createElement('a');
        linkedInLink.href = "https://www.linkedin.com/in/julia-kan-683828173/";
        linkedInLink.textContent="linkedin";
        linkedInLink.setAttribute('target','_blank'); 
        linkedInLink.setAttribute('rel','noreferrer noopener'); // opens in new tab
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

        sidebar.appendChild(linkedInLink);
        sidebar.appendChild(gitHubLink);
        sidebar.appendChild(emailLink);
    }

    function adContentRender(itemList){ //called when "ads and projects" is clicked
        const carouselContainer = document.createElement('div');
        carouselContainer.className="carousel";

        //wrapper for the actual carousel for styling
        const carouselWrapper = document.createElement('div');
        carouselWrapper.className="carousel-wrapper";

        const carouselTitle=document.createElement('div');
        carouselTitle.className="carousel-title";
        carouselTitle.textContent=itemList[0];
        carouselContainer.appendChild(carouselTitle);

        for (let i=1;i<itemList.length;i++){
            const carouselItem=document.createElement('div');
            carouselItem.className="carousel-item";
            const itemFigure = document.createElement('figure');
            const itemImage = document.createElement('img');
            itemImage.src=itemList[i].content;

            const itemName = document.createElement('div');
            itemName.className="item-name";
            itemName.textContent=itemList[i].title;

            itemFigure.appendChild(itemImage);
            carouselItem.appendChild(itemFigure);
            carouselItem.appendChild(itemName);

            carouselWrapper.appendChild(carouselItem);
        }

        carouselContainer.appendChild(carouselWrapper);

        dashboard.appendChild(carouselContainer);
       
    }

    function projectInfo(name){
        const projectTitle = document.createElement('div');
        projectTitle.className="project-title";
        projectTitle.textContent=adInfo[0].title;

        const projectIntro = document.createElement('div');
        projectIntro.className="project-intro";
        projectIntro.textContent=adInfo[0].intro;

        dashboard.append(projectTitle,projectIntro)
    }

    return {
        emptyDashboard,
        emptySidebar,
        aboutPageRender,
        sidebarWork,
        sidebarAbout,
        adContentRender,
        projectInfo
    }
})();



//const chakaiaBrochure = document.createElement('object');
//chakaiaBrochure.className="brochure";
//chakaiaBrochure.data=PDF;
//chakaiaBrochure.type="application/pdf"
//dashboard.appendChild(chakaiaBrochure)