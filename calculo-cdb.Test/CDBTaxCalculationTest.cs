using calculo_cdb.Logic;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace calculo_cdb.Test 
{
    [TestClass]
    internal class CDBTaxCalculationTest
    {
        ICDBCalculatorService CDBCalculatorService = new CDBCalculatorService();

        [TestInitialize]
        public void Setup()
        {
            CDBCalculatorService = new CDBCalculatorService();
        }

        [TestMethod]
        public void Test_ValidationNegativeEntry_QtyMonths()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.CalculateTax(-1, 1000));
        }

        [TestMethod]
        public void Test_ValidationNegativeInput_GrossResultValue()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.CalculateTax(12, -1000));
        }

        [TestMethod]
        public void Test_ValidationIntervalMonths()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.CalculateTax(0, 1000));
        }

        [TestMethod]
        public void Test_ValidacaoGrossResultValue()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.CalculateTax(12, 0));
        }

        [TestMethod]
        public void Test_TaxCalculation()
        {
            // Arrange
            double expectedTax = 225;
            double delta = 0.001;

            // Act
            double calculatedTax = CDBCalculatorService.CalculateTax(6, 1000);

            // Assert
            Assert.AreEqual(expectedTax, calculatedTax, delta);
        }

        [TestMethod]
        public void Test_CalculateTax_CorrectTaxRate()
        {
            // Arrange & Act
            double result = CDBCalculatorService.CalculateTax(6, 1000);
            double expectedTax = 1000 * 0.225;
            double delta = 0.001;

            // Assert
            Assert.AreEqual(expectedTax, result, delta);
        }

        [TestMethod]
        public void Test_CalculateTax_PositiveValue()
        {
            // Arrange & Act
            double result = CDBCalculatorService.CalculateTax(12, 1000);

            // Assert
            Assert.IsTrue(result >= 0);
        }

        [TestMethod]
        public void Test_CalculateTax_QtyMonthsLessThanTwo()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.CalculateTax(1, 1000));
        }

        [TestMethod]
        public void Test_CalculateTax_RateUpSixMonths()
        {
            // Arrange & Act
            double result = CDBCalculatorService.CalculateTax(6, 1000);
            double expectedTax = 1000 * 0.225;
            double delta = 0.001;

            // Assert
            Assert.AreEqual(expectedTax, result, delta);
        }

        [TestMethod]
        public void Test_CalculateTax_RateUpTwelveMonths()
        {
            // Arrange & Act
            double result = CDBCalculatorService.CalculateTax(12, 1000);
            double expectedTax = 1000 * 0.20;
            double delta = 0.001;

            // Assert
            Assert.AreEqual(expectedTax, result, delta);
        }

        [TestMethod]
        public void Test_CalculateTax_RateUpTwentyFourMonths()
        {
            // Arrange & Act
            double result = CDBCalculatorService.CalculateTax(24, 1000);
            double expectedTax = 1000 * 0.175;
            double delta = 0.001;

            // Assert
            Assert.AreEqual(expectedTax, result, delta);
        }

        [TestMethod]
        public void Test_CalculateTax_RateOverTwentyFourMonths()
        {
            // Arrange & Act
            double result = CDBCalculatorService.CalculateTax(36, 1000);
            double expectedTax = 1000 * 0.15;
            double delta = 0.001;

            // Assert
            Assert.AreEqual(expectedTax, result, delta);
        }
    }

}