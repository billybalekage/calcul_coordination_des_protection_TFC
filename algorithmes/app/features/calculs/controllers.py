from fastapi import Request

from app.features.calculs.schemas import CalculationInput, CalculationResponse
from app.features.calculs.services import calculate_result


def calculate_protection(
    request: Request,
    data: CalculationInput,
) -> CalculationResponse:
    return CalculationResponse(result=calculate_result(data))
