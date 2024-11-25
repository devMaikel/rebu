import { HttpException, HttpStatus } from '@nestjs/common';

export const transformTime = (time) => {
  const minutes = Math.floor(+time / 60);
  const minuteText = minutes === 1 ? '1 minuto' : `${minutes} minutos`;
  const remainingSeconds = +time % 60;
  const secondText =
    remainingSeconds === 1 ? '1 segundo' : `${remainingSeconds} segundos`;
  if (minutes > 0 && remainingSeconds > 0) {
    return `${minuteText} e ${secondText}`;
  } else if (minutes > 0) {
    return minuteText;
  } else {
    return secondText;
  }
};

export const basicRidesValidade = (ride) => {
  if (
    ride.destination == ride.origin ||
    !ride.destination ||
    !ride.origin ||
    !ride.customer_id
  ) {
    throw new HttpException(
      {
        error_code: 'INVALID_DATA',
        error_description:
          'Os dados fornecidos no corpo da requisição são inválidos',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
};
