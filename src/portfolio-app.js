import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './portfolio-header.js';
import './portfolio-gallery.js';

class PortfolioApp extends PolymerElement {
    static get template() {
        return html`
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
    `;
    }
}
window.customElements.define('portfolio-app', PortfolioApp);