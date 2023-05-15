import { Component, OnInit } from '@angular/core';
import { SearchsalesService } from './searchsales.service';


@Component({
  selector: 'app-searchsales',
  templateUrl: './searchsales.component.html',
  styleUrls: ['./searchsales.component.scss'],
})

export class SearchsalesComponent implements OnInit {
    public salesforceapi:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        salesforcelist: '',
    }

    constructor (
        private searchsalesService: SearchsalesService,
    ) { }

    ngOnInit() {
        this.salesforceapi.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
}