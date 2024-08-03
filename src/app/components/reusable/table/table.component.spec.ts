import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { IoTReading } from '../../../common/IoTReading';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept input data', () => {
    const testReadings: IoTReading[] = [
      {
        device_tag: 'UTSensor1',
        temperature: 18.5,
        humidity: 45.5,
        time: '2024-07-24T23:35:06.919645+00:00',
      },
      {
        device_tag: 'UTSensor1',
        temperature: 18.5,
        humidity: 45.5,
        time: '2024-07-24T23:35:01.921514+00:00',
      },
    ];
    component.readings = testReadings;
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(component.readings.length);
    expect(component.readings).toBeTruthy();
    expect(component.readings).not.toBeNaN();
    expect(component.readings.length).toBe(2);
    expect(component.readings[0].device_tag).toBe('UTSensor1');
  });

  it('should handle empty state', () => {
    const emptyReadings: IoTReading[] = [];
    component.readings = emptyReadings;
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(0);
    expect(component.readings.length).toBe(0);
    expect(component.readings).toBeTruthy();
  });
});
