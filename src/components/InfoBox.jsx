import React, { useEffect, useState } from 'react';
import moment from 'moment';
const InfoBox = (props) => {
    const item = props.item; 
    const date = moment(props.item.estimate_payment_date).format("YYYY/MM/DD");
    if(item.erga?.name)
      {

    return(
        <div className='box'>
                <center style={{fontSize:"30px",fontWeight:"bold"}}> <strong> {props.item.title} details</strong></center>
              
                <strong> ονομα εργου:</strong>{props.item.erga.name}<br/>
                <strong> Συνολικο ποσο:</strong>{props.item.ammount_total} €<br/>
                <strong> Εκτιμωμενη ημερομηνια πληρωμης:</strong>{date}<br/> 
                <strong> Ποσοστο:</strong>{props.item.percentage} <br/>
                <strong> Αρχικο ποσο:</strong>{props.item.ammount} € <br/>
                <strong> Ποσο VAT:</strong>{props.item.ammount_vat} € <br/>
          </div>
    )
  }
  else
  {
      const bank_date = moment(props.item.Ekxorimena_Timologium.bank_date).format("YYYY/MM/DD");
      const cust_date = moment(props.item.Ekxorimena_Timologium.cust_date).format("YYYY/MM/DD");
      return(
        <div className='box'>
                <center style={{fontSize:"30px",fontWeight:"bold"}}> <strong> Εκχωρημένο Τιμολογιο details</strong></center>

                <strong> Τίτλος Παραδοτέου:</strong>{props.item.paradotea.title}<br/>

                <strong> Όνομα Έργου:</strong>{props.item.paradotea.erga.name}<br/>
                <strong> Συνολικό Ποσό Τράπεζας:</strong>{props.item.Ekxorimena_Timologium.bank_ammount} €<br/>
                <strong> Ημερομηνία Πληρωμής Τράπεζας:</strong>{bank_date}<br/> 
                <strong> Συνολικό Ποσό Πελάτη:</strong>{props.item.Ekxorimena_Timologium.customer_ammount} €<br/>
                <strong> Ημερομηνία Πληρωμής Πελάτη:</strong>{cust_date}  <br/>
          </div>
    )
  }
    
  };
  
  export default InfoBox;