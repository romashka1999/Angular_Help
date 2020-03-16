import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    constructor(private elemRef: ElementRef) {}

    ngOnInit() {
        this.elemRef.nativeElement.style.backgroundColor = "red";
        this.elemRef.nativeElement.style.fontSize = '30px';
        this.elemRef.nativeElement.style.color = 'white';
    }
}