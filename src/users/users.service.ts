import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/user.interface";

 @Injectable()

 export class UserServices{

    private _empleados:User[] = [];
    constructor(){
        this._empleados = [
            {id: 1, nombre: "Sebastian", cargo: "Programador"},
            {id: 2, nombre: "Sebastian2", cargo: "Programador2"},
            {id: 3, nombre: "Sebastian3", cargo: "Programador3"},
            {id: 4, nombre: "Sebastian4", cargo: "Programador4"},
            {id: 5, nombre: "Sebastian5", cargo: "Programador5"},
        ]
    }

    traerEmpleados():User[]{
        if (this._empleados.length === 0) {
            console.log('No hay empleados todavia.');
            return []
        }
        return this._empleados
    }

    agregarEmpleado(data: { id: number, nombre: string, cargo: string}):User{
        this._empleados.push(data)
        return data
    }

    borrarEmpleado(id:number):User[]{
       const eliminando = this._empleados.findIndex(item => item.id == id)
        return this._empleados.splice(eliminando, 1);
    }

    actualizarEmpledo(id: number, data: User){
        const usuario = this._empleados.findIndex(item => item.id == id);
        const eliminar = this._empleados[usuario] = data
        return eliminar;
    }
}