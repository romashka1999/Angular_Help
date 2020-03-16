import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BestterHighlightDirective implements OnInit{

    // to create dynamyc directive
    @Input() defaultColor: string = 'transparent';
    @Input() hightlightColor: string = 'blue';

    
    // we can use HostBinding instead of renderer
    // i can bind any property with this directive HostBinding
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(
        private elemRef: ElementRef,
        private renderer: Renderer2
        ) {}

    ngOnInit() {
        // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', this.defaultColor);
        this.backgroundColor = this.defaultColor;
    }

    // Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs.
    @HostListener('mouseenter') onMouseOver() {
        // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', this.hightlightColor);
        this.backgroundColor = this.hightlightColor;
    }

    @HostListener('mouseleave') onMouseLeave() {
        // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', this.defaultColor);
        this.backgroundColor = this.defaultColor;
    }

}