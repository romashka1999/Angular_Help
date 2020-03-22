import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modiFiedRequest = req.clone({
            headers: req.headers.append("Authorization", "tokenn")
        })
        console.log('auth interceptor '); 
        return next.handle(modiFiedRequest);
    }
}