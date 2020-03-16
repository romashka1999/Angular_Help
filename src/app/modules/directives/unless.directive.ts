import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// structural directive
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // it is still property
  @Input() set appUnless(value: boolean) {
    if(!value) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  } 

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
    ) { }

}
