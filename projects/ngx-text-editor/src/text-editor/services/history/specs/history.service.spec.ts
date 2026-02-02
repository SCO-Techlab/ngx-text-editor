import { TestBed } from '@angular/core/testing';
import { MAGIC_NUMBERS } from '../../../constants';
import { HistoryService } from '../history.service';

describe('projects -> ngx-text-editor -> src -> text-editor -> services -> history -> HistoryService', () => {
  let service: HistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(HistoryService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should save history state', () => {
    service.saveHistoryState('test');
    expect(service['_history'].length).toBe(MAGIC_NUMBERS.N_1);
    expect(service['_historyIndex']).toBe(MAGIC_NUMBERS.N_0);
  });

  it('should shift history state', () => {
    for (let i = MAGIC_NUMBERS.N_0; i < MAGIC_NUMBERS.N_100; i++) {
      service.saveHistoryState(`test_${i}`);
    }

    expect(service['_history'].length).toBe(MAGIC_NUMBERS.N_50);
    expect(service['_historyIndex']).toBe(MAGIC_NUMBERS.N_49);
  });

  it('should undo', () => {
    service.saveHistoryState('test');
    service.saveHistoryState('test2');
    expect(service.undo()).toEqual('test');
  });

  it('should not undo', () => {
    service.saveHistoryState('test');
    expect(service.undo()).toBeUndefined();
  });

  it('should redo', () => {
    service.saveHistoryState('test');
    service.saveHistoryState('test2');
    service.undo();
    expect(service.redo()).toEqual('test2');
  });

  it('should not redo', () => {
    service.saveHistoryState('test');
    service.undo();
    expect(service.redo()).toBeUndefined();
  });
});
