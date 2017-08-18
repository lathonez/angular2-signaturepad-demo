# Angular2-SignaturePad Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Live Demo

[http://lathonez.com/angular2-signaturepad-demo/](http://lathonez.com/angular2-signaturepad-demo/)

## Overview

This is a reference implementation of [angular2-signaturepad](https://www.npmjs.com/package/angular2-signaturepad):

1. [Import](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts#L7) `SignaturePadModule` into the app's [main NgModule](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts#L20)
2. Create a [form component](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/signature-field/signature-field.component.ts#L1-L64) to act as a [ControlValueAccessor](https://angular.io/docs/ts/latest/api/forms/index/ControlValueAccessor-interface.html) for the [SignaturePad](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/signature-field/signature-field.component.html#L1)
3. Add a [form](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.component.html#L5-L7) to the main [app component](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.component.ts#L13-L20), leveraging the form component created above.

## Run

`npm install && npm start`
