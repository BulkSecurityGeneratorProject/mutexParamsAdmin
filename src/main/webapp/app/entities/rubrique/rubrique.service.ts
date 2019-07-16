import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IRubrique } from 'app/shared/model/rubrique.model';

type EntityResponseType = HttpResponse<IRubrique>;
type EntityArrayResponseType = HttpResponse<IRubrique[]>;

@Injectable({ providedIn: 'root' })
export class RubriqueService {
  public resourceUrl = SERVER_API_URL + 'api/rubriques';

  constructor(protected http: HttpClient) {}

  create(rubrique: IRubrique): Observable<EntityResponseType> {
    return this.http.post<IRubrique>(this.resourceUrl, rubrique, { observe: 'response' });
  }

  update(rubrique: IRubrique): Observable<EntityResponseType> {
    return this.http.put<IRubrique>(this.resourceUrl, rubrique, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IRubrique>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IRubrique[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
