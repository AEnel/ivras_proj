# ivras

https://aenel.github.io/ivras_proj/dist/index.html

ТЗ
Список задач для реализации:

В данном проекте уже есть подключенный слайдер в виде готового решения. Это все, что мы смогли сделать. Вам его трогать не нужно. Он оставлен, чтобы сохранить стили оригинального проекта и поддержки мобильной версии. Именно в ней он и работает.

При клике на эту кнопку:

Должно вызываться модальное окно (класс popup_engineer)
При клике на крестик или подложку - исчезать.


При клике на эти надписи:
“Заказать обратный звонок” и “Спросите у нашего специалиста”



Должно вызываться модальное окно (класс popup)
При клике на крестик или подложку - исчезать


Внутри всех модальных окон есть форма. Она должна отправляться посредством ajax(без перезагрузки страницы) и захватывать все введенные данные. Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). В поле с телефоном можно вводить только цифры.


На странице есть 6 одинаковых форм обратной связи:



Все они должны отправляться посредством ajax(без перезагрузки страницы) и захватывать все введенные данные. Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). В поле с телефоном можно вводить только цифры.


Должны быть реализованы табы:

Так же идет переключение активного таба и его стиля. (класс active)
Пользователь может кликнуть и на надпись и на картинку
Внутри всех табов есть кнопки “Рассчитать стоимость”

При клике на них должно появляться модальное окно с классом popup_calc 
Как оно должно выглядеть:

Основная задача: при клике на маленькие превью (4 в ряд сверху) эта превьюшка(картинка) становится несколько больше. Под ними показывается картинка-аналог активной превью. При выборе другой - аналогичная логика. В верстке все готово - нужно только прописать логику.

В поля “ширина” и “высота” можно вписать только цифры.
При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_profile 
На этом окне реализовать, что можно выбрать только 1 профиль. Или холодное или теплое.
При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_end 
Здесь требования точно такие же как и в других формах. НО! Все данные, что отметил или выбрал человек должны быть переданы вместе с формой.



Реализация табов:

Так же идет переключение активного таба и его стиля. (класс after_click)


Реализация таймера: 



Дедлайн пока выставляйте любой.


При клике на любую из восьми картинок - она открывается на весь экран с полупрозрачной, темной подложкой.
Как должно выглядеть:

При клике на подложку - все исчезает.
Здесь много вариантов реализации. Верстка отдельных блоков запрещена. Реализация на ваше усмотрение, но все делать через JS.


Если пользователь на странице больше 60 секунд - должно появится модальное окно (popup). При нажатии на крестик или подложку окно исчезает. 


Необходима модульная структура проекта, подключена должна быть сборка(bundle).


Никакого дублирования кода. Не нужно привязывать к каждой кнопке отдельные действия. Воспользуйтесь функцией или циклами.
