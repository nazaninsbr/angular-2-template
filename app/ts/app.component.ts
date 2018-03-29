import {Component} from 'angular2/core';
import {config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component'

@Component({
    selector: 'my-app',
    template: '<h1>{{ mainHeading }}</h1>'
})

export class AppComponent {
	mainHeading = config.MAIN_HEADING;
}
