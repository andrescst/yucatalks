// src/controllers/appBar_controller.js
import { Controller } from "stimulus"
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from '@material/top-app-bar';

export default class extends Controller {
    static get targets() {
        return [ "drawer" , "appbar", "nav"]
      }

    setCurrentNav(){
        let path = window.location.pathname;
        let navs = Array.from(this.navTarget.children);
        
        console.log(navs);
        navs.forEach(nav => {
            console.log(navs);
            console.log(path);
            
            if(nav.pathname == path){
                nav.classList.add("");
            }
            
        });
    }

    connect() {
        
        this.topAppBar = MDCTopAppBar.attachTo(this.appbarTarget);
        this.drawer = MDCDrawer.attachTo(this.drawerTarget); 
    
        this.topAppBar.setScrollTarget(document.getElementById('main-content'));
        this.drawer.open = false;
        this.topAppBar.listen('MDCTopAppBar:nav', () => {
            this.drawer.open = !this.drawer.open;
        });     
      
    }
}