import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@native-playground/core';
import { AppService } from '@native-playground/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
