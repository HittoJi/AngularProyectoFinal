import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SarchBarService {

  private criteri: BehaviorSubject<string>;
  constructor() { 
    this.criteri = new BehaviorSubject<string>('');
  }
  getCriteri(): Observable<string>{
    return this.criteri.asObservable();
  }

  setCriteri(c: string): void{
    this.criteri.next(c);
  }
  
  setCatalogo(c: string): void{
    this.criteri.next(c);
  }
  getCatalogo(): Observable<string>{
    return this.criteri.asObservable();
  }
  
}
