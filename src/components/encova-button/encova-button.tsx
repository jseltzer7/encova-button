import { Component, ComponentInterface, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'encova-button',
  styleUrl: 'encova-button.css',
  shadow: true,
})
export class EncovaButton implements ComponentInterface {

  @Prop() text: string;
  @Prop() changeText: string;
  @Prop() color: string;

  @Method()
  async textChange() {
    let str = "";
    if (this.text === this.changeText) {
      str = this.text;
      this.text = this.changeText;
    } else {
      str = this.changeText;
      this.changeText = this.text;
    }
    
  }

  // @Method()
  // async changeColor() {
     
  // }

  render() {
    return (
      <Host>
        <button onClick={() => this.textChange()}>{this.text}</button>
      </Host>
      
    );
  }

}