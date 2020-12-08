import {header} from './modules/header';
import {footer} from './modules/footer';
import {lunch_generator} from './modules/lunch';

class App {
  constructor(){
    this.renderTemplate();
  }

  renderTemplate(){
    const template = `
      <h1>${header.title}</h1>
      <p>${lunch.lunchContent}</p>
      <footer>${footer.footerContent}</footer>
    `;

    document.body.innerHTML = template;
  }
}

new App;
