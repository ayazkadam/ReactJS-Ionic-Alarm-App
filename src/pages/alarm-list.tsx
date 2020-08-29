import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './alarm-list.css';
import AlarmList from '../components/alarm-list.component';
import { add } from 'ionicons/icons';

const alarm_list: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary' className='ion-padding'>
          <IonTitle size='large' className='ion-margin-top'>
            Alarms
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name='Tab 1 page' />
        <AlarmList></AlarmList>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton routerLink='/createAlarm'>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default alarm_list;
