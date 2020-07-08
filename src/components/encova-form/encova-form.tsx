import { Component, ComponentInterface, h, State, Method } from '@stencil/core';

//Copied class from https://stenciljs.com/docs/forms
//Used to test basic form functionality

@Component({
  tag: 'encova-form',
  styleUrl: 'encova-form.css',
  shadow: true,
})
export class EncovaForm implements ComponentInterface {

  @State() value: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  @Method() 
  async clearField() {
    console.log(this.value);
    this.value = "";
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <br></br><input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={() => this.clearField()}/>
      </form>
    );
  }

}
