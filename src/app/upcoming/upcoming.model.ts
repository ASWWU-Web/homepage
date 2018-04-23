export class UpcomingModel {
  summary: string;
  htmlLink: string;
  startDate: string;
  // startTime: string;
  // endDate: string;
  // endTime: string;
  constructor(summary:string, htmlLink:string, start){
      this.summary = summary.slice(6);
      this.htmlLink = htmlLink;
      if(start.hasOwnProperty("date")){
      // this.startDate = start.date;
      this.startDate = this.extractDate(start.date);
      // if(start.date.getTime() === end.date.getTime()){this.endDate = "";} else {this.endDate = end.date.prototype.toDateString();};
      // this.startTime = "";
      // this.endTime = "";
      } else if (start.hasOwnProperty("dateTime")) {
      // this.startDate = "This event uses the dateTime format";
      // this.startDate = start.dateTime;
      this.startDate = this.extractDate(start.dateTime);
      // this.endDate = "";
      // this.startTime = "";
      // this.endTime = "";
      }
      // else if(this.startDate == this.endDate){  }
      // else if(this.startTime == this.endTime){  }
      // else { console.log("There's been an error") }
  }

  private extractDate(date:string):string {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let day = +date.slice(8,10);
      let month = months[+date.slice(5,7) - 1];
      // let year = date.slice(0,4);
      return month + " " + day;
  }

  private extractTime(date:string):string {
      
      return "hello";
  }
}
