import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {UsersService} from "./users.service";
import {User} from "../../_models/user";

@Injectable()
export class UserResolve implements Resolve<User>
{

  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.usersService.getUser(route.params['id']);
  }
}
