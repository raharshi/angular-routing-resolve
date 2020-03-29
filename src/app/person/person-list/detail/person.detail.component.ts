import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PersonService } from '../../services/person.service';
import { Person } from '../../person';

@Component({
  templateUrl: './person.detail.component.html' 
}) 
export class PersonDetailComponent implements OnInit { 
    person: Person;
    constructor( 
	private personService: PersonService,
	private route: ActivatedRoute) { }
		
    ngOnInit() {
       this.route.params
        .switchMap((params: Params) => this.personService.getPerson(params['person-id']))
        .subscribe(person => this.person = person);
    }		
} 