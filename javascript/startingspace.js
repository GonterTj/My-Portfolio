// JavaScript Document
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` 
      <div class="flex-container">
      <div class="flex-box">
          <a href="index.html"><img src="images/Svartver.png" class="image1"></a>
          Kevin's Portfolio
      </div>s
        

        
      `;
    }
  }
  
  customElements.define('header-component', Header);
