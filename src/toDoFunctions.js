import chbBRApril from "./assets/DNG-CHB-BR-April.jpg";
import chbBRMay from "./assets/DNG-CHB-BR-May.jpg";
import chbAFApril from "./assets/DNG-CHB-AF-April.jpeg";
import chbArtnet from "./assets/DNG-CHB-Artnet-ads.jpeg";
import chbBrochureSmall from "./assets/DNG-CHB-brochure.jpg";

import jvBRFeb from "./assets/DNG-JV-BR-Feb.jpg";
import jvInvite from "./assets/DNG-JV-invite-full.jpg";
import jvArtnet1 from "./assets/DNG-JV-Artnet-ad-full1.jpg";
import jvArtnet2 from "./assets/DNG-JV-Artnet-ad-full2.jpg";

import sinsinProcess1 from "./assets/SINSIN_process_1.jpg";
import sinsinProcess2 from "./assets/SINSIN_process_2.jpg";
import sinsinProcess3 from "./assets/SINSIN_process_3.jpg";
import sinsinProcess4 from "./assets/SINSIN_process_4.jpg";

import sinsin1 from "./assets/SINSIN_breathe_1.jpeg";
import sinsin2 from "./assets/SINSIN_breathe_2.jpeg";
import sinsin4 from "./assets/SINSIN_breathe_4.jpeg";
import sinsin5 from "./assets/SINSIN_breathe_5.jpeg";

import persona1 from "./assets/artsy persona 1.jpg";
import persona2 from "./assets/artsy persona 2.jpg"
import flowchart from "./assets/artsy_flowchart.jpg";
import hmw1 from "./assets/artsy hmw 1.jpg";
import hmw2 from "./assets/artsy hmw 2.jpg";
import hmw3 from "./assets/artsy hmw 3.jpg";
import hmw4 from "./assets/artsy hmw 4.jpg";

import circleFilled from "./assets/circle.svg";


const adInfo = [{title:"David Nolan Gallery", subtitle:""}, ["i created press packages for each exhibition which includes print media, website and email banners, invitation cards, and information brochures.", "each package maintains gallery branding while subtly incorporating thematic styles unique to the exhibition. for each item, i was in charge of image selection, color scheme, and layout."]]
const chakaiaPosters = ["Chakaia Booker: Public Opinion", {title: "The Brooklyn Rail, April Issue", content: chbBRApril}, {title: "The Brooklyn Rail, May Issue", content:chbBRMay}, {title:"Artforum, April Issue", content:chbAFApril},{title: "Artnet Website Desktop and Mobile", content: chbArtnet}, {title:"Exhibition Card Brochure", content:chbBrochureSmall}];
const jorindePosters = ["Jorinde Voigt: The Match", {title:"The Brooklyn Rail, February Issue", content:jvBRFeb},{title:"Artnet Website Desktop and Mobile Set 1", content:jvArtnet1},{title:"Artnet Website Desktop and Mobile Set 2", content:jvArtnet2},{title:"Exhibition Invitation Card", content:jvInvite}]

const setiantoInfo=[{title:"Sin Sin Fine Art", subtitle:"Breathe - installation for Dwi Setianto"}, ["i was tasked with designing and constructing an installation space to display two of our artist’s digital video works. the decision to include the two works were made last-minute, with only a week left before the exhibition opening. for this installation, we had to confront several obstacles: short time-frame, limited budget, and no gallery space. most of the gallery space was already occupied with other artworks with no way of rearranging that would allow for two additional works to be projected on the walls. i decided to use the gallery’s storage space instead, and to create an immersive installation that would match the subject and theme of the works.", " Dwi Setianto’s videos, like his body of work, are grounded in his connection with nature and the utilization of found materials. the first video is of leaves he collected while working as a park cleaner, blowing in a perpetual wind. the second is a compilation of water puddles, and its reflection of leaves, birds, and other subjects in motion.", "i wanted to create a tactile, tunnel-like experience for visitors, which at the same time would serve to hide the contents of the storage room. i hung large swathes of fabric from the ceiling, then draping and anchoring it in various points to create folds emulate movement. as the videos play, the moving leaves and birds would interact with the ripples of the fabric."]]
const setiantoProcess=["",{title:"rough sketch floorplan", content:sinsinProcess1, info:"unfortunately, the gallery lacked a floor plan with measurements of the space, and given the irregular shape of the shelving and various furniture and objects placed in storage, it was difficult to take accurate measurements of the space."},{title:"doorway sketch", content:sinsinProcess2, info:"the fabric had to be seamless from floor to ceiling to look more like a tunnel. i also wanted it to pool at the bottom rather than be completely taut. with the doorway as a guide, i also accounted for excess fabric for the effect."},{title:"fabric sketch",content:sinsinProcess3, info:" after drawing a rough sketch of the space, i determined that two bolts of canvas were needed from which 17 pieces, each 7 meters long, were cut. these pieces were sewn together lengthwise. the crosses here mark where the jute was sewn onto the fabric."},{title:"brainstorm",content:sinsinProcess4, info:"this installation required fabric that was thick enough to be opaque, but light enough to be hung securely. I decided on plain canvas to be hung up with jute strings. not only did canvas satisfy the requirements, but its coarse nature and wide fibers worked to invite touch.", para3:"i wanted to create a tactile, tunnel-like experience for visitors, which at the same time would serve to hide the contents of the storage room. i hung large swathes of fabric from the ceiling, then draping and anchoring it in various points to create folds emulate movement. as the videos play, the moving leaves and birds would interact with the ripples of the fabric."}]
const setiantoPhotos=["Breathe - exhibition opening",{title:"",content:sinsin1},{title:"",content:sinsin2},{title:"",content:sinsin4},{title:"",content:sinsin5}]

const artsyInfo=[{title:"Artsy mobile app - case study", subtitle:"personal project - adding new features to the app"},[]]
const artsyBackground = ["Background","Artsy is a platform for discovering and buying art from galleries and auctions. While working at David Nolan Gallery, a gallery client of the site, I spent a lot of time using the website on both desktop and mobile. The site was our main mode of connecting with interested buyers who were not able to visit the gallery in person."];
const artsyProblem = ["Problem","Colleagues, clients, and I had difficulty in finding information due to being overwhelmed by the disorganization of and amount of information on the website. I wanted to research and prototype some new features for Artsy's mobile app in order to find ways to create a more efficient and enjoyable experience for users."];
const artsyResearch=["Research","A variety of research methods were used to determine user perception of Artsy and what needs are not being met. Initial survey served as a screening before more in-depth interviews and usability testing. I determined their age, occupation, use of Artsy, interest in art, and budget. I found that most users were professionals in the industry, young art enthusiasts, and mid-aged buyers of art.","After conducting the survey, I reached out to existing users of Artsy for one-on-one interviews. The interview was immediately followed by a usability test, with a few follow-up questions after. The usability test was not moderated; users were given a list of tasks and were not guided in any way to complete tasks. Here is what I learned:"]
const artsyPersona = ["Personas","From these findings I designed two user personas to help me empathize with the end user in the remaining steps of the process."]
const artsyUsers = ["",{content:persona1},{content:persona2}]
const artsyIdea=["Ideation","Through affinity mapping, I summarized research findings and found main pain points for which I generated solutions by answering a few “How Might We” questions. I then completed a series of rapid-fire ideation, generating at least 10 solutions for each question. I converged these ideas so that they tackled each pain point I found."]
const artsyFindings = ["","Most common uses of Artsy were to discover artworks and purchase artworks by artists already owned by the buyer.","Users enjoyed the process of discovery of new artwork and artists, and wanted to feel comfortable in their knowledge of the artist whose work they are buying.","Younger art enthusiasts were mostly deterred by the pricing and found it difficult to look for cheaper works.","Art collectors and buyers of art liked keeping track of artists whose work they already owned or have “followed” on the site, but found it difficult to do so on the app.","All users preferred to see artworks in person before purchasing."];
const artsyHMW=["",{content:hmw1},{content:hmw2},{content:hmw3},{content:hmw4}]

const adsButton = document.querySelector('#ads-button');
const previewButton = document.querySelector('#preview-button');
const projectButton = document.querySelector('#project-button');
const dashboard = document.querySelector('#dashboard');

/// dom manipulator

export const domManipulator = (function(){

    function emptyDashboard(){
        while (dashboard.children.length>0){
            dashboard.children[0].remove();
        }
    }

    function aboutPageRender(){
        emptyDashboard();
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
        para4.textContent="Though I have taken a seemingly drastic change, I genuinely believe in the positive potential of the ever-changing Internet in giving the much needed space and tools to artists and creatives. The ways in which one can easily discover, access, and learn about art currently are limited and mundane, reflecting the contemporary art world’s rapid cookie-cutter commercialization. There is little space to demonstrate what makes an artist unique, only space for what makes an artist sell. Art is essential and so are the people who create it, so I want to support them through design that centers artists.";

        mainText.append(para1,para2,para3,para4)

        dashboard.appendChild(mainText);
    }

    function projectPageRender(){
        emptyDashboard();
        projectPage();
    }

    function adPageRender(){
        emptyDashboard();
        projectInfo(adInfo);
        carouselContentRender(chakaiaPosters);
        carouselContentRender(jorindePosters);
    }

    function projectPage(){
        emptyDashboard();
        const circleIcon = document.createElement('img');
        circleIcon.src=circleFilled;
        const circleIconWrapper = document.createElement('figure');
        circleIconWrapper.append(circleIcon);

        const sinsinTitleContainer=document.createElement('div');
        sinsinTitleContainer.className="project-title-container";
        const sinsinTitle = document.createElement('div');
        sinsinTitle.className="project-click";
        sinsinTitle.textContent="Sin Sin Fine Art";
        sinsinTitle.addEventListener('click',()=>{
            openSinSin()
        });
        sinsinTitleContainer.appendChild(sinsinTitle);
        sinsinTitleContainer.appendChild(circleIconWrapper);


        let circleIcon2 = document.createElement('img');
        circleIcon2.src=circleFilled;
        const circleIconWrapper2 = document.createElement('figure');
        circleIconWrapper2.append(circleIcon2);

        const artsyTitleContainer=document.createElement('div');
        artsyTitleContainer.className="project-title-container";
        const artsyTitle=document.createElement('div');
        artsyTitle.className="project-click";
        artsyTitle.textContent="Artsy mobile app - case study";
        artsyTitle.addEventListener('click',()=>{
            openArtsy();
        });
        artsyTitleContainer.appendChild(artsyTitle);
        artsyTitleContainer.appendChild(circleIconWrapper2);

        dashboard.append(sinsinTitleContainer,artsyTitleContainer);
}

    function carouselContentRender(itemList){ //makes image carousels
        const carouselContainer = document.createElement('div');
        carouselContainer.className="carousel";

        //wrapper for the actual carousel for styling
        const carouselWrapper = document.createElement('div');
        carouselWrapper.className="carousel-wrapper";

        const carouselTitle=document.createElement('div');
        carouselTitle.className="carousel-title";
        carouselTitle.textContent=itemList[0];
        if (carouselTitle.textContent==! ""){
            carouselContainer.appendChild(carouselTitle);
        }

        for (let i=1;i<itemList.length;i++){
            const carouselItem=document.createElement('div');
            carouselItem.className="carousel-item";
            const itemFigure = document.createElement('figure'); //image wrapper for easier resizing
            const itemImage = document.createElement('img');
            itemImage.src=itemList[i].content;

            const itemName = document.createElement('div');
            itemName.className="item-name";
            itemName.textContent=itemList[i].title;

            const itemInfo = document.createElement('div');
            itemInfo.className="item-info";
            itemInfo.textContent=itemList[i].info;

            itemFigure.appendChild(itemImage);
            carouselItem.appendChild(itemFigure);
            carouselItem.appendChild(itemName);
            carouselItem.appendChild(itemInfo);

            carouselItem.addEventListener('mouseenter', event =>{
                const targetItem = event.target;
                const targetItemInfo = targetItem.querySelector(".item-info");
                targetItemInfo.style.display="block";

                targetItemInfo.style.left = (event.clientX - 100) +'px';
                targetItemInfo.style.top = (event.clientY + 200) + 'px';
            })

            carouselItem.addEventListener('mouseleave',event=>{
                const targetItem = event.target;
                const targetItemInfo = targetItem.querySelector(".item-info");
                targetItemInfo.style.display="none";
            })

            carouselWrapper.appendChild(carouselItem);
        }

        carouselContainer.appendChild(carouselWrapper);

        const dashboardDivs = dashboard.querySelectorAll('div');
        console.log(dashboardDivs)

        for (let j=0;j<dashboardDivs.length;j++){
            let idName = dashboardDivs[j].id;
            if(idName ==! "project-info"){
                dashboard.append(carouselContainer);
            }
            else{
                dashboardDivs[j].appendChild(carouselContainer)
                break
            }
        }
       
    }

    function projectInfo(name){
        const projectTitle = document.createElement('div');
        projectTitle.className="project-title";
        projectTitle.textContent=name[0].title;

        const projectSubtitle=document.createElement('div');
        projectSubtitle.className="project-subtitle";
        projectSubtitle.textContent=name[0].subtitle;

        dashboard.append(projectTitle, projectSubtitle)

        for (let i=0;i<name[1].length;i++){
            const projectIntro = document.createElement('div');
            projectIntro.className="project-intro";
            projectIntro.textContent=name[1][i];
            dashboard.append(projectIntro)
        }
    }

    function openSinSin(){
        emptyDashboard();
        projectInfo(setiantoInfo);
        carouselContentRender(setiantoProcess);
        carouselContentRender(setiantoPhotos);

        const artsyTitle=document.createElement('div');
        artsyTitle.className="project-click";
        artsyTitle.textContent="Artsy app - case study";
        artsyTitle.addEventListener('click',()=>{
            openArtsy();
        });
        dashboard.append(artsyTitle);

        const projectTitle = document.querySelector('.project-title');
        projectTitle.addEventListener('click',()=>{
            projectPage();
        })
    }

    function openArtsy(){
        emptyDashboard();

        const sinsinTitle = document.createElement('div');
        sinsinTitle.className="project-click";
        sinsinTitle.textContent="Sin Sin Fine Art";
        sinsinTitle.addEventListener('click',()=>{
            openSinSin()
        });
        dashboard.append(sinsinTitle);
        
        projectInfo(artsyInfo);

        const infoContainer = document.createElement('div');
        infoContainer.id="project-info";
        dashboard.append(infoContainer);

        sectionRender(artsyBackground);
        sectionRender(artsyProblem);

        sectionRender(artsyResearch);
        listRender(artsyFindings);
        sectionRender(artsyPersona);
        carouselContentRender(artsyUsers);

        sectionRender(artsyIdea);
        carouselContentRender(artsyHMW);
        imageRender(flowchart);
        
        const projectTitle = document.querySelector('.project-title');
        projectTitle.addEventListener('click',()=>{
            projectPage();
        })
    }

    

    function imageRender(imageName){
        const infoContainer = dashboard.querySelector('#project-info');

        const itemFigure = document.createElement('figure'); //image wrapper for easier resizing
        const itemImage = document.createElement('img');
        itemImage.src=imageName;
        
        itemFigure.append(itemImage);
        infoContainer.append(itemFigure);
    }

    function sectionRender(sectionName){
        const infoContainer = dashboard.querySelector('#project-info');

        const sectionTitle = document.createElement('div');
        sectionTitle.className="section-title";
        sectionTitle.textContent=sectionName[0];
        sectionTitle.classList.add(sectionName[0]);

        infoContainer.append(sectionTitle);

        for(let i=1; i<sectionName.length; i++){
            const sectionPara=document.createElement('div');
            sectionPara.className="section-paragraph";
            sectionPara.textContent=sectionName[i];
            sectionPara.classList.add(sectionName[0]);

            infoContainer.append(sectionPara);
        }
    }
    
    function listRender(listName){
        const infoContainer = dashboard.querySelector('#project-info');

        const listTitle = document.createElement('ul');
        listTitle.className="list-title";
        listTitle.textContent=listName[0];

        for (let i = 1;i<listName.length;i++){
            const listItem = document.createElement('li');
            listItem.className="list-item";
            listItem.textContent=listName[i];
            listTitle.appendChild(listItem);
        }

        infoContainer.append(listTitle);
    }

    return {
        emptyDashboard,
        adPageRender,
        projectPageRender,
        aboutPageRender,
        projectPage,
        carouselContentRender,
        projectInfo,
        openSinSin,
        openArtsy,
        sectionRender,
        listRender
    }
})();



//const chakaiaBrochure = document.createElement('object');
//chakaiaBrochure.className="brochure";
//chakaiaBrochure.data=PDF;
//chakaiaBrochure.type="application/pdf"
//dashboard.appendChild(chakaiaBrochure)