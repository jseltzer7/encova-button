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
  @Prop() type: string; //THis will be the type of button that the user requests
  @Prop() disabled: boolean;
  


  @Method()
  async buttonClicked(message: string) {
    if (message !== undefined) {
      alert(message);
    }
    
  }

  changeType(t: string) {
    var ret = "";
    if (t == undefined) {
      ret = "default";
    } else {
      var lower = t.toLowerCase();
      ret = lower;
    }
    console.log(ret);
    return ret;
    
    
  }

  render() {
    if (this.disabled) {
      return (
        <Host>
          <button disabled class={this.changeType(this.type) + "button"} onClick={() => this.buttonClicked(this.message)}>{this.text}</button>
        </Host>
      );
    } else {
        return (     
          <Host>
            <button class={this.changeType(this.type) + "button"} onClick={() => this.buttonClicked(this.message)}>{this.text}</button>
          </Host>
        );
    }
    
    
  }

}