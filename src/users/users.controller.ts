import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserServices } from "./users.service";
import { User } from "./interfaces/user.interface";

@Controller()


export class UsersController{
    constructor(private userService: UserServices){}

    @Post('agregar')
    agregarEmpleado(@Body() data:User):User{
        console.log('Esto es agregar empleado');
        return this.userService.agregarEmpleado(data)
    }

    @Get('traer')
    traerEmpleados():User[]{
        console.log('Esto es traer empleado');
        return this.userService.traerEmpleados()
    }

    @Delete('borrar/:id')
    borrarEmpleado( @Param('id') id:number ):User[]{
        return this.userService.borrarEmpleado(id)
    }

    @Patch('actualizar/:id')
    actualizarEmpledo(@Param('id') id:number, @Body() data: User):User{
        return this.userService.actualizarEmpledo(id, data);
        
    }

}