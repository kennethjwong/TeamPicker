import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMsg: string = '';
  noOfTeam: number | '' = '';
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMsg = 'Name cannot be empty!!';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMsg = '';
  }
  onMemberInput(m: string) {
    this.newMemberName = m;
  }

  onTeamInput(n: string) {
    this.noOfTeam = Number(n);
  }
  generateTeam() {
    if (!this.noOfTeam || this.noOfTeam <= 0) {
      this.errorMsg = 'Invalid input for team!';
      return;
    }
    if (this.noOfTeam > this.members.length) {
      this.errorMsg = 'Invalid input for team!';
      return;
    }
    this.errorMsg = '';
    const allMembers = [...this.members];
    while (allMembers.length) {
      for (let i = 0; i < this.noOfTeam; i++) {
        console.log('Generating team...');
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    console.log(this.teams);
    this.members = [];
    this.noOfTeam = '';
  }
}
