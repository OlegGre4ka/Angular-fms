import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appBackground]',
})
export class BackgroundDirective {

    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

   // ngOnInit() {
        // console.log(this.element);
        // const{nativeElement} = this.element;
        //  this.renderer.setStyle(nativeElement, 'background-color', 'blue' );
        //  this.renderer.addClass(nativeElement, 'white-text');
       // this.element.nativeElement.style.backgroundColor = 'aqua';
   // }

// tslint:disable-next-line:member-ordering
@HostListener('mouseenter')
mouseEnter() {
    // const{nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'blue' );
    // this.renderer.addClass(nativeElement, 'white-text');
    this.background = 'aqua';
}
@HostListener('mouseleave')
mouseLeave() {
    // const{nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'transparent' );
    // this.renderer.removeClass(nativeElement, 'white-text');
    this.background = 'transparent';
}
}
