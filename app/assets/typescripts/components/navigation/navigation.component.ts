import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'navigation-component',
    templateUrl: 'components/navigation/navigation.html'
})

export class NavigationComponent {

    router = null;

    constructor(private _router: Router ) {
        this.router = _router;
    }

    isVisible(){
        return this.router.url != '/login'
    }
}