import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'encova-button',
  styleUrl: 'encova-button.css',
  shadow: true,
})
export class EncovaButton implements ComponentInterface {

  @Prop({mutable: true}) text: string;

  render() {
    return (
      <Host>
        <button>{this.text}</button>
      </Host>
      
    );
  }

}