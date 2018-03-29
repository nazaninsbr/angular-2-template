export class Video{
	id: number;
	title: string;
	videoCode: string;
	descrip: string;

	constructor(id: number, title: string, videoCode: string, descrip: string) {
		this.id = id;
		this.title = title; 
		this.videoCode = videoCode; 
		this.descrip = descrip;
	}
}