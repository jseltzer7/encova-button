import { Component, ComponentInterface, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'encova-button',
  styleUrl: 'encova-button.css',
  shadow: true,
})
export class EncovaButton implements ComponentInterface {

  @Prop() text: string;
  @Prop() message: string;
  @Prop() color: string;

  @Method()
  async buttonClicked(message: string) {
    if (message !== undefined) {
      alert(message);
    }
    
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.buttonClicked(this.message)}>{this.text}</button>
      </Host>
      
    );
  }

}