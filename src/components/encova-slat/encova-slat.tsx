import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'encova-slat',
  styleUrl: 'encova-slat.css',
  shadow: true,
})
export class EncovaSlat implements ComponentInterface {

  /**
   * Something that I noticed about props is that when camel casing is used, it sometimes causes an issue in the HTML
   */
  @Prop() vehicle: string;
  @Prop() insuredName: string;
  @Prop() street: string;
  @Prop() city: string;
  @Prop() limits: object;
  @Prop() liabilityNumber: number;
  @Prop() liabilities: object;
  @Prop() coverages: number;


  /**
   * This method is supposed to return JSX values for the component that will eventually come from a data set
   */
  numberOfCoverages() {
    let ret = "";
    for (let i = 0; i < this.coverages; i++) {
      ret += 
      // <div class="row">
      //   <div>Coverage Name</div>
      //   <div>Coverage Value</div>
      // </div>
      <h1>TEST</h1>
      
    }
    return ret;
  }
  

  render() {
    return (
      <Host>
        <div class="accordion">
            <div class="accordion-heading flex">
	            <a class="accordion-toggle" tabindex="0">
                <h3 class="text uppercase">{this.vehicle}</h3>
                <i class="fas fa-chevron-down"></i>
              </a>
            </div>
            <div class="accordion-body collapse in" >
              <div class="accordion-inner">
		            <div class="card-content">
                  <h6 class="header uppercase">Garage Location</h6>
                  <div class="info uppercase">
                    <div>{this.street}</div>
                    <div>{this.city}</div>
                  </div>
                  <h6 class='header uppercase'>Coverages</h6>
                  <div class="row">
                    <div>Coverage Name</div>
                    <div>Coverage Value</div>
                  </div>
                  {/* 
                    This is my attempt at trying to dynamically place JSX elements using a private method
                    <div>{this.numberOfCoverages()}</div> 
                  */}
                  
                  </div>
              </div>  
            </div>
        </div>
      </Host>
    );
  }

}
