import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignatureFieldComponent } from './signature-field/signature-field.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'angular2-signaturepad-demo : angular2-signaturepad@2.8.0 angular@5.1.0';
  public form: FormGroup;

  // for convenience as we don't have a QueryList.index
  public secondSig: SignatureFieldComponent;

  @ViewChildren(SignatureFieldComponent) public sigs: QueryList<SignatureFieldComponent>;
  @ViewChildren('sigContainer1') public sigContainer1: QueryList<ElementRef>;
  @ViewChildren('sigContainer2') public sigContainer2: QueryList<ElementRef>;
  @ViewChildren('sigContainer3') public sigContainer3: QueryList<ElementRef>;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      signatureField1: ['', Validators.required],
      signatureField2: ['', Validators.required],
      signatureField3: ['', Validators.required]
    });
  }

  public ngAfterViewInit() {
    this.secondSig = this.sigs.find((sig, index) => index === 1);
    this.beResponsive();
    this.setOptions();
  }

  // set the dimensions of the signature pad canvas
  public beResponsive() {
    console.log('Resizing signature pad canvas to suit container size');
    this.size(this.sigContainer1.first, this.sigs.first);
    this.size(this.sigContainer2.first, this.secondSig);
    this.size(this.sigContainer3.first, this.sigs.last);
  }

  public size(container: ElementRef, sig: SignatureFieldComponent) {
    sig.signaturePad.set('canvasWidth', container.nativeElement.clientWidth);
    sig.signaturePad.set('canvasHeight', container.nativeElement.clientHeight);
  }

  public setOptions() {
    this.sigs.first.signaturePad.set('penColor', 'rgb(255, 0, 0)');
    this.secondSig.signaturePad.set('penColor', 'rgb(255, 255, 0)');
    this.secondSig.signaturePad.set('backgroundColor', 'rgb(0, 0, 255)');
    this.secondSig.signaturePad.clear(); // clearing is needed to set the background colour
  }

  public submit() {
    console.log('CAPTURED SIGS:');
    console.log(this.sigs.first.signature);
    console.log(this.secondSig.signature);
    console.log(this.sigs.last.signature);
  }

  public clear() {
    this.sigs.first.clear();
    this.secondSig.clear();
    this.sigs.last.clear();
  }
}
