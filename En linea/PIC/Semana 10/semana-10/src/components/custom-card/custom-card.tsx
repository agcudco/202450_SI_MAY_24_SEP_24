import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-card',
  styleUrl: 'custom-card.css',
  shadow: true,
})
export class CustomCard {

  @Prop() imgSrc: string;

  @Prop() titulo: string;

  @Prop() description: string;

  render() {
    return (
      <div class="card">
        <img src={this.imgSrc} alt={this.titulo} class="card-img" />
        <div class="card-content">
          <h2 class="card-title">{this.titulo}</h2>
          <p class="card-description">{this.description}</p>
        </div>
      </div>
    );
  }
}
