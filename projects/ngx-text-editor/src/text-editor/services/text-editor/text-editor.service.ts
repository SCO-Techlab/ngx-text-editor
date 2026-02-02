import { Injectable } from '@angular/core';
import { MAGIC_NUMBERS } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {

  public formatRichText(text: string): string {
    if (!text || text.length === MAGIC_NUMBERS.N_0) {
      return '';
    }

    return text
      .split('\n\n') // Double enter = new paragraph
      .map(p => `<p>${p.replace(/\n/g, '<br>') || '<br>'}</p>`)
      .join('');
  }
}
