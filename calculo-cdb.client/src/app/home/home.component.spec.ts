import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from './environment';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [
        { provide: 'BASE_URL', useValue: environment.BASE_URL }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the button when fields are invalid', () => {
    component.initialValue = 0;
    component.qtyMonths = 1;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });


  it('test when to calculate and display correct results when fields are valid', async () => {
    component.initialValue = 1000;
    component.qtyMonths = 12;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    await fixture.whenStable();
    fixture.detectChanges();

    const resultGrossElement = fixture.nativeElement.querySelector('#LabelGrossResult');
    const resultGrossContent = resultGrossElement.textContent;

    const resultLiquidElement = fixture.nativeElement.querySelector('#LabelNetResult');
    const resultLiquidContent = resultLiquidElement.textContent;

    expect(resultGrossContent).toContain('R$');
    expect(resultGrossContent).not.toBeNull();

    expect(resultLiquidContent).toContain('R$');
    expect(resultLiquidContent).not.toBeNull();
  });
});

