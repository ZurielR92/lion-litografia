import Image from 'next/image'
import { ChangeEvent, ChangeEventHandler, FC, useState, useRef } from 'react';

import styles from './ProductCard.module.css'
import { productPriceConfigInterface, priceType } from '../../../interfaces/productsInterface';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    img: string
    altImg: string
    title: string
    shortDescription: string
    priceConfig: productPriceConfigInterface
}

export const ProductCard:FC<Props> = ( { img, altImg, title, shortDescription, priceConfig } ) => {

  const selector = useRef<HTMLSelectElement>(null);


  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [quantity, setQuantity] = useState('0');
  const [width, setWidth] = useState('0');
  const [height, setHeight] = useState('0');
  const [message, setMessage] = useState('Initial State');



  const handleSendToWhatsapp = () => {

    switch (priceConfig.priceType) {
      case 'Precio Fijo':
        window.open(
          `https://api.whatsapp.com/send?phone=573017497431&text=Hola!%20estoy%20estoy%20interesado%20en:%0A${selector.current?.value}%20${title}`,'_blank'
          )
        break;

      case 'Precio por Cm2':
        window.open(
          `https://api.whatsapp.com/send?phone=573017497431&text=Hola!%20estoy%20estoy%20interesado%20en:%0A${quantity === '0' ? '1' : quantity}%20${title}%20de%20${width}x${height}cm`,'_blank'
          )
        break;
    
      default:
        break;
    }



  }




  const handleChangeWidth = (e:ChangeEvent<HTMLInputElement>) => {
    if ( quantity === '' && width === '0' && height > '0' ) {
      setQuantity('1');
    }
    setWidth(e.target.value);
  }

  const handleChangeHeight = (e:ChangeEvent<HTMLInputElement>) => {
    if ( quantity === '' && width === '0' && height === '0' ) {
      setQuantity('1');
    };
    setHeight(e.target.value);
  }




  const notImage:string = '/img/products/not-image.png'

  return (
    <div className={styles.card}>
        <div className={styles['img-box']}>
            <Image src={img === '' ? notImage:img} width={370} height={270} alt={altImg}/>
        </div>
        <h3>{title}</h3>
        <p>
            {shortDescription}
        </p>

        {
          priceConfig.priceType === 'Precio Fijo' ? (
            
            <div className={styles['container-selector']}>
              <label htmlFor="#select-quantity">Selecciona la Cantidad</label>
              <select ref={selector} name="" id="select-quantity">
                {
                  priceConfig.quantities?.map(option => {
                    return (
                    <option key={option} value={option}>{option}</option>
                    )
                  })
                }
              </select>
            </div>

          ):(
            <div className={ styles['container-form'] } >

              <label htmlFor="#Quantity">Cantidad</label>
              <label htmlFor="#Quantity">Ancho</label>
              <label htmlFor="#Quantity">Alto</label>

              <input 
                value={quantity}
                onChange={e => setQuantity(e.target.value) }
                type="number" 
                name="Quantity" 
                id="Quantity" 
              />
              <input 
                value={width}
                onChange={handleChangeWidth}
                type="number" 
                name="" 
                id="" 
              />
              <input 
                value={height}
                onChange={handleChangeHeight}
                type="number" 
                name="" 
                id="" 
              />
            </div>
          )
        }

        <div className={styles['container-buttons']}>

          <button className={styles['button-4']} role="button">Agregar a Presupuesto</button>


          <button onClick={handleSendToWhatsapp} className={styles['button-3']} role="button">PEDIR AL WHATSAPP</button>

        </div>

    </div>
  )
}
