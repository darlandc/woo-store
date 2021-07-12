import { HtmldecoderPipe } from './html-decoder.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  declarations: [HtmldecoderPipe],
  exports: [HtmldecoderPipe]
})
export class PipeModule {
  static forRoot(): any {
    return {
      ngModule: PipeModule,
      providers: []
    };
  }
}
