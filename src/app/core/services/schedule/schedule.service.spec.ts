import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ScheduleService } from './schedule.service';
import { IScheduleModel } from '../../models/schedule.model';


const scheduleRawMocked = {
  id: 1,
  spaServiceId: 1,
  data: [
    {
      date: "2020-02-01",
      ranges: [
        {
          start: "10:00",
          end: "16:00"
        }
      ]
    }
  ]
};

const scheduleMocked: IScheduleModel = {
  id: 1,
  spaServiceMini: { id: 1, name: null },
  data: [
    {
      date: "2020-02-01",
      ranges: [
        {
          start: "10:00",
          end: "16:00"
        }
      ]
    }
  ]
}
describe('ScheduleService', () => {

  let service: ScheduleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScheduleService]
    });

    service = TestBed.get(ScheduleService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    const service: ScheduleService = TestBed.get(ScheduleService);

    expect(service).toBeTruthy();
  });

  it('should retrieve Schedule by spaServiceId via GET', (done) => {
    
    
    service.getScheduleBySpaServiceId(1).subscribe(schedule => {
      expect(schedule).toBeTruthy()
      done();
    });
    
    const request = httpMock.expectOne('http://localhost:3000/schedules?spaServiceId=1');
    
    expect(request.request.method).toBe('GET');
    request.flush(scheduleMocked);

  });
});