import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { ReadingDTO } from '../common/ReadingDTO';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all readings', () => {
    const dummyReadings : ReadingDTO[] = [
      {
        "id": "1",
        "timestamp": "2024-07-16T08:30:00Z",
        "device_id": "device_001",
        "temperature": 23.5,
        "humidity": 55.2
      },
      {
        "id": "2",
        "timestamp": "2024-07-16T08:45:00Z",
        "device_id": "device_001",
        "temperature": 23.6,
        "humidity": 55.0
      },
      {
        "id": "3",
        "timestamp": "2024-07-16T09:00:00Z",
        "device_id": "device_001",
        "temperature": 23.7,
        "humidity": 54.9
      },
      {
        
        "id": "4",
        "timestamp": "2024-07-16T09:15:00Z",
        "device_id": "device_001",
        "temperature": 23.8,
        "humidity": 54.8
      },
      {
        "id": "5",
        "timestamp": "2024-07-16T09:30:00Z",
        "device_id": "device_001",
        "temperature": 23.9,
        "humidity": 54.7
      }
    ];

    service.getReadings().subscribe(readings => {
      expect(readings.length).toBe(5);
      expect(readings).toEqual(dummyReadings);
    });

    const request = httpMock.expectOne(`${service['baseURL']}readings`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyReadings);
  });

  it('should retrieve reading by ID', () => {
    const dummyReading: ReadingDTO = { id: 1, device_id: 'device1', temperature: 22.5, humidity: 45, timestamp: '2024-07-04T10:00:00Z' };

    service.getReadingById(1).subscribe(reading => {
      expect(reading).toEqual(dummyReading);
    });

    const request = httpMock.expectOne(`${service['baseURL']}readings/1`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyReading);
  });
});
