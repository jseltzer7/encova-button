import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'encova-slat',
  styleUrl: 'encova-slat.css',
  shadow: true,
})
export class EncovaSlat implements ComponentInterface {

  render() {
    return (
      <Host>
        <div>
          <h3>Title text</h3>
        </div>
      </Host>
    );
  }

}
