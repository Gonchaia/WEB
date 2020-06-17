var canvas = document.getElementById('canvas');
//canvas изначально пустой, чтобы что-нибудь нарисовать, скрипту нужно получить контекст отрисовки
var ctx = canvas.getContext('2d'); //получение контекста отрисовки вместе с функциями рисования

//! некоторые браузеры не поддерживают canvas !
//метод getContext - возвращает false (или что-то интрепритируется как false)

var canvas = document.getElementById('canvas');
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
}

//рисование прямоугольника
ctx.fillRect(25, 25, 100, 100); //заполненный прямоугольник
ctx.clearRect(45, 45, 60, 60); //очищает заданную область и делает ее полностью прозрачной
ctx.strokeRect(50, 50, 50, 50); //рисует границы прямоугольника

//РИСОВАНИЕ ПУТЕЙ (координаты начала в левом верхнем углу)
//внутри системы хранится список суб-путей(линии, дуги, ...), образующий фигуры
ctx.beginPath(); //при вызове метода список отчищается и можно рисовать новую фигуру
//потом вызываем методы, рисующие пути
ctx.closePath(); //необязательный метод // рисует линию от текущей точки к начальной
ctx.stroke(); // прорисовывает фигуру на холсте, рисуя только рамку
ctx.fill(); //прорисовывает залитую фигуру на холсте

//рисование дуг и кругов
var x = 100; //координата центра круга
var y = 100; //координата центра круга
var radius = 50; //радиус
var startAngle = 0; //точки начала и конца арки в радианах
var endAngle = Math.PI; //отмеряется от оси X
var anticlockwise = false; //false - по часовой стрелке, true - против часовой стрелки
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

//безье и квадратичные прямые
ctx.quadraticCurveTo(cp1x, cp1y, x, y); //одна точка контроля
cxt.CurveTo(cp1x, cp1y, cp2x, cp2y, x, y); //2 точки котроля

//цвет
ctx.fillStyle = 'orange';
ctx.strokeSyle = 'FFA500';
ctx.strokeSyle = 'rgb(255, 165, 0)';
ctx.fillStyle = 'rgba(255, 165, 0, 1)';

//прозрачность (значение от 0 до 1)
ctx.globalAlpha = 0.5; //применяет значение прозрачности ко всем фигурам
//добавление прозрачности к заливке и обводке
ctx.fillStyle = 'rgba(a, b, c, 0.5)';