import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ReadingDTO } from '../common/ReadingDTO';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

export const IOT_DATA_TABLE = 'iot_data';
export const BOARDS_TABLE = 'boards';
export const USER_BOARDS_TABLE = 'user_boards';
export const LISTS_TABLE = 'lists';
export const CARDS_TABLE = 'cards';
export const USERS_TABLE = 'users';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private supabase: SupabaseClient;
  private baseURL = 'http://localhost:8080/';
  //private version = 'api/v1/';
  //private url = this.baseURL+this.version;
  constructor(private httpClient: HttpClient) {
    this.supabase = createClient(
      environment.SUPABASE_URL,
      environment.SUPABASE_KEY
    );
  }

  async startBoard() {
    return this.supabase.from(BOARDS_TABLE).insert({});
  }

  async getBoard() {
    const boards = this.supabase.from(USERS_TABLE).select('*');
  }

  async getAllReadings() {
    const { data, error } = await this.supabase
      .from(IOT_DATA_TABLE)
      .select('*')
      .order('time', { ascending: false });

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }
    return data;
  }

  async getReadingsById(deviceId: string) {
    const { data, error } = await this.supabase
      .from(IOT_DATA_TABLE)
      .select('*')
      .eq('device_id', deviceId);

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }
    return data;
  }

  get<T>(url: string, options?: any): Observable<T> {
    return this.httpClient.get<T>(
      `${this.baseURL}readings`,
      options
    ) as Observable<T>;
  } /* optimize */

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

  getReadingById(id: number | string): Observable<ReadingDTO | undefined> {
    return this.httpClient.get<ReadingDTO>(`${this.baseURL}readings/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
