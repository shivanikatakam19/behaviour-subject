import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Observer } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    customObsSubscription!: Subscription;

    constructor() { }

    ngOnInit() {

        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('first package')
            }, 2000);
            setTimeout(() => {
                observer.next('second package')
            }, 4000);
            setTimeout(() => {
                observer.complete()
            }, 5000);

        });

        this.customObsSubscription = myObservable.subscribe(
            (data: string) => { console.log(data) },
            (error: string) => { console.log(error) },
            () => { console.log('completed') }
        )
    }


    ngOnDestroy() {
        this.customObsSubscription.unsubscribe();
    }

}

// create method will create a new observable object for us

// here the observer we created is the final observer
// we will tell the observer when it will receive which data and we subscribe to it and use the observer to react to the data

// next method is called by observable when ever a new value is emitted