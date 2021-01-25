let Chainik = function () {
    if (confirm('Включить чайник?')) {
        this.get = function () {
            this.mos = +prompt('Введите мощность чайника:');
            this.colv = +prompt('Введите количество воды:');
            this.c = 1.163;
            this.t = 80;
            this.kpd = 1;
            
            if (isNaN(this.mos) || isNaN(this.colv || this.mos == '' || this.colv == '')) {
                alert('Ошибка. Попробуйте заново!');
                this.get();
            } else {
                this.operation();
            }
        }
        this.operation = function () {
            this.result = (this.colv * this.c * this.t) / (this.mos * this.kpd);
    
            this.show();
        }
    
        this.show = function () {
            alert('Время закипания воды' + ' ' + '=' + ' ' + Math.round(this.result) + ' ' + 'c');
        }
    } else {
        alert('Чайник выключен!');
    }
}

let ChainikNew = function() {
    Chainik.apply(this);

    let parentOperation = this.operation;

    this.operation = function() {
        parentOperation.call(this);
        this.bolling();
    }

    this.bolling = function() {
        setTimeout(function() {
            if (this.t != 0 || !isNaN(this.t)) {
                alert('Вода закипела. Чайник выключен!');
            }
        }, 1000)
    }
}

let chainik = new ChainikNew();
chainik.get(); 

let Constructor = function() {

    this.create = function(parentElement, element) {
        let newParentEl = document.querySelector(parentElement);
        let newElement = document.createElement(element);
        newParentEl.appendChild(newElement);
    };

    this.attr = function(element, name, value) {
        this.elem = document.querySelector(element);
        this.elem.setAttribute(name, value);
    };

    this.html = function(name, value) {
        this.htmlTag = document.querySelector('html');
        this.htmlTag.setAttribute(name, value);
    };

    this.search = function(selector) {
        this.elemSeach = document.querySelector(selector);
        console.log(this.elemSeach);
    };

    this.addClass = function(tag, addclass) {
        this.tag = document.querySelector(tag);
        this.tag.classList.add(addclass);
    };

    this.removeClass = function(tag, removeclass) {
        this.tag = document.querySelector(tag);
        this.tag.classList.remove(removeclass);
    };

    this.toggleClass = function(tag, toggleclass) {
        this.tag = document.querySelector(tag);
        this.tag.classList.toggle(toggleclass);
    };

    this.hasClass = function(tag, hasclass) {
        this.tag = document.querySelector(tag);
        this.contains = this.tag.classList.contains(hasclass);
        console.log(this.contains);
    };

    this.append = function(element, newElement) {
        this.elem = document.querySelector(element);
        this.newElem = document.createElement(newElement);
        if (arguments[2]) {
            this.beforeElement = document.querySelector(arguments[2]);
            this.elem.insertBefore(this.newElem, this.beforeElement);
        } else {
            this.elem.appendChild(this.newElem);
        }
    };

    this.on = function(element, eventName, funcName) {
        this.element = document.querySelector(element);
        this.element.addEventListener(eventName, funcName);
    };
};

let ConstructorFunc = function() {
    Constructor.apply(this, arguments);
};

let constructor = new Constructor();

function Func(event) {
    let target = event.target;
    target.style.borderRadius = '30%';
}

constructor.create('body', 'span');
constructor.attr('div', 'class', 'block');
constructor.html('lang', 'en');
constructor.search('body');
constructor.addClass('body', 'name');
constructor.removeClass('body', 'name');
constructor.toggleClass('body', 'name');
constructor.hasClass('body', 'name');
constructor.append('body', 'p', 'div');
constructor.on('div', 'click', Func);



