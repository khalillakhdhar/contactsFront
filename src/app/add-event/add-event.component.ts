import { Component } from '@angular/core';
import { Evenement } from '../shared/classes/evenement';
import { EvenementService } from '../shared/services/evenement.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
event={} as Evenement;
types=["anniversaire",	"visite" ,	"travail",	"autre"]
constructor(private evenementService:EvenementService)
{

}
addEvent()
{
  this.evenementService.createOneEvenement(this.event).subscribe(
    ()=>{
      console.log("evennement ajouté!")
      this.event={} as Evenement;
      window.location.reload();
    }
  );
}
changeType(e:any)
{
  this.event.type=e.target.value;
 // alert(this.event.type);
}
}
