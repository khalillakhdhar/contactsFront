import { Component } from '@angular/core';
import { EvenementService } from '../shared/services/evenement.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
events:any;
p=0;
constructor(private eventService:EvenementService)
{
  this.loadEvents();
}
  async loadEvents()
{
 await this.eventService.getAllEvenements().subscribe(response=>
    {
      this.events=response;
      console.log("events",this.events);
    }
  )
}
  async deleteEvent(event:any)
{
  if(confirm("êtes vous sûr de vouloir supprimer l'évenement: "+event.description))
  await this.eventService.deleteOneEvenement(event.id).subscribe(()=>
  {
    console.log("evenement supprimé avec succés");
    this.loadEvents();
  }
  );
  
}
}
