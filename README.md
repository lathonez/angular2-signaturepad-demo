# Angular2-SignaturePad Demo

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Run

`npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Demo

This app was generated using `ng-cli`. It contains a reference implementation of [angular2-signaturepad](https://www.npmjs.com/package/angular2-signaturepad).

* [Import](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts#L7) `SignaturePadModule` into the app's [main NgModule](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts#L20)
* Create a [form component](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/signature-field/signature-field.component.ts#L1-L64) to act as a [ControlValueAccessor](https://angular.io/docs/ts/latest/api/forms/index/ControlValueAccessor-interface.html) for the [SignaturePad](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/signature-field/signature-field.component.html#L1)
* Add a [form](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.component.html#L5-L7) to the main [app component](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.component.ts#L13-L20), leveraging the form component created above.