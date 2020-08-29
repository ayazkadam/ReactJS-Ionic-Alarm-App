import React from 'react';
import './alarm-list.component.css';
import { IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import Alarm from './alarm.component';
import { gameController } from 'ionicons/icons';

const AlarmList: React.FC = () => {
  return (
    <IonList lines='none'>
      <IonItemSliding>
        <IonItemOptions>
          <IonItemOption
            onClick={() => console.log('favorite clicked')}
          >
            <IonIcon icon={gameController} slot='icon-only'></IonIcon>
          </IonItemOption>
          <IonItemOption
            color='danger'
            onClick={() => console.log('share clicked')}
          >
            <IonIcon
              icon={gameController}
              slot='icon-only'
            ></IonIcon>
          </IonItemOption>
        </IonItemOptions>
        <IonItem>
          <Alarm>Alarm 1</Alarm>
        </IonItem>
      </IonItemSliding>
    </IonList>
  );
};

export default AlarmList;
