/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector('.forecast-btn');
const wrapPrediction = document.querySelector('.current-forecast');
const prediction = wrapPrediction.querySelector('h1');
const probability = wrapPrediction.querySelector('p');
const containerPredictions = document.querySelector('.forecasts');
const predictionTemplate = document.querySelector('#forecast-item');


function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener('click', function() {
  let predictionText = "";
  const predictionNumber = generateNumber(1, 6);
  const probabilityPrediction = generateNumber(0, 101);

  switch (predictionNumber) {
    case 1:
      predictionText = "Тебя ждет повышение на работе!";
      break;
    case 2:
      predictionText = "У тебя будет собака!";
      break;
    case 3:
      predictionText = "Сегодня вечером ты пойдешь в кино!";
      break;
    case 4:
      predictionText = "Все получится!";
      break;
    case 5:
      predictionText = "В воскресенье ты пойдешь на свидание!";
      break;
  }

  prediction.textContent = predictionText;
  probability.textContent = `Вероятность: ${probabilityPrediction}%`;

  const predictionCard = predictionTemplate.content.cloneNode(true);

  predictionCard.querySelector('h3').textContent = prediction.textContent;
  predictionCard.querySelector('p').textContent = probability.textContent;

  containerPredictions.prepend(predictionCard);
});












