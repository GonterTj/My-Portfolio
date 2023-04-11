class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
        <div class="grid-container">
    <div class="item5">
        <p>Laget av Kevin</p>
        <a href="./Om oss.html">Om oss</a>
    </div>
</div>
</body>
</html>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);