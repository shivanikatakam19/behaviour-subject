import { BehaviorSubject } from 'rxjs';

export class UserService {
    userActivated = new BehaviorSubject(0);
}