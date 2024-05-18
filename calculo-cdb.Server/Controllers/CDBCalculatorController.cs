using calculo_cdb.Logic;
using Microsoft.AspNetCore.Mvc;

namespace calculo_cdb.Controllers
{ 

    [ApiController]
    [Route("cdbcalculator")]
    public class CDBCalculatorController : ControllerBase
    {
        public class CalculationInput
        {
            public int QtyMonths { get; set; }
            public double InitialValue { get; set; }
        }

        private readonly ILogger<CDBCalculatorController> _logger;
        private readonly ICDBCalculatorService _CDBCalculatorService;

        public CDBCalculatorController(ILogger<CDBCalculatorController> logger, ICDBCalculatorService CDBCalculatorService)
        {
            _logger = logger;
            _CDBCalculatorService = CDBCalculatorService;
        }

        [HttpPost]
        public CDBCalculator CalculateCDB([FromBody] CalculationInput input)
        {
            var resultCDB = _CDBCalculatorService.RunCDBCalculation(input.QtyMonths, input.InitialValue);

            return new CDBCalculator
            {
                RawScore = resultCDB.RawScore,
                NetIncome = resultCDB.NetIncome
            };
        }

        public IActionResult GetVersion()
        {
            var apiVersion = new { Version = "1.0.0" };
            return Ok(apiVersion);
        }
    }
}