import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-stream-cards',
    templateUrl: 'stream-cards.component.html'
})
export class StreamCardsComponent {
    @Input()
    viewerCount!:string;
    @Input()
    imagePaths!:string;
    @Input()
    streamTitle!:string;

}