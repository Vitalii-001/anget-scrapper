import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AngelService {
  constructor(
    private http: HttpClient
  ) {

  }

  public getCompaniesPage(): Observable<any> {
    const params = {
      'filter_data[company_types][]': 'Startup',
      'filter_data[locations][]': '1971-Ukraine'
    }
    return this.http.get('https://angel.co/company_filters/search_data', {
      params: params
    });
  }

}


// https://angel.co/company_filters/search_data => GET (get ids of company) filter_data[company_types][]:Startup | filter_data[locations][]:1971-Ukraine | sort:signal | page:2
// https://angel.co/companies/startups => GET companies HTML by ids
//https://angel.co/startups/474985 => GET company HTML by id
