import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archive: {
    year: number,
    month: number
  };

  constructor (private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {

        let params = this.route.snapshot.paramMap; // component destroyed and rebuild if entering same page again
         this.archive = {
          year: +params.get('year'),
          month: +params.get('month')
         };

         return this.archive;
     // });
  }

  viewAll() {
    this.router.navigate(['/']);
  }

}
