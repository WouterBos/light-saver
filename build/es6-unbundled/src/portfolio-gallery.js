define(["../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class PortfolioGallery extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
            <style>
                :host {
                    display: block;
                }

                .image {
                    margin-bottom: 7vh;
                    height: var(--image-height, calc(100% - 100px - 7vh));
                    background-image: var(--image-a);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .image.Edge,
                .image.Trident {
                    height: 40vh;
                }

                .images {
                    position: relative;
                    width: 100vw;
                }

                .imagesContainer1 {
                    margin: 0 50px;
                    width: calc(100vw - 100px);
                    height: 100px;
                    overflow: hidden;
                    -webkit-overflow-scrolling: touch;
                    white-space: nowrap;
                }
                .imagesContainer2:hover {
                    background-color: rgba(0,0,0,0.6);
                }

                .imagesContainer2 {
                    transition: transform 1s ease-in-out;
                }
                
                .images .thumb {
                    cursor: pointer;
                    display: inline-block;
                    height: 100px;
                    width: 100px;
                    box-sizing: border-box;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-clip: border-box;
                }

                .images .imagesContainer2:hover .thumb {
                    opacity: 0.5;
                    transition: opacity 0.1s ease-in-out;
                }
                .images .imagesContainer2 .thumb:hover {
                    position: relative;
                    filter: none;
                    opacity: 1;
                    box-shadow: 0 0 30px 0 rgba(255,255,255,0.8)
                }

                .images .page {
                    cursor: pointer;
                    display: inline-block;
                    height: 100px;
                    line-height: 100px;
                    font-size: 30px;
                    text-align: center;
                    width: 50px;
                    box-sizing: border-box;
                }
                .images .page:hover {
                    color: rgb(8, 175, 238);
                    background: #fff;
                }
                .images .page.backward {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .images .page.forward {
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            </style>

            <div id="image" class="image"></div>
            <div id="images" class="images">
                <div id="imagesContainer1" class="imagesContainer1">
                    <div id="imagesContainer2" class="imagesContainer2"></div>
                </div>
            </div>
        `}constructor(){super();this.offset=0;this.imagesRoot="/media/pictures/";this.images=[{urlSmall:"hertogswetering-small.jpg",url:"hertogswetering.jpg"},{urlSmall:"damascus-small.jpg",url:"damascus.jpg"},{urlSmall:"mill-small.jpg",url:"mill.jpg"},{urlSmall:"riet-small.jpg",url:"riet.jpg"},{urlSmall:"DSCF0796-small.jpg",url:"DSCF0796.jpg"},{urlSmall:"DSCF2138-small.jpg",url:"DSCF2138.jpg"},{urlSmall:"DSCF2746-small.jpg",url:"DSCF2746.jpg"},{urlSmall:"DSCF3949-small.jpg",url:"DSCF3949.jpg"},{urlSmall:"T10B3875-small.jpg",url:"T10B3875.jpg"},{urlSmall:"T10B4283-small.jpg",url:"T10B4283.jpg"},{urlSmall:"XT013337-HDR-small.jpg",url:"XT013337-HDR.jpg"},{urlSmall:"XT013607-small.jpg",url:"XT013607.jpg"},{urlSmall:"XT015418-small.jpg",url:"XT015418.jpg"},{urlSmall:"_DSF3685-small.jpg",url:"_DSF3685.jpg"},{urlSmall:"_DSF2144-small.jpg",url:"_DSF2144.jpg"},{urlSmall:"_DSF2087-small.jpg",url:"_DSF2087.jpg"},{urlSmall:"_DSF1553-small.jpg",url:"_DSF1553.jpg"},{urlSmall:"_DSF0938-small.jpg",url:"_DSF0938.jpg"},{urlSmall:"DSCF8660-small.jpg",url:"DSCF8660.jpg"},{urlSmall:"DSCF3772-HDR-small.jpg",url:"DSCF3772-HDR.jpg"},{urlSmall:"DSCF3802-small.jpg",url:"DSCF3802.jpg"},{urlSmall:"DSCF3727-HDR-small.jpg",url:"DSCF3727-HDR.jpg"},{urlSmall:"_DSF3834-small.jpg",url:"_DSF3834.jpg"},{urlSmall:"_DSF3872-small.jpg",url:"_DSF3872.jpg"},{urlSmall:"DSCF3616-HDR-small.jpg",url:"DSCF3616-HDR.jpg"}]}setImage(image){if(!image){image=this.imagesRoot+this.images[0].url}this.$.image.style.backgroundImage="url("+image+")"}setImages(){let el,pg=this;this.$.images.appendChild(this._createLink("\u25C4","page backward",function(){if(0<=pg.offset){return}pg.offset+=40;pg.$.imagesContainer2.style.transform="translate("+pg.offset+"vw)"}));this.$.images.appendChild(this._createLink("\u25BA","page forward",function(){pg.offset-=40;pg.$.imagesContainer2.style.transform="translate("+pg.offset+"vw)"}));this.images.forEach(function(img){el=document.createElement("a");el.className="thumb";el.addEventListener("click",function(){pg.setImage(pg.imagesRoot+img.url)});el.setAttribute("style","background-image: url(\""+pg.imagesRoot+img.urlSmall+"\")");pg.$.imagesContainer2.appendChild(el)})}_createLink(content,cssClass,callback){let el=document.createElement("a");el.innerHTML=content;el.className=cssClass;el.addEventListener("click",callback);return el}ready(){super.ready();this.setImage();this.setImages();if(0<navigator.userAgent.indexOf("Edge")){this.$.image.className+=" Edge"}if(0<navigator.userAgent.indexOf("Trident")){this.$.image.className+=" Trident"}}}customElements.define("portfolio-gallery",PortfolioGallery)});