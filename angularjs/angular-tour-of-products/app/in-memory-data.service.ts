import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
        {id: 11, name: 'ABC'},
        {id: 12, name: 'Tiger'},
        {id: 13, name: 'Crown'},
        {id: 14, name: 'Corona'}
    ];
    return {products};
  }
}
