import {domManipulator} from "./toDoFunctions";
import "./style.css";

const titleButton = document.querySelector('#title');
const bioButton = document.querySelector('#bio-button');
const adsButton = document.querySelector('#ads-button');
const previewButton = document.querySelector('#preview-button');
const projectButton = document.querySelector('#project-button');

const dashboard=document.querySelector('#dashboard');
const sidebar=document.querySelector('#sidebar')
const sidebarCircles=sidebar.querySelectorAll('.circle');

titleButton.addEventListener('click',()=>{
    domManipulator.emptyDashboard();

    dashboard.classList.remove('selected')
    bioButton.classList.remove('selected');
    adsButton.classList.remove('selected');
    previewButton.classList.remove('selected');
    projectButton.classList.remove('selected');
})

titleButton.addEventListener('mousemove',()=>{
    function getColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function setColor() {
        titleButton.style.color = getColor();
    }
    setColor();
});

sidebar.addEventListener('mousemove',()=>{
    function getColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function setColor() {
        for (let i=0;i<sidebarCircles.length;i++){
            sidebarCircles[i].style.backgroundColor = getColor()
        }
    }
    setColor();
})

bioButton.addEventListener('click',()=>{
    domManipulator.aboutPageRender();

    dashboard.classList.add('selected')  
    bioButton.classList.add('selected');
    adsButton.classList.remove('selected');
    previewButton.classList.remove('selected');
    projectButton.classList.remove('selected');
})


adsButton.addEventListener('click',()=>{
    domManipulator.adPageRender();

    dashboard.classList.add('selected')  
    bioButton.classList.remove('selected');
    adsButton.classList.add('selected');
    previewButton.classList.remove('selected');
    projectButton.classList.remove('selected');
})

previewButton.addEventListener('click',()=>{
    domManipulator.emptyDashboard();
    domManipulator.previewPageRender();

    dashboard.classList.add('selected')  
    bioButton.classList.remove('selected');
    adsButton.classList.remove('selected');
    previewButton.classList.add('selected');
    projectButton.classList.remove('selected');


})

projectButton.addEventListener('click',()=>{
    domManipulator.projectPageRender();

    dashboard.classList.add('selected')  
    bioButton.classList.remove('selected');
    adsButton.classList.remove('selected');
    previewButton.classList.remove('selected');
    projectButton.classList.add('selected');
})