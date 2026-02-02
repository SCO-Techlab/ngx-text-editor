import { Injectable } from '@angular/core';
import { MAGIC_NUMBERS, MAX_HISTORY_SIZE } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private _history: { value: string }[] = [];
  private _historyIndex: number = MAGIC_NUMBERS.N_MINUS_1;

  public saveHistoryState(value: string): void {
    // If you undo and write something new, you have to delete the "future"
    this._history = this._history.slice(MAGIC_NUMBERS.N_0, this._historyIndex + MAGIC_NUMBERS.N_1);
    this._history.push({ value });

    // Limit history size
    if (this._history.length > MAX_HISTORY_SIZE) {
      this._history.shift();
    } else {
      this._historyIndex++;
    }
  }

  public undo(): string {
    if (this._historyIndex > MAGIC_NUMBERS.N_0) {
      this._historyIndex--;
      return this._history[this._historyIndex].value;
    }

    return undefined;
  }

  public redo(): string {
    if (this._historyIndex < this._history.length - MAGIC_NUMBERS.N_1) {
      this._historyIndex++;
      return this._history[this._historyIndex].value;
    }

    return undefined;
  }
}
