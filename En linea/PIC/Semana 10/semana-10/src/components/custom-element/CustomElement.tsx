import { Component, h } from "@stencil/core";

@Component({
    tag: 'custom-element',
    styleUrl: 'CustomElement.css',
    shadow: true
})

export class CustomElement {
    render() {
        return (
            <div>
                <h1>Custom Element</h1>
            </div>
        );
    }
}