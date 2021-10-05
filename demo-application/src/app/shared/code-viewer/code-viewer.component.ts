import {Component, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit {

  @Input() path: string = '';

  extension: string = '';
  content: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const parts = this.path.split('.');
    this.extension = parts[parts.length - 1];

    this.http.get('assets/demo-code/' + this.path, {responseType: 'text'})
      .subscribe(result => this.content = result);
  }
}
