import { Component,h } from "@stencil/core";

@Component({
    tag: 'custom-button',
    styleUrl: 'button.css',
    shadow: true
})

export class Button {
    render() {
        return <button><slot></slot></button>;
    }
}