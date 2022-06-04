// import { ServerResponse } from 'http';

// export {};

// declare global {

//   interface Req {
//     base: string;
//     routePath: string;
//     path: string;
//     url: string;
//     method: string;
//     body: any;
//     params: Map<string, string>;
//   }

//   interface Res {
//     res: ServerResponse;
//     setSecurityHeaders: Function;
//     getMimes: Function;
//     sendFile: Function;
//     send: Function;
//     json: Function;
//     status: Function;
//   }

//   interface Route {
//     path: string;
//     middleware: Function[];
//     callback: Function;
//     constructRoute: Function;
//   }

//   interface ConstructedRoute {
//     method: string;
//     path: string;
//     callback: Function;
//     middleware: Function[];
//   }
  
//   interface Router {
//     path: string | RegExp;
//     routes: Map<string, Route>;
//     routers: Map<string, Router>;
//     getPath: Function;
//     setPath: Function;
//     useRouter: Function;
//     findRouter: Function;
//     addRoute: Function;
//     executeMiddleware: Function;
//     seekAndExecuteRoute: Function;
//   }

// }