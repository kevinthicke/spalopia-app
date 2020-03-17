import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpaService, OrderType } from './spa-service.service';

const spaServiceMock1 = { id: 1, name: 'name 1', description: 'description 1', price: 2 };
const spaServiceMock2 = { id: 2, name: 'name 2', description: 'description 2', price: 1 };
const spaServiceMock3 = { id: 3, name: 'name 3', description: 'description 3', price: 3 };

const spaServicesMock = [ spaServiceMock1, spaServiceMock2, spaServiceMock3 ];
const spaServicesSortedByPrice = [ spaServiceMock2, spaServiceMock1, spaServiceMock3 ];

describe('SpaService', () => {

  let service: SpaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpaService]
    });

    service = TestBed.get(SpaService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all SpaService via GET', (done) => {

    service.getAll().subscribe(spaServices => {

      expect(spaServices).toBeTruthy();
      expect(spaServices.length).toBe(3);
      expect(spaServices).toEqual([ spaServiceMock1, spaServiceMock2, spaServiceMock3 ]);
      
      done();
    });

    const request = httpMock.expectOne(
      'http://localhost:3000/spa-services'
      );
    expect(request.request.method).toBe('GET');
    
    request.flush(spaServicesMock);

  });

  it('should retrieve all SpaService filtered by name via GET', (done) => {

    service.getByName('1').subscribe(spaServices => {

      expect(spaServices).toBeTruthy();
      expect(spaServices.length).toBe(1);
      expect(spaServices).toEqual([ spaServiceMock1 ]);
      
      done();
    });

    const request = httpMock.expectOne(
      'http://localhost:3000/spa-services?name_like=1'
      );
    expect(request.request.method).toBe('GET');
    
    request.flush([ spaServiceMock1 ]);

  });

  it('should retrieve all SpaService sorted (ASC) by price via GET', (done) => {

    service.getSortedBy('price')(OrderType.ASC).subscribe(spaServices => {

      expect(spaServices).toBeTruthy();
      expect(spaServices.length).toBe(3);
      expect(spaServices).toEqual([ spaServiceMock2, spaServiceMock1, spaServiceMock3 ]);
      
      done();
    });

    const request = httpMock.expectOne(
      'http://localhost:3000/spa-services?_sort=price&_order=asc'
      );
    expect(request.request.method).toBe('GET');
    
    request.flush(spaServicesSortedByPrice);

  });

});
