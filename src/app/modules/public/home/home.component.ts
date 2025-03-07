import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'public-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [MatButtonModule, RouterLink, MatIconModule],
})
export class PublicHomeComponent {
    /**
     * Constructor
     */
    constructor() {}
}
