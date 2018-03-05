import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { SessionService } from './session.service'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class LoggedInService implements CanActivate {

  constructor(public sessionService: SessionService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.sessionService.user) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}