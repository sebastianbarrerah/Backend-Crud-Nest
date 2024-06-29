import { Injectable } from "@nestjs/common";

@Injectable()

export class AppService {
    mensajeNuevo():string {
        return 'Esta es la primer parte de la pagina la que corresponde al edpoint con el /'
    }
}

