// import { Global } from './global';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
// import { LoginModule } from './login/login.module';
// import { LayoutMainModule } from './layout/layout.module';
import 'hammerjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Interceptor } from './core/inteceptor';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatDividerModule, MatLabel, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
// import { AuthService } from './core/auth.service';
// import { TokenStorage } from './core/token.storage';
// import { Messages } from './util/messages';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
// import { reducer } from './layout/patient/store/reducers/patient.reducer';
// import { reducers, metaReducers } from './store/reducers';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { SanitizeHtmlPipe } from './util/sanitize-html-pipe';



@NgModule({
  declarations: [AppComponent,
    //  SanitizeHtmlPipe
    ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule, FormsModule,
    // LoginModule,
    // LoadingBarHttpClientModule,
    // LoadingBarRouterModule,
    // LayoutMainModule,
    FlexLayoutModule, MatButtonModule, MatSelectModule, MatOptionModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatSidenavModule, MatRadioModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    NoopAnimationsModule,
    SnotifyModule,
    // NgxPermissionsModule.forRoot(),
    // StoreModule.forRoot(reducers, { metaReducers }),
    // EffectsModule.forRoot([]),
    // environment.production
    //   ? []
    //   : StoreDevtoolsModule.instrument({
    //     name: 'MHR'
    //   }),
  ],

  entryComponents: [],
  providers: [
    // AuthService,
    // TokenStorage,
    // Messages,
    // Global,
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Interceptor,
    //   multi: true
    // },
    // SnotifyService,
    // {
    //   provide: 'SnotifyToastConfig',
    //   useValue: ToastDefaults
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
