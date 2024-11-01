import { Component } from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {filter} from 'rxjs';
import {buildGetOpenDialogAriaText} from '@mui/x-date-pickers/locales/utils/getPickersLocalization';

//https://medium.com/@stefannovak96/signing-in-with-google-with-keycloak-bf5166e93d1e
//https://console.cloud.google.com/apis/credentials?project=doku-document

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://auth.devfriday.top/auth/realms/doku-document',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'angular-oauth2-client',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'QbCMJQrfcnXDEaDfVbHYUQh2nJc8N1KU',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access',

  showDebugInformation: true,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Docu Document';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();

    //this.oauthService.setupAutomaticSilentRefresh();

    // Automatically load user profile
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => this.oauthService.loadUserProfile());
  }

  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return "";
    return claims['given_name'] + " " + claims['family_name'];
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refresh() {
    this.oauthService.refreshToken();
  }

  logout() {
    this.oauthService.logOut();
  }

  protected readonly buildGetOpenDialogAriaText = buildGetOpenDialogAriaText;
}
