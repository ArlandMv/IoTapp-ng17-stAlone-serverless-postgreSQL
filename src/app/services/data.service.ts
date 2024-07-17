import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ReadingDTO } from '../common/ReadingDTO';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = 'http://localhost:8080/';
  //private version = 'api/v1/';
  //private url = this.baseURL+this.version;

  constructor(private httpClient: HttpClient) {}

  get<T>(url:string, options?:any): Observable<T> {
    return this.httpClient.get<T>(`${this.baseURL}readings`, options) as Observable<T>;
  }

  getDevices(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}devices`);
  }

  getReadings(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}readings`);
  }

  // Get all readings for a specific device
  
  /*
  getReadingsByDeviceId(device_id: string): Observable<ReadingDTO[]> {
    const url = `${this.baseURL}readings?device_id=${device_id}`;
    return this.httpClient.get<ReadingDTO[]>(url);
  }

  getReadingsOrdered(): Observable<ReadingDTO[]> {
    return this.httpClient.get<ReadingDTO[]>(`${this.baseURL}readings`).pipe(
      map(readings => readings.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()))
    );
  }*/

  getReadingById(id: number|string): Observable<ReadingDTO | undefined> {
    return this.httpClient.get<ReadingDTO>(`${this.baseURL}readings/${id}`);
  }  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
