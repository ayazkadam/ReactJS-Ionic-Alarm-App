import React from 'react';
import './alarm.component.css';
import { IonCard, IonCardContent } from '@ionic/react';

const Alarm: React.FC = (props) => {
  return (
    <IonCard routerLink='/alarmDetails' routerDirection='forward' id='container'>
      <IonCardContent id='rounded'>{props.children}</IonCardContent>
    </IonCard>
  );
};

export default Alarm;
