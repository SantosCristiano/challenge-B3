namespace calculo_cdb.Logic;

public interface ICDBCalculatorService
{
    ResultCDBCalculation RunCDBCalculation(int qtyMonths, double initialValue);
    double CalculateTax(int qtyMonths, double valueGrossResult);
}
