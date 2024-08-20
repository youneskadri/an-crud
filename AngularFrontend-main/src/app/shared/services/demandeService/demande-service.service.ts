import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { Demande } from '../../models/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = `${environment.baseUrl}demandes/`;

  constructor(private http: HttpClient) {}

  private getHttpOptions(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
    return { headers };
  }

  getDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.apiUrl, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  getDemandeById(id: number): Observable<Demande> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Demande>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  saveDemande(demande: Demande): Observable<Demande> {
    const userId = this.getUserIdFromToken();
    const url = `${this.apiUrl}users/${userId}/demandes`;
    return this.http.post<Demande>(url, demande, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  createDemande(demande: Demande): Observable<Demande> {
    const userId = this.getUserIdFromToken();
    if (!userId) {
      console.error('User ID is missing');
      return throwError(() => new Error('User ID is missing'));
    }

    const url = `${this.apiUrl}users/${userId}/demandes`;
    return this.http.post<Demande>(url, demande, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  deleteDemande(id: number): Observable<void> {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<void>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  updateDemande(id: number, demande: Demande): Observable<Demande> {
    const url = `${this.apiUrl}${id}`;
    return this.http.put<Demande>(url, demande, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  testEndpoint(): Observable<string> {
    const url = `${this.apiUrl}test`;
    return this.http.get<string>(url, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  private getUserIdFromToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = token.split('.')[1];
        const decodedToken = JSON.parse(atob(payload));
        return decodedToken.sub || null;
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return null;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
