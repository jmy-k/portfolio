import {domManipulator} from "./toDoFunctions";
import "./style.css";


const aboutButton = document.querySelector('#about-button');
const workButton = document.querySelector('#work-button');

aboutButton.addEventListener('click',()=>{
    domManipulator.emptyDashboard();
    domManipulator.aboutPageRender();
    domManipulator.emptySidebar();

})

workButton.addEventListener('click',()=>{
    domManipulator.emptyDashboard();
    domManipulator.emptySidebar();
    domManipulator.sidebarPopulate();
})