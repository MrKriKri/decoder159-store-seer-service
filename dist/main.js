/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(5);
const command_subscription_module_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(13);
const config_1 = __webpack_require__(14);
const seer_store_module_1 = __webpack_require__(16);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [seer_store_module_1.SeerStoreModule, command_subscription_module_1.CommandSubscriptionModule,
            mongoose_1.MongooseModule.forRoot(config_1.config.db.snapshot.full_url),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(5);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandSubscriptionModule = void 0;
const common_1 = __webpack_require__(3);
const command_subscription_service_1 = __webpack_require__(7);
const src_1 = __webpack_require__(8);
const cqrs_1 = __webpack_require__(12);
let CommandSubscriptionModule = class CommandSubscriptionModule {
};
CommandSubscriptionModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [src_1.EventstoreModule, cqrs_1.CqrsModule],
        providers: [command_subscription_service_1.CommandSubscriptionService],
        exports: [command_subscription_service_1.CommandSubscriptionService]
    })
], CommandSubscriptionModule);
exports.CommandSubscriptionModule = CommandSubscriptionModule;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandSubscriptionService = void 0;
const eventstore_1 = __webpack_require__(8);
const common_1 = __webpack_require__(3);
const cqrs_1 = __webpack_require__(12);
let CommandSubscriptionService = class CommandSubscriptionService {
    constructor(eventstore, eventBus) {
        this.eventstore = eventstore;
        this.eventBus = eventBus;
    }
    isTimeout(event, ms) {
        const source = event.created + ms * 10000;
        const current = Date.now() * 1000 * 10;
        return source < current;
    }
    start(streamName, subscribeServiceHandler, context, workerName, type) {
        const subscription = this.eventstore.client.connectToPersistentSubscription(`${streamName}`, workerName, {
            bufferSize: 1,
        });
        subscription.on('error', async (error) => {
            console.error(error.message);
            if (error.message ===
                `5 NOT_FOUND: Subscription group ${workerName} on stream ${streamName} does not exist.`) {
                await this.eventstore.client.createPersistentSubscription(`${streamName}`, workerName, {
                    resolveLinkTos: true,
                    readBatchSize: 1,
                    minCheckpointCount: 1,
                    checkpointAfter: 1000,
                    extraStats: false,
                    fromRevision: BigInt(0),
                    historyBufferSize: 500,
                    liveBufferSize: 500,
                    maxCheckpointCount: 500,
                    maxRetryCount: 10,
                    maxSubscriberCount: 10,
                    messageTimeout: 5000,
                    strategy: 'round_robin',
                });
                this.start(streamName, subscribeServiceHandler, context, workerName, type);
            }
            else {
                process.exit(1);
            }
        });
        subscription.on('close', () => {
            this.start(streamName, subscribeServiceHandler, context, workerName, type);
        });
        subscription.on('data', (resolvedEvent) => {
            return this.reduce(resolvedEvent, subscribeServiceHandler, context, subscription, type);
        });
    }
    async reduce(resolvedEvent, subscribeServiceHandler, context, subscription, type) {
        const { event, link } = resolvedEvent;
        if (!event) {
            console.log(`No event`);
            return;
        }
        if (!event.isJson) {
            console.log(`Not JSON Event`);
            return;
        }
        if (this.isTimeout(event, 5000)) {
            console.log(`Command Timeout`);
            if (type == `command`) {
                return subscription.nack('skip', 'Command Timeout', event.id);
            }
            return subscription.nack('skip', 'Command Timeout', link.id);
        }
        const handler = subscribeServiceHandler.get(event.type);
        if (!handler) {
            console.log(`No handler found for ${JSON.stringify(Object.assign(Object.assign({}, event), { revision: Number(event.revision) }), null, 2)}`);
            if (type == `command`) {
                return subscription.nack('skip', 'No handler', event.id);
            }
            return subscription.nack('skip', 'No handler', link.id);
        }
        try {
            await handler.call(context, event);
            if (type == `command`) {
                return subscription.ack(event.id);
            }
            return subscription.ack(link.id);
        }
        catch (error) {
            console.log(`Command Subscription Error: ${error.message} ${JSON.stringify(Object.assign(Object.assign({}, event), { revision: Number(event.revision) }), null, 2)}`);
            if (type == `command`) {
                return subscription.nack('skip', error.message, event.id);
            }
            return subscription.nack('skip', error.message, event.id);
        }
    }
};
CommandSubscriptionService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT }),
    __metadata("design:paramtypes", [typeof (_a = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _b : Object])
], CommandSubscriptionService);
exports.CommandSubscriptionService = CommandSubscriptionService;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventstoreModule = void 0;
const common_1 = __webpack_require__(3);
const eventstore_service_1 = __webpack_require__(10);
let EventstoreModule = class EventstoreModule {
};
EventstoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [eventstore_service_1.EventstoreService],
        exports: [eventstore_service_1.EventstoreService],
    })
], EventstoreModule);
exports.EventstoreModule = EventstoreModule;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventstoreService = void 0;
const common_1 = __webpack_require__(3);
const db_client_1 = __webpack_require__(11);
let EventstoreService = class EventstoreService {
    connect(connectionSetting, channelCredential, defaultUserCredentail) {
        this.eventstoreClient = new db_client_1.EventStoreDBClient(connectionSetting, channelCredential, defaultUserCredentail);
        return this;
    }
    get client() {
        return this.eventstoreClient;
    }
    readStream(id, option) {
        return new Promise((resolve, reject) => {
            const dataArray = [];
            this.eventstoreClient
                .readStream(id, option)
                .on('data', (resolvedEvent) => {
                dataArray.push(resolvedEvent);
            })
                .on('end', () => {
                resolve(dataArray);
            })
                .on('error', (error) => {
                reject(error);
            });
        });
    }
    async publishError(error) {
        await this.client.appendToStream('error', (0, db_client_1.jsonEvent)({
            type: error.type,
            metadata: error.metadata,
            data: error.data,
        }));
    }
    async publishException(exception) {
        await this.client.appendToStream('exception', (0, db_client_1.jsonEvent)({
            type: exception.type,
            metadata: exception.metadata,
            data: exception.data,
        }));
    }
};
EventstoreService = __decorate([
    (0, common_1.Injectable)()
], EventstoreService);
exports.EventstoreService = EventstoreService;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@eventstore/db-client");;

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");;

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");;

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const dotenv = __webpack_require__(15);
dotenv.config();
const env = (process.env.NODE_ENV) ? process.env.NODE_ENV : `development`;
const configs = {
    development: {
        db: {
            gateway: {
                full_url: process.env.DB_GATEWAY_DEVELOP,
                url: process.env.DB_GATEWAY_URL_DEVELOP,
                host: process.env.DB_GATEWAY_HOST_DEVELOP,
                srv: process.env.DB_GATEWAY_SRV_DEVELOP,
                port: process.env.DB_GATEWAY_PORT_DEVELOP,
                name: process.env.DB_GATEWAY_NAME_DEVELOP,
                username: process.env.DB_GATEWAY_USERNAME_DEVELOP,
                password: process.env.DB_GATEWAY_PASSWORD_DEVELOP,
                authentication: process.env.DB_GATEWAY_AUTHENTICATION_DEVELOP,
                ssl: process.env.DB_GATEWAY_SSL_DEVELOP
            },
            view: {
                full_url: process.env.DB_VIEW_DEVELOP,
                url: process.env.DB_VIEW_URL_DEVELOP,
                host: process.env.DB_VIEW_HOST_DEVELOP,
                srv: process.env.DB_VIEW_SRV_DEVELOP,
                port: process.env.DB_VIEW_PORT_DEVELOP,
                name: process.env.DB_VIEW_NAME_DEVELOP,
                username: process.env.DB_VIEW_USERNAME_DEVELOP,
                password: process.env.DB_VIEW_PASSWORD_DEVELOP,
                authentication: process.env.DB_VIEW_AUTHENTICATION_DEVELOP,
                ssl: process.env.DB_VIEW_SSL_DEVELOP
            },
            snapshot: {
                full_url: process.env.DB_SNAPSHOT_DEVELOP,
                url: process.env.DB_SNAPSHOT_URL_DEVELOP,
                host: process.env.DB_SNAPSHOT_HOST_DEVELOP,
                srv: process.env.DB_SNAPSHOT_SRV_DEVELOP,
                port: process.env.DB_SNAPSHOT_PORT_DEVELOP,
                name: process.env.DB_SNAPSHOT_NAME_DEVELOP,
                username: process.env.DB_SNAPSHOT_USERNAME_DEVELOP,
                password: process.env.DB_SNAPSHOT_PASSWORD_DEVELOP,
                authentication: process.env.DB_SNAPSHOT_AUTHENTICATION_DEVELOP,
                ssl: process.env.DB_SNAPSHOT_SSL_DEVELOP
            },
        },
        es: {
            endpoint: process.env.EVENT_STORE_ENDPOINT_DEVELOP,
            username: process.env.EVENT_STORE_USERNAME_DEVELOP,
            password: process.env.EVENT_STORE_PASSWORD_DEVELOP
        },
        gb: {
            url: process.env.GB_URL_DEVELOP,
            secret_key: process.env.GB_SECRET_KEY_DEVELOP,
            customer_key: process.env.GB_CUSTOMER_KEY_DEVELOP,
            public_key: process.env.GB_PUBLIC_KEY_DEVELOP
        },
        gateway_env: {
            url: process.env.GATEWAY_URL_DEVELOP,
            host: process.env.GATEWAY_HOST_DEVELOP,
            port: process.env.GATEWAY_PORT_DEVELOP
        },
        account: {
            gateway: {
                merchant: {
                    username: process.env.GATEWAY_MERCHANT_USERNAME_DEVELOP,
                    password: process.env.GATEWAY_MERCHANT_PASSWORD_DEVELOP,
                },
                notification: {
                    username: process.env.GATEWAY_NOTIFICATION_USERNAME_DEVELOP,
                    password: process.env.GATEWAY_NOTIFICATION_PASSWORD_DEVELOP,
                },
                partner: {
                    username: process.env.GATEWAY_PARTNER_USERNAME_DEVELOP,
                    password: process.env.GATEWAY_PARTNER_PASSWORD_DEVELOP,
                }
            },
            view: {
                merchant: {
                    username: process.env.VIEW_MERCHANT_USERNAME_DEVELOP,
                    password: process.env.VIEW_MERCHANT_PASSWORD_DEVELOP,
                },
                notification: {
                    username: process.env.VIEW_NOTIFICATION_USERNAME_DEVELOP,
                    password: process.env.VIEW_NOTIFICATION_PASSWORD_DEVELOP,
                },
                partner: {
                    username: process.env.VIEW_PARTNER_USERNAME_DEVELOP,
                    password: process.env.VIEW_PARTNER_PASSWORD_DEVELOP,
                }
            }
        },
        view_env: {
            url: process.env.VIEW_URL_DEVELOP,
            host: process.env.VIEW_HOST_DEVELOP,
            port: process.env.VIEW_PORT_DEVELOP
        },
        notification: {
            smpt: {
                host: process.env.SMTP_HOST_DEVELOP,
                username: process.env.SMTP_USERNAME_DEVELOP,
                password: process.env.SMTP_PASSWORD_DEVELOP
            }
        },
        storage: {
            do: {
                access_key: process.env.DO_SPACE_ACCESS_KEY_DEVELOP,
                secret_key: process.env.DO_SPACE_SECRET_KEY_DEVELOP,
                endpoint: process.env.DO_SPACE_ENDPOINT_DEVELOP,
                bucket: process.env.DO_SPACE_BUCKET_DEVELOP,
                directory: process.env.DO_SPACE_DIRECTORY_DEVELOP
            }
        },
        jwt: {
            secret: process.env.JWT_SECRET_DEVELOP
        }
    },
    production: {
        db: {
            gateway: {
                full_url: process.env.DB_GATEWAY,
                url: process.env.DB_GATEWAY_URL,
                host: process.env.DB_GATEWAY_HOST,
                srv: process.env.DB_GATEWAY_SRV,
                port: process.env.DB_GATEWAY_PORT,
                name: process.env.DB_GATEWAY_NAME,
                username: process.env.DB_GATEWAY_USERNAME,
                password: process.env.DB_GATEWAY_PASSWORD,
                ssl: process.env.DB_GATEWAY_SSL
            },
            view: {
                full_url: process.env.DB_VIEW,
                url: process.env.DB_VIEW_URL,
                host: process.env.DB_VIEW_HOST,
                srv: process.env.DB_VIEW_SRV,
                port: process.env.DB_VIEW_PORT,
                name: process.env.DB_VIEW_NAME,
                username: process.env.DB_VIEW_USERNAME,
                password: process.env.DB_VIEW_PASSWORD,
                ssl: process.env.DB_VIEW_SSL
            },
            snapshot: {
                full_url: process.env.DB_SNAPSHOT,
                url: process.env.DB_SNAPSHOT_URL,
                host: process.env.DB_SNAPSHOT_HOST,
                srv: process.env.DB_SNAPSHOT_SRV,
                port: process.env.DB_SNAPSHOT_PORT,
                name: process.env.DB_SNAPSHOT_NAME,
                username: process.env.DB_SNAPSHOT_USERNAME,
                password: process.env.DB_SNAPSHOT_PASSWORD,
                ssl: process.env.DB_SNAPSHOT_SSL
            },
        },
        es: {
            endpoint: process.env.EVENT_STORE_ENDPOINT,
            username: process.env.EVENT_STORE_USERNAME,
            password: process.env.EVENT_STORE_PASSWORD
        },
        gb: {
            url: process.env.GB_URL,
            secret_key: process.env.GB_SECRET_KEY,
            customer_key: process.env.GB_CUSTOMER_KEY,
            public_key: process.env.GB_PUBLIC_KEY
        },
        gateway_env: {
            url: process.env.GATEWAY_URL,
            host: process.env.GATEWAY_HOST,
            port: process.env.GATEWAY_PORT
        },
        account: {
            gateway: {
                merchant: {
                    username: process.env.GATEWAY_MERCHANT_USERNAME,
                    password: process.env.GATEWAY_MERCHANT_PASSWORD,
                },
                notification: {
                    username: process.env.GATEWAY_NOTIFICATION_USERNAME,
                    password: process.env.GATEWAY_NOTIFICATION_PASSWORD,
                },
                partner: {
                    username: process.env.GATEWAY_PARTNER_USERNAME,
                    password: process.env.GATEWAY_PARTNER_PASSWORD,
                }
            },
            view: {
                merchant: {
                    username: process.env.VIEW_MERCHANT_USERNAME,
                    password: process.env.VIEW_MERCHANT_PASSWORD,
                },
                notification: {
                    username: process.env.VIEW_NOTIFICATION_USERNAME,
                    password: process.env.VIEW_NOTIFICATION_PASSWORD,
                },
                partner: {
                    username: process.env.VIEW_PARTNER_USERNAME,
                    password: process.env.VIEW_PARTNER_PASSWORD,
                }
            }
        },
        view_env: {
            url: process.env.VIEW_URL,
            host: process.env.VIEW_HOST,
            port: process.env.VIEW_PORT
        },
        notification: {
            smpt: {
                host: process.env.SMTP_HOST,
                username: process.env.SMTP_USERNAME,
                password: process.env.SMTP_PASSWORD
            }
        },
        storage: {
            do: {
                access_key: process.env.DO_SPACE_ACCESS_KEY,
                secret_key: process.env.DO_SPACE_SECRET_KEY,
                endpoint: process.env.DO_SPACE_ENDPOINT,
                bucket: process.env.DO_SPACE_BUCKET,
                directory: process.env.DO_SPACE_DIRECTORY
            }
        },
        jwt: {
            secret: process.env.JWT_SECRET
        }
    }
};
const config = Object.assign({}, configs[env]);
exports.config = config;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreModule = void 0;
const common_1 = __webpack_require__(3);
const command_1 = __webpack_require__(17);
const store_seer_repository_1 = __webpack_require__(19);
const eventstore_1 = __webpack_require__(8);
const command_subscription_service_1 = __webpack_require__(7);
const promises_1 = __webpack_require__(66);
const update_review_point_command_1 = __webpack_require__(53);
const cqrs_1 = __webpack_require__(12);
const db_client_1 = __webpack_require__(11);
const config_1 = __webpack_require__(14);
const remove_seer_store_payment_method_command_1 = __webpack_require__(51);
const add_seer_store_payment_method_command_1 = __webpack_require__(49);
const create_seer_store_command_1 = __webpack_require__(59);
const force_update_seer_store_payment_method_command_1 = __webpack_require__(47);
const resubmit_seer_store_payment_method_command_1 = __webpack_require__(65);
const update_seer_store_active_command_1 = __webpack_require__(63);
const update_seer_store_recommend_command_1 = __webpack_require__(55);
const update_seer_store_command_1 = __webpack_require__(57);
const approve_seer_store_payment_method_command_1 = __webpack_require__(39);
const reject_seer_store_payment_method_command_1 = __webpack_require__(43);
const update_seer_store_payment_method_command_1 = __webpack_require__(45);
let SeerStoreModule = class SeerStoreModule {
    constructor(commandSubscribe, eventstore, commandBus) {
        this.commandSubscribe = commandSubscribe;
        this.eventstore = eventstore;
        this.commandBus = commandBus;
        this.commandHandler = new Map();
        this.eventHandler = new Map();
    }
    async onModuleInit() {
        const cert = await (0, promises_1.readFile)(process.cwd() + '/src/ca.crt');
        this.eventstore.connect({ endpoint: config_1.config.es.endpoint }, { insecure: false, rootCertificate: cert }, { username: config_1.config.es.username, password: config_1.config.es.password });
        this.regisHandler();
    }
    regisHandler() {
        this.eventHandler.set('seerStore.created', this.onSeerStoreCreatedEvent);
        this.commandHandler.set('seerStore.create', this.onCreateSeerStoreCommand);
        this.commandHandler.set('seerStore.update', this.onUpdateSeerStoreCommand);
        this.commandHandler.set('seerStore.forceUpdateSeerStorePaymentMethod', this.onForceUpdateSeerStorePaymentMethodCommand);
        this.commandHandler.set('seerStore.updateRecommend', this.onUpdateSeerStoreRecommendCommand);
        this.commandHandler.set('seerStore.approvePaymentMethod', this.onApproveSeerStorePaymentMethodCommand);
        this.commandHandler.set('seerStore.rejectPaymentMethod', this.onRejectSeerStorePaymentMethodCommand);
        this.commandHandler.set('seerStore.updatePaymentMethod', this.onUpdateSeerStorePaymentMethodCommand);
        this.commandHandler.set('seerStore.resubmitPaymentMethod', this.onResubmitSeerStorePaymentMethodCommand);
        this.commandHandler.set('seerStore.updateReviewPoint', this.onUpdateReviewPointCommand);
        this.commandHandler.set('seerStore.addPaymentMethod', this.onAddSeerStorePaymentMethodCommand);
        this.commandHandler.set('seerStore.removePaymentMethod', this.onRemoveSeerStorePaymentMethodCommand);
        this.commandHandler.set('seerStore.updateActive', this.onUpdateSeerStoreActiveCommand);
        this.commandSubscribe.start(`command`, this.commandHandler, this, `service-worker-store-command`, 'command');
    }
    async onSeerStoreCreatedEvent(event) {
        const { id } = event.data;
        const { $correlationId } = event.metadata;
        await this.publishCommand(`inventory.create`, {
            data: { store_id: id, correlationId: $correlationId },
            metadata: { $correlationId: $correlationId, timestamp: Date.now() },
        });
    }
    async onCreateSeerStoreCommand(command) {
        await this.commandBus.execute(new create_seer_store_command_1.CreateSeerStoreCommand(Object.assign({}, command.data)));
    }
    async onAddSeerStorePaymentMethodCommand(command) {
        await this.commandBus.execute(new add_seer_store_payment_method_command_1.AddSeerStorePaymentMethodCommand(Object.assign({}, command.data)));
    }
    async onRemoveSeerStorePaymentMethodCommand(command) {
        await this.commandBus.execute(new remove_seer_store_payment_method_command_1.RemoveSeerStorePaymentMethodCommand(Object.assign({}, command.data)));
    }
    async onUpdateSeerStoreCommand(command) {
        await this.commandBus.execute(new update_seer_store_command_1.UpdateSeerStoreCommand(Object.assign({}, command.data)));
    }
    async onUpdateSeerStoreRecommendCommand(command) {
        await this.commandBus.execute(new update_seer_store_recommend_command_1.UpdateSeerStoreRecommendCommand(Object.assign({}, command.data)));
    }
    async onApproveSeerStorePaymentMethodCommand(command) {
        await this.commandBus.execute(new approve_seer_store_payment_method_command_1.ApproveSeerStorePaymentMethodCommand(Object.assign({}, command.data)));
    }
    async onRejectSeerStorePaymentMethodCommand(command) {
        await this.commandBus.execute(new reject_seer_store_payment_method_command_1.RejectSeerStorePaymentMethodCommand(Object.assign({}, command.data)));
    }
    async onUpdateSeerStorePaymentMethodCommand(command) {
        await this.commandBus.execute(new update_seer_store_payment_method_command_1.UpdateSeerStorePaymentMethodCommand(Object.assign({}, command.data)));
    }
    async onUpdateReviewPointCommand(command) {
        await this.commandBus.execute(new update_review_point_command_1.UpdateReviewPointCommand(Object.assign({}, command.data)));
    }
    async onUpdateSeerStoreActiveCommand(command) {
        await this.commandBus.execute(new update_seer_store_active_command_1.UpdateSeerStoreActiveCommand(Object.assign({}, command.data)));
    }
    async onResubmitSeerStorePaymentMethodCommand(command) {
        await this.commandBus.execute(new resubmit_seer_store_payment_method_command_1.ResubmitSeerStorePaymentMethodCommand(Object.assign({}, command.data)));
    }
    async onForceUpdateSeerStorePaymentMethodCommand(command) {
        await this.commandBus.execute(new force_update_seer_store_payment_method_command_1.ForceUpdateSeerStorePaymentMethodCommand(Object.assign({}, command.data)));
    }
    async publishCommand(type, data) {
        await this.eventstore.client.appendToStream('command', (0, db_client_1.jsonEvent)({
            type,
            metadata: data.metadata,
            data: data.data,
        }));
    }
};
SeerStoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
        ],
        providers: [
            ...command_1.CommandHandler,
            store_seer_repository_1.SeerStoreRepository,
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof command_subscription_service_1.CommandSubscriptionService !== "undefined" && command_subscription_service_1.CommandSubscriptionService) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object, typeof (_c = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _c : Object])
], SeerStoreModule);
exports.SeerStoreModule = SeerStoreModule;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandHandler = void 0;
const approve_seer_store_payment_method_handler_1 = __webpack_require__(18);
const reject_seer_store_payment_method_handler_1 = __webpack_require__(42);
const update_seer_store_payment_method_handler_1 = __webpack_require__(44);
const force_update_seer_store_payment_method_handler_1 = __webpack_require__(46);
const add_store_payment_method_handler_1 = __webpack_require__(48);
const remove_seer_store_payment_method_handler_1 = __webpack_require__(50);
const update_review_point_handler_1 = __webpack_require__(52);
const update_seer_store_recommend_handler_1 = __webpack_require__(54);
const update_seer_store_handler_1 = __webpack_require__(56);
const create_seer_store_handler_1 = __webpack_require__(58);
const update_seer_store_active_handler_1 = __webpack_require__(62);
const resubmit_seer_store_payment_method_handler_1 = __webpack_require__(64);
exports.CommandHandler = [
    approve_seer_store_payment_method_handler_1.ApproveSeerStorePaymentMethodHandler,
    reject_seer_store_payment_method_handler_1.RejectSeerStorePaymentMethodHandler,
    update_seer_store_payment_method_handler_1.UpdateSeerStorePaymentMethodHandler,
    create_seer_store_handler_1.CreateSeerStoreHandler,
    update_seer_store_handler_1.UpdateSeerStoreHandler,
    update_seer_store_recommend_handler_1.UpdateSeerStoreRecommendHandler,
    update_review_point_handler_1.UpdateReviewPointHandler,
    remove_seer_store_payment_method_handler_1.RemoveSeerStorePaymentMethodHandler,
    add_store_payment_method_handler_1.AddSeerStorePaymentMethodHandler,
    update_seer_store_active_handler_1.UpdateSeerStoreActiveHandler,
    resubmit_seer_store_payment_method_handler_1.ResubmitSeerStorePaymentMethodHandler,
    force_update_seer_store_payment_method_handler_1.ForceUpdateSeerStorePaymentMethodHandler,
];


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApproveSeerStorePaymentMethodHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const approve_seer_store_payment_method_command_1 = __webpack_require__(39);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
const store_payment_method_not_found_exception_1 = __webpack_require__(41);
let ApproveSeerStorePaymentMethodHandler = class ApproveSeerStorePaymentMethodHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { approve_by, store_id, correlationId, payment_method_id } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            if (!storeAggregate.isPaymentMethodExists(payment_method_id)) {
                await this.eventstoreService.publishException(new store_payment_method_not_found_exception_1.SeerStorePaymentMethodNotFoundException({
                    data: {
                        id: store_id,
                        paymentMethodId: payment_method_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.approveSeerStorePaymentMethod(correlationId, approve_by, payment_method_id);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
ApproveSeerStorePaymentMethodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(approve_seer_store_payment_method_command_1.ApproveSeerStorePaymentMethodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], ApproveSeerStorePaymentMethodHandler);
exports.ApproveSeerStorePaymentMethodHandler = ApproveSeerStorePaymentMethodHandler;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreRepository = void 0;
const db_client_1 = __webpack_require__(11);
const common_1 = __webpack_require__(3);
const eventstore_1 = __webpack_require__(8);
const event_1 = __webpack_require__(20);
const uuid_1 = __webpack_require__(21);
const store_seer_aggregate_1 = __webpack_require__(22);
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(38);
let SeerStoreRepository = class SeerStoreRepository {
    constructor(eventstore, connection) {
        this.eventstore = eventstore;
        this.connection = connection;
    }
    async isSeerStoreExistForOwner(ownerId) {
        const entity = await this.connection.db
            .collection('store-seer')
            .find({ owner: ownerId })
            .toArray();
        return entity.length > 0;
    }
    async get(id) {
        const events = (await this.eventstore.readStream(id, { resolveLinkTos: true }))
            .map((x) => x.event)
            .filter((x) => !!x)
            .map((x) => (Object.assign(Object.assign({}, x), { metadata: new event_1.EventMetadata(Object.assign({}, x.metadata)) })));
        const storeSeerAggregate = new store_seer_aggregate_1.SeerStoreAggregate();
        storeSeerAggregate.stream = id;
        storeSeerAggregate.revision = events[events.length - 1].revision;
        storeSeerAggregate.loadFromHistory(events);
        return storeSeerAggregate;
    }
    async save(storeSeerAggregate, correlationId) {
        try {
            const timestamp = Date.now();
            const $correlationId = correlationId;
            const expectedRevision = storeSeerAggregate.revision === 'no_stream'
                ? 'no_stream'
                : BigInt(Number(storeSeerAggregate.revision));
            await Promise.all([
                this.eventstore.client.appendToStream(storeSeerAggregate.stream, storeSeerAggregate.getUncommittedEvents().map((x) => (0, db_client_1.jsonEvent)({
                    type: x.type,
                    data: x.data,
                    metadata: { $correlationId, timestamp },
                })), {
                    expectedRevision,
                }),
                this.eventstore.client.appendToStream(`snapshot-${storeSeerAggregate.stream}`, (0, db_client_1.jsonEvent)({
                    type: `Snapshot`,
                    data: Object.assign(Object.assign({}, storeSeerAggregate), { revision: expectedRevision === 'no_stream'
                            ? storeSeerAggregate.getUncommittedEvents().length - 1
                            : Number(expectedRevision) +
                                storeSeerAggregate.getUncommittedEvents().length }),
                    metadata: { timestamp },
                }), {
                    expectedRevision: 'any',
                }),
            ]);
            storeSeerAggregate.uncommit();
            return storeSeerAggregate;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    create() {
        const storeSeerAggregate = new store_seer_aggregate_1.SeerStoreAggregate();
        storeSeerAggregate.stream = `storeSeer-${(0, uuid_1.v4)()}`;
        storeSeerAggregate.revision = 'no_stream';
        return storeSeerAggregate;
    }
};
SeerStoreRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _b : Object])
], SeerStoreRepository);
exports.SeerStoreRepository = SeerStoreRepository;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RuntimeError = exports.RuntimeErrorData = exports.ExceptionEvent = exports.ErrorEvent = exports.BaseEvent = exports.EventMetadata = void 0;
class EventMetadata {
    constructor(payload) {
        Object.assign(payload, this);
    }
}
exports.EventMetadata = EventMetadata;
class BaseEvent {
    constructor(payload) {
        Object.assign(payload, this);
    }
}
exports.BaseEvent = BaseEvent;
class ErrorEvent {
    constructor(payload) {
        Object.assign(payload, this);
    }
}
exports.ErrorEvent = ErrorEvent;
class ExceptionEvent {
    constructor(payload) {
        Object.assign(payload, this);
    }
}
exports.ExceptionEvent = ExceptionEvent;
class RuntimeErrorData {
}
exports.RuntimeErrorData = RuntimeErrorData;
class RuntimeError {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `runtime.error` }));
    }
}
exports.RuntimeError = RuntimeError;


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("uuid");;

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreAggregate = void 0;
const seer_store_created_event_1 = __webpack_require__(23);
const seer_store_updated_event_1 = __webpack_require__(24);
const seer_store_payment_method_rejected_event_1 = __webpack_require__(25);
const seer_store_payment_method_approved_event_1 = __webpack_require__(26);
const seer_store_recommend_updated_event_1 = __webpack_require__(27);
const seer_store_payment_method_updated_event_1 = __webpack_require__(28);
const store_seer_state_1 = __webpack_require__(29);
const seer_store_review_point_updated_event_1 = __webpack_require__(30);
const payment_method_1 = __webpack_require__(31);
const seer_store_payment_method_added_event_1 = __webpack_require__(32);
const seer_store_payment_method_removed_event_1 = __webpack_require__(33);
const seer_store_active_updated_event_1 = __webpack_require__(34);
const seer_store_payment_method_resubmitted_event_1 = __webpack_require__(35);
const seer_store_payment_method_force_updated_event_1 = __webpack_require__(36);
const base_aggregate_1 = __webpack_require__(37);
const uuid_1 = __webpack_require__(21);
class SeerStoreAggregate extends base_aggregate_1.RootAggregate {
    getEventName(event) {
        return event.type;
    }
    getEventHandler(event) {
        const handler = `on${this.getEventName(event)}`;
        return this[handler];
    }
    isPaymentMethodExists(id) {
        return !!this.getPaymentMethod(id);
    }
    getPaymentMethod(id) {
        return this.state.payment_method.find((x) => x.id === id);
    }
    createSeerStore(correlationId, contract, profile, owner, payment_method, shipping_method, active, video) {
        this.apply(new seer_store_created_event_1.SeerStoreCreatedEvent({
            data: {
                id: this.stream,
                contact: contract,
                payment_method: payment_method.map((pay) => (Object.assign(Object.assign({}, pay), { id: (0, uuid_1.v4)(), status: payment_method_1.PaymentMethodStatus.APPROVE }))),
                shipping_method,
                owner,
                profile,
                active,
                video
            },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    updateSeerStoreRecommend(correlationId, recommend) {
        this.apply(new seer_store_recommend_updated_event_1.SeerStoreRecommendUpdatedEvent({
            data: { id: this.stream, recommended: recommend },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    updateSeerStore(correlationId, profile, contact, shipping_method, video) {
        this.apply(new seer_store_updated_event_1.SeerStoreUpdatedEvent({
            data: { id: this.stream, profile, contact, shipping_method, video },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    updateReviewPoint(correlationId, review_point) {
        this.apply(new seer_store_review_point_updated_event_1.SeerStoreReviewPointUpdatedEvent({
            data: { id: this.stream, review_point },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    addSeerStorePaymentMethod(correlationId, payment_method) {
        this.apply(new seer_store_payment_method_added_event_1.SeerStorePaymentMethodAddedEvent({
            data: { id: this.stream, payment_method: Object.assign(Object.assign({}, payment_method), { id: (0, uuid_1.v4)() }) },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    approveSeerStorePaymentMethod(correlationId, approve_by, payment_method_id) {
        this.apply(new seer_store_payment_method_approved_event_1.SeerStorePaymentMethodApprovedEvent({
            data: { id: this.stream, approve_by, payment_method_id },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    rejectSeerStorePaymentMethod(correlationId, reject_by, reason, payment_method_id) {
        this.apply(new seer_store_payment_method_rejected_event_1.SeerStorePaymentMethodRejectedEvent({
            data: { id: this.stream, reject_by, reason, payment_method_id },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    updateActive(active, correlationId) {
        this.apply(new seer_store_active_updated_event_1.SeerStoreActiveUpdatedEvent({
            data: {
                id: this.stream,
                active,
            },
            metadata: {
                timestamp: Date.now(),
                $correlationId: correlationId,
            },
        }));
    }
    updateSeerStorePaymentMethod(correlationId, payment_method, payment_method_id) {
        this.apply(new seer_store_payment_method_updated_event_1.SeerStorePaymentMethodUpdatedEvent({
            data: {
                id: this.stream,
                payment_method: Object.assign(Object.assign({}, payment_method), { id: payment_method_id }),
            },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    forceUpdateSeerStorePaymentMethod(correlationId, payment_method, payment_method_id) {
        this.apply(new seer_store_payment_method_force_updated_event_1.SeerStorePaymentMethodForceUpdatedEvent({
            data: {
                id: this.stream,
                payment_method: Object.assign(Object.assign({}, payment_method), { id: payment_method_id }),
            },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    removeSeerStorePaymentMethod(correlationId, payment_method_id) {
        this.apply(new seer_store_payment_method_removed_event_1.SeerStorePaymentMethodRemovedEvent({
            data: { id: this.stream, payment_method_id },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    resubmitSeerStorePaymentMethod(correlationId, payment_method, payment_method_id) {
        this.apply(new seer_store_payment_method_resubmitted_event_1.SeerStorePaymentMethodResubmittedEvent({
            data: {
                id: this.stream,
                payment_method: Object.assign(Object.assign({}, payment_method), { id: payment_method_id }),
            },
            metadata: { $correlationId: correlationId, timestamp: Date.now() },
        }));
        return this;
    }
    ['onstore.created'](event) {
        this.state = new store_seer_state_1.SeerStoreState(Object.assign(Object.assign({}, event.data), { review_point: 0, recommended: false, active: event.data.active, video: !Array.isArray(event.data.video)
                ? [event.data.video]
                : event.data.video, payment_method: !Array.isArray(event.data.payment_method)
                ? [event.data.payment_method]
                : event.data.payment_method }));
    }
    ['onstore.paymentMethodAdded'](event) {
        const { payment_method } = event.data;
        this.state.payment_method.push(Object.assign(Object.assign({}, payment_method), { status: payment_method_1.PaymentMethodStatus.PENDING }));
    }
    ['onstore.paymentMethodRemoved'](event) {
        const { payment_method_id } = event.data;
        const index = this.state.payment_method.findIndex((data) => data.id == payment_method_id);
        this.state.payment_method.splice(index, 1);
    }
    ['onstore.paymentMethodUpdated'](event) {
        const index = this.state.payment_method.findIndex((data) => data.id == event.data.payment_method.id);
        this.state.payment_method[index] = event.data.payment_method;
        this.state.payment_method[index].status =
            payment_method_1.PaymentMethodStatus.PENDING_UPDATE_APPROVAL;
    }
    ['onstore.paymentMethodForceUpdated'](event) {
        const index = this.state.payment_method.findIndex((data) => data.id == event.data.payment_method.id);
        this.state.payment_method[index] = event.data.payment_method;
    }
    ['onstore.paymentMethodResubmitted'](event) {
        const index = this.state.payment_method.findIndex((data) => data.id == event.data.payment_method.id);
        this.state.payment_method[index] = event.data.payment_method;
        this.state.payment_method[index].status = payment_method_1.PaymentMethodStatus.RESUBMIT;
    }
    ['onstore.paymentMethodApproved'](event) {
        const index = this.state.payment_method.findIndex((data) => data.id == event.data.payment_method_id);
        this.state.payment_method[index].status = payment_method_1.PaymentMethodStatus.APPROVE;
    }
    ['onstore.paymentMethodRejected'](event) {
        const index = this.state.payment_method.findIndex((data) => data.id == event.data.payment_method_id);
        this.state.payment_method[index].status = payment_method_1.PaymentMethodStatus.REJECT;
    }
    ['onstore.recommendUpdated'](event) {
        const { recommended } = event.data;
        this.state.recommended = recommended;
    }
    ['onstore.updated'](event) {
        const { profile, contact: contract, video } = event.data;
        this.state.profile = profile;
        this.state.contact = contract;
        this.state.video = video;
    }
    ['store.reviewPointUpdated'](event) {
        const { review_point } = event.data;
        this.state.review_point = review_point;
    }
}
exports.SeerStoreAggregate = SeerStoreAggregate;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreCreatedEvent = void 0;
class SeerStoreCreatedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.created` }));
    }
}
exports.SeerStoreCreatedEvent = SeerStoreCreatedEvent;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreUpdatedEvent = void 0;
class SeerStoreUpdatedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.updated` }));
    }
}
exports.SeerStoreUpdatedEvent = SeerStoreUpdatedEvent;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodRejectedEvent = void 0;
class SeerStorePaymentMethodRejectedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodRejected` }));
    }
}
exports.SeerStorePaymentMethodRejectedEvent = SeerStorePaymentMethodRejectedEvent;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodApprovedEvent = void 0;
class SeerStorePaymentMethodApprovedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodApproved` }));
    }
}
exports.SeerStorePaymentMethodApprovedEvent = SeerStorePaymentMethodApprovedEvent;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreRecommendUpdatedEvent = void 0;
class SeerStoreRecommendUpdatedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.recommendUpdated` }));
    }
}
exports.SeerStoreRecommendUpdatedEvent = SeerStoreRecommendUpdatedEvent;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodUpdatedEvent = void 0;
class SeerStorePaymentMethodUpdatedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodUpdated` }));
    }
}
exports.SeerStorePaymentMethodUpdatedEvent = SeerStorePaymentMethodUpdatedEvent;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreState = void 0;
class SeerStoreState {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.SeerStoreState = SeerStoreState;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreReviewPointUpdatedEvent = exports.SeerStoreReviewPointUpdatedEventData = void 0;
class SeerStoreReviewPointUpdatedEventData {
}
exports.SeerStoreReviewPointUpdatedEventData = SeerStoreReviewPointUpdatedEventData;
class SeerStoreReviewPointUpdatedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.reviewPointUpdated` }));
    }
}
exports.SeerStoreReviewPointUpdatedEvent = SeerStoreReviewPointUpdatedEvent;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentMethodStatus = void 0;
var PaymentMethodStatus;
(function (PaymentMethodStatus) {
    PaymentMethodStatus["PENDING"] = "pending";
    PaymentMethodStatus["APPROVE"] = "approve";
    PaymentMethodStatus["REJECT"] = "reject";
    PaymentMethodStatus["PENDING_UPDATE_APPROVAL"] = "pending_update_approval";
    PaymentMethodStatus["RESUBMIT"] = "resubmit";
})(PaymentMethodStatus = exports.PaymentMethodStatus || (exports.PaymentMethodStatus = {}));


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodAddedEvent = void 0;
class SeerStorePaymentMethodAddedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodAdded` }));
    }
}
exports.SeerStorePaymentMethodAddedEvent = SeerStorePaymentMethodAddedEvent;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodRemovedEvent = void 0;
class SeerStorePaymentMethodRemovedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodRemoved` }));
    }
}
exports.SeerStorePaymentMethodRemovedEvent = SeerStorePaymentMethodRemovedEvent;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreActiveUpdatedEvent = void 0;
class SeerStoreActiveUpdatedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.activeUpdated`, data: Object.assign({}, payload.data) }));
    }
}
exports.SeerStoreActiveUpdatedEvent = SeerStoreActiveUpdatedEvent;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodResubmittedEvent = void 0;
class SeerStorePaymentMethodResubmittedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodResubmitted` }));
    }
}
exports.SeerStorePaymentMethodResubmittedEvent = SeerStorePaymentMethodResubmittedEvent;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodForceUpdatedEvent = void 0;
class SeerStorePaymentMethodForceUpdatedEvent {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodForceUpdated` }));
    }
}
exports.SeerStorePaymentMethodForceUpdatedEvent = SeerStorePaymentMethodForceUpdatedEvent;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RootAggregate = void 0;
const cqrs_1 = __webpack_require__(12);
class RootAggregate extends cqrs_1.AggregateRoot {
    getEventName(event) {
        return event.type;
    }
}
exports.RootAggregate = RootAggregate;


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApproveSeerStorePaymentMethodCommand = void 0;
class ApproveSeerStorePaymentMethodCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.ApproveSeerStorePaymentMethodCommand = ApproveSeerStorePaymentMethodCommand;


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreNotFoundException = exports.SeerStoreNotFoundExceptionData = void 0;
class SeerStoreNotFoundExceptionData {
    constructor() {
        this.message = 'SeerStore not found';
    }
}
exports.SeerStoreNotFoundExceptionData = SeerStoreNotFoundExceptionData;
class SeerStoreNotFoundException {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.notFound` }));
    }
}
exports.SeerStoreNotFoundException = SeerStoreNotFoundException;


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStorePaymentMethodNotFoundException = exports.SeerStorePaymentMethodNotFoundExceptionData = void 0;
class SeerStorePaymentMethodNotFoundExceptionData {
    constructor() {
        this.message = 'SeerStore payment method not found';
    }
}
exports.SeerStorePaymentMethodNotFoundExceptionData = SeerStorePaymentMethodNotFoundExceptionData;
class SeerStorePaymentMethodNotFoundException {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.paymentMethodNotFound` }));
    }
}
exports.SeerStorePaymentMethodNotFoundException = SeerStorePaymentMethodNotFoundException;


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RejectSeerStorePaymentMethodHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const reject_seer_store_payment_method_command_1 = __webpack_require__(43);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
const store_payment_method_not_found_exception_1 = __webpack_require__(41);
let RejectSeerStorePaymentMethodHandler = class RejectSeerStorePaymentMethodHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { reason, reject_by, store_id, payment_method_id, correlationId } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            if (!storeAggregate.isPaymentMethodExists(payment_method_id)) {
                await this.eventstoreService.publishException(new store_payment_method_not_found_exception_1.SeerStorePaymentMethodNotFoundException({
                    data: {
                        id: store_id,
                        paymentMethodId: payment_method_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.rejectSeerStorePaymentMethod(correlationId, reject_by, reason, payment_method_id);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
RejectSeerStorePaymentMethodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(reject_seer_store_payment_method_command_1.RejectSeerStorePaymentMethodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], RejectSeerStorePaymentMethodHandler);
exports.RejectSeerStorePaymentMethodHandler = RejectSeerStorePaymentMethodHandler;


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RejectSeerStorePaymentMethodCommand = void 0;
class RejectSeerStorePaymentMethodCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.RejectSeerStorePaymentMethodCommand = RejectSeerStorePaymentMethodCommand;


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStorePaymentMethodHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const update_seer_store_payment_method_command_1 = __webpack_require__(45);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
const store_payment_method_not_found_exception_1 = __webpack_require__(41);
let UpdateSeerStorePaymentMethodHandler = class UpdateSeerStorePaymentMethodHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { payment_method, store_id, correlationId, payment_method_id } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            if (!storeAggregate.isPaymentMethodExists(payment_method_id)) {
                await this.eventstoreService.publishException(new store_payment_method_not_found_exception_1.SeerStorePaymentMethodNotFoundException({
                    data: {
                        id: store_id,
                        paymentMethodId: payment_method_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.updateSeerStorePaymentMethod(correlationId, Object.assign({}, payment_method), payment_method_id);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
UpdateSeerStorePaymentMethodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_seer_store_payment_method_command_1.UpdateSeerStorePaymentMethodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], UpdateSeerStorePaymentMethodHandler);
exports.UpdateSeerStorePaymentMethodHandler = UpdateSeerStorePaymentMethodHandler;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStorePaymentMethodCommand = void 0;
class UpdateSeerStorePaymentMethodCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.UpdateSeerStorePaymentMethodCommand = UpdateSeerStorePaymentMethodCommand;


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForceUpdateSeerStorePaymentMethodHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const force_update_seer_store_payment_method_command_1 = __webpack_require__(47);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
const store_payment_method_not_found_exception_1 = __webpack_require__(41);
let ForceUpdateSeerStorePaymentMethodHandler = class ForceUpdateSeerStorePaymentMethodHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { payment_method, store_id, correlationId, payment_method_id } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            if (!storeAggregate.isPaymentMethodExists(payment_method_id)) {
                await this.eventstoreService.publishException(new store_payment_method_not_found_exception_1.SeerStorePaymentMethodNotFoundException({
                    data: {
                        id: store_id,
                        paymentMethodId: payment_method_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.forceUpdateSeerStorePaymentMethod(correlationId, Object.assign({}, payment_method), payment_method_id);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
ForceUpdateSeerStorePaymentMethodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(force_update_seer_store_payment_method_command_1.ForceUpdateSeerStorePaymentMethodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], ForceUpdateSeerStorePaymentMethodHandler);
exports.ForceUpdateSeerStorePaymentMethodHandler = ForceUpdateSeerStorePaymentMethodHandler;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForceUpdateSeerStorePaymentMethodCommand = void 0;
class ForceUpdateSeerStorePaymentMethodCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.ForceUpdateSeerStorePaymentMethodCommand = ForceUpdateSeerStorePaymentMethodCommand;


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddSeerStorePaymentMethodHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const add_seer_store_payment_method_command_1 = __webpack_require__(49);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
let AddSeerStorePaymentMethodHandler = class AddSeerStorePaymentMethodHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { payment_method, store_id, correlationId } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.addSeerStorePaymentMethod(correlationId, payment_method);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
AddSeerStorePaymentMethodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(add_seer_store_payment_method_command_1.AddSeerStorePaymentMethodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], AddSeerStorePaymentMethodHandler);
exports.AddSeerStorePaymentMethodHandler = AddSeerStorePaymentMethodHandler;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddSeerStorePaymentMethodCommand = void 0;
class AddSeerStorePaymentMethodCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.AddSeerStorePaymentMethodCommand = AddSeerStorePaymentMethodCommand;


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveSeerStorePaymentMethodHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const remove_seer_store_payment_method_command_1 = __webpack_require__(51);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
const store_payment_method_not_found_exception_1 = __webpack_require__(41);
let RemoveSeerStorePaymentMethodHandler = class RemoveSeerStorePaymentMethodHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { store_id, correlationId, payment_method_id } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            if (!storeAggregate.isPaymentMethodExists(payment_method_id)) {
                await this.eventstoreService.publishException(new store_payment_method_not_found_exception_1.SeerStorePaymentMethodNotFoundException({
                    data: {
                        id: store_id,
                        paymentMethodId: payment_method_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.removeSeerStorePaymentMethod(correlationId, payment_method_id);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
RemoveSeerStorePaymentMethodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(remove_seer_store_payment_method_command_1.RemoveSeerStorePaymentMethodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], RemoveSeerStorePaymentMethodHandler);
exports.RemoveSeerStorePaymentMethodHandler = RemoveSeerStorePaymentMethodHandler;


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveSeerStorePaymentMethodCommand = void 0;
class RemoveSeerStorePaymentMethodCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.RemoveSeerStorePaymentMethodCommand = RemoveSeerStorePaymentMethodCommand;


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReviewPointHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const update_review_point_command_1 = __webpack_require__(53);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
let UpdateReviewPointHandler = class UpdateReviewPointHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { store_id, review_point, correlationId } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.updateReviewPoint(correlationId, review_point);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
UpdateReviewPointHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_review_point_command_1.UpdateReviewPointCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], UpdateReviewPointHandler);
exports.UpdateReviewPointHandler = UpdateReviewPointHandler;


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReviewPointCommand = void 0;
class UpdateReviewPointCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.UpdateReviewPointCommand = UpdateReviewPointCommand;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStoreRecommendHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const update_seer_store_recommend_command_1 = __webpack_require__(55);
const store_seer_repository_1 = __webpack_require__(19);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
let UpdateSeerStoreRecommendHandler = class UpdateSeerStoreRecommendHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { recommended, store_id, correlationId } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.updateSeerStoreRecommend(correlationId, recommended);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
UpdateSeerStoreRecommendHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_seer_store_recommend_command_1.UpdateSeerStoreRecommendCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], UpdateSeerStoreRecommendHandler);
exports.UpdateSeerStoreRecommendHandler = UpdateSeerStoreRecommendHandler;


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStoreRecommendCommand = void 0;
class UpdateSeerStoreRecommendCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.UpdateSeerStoreRecommendCommand = UpdateSeerStoreRecommendCommand;


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStoreHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const update_seer_store_command_1 = __webpack_require__(57);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
let UpdateSeerStoreHandler = class UpdateSeerStoreHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { contact, profile, store_id, correlationId, shipping_method, video } = command;
        let storeSeerAggregate;
        try {
            storeSeerAggregate = await this.storeRepository.get(store_id);
            if (!storeSeerAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeSeerAggregate.updateSeerStore(correlationId, profile, contact, shipping_method, video);
            await this.storeRepository.save(storeSeerAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
UpdateSeerStoreHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_seer_store_command_1.UpdateSeerStoreCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], UpdateSeerStoreHandler);
exports.UpdateSeerStoreHandler = UpdateSeerStoreHandler;


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStoreCommand = void 0;
class UpdateSeerStoreCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.UpdateSeerStoreCommand = UpdateSeerStoreCommand;


/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSeerStoreHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const create_seer_store_command_1 = __webpack_require__(59);
const eventstore_1 = __webpack_require__(8);
const store_already_exists_for_owner_exception_1 = __webpack_require__(60);
const store_sanitizer_1 = __webpack_require__(61);
let CreateSeerStoreHandler = class CreateSeerStoreHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { profile, payment_method, owner, contact, correlationId, shipping_method, active, video } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.create();
            if (await this.storeRepository.isSeerStoreExistForOwner(owner)) {
                await this.eventstoreService.publishException(new store_already_exists_for_owner_exception_1.SeerStoreAlreadyExistsForOwnerException({
                    data: {
                        owner,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.createSeerStore(correlationId, store_sanitizer_1.SeerStoreSanitizer.sanitizeContact(contact), store_sanitizer_1.SeerStoreSanitizer.sanitizeProfile(profile), owner, store_sanitizer_1.SeerStoreSanitizer.sanitizePaymentMethods(payment_method), shipping_method, active, store_sanitizer_1.SeerStoreSanitizer.sanitizeVideo(video));
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log('|CreateSeerStoreHandler|' + e.message);
        }
    }
};
CreateSeerStoreHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_seer_store_command_1.CreateSeerStoreCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], CreateSeerStoreHandler);
exports.CreateSeerStoreHandler = CreateSeerStoreHandler;


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSeerStoreCommand = void 0;
class CreateSeerStoreCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.CreateSeerStoreCommand = CreateSeerStoreCommand;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreAlreadyExistsForOwnerException = exports.SeerStoreAlreadyExistsForOwnerExceptionData = void 0;
class SeerStoreAlreadyExistsForOwnerExceptionData {
    constructor() {
        this.message = 'SeerStore already exists for owner';
    }
}
exports.SeerStoreAlreadyExistsForOwnerExceptionData = SeerStoreAlreadyExistsForOwnerExceptionData;
class SeerStoreAlreadyExistsForOwnerException {
    constructor(payload) {
        Object.assign(this, Object.assign(Object.assign({}, payload), { type: `seerStore.alreadyExistsForOwner` }));
    }
}
exports.SeerStoreAlreadyExistsForOwnerException = SeerStoreAlreadyExistsForOwnerException;


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeerStoreSanitizer = void 0;
class SeerStoreSanitizer {
    static sanitizePaymentMethods(payload) {
        if (!payload) {
            return [];
        }
        return payload;
    }
    static sanitizeVideo(payload) {
        if (!payload) {
            return [];
        }
        return payload;
    }
    static sanitizePaymentMethod(payload) {
        if (!payload) {
            return {};
        }
        return payload;
    }
    static sanitizeContact(payload) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!payload) {
            return {
                display_phone_number: '',
                email: '',
                facebook_name: '',
                facebook_url: '',
                instagram_name: '',
                instagram_url: '',
                line_id: '',
                line_url: '',
                phone_number: '',
            };
        }
        return {
            display_phone_number: (_a = payload.display_phone_number) !== null && _a !== void 0 ? _a : '',
            email: (_b = payload.email) !== null && _b !== void 0 ? _b : '',
            facebook_name: (_c = payload.facebook_name) !== null && _c !== void 0 ? _c : '',
            facebook_url: (_d = payload.facebook_url) !== null && _d !== void 0 ? _d : '',
            instagram_name: (_e = payload.instagram_name) !== null && _e !== void 0 ? _e : '',
            instagram_url: (_f = payload.instagram_url) !== null && _f !== void 0 ? _f : '',
            line_id: (_g = payload.line_id) !== null && _g !== void 0 ? _g : '',
            line_url: (_h = payload.line_url) !== null && _h !== void 0 ? _h : '',
            phone_number: (_j = payload.phone_number) !== null && _j !== void 0 ? _j : '',
        };
    }
    static sanitizeProfile(payload) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!payload) {
            return {
                name: '',
                slug: '',
                address: {
                    line1: '',
                    line2: '',
                    subdistrict: '',
                    district: '',
                    province: '',
                    country: '',
                    zipCode: ''
                },
                banner_url: [],
                logo_url: '',
                description: '',
                portfolio: '',
                service_rate: ''
            };
        }
        return {
            name: (_a = payload.name) !== null && _a !== void 0 ? _a : '',
            slug: (_b = payload.slug) !== null && _b !== void 0 ? _b : '',
            address: (_c = payload.address) !== null && _c !== void 0 ? _c : {
                line1: '',
                line2: '',
                subdistrict: '',
                district: '',
                province: '',
                country: '',
                zipCode: ''
            },
            banner_url: payload.banner_url.length > 0 ? payload.banner_url : [],
            logo_url: (_d = payload.logo_url) !== null && _d !== void 0 ? _d : '',
            description: (_e = payload.description) !== null && _e !== void 0 ? _e : '',
            portfolio: (_f = payload.portfolio) !== null && _f !== void 0 ? _f : '',
            service_rate: (_g = payload.service_rate) !== null && _g !== void 0 ? _g : ''
        };
    }
}
exports.SeerStoreSanitizer = SeerStoreSanitizer;


/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStoreActiveHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const update_seer_store_active_command_1 = __webpack_require__(63);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
let UpdateSeerStoreActiveHandler = class UpdateSeerStoreActiveHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { store_id, active, correlationId } = command;
        let storeAggregate;
        try {
            storeAggregate = await this.storeRepository.get(store_id);
            if (!storeAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeAggregate.updateActive(active, correlationId);
            await this.storeRepository.save(storeAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
UpdateSeerStoreActiveHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_seer_store_active_command_1.UpdateSeerStoreActiveCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], UpdateSeerStoreActiveHandler);
exports.UpdateSeerStoreActiveHandler = UpdateSeerStoreActiveHandler;


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSeerStoreActiveCommand = void 0;
class UpdateSeerStoreActiveCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.UpdateSeerStoreActiveCommand = UpdateSeerStoreActiveCommand;


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResubmitSeerStorePaymentMethodHandler = void 0;
const cqrs_1 = __webpack_require__(12);
const store_seer_repository_1 = __webpack_require__(19);
const resubmit_seer_store_payment_method_command_1 = __webpack_require__(65);
const eventstore_1 = __webpack_require__(8);
const store_not_found_exception_1 = __webpack_require__(40);
const store_payment_method_not_found_exception_1 = __webpack_require__(41);
let ResubmitSeerStorePaymentMethodHandler = class ResubmitSeerStorePaymentMethodHandler {
    constructor(storeRepository, eventstoreService) {
        this.storeRepository = storeRepository;
        this.eventstoreService = eventstoreService;
    }
    async execute(command) {
        const { payment_method, store_id, correlationId, payment_method_id } = command;
        let storeSeerAggregate;
        try {
            storeSeerAggregate = await this.storeRepository.get(store_id);
            if (!storeSeerAggregate) {
                await this.eventstoreService.publishException(new store_not_found_exception_1.SeerStoreNotFoundException({
                    data: {
                        id: store_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            if (!storeSeerAggregate.isPaymentMethodExists(payment_method_id)) {
                await this.eventstoreService.publishException(new store_payment_method_not_found_exception_1.SeerStorePaymentMethodNotFoundException({
                    data: {
                        id: store_id,
                        paymentMethodId: payment_method_id,
                    },
                    metadata: {
                        timestamp: Date.now(),
                        $correlationId: command.correlationId,
                    },
                }));
                return;
            }
            storeSeerAggregate.resubmitSeerStorePaymentMethod(correlationId, Object.assign({}, payment_method), payment_method_id);
            await this.storeRepository.save(storeSeerAggregate, correlationId);
        }
        catch (e) {
            console.log(e);
        }
    }
};
ResubmitSeerStorePaymentMethodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(resubmit_seer_store_payment_method_command_1.ResubmitSeerStorePaymentMethodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof store_seer_repository_1.SeerStoreRepository !== "undefined" && store_seer_repository_1.SeerStoreRepository) === "function" ? _a : Object, typeof (_b = typeof eventstore_1.EventstoreService !== "undefined" && eventstore_1.EventstoreService) === "function" ? _b : Object])
], ResubmitSeerStorePaymentMethodHandler);
exports.ResubmitSeerStorePaymentMethodHandler = ResubmitSeerStorePaymentMethodHandler;


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResubmitSeerStorePaymentMethodCommand = void 0;
class ResubmitSeerStorePaymentMethodCommand {
    constructor(payload) {
        Object.assign(this, payload);
    }
}
exports.ResubmitSeerStorePaymentMethodCommand = ResubmitSeerStorePaymentMethodCommand;


/***/ }),
/* 66 */
/***/ ((module) => {

module.exports = require("fs/promises");;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
}
bootstrap();

})();

/******/ })()
;