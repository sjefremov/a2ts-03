import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vote',
    templateUrl: 'vote.component.html'
})
export class VoteComponent implements OnInit {
    @Input()
    question:any;

    @Output()
    onVoted = new EventEmitter<boolean>();


    constructor() { }

    ngOnInit() { }

    vote(value:boolean){
        this.onVoted.emit(value);
    }
}