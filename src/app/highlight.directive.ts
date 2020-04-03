import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mostvotes') onMostVotes() {
    this.highlight('yellow');
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
