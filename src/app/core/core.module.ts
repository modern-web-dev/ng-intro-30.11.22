import {NgModule, Optional, SkipSelf} from '@angular/core';

@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if(coreModule){
      throw new Error("CoreModule exists!")
    }
  }
}
