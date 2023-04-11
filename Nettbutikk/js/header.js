class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <div class="grid-container">
        <div class="item1">
            <h1>Kevin sin Nettbutikk</h1>
        </div>
        <div class="item3">
        <form action=./Nettbutikk.html>
            <button class="button button2">Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></form>
        <form action=./skjermar.html>
            <button class="button button1">Skjermar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></form>
        <form action=./lagring.html>
            <button class="button button1">Lagring&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></form>
        <form action=./PC-tilbehør.html>
            <button class="button button1">PC-tilbehør&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></form>
        <form action=./nettverk.html>
            <button class="button button1">Nettverk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></form>
        <form action=./Hjelp.html>
            <button class="button button1">Hjelp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></form>
    </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);