import {Component} from 'angular2/core';
import {config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
	mainHeading = config.MAIN_HEADING;
	videos: Array<Video>;


	constructor(){
		this.videos = [
			new Video (1, "Dancing Takes Center Stage on the Set of 'NCIS: LA'", "xbhcqDEWbyc", "dancing on NCIS"), 
			new Video (2, "NCIS: LA Daniela Ruah & Eric Christian Olsen interview", "BxqAlB72d3U", "NCIS london")
		]
	}
}
