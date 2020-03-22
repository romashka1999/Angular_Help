import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterseptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing Request');
        console.log(req.url);
        return next.handle(req).pipe(tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Response) {
                console.log('response arrived , body data is', event.body);
            }
        }));;
    }
}