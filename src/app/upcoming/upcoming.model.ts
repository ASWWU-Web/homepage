export class UpcomingModel {
  summary: string;
  htmlLink: string;
  startDate: string;
  endDate: string;
  display: boolean;
  // startTime: string;
  // endTime: string;
  constructor(summary:string, htmlLink:string, start, end){
      this.summary = summary.slice(6);
      this.htmlLink = htmlLink;
      if(start.hasOwnProperty("date") && end.hasOwnProperty("date")){
        // this.startDate = start.date;
        this.startDate = this.extractDate(start.date);
        this.endDate = this.extractDate(end.date);
        // if(start.date.getTime() === end.date.getTime()){this.endDate = "";} else {this.endDate = end.date.prototype.toDateString();};
        // this.startTime = "";
        // this.endTime = "";
      } else if (start.hasOwnProperty("dateTime") && end.hasOwnProperty("dateTime")) {
        // this.startDate = "This event uses the dateTime format";
        // this.startDate = start.dateTime;
        this.startDate = this.extractDate(start.dateTime);
        this.endDate = this.extractDate(end.dateTime);
        // this.endDate = "";
        // this.startTime = "";
        // this.endTime = "";
      }
      // else if(this.startDate == this.endDate){  }
      // else if(this.startTime == this.endTime){  }
      // else { console.log("There's been an error") }
  }

  private extractDate(date:string):string {
      let months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
      let day = +date.slice(8,10);
      let month = months[+date.slice(5,7) - 1];
      // let year = date.slice(0,4);
      return month + " " + day;
  }

  private extractTime(date:string):string {
      
      return "hello";
  }
}
