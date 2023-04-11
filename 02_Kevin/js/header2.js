// JavaScript Document
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <div class="grid-container">
        <div class="item1">
            <a href="Site for school done easy.html">
            <img src="./Bilder/ITM logo inverted3.png"  width="30%" > </a>
        </div>

        <div class="item3">
        <form action=./Site%20for%20school%20done%20easy.html>
            <button class="button button2">Home</button></form>
        <form action=./html/Yrkesfagleg%20fordjuping%20vg1.html>
            <button class="button button1">YFF</button></form>
        <form action=./html/Konseptutv%20og%20programmering.html>
            <button class="button button1">Konseptutv og programmering</button></form>
        <form action=./html/Teknologiforståing.html>
            <button class="button button1">Teknologiforståing</button></form>
        <form action=./html/Prod%20og%20historieforteljing.html>
            <button class="button button1">Prod og historieforteljing</button></form>
        <form action=./html/Matematikk%20IM.html>
            <button class="button button1">Matematikk IM</button></form>
        <form action=./html/Naturfag%20IM.html>
            <button class="button button1">Naturfag IM</button></form>
        <form action=./html/Kroppsøving%20vg1.html>
            <button class="button button1">Kroppsøving</button></form>
        <form action=./html/Engelsk.html>
            <button class="button button1">Engelsk</button></form>
    </div>

        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
