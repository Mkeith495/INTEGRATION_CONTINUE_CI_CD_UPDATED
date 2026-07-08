"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var cancelOrder_e2eDriver_1 = require("./cancelOrder.e2eDriver");
(0, globals_1.describe)('Annuler une commande — E2E', function () {
    var cancelPendingDriver;
    var cancelShippedDriver;
    var cancelNonExistingDriver;
    (0, globals_1.afterEach)(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (cancelPendingDriver === null || cancelPendingDriver === void 0 ? void 0 : cancelPendingDriver.cleanup())];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (cancelShippedDriver === null || cancelShippedDriver === void 0 ? void 0 : cancelShippedDriver.cleanup())];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (cancelNonExistingDriver === null || cancelNonExistingDriver === void 0 ? void 0 : cancelNonExistingDriver.cleanup())];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.test)("Scénario 1 : annulation réussie d'une commande PENDING", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cancelPendingDriver = new cancelOrder_e2eDriver_1.CancelPendingOrderE2eDriver();
                    // Étant donné que le système est opérationnel
                    return [4 /*yield*/, cancelPendingDriver.givenSystemIsOperational()];
                case 1:
                    // Étant donné que le système est opérationnel
                    _a.sent();
                    // Et qu'une commande existe avec le statut PENDING
                    return [4 /*yield*/, cancelPendingDriver.givenAnOrderExistsWithStatus('PENDING')];
                case 2:
                    // Et qu'une commande existe avec le statut PENDING
                    _a.sent();
                    // Quand j'annule la commande
                    return [4 /*yield*/, cancelPendingDriver.whenICancelTheOrder()];
                case 3:
                    // Quand j'annule la commande
                    _a.sent();
                    // Alors la commande est annulée (HTTP 200 + statut CANCELLED en base)
                    return [4 /*yield*/, cancelPendingDriver.thenOrderIsCancelled()];
                case 4:
                    // Alors la commande est annulée (HTTP 200 + statut CANCELLED en base)
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.test)('Scénario 2 : annulation refusée pour une commande SHIPPED', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cancelShippedDriver = new cancelOrder_e2eDriver_1.CancelShippedOrderRejectedE2eDriver();
                    // Étant donné que le système est opérationnel
                    return [4 /*yield*/, cancelShippedDriver.givenSystemIsOperational()];
                case 1:
                    // Étant donné que le système est opérationnel
                    _a.sent();
                    // Et qu'une commande existe avec le statut SHIPPED
                    return [4 /*yield*/, cancelShippedDriver.givenAnOrderExistsWithStatus('SHIPPED')];
                case 2:
                    // Et qu'une commande existe avec le statut SHIPPED
                    _a.sent();
                    // Quand j'annule la commande
                    return [4 /*yield*/, cancelShippedDriver.whenICancelTheOrder()];
                case 3:
                    // Quand j'annule la commande
                    _a.sent();
                    // Alors l'annulation est refusée (HTTP 400)
                    return [4 /*yield*/, cancelShippedDriver.thenOrderCannotBeCancelled()];
                case 4:
                    // Alors l'annulation est refusée (HTTP 400)
                    _a.sent();
                    // Et le statut en base n'a pas changé
                    return [4 /*yield*/, cancelShippedDriver.thenOrderStatusIsUnchanged('SHIPPED')];
                case 5:
                    // Et le statut en base n'a pas changé
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.test)("Scénario 3 : annulation d'une commande inexistante", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cancelNonExistingDriver = new cancelOrder_e2eDriver_1.CancelNonExistingOrderE2eDriver();
                    // Étant donné que le système est opérationnel
                    return [4 /*yield*/, cancelNonExistingDriver.givenSystemIsOperational()];
                case 1:
                    // Étant donné que le système est opérationnel
                    _a.sent();
                    // Quand j'annule une commande dont l'id n'existe pas
                    return [4 /*yield*/, cancelNonExistingDriver.whenICancelTheOrderWithId(9999)];
                case 2:
                    // Quand j'annule une commande dont l'id n'existe pas
                    _a.sent();
                    // Alors j'obtiens une 404 "commande introuvable"
                    return [4 /*yield*/, cancelNonExistingDriver.thenOrderIsNotFound()];
                case 3:
                    // Alors j'obtiens une 404 "commande introuvable"
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
