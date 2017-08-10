webpackJsonp([1,4],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.getObj = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    LocalStorageService.prototype.setObj = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/local-storage.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 343;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(454);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunicacaoAudio; });
var ComunicacaoAudio = (function () {
    function ComunicacaoAudio() {
    }
    /**
     *
     * @param texto: strng => Texto a ser narrado pela voz nativa do Chrome;
     * @param linguagem: string => Linguagem optatíva(pt-br padrão), na qual a narração será baseada;
     */
    ComunicacaoAudio.prototype.narrar = function (texto, linguagem) {
        if (linguagem === void 0) { linguagem = "pt-BR"; }
        _narrarTexto(texto, linguagem);
    };
    /**
     * @returns:Boolean => Verifica se possue alguma narração sendo execultada(em tempo real);
     */
    ComunicacaoAudio.prototype.narrando = function () {
        return _narrandoTexto();
    };
    ComunicacaoAudio.prototype.linguagens = function () {
        return _voices();
    };
    return ComunicacaoAudio;
}());
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/ComunicacaoAudio.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(614),
            styles: [__webpack_require__(611)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__janela_narrador_janela_narrador_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__botao_dropdown_botao_dropdown_component__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__janela_narrador_janela_narrador_component__["a" /* JanelaNarradorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__botao_dropdown_botao_dropdown_component__["a" /* BotaoDropdownComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotaoDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BotaoDropdownComponent = (function () {
    function BotaoDropdownComponent() {
        this.classeBotao = null;
        this.classeOpcoes = null;
        this.habilitarBotaoRemover = false;
        this.itemClicado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */];
        this.removerClicado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */];
        this.classeFechar = { 'botaoSair': true };
    }
    BotaoDropdownComponent.prototype.ngOnInit = function () {
    };
    BotaoDropdownComponent.prototype.clickItem = function (item) {
        this.itemClicado.emit(item);
    };
    BotaoDropdownComponent.prototype.clickRemover = function (item) {
        this.removerClicado.emit(item);
    };
    BotaoDropdownComponent.prototype.classes = function () {
        if (this.classeBotao != null) {
            return this.classeBotao;
        }
        else {
            return { 'btn-primary': true };
        }
        ;
    };
    BotaoDropdownComponent.prototype.teste = function (texto) {
        console.log(texto);
    };
    BotaoDropdownComponent.prototype.listaVazia = function () {
        if (this.lista.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], BotaoDropdownComponent.prototype, "lista", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], BotaoDropdownComponent.prototype, "nome", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BotaoDropdownComponent.prototype, "classeBotao", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BotaoDropdownComponent.prototype, "classeOpcoes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], BotaoDropdownComponent.prototype, "habilitarBotaoRemover", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], BotaoDropdownComponent.prototype, "itemClicado", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], BotaoDropdownComponent.prototype, "removerClicado", void 0);
    BotaoDropdownComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-botao-dropdown',
            template: __webpack_require__(615),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], BotaoDropdownComponent);
    return BotaoDropdownComponent;
}());
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/botao-dropdown.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__local_storage_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComunicacaoAudio__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JanelaNarradorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JanelaNarradorComponent = (function () {
    //***Construtor***
    function JanelaNarradorComponent(save) {
        this.save = save;
        //***Atributos***
        this.KEY = 'favoritos';
        this.habilitarBotao = true;
        this.linguagemNarracao = "pt-BR";
        this.listaNomesLinguagem = ["pt-BR", "en-US"];
        this.nomeBotaoaLinguagem = "Linguagem";
        this.nomeBotaoFavoritos = "Favoritos";
        this.textoInput = "";
        this.comunicacao = new __WEBPACK_IMPORTED_MODULE_2__ComunicacaoAudio__["a" /* ComunicacaoAudio */]();
        this.buscarFavoritos();
        this.inicializaListaLinguagem();
    }
    JanelaNarradorComponent.prototype.ngOnInit = function () { };
    //***Métodos***
    /**
     * @argument Objetivo: Narrar o texto escrito no imput pelo usuário e chamar uma verificaçao para evitar repetições de narração;
     * @param texto : Texto excrito pelo usuário para ser narrado;
     */
    JanelaNarradorComponent.prototype.clickBotao = function (texto) {
        //Manda narrar e verifica se já possue áudio na fila
        this.comunicacao.narrar(texto, this.linguagemNarracao);
        this.setFalse();
    };
    /**
     * @argument Objetivo: Listar todas as linguagens no botão de opção de linguagem;
     */
    JanelaNarradorComponent.prototype.inicializaListaLinguagem = function () {
        var that = this;
        var mySetTrue = setInterval(function () {
            if (that.comunicacao.linguagens().length != 0) {
                that.listaNomesLinguagem = that.comunicacao.linguagens();
                ;
                console.log(that.listaNomesLinguagem);
                clearInterval(mySetTrue);
            }
            else {
                console.log("não foi");
            }
        }, 1000);
    };
    /**
     * @argument: Alterar a linguagem para narração;
     * @param linguagemEscolha : String da linguagem clicada(escolhida);
     */
    JanelaNarradorComponent.prototype.alterarLinguagem = function (linguagemEscolha) {
        this.linguagemNarracao = linguagemEscolha;
        this.nomeBotaoaLinguagem = linguagemEscolha;
    };
    /**
     * @argument: Indexar o texto escolhido nos favoritos, para o input;
     * @param: String clicada pelo usuario;
     */
    JanelaNarradorComponent.prototype.alocandoFavorito = function (texto) {
        this.textoInput = texto;
    };
    /**
     * @argument: Adicionar texto no campo no input;
     */
    JanelaNarradorComponent.prototype.addFavorito = function () {
        this.listaFavoritos.push(this.textoInput);
        this.salvarFavoritos();
        console.log(this.textoInput);
    };
    /**
     *
     * @argument: Remove um item da lista de favoritos de acordo com parâmetro recebido
     * @param: String do item clicado para ser removido
     */
    JanelaNarradorComponent.prototype.removerFavorito = function (item) {
        var aux = false;
        console.log("Removido -> " + item);
        this.listaFavoritos = this.listaFavoritos.filter(function (atual) {
            if (item == atual && aux == false) {
                aux = true;
                return item !== atual;
            }
            else {
                return atual;
            }
        });
        this.salvarFavoritos();
    };
    /**
     *@argument: Habilita o botão de narração e verifica se o mesmo continua válido;
     */
    JanelaNarradorComponent.prototype.setTrue = function () {
        var that = this;
        this.habilitarBotao = true;
        console.log("setTrue");
        //limpando interval's perdidos
        clearInterval(this.mySetTrue);
        clearInterval(this.mySetFalse);
        clearInterval(that.mySetTrue);
        clearInterval(that.mySetFalse);
        that.mySetTrue = setInterval(function () {
            if (that.comunicacao.narrando()) {
                clearInterval(that.mySetTrue);
                that.setFalse();
            }
        }, 1000);
    };
    /**
     *@argument: Desabilita o botão de narração e verifica se o mesmo continua inválido;
    */
    JanelaNarradorComponent.prototype.setFalse = function () {
        var that = this;
        this.habilitarBotao = false;
        console.log("setFalse");
        that.mySetFalse = setInterval(function () {
            if (!that.comunicacao.narrando()) {
                clearInterval(that.mySetFalse);
                that.setTrue();
            }
        }, 1000);
    };
    /**
     * @argument: Buscar lista de favoritos do localStorage e armazena em array;
     */
    JanelaNarradorComponent.prototype.buscarFavoritos = function () {
        this.listaFavoritos = this.save.getObj(this.KEY);
        if (this.listaFavoritos == null) {
            this.listaFavoritos = ["Bom dia", "Boa tarde", "Boa noite"];
            console.log("lista vazia...");
        }
        console.log(this.listaFavoritos);
    };
    /**
     * @argument: Salva lista de favoritos no localStorage;
     */
    JanelaNarradorComponent.prototype.salvarFavoritos = function () {
        this.save.setObj(this.KEY, this.listaFavoritos);
    };
    JanelaNarradorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Component */])({
            selector: 'app-janela-narrador',
            template: __webpack_require__(616),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__local_storage_service__["a" /* LocalStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__local_storage_service__["a" /* LocalStorageService */]) === 'function' && _a) || Object])
    ], JanelaNarradorComponent);
    return JanelaNarradorComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/janela-narrador.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Fernando/Desktop/vozSintetica/src/environment.js.map

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ".botaoFechar{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-bottom:0;\r\n}\r\n\r\n\r\n.glyphicon-remove{\r\n    width: 20px;\r\n    height: 100%;\r\n\r\n\r\n    color:darkgrey;\r\n    \r\n}"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = ".janela{\r\n    width: 80%;\r\n    max-width: 600px;\r\n    height: 20em;\r\n    margin: auto;\r\n    margin-top: 1em;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\nh2{\r\n    text-align: center;\r\n    margin-top: 4%;\r\n    margin-bottom: 8%;\r\n}\r\n\r\ninput{\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.input-group{\r\n width: 100%;   \r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<app-janela-narrador></app-janela-narrador>\n\n"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<!-- Single button -->\n<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn dropdown-toggle\" [ngClass]=\"classes()\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" [disabled]=\"listaVazia()\">\n    {{nome}} <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li *ngFor=\"let item of lista\">\n      <a href=\"#\" [ngClass]=\"classeOpcoes\" (click)=\"clickItem(item)\"><a *ngIf=\"habilitarBotaoRemover\" class=\"glyphicon glyphicon-remove\" (click)=\"clickRemover(item)\"></a>{{item}}</a>\n    </li>\n  </ul>\n</div>\n    \n    \n\n"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info janela\">\n  \n  <h2>Narrar texto</h2>\n  \n  <form>\n    \n    <label>Informe o texto</label>\n    <div class=\"input-group\">\n      <span class=\"input-group-btn\">\n        <button [disabled]=\"!habilitarBotao\" class=\"btn btn-primary\" type=\"submit\" (click)=\"clickBotao(texto.value)\" >\n          Go!\n        </button>\n      </span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"O que deseja narrar ?\" #texto [(ngModel)]= \"textoInput\" name=\"textoInput\"  required autofocus>\n      \n    </div>\n    <app-botao-dropdown [classeBotao]=\"{'btn-info':true}\" [nome]=\"nomeBotaoaLinguagem\" [lista]=\"listaNomesLinguagem\" (itemClicado)=\"alterarLinguagem($event)\"></app-botao-dropdown>\n    <app-botao-dropdown [nome]=\"nomeBotaoFavoritos\" [lista]=\"listaFavoritos\" (itemClicado)=\"alocandoFavorito($event)\" (removerClicado)=\"removerFavorito($event)\" [habilitarBotaoRemover]=\"true\"></app-botao-dropdown>\n    <button type=\"menu\" class=\"btn btn-primary\" (click)=\"addFavorito()\" >Favoritar texto</button>\n  \n  </form>\n  \n</div>\n\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ })

},[629]);
//# sourceMappingURL=main.bundle.map