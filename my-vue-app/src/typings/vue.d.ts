
// // import { VueCookies } from "./vue-cookie";

// // declare module "vue/types/vue" {
// //   interface Vue {
// //     $cookie: any;
// //   }

// //   interface VueConstructor {
// //     $cookie: any;
// //   }
// // }

// interface VueCookies {
//   /**
//    * Set global config
//    */
//   config(expireTimes: string | number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: string): void;

//   /**
//    * Set a cookie
//    */
//   set(keyName: string, value: any, expireTimes?: string | number | Date,
//     path?: string, domain?: string, secure?: boolean, sameSite?: string): this;

//   /**
//    * Get a cookie
//    */
//   get(keyName: string): any;

//   /**
//    * Remove a cookie
//    */
//   remove(keyName: string, path?: string, domain?: string): this;

//   /**
//    * Exist a cookie name
//    */
//   isKey(keyName: string): boolean;

//   /**
//    * Get All cookie name
//    */
//   keys(): string[];
// }

// declare module "vue/types/vue" {
//   export interface Vue{
//     $cookie: any;
//     install: any
//   }
//   export interface ComponentCustomProperties {
//     $cookie: any;
//     install: any
//   }
//   export interface VueConstructor {
//     $cookie: any;
//   }
// }
  