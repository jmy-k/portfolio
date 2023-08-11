import chbBRApril from "./assets/DNG-CHB-BR-April.jpg";
import chbBRMay from "./assets/DNG-CHB-BR-May.jpg";
import chbAFApril from "./assets/DNG-CHB-AF-April.jpeg";
import chbArtnet1 from "./assets/DNG-CHB-Artnet-ads1.jpeg";
import chbArtnet2 from "./assets/DNG-CHB-Artnet-ads2.jpeg"

const chakaiaPosters = ["Chakaia Booker: Public Opinion",chbBRApril, chbBRMay, chbAFApril,];
const chakaiaAds = ["Chakaia Booker: Public Opinion",chbArtnet1, chbArtnet2];

const adInfo = [{title:"David Nolan Gallery", subtitle1: "print media", subtitle2:"web media"}]


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
        para3.textContent="I have worked for two galleries, one in Hong Kong, and one in New York, and an art advisory firm in New York. These experiences demonstrated to me a large technological gap in the current art world - platforms meant to connect artists to their audiences and websites intended to support institutions and galleries lack efficiency and usability. This led me to my current journey of web development and UX/UI design, where I am teaching myself HTML, CSS, and JavaScript. I created this site from scratch!"

        const para4=document.createElement('div');
        para4.textContent="Though I have taken a seemingly drastic change, I genuinely believe in the positive potential of the ever-changing Internet in giving the much needed space and tools to artists and creatives. I want to support the community through artist-centered design.";

        mainText.append(para1,para2,para3,para4)

        dashboard.appendChild(mainText);
    }

    function sidebarWork(){ //called when "work" is clicked
        const advertNav=document.createElement('div');
        advertNav.textContent="ads and posters";
        advertNav.className="sidebar-nav";
        advertNav.addEventListener('click',()=>{
            adContentRender(chakaiaPosters);
            adContentRender(chakaiaAds);
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

        for (let i=0;i<itemList.length;i++){
            const carouselItem=document.createElement('div');
            carouselItem.className="carousel-item";
            const itemFigure = document.createElement('figure');
            const itemImage = document.createElement('img');
            itemImage.src=itemList[i];

            itemFigure.appendChild(itemImage);
            carouselItem.appendChild(itemFigure);

            carouselWrapper.appendChild(carouselItem);
        }

        carouselContainer.appendChild(carouselWrapper);

        dashboard.appendChild(carouselContainer);
       
    }

    function projectInfo(name){
        const projectTitle = document.createElement('div');
        projectTitle.className="project-title";
        projectTitle.textContent=adInfo[0].title;
    }

    return {
        emptyDashboard,
        emptySidebar,
        aboutPageRender,
        sidebarWork,
        sidebarAbout,
        adContentRender,
    }
})();



//const chakaiaBrochure = document.createElement('object');
//chakaiaBrochure.className="brochure";
//chakaiaBrochure.data=PDF;
//chakaiaBrochure.type="application/pdf"
//dashboard.appendChild(chakaiaBrochure)