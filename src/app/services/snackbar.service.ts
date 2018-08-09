import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    public config;

    constructor(private snackBar: MatSnackBar) {
        this.config = new MatSnackBarConfig();
        this.config.panelClass = ['chatter-snackbar'];
        this.config.duration = 3000;
        this.config.horizontalPosition = 'right';
        this.config.verticalPosition = 'bottom';
    }

    public showSuccessMessage(message: string): void {
        this.config.panelClass.push('success');
        this.snackBar.open(message, null, this.config);
    }
    public showErrorMessage(message: string): void {
        this.config.panelClass.push('error');
        this.snackBar.open(message, null, this.config);
    }
}
