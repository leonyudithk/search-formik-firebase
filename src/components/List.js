import React, { useEffect, useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, listAsyn } from '../redux/actions/actionPlantas';
import Edit from './Edit';

const List = () => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { plantas } = useSelector(store => store.plantas)

    useEffect(() => {
        dispatch(listAsyn())
    }, [])

    const editar = (codigo) => {
        //--------t=conseguir los datos de ese objeto con ese codigo--------------//
        const traerLaPlanta = plantas.find(t => t.codigo === codigo)

        setModal(true)
        setEnviarDatosModal(traerLaPlanta)


    }

    return (
        <div>
            <Table>
                <thead>
                </thead>
                <tbody>
                    {
                        plantas.map((p, index) => (
                            <tr key={index}>
                                <td>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: p.foto
                                        },
                                        largeImage: {
                                            src: p.foto,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </td>
                                <td>{p.nombre}</td>
                                <td>{p.codigo}</td>
                                <td>{p.tipo}</td>
                                <td>{p.precio}</td>
                                <td>
                                    <Button margin={10} onClick={() => dispatch(deleteAsync(p.codigo))}> <Image onClick={() => dispatch(deleteAsync(p.codigo))} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png' /> </Button>

                                    <Button margin={10} onClick={() => editar(p.codigo)}> <Image onClick={() => editar(p.codigo)} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015685/edit_nh7sll.png' /></Button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            {
                modal === true ? <Edit modal={enviarDatosModal} setModal={setModal}/> : ''
            }
        </div>
    );
};

export default List;