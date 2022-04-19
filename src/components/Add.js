import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FileUp } from '../helpers/FileUp';
import { useForm } from '../Hooks/useForm';
import { addAsync } from '../redux/actions/actionPlantas';
import List from './List';

const Add = () => {
    
    const dispatch = useDispatch()
    const  [values, handleInputChange, reset]=  useForm({
        nombre:'',
        codigo: '',
        descripcion: '',
        tipo: '',
        precio: '',
        foto: ''
        
    })
  
    const {nombre, codigo, descripcion, tipo, precio, foto} = values
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(values)
        dispatch(addAsync(values))
         reset()
    }

    const handleFileChange=(e)=>{
       const file = e.target.files[0]
       console.log(file)
       //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
            FileUp(file)
            .then(resp=>{
               values.foto = resp
                console.log(resp)
            })
            .catch(error =>{
                console.warn(error)
            })
    

    }

    return (
        <div>
             <Form onSubmit={handleSubmit} margin={50}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Planta</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="descripcion" placeholder="Enter descripcion" value={descripcion} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Tipo</Form.Label>
                    <Form.Control type="text" name="tipo" placeholder="Tipo" value={tipo} onChange={handleInputChange} />

                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" placeholder="El precio en Pesos Colomb iano" value={precio} onChange={handleInputChange} />
                

                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="foto" placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button type="submit">
                    <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' />
                </Button>
             
            </Form>

            <List/>
        </div>
    );
};

export default Add;