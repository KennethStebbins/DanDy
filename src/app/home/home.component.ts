import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private routerService: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("DanDy!")
  }

  goToPlay(): void {
    this.routerService.navigate(['/play']);
  }

}
