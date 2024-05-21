import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})

export class AppComponent {
  title = 'behaviour-subject';
  user1Activated: boolean = false;
  user2Activated: boolean = false;
  userSub!: Subscription

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.userSub = this.userService.userActivated.subscribe((id: any) => {
      if (id == 1) {
        this.user1Activated = true;
      }
      else if (id == 2) {
        this.user2Activated = true;
      }
    })
    this.router.navigateByUrl('/home')
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
