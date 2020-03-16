import { TestBed } from '@angular/core/testing';

import { SpaService } from './spa-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SpaService', () => {

  let service: SpaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ SpaService ]
    });

    service = TestBed.get(SpaService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    const service: SpaService = TestBed.get(SpaService);
    expect(service).toBeTruthy();
  });
  
  xit('should retrieve all SpaService via GET', (done) => { });

});
