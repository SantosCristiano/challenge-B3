import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface CdbCalculatorResponse {
  rawScore: number;
  netIncome: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public RawScore: number = 0.0;
  public NetIncome: number = 0.0;
  public initialValue: number | undefined;
  public qtyMonths: number | undefined;

  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) { }

  sendData(): void {
    if (this.validateFields()) {
      console.error('Campos inválidos');
      return;
    }

    const body = {
      initialValue: this.initialValue,
      qtyMonths: this.qtyMonths
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post<CdbCalculatorResponse>(`${environment.BASE_URL}cdbcalculator`, body, { headers }).subscribe(
      (data) => {
        this.RawScore = data.rawScore;
        this.NetIncome = data.netIncome;
        this.cdRef.markForCheck();
      },
      (error) => {
        console.error('Erro:', error);
      }
    );
  }

  validateFields(): boolean {
    return !this.qtyMonths || this.qtyMonths <= 0 || !this.initialValue || this.initialValue <= 0;
  }
}
