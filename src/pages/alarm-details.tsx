import React, { useState, useRef } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonIcon,
  IonButton,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { text, pencilOutline } from 'ionicons/icons';
import './alarm-details.css';

const AlarmDetails: React.FC = () => {
  const [alarmName, setAlarmName] = useState<string>();

  const alarmNameRef = useRef<HTMLIonInputElement>(null);

  const handleTextChange = () => {
    setAlarmName(alarmNameRef.current!.value! + '');
  };

  const toggleEditableAlarmName = () => {
    alarmNameRef.current?.setFocus();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <div className="alarmEditableName">
            <IonInput
              type='text'
              inputMode='text'
              placeholder={alarmName}
              ref={alarmNameRef}
              onIonChange={handleTextChange}
              clearInput
            ></IonInput>
            <IonButton onClick={toggleEditableAlarmName}>
              <IonIcon slot='icon-only' icon={pencilOutline}></IonIcon>
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name='Alarm Details' />
      </IonContent>
    </IonPage>
  );
};

export default AlarmDetails;
