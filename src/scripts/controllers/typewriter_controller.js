// src/controllers/typewriter_controller.js
import { Controller } from "stimulus"
import Typewriter from 'typewriter-effect/dist/core';

export default class extends Controller {
    static get targets() {
        return []
      }
    connect() {
        this.typer = new Typewriter(this.element, {
            delay: 75,
            cursor: ''
          });
          this.typer
            .typeString('<div class=\"nearsoft\">nearsoft</div>')
            .pauseFor(3000)
            .deleteAll()
            .typeString('<div class=\"yuca\">YUCA</div> <div class=\"talks\">TALKS</div>')
            .pauseFor(3000)
            .deleteAll()
            .typeString('<div class=\"yuca\">COMING</div> <div class=\"talks\">SOON</div>')
            .start();
          
    }
}