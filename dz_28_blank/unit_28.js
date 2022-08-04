 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
let goods = new Goods('Apple', 10,'','');
 console.log(goods.go());
//  console.log(str);
 
 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.
//  goods = new Goods('Apple', 10, './img/apple.jpg', 80);
//  console.log(goods.go())
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
//  let draw = new Goods('Apple', 10, './img/apple.jpg');
//  document.querySelector('.out-3').innerHTML = draw.draw();
 
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
let goods2 = new Goods('Apple', 10, './img/apple.jpg','');
document.querySelector('.out-4').innerHTML = goods2.draw();

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
//  goods2 = new Goods2('','','','', true);
//  document.querySelector('.out-5').innerHTML = goods2.draw();

 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
let goods3 = new Goods2('Apple', 10, './img/apple.jpg',80, true);
document.querySelector('.out-6').innerHTML = goods3.draw();
 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
//   let val = new Valid('','fxgfhxhe')
//  val.validate();
//  document.querySelector('.out-7').innerHTML = val.validate();
//  console.log(val.validate());
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  let val = new Valid('Denys', '12345');
  console.log(val.validate());
 
 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  val = new Valid('Denys', '1234567');
  console.log(val.validate());
 
 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
//  val = new Valid2('o', '12345i');
//  console.log(val.validate());
 
 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  let valid2 = new Valid2('', 'asdrhaerh');
  console.log(valid2.validate());
 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  let valid3 = new Valid2('i', 'argarharh');
  console.log(valid3.validate());