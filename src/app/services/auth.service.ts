
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { User } from '../user';
import { Calendar } from '../calendar';
import { Holidays } from '../holidays';
import { Attendance } from '../attendance';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:9090';
  //Currently updated with the recent URL I have generated from backend  


  // private statusChangeSubject = new Subject<any>();

  constructor(private http: HttpClient) { }


  // statusChange$ = this.statusChangeSubject.asObservable();

  // updateEventStatus(event: any, status: string) {
  //   event.status = status;
  //   this.statusChangeSubject.next({ event, status });
  // }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  getLoggedUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/loggedUser`);
  }

  //Not Working
  // getloggedUser(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/user`);
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  saveAttendance(attendanceData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, attendanceData);
  }

  getAttendance(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.baseUrl}/Attendance`);
  }

  updateAttendanceStatus(title: string, start: string, end: string, status: string): Observable<any> {
    const event = { title, start, end, status }
    return this.http.post(`${this.baseUrl}/updateAttendanceStatus`, event)
  }
  // saveAttendance(attendanceData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/Attendance`, attendanceData);
  // }

  // login(email: string, password: string): Observable<any> {`
  //   return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  // }

  getCalendar(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(`${this.baseUrl}/Calendarevents`);
  }

  getCalendarHolidays(): Observable<Holidays[]> {
    return this.http.get<Holidays[]>(`${this.baseUrl}/holiday`);
  }

  approveAttendance(id: number, approve: boolean): Observable<any> {
    return this.http.post(`${this.baseUrl}/approve?id=${id}&approve=${approve}`, {});
  }

  // getCurrentUser(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/currentuser`);
  // }

  // getEvents(): Observable<Calendar[]> {
  //   return this.http.get<Calendar[]>(`${this.baseUrl}/Events`);
  // }

  // @Bean issue 
  /*
login(email: string, password: string): Observable<any> {
  const loginDTO = { email, password };
  return this.http.post<any>(`${this.baseUrl}/login`, loginDTO)
    .pipe(
      map(response => {
        if (response.success) {
          // Store the token or user details if needed
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
        return response;
      })
    );
}
    */

  login(email: string, password: string): Observable<any> {
    console.log("login service called");
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(email + ':' + password));
    return this.http.post(`${this.baseUrl}/login`, { email, password }, {
      headers: httpHeaders
    });
  }


}




