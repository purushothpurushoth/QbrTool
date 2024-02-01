// spinner.service.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    private spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private spinner: NgxSpinnerService) { }

    showSpinner() {
        this.spinner.show();
        this.spinnerSubject.next(true);
    }

    hideSpinner() {
        this.spinner.hide();
        this.spinnerSubject.next(false);
    }

    getSpinnerState(): Observable<boolean> {
        return this.spinnerSubject.asObservable();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.showSpinner();
        setTimeout(() => {
            this.hideSpinner();
            console.log("spinner is closed...");
        }, 3000);

    }
}