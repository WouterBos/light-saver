define(["../node_modules/@polymer/polymer/polymer-element.js","./portfolio-header.js","./portfolio-gallery.js"],function(_polymerElement){"use strict";class PortfolioApp extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
            <style>
            :host {
                display: grid;
                grid-gap: 10px;
                grid-template-columns: 1fr;
                grid-template-rows: 1% 1fr;
                grid-template-areas: "header" "gallery";
                min-height: 99.99vh;
            }

            .grid portfolio-header {
                grid-area: header;
            }

            .grid portfolio-gallery {
                grid-area: gallery;
                position: relative;
            }
            </style>
            
            <portfolio-header></portfolio-header>
            <portfolio-gallery></portfolio-gallery>
    `}}window.customElements.define("portfolio-app",PortfolioApp)});