import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { baseDato } from '../Firebase/firebaseConfig';
import { useForm } from '../Hooks/useForm';

const TraerAPi = () => {
    let [values, handleInputChange, reset] = useForm({
        api: '',
        vueltas: '',
    })
    const { api, vueltas } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        cargarApi(api, vueltas)
        reset()
    }

    const cargarApi = async (api, vueltas) => {
        
        console.log(api, vueltas)
        for (let i = 0; i < vueltas; i++) {
            const resp = await fetch(api)
            const data = await resp.json()
            enviarDatos(data.results)
            console.log(data)
        }

    }
    const enviarDatos = (data) => {
        
        data.forEach(card => {
            const { id, name, image, status, species } = card
           
            //asignar lo que me traigo de la api y lo envio a la collection de firebase
            const desdeApi = {
                name: name,
                image: image,
                status: status,
                species: species,
                documento: id,
            }
            
            addDoc(collection(baseDato, "Otra"), desdeApi)
                .then(resp => {
                  console.log('Datos agregados a Firestore Database')
                })
                .catch(error => {
                   console.log(error)
                })

        })
    }
    return (
        <div>
            <h1>Enviar a firebase</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Planta</Form.Label>
                    <Form.Control type="text" name="api" placeholder="url de la api" value={api} onChange={handleInputChange} />

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="number" name="vueltas" placeholder="numero de veces agregar" value={vueltas} onChange={handleInputChange} />


                </Form.Group>

                <Button type="submit">
                    Agregar
                </Button>

            </Form>

        </div>
    );
};

export default TraerAPi;