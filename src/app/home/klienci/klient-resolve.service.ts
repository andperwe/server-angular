import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {KlientsService} from "./klients.service";
import {Klient} from "./models/klient";
import {Injectable} from "@angular/core";

@Injectable()
export class KlientResolve implements Resolve<Klient>
{

  constructor(private klientsService: KlientsService) {}


  resolve(route: ActivatedRouteSnapshot) {
        return this.klientsService.getKlient(route.params['id']);
  }
}
