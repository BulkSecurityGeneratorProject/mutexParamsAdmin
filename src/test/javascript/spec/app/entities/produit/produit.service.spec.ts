/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ProduitService } from 'app/entities/produit/produit.service';
import { IProduit, Produit } from 'app/shared/model/produit.model';

describe('Service Tests', () => {
  describe('Produit Service', () => {
    let injector: TestBed;
    let service: ProduitService;
    let httpMock: HttpTestingController;
    let elemDefault: IProduit;
    let expectedResult;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(ProduitService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Produit(
        0,
        'AAAAAAA',
        'AAAAAAA',
        0,
        'AAAAAAA',
        'AAAAAAA',
        false,
        false,
        0,
        'AAAAAAA',
        'AAAAAAA',
        false,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign({}, elemDefault);
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a Produit', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .create(new Produit(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a Produit', async () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            reference: 'BBBBBB',
            numeroordre: 1,
            typeproduit: 'BBBBBB',
            familleproduit: 'BBBBBB',
            produitadditionnel: true,
            obligatoirepourentreprise: true,
            effectifmax: 1,
            chartegraphique: 'BBBBBB',
            alertetarificationexterne: 'BBBBBB',
            questionnairerecexige: true,
            libellemodule: 'BBBBBB',
            nomchampbadh: 'BBBBBB',
            typequestionnairerec: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of Produit', async () => {
        const returnedFromService = Object.assign(
          {
            libelle: 'BBBBBB',
            reference: 'BBBBBB',
            numeroordre: 1,
            typeproduit: 'BBBBBB',
            familleproduit: 'BBBBBB',
            produitadditionnel: true,
            obligatoirepourentreprise: true,
            effectifmax: 1,
            chartegraphique: 'BBBBBB',
            alertetarificationexterne: 'BBBBBB',
            questionnairerecexige: true,
            libellemodule: 'BBBBBB',
            nomchampbadh: 'BBBBBB',
            typequestionnairerec: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .query(expected)
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Produit', async () => {
        const rxPromise = service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
