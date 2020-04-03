import { Directive,ElementRef,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTopvoted]'
})
export class TopvotedDirective {

  @Input('appTopvoted') highlightColor: string;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') onClicks() {
    this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('dbclick') onDoubleClicks() {
    this.highlight("None");
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
}


//
//
//   constructor(private elem:ElementRef) {}
//   // this.elem.nativeElement.style.textDecoration='underline';
//
//   @HostListener("click") onClicks(){
//     this.textDeco("line-through")
//   }
//
//   @HostListener("dblclick") onDoubleClicks(){
//     this.textDeco("None")
//   }
//
//
//   private textDeco(action:string){
//      this.elem.nativeElement.style.textDecoration=action;
//    }
//
// }
